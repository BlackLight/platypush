"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[7420],{7420:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var s=r(6252),i=r(3577);const n={class:"rss-news"},u={key:0,class:"article"},l=["textContent"],c=["textContent"],a=["textContent"];function h(e,t,r,h,d,o){return(0,s.wg)(),(0,s.iD)("div",n,[e.currentArticle?((0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",{class:"source",textContent:(0,i.zw)(e.currentArticle.feed_title||e.currentArticle.feed_url)},null,8,l),(0,s._)("div",{class:"title",textContent:(0,i.zw)(e.currentArticle.title)},null,8,c),(0,s._)("div",{class:"published",textContent:(0,i.zw)(new Date(e.currentArticle.published).toDateString()+", "+new Date(e.currentArticle.published).toTimeString().substring(0,5))},null,8,a)])):(0,s.kq)("",!0)])}var d=r(2628),o={name:"RssNews",mixins:[d.Z],props:{limit:{type:Number,required:!1,default:25},refreshSeconds:{type:Number,required:!1,default:15}},data:function(){return{articles:[],queue:[],currentArticle:void 0}},methods:{refresh:async function(){this.queue.length||(this.articles=await this.request("rss.get_latest_entries",{limit:this.limit}),this.queue=[...this.articles].reverse()),this.queue.length&&(this.currentArticle=this.queue.pop())}},mounted:function(){this.refresh(),setInterval(this.refresh,parseInt((1e3*this.refreshSeconds).toFixed(0)))}},f=r(3744);const p=(0,f.Z)(o,[["render",h],["__scopeId","data-v-24745ce0"]]);var v=p}}]);
//# sourceMappingURL=7420.a460b393.js.map
