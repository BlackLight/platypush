"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[311],{311:function(t,s,e){e.r(s),e.d(s,{default:function(){return B}});var a=e(6252),i=e(3577);const n=t=>((0,a.dD)("data-v-75982eb8"),t=t(),(0,a.Cn)(),t),u={key:1,class:"music"},r={class:"track"},l={key:0,class:"unknown"},c={key:1,class:"no-track"},o=["textContent"],h=["textContent"],p={key:0,class:"time"},m={class:"row"},d={class:"progress-bar"},k=n((()=>(0,a._)("div",{class:"total"},null,-1))),g={class:"row"},y=["textContent"],v=["textContent"],w={key:1,class:"controls"},f=n((()=>(0,a._)("i",{class:"fa fa-step-backward"},null,-1))),_=[f],C={key:0,class:"fa fa-pause"},b={key:1,class:"fa fa-play"},T=n((()=>(0,a._)("i",{class:"fa fa-stop"},null,-1))),x=[T],P=n((()=>(0,a._)("i",{class:"fa fa-step-forward"},null,-1))),S=[P],D={key:2,class:"playback-status"},q={class:"status-property col-4"},M=n((()=>(0,a._)("i",{class:"fa fa-volume-up"},null,-1))),I=["textContent"],N={class:"status-property col-2"},E={class:"status-property col-2"},F={class:"status-property col-2"},O={class:"status-property col-2"};function R(t,s,e,n,f,T){const P=(0,a.up)("Loading");return f.loading?((0,a.wg)(),(0,a.j4)(P,{key:0})):((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",r,[f.status?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",l,"[Unknown state]")),f.status&&"stop"===f.status.state?((0,a.wg)(),(0,a.iD)("div",c,"No media is being played")):(0,a.kq)("",!0),f.status&&"stop"!==f.status.state&&f.track&&f.track.artist?((0,a.wg)(),(0,a.iD)("div",{key:2,class:"artist",textContent:(0,i.zw)(f.track.artist)},null,8,o)):(0,a.kq)("",!0),f.status&&"stop"!==f.status.state&&f.track&&f.track.title?((0,a.wg)(),(0,a.iD)("div",{key:3,class:"title",textContent:(0,i.zw)(f.track.title)},null,8,h)):(0,a.kq)("",!0)]),f.status&&"play"===f.status.state?((0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",m,[(0,a._)("div",d,[(0,a._)("div",{class:"elapsed",style:(0,i.j5)({width:f.track.time?f.status.elapsed/f.track.time*100+"%":"100%"})},null,4),k])]),(0,a._)("div",g,[(0,a._)("div",{class:"col-6 time-elapsed",textContent:(0,i.zw)(T.convertTime(f.status.elapsed))},null,8,y),f.track.time?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"col-6 time-total",textContent:(0,i.zw)(T.convertTime(f.track.time))},null,8,v)):(0,a.kq)("",!0)])])):(0,a.kq)("",!0),T._withControls&&f.status?((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("button",{onClick:s[0]||(s[0]=(...t)=>T.prev&&T.prev(...t))},_),(0,a._)("button",{class:"play-pause",onClick:s[1]||(s[1]=(...t)=>T.playPause&&T.playPause(...t))},["play"===f.status.state?((0,a.wg)(),(0,a.iD)("i",C)):((0,a.wg)(),(0,a.iD)("i",b))]),"stop"!==f.status.state?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:s[2]||(s[2]=(...t)=>T.stop&&T.stop(...t))},x)):(0,a.kq)("",!0),(0,a._)("button",{onClick:s[3]||(s[3]=(...t)=>T.next&&T.next(...t))},S)])):(0,a.kq)("",!0),f.status?((0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",q,[M,(0,a.Uk)("  "),(0,a._)("span",{textContent:(0,i.zw)(f.status.volume+"%")},null,8,I)]),(0,a._)("div",N,[(0,a._)("i",{class:(0,i.C_)(["fas fa-random",{active:f.status.random}])},null,2)]),(0,a._)("div",E,[(0,a._)("i",{class:(0,i.C_)(["fas fa-redo",{active:f.status.repeat}])},null,2)]),(0,a._)("div",F,[(0,a._)("i",{class:(0,i.C_)(["fa fa-bullseye",{active:f.status.single}])},null,2)]),(0,a._)("div",O,[(0,a._)("i",{class:(0,i.C_)(["fa fa-utensils",{active:f.status.consume}])},null,2)])])):(0,a.kq)("",!0)]))}e(7658);var $=e(8637),j=e(6791),z={name:"Music",components:{Loading:j.Z},mixins:[$.Z],props:{refreshSeconds:{type:Number,default:60},withControls:{type:Boolean,default:!0}},data(){return{track:void 0,status:void 0,timer:void 0,loading:!1,musicPlugin:"music.mpd",syncTime:{timestamp:null,elapsed:null}}},computed:{_withControls(){return this.parseBoolean(this.withControls)}},methods:{async refresh(){this.loading=!0;try{let t=await this.request(`${this.musicPlugin}.status`),s=await this.request(`${this.musicPlugin}.current_track`);this._parseStatus(t),this._parseTrack(s),"play"!==t.state||this.timer?"play"!==t.state&&this.timer&&this.stopTimer():this.startTimer()}finally{this.loading=!1}},convertTime(t){t=parseFloat(t);const s={};s.h=parseInt(t/3600),s.m=parseInt(t/60-60*s.h),s.s=parseInt(t-(3600*s.h+60*s.m));for(const a of["m","s"])s[a]=""+s[a];for(const a of["m","s"])parseInt(s[a])<10&&(s[a]="0"+s[a]);const e=[];return parseInt(s.h)&&e.push(s.h),e.push(s.m,s.s),e.join(":")},async _parseStatus(t){t&&0!==t.length||(t=await this.request(`${this.musicPlugin}.status`)),t?.pluginName&&(this.musicPlugin=t.pluginName),this.status||(this.status={});for(const[s,e]of Object.entries(t))["consume","random","repeat","single","bitrate"].indexOf(s)>=0?this.status[s]=!!parseInt(e):["nextsong","nextsongid","playlist","playlistlength","volume","xfade","song","songid"].indexOf(s)>=0?this.status[s]=parseInt(e):["elapsed"].indexOf(s)>=0?this.status[s]=parseFloat(e):this.status[s]=e},async _parseTrack(t){t&&0!==t.length||(t=await this.request(`${this.musicPlugin}.current_track`)),this.track||(this.track={});for(const[s,e]of Object.entries(t))["id","pos","time","track","disc"].indexOf(s)>=0?this.track[s]=parseInt(e):this.track[s]=e},showNewTrackNotification(){this.notify({html:"<b>"+(this.track.artist||"[No Artist]")+"</b><br>"+(this.track.title||"[No Title]"),image:{icon:"play"}})},async onNewPlayingTrack(t){let s;this.track&&(s={file:this.track.file,artist:this.track.artist,title:this.track.title}),this.status.state="play",this.status.elapsed=0,this.track={},this._parseTrack(t.track);let e=t.status?t.status:await this.request(`${this.musicPlugin}.status`);this._parseStatus(e),this.startTimer(),s&&this.track.file===s.file&&this.track.artist===s.artist&&this.track.title===s.title||this.showNewTrackNotification()},onMusicStop(t){this.status.state="stop",this.status.elapsed=0,this._parseStatus(t.status),this._parseTrack(t.track),this.stopTimer()},onMusicPlay(t){this.status.state="play",this._parseStatus(t.status),this._parseTrack(t.track),this.startTimer()},onMusicPause(t){this.status.state="pause",this._parseStatus(t.status),this._parseTrack(t.track),this.syncTime.timestamp=new Date,this.syncTime.elapsed=this.status.elapsed},onSeekChange(t){null!=t.position&&(this.status.elapsed=parseFloat(t.position)),t.status&&this._parseStatus(t.status),t.track&&this._parseTrack(t.track),this.syncTime.timestamp=new Date,this.syncTime.elapsed=this.status.elapsed},onVolumeChange(t){null!=t.volume&&(this.status.volume=parseFloat(t.volume)),t.status&&this._parseStatus(t.status),t.track&&this._parseTrack(t.track)},onRepeatChange(t){this.status.repeat=t.state},onRandomChange(t){this.status.random=t.state},onConsumeChange(t){this.status.consume=t.state},onSingleChange(t){this.status.single=t.state},startTimer(){null!=this.timer&&this.stopTimer(),this.syncTime.timestamp=new Date,this.syncTime.elapsed=this.status.elapsed,this.timer=setInterval(this.timerFunc,1e3)},stopTimer(){null==this.timer&&(clearInterval(this.timer),this.timer=null)},timerFunc(){"play"===this.status.state&&null!=this.status.elapsed&&(this.status.elapsed=this.syncTime.elapsed+(new Date).getTime()/1e3-this.syncTime.timestamp.getTime()/1e3)},async _run(t,s){s=s||{},await this.request(`music.mpd.${t}`,s),await this.refresh()},async playPause(){return await this._run("pause")},async stop(){return await this._run("stop")},async prev(){return await this._run("previous")},async next(){return await this._run("next")}},mounted(){this.refresh(),this.refreshSeconds&&setInterval(this.refresh,parseInt((1e3*this.refreshSeconds).toFixed(0))),this.subscribe(this.onNewPlayingTrack,"widget-music-on-new-track","platypush.message.event.music.NewPlayingTrackEvent"),this.subscribe(this.onMusicStop,"widget-music-on-music-stop","platypush.message.event.music.MusicStopEvent"),this.subscribe(this.onMusicPlay,"widget-music-on-music-play","platypush.message.event.music.MusicPlayEvent"),this.subscribe(this.onMusicPause,"widget-music-on-music-pause","platypush.message.event.music.MusicPauseEvent"),this.subscribe(this.onSeekChange,"widget-music-on-music-seek","platypush.message.event.music.SeekChangeEvent"),this.subscribe(this.onVolumeChange,"widget-music-on-volume-change","platypush.message.event.music.VolumeChangeEvent"),this.subscribe(this.onRepeatChange,"widget-music-on-repeat-change","platypush.message.event.music.PlaybackRepeatModeChangeEvent"),this.subscribe(this.onRandomChange,"widget-music-on-random-change","platypush.message.event.music.PlaybackRandomModeChangeEvent"),this.subscribe(this.onConsumeChange,"widget-music-on-consume-change","platypush.message.event.music.PlaybackConsumeModeChangeEvent"),this.subscribe(this.onSingleChange,"widget-music-on-single-change","platypush.message.event.music.PlaybackSingleModeChangeEvent")}},V=e(3744);const Z=(0,V.Z)(z,[["render",R],["__scopeId","data-v-75982eb8"]]);var B=Z}}]);
//# sourceMappingURL=311.f32aa7b9.js.map