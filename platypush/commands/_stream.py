from multiprocessing import Queue
import os
from queue import Empty
import socket
import tempfile
from typing import Optional
from typing_extensions import override

from platypush.process import ControllableProcess

from ._base import Command
from ._reader import CommandReader
from ._writer import CommandWriter


class CommandStream(ControllableProcess):
    """
    The command stream is an abstraction built around a UNIX socket that allows
    the application to communicate commands to its controller.

    :param path: Path to the UNIX socket
    """

    _max_queue_size = 100
    """Maximum number of commands that can be queued in the stream."""

    _default_sock_path = tempfile.gettempdir() + '/platypush-cmd-stream.sock'
    """Default path to the UNIX socket."""

    _close_timeout = 5.0
    """Close the client socket after this amount of seconds."""

    def __init__(self, path: Optional[str] = None):
        super().__init__(name='platypush:cmd:stream')
        self.path = os.path.abspath(os.path.expanduser(path or self._default_sock_path))
        self._sock: Optional[socket.socket] = None
        self._cmd_queue: Queue["Command"] = Queue()

    def reset(self):
        if self._sock is not None:
            try:
                self._sock.close()
            except socket.error:
                pass

            self._sock = None

        try:
            os.unlink(self.path)
        except FileNotFoundError:
            pass

        self._cmd_queue.close()
        self._cmd_queue = Queue()

    @override
    def close(self) -> None:
        self.reset()
        return super().close()

    def __enter__(self) -> "CommandStream":
        self.reset()
        sock = self._sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
        sock.bind(self.path)
        os.chmod(self.path, 0o600)
        sock.listen(1)
        self.start()
        return self

    def __exit__(self, *_, **__):
        self.terminate()
        self.join()
        self.close()

    def _serve(self, sock: socket.socket):
        """
        Serves the command stream.

        :param sock: Client socket to serve
        """
        reader = CommandReader()
        cmd = reader.read(sock)
        if cmd:
            self._cmd_queue.put_nowait(cmd)

    def read(self, timeout: Optional[float] = None) -> Optional[Command]:
        """
        Reads commands from the command stream.

        :param timeout: Maximum time to wait for a command.
        :return: The command that was received, if any.
        """
        try:
            return self._cmd_queue.get(timeout=timeout)
        except Empty:
            return None

    def write(self, cmd: Command) -> None:
        """
        Writes a command to the command stream.

        :param cmd: Command to write
        :raise AssertionError: If the command cannot be written
        """
        sock = self._sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
        try:
            sock.connect(self.path)
            self.logger.debug('Sending command: %s', cmd)
            CommandWriter().write(cmd, sock)
        except OSError as e:
            raise AssertionError(f'Unable to connect to socket {self.path}: {e}') from e
        finally:
            sock.close()

    @staticmethod
    def _close_client(sock: socket.socket):
        try:
            sock.close()
        except OSError:
            pass

    @override
    def main(self):
        while self._sock and not self.should_stop:
            sock = self._sock

            try:
                conn, _ = sock.accept()
            except ConnectionResetError:
                continue
            except KeyboardInterrupt:
                break

            try:
                self._serve(conn)
            except Exception as e:
                self.logger.warning('Unexpected socket error: %s', e, exc_info=True)
            finally:
                self._close_client(conn)
