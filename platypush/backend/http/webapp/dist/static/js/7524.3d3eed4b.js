"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[7524,3673],{3673:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var n=l(6252),a=l(3577),o=l(3540);const i={key:0,src:o,class:"loading"},s={key:1,class:"fas fa-circle-exclamation error"};function u(e,t,l,o,u,r){const c=(0,n.up)("Icon");return(0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)(["entity-icon-container",{"with-color-fill":!!r.colorFill}]),style:(0,a.j5)(r.colorFillStyle)},[l.loading?((0,n.wg)(),(0,n.iD)("img",i)):l.error?((0,n.wg)(),(0,n.iD)("i",s)):((0,n.wg)(),(0,n.j4)(c,(0,a.vs)((0,n.dG)({key:2},r.computedIcon)),null,16))],6)}var r=l(1478),c={name:"EntityIcon",components:{Icon:r.Z},props:{loading:{type:Boolean,default:!1},error:{type:Boolean,default:!1},icon:{type:Object,required:!0},hasColorFill:{type:Boolean,default:!1}},data(){return{component:null,modalVisible:!1}},computed:{colorFill(){return this.hasColorFill&&this.icon.color?this.icon.color:null},colorFillStyle(){return this.colorFill&&!this.error?{background:this.colorFill}:{}},computedIcon(){const e={...this.icon};return this.colorFill&&delete e.color,e},type(){let e=this.entity.type||"";return e.charAt(0).toUpperCase()+e.slice(1)}}},d=l(3744);const v=(0,d.Z)(c,[["render",u],["__scopeId","data-v-e4043550"]]);var p=v},7524:function(e,t,l){l.r(t),l.d(t,{default:function(){return C}});var n=l(6252),a=l(3577),o=l(9963);const i={class:"entity switch-container"},s={class:"col-1 icon"},u={class:"col-s-8 col-m-9 label"},r=["textContent"],c={class:"col-s-3 col-m-2 buttons pull-right"},d=["textContent"],v={class:"row"},p={class:"input"},h=["disabled"],y={key:0,value:"",selected:""},g=["value","selected","textContent"];function f(e,t,l,f,m,w){const _=(0,n.up)("EntityIcon");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",{class:(0,a.C_)(["head",{expanded:m.expanded}])},[(0,n._)("div",s,[(0,n.Wm)(_,{icon:this.value.meta?.icon||{},loading:e.loading,error:e.error},null,8,["icon","loading","error"])]),(0,n._)("div",u,[(0,n._)("div",{class:"name",textContent:(0,a.zw)(e.value.name)},null,8,r)]),(0,n._)("div",c,[w.hasValues?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[0]||(t[0]=(0,o.iM)((e=>m.expanded=!m.expanded),["stop"]))},[(0,n._)("i",{class:(0,a.C_)(["fas",{"fa-angle-up":m.expanded,"fa-angle-down":!m.expanded}])},null,2)])):(0,n.kq)("",!0),null!=e.value?.value?((0,n.wg)(),(0,n.iD)("span",{key:1,class:"value",textContent:(0,a.zw)(e.value.values[e.value.value]||e.value.value)},null,8,d)):(0,n.kq)("",!0)])],2),m.expanded?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"body",onClick:t[2]||(t[2]=(0,o.iM)(((...e)=>w.prevent&&w.prevent(...e)),["stop"]))},[(0,n._)("div",v,[(0,n._)("div",p,[(0,n._)("select",{onInput:t[1]||(t[1]=(...e)=>w.setValue&&w.setValue(...e)),ref:"values",disabled:e.loading},[e.value.is_write_only?((0,n.wg)(),(0,n.iD)("option",y,"--")):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.displayValues,((t,l)=>((0,n.wg)(),(0,n.iD)("option",{value:l,selected:l==e.value.value,key:l,textContent:(0,a.zw)(t)},null,8,g)))),128))],40,h)])])])):(0,n.kq)("",!0)])}var m=l(7909),w=l(3673),_={name:"EnumSwitch",components:{EntityIcon:w["default"]},mixins:[m["default"]],data(){return{expanded:!1}},computed:{hasValues(){return!!Object.values(this?.value?.values||{}).length},displayValues(){return this.value?.values instanceof Array?this.value.values.reduce(((e,t)=>(e[t]=t,e)),{}):this.value?.values||{}}},methods:{prevent(e){return e.stopPropagation(),!1},async setValue(e){if(e.target.value?.length){if(this.$emit("loading",!0),this.value.is_write_only){const e=this;setTimeout((()=>{e.$refs.values.value=""}),1e3)}try{await this.request("entities.execute",{id:this.value.id,action:"set_value",data:e.target.value})}finally{this.$emit("loading",!1)}}}}},k=l(3744);const x=(0,k.Z)(_,[["render",f],["__scopeId","data-v-9441eff8"]]);var C=x},3540:function(e,t,l){e.exports=l.p+"static/img/spinner.c0bee445.gif"}}]);
//# sourceMappingURL=7524.3d3eed4b.js.map