import threading
import time

from typing import Optional, List, Tuple, Union

from platypush.plugins import action
from platypush.plugins.camera import CameraPlugin, Camera

from .model import PiCameraInfo, PiCamera


class CameraPiLegacyPlugin(CameraPlugin):
    """
    Plugin to control a Pi camera over the legacy ``picamera`` module.

    .. warning::
        This plugin is **DEPRECATED**, as it relies on the old ``picamera`` module.
        Recent operating systems should probably use the
        :class:`platypush.plugins.camera.pi.CameraPiPlugin` plugin instead, or
        the generic v4l2 driver through
        :class:`platypush.plugins.camera.ffmpeg.FfmpegCameraPlugin` or
        :class:`platypush.plugins.camera.gstreamer.GStreamerCameraPlugin`.

    """

    _camera_class = PiCamera
    _camera_info_class = PiCameraInfo

    def __init__(
        self,
        device: int = 0,
        fps: float = 30.0,
        warmup_seconds: float = 2.0,
        sharpness: int = 0,
        contrast: int = 0,
        brightness: int = 50,
        video_stabilization: bool = False,
        iso: int = 0,
        exposure_compensation: int = 0,
        exposure_mode: str = 'auto',
        meter_mode: str = 'average',
        awb_mode: str = 'auto',
        image_effect: str = 'none',
        led_pin: Optional[int] = None,
        color_effects: Optional[Union[str, List[str]]] = None,
        zoom: Tuple[float, float, float, float] = (0.0, 0.0, 1.0, 1.0),
        **camera
    ):
        """
        :param device: Camera device number (default: 0). Only supported on
            devices with multiple camera slots.
        :param fps: Frames per second (default: 30.0).
        :param warmup_seconds: Seconds to wait for the camera to warm up
            before taking a photo (default: 2.0).
        :param sharpness: Sharpness level, as an integer between -100 and 100.
        :param contrast: Contrast level, as an integer between -100 and 100.
        :param brightness: Brightness level, as an integer between 0 and 100.
        :param video_stabilization: Enable video stabilization (default: False).
        :param iso: ISO level (default: 0).
        :param exposure_compensation: Exposure compensation level, as an
            integer between -25 and 25.
        :param exposure_mode: Exposure mode. Allowed values:

            - ``off``
            - ``auto`` (default)
            - ``night``
            - ``nightpreview``
            - ``backlight``
            - ``spotlight``
            - ``sports``
            - ``snow``
            - ``beach``
            - ``verylong``
            - ``fixedfps``
            - ``antishake``
            - ``fireworks``

        :param meter_mode: Metering mode used for the exposure. Allowed values:

            - ``average`` (default)
            - ``spot``
            - ``backlit``
            - ``matrix``

        :param awb_mode: Auto white balance mode. Allowed values:

            - ``off``
            - ``auto`` (default)
            - ``sunlight``
            - ``cloudy``
            - ``shade``
            - ``tungsten``
            - ``fluorescent``
            - ``incandescent``
            - ``flash``
            - ``horizon``

        :param image_effect: Image effect applied to the camera. Allowed values:

            - ``none`` (default)
            - ``negative``
            - ``solarize``
            - ``sketch``
            - ``denoise``
            - ``emboss``
            - ``oilpaint``
            - ``hatch``
            - ``gpen``
            - ``pastel``
            - ``watercolor``
            - ``film``
            - ``blur``
            - ``saturation``
            - ``colorswap``
            - ``washedout``
            - ``posterise``
            - ``colorpoint``
            - ``colorbalance``
            - ``cartoon``
            - ``deinterlace1``
            - ``deinterlace2``

        :param led_pin: LED PIN number, if the camera LED is wired to a GPIO
            PIN and you want to control it.
        :param zoom: Camera zoom, in the format ``(x, y, width, height)``
            (default: ``(0.0, 0.0, 1.0, 1.0)``).
        :param camera: Options for the base camera plugin (see
            :class:`platypush.plugins.camera.CameraPlugin`).
        """
        super().__init__(
            device=device, fps=fps, warmup_seconds=warmup_seconds, **camera
        )

        self.camera_info.sharpness = sharpness  # type: ignore
        self.camera_info.contrast = contrast  # type: ignore
        self.camera_info.brightness = brightness  # type: ignore
        self.camera_info.video_stabilization = video_stabilization  # type: ignore
        self.camera_info.iso = iso  # type: ignore
        self.camera_info.exposure_compensation = exposure_compensation  # type: ignore
        self.camera_info.meter_mode = meter_mode  # type: ignore
        self.camera_info.exposure_mode = exposure_mode  # type: ignore
        self.camera_info.awb_mode = awb_mode  # type: ignore
        self.camera_info.image_effect = image_effect  # type: ignore
        self.camera_info.color_effects = color_effects  # type: ignore
        self.camera_info.zoom = zoom  # type: ignore
        self.camera_info.led_pin = led_pin  # type: ignore

    def prepare_device(self, device: PiCamera):
        import picamera

        camera = picamera.PiCamera(
            camera_num=device.info.device,
            resolution=device.info.resolution,
            framerate=device.info.fps,
            led_pin=device.info.led_pin,
        )

        camera.hflip = device.info.horizontal_flip
        camera.vflip = device.info.vertical_flip
        camera.sharpness = device.info.sharpness
        camera.contrast = device.info.contrast
        camera.brightness = device.info.brightness
        camera.video_stabilization = device.info.video_stabilization
        camera.iso = device.info.iso
        camera.exposure_compensation = device.info.exposure_compensation
        camera.exposure_mode = device.info.exposure_mode
        camera.meter_mode = device.info.meter_mode
        camera.awb_mode = device.info.awb_mode
        camera.image_effect = device.info.image_effect
        camera.color_effects = device.info.color_effects
        camera.rotation = device.info.rotate or 0
        camera.zoom = device.info.zoom

        return camera

    def release_device(self, device: PiCamera):
        import picamera

        if device.object:
            try:
                device.object.stop_recording()
            except (ConnectionError, picamera.PiCameraNotRecording):
                pass

        if device.object and not device.object.closed:
            try:
                device.object.close()
            except (ConnectionError, picamera.PiCameraClosed):
                pass

    def capture_frame(self, camera: Camera, *args, **kwargs):
        import numpy as np
        from PIL import Image

        shape = (
            camera.info.resolution[1] + (camera.info.resolution[1] % 16),
            camera.info.resolution[0] + (camera.info.resolution[0] % 32),
            3,
        )

        frame = np.empty(shape, dtype=np.uint8)
        camera.object.capture(frame, 'rgb')
        return Image.fromarray(frame)

    def start_preview(self, camera: Camera):
        """
        Start camera preview.
        """
        camera.object.start_preview()

    def stop_preview(self, camera: Camera):
        """
        Stop camera preview.
        """
        try:
            camera.object.stop_preview()
        except Exception as e:
            self.logger.warning(str(e))

    @action
    def capture_preview(
        self, duration: Optional[float] = None, n_frames: Optional[int] = None, **camera
    ) -> dict:
        camera = self.open_device(**camera)
        self.start_preview(camera)

        if n_frames:
            duration = n_frames * (camera.info.fps or 0)
        if duration:
            threading.Timer(duration, lambda: self.stop_preview(camera))

        return self.status()

    def streaming_thread(
        self, camera: PiCamera, stream_format: str, duration: Optional[float] = None
    ):
        server_socket = self._prepare_server_socket(camera)
        sock = None
        streaming_started_time = time.time()
        self.logger.info(
            'Starting streaming on port {}'.format(camera.info.listen_port)
        )

        try:
            while camera.stream_event.is_set():
                if duration and time.time() - streaming_started_time >= duration:
                    break

                sock = self._accept_client(server_socket)
                if not sock:
                    continue

                if camera.object is None or camera.object.closed:
                    camera = self.open_device(**camera.info.to_dict())

                try:
                    camera.object.start_recording(sock, format=stream_format)
                    while camera.stream_event.is_set():
                        camera.object.wait_recording(1)
                except ConnectionError:
                    self.logger.info('Client closed connection')
                finally:
                    if sock:
                        try:
                            sock.close()
                        except Exception as e:
                            self.logger.warning(
                                'Error while closing client socket: {}'.format(str(e))
                            )

                    self.close_device(camera)
        finally:
            self._cleanup_stream(camera, server_socket, sock)
            self.logger.info('Stopped camera stream')

    @action
    def start_streaming(
        self, duration: Optional[float] = None, stream_format: str = 'h264', **camera
    ) -> dict:
        camera = self.open_device(stream_format=stream_format, **camera)
        return self._start_streaming(camera, duration, stream_format)


# vim:sw=4:ts=4:et:
