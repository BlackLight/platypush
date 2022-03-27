"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[7643],{7643:function(e,t,n){n.r(t),n.d(t,{default:function(){return qe}});var s=n(6252),r=n(9963),a=n(3577);const i={class:"row plugin execute-container"},o={class:"command-container"},l=(0,s._)("div",{class:"title"},"Execute Action",-1),c={class:"request-type-container"},d=["checked"],u=(0,s._)("label",{for:"action-structured-input"},"Structured request",-1),p=["checked"],h=(0,s._)("label",{for:"action-raw-input"},"Raw request",-1),g={class:"autocomplete"},m=["disabled"],v=["disabled"],y=(0,s._)("i",{class:"fas fa-play"},null,-1),b=[y],k={key:0,class:"doc-container"},f=(0,s._)("div",{class:"title"}," Action documentation ",-1),w=["innerHTML"],D=["textContent"],_={key:1,class:"options"},x={key:0,class:"params",ref:"params"},A=["disabled","placeholder","onUpdate:modelValue","onFocus"],C={key:0,class:"attr-doc-container mobile"},q={class:"title"},P=(0,s.Uk)(" Attribute: "),L=["textContent"],E=["innerHTML"],O=["textContent"],N={key:0,class:"extra-params",ref:"extraParams"},T={class:"col-5"},H=["disabled","onUpdate:modelValue"],M={class:"col-5"},R=["disabled","onUpdate:modelValue"],j={class:"col-2 buttons"},I=["onClick"],S=(0,s._)("i",{class:"fas fa-trash"},null,-1),U=[S],V={key:1,class:"add-param"},J=(0,s._)("i",{class:"fas fa-plus"},null,-1),z=[J],B={key:1,class:"attr-doc-container widescreen"},F={class:"title"},K=(0,s.Uk)(" Attribute: "),Y=["textContent"],Z=["innerHTML"],$=["textContent"],W={class:"output-container"},G=["textContent"],Q=["innerHTML"],X=["innerHTML"],ee={class:"first-row"},te=["disabled"],ne=(0,s._)("i",{class:"fas fa-play"},null,-1),se=[ne],re={key:0,class:"output-container"},ae=["textContent"],ie=["innerHTML"],oe=["innerHTML"],le={class:"procedures-container"},ce=(0,s._)("div",{class:"title"},"Execute Procedure",-1),de=["onClick"],ue={class:"head"},pe=["textContent"],he={class:"btn-container col-no-margin-1"},ge=["disabled"],me=(0,s._)("i",{class:"fas fa-play"},null,-1),ve=[me],ye={key:0,class:"params"},be=["disabled","placeholder","onUpdate:modelValue"];function ke(e,t,n,y,S,J){const ne=(0,s.up)("Loading");return(0,s.wg)(),(0,s.iD)("div",i,[S.loading?((0,s.wg)(),(0,s.j4)(ne,{key:0})):(0,s.kq)("",!0),(0,s._)("div",o,[l,(0,s._)("form",{class:"action-form",ref:"actionForm",autocomplete:"off",onSubmit:t[8]||(t[8]=(0,r.iM)(((...e)=>J.executeAction&&J.executeAction(...e)),["prevent"]))},[(0,s._)("div",c,[(0,s._)("input",{type:"radio",id:"action-structured-input",checked:S.structuredInput,onChange:t[0]||(t[0]=e=>J.onInputTypeChange(!0))},null,40,d),u,(0,s._)("input",{type:"radio",id:"action-raw-input",checked:!S.structuredInput,onChange:t[1]||(t[1]=e=>J.onInputTypeChange(!1))},null,40,p),h]),(0,s._)("div",{class:(0,a.C_)(["request structured-request",S.structuredInput?"":"hidden"])},[(0,s._)("div",g,[(0,s._)("label",null,[(0,s.wy)((0,s._)("input",{ref:"actionName",type:"text",class:"action-name",placeholder:"Action Name",disabled:S.running,"onUpdate:modelValue":t[2]||(t[2]=e=>S.action.name=e),onChange:t[3]||(t[3]=e=>S.actionChanged=!0),onBlur:t[4]||(t[4]=(...e)=>J.updateAction&&J.updateAction(...e))},null,40,m),[[r.nr,S.action.name]])])]),(0,s._)("button",{type:"submit",class:"run-btn btn-primary",disabled:S.running,title:"Run"},b,8,v),S.selectedDoc?((0,s.wg)(),(0,s.iD)("div",k,[f,S.htmlDoc?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"doc html",innerHTML:S.selectedDoc},null,8,w)):((0,s.wg)(),(0,s.iD)("div",{key:1,class:"doc raw",textContent:(0,a.zw)(S.selectedDoc)},null,8,D))])):(0,s.kq)("",!0),S.action.name in S.actions&&(Object.keys(S.action.args).length||S.action.supportsExtraArgs)?((0,s.wg)(),(0,s.iD)("div",_,[Object.keys(S.action.args).length||S.action.supportsExtraArgs?((0,s.wg)(),(0,s.iD)("div",x,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(S.action.args),(e=>((0,s.wg)(),(0,s.iD)("div",{class:"param",key:e},[(0,s._)("label",null,[(0,s.wy)((0,s._)("input",{type:"text",class:"action-param-value",disabled:S.running,placeholder:e,"onUpdate:modelValue":t=>S.action.args[e].value=t,onFocus:t=>J.selectAttrDoc(e),onBlur:t[5]||(t[5]=(...e)=>J.resetAttrDoc&&J.resetAttrDoc(...e))},null,40,A),[[r.nr,S.action.args[e].value]])]),S.selectedAttrDoc&&S.selectedAttr===e?((0,s.wg)(),(0,s.iD)("div",C,[(0,s._)("div",q,[P,(0,s._)("div",{class:"attr-name",textContent:(0,a.zw)(S.selectedAttr)},null,8,L)]),S.htmlDoc?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"doc html",innerHTML:S.selectedAttrDoc},null,8,E)):((0,s.wg)(),(0,s.iD)("div",{key:1,class:"doc raw",textContent:(0,a.zw)(S.selectedAttrDoc)},null,8,O))])):(0,s.kq)("",!0)])))),128)),Object.keys(S.action.extraArgs).length?((0,s.wg)(),(0,s.iD)("div",N,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(S.action.extraArgs),(e=>((0,s.wg)(),(0,s.iD)("div",{class:"param extra-param",key:e},[(0,s._)("label",T,[(0,s.wy)((0,s._)("input",{type:"text",class:"action-extra-param-name",disabled:S.running,placeholder:"Name","onUpdate:modelValue":t=>S.action.extraArgs[e].name=t},null,8,H),[[r.nr,S.action.extraArgs[e].name]])]),(0,s._)("label",M,[(0,s.wy)((0,s._)("input",{type:"text",class:"action-extra-param-value",disabled:S.running,placeholder:"Value","onUpdate:modelValue":t=>S.action.extraArgs[e].value=t},null,8,R),[[r.nr,S.action.extraArgs[e].value]])]),(0,s._)("label",j,[(0,s._)("button",{type:"button",class:"action-extra-param-del",title:"Remove parameter",onClick:t=>J.removeParameter(e)},U,8,I)])])))),128))],512)):(0,s.kq)("",!0),S.action.supportsExtraArgs?((0,s.wg)(),(0,s.iD)("div",V,[(0,s._)("button",{type:"button",title:"Add a parameter",onClick:t[6]||(t[6]=(...e)=>J.addParameter&&J.addParameter(...e))},z)])):(0,s.kq)("",!0)],512)):(0,s.kq)("",!0),S.selectedAttrDoc?((0,s.wg)(),(0,s.iD)("div",B,[(0,s._)("div",F,[K,(0,s._)("div",{class:"attr-name",textContent:(0,a.zw)(S.selectedAttr)},null,8,Y)]),S.htmlDoc?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"doc html",innerHTML:S.selectedAttrDoc},null,8,Z)):((0,s.wg)(),(0,s.iD)("div",{key:1,class:"doc raw",textContent:(0,a.zw)(S.selectedAttrDoc)},null,8,$))])):(0,s.kq)("",!0),(0,s._)("div",W,[null!=S.error||null!=S.response?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"title",textContent:(0,a.zw)(null!=S.error?"Error":"Output")},null,8,G)):(0,s.kq)("",!0),null!=S.response?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"response",innerHTML:S.response},null,8,Q)):null!=S.error?((0,s.wg)(),(0,s.iD)("div",{key:2,class:"error",innerHTML:S.error},null,8,X)):(0,s.kq)("",!0)])])):(0,s.kq)("",!0)],2),(0,s._)("div",{class:(0,a.C_)(["request raw-request",S.structuredInput?"hidden":""])},[(0,s._)("div",ee,[(0,s._)("label",null,[(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":t[7]||(t[7]=e=>S.rawRequest=e),placeholder:"Raw JSON request"},null,512),[[r.nr,S.rawRequest]])]),(0,s._)("button",{type:"submit",disabled:S.running,class:"run-btn btn-primary",title:"Run"},se,8,te)]),null!=S.response||null!=S.error?((0,s.wg)(),(0,s.iD)("div",re,[(0,s._)("div",{class:"title",textContent:(0,a.zw)(null!=S.error?"Error":"Output")},null,8,ae),null!=S.error?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"error",innerHTML:S.error},null,8,ie)):null!=S.response?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"response",innerHTML:S.response},null,8,oe)):(0,s.kq)("",!0)])):(0,s.kq)("",!0)],2)],544)]),(0,s._)("div",le,[ce,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(S.procedures).sort(),(n=>((0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(["procedure",S.selectedProcedure.name===n?"selected":""]),key:n,onClick:e=>J.updateProcedure(n,e)},[(0,s._)("form",{ref_for:!0,ref:"procedureForm",autocomplete:"off",onSubmit:t[11]||(t[11]=(0,r.iM)(((...e)=>J.executeProcedure&&J.executeProcedure(...e)),["prevent"]))},[(0,s._)("div",ue,[(0,s._)("div",{class:"name col-no-margin-11",textContent:(0,a.zw)(n)},null,8,pe),(0,s._)("div",he,[S.selectedProcedure.name===n?((0,s.wg)(),(0,s.iD)("button",{key:0,type:"submit",class:"run-btn btn-default",disabled:S.running,title:"Run",onClick:t[9]||(t[9]=(0,r.iM)((t=>e.$emit("submit")),["stop"]))},ve,8,ge)):(0,s.kq)("",!0)])]),S.selectedProcedure.name===n?((0,s.wg)(),(0,s.iD)("div",ye,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(S.selectedProcedure.args),(e=>((0,s.wg)(),(0,s.iD)("div",{class:"param",key:e},[(0,s._)("label",null,[(0,s.wy)((0,s._)("input",{type:"text",class:"action-param-value",onClick:t[10]||(t[10]=e=>e.stopPropagation()),disabled:S.running,placeholder:e,"onUpdate:modelValue":t=>S.selectedProcedure.args[e]=t},null,8,be),[[r.nr,S.selectedProcedure.args[e]]])])])))),128))])):(0,s.kq)("",!0)],544)],10,de)))),128))])])}function fe(e,t,n){let s;function r(e){if(!e)return!1;a(e),s>=e.length&&(s=0),s<0&&(s=e.length-1),e[s].classList.add("autocomplete-active")}function a(e){for(let t=0;t<e.length;t++)e[t].classList.remove("autocomplete-active")}function i(t){const n=document.getElementsByClassName("autocomplete-items");for(let s=0;s<n.length;s++)t!==n[s]&&t!==e&&n[s].parentNode.removeChild(n[s])}e.addEventListener("input",(function(){let r,a,o,l=this.value;if(i(),!l)return!1;for(s=-1,r=document.createElement("DIV"),r.setAttribute("id",this.id+"autocomplete-list"),r.setAttribute("class","autocomplete-items"),this.parentNode.appendChild(r),o=0;o<t.length;o++)t[o].substr(0,l.length).toUpperCase()===l.toUpperCase()&&(a=document.createElement("DIV"),a.innerHTML="<strong>"+t[o].substr(0,l.length)+"</strong>",a.innerHTML+=t[o].substr(l.length),a.innerHTML+="<input type='hidden' value='"+t[o]+"'>",a.addEventListener("click",(function(t){e.value=this.getElementsByTagName("input")[0].value,n&&n(t,e.value),i()})),r.appendChild(a))})),e.addEventListener("keydown",(function(e){9===e.keyCode&&i()})),e.addEventListener("keydown",(function(e){let t=document.getElementById(this.id+"autocomplete-list");t&&(t=t.getElementsByTagName("div")),40===e.keyCode?(s++,r(t)):38===e.keyCode?(s--,r(t)):13===e.keyCode&&s>-1&&t&&t.length&&(e.preventDefault(),t[s].click(),this.focus())})),document.addEventListener("click",(function(e){i(e.target)}))}var we=fe,De=n(2628),_e=n(1232),xe={name:"Execute",components:{Loading:_e.Z},mixins:[De.Z],data(){return{loading:!1,running:!1,structuredInput:!0,actionChanged:!1,selectedDoc:void 0,selectedAttr:void 0,selectedAttrDoc:void 0,selectedProcedure:{name:void 0,args:{}},response:void 0,error:void 0,htmlDoc:!1,rawRequest:void 0,actions:{},plugins:{},procedures:{},action:{name:void 0,args:{},extraArgs:[],supportsExtraArgs:!1}}},methods:{async refresh(){this.loading=!0;try{this.procedures=await this.request("inspect.get_procedures"),this.plugins=await this.request("inspect.get_all_plugins",{html_doc:!1})}finally{this.loading=!1}for(const t of Object.values(this.plugins)){t.html_doc&&(this.htmlDoc=!0);for(const e of Object.values(t.actions))e.name=t.name+"."+e.name,e.supportsExtraArgs=!!e.has_kwargs,delete e.has_kwargs,this.actions[e.name]=e}const e=this;we(this.$refs.actionName,Object.keys(this.actions).sort(),((t,n)=>{this.action.name=n,e.updateAction()}))},updateAction(){if(this.action.name in this.actions||(this.selectedDoc=void 0),this.actionChanged&&this.action.name in this.actions){this.loading=!0;try{this.action={...this.actions[this.action.name],args:Object.entries(this.actions[this.action.name].args).reduce(((e,t)=>(e[t[0]]={...t[1],value:t[1].default},e)),{}),extraArgs:[]}}finally{this.loading=!1}this.selectedDoc=this.parseDoc(this.action.doc),this.actionChanged=!1,this.response=void 0,this.error=void 0}},parseDoc(e){if(!e?.length||this.htmlDoc)return e;let t=0,n=0;return e.split("\n").reduce(((e,s)=>(2===++t&&(n=s.match(/^(\s*)/)[1].length),s.trim().startsWith(".. code-block")||(e+=s.slice(n).replaceAll("``","")+"\n"),e)),"")},updateProcedure(e,t){"submit"!==t.target.getAttribute("type")&&(this.selectedProcedure.name!==e?e in this.procedures?this.selectedProcedure={name:e,args:(this.procedures[e].args||[]).reduce(((e,t)=>(e[t]=void 0,e)),{})}:console.warn("Procedure not found: "+e):this.selectedProcedure={name:void 0,args:{}})},addParameter(){this.action.extraArgs.push({name:void 0,value:void 0})},removeParameter(e){this.action.extraArgs.pop(e)},selectAttrDoc(e){this.response=void 0,this.error=void 0,this.selectedAttr=e,this.selectedAttrDoc=this.parseDoc(this.action.args[e].doc)},resetAttrDoc(){this.response=void 0,this.error=void 0,this.selectedAttr=void 0,this.selectedAttrDoc=void 0},onInputTypeChange(e){this.structuredInput=e,this.response=void 0,this.error=void 0},onResponse(e){this.response="<pre>"+JSON.stringify(e,null,2)+"</pre>",this.error=void 0},onError(e){this.response=void 0,this.error=e},onDone(){this.running=!1},executeAction(){if((this.action.name||this.rawRequest)&&!this.running)if(this.running=!0,this.structuredInput){const e={...Object.entries(this.action.args).reduce(((e,t)=>{if(null!=t[1].value){let s=t[1].value;try{s=JSON.parse(s)}catch(n){console.debug("Not a valid JSON value"),console.debug(s)}e[t[0]]=s}return e}),{}),...this.action.extraArgs.reduce(((e,t)=>{let n=e[t.value];try{n=JSON.parse(n)}catch(s){console.debug("Not a valid JSON value"),console.debug(n)}return e[t.name]=n,e}),{})};this.request(this.action.name,e).then(this.onResponse).catch(this.onError).finally(this.onDone)}else try{const e=JSON.parse(this.rawRequest);this.execute(e).then(this.onResponse).catch(this.onError).finally(this.onDone)}catch(e){this.notify({error:!0,title:"Invalid JSON request",text:e.toString()})}},executeProcedure(e){if(!this.selectedProcedure.name||this.running)return;e.stopPropagation(),this.running=!0;const t={...Object.entries(this.selectedProcedure.args).reduce(((e,t)=>{if(null!=t[1]){let s=t[1];try{s=JSON.parse(s)}catch(n){console.debug("Not a valid JSON value"),console.debug(s)}e[t[0]]=s}return e}),{})};this.request("procedure."+this.selectedProcedure.name,t).then(this.onResponse).catch(this.onError).finally(this.onDone)}},mounted(){this.refresh()}},Ae=n(3744);const Ce=(0,Ae.Z)(xe,[["render",ke]]);var qe=Ce}}]);
//# sourceMappingURL=7643.802b7ba8.js.map
