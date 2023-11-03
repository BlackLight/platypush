"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[7673],{7673:function(e,t,n){n.r(t),n.d(t,{default:function(){return nt}});var s=n(6252),i=n(9963);const o=e=>((0,s.dD)("data-v-4d2b88d5"),e=e(),(0,s.Cn)(),e),a=o((()=>(0,s._)("h1",null,"Execute Action",-1))),r=["innerHTML"],l={key:0,class:"request structured"},c={class:"autocomplete-container"},u={class:"buttons"},d=["disabled"],p=o((()=>(0,s._)("i",{class:"fas fa-play"},null,-1))),g=[p],h={key:0,class:"args"},m=o((()=>(0,s._)("h2",null,[(0,s._)("i",{class:"fas fa-code"}),(0,s.Uk)("   Arguments ")],-1))),v={key:1,class:"request raw-request"},y={class:"first-row"},k=["placeholder"],b=["disabled"],f=o((()=>(0,s._)("i",{class:"fas fa-play"},null,-1))),w=[f];function A(e,t,n,o,p,f){const A=(0,s.up)("Loading"),x=(0,s.up)("Modal"),I=(0,s.up)("Tab"),_=(0,s.up)("Tabs"),D=(0,s.up)("Autocomplete"),C=(0,s.up)("ActionDoc"),q=(0,s.up)("ActionArgs"),S=(0,s.up)("Response");return(0,s.wg)(),(0,s.iD)("div",{class:"row plugin execute-container",onClick:t[9]||(t[9]=(...e)=>f.onClick&&f.onClick(...e))},[p.loading?((0,s.wg)(),(0,s.j4)(A,{key:0})):(0,s.kq)("",!0),(0,s._)("main",null,[a,f.curlSnippet?.length?((0,s.wg)(),(0,s.j4)(x,{key:0,ref:"curlModal",title:"curl request"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"output curl-snippet",onClick:t[0]||(t[0]=t=>e.copyToClipboard(f.curlSnippet))},[(0,s._)("pre",null,[(0,s._)("code",{innerHTML:f.highlightedCurlSnippet},null,8,r)])])])),_:1},512)):(0,s.kq)("",!0),(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.Wm)(I,{selected:p.structuredInput,"icon-class":"fas fa-list",onInput:t[1]||(t[1]=e=>f.onInputTypeChange(!0))},{default:(0,s.w5)((()=>[(0,s.Uk)(" Structured ")])),_:1},8,["selected"]),(0,s.Wm)(I,{selected:!p.structuredInput,"icon-class":"fas fa-code",onInput:t[2]||(t[2]=e=>f.onInputTypeChange(!1))},{default:(0,s.w5)((()=>[(0,s.Uk)(" Raw ")])),_:1},8,["selected"])])),_:1}),(0,s._)("form",{ref:"actionForm",autocomplete:"off",onSubmit:t[8]||(t[8]=(0,i.iM)(((...e)=>f.executeAction&&f.executeAction(...e)),["prevent"]))},[p.structuredInput?((0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("header",null,[(0,s._)("div",c,[(0,s.Wm)(D,{ref:"autocomplete",items:f.autocompleteItems,onInput:f.updateAction,placeholder:"Action","show-results-when-blank":"",autofocus:"",disabled:p.running,value:p.action.name},null,8,["items","onInput","disabled","value"])]),(0,s._)("div",u,[(0,s._)("button",{type:"submit",class:"run-btn btn-primary",disabled:p.running||!p.action?.name?.length,title:"Run"},g,8,d)])]),(0,s.Wm)(C,{action:p.action,"curl-snippet":f.curlSnippet,loading:p.docLoading,doc:p.selectedDoc,onCurlModal:t[3]||(t[3]=t=>e.$refs.curlModal.show())},null,8,["action","curl-snippet","loading","doc"]),p.action.name in p.actions&&(Object.keys(p.action.args).length||p.action.supportsExtraArgs)?((0,s.wg)(),(0,s.iD)("section",h,[m,(0,s.Wm)(q,{action:p.action,loading:p.loading,running:p.running,"selected-arg":p.selectedArg,"selected-argdoc":p.selectedArgdoc,onAdd:f.addArg,onSelect:f.selectArgdoc,onRemove:f.removeArg,onArgEdit:t[4]||(t[4]=e=>p.action.args[e.name].value=e.value),onExtraArgNameEdit:t[5]||(t[5]=e=>p.action.extraArgs[e.index].name=e.value),onExtraArgValueEdit:t[6]||(t[6]=e=>p.action.extraArgs[e.index].value=e.value)},null,8,["action","loading","running","selected-arg","selected-argdoc","onAdd","onSelect","onRemove"])])):(0,s.kq)("",!0),(0,s.Wm)(S,{response:p.response,error:p.error},null,8,["response","error"])])):(0,s.kq)("",!0),p.structuredInput?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",v,[(0,s._)("div",y,[(0,s._)("label",null,[(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":t[7]||(t[7]=e=>p.rawRequest=e),ref:"rawAction",placeholder:p.rawRequestPlaceholder},null,8,k),[[i.nr,p.rawRequest]])]),(0,s._)("button",{type:"submit",disabled:p.running,class:"run-btn btn-primary",title:"Run"},w,8,b)]),(0,s.Wm)(S,{response:p.response,error:p.error},null,8,["response","error"])]))],544)])])}n(7658),n(8783),n(3465);var x=n(637),I=n(3577);const _=e=>((0,s.dD)("data-v-a3cd62a0"),e=e(),(0,s.Cn)(),e),D={class:"args-body"},C={key:0,class:"args-list"},q=["disabled","placeholder","value","onInput","onFocus"],S={key:0,class:"required-flag"},E={key:0,class:"extra-args"},R={class:"col-5"},O=["disabled","value","onInput"],$={class:"col-6"},j=["disabled","value","onInput"],T={class:"col-1 buttons"},N=["onClick"],L=_((()=>(0,s._)("i",{class:"fas fa-trash"},null,-1))),U=[L],M={key:1,class:"add-arg"},Z=_((()=>(0,s._)("i",{class:"fas fa-plus"},null,-1))),K=[Z];function H(e,t,n,i,o,a){const r=(0,s.up)("Argdoc");return(0,s.wg)(),(0,s.iD)("div",D,[Object.keys(n.action.args).length||n.action.supportsExtraArgs?((0,s.wg)(),(0,s.iD)("div",C,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(n.action.args),(e=>((0,s.wg)(),(0,s.iD)("div",{class:"arg",key:e},[(0,s._)("label",null,[(0,s._)("input",{type:"text",class:(0,I.C_)(["action-arg-value",{required:n.action.args[e].required}]),disabled:n.running,placeholder:e,value:n.action.args[e].value,onInput:t=>a.onArgEdit(e,t),onFocus:t=>a.onSelect(e)},null,42,q),n.action.args[e].required?((0,s.wg)(),(0,s.iD)("span",S,"*")):(0,s.kq)("",!0)]),n.selectedArgdoc&&n.selectedArg&&e===n.selectedArg?((0,s.wg)(),(0,s.j4)(r,{key:0,name:n.selectedArg,args:n.action.args[n.selectedArg],doc:n.selectedArgdoc,loading:n.loading,"is-mobile":""},null,8,["name","args","doc","loading"])):(0,s.kq)("",!0)])))),128)),Object.keys(n.action.extraArgs).length?((0,s.wg)(),(0,s.iD)("div",E,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.action.extraArgs,((t,i)=>((0,s.wg)(),(0,s.iD)("div",{class:"arg extra-arg",key:i},[(0,s._)("label",R,[(0,s._)("input",{type:"text",class:"action-extra-arg-name",placeholder:"Name",disabled:n.running,value:t.name,onInput:e=>a.onExtraArgNameEdit(i,e.target.value)},null,40,O)]),(0,s._)("label",$,[(0,s._)("input",{type:"text",class:"action-extra-arg-value",placeholder:"Value",disabled:n.running,value:t.value,onInput:e=>a.onExtraArgValueEdit(i,e.target.value)},null,40,j)]),(0,s._)("label",T,[(0,s._)("button",{type:"button",class:"action-extra-arg-del",title:"Remove argument",onClick:t=>e.$emit("remove",i)},U,8,N)])])))),128))])):(0,s.kq)("",!0),n.action.supportsExtraArgs?((0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("button",{type:"button",title:"Add an argument",onClick:t[0]||(t[0]=(...e)=>a.onArgAdd&&a.onArgAdd(...e))},K)])):(0,s.kq)("",!0)])):(0,s.kq)("",!0),n.selectedArgdoc&&n.selectedArg?((0,s.wg)(),(0,s.j4)(r,{key:1,name:n.selectedArg,args:n.action.args[n.selectedArg],doc:n.selectedArgdoc,loading:n.loading},null,8,["name","args","doc","loading"])):(0,s.kq)("",!0)])}const J=e=>((0,s.dD)("data-v-4cc5023c"),e=e(),(0,s.Cn)(),e),z=["textContent"],B={key:0,class:"flag required"},W={key:1,class:"flag optional"},P={class:"doc html"},F={key:1},V=["innerHTML"],Y={key:1,class:"type"},G=J((()=>(0,s._)("b",null,"Type:",-1)));function X(e,t,n,i,o,a){const r=(0,s.up)("Loading");return(0,s.wg)(),(0,s.iD)("article",{class:(0,I.C_)(["argdoc-container",{mobile:n.isMobile,widescreen:!n.isMobile}])},[(0,s._)("h2",null,[(0,s.Uk)(" Argument: "),(0,s._)("div",{class:"argname",textContent:(0,I.zw)(n.name)},null,8,z),n.args.required?((0,s.wg)(),(0,s.iD)("span",B,"[Required]")):((0,s.wg)(),(0,s.iD)("span",W,"[Optional]"))]),(0,s._)("div",P,[n.loading?((0,s.wg)(),(0,s.j4)(r,{key:0})):((0,s.wg)(),(0,s.iD)("span",F,[n.doc?.length?((0,s.wg)(),(0,s.iD)("span",{key:0,innerHTML:n.doc},null,8,V)):(0,s.kq)("",!0),n.args.type?((0,s.wg)(),(0,s.iD)("div",Y,[G,(0,s.Uk)("   "+(0,I.zw)(n.args.type),1)])):(0,s.kq)("",!0)]))])],2)}var Q=n(6791),ee={name:"Argdoc",components:{Loading:Q.Z},props:{args:{type:Object,default:()=>({})},name:{type:String,required:!0},doc:String,loading:Boolean,isMobile:Boolean}},te=n(3744);const ne=(0,te.Z)(ee,[["render",X],["__scopeId","data-v-4cc5023c"]]);var se=ne,ie={name:"ActionArgs",components:{Argdoc:se},emits:["add","arg-edit","extra-arg-name-edit","extra-arg-value-edit","remove","select"],props:{action:Object,loading:Boolean,running:Boolean,selectedArg:String,selectedArgdoc:String},methods:{onArgAdd(){this.$emit("add"),this.$nextTick((()=>{const e=this.$el.querySelectorAll(".action-extra-arg-name");e.length&&e[e.length-1].focus()}))},onArgEdit(e,t){this.$emit("arg-edit",{name:e,value:t.target.value})},onExtraArgNameEdit(e,t){this.$emit("extra-arg-name-edit",{index:e,value:t})},onExtraArgValueEdit(e,t){this.$emit("extra-arg-value-edit",{index:e,value:t})},onSelect(e){this.$emit("select",e)}}};const oe=(0,te.Z)(ie,[["render",H],["__scopeId","data-v-a3cd62a0"]]);var ae=oe;const re=e=>((0,s.dD)("data-v-387de0e8"),e=e(),(0,s.Cn)(),e),le={key:0,class:"doc-container"},ce={class:"title"},ue=re((()=>(0,s._)("i",{class:"fas fa-book"},null,-1))),de=["href"],pe={key:0,class:"buttons"},ge=re((()=>(0,s._)("i",{class:"fas fa-puzzle-piece"},null,-1))),he=[ge],me=re((()=>(0,s._)("i",{class:"fas fa-terminal"},null,-1))),ve=[me],ye={class:"doc html"},ke=["innerHTML"];function be(e,t,n,i,o,a){const r=(0,s.up)("Loading");return n.doc?.length?((0,s.wg)(),(0,s.iD)("section",le,[(0,s._)("h2",null,[(0,s._)("div",ce,[ue,(0,s.Uk)("   "),(0,s._)("a",{href:n.action?.doc_url},"Action documentation",8,de)]),n.action?.name?((0,s.wg)(),(0,s.iD)("div",pe,[a.pluginName?.length?((0,s.wg)(),(0,s.iD)("button",{key:0,type:"button",title:"Go to extension",onClick:t[0]||(t[0]=(...e)=>a.onExtClick&&a.onExtClick(...e))},he)):(0,s.kq)("",!0),n.curlSnippet?.length?((0,s.wg)(),(0,s.iD)("button",{key:1,type:"button",title:"cURL command",onClick:t[1]||(t[1]=t=>e.$emit("curl-modal"))},ve)):(0,s.kq)("",!0)])):(0,s.kq)("",!0)]),(0,s._)("div",ye,[n.loading?((0,s.wg)(),(0,s.j4)(r,{key:0})):((0,s.wg)(),(0,s.iD)("span",{key:1,innerHTML:n.doc},null,8,ke))])])):(0,s.kq)("",!0)}var fe={name:"ActionDoc",components:{Loading:Q.Z},emits:["curl-modal"],props:{action:Object,doc:String,curlSnippet:String,loading:Boolean},computed:{pluginName(){const e=(this.action?.name||"").split(".");return e.length>1?e.slice(0,-1).join("."):null}},methods:{onExtClick(){window.location.href=`/#extensions?extension=${this.pluginName}`}}};const we=(0,te.Z)(fe,[["render",be],["__scopeId","data-v-387de0e8"]]);var Ae=we;const xe={class:"autocomplete"},Ie=["text"],_e=["placeholder","disabled","value"],De={key:0,class:"items"},Ce=["data-item","onClick"],qe={key:0,class:"matching"},Se={class:"normal"};function Ee(e,t,n,i,o,a){return(0,s.wg)(),(0,s.iD)("div",xe,[(0,s._)("label",{text:n.label},[(0,s._)("input",{type:"text",class:"input",ref:"input",placeholder:n.placeholder,disabled:n.disabled,value:n.value,onFocus:t[0]||(t[0]=(...e)=>a.onFocus&&a.onFocus(...e)),onInput:t[1]||(t[1]=(...e)=>a.onInput&&a.onInput(...e)),onBlur:t[2]||(t[2]=(...e)=>a.onInput&&a.onInput(...e)),onKeydown:t[3]||(t[3]=(...e)=>a.onInputKeyDown&&a.onInputKeyDown(...e)),onKeyup:t[4]||(t[4]=(...e)=>a.onInputKeyUp&&a.onInputKeyUp(...e))},null,40,_e)],8,Ie),a.showItems?((0,s.wg)(),(0,s.iD)("div",De,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.visibleItems,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,I.C_)(["item",{active:t===o.curIndex}]),key:e,"data-item":e,onClick:t=>a.onItemSelect(e)},[n.value?.length?((0,s.wg)(),(0,s.iD)("span",qe,(0,I.zw)(e.substr(0,n.value.length)),1)):(0,s.kq)("",!0),(0,s._)("span",Se,(0,I.zw)(e.substr(n.value?.length||0)),1)],10,Ce)))),128))])):(0,s.kq)("",!0)])}var Re={name:"Autocomplete",emits:["input"],props:{items:{type:Array,required:!0},value:{type:String,default:""},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},label:{type:String},placeholder:{type:String},showResultsWhenBlank:{type:Boolean,default:!1}},data(){return{visible:!1,curIndex:-1}},computed:{visibleItems(){if(!this.value?.length)return this.items;const e=this.value.toUpperCase();return e?.length?this.items.filter((t=>t.substr(0,e.length).toUpperCase()===e)):this.showResultsWhenBlank?this.items:[]},showItems(){return this.visible&&this.items?.length}},methods:{selectNextItem(){this.curIndex++,this.normalizeIndex()},selectPrevItem(){this.curIndex--,this.normalizeIndex()},normalizeIndex(){this.curIndex>=this.visibleItems.length&&(this.curIndex=0),this.curIndex<0&&(this.curIndex=this.visibleItems.length-1);const e=this.$el.querySelector("[data-item='"+this.visibleItems[this.curIndex]+"']");e&&e.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})},valueIsInItems(){return!!this.value&&this.items.indexOf(this.value)>=0},onFocus(){(this.showResultsWhenBlank||this.value?.length)&&(this.visible=!0)},onInput(e){let t=e.target.value;this.valueIsInItems()&&(this.visible=!1),e.stopPropagation(),this.$emit("input",t),this.curIndex=-1,this.visible=!0},onItemSelect(e){this.$emit("input",e),this.$nextTick((()=>{this.valueIsInItems()&&(this.visible=!1)}))},onInputKeyUp(e){["ArrowUp","ArrowDown","Tab","Enter","Escape"].indexOf(e.key)>=0&&e.stopPropagation(),"Enter"===e.key&&this.valueIsInItems()&&(this.$refs.input.blur(),this.visible=!1)},onInputKeyDown(e){"ArrowDown"===e.key||"Tab"===e.key&&!e.shiftKey||"j"===e.key&&e.ctrlKey?(this.selectNextItem(),e.preventDefault()):"ArrowUp"===e.key||"Tab"===e.key&&e.shiftKey||"k"===e.key&&e.ctrlKey?(this.selectPrevItem(),e.preventDefault()):"Enter"===e.key?this.curIndex>-1&&this.visible&&(e.preventDefault(),this.onItemSelect(this.visibleItems[this.curIndex]),this.$refs.input.focus()):"Escape"===e.key&&(this.visible=!1)},onDocumentClick(e){this.$el.contains(e.target)||e.target.classList.contains("item")||(this.visible=!1)}},mounted(){document.addEventListener("click",this.onDocumentClick),this.autofocus&&this.$refs.input.focus()}};const Oe=(0,te.Z)(Re,[["render",Ee],["__scopeId","data-v-0889308d"]]);var $e=Oe,je=n(3493);const Te=e=>((0,s.dD)("data-v-25f4b718"),e=e(),(0,s.Cn)(),e),Ne={class:"response"},Le={key:0},Ue={class:"title"},Me={class:"buttons"},Ze=Te((()=>(0,s._)("i",{class:"fas fa-clipboard"},null,-1))),Ke=[Ze],He={key:1,class:"output response"},Je=["innerHTML"],ze=["textContent"],Be={key:2,class:"output error"},We=["textContent"];function Pe(e,t,n,i,o,a){return(0,s.wg)(),(0,s.iD)("section",Ne,[null!=n.error||null!=n.response?((0,s.wg)(),(0,s.iD)("h2",Le,[(0,s._)("span",Ue,(0,I.zw)(null!=n.error?"Error":"Output"),1),(0,s._)("span",Me,[(0,s._)("button",{type:"button",title:"Copy to clipboard",onClick:t[0]||(t[0]=t=>e.copyToClipboard(n.response))},Ke)])])):(0,s.kq)("",!0),null!=n.response?((0,s.wg)(),(0,s.iD)("div",He,[(0,s._)("pre",null,[null!=a.jsonResponse?((0,s.wg)(),(0,s.iD)("code",{key:0,innerHTML:a.jsonResponse},null,8,Je)):((0,s.wg)(),(0,s.iD)("code",{key:1,textContent:(0,I.zw)(n.response)},null,8,ze))])])):null!=n.error?((0,s.wg)(),(0,s.iD)("div",Be,[(0,s._)("pre",{textContent:(0,I.zw)(n.error)},null,8,We)])):(0,s.kq)("",!0)])}var Fe=n(8637),Ve={name:"Response",mixins:[Fe.Z],props:{response:String,error:String},computed:{isJSON(){try{return null!=JSON.parse(this.response)}catch(e){return!1}},jsonResponse(){return this.isJSON?x.Z.highlight("json",this.response).value:null}}};const Ye=(0,te.Z)(Ve,[["render",Pe],["__scopeId","data-v-25f4b718"]]);var Ge=Ye,Xe=n(8615),Qe=n(3176),et={name:"Execute",mixins:[Fe.Z],components:{ActionArgs:ae,ActionDoc:Ae,Autocomplete:$e,Loading:Q.Z,Modal:je.Z,Response:Ge,Tab:Xe.Z,Tabs:Qe.Z},data(){return{loading:!1,running:!1,docLoading:!1,structuredInput:!0,selectedDoc:void 0,selectedArg:void 0,selectedArgdoc:void 0,response:void 0,error:void 0,rawRequest:void 0,rawRequestPlaceholder:'Raw JSON request. Example:\n\n{"type": "request", "action": "file.list", "args": {"path": "/"}}',actions:{},plugins:{},procedures:{},actionDocsCache:{},action:{name:void 0,args:{},extraArgs:[],supportsExtraArgs:!1}}},computed:{currentActionDocURL(){return this.action?.doc_url},autocompleteItems(){return this.getPluginName(this.action.name)in this.plugins?Object.keys(this.actions).sort():Object.keys(this.plugins).sort().map((e=>`${e}.`))},actionInput(){return this.$refs.autocomplete.$el.parentElement.querySelector("input[type=text]")},requestArgs(){return this.action.name?{...Object.entries(this.action.args).reduce(((e,t)=>{if(null!=t[1].value){let s=t[1].value;try{s=JSON.parse(s)}catch(n){console.debug("Not a valid JSON value"),console.debug(s)}e[t[0]]=s}return e}),{}),...(this.action.extraArgs||[]).reduce(((e,t)=>{let n=t.value;try{n=JSON.parse(n)}catch(s){console.debug("Not a valid JSON value"),console.debug(n)}return e[t.name]=n,e}),{})}:{}},curlURL(){return`${window.location.protocol}//${window.location.host}/execute`},curlSnippet(){if(!this.action.name)return"";const e={type:"request",action:this.action.name,args:this.requestArgs},t=JSON.stringify(e,null,2);return`curl -XPOST -H "Content-Type: application/json" \\\n  -H "Cookie: session_token=${this.getCookies()["session_token"]}" \\\n  -d '\n  {\n    `+this.indent(t.split("\n").slice(1,t.length-2).join("\n"),2).trim()+"' \\\n  "+`'${this.curlURL}'`},highlightedCurlSnippet(){return x.Z.highlight("bash","# Note: Replace the cookie with a JWT token for production cases\n"+this.curlSnippet).value}},methods:{async refresh(){this.loading=!0;try{[this.procedures,this.plugins]=await Promise.all([this.request("inspect.get_procedures"),this.request("inspect.get_all_plugins")])}finally{this.loading=!1}this.plugins.procedure={name:"procedure",actions:Object.entries(this.procedures||{}).reduce(((e,[t,n])=>(e[t]={name:t,args:(n.args||[]).reduce(((e,t)=>(e[t]={name:t,required:!1},e)),{}),supportsExtraArgs:!0},e)),{})};for(const n of Object.values(this.plugins))for(const e of Object.values(n.actions))e.name=n.name+"."+e.name,e.supportsExtraArgs=!!e.has_kwargs,delete e.has_kwargs,this.actions[e.name]=e;const e=this.getUrlArgs(),t=e?.action;t?.length&&t in this.actions&&t!==this.action.name&&this.updateAction(t)},async updateAction(e){if(e===this.action.name)return;if(this.action.name=e,!(this.action.name in this.actions))return this.selectedDoc=void 0,void this.resetArgdoc();this.resetArgdoc(),this.docLoading=!0;try{this.action={...this.actions[this.action.name],args:Object.entries(this.actions[this.action.name].args).reduce(((e,t)=>(e[t[0]]={...t[1],value:t[1].default},e)),{}),extraArgs:[]}}finally{this.docLoading=!1}this.selectedDoc=this.actionDocsCache[this.action.name]?.html||await this.parseDoc(this.action.doc),this.actionDocsCache[this.action.name]||(this.actionDocsCache[this.action.name]={}),this.actionDocsCache[this.action.name].html=this.selectedDoc,this.setUrlArgs({action:this.action.name});const t=this.$el.querySelector(".action-arg-value");t?t.focus():this.$nextTick((()=>{this.actionInput.focus()})),this.response=void 0,this.error=void 0},async parseDoc(e){return e?.length?await this.request("utils.rst_to_html",{text:e}):e},addArg(){this.action.extraArgs.push({name:void 0,value:void 0})},removeArg(e){this.action.extraArgs.pop(e)},async selectArgdoc(e){this.selectedArg=e,this.selectedArgdoc=this.actionDocsCache[this.action.name]?.[e]?.html||await this.parseDoc(this.action.args[e].doc),this.actionDocsCache[this.action.name]||(this.actionDocsCache[this.action.name]={}),this.actionDocsCache[this.action.name][e]={html:this.selectedArgdoc}},resetArgdoc(){this.selectedArg=void 0,this.selectedArgdoc=void 0},onInputTypeChange(e){this.structuredInput=e,this.response=void 0,this.error=void 0,this.$nextTick((()=>{e?this.actionInput.focus():this.$refs.rawAction.focus()}))},onResponse(e){this.response=("string"===typeof e?e:JSON.stringify(e,null,2)).trim(),this.error=void 0},onError(e){this.response=void 0,this.error=e},onDone(){this.running=!1},getPluginName(e){return e?.length?e.split(".").slice(0,-1).join("."):""},executeAction(){if((this.action.name||this.rawRequest)&&!this.running)if(this.running=!0,this.structuredInput)this.request(this.action.name,this.requestArgs).then(this.onResponse).catch(this.onError).finally(this.onDone);else try{const e=JSON.parse(this.rawRequest);this.execute(e).then(this.onResponse).catch(this.onError).finally(this.onDone)}catch(e){this.notify({error:!0,title:"Invalid JSON request",text:e.toString()})}},onClick(e){"a"===e.target.tagName.toLowerCase()&&(e.stopPropagation(),e.preventDefault(),window.open(e.target.getAttribute("href","_blank")))}},mounted(){this.refresh()}};const tt=(0,te.Z)(et,[["render",A],["__scopeId","data-v-4d2b88d5"]]);var nt=tt}}]);
//# sourceMappingURL=7673.45f8bac6.js.map