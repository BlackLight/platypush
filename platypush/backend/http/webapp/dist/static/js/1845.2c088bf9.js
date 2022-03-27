"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[1845],{4212:function(e,t,n){n.d(t,{N:function(){return o}});class o{constructor(e){if(this.ranges={hue:[0,360],sat:[0,100],bri:[0,100],ct:[154,500]},e)for(const t of Object.keys(this.ranges))e[t]&&(this.ranges[t]=e[t])}normalize(e,t,n){return n[0]+(e-t[0])*(n[1]-n[0])/(t[1]-t[0])}hslToRgb(e,t,n){[e,t,n]=[this.normalize(e,this.ranges.hue,[0,360]),this.normalize(t,this.ranges.sat,[0,100]),this.normalize(n,this.ranges.bri,[0,100])],n/=100;const o=t*Math.min(n,1-n)/100,s=t=>{const s=(t+e/30)%12,i=n-o*Math.max(Math.min(s-3,9-s,1),-1);return Math.round(255*i)};return[s(0),s(8),s(4)]}rgbToHsl(e,t,n){e/=255,t/=255,n/=255;const o=Math.max(e,t,n),s=Math.min(e,t,n);let i,l,a=(o+s)/2;if(o===s)i=l=0;else{const r=o-s;switch(l=a>.5?r/(2-o-s):r/(o+s),o){case e:i=(t-n)/r+(t<n?6:0);break;case t:i=(n-e)/r+2;break;case n:i=(e-t)/r+4;break}i/=6}return[parseInt(this.normalize(i,[0,1],this.ranges.hue)),parseInt(this.normalize(l,[0,1],this.ranges.sat)),parseInt(this.normalize(a,[0,1],this.ranges.bri))]}xyToRgb(e,t,n){null==n&&(n=this.ranges.bri[1]);const o=1-e-t,s=(n/(this.ranges.bri[1]-1)).toFixed(2),i=s/t*e,l=s/t*o;let a=1.656492*i-.354851*s-.255038*l,r=.707196*-i+1.655397*s+.036152*l,c=.051713*i-.121364*s+1.01153*l;return a>c&&a>r&&a>1?(r/=a,c/=a,a=1):r>c&&r>a&&r>1?(a/=r,c/=r,r=1):c>a&&c>r&&c>1&&(a/=c,r/=c,c=1),a=a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055,r=r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055,c=c<=.0031308?12.92*c:1.055*Math.pow(c,1/2.4)-.055,a=Math.round(255*a),r=Math.round(255*r),c=Math.round(255*c),isNaN(a)&&(a=0),isNaN(r)&&(r=0),isNaN(c)&&(c=0),[a,r,c].map((e=>Math.min(Math.max(0,e),255)))}rgbToXY(e,t,n){e>1&&(e/=255),t>1&&(t/=255),n>1&&(n/=255),e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;const o=.664511*e+.154324*t+.162028*n,s=.283881*e+.668433*t+.047685*n,i=88e-6*e+.07231*t+.986039*n;let l=parseFloat((o/(o+s+i)).toFixed(4)),a=parseFloat((s/(o+s+i)).toFixed(4));return isNaN(l)&&(l=0),isNaN(a)&&(a=0),[l,a]}rgbToBri(e,t,n){return Math.min(2*this.rgbToHsl(e,t,n)[2],this.ranges.bri[1])}getRGB(e){return null!=e.red&&null!=e.green&&null!=e.blue?[e.red,e.green,e.blue]:null!=e.r&&null!=e.g&&null!=e.b?[e.r,e.g,e.b]:e.rgb?e.rgb:void 0}getXY(e){return null!=e.x&&null!=e.y?[e.x,e.y]:e.xy?e.xy:void 0}toRGB(e){const t=this.getRGB(e);if(t)return t;const n=this.getXY(e);return n&&e.bri?this.xyToRgb(...n,e.bri):e.hue&&e.sat&&e.bri?this.hslToRgb(e.hue,e.sat,e.bri):(console.debug("Could not determine color space"),void console.debug(e))}toXY(e){const t=this.getXY(e);if(t&&e.bri)return[t[0],t[1],e.bri];const n=this.getRGB(e);if(n)return this.rgbToXY(...n);if(e.hue&&e.sat&&e.bri){const t=this.hslToRgb(e.hue,e.sat,e.bri);return this.rgbToXY(...t)}console.debug("Could not determine color space"),console.debug(e)}toHSL(e){if(e.hue&&e.sat&&e.bri)return[e.hue,e.sat,e.bri];const t=this.getRGB(e);if(t)return this.rgbToHsl(...t);const n=this.getXY(e);if(n&&e.bri){const t=this.xyToRgb(...n,e.bri);return this.rgbToHsl(...t)}console.debug("Could not determine color space"),console.debug(e)}}},542:function(e,t,n){n.d(t,{Z:function(){return g}});var o=n(6252),s=n(3577);const i=["min","max","value","disabled"],l=["textContent"];function a(e,t,n,a,r,c){return(0,o.wg)(),(0,o.iD)("label",null,[(0,o._)("input",{class:"slider",type:"range",min:n.range[0],max:n.range[1],value:n.value,disabled:n.disabled,onChange:t[0]||(t[0]=t=>e.$emit("input",t)),onMouseup:t[1]||(t[1]=t=>e.$emit("mouseup",t)),onInput:t[2]||(t[2]=t=>e.$emit("input",t)),onMousedown:t[3]||(t[3]=t=>e.$emit("mousedown",t)),onTouch:t[4]||(t[4]=t=>e.$emit("input",t)),onTouchstart:t[5]||(t[5]=t=>e.$emit("mousedown",t)),onTouchend:t[6]||(t[6]=t=>e.$emit("mouseup",t))},null,40,i),n.withLabel?((0,o.wg)(),(0,o.iD)("span",{key:0,class:"label",textContent:(0,s.zw)(n.value)},null,8,l)):(0,o.kq)("",!0)])}var r={name:"Slider",emits:["input","mouseup","mousedown"],props:{value:{type:Number},disabled:{type:Boolean,default:!1},range:{type:Array,default:()=>[0,100]},withLabel:{type:Boolean,default:!1}}},c=n(3744);const u=(0,c.Z)(r,[["render",a],["__scopeId","data-v-1a18952e"]]);var g=u},3567:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(6252),s=n(3577);const i=e=>((0,o.dD)("data-v-8fae7678"),e=e(),(0,o.Cn)(),e),l=["checked"],a=i((()=>(0,o._)("div",{class:"switch"},[(0,o._)("div",{class:"dot"})],-1))),r={class:"label"};function c(e,t,n,i,c,u){return(0,o.wg)(),(0,o.iD)("div",{class:(0,s.C_)(["power-switch",{disabled:n.disabled}]),onClick:t[0]||(t[0]=(...e)=>u.onInput&&u.onInput(...e))},[(0,o._)("input",{type:"checkbox",checked:n.value},null,8,l),(0,o._)("label",null,[a,(0,o._)("span",r,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])])],2)}var u={name:"ToggleSwitch",emits:["input"],props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},methods:{onInput(e){if(e.stopPropagation(),this.disabled)return!1;this.$emit("input",e)}}},g=n(3744);const d=(0,g.Z)(u,[["render",c],["__scopeId","data-v-8fae7678"]]);var p=d},1845:function(e,t,n){n.r(t),n.d(t,{default:function(){return Nt}});var o=n(6252);const s={class:"plugin lights-plugin"},i={key:0,class:"panel"},l={key:1,class:"panel"};function a(e,t,n,a,r,c){const u=(0,o.up)("Groups"),g=(0,o.up)("Group");return(0,o.wg)(),(0,o.iD)("div",s,[null==r.selectedGroup&&n.groups&&Object.keys(n.groups).length?((0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(u,{groups:n.groups,"loading-groups":n.loadingGroups,"color-converter":n.colorConverter,onSelect:t[0]||(t[0]=e=>r.selectedGroup=e),onToggle:t[1]||(t[1]=t=>e.$emit("group-toggle",t))},null,8,["groups","loading-groups","color-converter"])])):((0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(g,{group:n.groups[r.selectedGroup],lights:c.displayedLights,scenes:c.scenesByGroup[r.selectedGroup],"color-converter":n.colorConverter,animations:c.animationsByGroup[r.selectedGroup],onClose:t[2]||(t[2]=e=>r.selectedGroup=null),onLightToggle:t[3]||(t[3]=t=>e.$emit("light-toggle",t)),onGroupToggle:t[4]||(t[4]=t=>e.$emit("group-toggle",t)),onSetLight:t[5]||(t[5]=t=>e.$emit("set-light",t)),onSetGroup:t[6]||(t[6]=t=>e.$emit("set-group",{groupId:r.selectedGroup,value:t})),onSelectScene:t[7]||(t[7]=t=>e.$emit("select-scene",{groupId:r.selectedGroup,sceneId:t})),onStartAnimation:t[8]||(t[8]=t=>e.$emit("start-animation",t)),onStopAnimation:t[9]||(t[9]=t=>e.$emit("stop-animation",t))},null,8,["group","lights","scenes","color-converter","animations"])]))])}var r=n(2628),c={name:"Panel",emits:["mounted"],props:{config:{type:Object,default:()=>{}},pluginName:{type:String,required:!0}},data(){return{loading:!1}},mounted(){this.$emit("mounted",this)}};const u=c;var g=u,d=n(3577);const p=e=>((0,o.dD)("data-v-42318a2b"),e=e(),(0,o.Cn)(),e),h={class:"panel-row header"},m=p((()=>(0,o._)("div",{class:"col-3"},[(0,o._)("i",{class:"icon fas fa-home"})],-1))),v=p((()=>(0,o._)("div",{class:"col-6 name"}," Rooms ",-1))),b={class:"col-3 pull-right"},_=["onClick"],w={class:"name col-9"},y={class:"controls col-3 pull-right"};function f(e,t,n,s,i,l){const a=(0,o.up)("ToggleSwitch"),r=(0,o.up)("MenuPanel");return(0,o.wg)(),(0,o.j4)(r,null,{default:(0,o.w5)((()=>[(0,o._)("div",h,[m,v,(0,o._)("div",b,[(0,o.Wm)(a,{value:l.anyLightsOn,onInput:t[0]||(t[0]=t=>e.$emit("toggle"))},null,8,["value"])])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.groupsSorted,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"panel-row row group",key:t.id,onClick:n=>e.$emit("select",t.id)},[(0,o._)("span",w,(0,d.zw)(t.name||`[Group ${t.id}]`),1),(0,o._)("span",y,[(0,o.Wm)(a,{value:t.state.any_on,disabled:t.id in(n.loadingGroups||{}),onInput:n=>e.$emit("toggle",t)},null,8,["value","disabled","onInput"])])],8,_)))),128))])),_:1})}const C={class:"menu-panel"},k={class:"content"};function S(e,t,n,s,i,l){return(0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("div",k,[(0,o.WI)(e.$slots,"default")])])}var j={name:"MenuPanel"},O=n(3744);const $=(0,O.Z)(j,[["render",S]]);var L=$,D=n(3567),G=n(4212),I={name:"Groups",components:{ToggleSwitch:D.Z,MenuPanel:L},emits:["select","toggle"],props:{groups:{type:Object,default:()=>{}},loadingGroups:{type:Object,default:()=>{}},colorConverter:{type:Object,default:()=>new G.N}},computed:{groupsSorted(){return Object.entries(this.groups).sort(((e,t)=>e[1].name.localeCompare(t[1].name))).map((([e,t])=>({...t,id:e})))},anyLightsOn(){for(const e of Object.values(this.groups))if(e?.state?.any_on)return!0;return!1}}};const T=(0,O.Z)(I,[["render",f],["__scopeId","data-v-42318a2b"]]);var M=T;const x={class:"light-group-container"},A={class:"panel-row header"},B={key:0,class:"col-3"},N=(0,o._)("i",{class:"fas fa-chevron-left"},null,-1),W=[N],Z=["textContent"],R={key:1,class:"col-3 pull-right"},q={key:0,class:"no-lights"},z={key:1,class:"lights-view"},V={class:"row view-selector"},Y=(0,o._)("i",{class:"icon fas fa-lightbulb"},null,-1),H=[Y],E=(0,o._)("i",{class:"icon far fa-image"},null,-1),F=[E],P=(0,o._)("i",{class:"icon fas fa-video"},null,-1),X=[P],K={key:0,class:"view fade-in"},U=["onClick"],J={key:1,class:"view fade-in"},Q=["onClick"],ee={key:2,class:"view group-controls fade-in"},te={key:3,class:"view group-controls fade-in"};function ne(e,t,n,s,i,l){const a=(0,o.up)("ToggleSwitch"),r=(0,o.up)("Light"),c=(0,o.up)("Scene"),u=(0,o.up)("Controls"),g=(0,o.up)("Animate"),p=(0,o.up)("MenuPanel");return(0,o.wg)(),(0,o.iD)("div",x,[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o._)("div",A,[n.group?((0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("button",{class:"back-btn",title:"Back",onClick:t[0]||(t[0]=(...e)=>l.close&&l.close(...e))},W)])):(0,o.kq)("",!0),(0,o._)("div",{class:(0,d.C_)(["col-6 name",{selected:"group"===i.selectedView}]),textContent:(0,d.zw)(l.groupName),onClick:t[1]||(t[1]=e=>i.selectedView="group"===i.selectedView?null:"group")},null,10,Z),n.group?((0,o.wg)(),(0,o.iD)("div",R,[(0,o.Wm)(a,{value:n.group.state.any_on,onInput:t[2]||(t[2]=t=>e.$emit("group-toggle",n.group))},null,8,["value"])])):(0,o.kq)("",!0)]),n.lights&&Object.keys(n.lights).length?((0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("div",V,[(0,o._)("button",{class:(0,d.C_)({selected:"lights"===i.selectedView}),title:"Lights",onClick:t[3]||(t[3]=e=>i.selectedView="lights")},H,2),(0,o._)("button",{class:(0,d.C_)({selected:"scenes"===i.selectedView}),title:"Scenes",onClick:t[4]||(t[4]=e=>i.selectedView="scenes")},F,2),(0,o._)("button",{class:(0,d.C_)({selected:"animate"===i.selectedView}),title:"Animate",onClick:t[5]||(t[5]=e=>i.selectedView="animate")},X,2)]),"lights"===i.selectedView?((0,o.wg)(),(0,o.iD)("div",K,[((0,o.wg)(),(0,o.j4)(o.Ob,null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.lightsSorted,((t,s)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,d.C_)(["panel-row row",{expanded:t.id===i.selectedLight}]),key:s,onClick:e=>i.selectedLight=i.selectedLight===t.id?null:t.id},[(0,o.Wm)(r,{light:t,group:n.group,collapsed:t.id!==i.selectedLight,"color-converter":n.colorConverter,onToggle:n=>e.$emit("light-toggle",t),onSetLight:n=>e.$emit("set-light",{light:t,value:n})},null,8,["light","group","collapsed","color-converter","onToggle","onSetLight"])],10,U)))),128))],1024))])):"scenes"===i.selectedView?((0,o.wg)(),(0,o.iD)("div",J,[((0,o.wg)(),(0,o.j4)(o.Ob,null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.scenesSorted,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,d.C_)(["panel-row row",{selected:e.id===i.selectedScene}]),key:t,onClick:t=>l.onSceneSelected(e.id)},[(0,o.Wm)(c,{scene:e,group:n.group},null,8,["scene","group"])],10,Q)))),128))],1024))])):"group"===i.selectedView?((0,o.wg)(),(0,o.iD)("div",ee,[((0,o.wg)(),(0,o.j4)(o.Ob,null,[(0,o.Wm)(u,{group:n.group,lights:n.lights,"color-converter":n.colorConverter,onSetGroup:t[6]||(t[6]=t=>e.$emit("set-group",t))},null,8,["group","lights","color-converter"])],1024))])):"animate"===i.selectedView?((0,o.wg)(),(0,o.iD)("div",te,[((0,o.wg)(),(0,o.j4)(o.Ob,null,[(0,o.Wm)(g,{group:n.group,lights:n.lights,"color-converter":n.colorConverter,"running-animations":n.animations,onStart:t[7]||(t[7]=t=>e.$emit("start-animation",t)),onStop:t[8]||(t[8]=t=>e.$emit("stop-animation",t))},null,8,["group","lights","color-converter","running-animations"])],1024))])):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.iD)("div",q," No lights found "))])),_:1})])}const oe={class:"row"},se={class:"toggle col-3 pull-right"},ie={key:0,class:"row fade-in"};function le(e,t,n,s,i,l){const a=(0,o.up)("ToggleSwitch"),r=(0,o.up)("Controls");return(0,o.wg)(),(0,o.iD)("div",{class:(0,d.C_)(["light",{expanded:!n.collapsed}]),ref:"element"},[(0,o._)("div",oe,[(0,o._)("span",{class:"name col-9",onClick:t[0]||(t[0]=(...e)=>l.expandToggle&&l.expandToggle(...e))},(0,d.zw)(n.light.name||`[Light ${n.light.id}]`),1),(0,o._)("span",se,[(0,o.Wm)(a,{value:n.light.state.on,disabled:n.loading,onInput:t[1]||(t[1]=t=>e.$emit("toggle",n.light))},null,8,["value","disabled"])])]),n.collapsed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ie,[(0,o.Wm)(r,{light:n.light,loading:n.loading,"color-converter":n.colorConverter,onSetLight:t[2]||(t[2]=t=>e.$emit("set-light",t))},null,8,["light","loading","color-converter"])]))],2)}var ae=n(9963);const re=e=>((0,o.dD)("data-v-e2726892"),e=e(),(0,o.Cn)(),e),ce={key:1,class:"row"},ue=re((()=>(0,o._)("div",{class:"col-1 icon"},[(0,o._)("i",{class:"fas fa-sun"})],-1))),ge={class:"col-11 control"},de={key:2,class:"row"},pe=re((()=>(0,o._)("div",{class:"col-1 icon"},[(0,o._)("i",{class:"fas fa-thermometer-half"})],-1))),he={class:"col-11 control"},me={key:3,class:"row"},ve=re((()=>(0,o._)("span",{class:"col-1 icon"},[(0,o._)("i",{class:"fas fa-palette"})],-1))),be={class:"col-11 control"},_e=["value"];function we(e,t,n,s,i,l){const a=(0,o.up)("Loading"),r=(0,o.up)("Slider");return(0,o.wg)(),(0,o.iD)("div",{class:"controls light-controls",onClick:t[3]||(t[3]=e=>e.stopPropagation())},[n.loading?((0,o.wg)(),(0,o.j4)(a,{key:0})):(0,o.kq)("",!0),null!=l.state.bri?((0,o.wg)(),(0,o.iD)("div",ce,[ue,(0,o._)("div",ge,[(0,o.Wm)(r,{range:n.colorConverter.ranges.bri,disabled:n.loading,value:l.state.bri,onMouseup:t[0]||(t[0]=(0,ae.iM)((t=>e.$emit(n.light?"set-light":"set-group",{brightness:parseInt(t.target.value)})),["stop"]))},null,8,["range","disabled","value"])])])):(0,o.kq)("",!0),null!=l.state.ct?((0,o.wg)(),(0,o.iD)("div",de,[pe,(0,o._)("div",he,[(0,o.Wm)(r,{range:n.colorConverter.ranges.ct,disabled:n.loading,value:l.state.ct,onMouseup:t[1]||(t[1]=(0,ae.iM)((t=>e.$emit(n.light?"set-light":"set-group",{temperature:parseInt(t.target.value)})),["stop"]))},null,8,["range","disabled","value"])])])):(0,o.kq)("",!0),l.rgbColor?((0,o.wg)(),(0,o.iD)("label",me,[ve,(0,o._)("span",be,[(0,o._)("input",{type:"color",value:l.rgbColor,onChange:t[2]||(t[2]=(0,ae.iM)(((...e)=>l.onColorSelect&&l.onColorSelect(...e)),["stop"]))},null,40,_e)])])):(0,o.kq)("",!0)])}var ye=n(542),fe=n(1232),Ce={name:"Controls",components:{Loading:fe.Z,Slider:ye.Z},emits:["set-light","set-group"],props:{light:{type:Object},lights:{type:Object},group:{type:Object},loading:{type:Boolean,default:!1},colorConverter:{type:Object,default:()=>new G.N}},computed:{state(){if(this.light?.state)return this.light.state;const e=this.group?.state||{};if(!this.lights)return e;const t=e=>e&&e.length?e[0]instanceof Array?[...e[0].keys()].map((n=>t(e.map((e=>e[n]))))):e.reduce(((e,t)=>e+t),0)/e.length:0;return{...e,...Object.entries(Object.values(this.lights).reduce(((e,t)=>(["bri","hue","sat","rgb","xy","red","green","blue","ct"].forEach((n=>{null!=t.state?.[n]&&(e[n]=[...e[n]||[],t.state[n]])})),e)),{})).reduce(((e,[n,o])=>(e[n]=t(o),e)),{})}},color(){return this.getColor(this.state)},rgbColor(){const e=this.colorConverter.toRGB(this.state);return e?"#"+e.map((e=>{let t=e.toString(16);return t.length<2&&(t="0"+t),t})).join(""):null}},methods:{onColorSelect(e){const t=e.target.value.slice(1).split(/(?=(?:..)*$)/).map((e=>parseInt(`0x${e}`)));this.$emit(this.light?"set-light":"set-group",{rgb:t,xy:this.colorConverter.rgbToXY(...t),hsl:this.colorConverter.rgbToHsl(...t),brightness:this.colorConverter.rgbToBri(...t)})},getColor(e){return{rgb:this.colorConverter.toRGB(e),xy:this.colorConverter.toXY(e),hsl:this.colorConverter.toHSL(e)}}}};const ke=(0,O.Z)(Ce,[["render",we],["__scopeId","data-v-e2726892"]]);var Se=ke,je={name:"Light",components:{Controls:Se,ToggleSwitch:D.Z},emits:["toggle","set-light","collapsed","expanded"],props:{light:{type:Object,default:()=>{}},group:{type:Object,default:()=>{}},loading:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!0},colorConverter:{type:Object,default:()=>new G.N}},methods:{expandToggle(){this.$emit(this.collapsed?"expanded":"collapsed")}}};const Oe=(0,O.Z)(je,[["render",le],["__scopeId","data-v-52168252"]]);var $e=Oe;function Le(e,t,n,s,i,l){const a=(0,o.up)("Loading");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n.loading?((0,o.wg)(),(0,o.j4)(a,{key:0})):(0,o.kq)("",!0),(0,o._)("div",{class:"scene row name",onClick:t[0]||(t[0]=(...e)=>l.onSelect&&l.onSelect(...e))},(0,d.zw)(n.scene.name||`[Scene ${n.scene.id}]`),1)],64)}var De={name:"Light",emits:["select"],props:{scene:{type:Object,default:()=>{}},group:{type:Object,default:()=>{}},loading:{type:Boolean,default:!1}},methods:{onSelect(){if(this.loading)return!1;this.$emit("select")}}};const Ge=(0,O.Z)(De,[["render",Le]]);var Ie=Ge;const Te=e=>((0,o.dD)("data-v-1739aaba"),e=e(),(0,o.Cn)(),e),Me={class:"animation-container"},xe={class:"animation-header"},Ae={class:"row"},Be=Te((()=>(0,o._)("div",{class:"col-3"}," Run Animation ",-1))),Ne={class:"col-9"},We={class:"row"},Ze=Te((()=>(0,o._)("div",{class:"col-3"},"Animation",-1))),Re={class:"col-9"},qe=Te((()=>(0,o._)("option",{value:"color_transition"},"Color transition",-1))),ze=Te((()=>(0,o._)("option",{value:"blink"},"Blink",-1))),Ve=[qe,ze],Ye={class:"animation"},He={key:0,class:"row"},Ee=Te((()=>(0,o._)("div",{class:"col-3"}," Hue range ",-1))),Fe={class:"col-9"},Pe={key:1,class:"row"},Xe=Te((()=>(0,o._)("div",{class:"col-3"}," Sat range ",-1))),Ke={class:"col-9"},Ue={key:2,class:"row"},Je=Te((()=>(0,o._)("div",{class:"col-3"}," Bri range ",-1))),Qe={class:"col-9"},et={key:3,class:"row"},tt=Te((()=>(0,o._)("div",{class:"col-3"}," Hue step ",-1))),nt={class:"col-9"},ot={key:4,class:"row"},st=Te((()=>(0,o._)("div",{class:"col-3"}," Sat step ",-1))),it={class:"col-9"},lt={key:5,class:"row"},at=Te((()=>(0,o._)("div",{class:"col-3"}," Bri step ",-1))),rt={class:"col-9"},ct={class:"row"},ut=Te((()=>(0,o._)("div",{class:"col-3"}," Refresh seconds ",-1))),gt={class:"col-9"},dt=["value"],pt={class:"row"},ht=Te((()=>(0,o._)("div",{class:"col-3"}," Duration (seconds) ",-1))),mt={class:"col-9"},vt=["value"],bt={class:"lights"},_t={class:"row"},wt=["checked"],yt=(0,o.Uk)(" Select all lights "),ft=["onUpdate:modelValue","onInput"];function Ct(e,t,n,s,i,l){const a=(0,o.up)("Loading"),r=(0,o.up)("ToggleSwitch"),c=(0,o.up)("RangeSlider"),u=(0,o.up)("Slider");return(0,o.wg)(),(0,o.iD)("div",{class:"controls animation-controls",onClick:t[10]||(t[10]=e=>e.stopPropagation())},[n.loading?((0,o.wg)(),(0,o.j4)(a,{key:0})):(0,o.kq)("",!0),(0,o._)("div",Me,[(0,o._)("div",xe,[(0,o._)("div",Ae,[Be,(0,o._)("div",Ne,[(0,o.Wm)(r,{value:l.animationRunning,onInput:l.toggleAnimation},null,8,["value","onInput"])])]),(0,o._)("div",We,[Ze,(0,o._)("div",Re,[(0,o._)("label",null,[(0,o._)("select",{class:"selector",onClick:t[0]||(t[0]=e=>i.selectedAnimation=e.target.value)},Ve)])])])]),(0,o._)("div",Ye,["color_transition"===i.selectedAnimation?((0,o.wg)(),(0,o.iD)("div",He,[Ee,(0,o._)("div",Fe,[(0,o.Wm)(c,{range:n.colorConverter.ranges.hue,disabled:n.loading,value:i.animations.color_transition.hue_range,onMouseup:t[1]||(t[1]=e=>i.animations.color_transition.hue_range=e.target.value)},null,8,["range","disabled","value"])])])):(0,o.kq)("",!0),"color_transition"===i.selectedAnimation?((0,o.wg)(),(0,o.iD)("div",Pe,[Xe,(0,o._)("div",Ke,[(0,o.Wm)(c,{range:n.colorConverter.ranges.sat,disabled:n.loading,value:i.animations.color_transition.sat_range,onMouseup:t[2]||(t[2]=e=>i.animations.color_transition.sat_range=e.target.value)},null,8,["range","disabled","value"])])])):(0,o.kq)("",!0),"color_transition"===i.selectedAnimation?((0,o.wg)(),(0,o.iD)("div",Ue,[Je,(0,o._)("div",Qe,[(0,o.Wm)(c,{range:n.colorConverter.ranges.sat,disabled:n.loading,value:i.animations.color_transition.bri_range,onMouseup:t[3]||(t[3]=e=>i.animations.color_transition.bri_range=e.target.value)},null,8,["range","disabled","value"])])])):(0,o.kq)("",!0),"color_transition"===i.selectedAnimation?((0,o.wg)(),(0,o.iD)("div",et,[tt,(0,o._)("div",nt,[(0,o.Wm)(u,{range:n.colorConverter.ranges.hue,disabled:n.loading,value:i.animations.color_transition.hue_step,onMouseup:t[4]||(t[4]=e=>i.animations.color_transition.hue_step=parseFloat(e.target.value))},null,8,["range","disabled","value"])])])):(0,o.kq)("",!0),"color_transition"===i.selectedAnimation?((0,o.wg)(),(0,o.iD)("div",ot,[st,(0,o._)("div",it,[(0,o.Wm)(u,{range:n.colorConverter.ranges.sat,disabled:n.loading,value:i.animations.color_transition.sat_step,onMouseup:t[5]||(t[5]=e=>i.animations.color_transition.sat_step=parseFloat(e.target.value))},null,8,["range","disabled","value"])])])):(0,o.kq)("",!0),"color_transition"===i.selectedAnimation?((0,o.wg)(),(0,o.iD)("div",lt,[at,(0,o._)("div",rt,[(0,o.Wm)(u,{range:n.colorConverter.ranges.bri,disabled:n.loading,value:i.animations.color_transition.bri_step,onMouseup:t[6]||(t[6]=e=>i.animations.color_transition.bri_step=parseFloat(e.target.value))},null,8,["range","disabled","value"])])])):(0,o.kq)("",!0),(0,o._)("div",ct,[ut,(0,o._)("div",gt,[(0,o._)("label",null,[(0,o._)("input",{type:"number",value:i.animations[i.selectedAnimation].transition_seconds,step:"0.1",onInput:t[7]||(t[7]=e=>i.animations[i.selectedAnimation].transition_seconds=parseFloat(e.target.value))},null,40,dt)])])]),(0,o._)("div",pt,[ht,(0,o._)("div",mt,[(0,o._)("label",null,[(0,o._)("input",{type:"number",value:i.animations[i.selectedAnimation].duration,step:"5",onInput:t[8]||(t[8]=e=>i.animations[i.selectedAnimation].duration=e.target.value?.length?parseFloat(e.target.value):null)},null,40,vt)])])])])]),(0,o._)("div",bt,[(0,o._)("div",_t,[(0,o._)("label",null,[(0,o._)("input",{type:"checkbox",checked:Object.keys(n.lights).length===Object.values(i.selectedLights).filter((e=>e)).length,onClick:t[9]||(t[9]=(...e)=>l.toggleSelectAll&&l.toggleSelectAll(...e))},null,8,wt),yt])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.lights,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"row",key:t},[(0,o._)("label",null,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":e=>i.selectedLights[t]=e,onInput:e=>i.selectedLights[t]=!i.selectedLights[t]},null,40,ft),[[ae.e8,i.selectedLights[t]]]),(0,o.Uk)(" "+(0,d.zw)(e.name),1)])])))),128))])])}const kt={class:"range-slider"},St=["value","min","max","disabled"];function jt(e,t,n,s,i,l){return(0,o.wg)(),(0,o.iD)("div",kt,[(0,o._)("label",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.value,((e,s)=>((0,o.wg)(),(0,o.iD)("input",{class:"slider",type:"range",value:e,min:n.range[0],max:n.range[1],disabled:n.disabled,onInput:t[0]||(t[0]=(...e)=>l.input&&l.input(...e)),onChange:t[1]||(t[1]=(...e)=>l.changed&&l.changed(...e)),onMouseup:t[2]||(t[2]=(...e)=>l.mouseup&&l.mouseup(...e)),onMousedown:t[3]||(t[3]=(...e)=>l.mousedown&&l.mousedown(...e)),onTouchstart:t[4]||(t[4]=(...e)=>l.mouseup&&l.mouseup(...e)),onTouchend:t[5]||(t[5]=(...e)=>l.mousedown&&l.mousedown(...e)),ref_for:!0,ref:`input_${s}`,key:s},null,40,St)))),128))])])}var Ot={name:"RangeSlider",emits:["input","change","mouseup","mousedown"],props:{disabled:{type:Boolean,default:!1},range:{type:Array,default:()=>[0,100]},value:{type:Array,default:()=>[0,100]}},methods:{getEvent(e){return{...e,target:{...e.target,value:Object.values(this.$refs).map((e=>parseFloat(e.value))).sort()}}},input(e){this.$emit("input",this.getEvent(e))},changed(e){this.$emit("change",this.getEvent(e))},mouseup(e){this.$emit("mouseup",this.getEvent(e))},mousedown(e){this.$emit("mousedown",this.getEvent(e))}},mounted(){if(this.value){const e=this;this.value.forEach(((t,n)=>{e.$refs[`input_${n}`].value=t}))}}};const $t=(0,O.Z)(Ot,[["render",jt],["__scopeId","data-v-0e677180"]]);var Lt=$t,Dt={name:"Animate",mixins:[r.Z],components:{ToggleSwitch:D.Z,Slider:ye.Z,RangeSlider:Lt,Loading:fe.Z},emits:["start","stop"],props:{lights:{type:Object},group:{type:Object},loading:{type:Boolean,default:!1},colorConverter:{type:Object,default:()=>new G.N},runningAnimations:{type:Object,default:()=>{}}},data(){return{selectedAnimation:"color_transition",animation:{},selectedLights:Object.keys(this.lights).reduce(((e,t)=>(e[t]=!0,e)),{}),animations:{color_transition:{hue_range:this.colorConverter.ranges.hue,sat_range:[parseInt((this.colorConverter.ranges.sat[1]-this.colorConverter.ranges.sat[0])/2),this.colorConverter.ranges.sat[1]],bri_range:[parseInt(.75*(this.colorConverter.ranges.bri[1]-this.colorConverter.ranges.bri[0])),this.colorConverter.ranges.bri[1]],hue_step:parseInt((this.colorConverter.ranges.hue[1]-this.colorConverter.ranges.hue[0])/25),sat_step:parseInt((this.colorConverter.ranges.sat[1]-this.colorConverter.ranges.sat[0])/50),bri_step:parseInt((this.colorConverter.ranges.bri[1]-this.colorConverter.ranges.bri[0])/50),transition_seconds:1,duration:null},blink:{transition_seconds:1,duration:null}}}},computed:{animationRunning(){return Object.keys(this.runningAnimations).length>0}},methods:{toggleSelectAll(){const e=Object.values(this.selectedLights).filter((e=>e)).length<Object.keys(this.lights).length;Object.keys(this.lights).forEach((t=>{this.selectedLights[t]=e}))},toggleAnimation(){const e=this.animationRunning?"stop":"start",t=Object.entries(this.selectedLights).filter((e=>e[1])).map((e=>e[0]));t.length?this.$emit(e,{lights:t,animation:{...this.animations[this.selectedAnimation],animation:this.selectedAnimation}}):this.warn("No lights have been selected")}}};const Gt=(0,O.Z)(Dt,[["render",Ct],["__scopeId","data-v-1739aaba"]]);var It=Gt,Tt={name:"Group",emits:["close","group-toggle","light-toggle","set-light","select-scene","start-animation","stop-animation"],components:{Animate:It,ToggleSwitch:D.Z,MenuPanel:L,Light:$e,Scene:Ie,Controls:Se},props:{lights:{type:Object},group:{type:Object},scenes:{type:Object},animations:{type:Object,default:()=>{}},colorConverter:{type:Object,default:()=>new G.N}},data(){return{selectedLight:null,selectedScene:null,selectedView:"lights"}},computed:{lightsSorted(){return this.lights?Object.entries(this.lights).sort(((e,t)=>e[1].name.localeCompare(t[1].name))).map((([e,t])=>({...t,id:e}))):[]},scenesSorted(){return this.scenes?Object.entries(this.scenes).sort(((e,t)=>e[1].name.localeCompare(t[1].name))).map((([e,t])=>({...t,id:e}))):[]},groupName(){return this.group?.name?this.group.name:null!=this.group?.id?`[Group ${this.group.id}]`:"Lights"}},methods:{close(e){e.stopPropagation(),this.$emit("close")},onSceneSelected(e){this.selectedScene=e,this.$emit("select-scene",e)}}};const Mt=(0,O.Z)(Tt,[["render",ne]]);var xt=Mt,At={name:"Light",components:{Group:xt,Groups:M},mixins:[r.Z,g],emits:["group-toggle","light-toggle","set-light","set-group","select-scene","start-animation","stop-animation","refresh","light-changed"],props:{lights:{type:Object},groups:{type:Object},scenes:{type:Object},animations:{type:Object},colorConverter:{type:Object,default:()=>new G.N},loadingLights:{type:Object,default:()=>{}},loadingGroups:{type:Object,default:()=>{}},pluginName:{type:String},initialGroup:{type:[Number,String]}},data(){return{selectedGroup:null,initialized:!1}},computed:{displayedLights(){const e=this.selectedGroup||this.initialGroup;return null==e?this.lights:this.groups[e].lights.reduce(((e,t)=>(e[t]=this.lights[t],e)),{})},groupsByLight(){return this.groups?Object.entries(this.groups).reduce(((e,[t,n])=>(n.lights.forEach((o=>{e[o]||(e[o]={}),e[o][t]=n})),e)),{}):{}},scenesByGroup(){if(!this.scenes)return{};const e=this;return Object.entries(this.scenes).reduce(((t,[n,o])=>(o.lights.forEach((s=>{Object.keys(e.groupsByLight[s]).forEach((e=>{t[e]||(t[e]={}),t[e][n]=o}))})),t)),{})},animationsByGroup(){const e=this,t=Object.entries(this.animations?.groups||{}).reduce(((e,[t,n])=>(e[t]={},n&&(e[t][null]=n),e)),{});return{...t,...Object.entries(this.animations?.lights||{}).reduce(((t,[n,o])=>{const s=Object.values(e.groupsByLight[n])?.[0];return s&&o&&null!=s.id&&(t[s.id]||(t[s.id]={}),t[s.id][n]=o),t}),{})}}},methods:{initSelectedGroup(){const e=this,t=this.$watch((()=>e.initialGroup),(n=>{e.initialized||(e.initialized=!0,t(),null==e.selectedGroup&&null!=n&&(e.selectedGroup=e.initialGroup))}))},refresh(){this.$emit("refresh")},onLightChange(e){if(e.plugin_name!==this.pluginName)return;if(!this.lights[e.light_id])return void this.refresh();const t={...e},n=t.light_id;delete t.light_id,delete t.type,delete t.plugin_name,this.$emit("light-changed",{id:n,state:t})},onAnimationChange(e){e.plugin_name===this.pluginName&&this.refresh()}},mounted(){this.subscribe(this.onLightChange,"on-light-change","platypush.message.event.light.LightStatusChangeEvent"),this.subscribe(this.onAnimationChange,"on-animation-change","platypush.message.event.light.LightAnimationStartedEvent","platypush.message.event.light.LightAnimationStoppedEvent"),this.initSelectedGroup()},unmounted(){this.unsubscribe("on-light-change"),this.unsubscribe("on-animation-change")}};const Bt=(0,O.Z)(At,[["render",a],["__scopeId","data-v-781dd72c"]]);var Nt=Bt}}]);
//# sourceMappingURL=1845.2c088bf9.js.map
