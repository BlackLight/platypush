"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[359],{8816:function(e,t,a){a.d(t,{Z:function(){return y}});var l=a(6252),n=a(3577),s=a(9963);const i={class:"slider-wrapper"},u=["textContent"],r=["textContent"],o={class:"slider-container"},d=["min","max","step","disabled","value"],c={class:"track-inner",ref:"track"},p={class:"thumb",ref:"thumb"},v=["textContent"];function h(e,t,a,h,g,m){return(0,l.wg)(),(0,l.iD)("label",i,[a.withRange?((0,l.wg)(),(0,l.iD)("span",{key:0,class:(0,n.C_)(["range-labels",{"with-label":a.withLabel}])},[a.withRange?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"label left",textContent:(0,n.zw)(a.range[0])},null,8,u)):(0,l.kq)("",!0),a.withRange?((0,l.wg)(),(0,l.iD)("span",{key:1,class:"label right",textContent:(0,n.zw)(a.range[1])},null,8,r)):(0,l.kq)("",!0)],2)):(0,l.kq)("",!0),(0,l._)("span",o,[(0,l._)("input",{class:(0,n.C_)(["slider",{"with-label":a.withLabel}]),type:"range",min:a.range[0],max:a.range[1],step:a.step,disabled:a.disabled,value:a.value,ref:"range",onInput:t[0]||(t[0]=(0,s.iM)(((...e)=>m.onUpdate&&m.onUpdate(...e)),["stop"])),onChange:t[1]||(t[1]=(0,s.iM)(((...e)=>m.onUpdate&&m.onUpdate(...e)),["stop"]))},null,42,d),(0,l._)("div",{class:(0,n.C_)(["track",{"with-label":a.withLabel}])},[(0,l._)("div",c,null,512)],2),(0,l._)("div",p,null,512),a.withLabel?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"label",textContent:(0,n.zw)(a.value),ref:"label"},null,8,v)):(0,l.kq)("",!0)])])}var g={name:"Slider",emits:["input","change","mouseup","mousedown","touchstart","touchend","keyup","keydown"],props:{value:{type:Number},disabled:{type:Boolean,default:!1},range:{type:Array,default:()=>[0,100]},step:{type:Number,default:1},withLabel:{type:Boolean,default:!1},withRange:{type:Boolean,default:!1}},methods:{onUpdate(e){this.update(e.target.value),this.$emit(e.type,{...e,target:{...e.target,value:this.$refs.range.value}})},update(e){const t=this.$refs.range.clientWidth,a=(e-this.range[0])/(this.range[1]-this.range[0]),l=a*t,n=this.$refs.thumb;n.style.left=l-n.clientWidth/2+"px",this.$refs.thumb.style.transform=`translate(-${a}%, -50%)`,this.$refs.track.style.width=`${l}px`}},mounted(){null!=this.value&&this.update(this.value),this.$watch((()=>this.value),(e=>this.update(e)))}},m=a(3744);const w=(0,m.Z)(g,[["render",h],["__scopeId","data-v-4b38623f"]]);var y=w},359:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var l=a(6252),n=a(3577),s=a(9963);const i={class:"entity dimmer-container"},u={class:"col-1 icon"},r={class:"col-s-7 col-m-8 label"},o=["textContent"],d={class:"col-s-4 col-m-3 buttons pull-right"},c=["textContent"],p={class:"row"},v={key:0,class:"input"},h={class:"col-10"},g={class:"col-2 value"},m=["value"],w={key:1,class:"input"},y={class:"col-12 value"},f=["value"];function b(e,t,a,b,_,k){const C=(0,l.up)("EntityIcon"),x=(0,l.up)("Slider");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",{class:(0,n.C_)(["head",{collapsed:e.collapsed}])},[(0,l._)("div",u,[(0,l.Wm)(C,{entity:e.value,loading:e.loading,error:e.error},null,8,["entity","loading","error"])]),(0,l._)("div",r,[(0,l._)("div",{class:"name",textContent:(0,n.zw)(e.value.name)},null,8,o)]),(0,l._)("div",d,[null!=k.parsedValue?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"value-percent",textContent:(0,n.zw)(k.parsedValue)},null,8,c)):(0,l.kq)("",!0),(0,l._)("button",{onClick:t[0]||(t[0]=(0,s.iM)((t=>e.collapsed=!e.collapsed),["stop"]))},[(0,l._)("i",{class:(0,n.C_)(["fas",{"fa-angle-up":!e.collapsed,"fa-angle-down":e.collapsed}])},null,2)])])],2),e.collapsed?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",{key:0,class:"body",onClick:t[3]||(t[3]=(0,s.iM)(((...e)=>k.prevent&&k.prevent(...e)),["stop"]))},[(0,l._)("div",p,[null!=e.value?.min&&null!=e.value?.max?((0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("div",h,[(0,l.Wm)(x,{range:[e.value.min,e.value.max],"with-range":"",value:e.value.value,onInput:k.setValue},null,8,["range","value","onInput"])]),(0,l._)("div",g,[(0,l._)("input",{type:"number",value:e.value.value,onChange:t[1]||(t[1]=(...e)=>k.setValue&&k.setValue(...e))},null,40,m)])])):((0,l.wg)(),(0,l.iD)("div",w,[(0,l._)("div",y,[(0,l._)("input",{type:"number",value:e.value.value,onChange:t[2]||(t[2]=(...e)=>k.setValue&&k.setValue(...e))},null,40,f)])]))])]))])}var _=a(8816),k=a(7909),C=a(5017),x={name:"Dimmer",components:{Slider:_.Z,EntityIcon:C["default"]},mixins:[k["default"]],computed:{parsedValue(){if(this.value?.is_write_only||null==this.value?.value)return null;let e=this.value.value;return this.value.unit&&(e=`${e} ${this.value.unit}`),e}},methods:{prevent(e){return e.stopPropagation(),!1},async setValue(e){if(e.target.value?.length){this.$emit("loading",!0);try{await this.request("entities.execute",{id:this.value.id,action:"set",value:+e.target.value})}finally{this.$emit("loading",!1)}}}}},$=a(3744);const D=(0,$.Z)(x,[["render",b],["__scopeId","data-v-231c14b6"]]);var V=D}}]);
//# sourceMappingURL=359.a99a1eab.js.map