"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[886],{3222:function(e,t,s){s.d(t,{Z:function(){return r}});var n=s(6252),d=s(3577);const l={class:"no-items-container"};function o(e,t,s,o,a,u){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",{class:(0,d.C_)(["no-items fade-in",{shadow:s.withShadow}])},[(0,n.WI)(e.$slots,"default",{},void 0,!0)],2)])}var a={name:"NoItems",props:{withShadow:{type:Boolean,default:!0}}},u=s(3744);const i=(0,u.Z)(a,[["render",o],["__scopeId","data-v-4856c4d7"]]);var r=i},886:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var n=s(6252);const d={class:"media-youtube-feed"};function l(e,t,s,l,o,a){const u=(0,n.up)("Loading"),i=(0,n.up)("NoItems"),r=(0,n.up)("Results");return(0,n.wg)(),(0,n.iD)("div",d,[o.loading?((0,n.wg)(),(0,n.j4)(u,{key:0})):o.feed?.length?((0,n.wg)(),(0,n.j4)(r,{key:2,results:o.feed,filter:s.filter,sources:{youtube:!0},"selected-result":o.selectedResult,onSelect:t[0]||(t[0]=e=>o.selectedResult=e),onPlay:t[1]||(t[1]=t=>e.$emit("play",t))},null,8,["results","filter","selected-result"])):((0,n.wg)(),(0,n.j4)(i,{key:1,"with-shadow":!1},{default:(0,n.w5)((()=>[(0,n.Uk)(" No videos found. ")])),_:1}))])}var o=s(3222),a=s(6791),u=s(5390),i=s(8637),r={emits:["play"],mixins:[i.Z],components:{Loading:a.Z,NoItems:o.Z,Results:u.Z},props:{filter:{type:String,default:null}},data(){return{feed:[],loading:!1,selectedResult:null}},methods:{async loadFeed(){this.loading=!0;try{this.feed=(await this.request("youtube.get_feed")).map((e=>({...e,type:"youtube"})))}finally{this.loading=!1}}},mounted(){this.loadFeed()}},c=s(3744);const f=(0,c.Z)(r,[["render",l],["__scopeId","data-v-fc65dae6"]]);var p=f}}]);
//# sourceMappingURL=886.3c22db06.js.map