(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da0a28d2"],{"38cf":function(t,e,s){var a=s("23e7"),n=s("1148");a({target:"String",proto:!0},{repeat:n})},"97d5":function(t,e,s){"use strict";s("f8d8")},bcf7:function(t,e,s){"use strict";s.r(e);s("38cf");var a=s("7a23"),n=Object(a["K"])("data-v-68a15751");Object(a["u"])("data-v-68a15751");var r={key:1,class:"music"},i={class:"track"},c={key:0,class:"unknown"},u={key:1,class:"no-track"},o={key:0,class:"time"},l={class:"row"},p={class:"progress-bar"},h=Object(a["h"])("div",{class:"total"},null,-1),m={class:"row"},b={key:1,class:"controls"},d=Object(a["h"])("i",{class:"fa fa-step-backward"},null,-1),f={key:0,class:"fa fa-pause"},g={key:1,class:"fa fa-play"},v=Object(a["h"])("i",{class:"fa fa-stop"},null,-1),k=Object(a["h"])("i",{class:"fa fa-step-forward"},null,-1),O={key:2,class:"playback-status"},j={class:"status-property col-4"},y=Object(a["h"])("i",{class:"fa fa-volume-up"},null,-1),w=Object(a["g"])("  "),x={class:"status-property col-2"},C={class:"status-property col-2"},T={class:"status-property col-2"},_={class:"status-property col-2"};Object(a["s"])();var R=n((function(t,e,s,n,R,P){var S=Object(a["z"])("Loading");return R.loading?(Object(a["r"])(),Object(a["e"])(S,{key:0})):(Object(a["r"])(),Object(a["e"])("div",r,[Object(a["h"])("div",i,[R.status?Object(a["f"])("",!0):(Object(a["r"])(),Object(a["e"])("div",c,"[Unknown state]")),R.status&&"stop"===R.status.state?(Object(a["r"])(),Object(a["e"])("div",u,"No media is being played")):Object(a["f"])("",!0),R.status&&"stop"!==R.status.state&&R.track&&R.track.artist?(Object(a["r"])(),Object(a["e"])("div",{key:2,class:"artist",textContent:Object(a["C"])(R.track.artist)},null,8,["textContent"])):Object(a["f"])("",!0),R.status&&"stop"!==R.status.state&&R.track&&R.track.title?(Object(a["r"])(),Object(a["e"])("div",{key:3,class:"title",textContent:Object(a["C"])(R.track.title)},null,8,["textContent"])):Object(a["f"])("",!0)]),R.status&&"play"===R.status.state?(Object(a["r"])(),Object(a["e"])("div",o,[Object(a["h"])("div",l,[Object(a["h"])("div",p,[Object(a["h"])("div",{class:"elapsed",style:{width:R.track.time?R.status.elapsed/R.track.time*100+"%":"100%"}},null,4),h])]),Object(a["h"])("div",m,[Object(a["h"])("div",{class:"col-6 time-elapsed",textContent:Object(a["C"])(P.convertTime(R.status.elapsed))},null,8,["textContent"]),R.track.time?(Object(a["r"])(),Object(a["e"])("div",{key:0,class:"col-6 time-total",textContent:Object(a["C"])(P.convertTime(R.track.time))},null,8,["textContent"])):Object(a["f"])("",!0)])])):Object(a["f"])("",!0),P._withControls&&R.status?(Object(a["r"])(),Object(a["e"])("div",b,[Object(a["h"])("button",{onClick:e[1]||(e[1]=function(){return P.prev&&P.prev.apply(P,arguments)})},[d]),Object(a["h"])("button",{class:"play-pause",onClick:e[2]||(e[2]=function(){return P.playPause&&P.playPause.apply(P,arguments)})},["play"===R.status.state?(Object(a["r"])(),Object(a["e"])("i",f)):(Object(a["r"])(),Object(a["e"])("i",g))]),"stop"!==R.status.state?(Object(a["r"])(),Object(a["e"])("button",{key:0,onClick:e[3]||(e[3]=function(){return P.stop&&P.stop.apply(P,arguments)})},[v])):Object(a["f"])("",!0),Object(a["h"])("button",{onClick:e[4]||(e[4]=function(){return P.next&&P.next.apply(P,arguments)})},[k])])):Object(a["f"])("",!0),R.status?(Object(a["r"])(),Object(a["e"])("div",O,[Object(a["h"])("div",j,[y,w,Object(a["h"])("span",{textContent:Object(a["C"])(R.status.volume+"%")},null,8,["textContent"])]),Object(a["h"])("div",x,[Object(a["h"])("i",{class:["fas fa-random",{active:R.status.random}]},null,2)]),Object(a["h"])("div",C,[Object(a["h"])("i",{class:["fas fa-redo",{active:R.status.repeat}]},null,2)]),Object(a["h"])("div",T,[Object(a["h"])("i",{class:["fa fa-bullseye",{active:R.status.single}]},null,2)]),Object(a["h"])("div",_,[Object(a["h"])("i",{class:["fa fa-utensils",{active:R.status.consume}]},null,2)])])):Object(a["f"])("",!0)]))})),P=s("3835"),S=s("1da1"),M=(s("96cf"),s("a9e3"),s("a15b"),s("4fad"),s("b680"),s("3e54")),I=s("3a5e"),N={name:"Music",components:{Loading:I["a"]},mixins:[M["a"]],props:{refreshSeconds:{type:Number,default:60},withControls:{type:Boolean,default:!0}},data:function(){return{track:void 0,status:void 0,timer:void 0,loading:!1,musicPlugin:"music.mpd",syncTime:{timestamp:null,elapsed:null}}},computed:{_withControls:function(){return this.parseBoolean(this.withControls)}},methods:{refresh:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.request("".concat(t.musicPlugin,".status"));case 4:return s=e.sent,e.next=7,t.request("".concat(t.musicPlugin,".current_track"));case 7:a=e.sent,t._parseStatus(s),t._parseTrack(a),"play"!==s.state||t.timer?"play"!==s.state&&t.timer&&t.stopTimer():t.startTimer();case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,,11,14]])})))()},convertTime:function(t){t=parseFloat(t);var e={};e.h=parseInt(t/3600),e.m=parseInt(t/60-60*e.h),e.s=parseInt(t-(3600*e.h+60*e.m));for(var s=0,a=["m","s"];s<a.length;s++){var n=a[s];e[n]=""+e[n]}for(var r=0,i=["m","s"];r<i.length;r++){var c=i[r];parseInt(e[c])<10&&(e[c]="0"+e[c])}var u=[];return parseInt(e.h)&&u.push(e.h),u.push(e.m,e.s),u.join(":")},_parseStatus:function(t){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function s(){var a,n,r,i,c,u;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(t&&0!==t.length){s.next=4;break}return s.next=3,e.request("".concat(e.musicPlugin,".status"));case 3:t=s.sent;case 4:for(null!==(a=t)&&void 0!==a&&a.pluginName&&(e.musicPlugin=t.pluginName),e.status||(e.status={}),n=0,r=Object.entries(t);n<r.length;n++)i=Object(P["a"])(r[n],2),c=i[0],u=i[1],["consume","random","repeat","single","bitrate"].indexOf(c)>=0?e.status[c]=!!parseInt(u):["nextsong","nextsongid","playlist","playlistlength","volume","xfade","song","songid"].indexOf(c)>=0?e.status[c]=parseInt(u):["elapsed"].indexOf(c)>=0?e.status[c]=parseFloat(u):e.status[c]=u;case 7:case"end":return s.stop()}}),s)})))()},_parseTrack:function(t){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function s(){var a,n,r,i,c;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(t&&0!==t.length){s.next=4;break}return s.next=3,e.request("".concat(e.musicPlugin,".current_track"));case 3:t=s.sent;case 4:for(e.track||(e.track={}),a=0,n=Object.entries(t);a<n.length;a++)r=Object(P["a"])(n[a],2),i=r[0],c=r[1],["id","pos","time","track","disc"].indexOf(i)>=0?e.track[i]=parseInt(c):e.track[i]=c;case 6:case"end":return s.stop()}}),s)})))()},showNewTrackNotification:function(){this.notify({html:"<b>"+(this.track.artist||"[No Artist]")+"</b><br>"+(this.track.title||"[No Title]"),image:{icon:"play"}})},onNewPlayingTrack:function(t){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function s(){var a,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a=void 0,e.track&&(a={file:e.track.file,artist:e.track.artist,title:e.track.title}),e.status.state="play",e.status.elapsed=0,e.track={},e._parseTrack(t.track),!t.status){s.next=10;break}s.t0=t.status,s.next=13;break;case 10:return s.next=12,e.request("".concat(e.musicPlugin,".status"));case 12:s.t0=s.sent;case 13:n=s.t0,e._parseStatus(n),e.startTimer(),a&&e.track.file===a.file&&e.track.artist===a.artist&&e.track.title===a.title||e.showNewTrackNotification();case 17:case"end":return s.stop()}}),s)})))()},onMusicStop:function(t){this.status.state="stop",this.status.elapsed=0,this._parseStatus(t.status),this._parseTrack(t.track),this.stopTimer()},onMusicPlay:function(t){this.status.state="play",this._parseStatus(t.status),this._parseTrack(t.track),this.startTimer()},onMusicPause:function(t){this.status.state="pause",this._parseStatus(t.status),this._parseTrack(t.track),this.syncTime.timestamp=new Date,this.syncTime.elapsed=this.status.elapsed},onSeekChange:function(t){null!=t.position&&(this.status.elapsed=parseFloat(t.position)),t.status&&this._parseStatus(t.status),t.track&&this._parseTrack(t.track),this.syncTime.timestamp=new Date,this.syncTime.elapsed=this.status.elapsed},onVolumeChange:function(t){null!=t.volume&&(this.status.volume=parseFloat(t.volume)),t.status&&this._parseStatus(t.status),t.track&&this._parseTrack(t.track)},onRepeatChange:function(t){this.status.repeat=t.state},onRandomChange:function(t){this.status.random=t.state},onConsumeChange:function(t){this.status.consume=t.state},onSingleChange:function(t){this.status.single=t.state},startTimer:function(){null!=this.timer&&this.stopTimer(),this.syncTime.timestamp=new Date,this.syncTime.elapsed=this.status.elapsed,this.timer=setInterval(this.timerFunc,1e3)},stopTimer:function(){null==this.timer&&(clearInterval(this.timer),this.timer=null)},timerFunc:function(){"play"===this.status.state&&null!=this.status.elapsed&&(this.status.elapsed=this.syncTime.elapsed+(new Date).getTime()/1e3-this.syncTime.timestamp.getTime()/1e3)},_run:function(t,e){var s=this;return Object(S["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=e||{},a.next=3,s.request("music.mpd.".concat(t),e);case 3:return a.next=5,s.refresh();case 5:case"end":return a.stop()}}),a)})))()},playPause:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t._run("pause");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},stop:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t._run("stop");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},prev:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t._run("previous");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},next:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t._run("next");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.refresh(),this.refreshSeconds&&setInterval(this.refresh,parseInt((1e3*this.refreshSeconds).toFixed(0))),this.subscribe(this.onNewPlayingTrack,"widget-music-on-new-track","platypush.message.event.music.NewPlayingTrackEvent"),this.subscribe(this.onMusicStop,"widget-music-on-music-stop","platypush.message.event.music.MusicStopEvent"),this.subscribe(this.onMusicPlay,"widget-music-on-music-play","platypush.message.event.music.MusicPlayEvent"),this.subscribe(this.onMusicPause,"widget-music-on-music-pause","platypush.message.event.music.MusicPauseEvent"),this.subscribe(this.onSeekChange,"widget-music-on-music-seek","platypush.message.event.music.SeekChangeEvent"),this.subscribe(this.onVolumeChange,"widget-music-on-volume-change","platypush.message.event.music.VolumeChangeEvent"),this.subscribe(this.onRepeatChange,"widget-music-on-repeat-change","platypush.message.event.music.PlaybackRepeatModeChangeEvent"),this.subscribe(this.onRandomChange,"widget-music-on-random-change","platypush.message.event.music.PlaybackRandomModeChangeEvent"),this.subscribe(this.onConsumeChange,"widget-music-on-consume-change","platypush.message.event.music.PlaybackConsumeModeChangeEvent"),this.subscribe(this.onSingleChange,"widget-music-on-single-change","platypush.message.event.music.PlaybackSingleModeChangeEvent")}};s("97d5");N.render=R,N.__scopeId="data-v-68a15751";e["default"]=N},f8d8:function(t,e,s){}}]);
//# sourceMappingURL=chunk-da0a28d2.e49720f2.js.map