"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[2844],{6137:function(e,t,s){s.d(t,{Z:function(){return g}});var n=s(6252),i=s(3577),l=s(9963);const a=e=>((0,n.dD)("data-v-8e097228"),e=e(),(0,n.Cn)(),e),c=["checked"],d=a((()=>(0,n._)("div",{class:"switch"},[(0,n._)("div",{class:"dot"})],-1))),o={class:"label"};function v(e,t,s,a,v,u){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["power-switch",{disabled:s.disabled}]),onClick:t[0]||(t[0]=(0,l.iM)(((...e)=>u.onInput&&u.onInput(...e)),["stop"]))},[(0,n._)("input",{type:"checkbox",checked:s.value},null,8,c),(0,n._)("label",null,[d,(0,n._)("span",o,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])])],2)}var u={name:"ToggleSwitch",emits:["input"],props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},methods:{onInput(e){if(this.disabled)return!1;this.$emit("input",e)}}},r=s(3744);const w=(0,r.Z)(u,[["render",v],["__scopeId","data-v-8e097228"]]);var g=w},2844:function(e,t,s){s.r(t),s.d(t,{default:function(){return ue}});var n=s(6252),i=s(3577);const l=e=>((0,n.dD)("data-v-5d844500"),e=e(),(0,n.Cn)(),e),a={class:"switches switchbot-switches"},c={key:1,class:"no-content"},d={key:0,class:"switch-info"},o={class:"row"},v=l((()=>(0,n._)("div",{class:"name"},"Name",-1))),u=["textContent"],r={class:"row"},w=l((()=>(0,n._)("div",{class:"name"},"On",-1))),g=["textContent"],h={key:0,class:"row"},p=l((()=>(0,n._)("div",{class:"name"},"Reachable",-1))),f=["textContent"],m={key:1,class:"row"},D=l((()=>(0,n._)("div",{class:"name"},"Brightness",-1))),_=["textContent"],k={key:2,class:"row"},y=l((()=>(0,n._)("div",{class:"name"},"Color Temperature",-1))),C=["textContent"],x={key:3,class:"row"},q=l((()=>(0,n._)("div",{class:"name"},"Hue",-1))),b=["textContent"],I={key:4,class:"row"},z=l((()=>(0,n._)("div",{class:"name"},"Saturation",-1))),Z=["textContent"],S={key:5,class:"row"},T=l((()=>(0,n._)("div",{class:"name"},"XY",-1))),$=["textContent"],M={key:6,class:"row"},j=l((()=>(0,n._)("div",{class:"name"},"Product",-1))),B=["textContent"],N={key:7,class:"row"},L=l((()=>(0,n._)("div",{class:"name"},"Manufacturer",-1))),H=["textContent"],O={key:8,class:"row"},R=l((()=>(0,n._)("div",{class:"name"},"Type",-1))),E=["textContent"],P={key:9,class:"row"},W=l((()=>(0,n._)("div",{class:"name"},"ID on network",-1))),U=["textContent"],Y={key:10,class:"row"},K=l((()=>(0,n._)("div",{class:"name"},"Unique ID",-1))),X=["textContent"],A={key:11,class:"row"},F=l((()=>(0,n._)("div",{class:"name"},"Software version",-1))),G=["textContent"],J={key:12,class:"row"},Q=l((()=>(0,n._)("div",{class:"name"},"Last software update",-1))),V=["textContent"],ee={key:13,class:"row"},te=l((()=>(0,n._)("div",{class:"name"},"Update state",-1))),se=["textContent"];function ne(e,t,s,l,ne,ie){const le=(0,n.up)("Loading"),ae=(0,n.up)("Switch"),ce=(0,n.up)("Modal");return(0,n.wg)(),(0,n.iD)("div",a,[e.loading?((0,n.wg)(),(0,n.j4)(le,{key:0})):Object.keys(e.devices).length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",c,"No Hue lights found.")),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.devices,((t,s)=>((0,n.wg)(),(0,n.j4)(ae,{loading:e.loading,name:s,state:t.on,onToggle:e=>ie.toggle(s),key:s,"has-info":!0,onInfo:t=>{e.selectedDevice=s,e.$refs.switchInfoModal.show()}},null,8,["loading","name","state","onToggle","onInfo"])))),128)),(0,n.Wm)(ce,{title:"Device Info",ref:"switchInfoModal"},{default:(0,n.w5)((()=>[e.selectedDevice?((0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",o,[v,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].name)},null,8,u)]),(0,n._)("div",r,[w,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].on)},null,8,g)]),null!=e.devices[e.selectedDevice].reachable?((0,n.wg)(),(0,n.iD)("div",h,[p,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].reachable)},null,8,f)])):(0,n.kq)("",!0),null!=e.devices[e.selectedDevice].bri?((0,n.wg)(),(0,n.iD)("div",m,[D,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].bri)},null,8,_)])):(0,n.kq)("",!0),null!=e.devices[e.selectedDevice].ct?((0,n.wg)(),(0,n.iD)("div",k,[y,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].ct)},null,8,C)])):(0,n.kq)("",!0),null!=e.devices[e.selectedDevice].hue?((0,n.wg)(),(0,n.iD)("div",x,[q,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].hue)},null,8,b)])):(0,n.kq)("",!0),null!=e.devices[e.selectedDevice].sat?((0,n.wg)(),(0,n.iD)("div",I,[z,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].sat)},null,8,Z)])):(0,n.kq)("",!0),null!=e.devices[e.selectedDevice].xy?((0,n.wg)(),(0,n.iD)("div",S,[T,(0,n._)("div",{class:"value",textContent:(0,i.zw)(`[${e.devices[e.selectedDevice].xy.join(", ")}]`)},null,8,$)])):(0,n.kq)("",!0),null!=e.devices[e.selectedDevice].productname?((0,n.wg)(),(0,n.iD)("div",M,[j,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].productname)},null,8,B)])):(0,n.kq)("",!0),null!=e.devices[e.selectedDevice].manufacturername?((0,n.wg)(),(0,n.iD)("div",N,[L,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].manufacturername)},null,8,H)])):(0,n.kq)("",!0),null!=e.devices[e.selectedDevice].type?((0,n.wg)(),(0,n.iD)("div",O,[R,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].type)},null,8,E)])):(0,n.kq)("",!0),null!=e.devices[e.selectedDevice].id?((0,n.wg)(),(0,n.iD)("div",P,[W,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].id)},null,8,U)])):(0,n.kq)("",!0),null!=e.devices[e.selectedDevice].uniqueid?((0,n.wg)(),(0,n.iD)("div",Y,[K,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].uniqueid)},null,8,X)])):(0,n.kq)("",!0),null!=e.devices[e.selectedDevice].swversion?((0,n.wg)(),(0,n.iD)("div",A,[F,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].swversion)},null,8,G)])):(0,n.kq)("",!0),e.devices[e.selectedDevice].swupdate?.lastinstall?((0,n.wg)(),(0,n.iD)("div",J,[Q,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.formatDate(e.devices[e.selectedDevice].swupdate.lastinstall,!0))},null,8,V)])):(0,n.kq)("",!0),e.devices[e.selectedDevice].swupdate?.state?((0,n.wg)(),(0,n.iD)("div",ee,[te,(0,n._)("div",{class:"value",textContent:(0,i.zw)(e.devices[e.selectedDevice].swupdate.state)},null,8,se)])):(0,n.kq)("",!0)])):(0,n.kq)("",!0)])),_:1},512)])}var ie=s(1232),le=s(4004),ae=s(8671),ce=s(9642),de={name:"LightHue",components:{Modal:ce.Z,Switch:ae.Z,Loading:ie.Z},mixins:[le.Z],methods:{async toggle(e){const t=await this.request(`${this.pluginName}.toggle`,{lights:[e]});t.success&&(this.devices[e].on=!this.devices[e].on)}}},oe=s(3744);const ve=(0,oe.Z)(de,[["render",ne],["__scopeId","data-v-5d844500"]]);var ue=ve},4004:function(e,t,s){s.d(t,{Z:function(){return a}});var n=s(2628),i={name:"SwitchesMixin",mixins:[n.Z],props:{pluginName:{type:String,required:!0},bus:{type:Object,required:!0},config:{type:Object,default:()=>({})},selected:{type:Boolean,default:!1}},data(){return{loading:!1,initialized:!1,selectedDevice:null,devices:{}}},methods:{onRefreshEvent(e){e===this.pluginName&&this.refresh()},async toggle(e,t){null==t&&(t=e);const s=await this.request(`${this.pluginName}.toggle`,{device:t});this.devices[e].on=s.on},async refresh(){this.loading=!0;try{this.devices=(await this.request(`${this.pluginName}.switch_status`)).reduce(((e,t)=>{const s=t.name?.length?t.name:t.id;return e[s]=t,e}),{})}finally{this.loading=!1}}},mounted(){this.$watch((()=>this.selected),(e=>{e&&!this.initialized&&(this.refresh(),this.initialized=!0)})),this.bus.on("refresh",this.onRefreshEvent)},unmounted(){this.bus.off("refresh",this.onRefreshEvent)}};const l=i;var a=l},8671:function(e,t,s){s.d(t,{Z:function(){return m}});var n=s(6252),i=s(9963),l=s(3577);const a=e=>((0,n.dD)("data-v-38eb9831"),e=e(),(0,n.Cn)(),e),c={class:"name col-l-10 col-m-9 col-s-8"},d=a((()=>(0,n._)("i",{class:"fa fa-info"},null,-1))),o=[d],v=["textContent"],u={class:"toggler col-l-2 col-m-3 col-s-4"};function r(e,t,s,a,d,r){const w=(0,n.up)("Loading"),g=(0,n.up)("ToggleSwitch");return(0,n.wg)(),(0,n.iD)("div",{class:"switch",onClick:t[1]||(t[1]=(0,i.iM)(((...e)=>r.onToggle&&r.onToggle(...e)),["stop"]))},[s.loading?((0,n.wg)(),(0,n.j4)(w,{key:0})):(0,n.kq)("",!0),(0,n._)("div",c,[s.hasInfo?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>r.onInfo&&r.onInfo(...e)),["prevent"]))},o)):(0,n.kq)("",!0),(0,n._)("span",{class:"name-content",textContent:(0,l.zw)(s.name)},null,8,v)]),(0,n._)("div",u,[(0,n.Wm)(g,{disabled:s.loading,value:s.state,onInput:r.onToggle},null,8,["disabled","value","onInput"])])])}var w=s(6137),g=s(1232),h={name:"Switch",components:{Loading:g.Z,ToggleSwitch:w.Z},emits:["toggle","info"],props:{name:{type:String,required:!0},state:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},hasInfo:{type:Boolean,default:!1},id:{type:String}},methods:{onInfo(e){return e.stopPropagation(),this.$emit("info"),!1},onToggle(e){return e.stopPropagation(),this.$emit("toggle"),!1}}},p=s(3744);const f=(0,p.Z)(h,[["render",r],["__scopeId","data-v-38eb9831"]]);var m=f}}]);
//# sourceMappingURL=2844.357b0781.js.map