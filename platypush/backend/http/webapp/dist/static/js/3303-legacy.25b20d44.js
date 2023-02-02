"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[3303,3459],{6:function(t,e,n){n.d(e,{Z:function(){return f}});var o=n(6252),i=n(3577),l=n(9963),a=function(t){return(0,o.dD)("data-v-a6396ae8"),t=t(),(0,o.Cn)(),t},r=["checked"],c=a((function(){return(0,o._)("div",{class:"switch"},[(0,o._)("div",{class:"dot"})],-1)})),u={class:"label"};function s(t,e,n,a,s,d){return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["power-switch",{disabled:n.disabled}]),onClick:e[0]||(e[0]=(0,l.iM)((function(){return d.onInput&&d.onInput.apply(d,arguments)}),["stop"]))},[(0,o._)("input",{type:"checkbox",checked:n.value},null,8,r),(0,o._)("label",null,[c,(0,o._)("span",u,[(0,o.WI)(t.$slots,"default",{},void 0,!0)])])],2)}var d={name:"ToggleSwitch",emits:["input"],props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},methods:{onInput:function(t){if(this.disabled)return!1;this.$emit("input",t)}}},p=n(3744);const v=(0,p.Z)(d,[["render",s],["__scopeId","data-v-a6396ae8"]]);var f=v},3459:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var o=n(6252),i=n(3577),l=n(3540),a={key:0,src:l,class:"loading"},r={key:1,class:"fas fa-circle-exclamation error"};function c(t,e,n,l,c,u){var s=(0,o.up)("Icon");return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["entity-icon-container",{"with-color-fill":!!u.colorFill}]),style:(0,i.j5)(u.colorFillStyle)},[n.loading?((0,o.wg)(),(0,o.iD)("img",a)):n.error?((0,o.wg)(),(0,o.iD)("i",r)):((0,o.wg)(),(0,o.j4)(s,(0,i.vs)((0,o.dG)({key:2},u.computedIconNormalized)),null,16))],6)}var u=n(4648),s=(n(7941),n(7042),n(1478)),d={name:"EntityIcon",components:{Icon:s.Z},props:{loading:{type:Boolean,default:!1},error:{type:Boolean,default:!1},entity:{type:Object,required:!0},icon:{type:Object,default:function(){}},hasColorFill:{type:Boolean,default:!1}},data:function(){return{component:null,modalVisible:!1}},computed:{computedIcon:function(){var t,e,n=(0,u.Z)({},(null===(t=this.entity)||void 0===t||null===(e=t.meta)||void 0===e?void 0:e.icon)||{});return Object.keys(this.icon||{}).length&&(n=this.icon),(0,u.Z)({},n)},colorFill:function(){return this.hasColorFill&&this.computedIcon.color},colorFillStyle:function(){return this.colorFill&&!this.error?{background:this.colorFill}:{}},computedIconNormalized:function(){var t=(0,u.Z)({},this.computedIcon);return this.colorFill&&delete t.color,t},type:function(){var t=this.entity.type||"";return t.charAt(0).toUpperCase()+t.slice(1)}}},p=n(3744);const v=(0,p.Z)(d,[["render",c],["__scopeId","data-v-4fad24e6"]]);var f=v},3303:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});n(8309);var o=n(6252),i=n(3577),l=n(9963),a={class:"entity switch-container"},r={class:"head"},c={class:"col-1 icon"},u={class:"col-9 label"},s=["textContent"],d={class:"col-2 switch pull-right"};function p(t,e,n,p,v,f){var h=(0,o.up)("EntityIcon"),g=(0,o.up)("ToggleSwitch");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",r,[(0,o._)("div",c,[(0,o.Wm)(h,{entity:t.value,loading:t.loading,error:t.error},null,8,["entity","loading","error"])]),(0,o._)("div",u,[(0,o._)("div",{class:"name",textContent:(0,i.zw)(t.value.name)},null,8,s)]),(0,o._)("div",d,[(0,o.Wm)(g,{value:!t.value.is_write_only&&t.value.state,disabled:t.loading||t.value.is_read_only,onInput:f.toggle,onClick:e[0]||(e[0]=(0,l.iM)((function(){}),["stop"]))},null,8,["value","disabled","onInput"])])])])}var v=n(8534),f=(n(5666),n(6)),h=n(3459),g=n(7909),m={name:"Switch",components:{ToggleSwitch:f.Z,EntityIcon:h["default"]},mixins:[g["default"]],methods:{toggle:function(t){var e=this;return(0,v.Z)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.stopPropagation(),e.$emit("loading",!0),n.prev=2,n.next=5,e.request("entities.execute",{id:e.value.id,action:"toggle"});case 5:e.value.is_write_only&&(o=e,o.value.state=!0,setTimeout((function(){return o.value.state=!1}),250));case 6:return n.prev=6,e.$emit("loading",!1),n.finish(6);case 9:case"end":return n.stop()}}),n,null,[[2,,6,9]])})))()}}},y=n(3744);const w=(0,y.Z)(m,[["render",p],["__scopeId","data-v-2aaabd26"]]);var _=w},3540:function(t,e,n){t.exports=n.p+"static/img/spinner.c0bee445.gif"}}]);
//# sourceMappingURL=3303-legacy.25b20d44.js.map