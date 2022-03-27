"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[3249],{3249:function(s,a,t){t.r(a),t.d(a,{default:function(){return u}});var i=t(6252);function e(s,a,t,e,l,r){const o=(0,i.up)("Loading"),n=(0,i.up)("MusicPlugin");return(0,i.wg)(),(0,i.iD)(i.HY,null,[l.loading?((0,i.wg)(),(0,i.j4)(o,{key:0})):(0,i.kq)("",!0),(0,i.Wm)(n,{"plugin-name":"music.mpd",loading:l.loading,config:t.config,tracks:l.tracks,status:l.status,playlists:l.playlists,"edited-playlist":l.editedPlaylist,"edited-playlist-tracks":l.editedPlaylistTracks,"track-info":l.trackInfo,"search-results":l.searchResults,"library-results":l.libraryResults,path:l.path,onPlay:r.play,onPause:r.pause,onStop:r.stop,onPrevious:r.previous,onNext:r.next,onClear:r.clear,onSetVolume:r.setVolume,onSeek:r.seek,onConsume:r.consume,onRandom:r.random,onRepeat:r.repeat,onStatusUpdate:a[0]||(a[0]=s=>r.refreshStatus(!0)),onPlaylistUpdate:a[1]||(a[1]=s=>r.refresh(!0)),onNewPlayingTrack:a[2]||(a[2]=s=>r.refreshStatus(!0)),onRemoveFromTracklist:r.removeFromTracklist,onAddToTracklist:r.addToTracklist,onSwapTracks:r.swapTracks,onLoadPlaylist:r.loadPlaylist,onPlayPlaylist:r.playPlaylist,onRemovePlaylist:r.removePlaylist,onTracklistMove:r.moveTracklistTracks,onTracklistSave:r.saveToPlaylist,onPlaylistEdit:r.playlistEditChanged,onAddToTracklistFromEditedPlaylist:r.addToTracklistFromEditedPlaylist,onRemoveFromPlaylist:r.removeFromPlaylist,onInfo:a[3]||(a[3]=s=>l.trackInfo=s),onPlaylistAdd:r.playlistAdd,onAddToPlaylist:r.addToPlaylist,onPlaylistTrackMove:r.playlistTrackMove,onSearch:r.search,onSearchClear:a[4]||(a[4]=s=>l.searchResults=[]),onCd:r.cd},null,8,["loading","config","tracks","status","playlists","edited-playlist","edited-playlist-tracks","track-info","search-results","library-results","path","onPlay","onPause","onStop","onPrevious","onNext","onClear","onSetVolume","onSeek","onConsume","onRandom","onRepeat","onRemoveFromTracklist","onAddToTracklist","onSwapTracks","onLoadPlaylist","onPlayPlaylist","onRemovePlaylist","onTracklistMove","onTracklistSave","onPlaylistEdit","onAddToTracklistFromEditedPlaylist","onRemoveFromPlaylist","onPlaylistAdd","onAddToPlaylist","onPlaylistTrackMove","onSearch","onCd"])],64)}var l=t(6833),r=t(2628),o=t(1232),n={name:"MusicMpd",components:{Loading:o.Z,MusicPlugin:l["default"]},mixins:[r.Z],props:{config:{type:Object,default:()=>{}}},data(){return{loading:!1,tracks:[],playlists:[],status:{},editedPlaylist:null,editedPlaylistTracks:[],trackInfo:null,searchResults:[],libraryResults:[],path:"/"}},methods:{async refreshTracks(s){s||(this.loading=!0);try{this.tracks=await this.request("music.mpd.playlistinfo")}finally{this.loading=!1}},async refreshStatus(s){s||(this.loading=!0);try{this.status=Object.entries(await this.request("music.mpd.status")).reduce(((s,[a,t])=>{switch(a){case"bitrate":case"volume":s[a]=parseInt(t);break;case"consume":case"random":case"repeat":case"single":s[a]=!!parseInt(t);break;case"song":s["playingPos"]=parseInt(t);break;case"time":[s["elapsed"],s["duration"]]=t.split(":").map((s=>parseInt(s)));break;case"elapsed":break;default:s[a]=t;break}return s}),{})}finally{this.loading=!1}},async refreshPlaylists(s){s||(this.loading=!0);try{this.playlists=(await this.request("music.mpd.listplaylists")).map((s=>({name:s.playlist,lastModified:s["last-modified"]}))).sort(((s,a)=>s.name.localeCompare(a.name)))}finally{this.loading=!1}},async refresh(s){s||(this.loading=!0);try{await Promise.all([this.refreshTracks(s),this.refreshStatus(s),this.refreshPlaylists(s)])}finally{this.loading=!1}},async play(s){null!=s?.pos?await this.request("music.mpd.play_pos",{pos:s.pos}):s?.file?await this.request("music.mpd.play",{resource:s.file}):await this.request("music.mpd.play"),await this.refreshStatus(!0)},async pause(){await this.request("music.mpd.pause"),await this.refreshStatus(!0)},async stop(){await this.request("music.mpd.stop"),await this.refreshStatus(!0)},async previous(){await this.request("music.mpd.previous"),await this.refreshStatus(!0)},async next(){await this.request("music.mpd.next"),await this.refreshStatus(!0)},async clear(){await this.request("music.mpd.clear"),await Promise.all([this.refreshStatus(!0),this.refreshTracks(!0)])},async setVolume(s){s!==this.status.volume&&(await this.request("music.mpd.set_volume",{volume:s}),await this.refreshStatus(!0))},async seek(s){await this.request("music.mpd.seek",{position:s}),await this.refreshStatus(!0)},async repeat(s){await this.request("music.mpd.repeat",{value:parseInt(+s)}),await this.refreshStatus(!0)},async random(s){await this.request("music.mpd.random",{value:parseInt(+s)}),await this.refreshStatus(!0)},async consume(s){await this.request("music.mpd.consume",{value:parseInt(+s)}),await this.refreshStatus(!0)},async addToTracklist(s){s.file&&(s=s.file),await this.request("music.mpd.add",{resource:s}),await this.refresh(!0)},async addToTracklistFromEditedPlaylist(s){const a=this.editedPlaylistTracks[s.pos];a&&(await this.request("music.mpd.add",{resource:a.file}),await this.refresh(!0),s.play&&await this.request("music.mpd.play_pos",{pos:this.tracks.length-1}))},async removeFromPlaylist(s){await this.request("music.mpd.playlistdelete",{pos:s,name:this.playlists[this.editedPlaylist].name}),await this.playlistEditChanged(this.editedPlaylist)},async removeFromTracklist(s){await this.request("music.mpd.delete",{positions:s.sort()}),await this.refresh(!0)},async swapTracks(s){await this.request("music.mpd.move",{from_pos:s[0],to_pos:s[1]}),await this.refresh(!0)},async playPlaylist(s){await this._loadPlaylist(s,!0)},async loadPlaylist(s){await this._loadPlaylist(s,!1)},async _loadPlaylist(s,a){const t=this.playlists[s];await this.request("music.mpd.load",{playlist:t.name,play:a}),await this.refresh(!0)},async removePlaylist(s){const a=this.playlists[s];confirm(`Are you REALLY sure that you want to remove the playlist ${a.name}?`)&&(await this.request("music.mpd.rm",{playlist:a.name}),await this.refreshPlaylists(!0))},async saveToPlaylist(s){await this.request("music.mpd.save",{name:s}),await this.refreshPlaylists(!0)},async moveTracklistTracks(s){await this.request("music.mpd.move",{from_pos:s.from,to_pos:s.to}),await this.refreshTracks(!0)},async playlistAdd(s){await this.request("music.mpd.playlistadd",{uri:s,name:this.playlists[this.editedPlaylist].name}),await this.playlistEditChanged(this.editedPlaylist)},async playlistEditChanged(s){if(this.editedPlaylist=s,null!=s){this.loading=!0;try{this.editedPlaylistTracks=await this.request("music.mpd.listplaylistinfo",{name:this.playlists[s].name})}finally{this.loading=!1}}},async addToPlaylist(s){await Promise.all(s.playlists.map((async a=>{await this.request("music.mpd.playlistadd",{uri:s.track.file,name:this.playlists[a].name}),await this.playlistEditChanged(a)})))},async playlistTrackMove(s){await this.request("music.mpd.playlistmove",{name:this.playlists[s.playlist].name,from_pos:s.from,to_pos:s.to}),await this.playlistEditChanged(s.playlist)},async search(s){this.loading=!0;try{this.searchResults=await this.request("music.mpd.search",{filter:s})}finally{this.loading=!1}},async cd(s){this.loading=!0;try{this.libraryResults=(await this.request("music.mpd.lsinfo",{uri:s})).filter((s=>!s.playlist)),this.path=s}finally{this.loading=!1}}},mounted(){this.refresh(),this.cd(this.path)}},d=t(3744);const c=(0,d.Z)(n,[["render",e]]);var u=c}}]);
//# sourceMappingURL=3249.fd3db1b0.js.map
