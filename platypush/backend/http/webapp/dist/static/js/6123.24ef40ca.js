"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[6123,5762],{3222:function(e,n,t){t.d(n,{Z:function(){return d}});var l=t(6252),s=t(3577);const i={class:"no-items-container"};function a(e,n,t,a,r,o){return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",{class:(0,s.C_)(["no-items fade-in",{shadow:t.withShadow}])},[(0,l.WI)(e.$slots,"default",{},void 0,!0)],2)])}var r={name:"NoItems",props:{withShadow:{type:Boolean,default:!0}}},o=t(3744);const c=(0,o.Z)(r,[["render",a],["__scopeId","data-v-4856c4d7"]]);var d=c},7018:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var l=t(6252),s=t(3577);const i={class:"header"},a={class:"banner"},r=["src"],o={class:"row"},c=["href"],d={class:"image"},u=["src"],h={class:"info"},g=["href"],p={class:"description"};function f(e,n,t,f,m,y){const _=(0,l.up)("Loading"),w=(0,l.up)("Results");return(0,l.wg)(),(0,l.iD)("div",{class:"media-youtube-channel",onScroll:n[3]||(n[3]=(...e)=>y.onScroll&&y.onScroll(...e))},[m.loading?((0,l.wg)(),(0,l.j4)(_,{key:0})):m.channel?((0,l.wg)(),(0,l.iD)("div",{key:1,class:"channel",onScroll:n[2]||(n[2]=(...e)=>y.onScroll&&y.onScroll(...e))},[(0,l._)("div",i,[(0,l._)("div",a,[m.channel?.banner?.length?((0,l.wg)(),(0,l.iD)("img",{key:0,src:m.channel.banner},null,8,r)):(0,l.kq)("",!0)]),(0,l._)("div",o,[(0,l._)("a",{href:m.channel.url,target:"_blank",rel:"noopener noreferrer"},[(0,l._)("div",d,[m.channel?.image?.length?((0,l.wg)(),(0,l.iD)("img",{key:0,src:m.channel.image},null,8,u)):(0,l.kq)("",!0)])],8,c),(0,l._)("div",h,[(0,l._)("a",{class:"title",href:m.channel.url,target:"_blank",rel:"noopener noreferrer"},(0,s.zw)(m.channel?.name),9,g),(0,l._)("div",p,(0,s.zw)(m.channel?.description),1)])])]),(0,l.Wm)(w,{results:m.channel.items,filter:t.filter,"selected-result":m.selectedResult,ref:"results",onSelect:n[0]||(n[0]=e=>m.selectedResult=e),onPlay:n[1]||(n[1]=n=>e.$emit("play",n))},null,8,["results","filter","selected-result"])],32)):(0,l.kq)("",!0)],32)}t(7658);var m=t(6791),y=t(5390),_=t(8637),w={emits:["play"],mixins:[_.Z],components:{Loading:m.Z,Results:y.Z},props:{id:{type:String,required:!0},filter:{type:String,default:null}},data(){return{channel:null,loading:!1,loadingNextPage:!1,selectedResult:null}},computed:{itemsByUrl(){return this.channel?.items.reduce(((e,n)=>(e[n.url]=n,e)),{})}},methods:{async loadChannel(){this.loading=!0;try{this.channel=await this.request("youtube.get_channel",{id:this.id})}finally{this.loading=!1}},async loadNextPage(){if(this.channel?.next_page_token&&!this.loadingNextPage)try{const e=await this.request("youtube.get_channel",{id:this.id,next_page_token:this.channel.next_page_token});this.channel.items.push(...e.items.filter((e=>!this.itemsByUrl[e.url]))),this.channel.next_page_token=e.next_page_token,this.$refs.results.maxResultIndex+=this.$refs.results.resultIndexStep}finally{this.loadingNextPage=!1}},onScroll(e){const n=e.target;if(!n)return;const t=n.scrollHeight-n.scrollTop<=n.clientHeight+150;t&&this.loadNextPage()}},mounted(){this.loadChannel()}},v=t(3744);const k=(0,v.Z)(w,[["render",f],["__scopeId","data-v-21b0d859"]]);var b=k},7425:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var l=t(6252),s=t(3577);const i={class:"media-youtube-subscriptions"},a={key:0,class:"subscriptions-index"},r={key:2,class:"body grid"},o=["onClick"],c={class:"image"},d=["src","alt"],u={class:"title"},h={key:1,class:"subscription-body"};function g(e,n,t,g,p,f){const m=(0,l.up)("Loading"),y=(0,l.up)("NoItems"),_=(0,l.up)("Channel");return(0,l.wg)(),(0,l.iD)("div",i,[t.selectedChannel?((0,l.wg)(),(0,l.iD)("div",h,[(0,l.Wm)(_,{id:t.selectedChannel,filter:t.filter,onPlay:n[0]||(n[0]=n=>e.$emit("play",n))},null,8,["id","filter"])])):((0,l.wg)(),(0,l.iD)("div",a,[p.loading?((0,l.wg)(),(0,l.j4)(m,{key:0})):p.channels?.length?((0,l.wg)(),(0,l.iD)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.channelsById,((n,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"channel item",key:t,onClick:t=>e.$emit("select",n)},[(0,l._)("div",c,[(0,l._)("img",{src:n.image,alt:n.name},null,8,d)]),(0,l._)("div",u,(0,s.zw)(n.name),1)],8,o)))),128))])):((0,l.wg)(),(0,l.j4)(y,{key:1,"with-shadow":!1},{default:(0,l.w5)((()=>[(0,l.Uk)(" No channels found. ")])),_:1}))]))])}var p=t(7018),f=t(3222),m=t(6791),y=t(8637),_={emits:["play","select"],mixins:[y.Z],components:{Channel:p["default"],Loading:m.Z,NoItems:f.Z},props:{selectedChannel:{type:String,default:null},filter:{type:String,default:null}},data(){return{channels:[],loading:!1}},computed:{channelsById(){return this.channels.filter((e=>!this.filter||e.name.toLowerCase().includes(this.filter.toLowerCase()))).reduce(((e,n)=>(e[n.id]=n,e)),{})}},methods:{async loadSubscriptions(){this.loading=!0;try{this.channels=await this.request("youtube.get_subscriptions")}finally{this.loading=!1}}},mounted(){this.loadSubscriptions()}},w=t(3744);const v=(0,w.Z)(_,[["render",g],["__scopeId","data-v-3ff3db5a"]]);var k=v}}]);
//# sourceMappingURL=6123.24ef40ca.js.map