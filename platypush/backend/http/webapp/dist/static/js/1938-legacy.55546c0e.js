"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[1938],{8825:function(e,n,t){t.d(n,{Z:function(){return x}});var a=t(6252),r=t(9963),l=function(e){return(0,a.dD)("data-v-a248454a"),e=e(),(0,a.Cn)(),e},u={class:"tts-container"},i={class:"field text-container"},s=["disabled"],c={class:"field lang-container"},o=["disabled"],d={class:"field buttons"},p=["disabled"],f=l((function(){return(0,a._)("i",{class:"fa fa-volume-up"},null,-1)})),g=[f];function v(e,n,t,l,f,v){return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("form",{onSubmit:n[0]||(n[0]=(0,r.iM)((function(){return v.talk&&v.talk.apply(v,arguments)}),["prevent"]))},[(0,a._)("div",i,[(0,a._)("label",null,[(0,a._)("input",{type:"text",name:"text",placeholder:"Text to say",disabled:f.talking},null,8,s)])]),(0,a._)("div",c,[(0,a._)("label",null,[(0,a._)("input",{type:"text",name:"language",placeholder:"Language code",disabled:f.talking},null,8,o)])]),(0,a._)("div",d,[(0,a._)("button",{type:"submit",disabled:f.talking},g,8,p)])],32)])}var m=t(9584),b=t(8534),k=(t(5666),t(1539),t(8309),t(2628)),h={name:"Panel",mixins:[k.Z],props:{pluginName:{type:String,required:!0}},data:function(){return{talking:!1}},methods:{talk:function(e){var n=this;return(0,b.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=(0,m.Z)(e.target.querySelectorAll("input")).reduce((function(e,n){return n.value.length&&(e[n.name]=n.value),e}),{}),n.talking=!0,t.prev=2,t.next=5,n.request("".concat(n.pluginName,".say"),a);case 5:return t.prev=5,n.talking=!1,t.finish(5);case 8:case"end":return t.stop()}}),t,null,[[2,,5,8]])})))()}}},_=t(3744);const y=(0,_.Z)(h,[["render",v],["__scopeId","data-v-a248454a"]]);var x=y},1938:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var a=t(6252);function r(e,n,t,r,l,u){var i=(0,a.up)("Panel");return(0,a.wg)(),(0,a.j4)(i,{"plugin-name":"tts.google"})}var l=t(8825),u={name:"Tts",components:{Panel:l.Z}},i=t(3744);const s=(0,i.Z)(u,[["render",r]]);var c=s}}]);
//# sourceMappingURL=1938-legacy.55546c0e.js.map
