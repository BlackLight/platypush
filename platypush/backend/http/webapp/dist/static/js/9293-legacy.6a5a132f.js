"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[9293,3459],{1583:function(e,t,n){n.d(t,{Z:function(){return w}});var l=n(6252),a=n(3577),i=n(9963),r={class:"slider-wrapper"},o=["textContent"],u=["textContent"],s={class:"slider-container"},c=["min","max","step","disabled","value"],d={class:"track-inner",ref:"track"},p={class:"thumb",ref:"thumb"},v=["textContent"];function h(e,t,n,h,f,g){return(0,l.wg)(),(0,l.iD)("label",r,[n.withRange?((0,l.wg)(),(0,l.iD)("span",{key:0,class:(0,a.C_)(["range-labels",{"with-label":n.withLabel}])},[n.withRange?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"label left",textContent:(0,a.zw)(n.range[0])},null,8,o)):(0,l.kq)("",!0),n.withRange?((0,l.wg)(),(0,l.iD)("span",{key:1,class:"label right",textContent:(0,a.zw)(n.range[1])},null,8,u)):(0,l.kq)("",!0)],2)):(0,l.kq)("",!0),(0,l._)("span",s,[(0,l._)("input",{class:(0,a.C_)(["slider",{"with-label":n.withLabel}]),type:"range",min:n.range[0],max:n.range[1],step:n.step,disabled:n.disabled,value:n.value,ref:"range",onInput:t[0]||(t[0]=(0,i.iM)((function(){return g.onUpdate&&g.onUpdate.apply(g,arguments)}),["stop"])),onChange:t[1]||(t[1]=(0,i.iM)((function(){return g.onUpdate&&g.onUpdate.apply(g,arguments)}),["stop"]))},null,42,c),(0,l._)("div",{class:(0,a.C_)(["track",{"with-label":n.withLabel}])},[(0,l._)("div",d,null,512)],2),(0,l._)("div",p,null,512),n.withLabel?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"label",textContent:(0,a.zw)(n.value),ref:"label"},null,8,v)):(0,l.kq)("",!0)])])}var f=n(4648),g=(n(9653),{name:"Slider",emits:["input","change","mouseup","mousedown","touchstart","touchend","keyup","keydown"],props:{value:{type:Number},disabled:{type:Boolean,default:!1},range:{type:Array,default:function(){return[0,100]}},step:{type:Number,default:1},withLabel:{type:Boolean,default:!1},withRange:{type:Boolean,default:!1}},methods:{onUpdate:function(e){this.update(e.target.value),this.$emit(e.type,(0,f.Z)((0,f.Z)({},e),{},{target:(0,f.Z)((0,f.Z)({},e.target),{},{value:this.$refs.range.value})}))},update:function(e){var t=this.$refs.range.clientWidth,n=(e-this.range[0])/(this.range[1]-this.range[0]),l=n*t,a=this.$refs.thumb;a.style.left="".concat(l-a.clientWidth/2,"px"),this.$refs.thumb.style.transform="translate(-".concat(n,"%, -50%)"),this.$refs.track.style.width="".concat(l,"px")}},mounted:function(){var e=this;null!=this.value&&this.update(this.value),this.$watch((function(){return e.value}),(function(t){return e.update(t)}))}}),m=n(3744);const y=(0,m.Z)(g,[["render",h],["__scopeId","data-v-28d31846"]]);var w=y},9293:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});n(8309);var l=n(6252),a=n(3577),i=n(9963),r={class:"entity dimmer-container"},o={class:"col-1 icon"},u={class:"col-s-8 col-m-9 label"},s=["textContent"],c={class:"col-s-3 col-m-2 buttons pull-right"},d=["textContent"],p={class:"row"},v={key:0,class:"input"},h={class:"col-10"},f={class:"col-2 value"},g=["value"],m={key:1,class:"input"},y={class:"col-12 value"},w=["value"];function b(e,t,n,b,k,_){var C,x,I=(0,l.up)("EntityIcon"),D=(0,l.up)("Slider");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",{class:(0,a.C_)(["head",{collapsed:e.collapsed}])},[(0,l._)("div",o,[(0,l.Wm)(I,{entity:e.value,loading:e.loading,error:e.error},null,8,["entity","loading","error"])]),(0,l._)("div",u,[(0,l._)("div",{class:"name",textContent:(0,a.zw)(e.value.name)},null,8,s)]),(0,l._)("div",c,[(0,l._)("button",{onClick:t[0]||(t[0]=(0,i.iM)((function(t){return e.collapsed=!e.collapsed}),["stop"]))},[(0,l._)("i",{class:(0,a.C_)(["fas",{"fa-angle-up":!e.collapsed,"fa-angle-down":e.collapsed}])},null,2)]),null!=_.parsedValue?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"value-percent",textContent:(0,a.zw)(_.parsedValue)},null,8,d)):(0,l.kq)("",!0)])],2),e.collapsed?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",{key:0,class:"body",onClick:t[3]||(t[3]=(0,i.iM)((function(){return _.prevent&&_.prevent.apply(_,arguments)}),["stop"]))},[(0,l._)("div",p,[null!=(null===(C=e.value)||void 0===C?void 0:C.min)&&null!=(null===(x=e.value)||void 0===x?void 0:x.max)?((0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("div",h,[(0,l.Wm)(D,{range:[e.value.min,e.value.max],"with-range":"",value:e.value.value,onInput:_.setValue},null,8,["range","value","onInput"])]),(0,l._)("div",f,[(0,l._)("input",{type:"number",value:e.value.value,onChange:t[1]||(t[1]=function(){return _.setValue&&_.setValue.apply(_,arguments)})},null,40,g)])])):((0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("div",y,[(0,l._)("input",{type:"number",value:e.value.value,onChange:t[2]||(t[2]=function(){return _.setValue&&_.setValue.apply(_,arguments)})},null,40,w)])]))])]))])}var k=n(8534),_=(n(5666),n(1583)),C=n(7909),x=n(3459),I={name:"Dimmer",components:{Slider:_.Z,EntityIcon:x["default"]},mixins:[C["default"]],computed:{parsedValue:function(){var e,t;return null!==(e=this.value)&&void 0!==e&&e.is_write_only||null==(null===(t=this.value)||void 0===t?void 0:t.value)?null:this.value.value}},methods:{prevent:function(e){return e.stopPropagation(),!1},setValue:function(e){var t=this;return(0,k.Z)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(null!==(l=e.target.value)&&void 0!==l&&l.length){n.next=2;break}return n.abrupt("return");case 2:return t.$emit("loading",!0),n.prev=3,n.next=6,t.request("entities.execute",{id:t.value.id,action:"set_value",data:+e.target.value});case 6:return n.prev=6,t.$emit("loading",!1),n.finish(6);case 9:case"end":return n.stop()}}),n,null,[[3,,6,9]])})))()}}},D=n(3744);const Z=(0,D.Z)(I,[["render",b],["__scopeId","data-v-714e3d8a"]]);var V=Z},3459:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var l=n(6252),a=n(3577),i=n(3540),r={key:0,src:i,class:"loading"},o={key:1,class:"fas fa-circle-exclamation error"};function u(e,t,n,i,u,s){var c=(0,l.up)("Icon");return(0,l.wg)(),(0,l.iD)("div",{class:(0,a.C_)(["entity-icon-container",{"with-color-fill":!!s.colorFill}]),style:(0,a.j5)(s.colorFillStyle)},[n.loading?((0,l.wg)(),(0,l.iD)("img",r)):n.error?((0,l.wg)(),(0,l.iD)("i",o)):((0,l.wg)(),(0,l.j4)(c,(0,a.vs)((0,l.dG)({key:2},s.computedIconNormalized)),null,16))],6)}var s=n(4648),c=(n(7941),n(7042),n(1478)),d={name:"EntityIcon",components:{Icon:c.Z},props:{loading:{type:Boolean,default:!1},error:{type:Boolean,default:!1},entity:{type:Object,required:!0},icon:{type:Object,default:function(){}},hasColorFill:{type:Boolean,default:!1}},data:function(){return{component:null,modalVisible:!1}},computed:{computedIcon:function(){var e,t,n=(0,s.Z)({},(null===(e=this.entity)||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.icon)||{});return Object.keys(this.icon||{}).length&&(n=this.icon),(0,s.Z)({},n)},colorFill:function(){return this.hasColorFill&&this.computedIcon.color},colorFillStyle:function(){return this.colorFill&&!this.error?{background:this.colorFill}:{}},computedIconNormalized:function(){var e=(0,s.Z)({},this.computedIcon);return this.colorFill&&delete e.color,e},type:function(){var e=this.entity.type||"";return e.charAt(0).toUpperCase()+e.slice(1)}}},p=n(3744);const v=(0,p.Z)(d,[["render",u],["__scopeId","data-v-4fad24e6"]]);var h=v},3540:function(e,t,n){e.exports=n.p+"static/img/spinner.c0bee445.gif"}}]);
//# sourceMappingURL=9293-legacy.6a5a132f.js.map