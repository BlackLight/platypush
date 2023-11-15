"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[824,2200,6640,5578,7452,9091],{6640:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var i=a(8637),s={emits:["back","path-change","play"],mixins:[i.Z],props:{filter:{type:String,default:""}},data(){return{loading:!1}}};const n=s;var o=n},5578:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var i=a(6252),s=a(3577);const n=e=>((0,i.dD)("data-v-2bc923a8"),e=e(),(0,i.Cn)(),e),o={class:"nav"},l={class:"path"},c=n((()=>(0,i._)("i",{class:"fas fa-home"},null,-1))),d=[c],u=n((()=>(0,i._)("span",{class:"separator"},[(0,i._)("i",{class:"fas fa-chevron-right"})],-1))),r=["title","onClick"],f={key:1},p={key:0,class:"separator"},h=n((()=>(0,i._)("i",{class:"fas fa-chevron-right"},null,-1))),v=[h];function g(e,t,a,n,c,h){return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("span",l,[(0,i._)("span",{class:"back token",title:"Back",onClick:t[0]||(t[0]=t=>e.$emit("back"))},d),u]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.path,((t,n)=>((0,i.wg)(),(0,i.iD)("span",{class:"path",key:n},[(0,i._)("span",{class:"token",title:t.title,onClick:e=>h.onClick(t)},[(e.icon=t.icon?.["class"])?((0,i.wg)(),(0,i.iD)("i",{key:0,class:(0,s.C_)(["icon",e.icon])},null,2)):(0,i.kq)("",!0),t.title?((0,i.wg)(),(0,i.iD)("span",f,(0,s.zw)(t.title),1)):(0,i.kq)("",!0)],8,r),(n>0||a.path.length>1)&&n<a.path.length-1?((0,i.wg)(),(0,i.iD)("span",p,v)):(0,i.kq)("",!0)])))),128))])}var y={emit:["back"],props:{path:{type:Array,default:()=>[]}},methods:{onClick(e){e.click&&e.click()}}},k=a(3744);const m=(0,k.Z)(y,[["render",g],["__scopeId","data-v-2bc923a8"]]);var b=m},824:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var i=a(6252);const s={class:"media-youtube-browser"},n={key:1,class:"browser"},o={key:1,class:"body"};function l(e,t,a,l,c,d){const u=(0,i.up)("Loading"),r=(0,i.up)("MediaNav"),f=(0,i.up)("NoToken"),p=(0,i.up)("Feed"),h=(0,i.up)("Index");return(0,i.wg)(),(0,i.iD)("div",s,[e.loading?((0,i.wg)(),(0,i.j4)(u,{key:0})):((0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(r,{path:d.computedPath,onBack:t[0]||(t[0]=t=>e.$emit("back"))},null,8,["path"]),d.authToken?((0,i.wg)(),(0,i.iD)("div",o,["feed"===c.selectedView?((0,i.wg)(),(0,i.j4)(p,{key:0,onPlay:t[1]||(t[1]=t=>e.$emit("play",t))})):((0,i.wg)(),(0,i.j4)(h,{key:1,onSelect:d.selectView},null,8,["onSelect"]))])):((0,i.wg)(),(0,i.j4)(f,{key:0}))]))])}var c=a(6791),d=a(5578),u=a(6640),r=a(7452),f=a(2200),p=a(9091),h={mixins:[u["default"]],components:{Feed:r["default"],Index:f["default"],Loading:c.Z,MediaNav:d["default"],NoToken:p["default"]},data(){return{youtubeConfig:null,selectedView:null,path:[]}},computed:{authToken(){return this.youtubeConfig?.auth_token},computedPath(){return[{title:"YouTube",click:()=>this.selectView(null),icon:{class:"fab fa-youtube"}},...this.path]}},methods:{async loadYoutubeConfig(){this.loading=!0;try{this.youtubeConfig=(await this.request("config.get_plugins")).youtube}finally{this.loading=!1}},selectView(e){this.selectedView=e,this.path=e?.length?[{title:e.slice(0,1).toUpperCase()+e.slice(1)}]:[]}},mounted(){this.loadYoutubeConfig()}},v=a(3744);const g=(0,v.Z)(h,[["render",l],["__scopeId","data-v-1d8ee163"]]);var y=g},7452:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var i=a(6252);const s={class:"media-youtube-feed"};function n(e,t,a,n,o,l){const c=(0,i.up)("Loading"),d=(0,i.up)("NoItems"),u=(0,i.up)("Results");return(0,i.wg)(),(0,i.iD)("div",s,[o.loading?((0,i.wg)(),(0,i.j4)(c,{key:0})):o.feed?.length?((0,i.wg)(),(0,i.j4)(u,{key:2,results:o.feed,sources:{youtube:!0},"selected-result":o.selectedResult,onSelect:t[0]||(t[0]=e=>o.selectedResult=e),onPlay:t[1]||(t[1]=t=>e.$emit("play",t))},null,8,["results","selected-result"])):((0,i.wg)(),(0,i.j4)(d,{key:1,"with-shadow":!1},{default:(0,i.w5)((()=>[(0,i.Uk)(" No videos found. ")])),_:1}))])}var o=a(3222),l=a(6791),c=a(8804),d=a(8637),u={emits:["play"],mixins:[d.Z],components:{Loading:l.Z,NoItems:o.Z,Results:c.Z},data(){return{feed:[],loading:!1,selectedResult:null}},methods:{async loadFeed(){this.loading=!0;try{this.feed=(await this.request("youtube.get_feed")).map((e=>({...e,type:"youtube"})))}finally{this.loading=!1}}},mounted(){this.loadFeed()}},r=a(3744);const f=(0,r.Z)(u,[["render",n],["__scopeId","data-v-d9e6809e"]]);var p=f},2200:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var i=a(6252);const s={class:"youtube-views-browser grid"},n=(0,i._)("div",{class:"icon"},[(0,i._)("i",{class:"fas fa-rss"})],-1),o=(0,i._)("div",{class:"name"},"Feed",-1),l=[n,o],c=(0,i._)("div",{class:"icon"},[(0,i._)("i",{class:"fas fa-list"})],-1),d=(0,i._)("div",{class:"name"},"Playlists",-1),u=[c,d],r=(0,i._)("div",{class:"icon"},[(0,i._)("i",{class:"fas fa-user"})],-1),f=(0,i._)("div",{class:"name"},"Subscriptions",-1),p=[r,f];function h(e,t,a,n,o,c){return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",{class:"item",onClick:t[0]||(t[0]=t=>e.$emit("select","feed"))},l),(0,i._)("div",{class:"item",onClick:t[1]||(t[1]=t=>e.$emit("select","playlists"))},u),(0,i._)("div",{class:"item",onClick:t[2]||(t[2]=t=>e.$emit("select","subscriptions"))},p)])}var v={emits:["select"]},g=a(3744);const y=(0,g.Z)(v,[["render",h]]);var k=y},9091:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var i=a(6252);const s={class:"no-token"},n=(0,i.uE)('<div class="title" data-v-42457341> No <code data-v-42457341>auth_token</code> found in the YouTube configuration. </div><div class="description" data-v-42457341> This integration requires an <code data-v-42457341>auth_token</code> to be set in the <code data-v-42457341>youtube</code> section of the configuration file in order to access your playlists and subscriptions.<br data-v-42457341><br data-v-42457341> Piped auth tokens are currently supported. You can retrieve one through the following procedure: <ol data-v-42457341><li data-v-42457341>Login to your configured Piped instance.</li><li data-v-42457341>Copy the RSS/Atom feed URL on the <i data-v-42457341>Feed</i> tab.</li><li data-v-42457341>Copy the <code data-v-42457341>auth_token</code> query parameter from the URL.</li><li data-v-42457341> Enter it in the <code data-v-42457341>auth_token</code> field in the <code data-v-42457341>youtube</code> section of the configuration file. </li></ol></div>',2),o=[n];function l(e,t){return(0,i.wg)(),(0,i.iD)("div",s,o)}var c=a(3744);const d={},u=(0,c.Z)(d,[["render",l],["__scopeId","data-v-42457341"]]);var r=u}}]);
//# sourceMappingURL=824.9a4325b5.js.map