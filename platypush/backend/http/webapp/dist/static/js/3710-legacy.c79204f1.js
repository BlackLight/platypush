(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[3710],{647:function(e,t,n){var r=n(1702),a=n(7908),o=Math.floor,i=r("".charAt),s=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,d,p){var h=n+e.length,v=r.length,g=l;return void 0!==d&&(d=a(d),g=u),s(p,g,(function(a,s){var u;switch(i(s,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,h);case"<":u=d[c(s,1,-1)];break;default:var l=+s;if(0===l)return a;if(l>v){var p=o(l/10);return 0===p?a:p<=v?void 0===r[p-1]?i(s,1):r[p-1]+i(s,1):a}u=r[l-1]}return void 0===u?"":u}))}},5306:function(e,t,n){"use strict";var r=n(2104),a=n(6916),o=n(1702),i=n(7007),s=n(7293),c=n(9670),u=n(614),l=n(9303),d=n(7466),p=n(1340),h=n(4488),v=n(1530),g=n(8173),f=n(647),m=n(7651),y=n(5112),b=y("replace"),k=Math.max,w=Math.min,x=o([].concat),D=o([].push),_=o("".indexOf),C=o("".slice),A=function(e){return void 0===e?e:String(e)},q=function(){return"$0"==="a".replace(/./,"$0")}(),L=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),P=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,n){var o=L?"$":"$0";return[function(e,n){var r=h(this),o=void 0==e?void 0:g(e,b);return o?a(o,e,r,n):a(t,p(r),e,n)},function(e,a){var i=c(this),s=p(e);if("string"==typeof a&&-1===_(a,o)&&-1===_(a,"$<")){var h=n(t,i,s,a);if(h.done)return h.value}var g=u(a);g||(a=p(a));var y=i.global;if(y){var b=i.unicode;i.lastIndex=0}var q=[];while(1){var L=m(i,s);if(null===L)break;if(D(q,L),!y)break;var P=p(L[0]);""===P&&(i.lastIndex=v(s,d(i.lastIndex),b))}for(var T="",E=0,R=0;R<q.length;R++){L=q[R];for(var O=p(L[0]),N=k(w(l(L.index),s.length),0),M=[],H=1;H<L.length;H++)D(M,A(L[H]));var $=L.groups;if(g){var j=x([O],M,N,s);void 0!==$&&D(j,$);var U=p(r(a,void 0,j))}else U=f(O,s,N,M,$,a);N>=E&&(T+=C(s,E,N)+U,E=N+O.length)}return T+C(s,E)}]}),!P||!q||L)},3710:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ie}});n(8309),n(7941),n(2707);var r=n(6252),a=n(9963),o=n(3577),i={class:"section command-container"},s=(0,r._)("div",{class:"section-title"},"Execute Action",-1),c={class:"request-type-container"},u=["checked"],l=(0,r._)("label",{for:"action-structured-input"},"Structured request",-1),d=["checked"],p=(0,r._)("label",{for:"action-raw-input"},"Raw request",-1),h={class:"request-header"},v={class:"autocomplete"},g=["disabled"],f={class:"buttons"},m=["disabled"],y=(0,r._)("i",{class:"fas fa-play"},null,-1),b=[y],k={key:0,class:"doc-container"},w={class:"title"},x=["href"],D={class:"doc html"},_=["innerHTML"],C={key:1,class:"options"},A={key:0,class:"params",ref:"params"},q=["disabled","placeholder","onUpdate:modelValue","onFocus"],L={key:0,class:"attr-doc-container mobile"},P={class:"title"},T=(0,r.Uk)(" Attribute: "),E=["textContent"],R={class:"doc html"},O=["innerHTML"],N={key:0,class:"extra-params",ref:"extraParams"},M={class:"col-5"},H=["disabled","onUpdate:modelValue"],$={class:"col-6"},j=["disabled","onUpdate:modelValue"],U={class:"col-1 buttons"},I=["onClick"],S=(0,r._)("i",{class:"fas fa-trash"},null,-1),Z=[S],V={key:1,class:"add-param"},J=(0,r._)("i",{class:"fas fa-plus"},null,-1),B=[J],K={key:1,class:"attr-doc-container widescreen"},z={class:"title"},F=(0,r.Uk)(" Attribute: "),Y=["textContent"],G={class:"doc html"},Q=["innerHTML"],W={class:"output-container"},X={key:0,class:"header"},ee=["textContent"],te={class:"buttons"},ne=(0,r._)("i",{class:"fas fa-clipboard"},null,-1),re=[ne],ae=["innerHTML"],oe=["innerHTML"],ie={class:"first-row"},se=["placeholder"],ce=["disabled"],ue=(0,r._)("i",{class:"fas fa-play"},null,-1),le=[ue],de={key:0,class:"output-container"},pe={key:0,class:"header"},he=["textContent"],ve={class:"buttons"},ge=(0,r._)("i",{class:"fas fa-clipboard"},null,-1),fe=[ge],me=["innerHTML"],ye=["innerHTML"],be={class:"section procedures-container"},ke=(0,r._)("div",{class:"section-title"},"Execute Procedure",-1),we=["onClick"],xe={class:"head"},De=["textContent"],_e={class:"btn-container col-no-margin-1"},Ce=["disabled"],Ae=(0,r._)("i",{class:"fas fa-play"},null,-1),qe=[Ae],Le={key:0,class:"params"},Pe=["disabled","placeholder","onUpdate:modelValue"];function Te(e,t,n,y,S,J){var ne,ue,ge=(0,r.up)("Loading");return(0,r.wg)(),(0,r.iD)("div",{class:"row plugin execute-container",onClick:t[14]||(t[14]=function(){return J.onClick&&J.onClick.apply(J,arguments)})},[S.loading?((0,r.wg)(),(0,r.j4)(ge,{key:0})):(0,r.kq)("",!0),(0,r._)("div",i,[s,(0,r._)("form",{class:"action-form",ref:"actionForm",autocomplete:"off",onSubmit:t[10]||(t[10]=(0,a.iM)((function(){return J.executeAction&&J.executeAction.apply(J,arguments)}),["prevent"]))},[(0,r._)("div",c,[(0,r._)("input",{type:"radio",id:"action-structured-input",checked:S.structuredInput,onChange:t[0]||(t[0]=function(e){return J.onInputTypeChange(!0)})},null,40,u),l,(0,r._)("input",{type:"radio",id:"action-raw-input",checked:!S.structuredInput,onChange:t[1]||(t[1]=function(e){return J.onInputTypeChange(!1)})},null,40,d),p]),(0,r._)("div",{class:(0,o.C_)(["request structured-request",S.structuredInput?"":"hidden"])},[(0,r._)("div",h,[(0,r._)("div",v,[(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{ref:"actionName",type:"text",class:"action-name",placeholder:"Action Name",disabled:S.running,"onUpdate:modelValue":t[2]||(t[2]=function(e){return S.action.name=e}),onChange:t[3]||(t[3]=function(e){return S.actionChanged=!0}),onBlur:t[4]||(t[4]=function(){return J.updateAction&&J.updateAction.apply(J,arguments)})},null,40,g),[[a.nr,S.action.name]])])]),(0,r._)("div",f,[(0,r._)("button",{type:"submit",class:"run-btn btn-primary",disabled:S.running||!(null!==(ne=S.action)&&void 0!==ne&&null!==(ue=ne.name)&&void 0!==ue&&ue.length),title:"Run"},b,8,m)])]),S.selectedDoc?((0,r.wg)(),(0,r.iD)("div",k,[(0,r._)("div",w,[(0,r._)("a",{href:J.currentActionDocURL},"Action documentation",8,x)]),(0,r._)("div",D,[S.docLoading?((0,r.wg)(),(0,r.j4)(ge,{key:0})):((0,r.wg)(),(0,r.iD)("span",{key:1,innerHTML:S.selectedDoc},null,8,_))])])):(0,r.kq)("",!0),S.action.name in S.actions&&(Object.keys(S.action.args).length||S.action.supportsExtraArgs)?((0,r.wg)(),(0,r.iD)("div",C,[Object.keys(S.action.args).length||S.action.supportsExtraArgs?((0,r.wg)(),(0,r.iD)("div",A,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Object.keys(S.action.args),(function(e){return(0,r.wg)(),(0,r.iD)("div",{class:"param",key:e},[(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"text",class:"action-param-value",disabled:S.running,placeholder:e,"onUpdate:modelValue":function(t){return S.action.args[e].value=t},onFocus:function(t){return J.selectAttrDoc(e)},onBlur:t[5]||(t[5]=function(){return J.resetAttrDoc&&J.resetAttrDoc.apply(J,arguments)})},null,40,q),[[a.nr,S.action.args[e].value]])]),S.selectedAttrDoc&&S.selectedAttr===e?((0,r.wg)(),(0,r.iD)("div",L,[(0,r._)("div",P,[T,(0,r._)("div",{class:"attr-name",textContent:(0,o.zw)(S.selectedAttr)},null,8,E)]),(0,r._)("div",R,[S.docLoading?((0,r.wg)(),(0,r.j4)(ge,{key:0})):((0,r.wg)(),(0,r.iD)("span",{key:1,innerHTML:S.selectedAttrDoc},null,8,O))])])):(0,r.kq)("",!0)])})),128)),Object.keys(S.action.extraArgs).length?((0,r.wg)(),(0,r.iD)("div",N,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Object.keys(S.action.extraArgs),(function(e){return(0,r.wg)(),(0,r.iD)("div",{class:"param extra-param",key:e},[(0,r._)("label",M,[(0,r.wy)((0,r._)("input",{type:"text",class:"action-extra-param-name",disabled:S.running,placeholder:"Name","onUpdate:modelValue":function(t){return S.action.extraArgs[e].name=t}},null,8,H),[[a.nr,S.action.extraArgs[e].name]])]),(0,r._)("label",$,[(0,r.wy)((0,r._)("input",{type:"text",class:"action-extra-param-value",disabled:S.running,placeholder:"Value","onUpdate:modelValue":function(t){return S.action.extraArgs[e].value=t}},null,8,j),[[a.nr,S.action.extraArgs[e].value]])]),(0,r._)("label",U,[(0,r._)("button",{type:"button",class:"action-extra-param-del",title:"Remove parameter",onClick:function(t){return J.removeParameter(e)}},Z,8,I)])])})),128))],512)):(0,r.kq)("",!0),S.action.supportsExtraArgs?((0,r.wg)(),(0,r.iD)("div",V,[(0,r._)("button",{type:"button",title:"Add a parameter",onClick:t[6]||(t[6]=function(){return J.addParameter&&J.addParameter.apply(J,arguments)})},B)])):(0,r.kq)("",!0)],512)):(0,r.kq)("",!0),S.selectedAttrDoc?((0,r.wg)(),(0,r.iD)("div",K,[(0,r._)("div",z,[F,(0,r._)("div",{class:"attr-name",textContent:(0,o.zw)(S.selectedAttr)},null,8,Y)]),(0,r._)("div",G,[S.docLoading?((0,r.wg)(),(0,r.j4)(ge,{key:0})):((0,r.wg)(),(0,r.iD)("span",{key:1,innerHTML:S.selectedAttrDoc},null,8,Q))])])):(0,r.kq)("",!0)])):(0,r.kq)("",!0),(0,r._)("div",W,[null!=S.error||null!=S.response?((0,r.wg)(),(0,r.iD)("div",X,[(0,r._)("div",{class:"title",textContent:(0,o.zw)(null!=S.error?"Error":"Output")},null,8,ee),(0,r._)("div",te,[(0,r._)("button",{type:"button",title:"Copy to clipboard",onClick:t[7]||(t[7]=function(){return J.copyToClipboard&&J.copyToClipboard.apply(J,arguments)})},re)])])):(0,r.kq)("",!0),null!=S.response?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"response",innerHTML:S.response},null,8,ae)):null!=S.error?((0,r.wg)(),(0,r.iD)("div",{key:2,class:"error",innerHTML:S.error},null,8,oe)):(0,r.kq)("",!0)])],2),(0,r._)("div",{class:(0,o.C_)(["request raw-request",S.structuredInput?"hidden":""])},[(0,r._)("div",ie,[(0,r._)("label",null,[(0,r.wy)((0,r._)("textarea",{"onUpdate:modelValue":t[8]||(t[8]=function(e){return S.rawRequest=e}),ref:"rawAction",placeholder:S.rawRequestPlaceholder},null,8,se),[[a.nr,S.rawRequest]])]),(0,r._)("button",{type:"submit",disabled:S.running,class:"run-btn btn-primary",title:"Run"},le,8,ce)]),null!=S.response||null!=S.error?((0,r.wg)(),(0,r.iD)("div",de,[null!=S.error||null!=S.response?((0,r.wg)(),(0,r.iD)("div",pe,[(0,r._)("div",{class:"title",textContent:(0,o.zw)(null!=S.error?"Error":"Output")},null,8,he),(0,r._)("div",ve,[(0,r._)("button",{type:"button",title:"Copy to clipboard",onClick:t[9]||(t[9]=function(){return J.copyToClipboard&&J.copyToClipboard.apply(J,arguments)})},fe)])])):(0,r.kq)("",!0),null!=S.error?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"error",innerHTML:S.error},null,8,me)):null!=S.response?((0,r.wg)(),(0,r.iD)("div",{key:2,class:"response",innerHTML:S.response},null,8,ye)):(0,r.kq)("",!0)])):(0,r.kq)("",!0)],2)],544)]),(0,r._)("div",be,[ke,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Object.keys(S.procedures).sort(),(function(n){return(0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)(["procedure",S.selectedProcedure.name===n?"selected":""]),key:n,onClick:function(e){return J.updateProcedure(n,e)}},[(0,r._)("form",{ref_for:!0,ref:"procedureForm",autocomplete:"off",onSubmit:t[13]||(t[13]=(0,a.iM)((function(){return J.executeProcedure&&J.executeProcedure.apply(J,arguments)}),["prevent"]))},[(0,r._)("div",xe,[(0,r._)("div",{class:"name col-no-margin-11",textContent:(0,o.zw)(n)},null,8,De),(0,r._)("div",_e,[S.selectedProcedure.name===n?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"submit",class:"run-btn btn-default",disabled:S.running,title:"Run",onClick:t[11]||(t[11]=(0,a.iM)((function(t){return e.$emit("submit")}),["stop"]))},qe,8,Ce)):(0,r.kq)("",!0)])]),S.selectedProcedure.name===n?((0,r.wg)(),(0,r.iD)("div",Le,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Object.keys(S.selectedProcedure.args),(function(e){return(0,r.wg)(),(0,r.iD)("div",{class:"param",key:e},[(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"text",class:"action-param-value",onClick:t[12]||(t[12]=function(e){return e.stopPropagation()}),disabled:S.running,placeholder:e,"onUpdate:modelValue":function(t){return S.selectedProcedure.args[e]=t}},null,8,Pe),[[a.nr,S.selectedProcedure.args[e]]])])])})),128))])):(0,r.kq)("",!0)],544)],10,we)})),128))])])}var Ee=n(4648),Re=n(8534);n(5666),n(9600),n(7042),n(4916),n(3123),n(1249),n(2222),n(2479),n(1539),n(9720),n(8862),n(5306),n(9714);function Oe(e,t,n){var r;function a(e){if(!e)return!1;o(e),r>=e.length&&(r=0),r<0&&(r=e.length-1),e[r].classList.add("autocomplete-active")}function o(e){for(var t=0;t<e.length;t++)e[t].classList.remove("autocomplete-active")}function i(t){for(var n=document.getElementsByClassName("autocomplete-items"),r=0;r<n.length;r++)t!==n[r]&&t!==e&&n[r].parentNode.removeChild(n[r])}e.addEventListener("input",(function(){var a,o,s,c=this.value;if(i(),!c)return!1;for(r=-1,a=document.createElement("DIV"),a.setAttribute("id",this.id+"autocomplete-list"),a.setAttribute("class","autocomplete-items"),this.parentNode.appendChild(a),s=0;s<t.length;s++)t[s].substr(0,c.length).toUpperCase()===c.toUpperCase()&&(o=document.createElement("DIV"),o.innerHTML="<strong>"+t[s].substr(0,c.length)+"</strong>",o.innerHTML+=t[s].substr(c.length),o.innerHTML+="<input type='hidden' value='"+t[s]+"'>",o.addEventListener("click",(function(t){e.value=this.getElementsByTagName("input")[0].value,n&&n(t,e.value),i()})),a.appendChild(o))})),e.addEventListener("keyup",(function(e){["ArrowUp","ArrowDown","Tab","Enter"].indexOf(e.key)>=0&&e.stopPropagation(),"Enter"===e.key&&this.blur()})),e.addEventListener("keydown",(function(e){var t=document.getElementById(this.id+"autocomplete-list");t&&(t=t.getElementsByTagName("div")),"ArrowDown"===e.key||"Tab"===e.key&&!e.shiftKey?(r++,a(t),e.preventDefault()):"ArrowUp"===e.key||"Tab"===e.key&&e.shiftKey?(r--,a(t),e.preventDefault()):"Enter"===e.key&&r>-1&&t&&t.length&&(e.preventDefault(),t[r].click(),this.focus())})),document.addEventListener("click",(function(e){i(e.target)}))}var Ne=Oe,Me=n(6813),He=n(1232),$e={name:"Execute",components:{Loading:He.Z},mixins:[Me.Z],data:function(){return{loading:!1,running:!1,docLoading:!1,structuredInput:!0,actionChanged:!1,selectedDoc:void 0,selectedAttr:void 0,selectedAttrDoc:void 0,selectedProcedure:{name:void 0,args:{}},response:void 0,error:void 0,rawRequest:void 0,rawRequestPlaceholder:'Raw JSON request. Example:\n\n{"type": "request", "action": "file.list", "args": {"path": "/"}}',actions:{},plugins:{},procedures:{},actionDocsCache:{},action:{name:void 0,args:{},extraArgs:[],supportsExtraArgs:!1}}},computed:{currentActionDocURL:function(){var e,t;if(null!==(e=this.action)&&void 0!==e&&null!==(t=e.name)&&void 0!==t&&t.length){var n=this.action.name.split(".").slice(0,-1).join("."),r=this.action.name.split(".").slice(-1),a=this.action.name.split(".").slice(0,-1).map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("")+"Plugin";return"https://docs.platypush.tech/platypush/plugins/"+"".concat(n,".html#platypush.plugins.").concat(n,".").concat(a,".").concat(r)}}},methods:{refresh:function(){var e=this;return(0,Re.Z)(regeneratorRuntime.mark((function t(){var n,r,a,o,i,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.request("inspect.get_procedures");case 4:return e.procedures=t.sent,t.next=7,e.request("inspect.get_all_plugins");case 7:e.plugins=t.sent;case 8:return t.prev=8,e.loading=!1,t.finish(8);case 11:for(n=0,r=Object.values(e.plugins);n<r.length;n++)for(a=r[n],o=0,i=Object.values(a.actions);o<i.length;o++)s=i[o],s.name=a.name+"."+s.name,s.supportsExtraArgs=!!s.has_kwargs,delete s.has_kwargs,e.actions[s.name]=s;c=e,Ne(e.$refs.actionName,Object.keys(e.actions).sort(),(function(t,n){e.action.name=n,c.updateAction()}));case 14:case"end":return t.stop()}}),t,null,[[1,,8,11]])})))()},updateAction:function(){var e=this;return(0,Re.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.action.name in e.actions||(e.selectedDoc=void 0),e.actionChanged&&e.action.name in e.actions){t.next=3;break}return t.abrupt("return");case 3:e.docLoading=!0;try{e.action=(0,Ee.Z)((0,Ee.Z)({},e.actions[e.action.name]),{},{args:Object.entries(e.actions[e.action.name].args).reduce((function(e,t){return e[t[0]]=(0,Ee.Z)((0,Ee.Z)({},t[1]),{},{value:t[1].default}),e}),{}),extraArgs:[]})}finally{e.docLoading=!1}if(t.t0=null===(n=e.actionDocsCache[e.action.name])||void 0===n?void 0:n.html,t.t0){t.next=10;break}return t.next=9,e.parseDoc(e.action.doc);case 9:t.t0=t.sent;case 10:e.selectedDoc=t.t0,e.actionDocsCache[e.action.name]||(e.actionDocsCache[e.action.name]={}),e.actionDocsCache[e.action.name].html=e.selectedDoc,e.actionChanged=!1,e.response=void 0,e.error=void 0;case 16:case"end":return t.stop()}}),t)})))()},parseDoc:function(e){var t=this;return(0,Re.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(null!==e&&void 0!==e&&e.length){n.next=2;break}return n.abrupt("return",e);case 2:return n.next=4,t.request("utils.rst_to_html",{text:e});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},updateProcedure:function(e,t){"submit"!==t.target.getAttribute("type")&&(this.selectedProcedure.name!==e?e in this.procedures?this.selectedProcedure={name:e,args:(this.procedures[e].args||[]).reduce((function(e,t){return e[t]=void 0,e}),{})}:console.warn("Procedure not found: "+e):this.selectedProcedure={name:void 0,args:{}})},addParameter:function(){this.action.extraArgs.push({name:void 0,value:void 0})},removeParameter:function(e){this.action.extraArgs.pop(e)},selectAttrDoc:function(e){var t=this;return(0,Re.Z)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.selectedAttr=e,n.t0=null===(r=t.actionDocsCache[t.action.name])||void 0===r||null===(a=r[e])||void 0===a?void 0:a.html,n.t0){n.next=6;break}return n.next=5,t.parseDoc(t.action.args[e].doc);case 5:n.t0=n.sent;case 6:t.selectedAttrDoc=n.t0,t.actionDocsCache[t.action.name]||(t.actionDocsCache[t.action.name]={}),t.actionDocsCache[t.action.name][e]={html:t.selectedAttrDoc};case 9:case"end":return n.stop()}}),n)})))()},resetAttrDoc:function(){this.selectedAttr=void 0,this.selectedAttrDoc=void 0},onInputTypeChange:function(e){var t=this;this.structuredInput=e,this.response=void 0,this.error=void 0,this.$nextTick((function(){e?t.$refs.actionName.focus():t.$refs.rawAction.focus()}))},onResponse:function(e){this.response="<pre>"+JSON.stringify(e,null,2)+"</pre>",this.error=void 0},onError:function(e){this.response=void 0,this.error=e},onDone:function(){this.running=!1},copyToClipboard:function(){var e=this;return(0,Re.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=(null!=e.error?e.error:e.response).replace(/^\s*<pre>/g,"").replace(/<\/pre>\s*/g,""),t.next=3,navigator.clipboard.writeText(n);case 3:case"end":return t.stop()}}),t)})))()},executeAction:function(){if((this.action.name||this.rawRequest)&&!this.running)if(this.running=!0,this.structuredInput){var e=(0,Ee.Z)((0,Ee.Z)({},Object.entries(this.action.args).reduce((function(e,t){if(null!=t[1].value){var n=t[1].value;try{n=JSON.parse(n)}catch(r){console.debug("Not a valid JSON value"),console.debug(n)}e[t[0]]=n}return e}),{})),this.action.extraArgs.reduce((function(e,t){var n=e[t.value];try{n=JSON.parse(n)}catch(r){console.debug("Not a valid JSON value"),console.debug(n)}return e[t.name]=n,e}),{}));this.request(this.action.name,e).then(this.onResponse).catch(this.onError).finally(this.onDone)}else try{var t=JSON.parse(this.rawRequest);this.execute(t).then(this.onResponse).catch(this.onError).finally(this.onDone)}catch(n){this.notify({error:!0,title:"Invalid JSON request",text:n.toString()})}},executeProcedure:function(e){if(this.selectedProcedure.name&&!this.running){e.stopPropagation(),this.running=!0;var t=(0,Ee.Z)({},Object.entries(this.selectedProcedure.args).reduce((function(e,t){if(null!=t[1]){var n=t[1];try{n=JSON.parse(n)}catch(r){console.debug("Not a valid JSON value"),console.debug(n)}e[t[0]]=n}return e}),{}));this.request("procedure."+this.selectedProcedure.name,t).then(this.onResponse).catch(this.onError).finally(this.onDone)}},onClick:function(e){"a"===e.target.tagName.toLowerCase()&&(e.stopPropagation(),e.preventDefault(),window.open(e.target.getAttribute("href","_blank")))}},mounted:function(){var e=this;this.$nextTick((function(){e.$refs.actionName.focus()})),this.refresh()}},je=n(3744);const Ue=(0,je.Z)($e,[["render",Te]]);var Ie=Ue}}]);
//# sourceMappingURL=3710-legacy.c79204f1.js.map