import re
import threading
from typing import Collection, Optional, Union

from platypush.plugins import RunnablePlugin, action
from platypush.plugins.music import MusicPlugin

from ._conf import MpdConfig
from ._listener import MpdListener


class MusicMpdPlugin(MusicPlugin, RunnablePlugin):
    """
    This plugin allows you to interact with an MPD/Mopidy music server.

    `MPD <https://www.musicpd.org/>`_ is a flexible server-side
    protocol/application for handling music collections and playing music,
    mostly aimed to manage local libraries.

    `Mopidy <https://www.mopidy.com/>`_ is an evolution of MPD, compatible with
    the original protocol and with support for multiple music sources through
    plugins (e.g. Spotify, TuneIn, Soundcloud, local files etc.).

    .. note:: As of Mopidy 3.0 MPD is an optional interface provided by the
        ``mopidy-mpd`` extension. Make sure that you have the extension
        installed and enabled on your instance to use this plugin if you want to
        use it with Mopidy instead of MPD.

    """

    _client_lock = threading.RLock()

    def __init__(
        self,
        host: str,
        port: int = 6600,
        poll_interval: Optional[float] = 5.0,
        **kwargs,
    ):
        """
        :param host: MPD IP/hostname.
        :param port: MPD port (default: 6600).
        :param poll_interval: Polling interval in seconds. If set, the plugin
            will poll the MPD server for status updates and trigger change
            events when required. Default: 5 seconds.
        """
        super().__init__(poll_interval=poll_interval, **kwargs)
        self.conf = MpdConfig(host=host, port=port)
        self.client = None

    def _connect(self, n_tries: int = 2):
        import mpd

        with self._client_lock:
            if self.client:
                return self.client

            error = None
            while n_tries > 0:
                try:
                    n_tries -= 1
                    self.client = mpd.MPDClient()
                    self.client.connect(self.conf.host, self.conf.port)
                    return self.client
                except Exception as e:
                    error = e
                    self.logger.warning(
                        'Connection exception: %s%s',
                        e,
                        (': Retrying' if n_tries > 0 else ''),
                    )
                    self.wait_stop(0.5)

        self.client = None
        if error:
            raise error

        return self.client

    def _exec(self, method: str, *args, **kwargs):
        error = None
        n_tries = int(kwargs.pop('n_tries')) if 'n_tries' in kwargs else 2
        return_status = (
            kwargs.pop('return_status') if 'return_status' in kwargs else True
        )

        while n_tries > 0:
            try:
                self._connect()
                n_tries -= 1
                with self._client_lock:
                    response = getattr(self.client, method)(*args, **kwargs)

                if return_status:
                    return self._status()

                return response
            except Exception as e:
                error = str(e)
                self.logger.warning(
                    'Exception while executing MPD method %s: %s', method, error
                )
                self.client = None

        return None, error

    @action
    def play(self, resource: Optional[str] = None, **__):
        """
        Play a resource by path/URI.

        :param resource: Resource path/URI
        :type resource: str
        """

        if resource:
            self.add(resource, position=0)
            return self.play_pos(0)

        return self._exec('play')

    @action
    def play_pos(self, pos: int):
        """
        Play a track in the current playlist by position number.

        :param pos: Position number.
        """

        return self._exec('play', pos)

    @action
    def pause(self, *_, **__):
        """Pause playback"""

        status = self._status()['state']
        return self._exec('pause') if status == 'play' else self._exec('play')

    @action
    def pause_if_playing(self):
        """Pause playback only if it's playing"""
        status = self._status()['state']
        return self._exec('pause') if status == 'play' else None

    @action
    def play_if_paused(self):
        """Play only if it's paused (resume)"""
        status = self._status()['state']
        return self._exec('play') if status == 'pause' else None

    @action
    def play_if_paused_or_stopped(self):
        """Play only if it's paused or stopped"""
        status = self._status()['state']
        return self._exec('play') if status in ('pause', 'stop') else None

    @action
    def stop(self, *_, **__):  # type: ignore
        """Stop playback"""
        return self._exec('stop')

    @action
    def play_or_stop(self):
        """Play or stop (play state toggle)"""
        status = self._status()['state']
        if status == 'play':
            return self._exec('stop')
        return self._exec('play')

    @action
    def playid(self, track_id: str):
        """
        Play a track by ID.

        :param track_id: Track ID.
        """
        return self._exec('playid', track_id)

    @action
    def next(self, *_, **__):
        """Play the next track"""
        return self._exec('next')

    @action
    def previous(self, **__):
        """Play the previous track"""
        return self._exec('previous')

    @action
    def setvol(self, vol: int):
        """
        Set the volume.

        ..warning :: **DEPRECATED**, use :meth:`.set_volume` instead.

        :param vol: Volume value (range: 0-100).
        """
        self.logger.warning(
            'music.mpd.setvol is deprecated, use music.mpd.set_volume instead'
        )
        return self.set_volume(vol)

    @action
    def set_volume(self, volume: int, **__):
        """
        Set the volume.

        :param volume: Volume value (range: 0-100).
        """
        return self._exec('setvol', str(volume))

    @action
    def volup(self, step: Optional[float] = None, **kwargs):
        """
        Turn up the volume.

        :param step: Volume up step (default: 5%).
        """
        step = step or kwargs.get('delta') or 5
        volume = int(self._status()['volume'])
        new_volume = min(volume + step, 100)
        return self.setvol(new_volume)

    @action
    def voldown(self, step: Optional[float] = None, **kwargs):
        """
        Turn down the volume.

        :param step: Volume down step (default: 5%).
        """
        step = step or kwargs.get('delta') or 5
        volume = int(self._status()['volume'])
        new_volume = max(volume - step, 0)
        return self.setvol(new_volume)

    def _toggle(self, key: str, value: Optional[bool] = None):
        if value is None:
            value = bool(self._status()[key])
        return self._exec(key, int(value))

    @action
    def random(self, value: Optional[bool] = None):
        """
        Set random mode.

        :param value: If set, set the random state this value (true/false).
            Default: None (toggle current state).
        """
        return self._toggle('random', value)

    @action
    def consume(self, value: Optional[bool] = None):
        """
        Set consume mode.

        :param value: If set, set the consume state this value (true/false).
            Default: None (toggle current state)
        """
        return self._toggle('consume', value)

    @action
    def single(self, value: Optional[bool] = None):
        """
        Set single mode.

        :param value: If set, set the consume state this value (true/false).
            Default: None (toggle current state)
        """
        return self._toggle('single', value)

    @action
    def repeat(self, value: Optional[bool] = None):
        """
        Set repeat mode.

        :param value: If set, set the repeat state this value (true/false).
            Default: None (toggle current state)
        """
        return self._toggle('repeat', value)

    @action
    def shuffle(self):
        """
        Shuffles the current playlist.
        """
        return self._exec('shuffle')

    @action
    def save(self, name: str):
        """
        Save the current tracklist to a new playlist with the specified name.

        :param name: Name of the playlist
        """
        return self._exec('save', name)

    @action
    def add(self, resource: str, *_, position: Optional[int] = None, **__):
        """
        Add a resource (track, album, artist, folder etc.) to the current
        playlist.

        :param resource: Resource path or URI.
        :param position: Position where the track(s) will be inserted (default:
            end of the playlist).
        """

        if isinstance(resource, list):
            for r in resource:
                r = self._parse_resource(r)
                try:
                    if position is None:
                        self._exec('add', r)
                    else:
                        self._exec('addid', r, position)
                except Exception as e:
                    self.logger.warning('Could not add %s: %s', r, e)

            return self.status().output

        r = self._parse_resource(resource)

        if position is None:
            return self._exec('add', r)
        return self._exec('addid', r, position)

    @action
    def delete(self, positions):
        """
        Delete the playlist item(s) in the specified position(s).

        :param positions: Positions of the tracks to be removed
        :type positions: list[int]

        :return: The modified playlist
        """

        for pos in sorted(positions, key=int, reverse=True):
            self._exec('delete', pos)
        return self.playlistinfo()

    @action
    def rm(self, playlist):
        """
        Permanently remove playlist(s) by name

        :param playlist: Name or list of playlist names to remove
        :type playlist: str or list[str]
        """

        if isinstance(playlist, str):
            playlist = [playlist]
        elif not isinstance(playlist, list):
            raise RuntimeError(f'Invalid type for playlist: {type(playlist)}')

        for p in playlist:
            self._exec('rm', p)

    @action
    def move(self, from_pos, to_pos):
        """
        Move the playlist item in position <from_pos> to position <to_pos>

        :param from_pos: Track current position
        :type from_pos: int

        :param to_pos: Track new position
        :type to_pos: int
        """
        return self._exec('move', from_pos, to_pos)

    @classmethod
    def _parse_resource(cls, resource):
        if not resource:
            return None

        m = re.search(r'^https?://open\.spotify\.com/([^?]+)', resource)
        if m:
            resource = 'spotify:' + m.group(1).replace('/', ':')

        if resource.startswith('spotify:'):
            resource = resource.split('?')[0]

        m = re.match(r'spotify:playlist:(.*)', resource)
        if m:
            # Old Spotify URI format, convert it to new
            resource = 'spotify:user:spotify:playlist:' + m.group(1)
        return resource

    @action
    def load(self, playlist, play=True):
        """
        Load and play a playlist by name

        :param playlist: Playlist name
        :type playlist: str

        :param play: Start playback after loading the playlist (default: True)
        :type play: bool
        """

        ret = self._exec('load', playlist)
        if play:
            self.play()
        return ret

    @action
    def clear(self, **__):
        """Clear the current playlist"""
        return self._exec('clear')

    @action
    def seekcur(self, value: float):
        """
        Seek to the specified position (DEPRECATED, use :meth:`.seek` instead).

        :param value: Seek position in seconds, or delta string (e.g. '+15' or
            '-15') to indicate a seek relative to the current position
        """
        self.logger.warning(
            'music.mpd.seekcur is deprecated, use music.mpd.seek instead'
        )
        return self.seek(value)

    @action
    def seek(self, position: float, **__):
        """
        Seek to the specified position

        :param position: Seek position in seconds, or delta string (e.g. '+15'
            or '-15') to indicate a seek relative to the current position
        """
        return self._exec('seekcur', position)

    @action
    def forward(self):
        """Go forward by 15 seconds"""
        return self._exec('seekcur', '+15')

    @action
    def back(self):
        """Go backward by 15 seconds"""
        return self._exec('seekcur', '-15')

    def _status(self) -> dict:
        n_tries = 2
        error = None

        while n_tries > 0:
            try:
                n_tries -= 1
                self._connect()
                if self.client:
                    return self.client.status()  # type: ignore
            except Exception as e:
                error = e
                self.logger.warning('Exception while getting MPD status: %s', e)
                self.client = None

        raise AssertionError(str(error))

    @action
    def status(self, *_, **__):
        """
        :returns: The current state.

        Example response::

            output = {
                "volume": "9",
                "repeat": "0",
                "random": "0",
                "single": "0",
                "consume": "0",
                "playlist": "52",
                "playlistlength": "14",
                "xfade": "0",
                "state": "play",
                "song": "9",
                "songid": "3061",
                "nextsong": "10",
                "nextsongid": "3062",
                "time": "161:255",
                "elapsed": "161.967",
                "bitrate": "320"
            }

        """
        return self._status()

    def _current_track(self):
        track = self._exec('currentsong', return_status=False)
        if not isinstance(track, dict):
            return None

        if 'title' in track and (
            'artist' not in track
            or not track['artist']
            or re.search('^https?://', track['file'])
            or re.search('^tunein:', track['file'])
        ):
            m = re.match(r'^\s*(.+?)\s+-\s+(.*)\s*$', track['title'])
            if m and m.group(1) and m.group(2):
                track['artist'] = m.group(1)
                track['title'] = m.group(2)

        return track

    @action
    def currentsong(self):
        """
        Legacy alias for :meth:`.current_track`.
        """
        return self.current_track()

    @action
    def current_track(self, *_, **__):
        """
        :returns: The currently played track.

        Example response::

            output = {
                "file": "spotify:track:7CO5ADlDN3DcR2pwlnB14P",
                "time": "255",
                "artist": "Elbow",
                "album": "Little Fictions",
                "title": "Kindling",
                "date": "2017",
                "track": "10",
                "pos": "9",
                "id": "3061",
                "albumartist": "Elbow",
                "x-albumuri": "spotify:album:6q5KhDhf9BZkoob7uAnq19"
            }
        """
        return self._current_track()

    @action
    def playlistinfo(self):
        """
        :returns: The tracks in the current playlist as a list of dicts.

        Example output::

            output = [
                {
                    "file": "spotify:track:79VtgIoznishPUDWO7Kafu",
                    "time": "355",
                    "artist": "Elbow",
                    "album": "Little Fictions",
                    "title": "Trust the Sun",
                    "date": "2017",
                    "track": "3",
                    "pos": "10",
                    "id": "3062",
                    "albumartist": "Elbow",
                    "x-albumuri": "spotify:album:6q5KhDhf9BZkoob7uAnq19"
                },
                {
                    "file": "spotify:track:3EzTre0pxmoMYRuhJKMHj6",
                    "time": "219",
                    "artist": "Elbow",
                    "album": "Little Fictions",
                    "title": "Gentle Storm",
                    "date": "2017",
                    "track": "2",
                    "pos": "11",
                    "id": "3063",
                    "albumartist": "Elbow",
                    "x-albumuri": "spotify:album:6q5KhDhf9BZkoob7uAnq19"
                },
            ]
        """

        return self._exec('playlistinfo', return_status=False)

    @action
    def get_playlists(self, *_, **__):
        """
        :returns: The playlists available on the server as a list of dicts.

        Example response::

            output = [
                {
                    "playlist": "Rock",
                    "last-modified": "2018-06-25T21:28:19Z"
                },
                {
                    "playlist": "Jazz",
                    "last-modified": "2018-06-24T22:28:29Z"
                },
                {
                    # ...
                }
            ]

        """
        playlists: list = self._exec(  # type: ignore
            'listplaylists', return_status=False
        )
        return sorted(playlists, key=lambda p: p['playlist'])

    @action
    def listplaylists(self):
        """
        Deprecated alias for :meth:`.playlists`.
        """
        self.logger.warning(
            'music.mpd.listplaylists is deprecated, use music.mpd.get_playlists instead'
        )
        return self.get_playlists()

    @action
    def get_playlist(self, playlist: str, *_, with_tracks: bool = False, **__):
        """
        List the items in the specified playlist.

        :param playlist: Name of the playlist
        :param with_tracks: If True then the list of tracks in the playlist will
            be returned as well (default: False).
        """
        return self._exec(
            'listplaylistinfo' if with_tracks else 'listplaylist',
            playlist,
            return_status=False,
        )

    @action
    def listplaylist(self, name: str):
        """
        Deprecated alias for :meth:`.playlist`.
        """
        self.logger.warning(
            'music.mpd.listplaylist is deprecated, use music.mpd.get_playlist instead'
        )
        return self._exec('listplaylist', name, return_status=False)

    @action
    def listplaylistinfo(self, name: str):
        """
        Deprecated alias for :meth:`.playlist` with ``with_tracks=True``.
        """
        self.logger.warning(
            'music.mpd.listplaylistinfo is deprecated, use music.mpd.get_playlist instead'
        )
        return self.get_playlist(name, with_tracks=True)

    @action
    def add_to_playlist(
        self, playlist: str, resources: Union[str, Collection[str]], **_
    ):
        """
        Add one or multiple resources to a playlist.

        :param playlist: Playlist name
        :param resources: URI or path of the resource(s) to be added
        """

        if isinstance(resources, str):
            resources = [resources]

        for res in resources:
            self._exec('playlistadd', playlist, res)

    @action
    def playlistadd(self, name: str, uri: str):
        """
        Deprecated alias for :meth:`.add_to_playlist`.
        """
        self.logger.warning(
            'music.mpd.playlistadd is deprecated, use music.mpd.add_to_playlist instead'
        )
        return self.add_to_playlist(name, uri)

    @action
    def remove_from_playlist(
        self, playlist: str, resources: Union[int, Collection[int]], *_, **__
    ):
        """
        Remove one or multiple tracks from a playlist.

        :param playlist: Playlist name
        :param resources: Position or list of positions to remove
        """

        if isinstance(resources, str):
            resources = int(resources)
        if isinstance(resources, int):
            resources = [resources]

        for p in sorted(resources, reverse=True):
            self._exec('playlistdelete', playlist, p)

    @action
    def playlist_move(self, playlist: str, from_pos: int, to_pos: int, *_, **__):
        """
        Change the position of a track in the specified playlist.

        :param playlist: Playlist name
        :param from_pos: Original track position
        :param to_pos: New track position
        """
        self._exec('playlistmove', playlist, from_pos, to_pos)

    @action
    def playlistdelete(self, name: str, pos: int):
        """
        Deprecated alias for :meth:`.remove_from_playlist`.
        """
        self.logger.warning(
            'music.mpd.playlistdelete is deprecated, use music.mpd.remove_from_playlist instead'
        )
        return self.remove_from_playlist(name, pos)

    @action
    def playlistmove(self, name: str, from_pos: int, to_pos: int):
        """
        Deprecated alias for :meth:`.playlist_move`.
        """
        self.logger.warning(
            'music.mpd.playlistmove is deprecated, use music.mpd.playlist_move instead'
        )
        return self.playlist_move(name, from_pos=from_pos, to_pos=to_pos)

    @action
    def playlistclear(self, name: str):
        """
        Clears all the elements from the specified playlist.

        :param name: Playlist name.
        """
        self._exec('playlistclear', name)

    @action
    def rename(self, name: str, new_name: str):
        """
        Rename a playlist.

        :param name: Original playlist name
        :param new_name: New playlist name
        """
        self._exec('rename', name, new_name)

    @action
    def lsinfo(self, uri: Optional[str] = None):
        """
        Returns the list of playlists and directories on the server.
        """

        return (
            self._exec('lsinfo', uri, return_status=False)
            if uri
            else self._exec('lsinfo', return_status=False)
        )

    @action
    def plchanges(self, version: int):
        """
        Show what has changed on the current playlist since a specified playlist
        version number.

        :param version: Version number
        :returns: A list of dicts representing the songs being added since the specified version
        """
        return self._exec('plchanges', version, return_status=False)

    @action
    def searchaddplaylist(self, name: str):
        """
        Search and add a playlist by (partial or full) name.

        :param name: Playlist name, can be partial.
        """

        resp: list = self._exec('listplaylists', return_status=False)  # type: ignore
        playlists = [
            pl['playlist'] for pl in resp if name.lower() in pl['playlist'].lower()
        ]

        if not playlists:
            return None

        self._exec('clear')
        self._exec('load', playlists[0])
        self._exec('play')
        return {'playlist': playlists[0]}

    @staticmethod
    def _make_filter(f: dict) -> list:
        ll = []
        for k, v in f.items():
            ll.extend([k, v])
        return ll

    @action
    def find(self, filter: dict, *args, **kwargs):  # pylint: disable=redefined-builtin
        """
        Find in the database/library by filter.

        :param filter: Search filter (e.g. ``{"artist": "Led Zeppelin", "album": "IV"}``)
        :returns: list[dict]
        """
        filter_list = self._make_filter(filter)
        return self._exec('find', *filter_list, *args, return_status=False, **kwargs)

    @action
    def findadd(
        self, filter: dict, *args, **kwargs  # pylint: disable=redefined-builtin
    ):
        """
        Find in the database/library by filter and add to the current playlist.

        :param filter: Search filter (e.g. ``{"artist": "Led Zeppelin", "album": "IV"}``)
        :returns: list[dict]
        """
        filter_list = self._make_filter(filter)
        return self._exec('findadd', *filter_list, *args, return_status=False, **kwargs)

    @action
    def search(
        self,
        *args,
        query: Optional[Union[str, dict]] = None,
        filter: Optional[dict] = None,  # pylint: disable=redefined-builtin
        **kwargs,
    ):
        """
        Free search by filter.

        :param query: Free-text query or search structured filter (e.g. ``{"artist": "Led Zeppelin", "album": "IV"}``).
        :param filter: Structured search filter (e.g. ``{"artist": "Led Zeppelin", "album": "IV"}``) - same as
            ``query``, it's still here for back-compatibility reasons.
        :returns: list[dict]
        """
        assert query or filter, 'Specify either `query` or `filter`'

        filt = filter
        if isinstance(query, str):
            filt = query
        elif isinstance(query, dict):
            filt = {**(filter or {}), **query}

        filter_list = self._make_filter(filt) if isinstance(filt, dict) else [query]

        items: list = self._exec(  # type: ignore
            'search', *filter_list, *args, return_status=False, **kwargs
        )

        # Spotify results first
        return sorted(
            items, key=lambda item: 0 if item['file'].startswith('spotify:') else 1
        )

    @action
    def searchadd(
        self, filter: dict, *args, **kwargs  # pylint: disable=redefined-builtin
    ):
        """
        Free search by filter and add the results to the current playlist.

        :param filter: Search filter (e.g. ``{"artist": "Led Zeppelin", "album": "IV"}``)
        :returns: list[dict]
        """
        filter_list = self._make_filter(filter)
        return self._exec(
            'searchadd', *filter_list, *args, return_status=False, **kwargs
        )

    def main(self):
        listener = None
        if self.poll_interval is not None:
            listener = MpdListener(self)
            listener.start()

        self.wait_stop()

        if listener:
            listener.join()


# vim:sw=4:ts=4:et:
