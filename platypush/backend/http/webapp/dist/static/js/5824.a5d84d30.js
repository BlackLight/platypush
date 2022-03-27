"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[5824],{3275:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2628),_components_Loading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1232),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9016),vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9963),vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6252),mitt__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9652);const bus=(0,mitt__WEBPACK_IMPORTED_MODULE_3__.Z)();__webpack_exports__["Z"]={name:"Elements",components:{Loading:_components_Loading__WEBPACK_IMPORTED_MODULE_1__.Z},mixins:[_Utils__WEBPACK_IMPORTED_MODULE_0__.Z],props:{content:{type:String}},data(){return{loading:!1,unwatch:null}},methods:{_parseActions(e){const n=[...e.children].filter((e=>"actions"===e.tagName?.toLowerCase())),t=n?.length?n[0].children:e.children,s=[...t].filter((e=>"action"===e.tagName?.toLowerCase()));if(s?.length)return[...s].map((e=>({action:e.attributes.name.value,args:[...e.children].reduce(((e,n)=>{let t;try{t=JSON.parse(n.innerText)}catch(s){n.innerText?.length&&(t=n.innerText)}return e[n.tagName.toLowerCase()]=t,e}),{})})))},_parseVars(e){const n=[...e.children].filter((e=>"vars"===e.tagName?.toLowerCase()));if(n?.length)return[...n[0].children].reduce(((e,n)=>{let t;try{t=JSON.parse(n.innerText)}catch(s){n.innerText?.length&&(t=n.innerText)}return e[n.tagName.toLowerCase()]=t,e}),{})},_parseHandlers(element){const handlers={},parseHndlScript=hndlText=>app=>eval(`// noinspection JSUnusedLocalSymbols\n          (async function (self) {\n            ${hndlText}\n          })`)(app),parseEventHndl=hndlText=>app=>event=>eval(`// noinspection JSUnusedLocalSymbols\n            (async function (self, event) {\n              ${hndlText}\n            })`)(app,event),hndlTags=[...element.children].filter((e=>"handlers"===e.tagName?.toLowerCase()));if(hndlTags?.length){const e=[...hndlTags[0].children].filter((e=>"mounted"===e.tagName?.toLowerCase()));e?.length&&(handlers.mounted=parseHndlScript(e[0].innerText));const n=[...hndlTags[0].children].filter((e=>"refresh"===e.tagName?.toLowerCase()));n?.length&&(handlers.refresh={handler:parseHndlScript(n[0].innerText),interval:n[0].attributes.interval?.value||10});const t=[...hndlTags[0].children].filter((e=>"event"===e.tagName?.toLowerCase()));t?.length&&(handlers.events=t.reduce(((e,n)=>(e[n.attributes.type.value]=parseEventHndl(n.innerText),e)),{}))}const actionsTags=[...element.children].filter((e=>"actions"===e.tagName?.toLowerCase()));if(actionsTags?.length){const e=[...actionsTags[0].children].filter((e=>"before"===e.tagName?.toLowerCase()));e?.length&&(handlers.beforeActions=parseHndlScript(e[0].innerText));const n=[...actionsTags[0].children].filter((e=>"after"===e.tagName?.toLowerCase()));n?.length&&(handlers.afterActions=parseHndlScript(n[0].innerText))}return handlers},_parseProps(e){return[...e.attributes].reduce(((e,n)=>(e[n.name]=n.value,e)),{})},propagateEvent(e){bus.emit("event",e)},_addEventHandler(){this.unwatch=this.subscribe((e=>{bus.emit("event",e)}))},_removeEventHandler(){this.unwatch&&(this.unwatch(),this.unwatch=null)}},mounted(){this.loading=!0,this._addEventHandler();try{this.$refs.container.innerHTML=this.content,Object.entries(_index__WEBPACK_IMPORTED_MODULE_2__.Z).forEach((([e,n])=>{this.$options.components[e]=n,[...this.$refs.container.getElementsByTagName(e)].forEach((e=>{const t=this._parseProps(e);t.actions=this._parseActions(e),t.handlers=this._parseHandlers(e),t._vars=this._parseVars(e);const s=document.createElement("div");s.setAttribute("class","component"),s.innerHTML=e.innerHTML,e.parentNode.replaceChild(s,e),(0,vue__WEBPACK_IMPORTED_MODULE_4__.ri)({render(){return(0,vue__WEBPACK_IMPORTED_MODULE_5__.h)(n,t)},data(){return{bus:bus}}}).mount(s)}))}));for(const e of["handlers","actions","vars"])this.$refs.container.getElementsByTagName(e).forEach((e=>{e.parentNode.removeChild(e)}))}finally{this.loading=!1}},unmounted(){this._removeEventHandler()}}},7105:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2628);__webpack_exports__["Z"]={mixins:[_Utils__WEBPACK_IMPORTED_MODULE_0__.Z],props:{name:{type:String,default:"[Unnamed sensor]"},iconClass:{type:String},iconUrl:{type:String},iconColor:{type:String},actions:{type:Array,default:()=>[]},_vars:{type:Object,default:()=>({})},handlers:{type:Object,default:()=>({})},bus:{type:Object}},data(){return{vars:{...this._vars||{}},_interval:void 0,refresh:null,refreshInterval:null,value:null,loading:!1}},computed:{iconStyle(){if(this.iconClass?.length||!this.iconColor?.length)return{color:this.iconColor}},hasIcon(){return this.iconUrl?.length||this.iconClass?.length}},methods:{async run(){if(this.handlers.input)return this.handlers.input(this)(this.value);this.handlers.beforeActions&&await this.handlers.beforeActions(this);for(const e of this.actions)await this.request_(e);this.handlers.afterActions&&await this.handlers.afterActions(this)},async request_(action){const args=Object.entries(action.args).reduce(((args,[key,value])=>{if(value.trim){value=value.trim();const m=value.match(/^{{\s*(.*)\s*}}/);m&&(value=eval(`// noinspection JSUnusedLocalSymbols\n                        (function (self) {\n                            return ${m[1]}\n                        })`)(this))}return args[key]=value,args}),{});await this.request(action.action,args)},async processEvent(e){const n=(this.handlers.events||{})[e.type];n&&await n(this)(e)}},async mounted(){if(this.$root.bus.on("event",this.processEvent),this.handlers.mounted&&await this.handlers.mounted(this),this.handlers.refresh&&(this.refreshInterval=1e3*(this.handlers.refresh?.interval||0),this.refresh=()=>{this.handlers.refresh.handler(this)},await this.refresh(),this.refreshInterval)){const e=this,n=()=>e.refresh();this._interval=setInterval(n,this.refreshInterval)}},unmounted(){this._interval&&clearInterval(this._interval)}}},9016:function(e,n,t){t.d(n,{Z:function(){return z}});var s=t(6252),a=t(3577);const r={key:0,class:"col-1 icon-container"},i=["src","alt"],o=["textContent"];function l(e,n,t,l,c,u){return(0,s.wg)(),(0,s.iD)("div",{class:"run component-row",onClick:n[0]||(n[0]=(...n)=>e.run&&e.run(...n))},[e.hasIcon?((0,s.wg)(),(0,s.iD)("div",r,[e.iconUrl?.length?((0,s.wg)(),(0,s.iD)("img",{key:0,class:"icon",src:e.iconUrl,alt:e.name},null,8,i)):((0,s.wg)(),(0,s.iD)("i",{key:1,class:(0,a.C_)(["icon",e.iconClass]),style:(0,a.j5)(e.iconStyle)},null,6))])):(0,s.kq)("",!0),(0,s._)("div",{class:(0,a.C_)({"col-11":e.hasIcon,"col-12":!e.hasIcon}),textContent:(0,a.zw)(e.name)},null,10,o)])}var c=t(7105),u={name:"Run",mixins:[c.Z]},_=t(3744);const h=(0,_.Z)(u,[["render",l],["__scopeId","data-v-7478b72d"]]);var d=h;const p={key:0,class:"col-1 icon-container"},v=["src","alt"],m=["textContent"],g={class:"col-3 value-container"},f={class:"value"},w=["textContent"];function y(e,n,t,r,i,o){return(0,s.wg)(),(0,s.iD)("div",{class:"sensor component-row",onClick:n[0]||(n[0]=(...e)=>o.run&&o.run(...e))},[e.hasIcon?((0,s.wg)(),(0,s.iD)("div",p,[e.iconUrl?.length?((0,s.wg)(),(0,s.iD)("img",{key:0,class:"icon",src:e.iconUrl,alt:e.name},null,8,v)):((0,s.wg)(),(0,s.iD)("i",{key:1,class:(0,a.C_)(["icon",e.iconClass]),style:(0,a.j5)(e.iconStyle)},null,6))])):(0,s.kq)("",!0),(0,s._)("div",{class:(0,a.C_)({"col-8":e.hasIcon,"col-9":!e.hasIcon}),textContent:(0,a.zw)(e.name)},null,10,m),(0,s._)("div",g,[(0,s._)("div",f,[(0,s.Uk)((0,a.zw)(e.value)+" ",1),t.unit?((0,s.wg)(),(0,s.iD)("span",{key:0,textContent:(0,a.zw)(t.unit)},null,8,w)):(0,s.kq)("",!0)])])])}var b={name:"Sensor",mixins:[c.Z],props:{unit:{type:String}},methods:{async run(){if(this.handlers.beforeActions&&await this.handlers.beforeActions(this),this.actions?.length)for(const e of this.actions)await this.request_(e);else await this.refresh();this.handlers.afterActions&&await this.handlers.afterActions(this)}}};const C=(0,_.Z)(b,[["render",y],["__scopeId","data-v-53594122"]]);var E=C;const k={class:"slider-root component-row"},D={key:0,class:"col-1 icon-container"},T=["src","alt"],I=["textContent"],x={class:"col-5 slider-container"},L={class:"slider"};function S(e,n,t,r,i,o){const l=(0,s.up)("SliderElement");return(0,s.wg)(),(0,s.iD)("div",k,[e.hasIcon?((0,s.wg)(),(0,s.iD)("div",D,[e.iconUrl?.length?((0,s.wg)(),(0,s.iD)("img",{key:0,class:"icon",src:e.iconUrl,alt:e.name},null,8,T)):((0,s.wg)(),(0,s.iD)("i",{key:1,class:(0,a.C_)(["icon",e.iconClass]),style:(0,a.j5)(e.iconStyle)},null,6))])):(0,s.kq)("",!0),(0,s._)("div",{class:(0,a.C_)({"col-6":e.hasIcon,"col-7":!e.hasIcon}),textContent:(0,a.zw)(e.name)},null,10,I),(0,s._)("div",x,[(0,s._)("div",L,[(0,s.Wm)(l,{value:e.value,range:[parseFloat(t.min),parseFloat(t.max)],onMouseup:o.run},null,8,["value","range","onMouseup"])])])])}var M=t(542),O={name:"Slider",components:{SliderElement:M.Z},mixins:[c.Z],props:{min:{type:[String,Number],default:0},max:{type:[String,Number],required:!0}},methods:{async run(e){this.value=parseFloat(e.target.value),this.handlers.beforeActions&&await this.handlers.beforeActions(this);for(const n of this.actions)await this.request_(n);this.handlers.afterActions&&await this.handlers.afterActions(this)}}};const A=(0,_.Z)(O,[["render",S],["__scopeId","data-v-772cf288"]]);var U=A,P=t(9963);const Z={key:0,class:"col-1 icon-container"},q=["src","alt"],N=["textContent"],B={class:"col-2 toggle-container"},W={class:"toggle"};function $(e,n,t,r,i,o){const l=(0,s.up)("ToggleSwitch");return(0,s.wg)(),(0,s.iD)("div",{class:"switch component-row",onClick:n[0]||(n[0]=(...n)=>e.run&&e.run(...n))},[e.hasIcon?((0,s.wg)(),(0,s.iD)("div",Z,[e.iconUrl?.length?((0,s.wg)(),(0,s.iD)("img",{key:0,class:"icon",src:e.iconUrl,alt:e.name},null,8,q)):((0,s.wg)(),(0,s.iD)("i",{key:1,class:(0,a.C_)(["icon",e.iconClass]),style:(0,a.j5)(e.iconStyle)},null,6))])):(0,s.kq)("",!0),(0,s._)("div",{class:(0,a.C_)({"col-9":e.hasIcon,"col-10":!e.hasIcon}),textContent:(0,a.zw)(e.name)},null,10,N),(0,s._)("div",B,[(0,s._)("div",W,[(0,s.Wm)(l,{value:e.value,onInput:(0,P.iM)(e.run,["stop"])},null,8,["value","onInput"])])])])}var H=t(3567),R={name:"Switch",components:{ToggleSwitch:H.Z},mixins:[c.Z]};const K=(0,_.Z)(R,[["render",$],["__scopeId","data-v-97d3a936"]]);var j=K,z={Run:d,Sensor:E,Slider:U,Switch:j}},542:function(e,n,t){t.d(n,{Z:function(){return _}});var s=t(6252),a=t(3577);const r=["min","max","value","disabled"],i=["textContent"];function o(e,n,t,o,l,c){return(0,s.wg)(),(0,s.iD)("label",null,[(0,s._)("input",{class:"slider",type:"range",min:t.range[0],max:t.range[1],value:t.value,disabled:t.disabled,onChange:n[0]||(n[0]=n=>e.$emit("input",n)),onMouseup:n[1]||(n[1]=n=>e.$emit("mouseup",n)),onInput:n[2]||(n[2]=n=>e.$emit("input",n)),onMousedown:n[3]||(n[3]=n=>e.$emit("mousedown",n)),onTouch:n[4]||(n[4]=n=>e.$emit("input",n)),onTouchstart:n[5]||(n[5]=n=>e.$emit("mousedown",n)),onTouchend:n[6]||(n[6]=n=>e.$emit("mouseup",n))},null,40,r),t.withLabel?((0,s.wg)(),(0,s.iD)("span",{key:0,class:"label",textContent:(0,a.zw)(t.value)},null,8,i)):(0,s.kq)("",!0)])}var l={name:"Slider",emits:["input","mouseup","mousedown"],props:{value:{type:Number},disabled:{type:Boolean,default:!1},range:{type:Array,default:()=>[0,100]},withLabel:{type:Boolean,default:!1}}},c=t(3744);const u=(0,c.Z)(l,[["render",o],["__scopeId","data-v-1a18952e"]]);var _=u},3567:function(e,n,t){t.d(n,{Z:function(){return d}});var s=t(6252),a=t(3577);const r=e=>((0,s.dD)("data-v-8fae7678"),e=e(),(0,s.Cn)(),e),i=["checked"],o=r((()=>(0,s._)("div",{class:"switch"},[(0,s._)("div",{class:"dot"})],-1))),l={class:"label"};function c(e,n,t,r,c,u){return(0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(["power-switch",{disabled:t.disabled}]),onClick:n[0]||(n[0]=(...e)=>u.onInput&&u.onInput(...e))},[(0,s._)("input",{type:"checkbox",checked:t.value},null,8,i),(0,s._)("label",null,[o,(0,s._)("span",l,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])])],2)}var u={name:"ToggleSwitch",emits:["input"],props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},methods:{onInput(e){if(e.stopPropagation(),this.disabled)return!1;this.$emit("input",e)}}},_=t(3744);const h=(0,_.Z)(u,[["render",c],["__scopeId","data-v-8fae7678"]]);var d=h},5824:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var s=t(6252);const a={class:"component-widget"},r={class:"container",ref:"container"};function i(e,n,t,i,o,l){const c=(0,s.up)("Loading");return(0,s.wg)(),(0,s.iD)("div",a,[o.loading?((0,s.wg)(),(0,s.j4)(c,{key:0})):(0,s.kq)("",!0),(0,s._)("div",r,null,512)])}var o=t(3275),l=t(3744);const c=(0,l.Z)(o.Z,[["render",i],["__scopeId","data-v-450fcab1"]]);var u=c}}]);
//# sourceMappingURL=5824.a5d84d30.js.map
