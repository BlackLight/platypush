(function(e){function t(t){for(var s,i,a=t[0],o=t[1],u=t[2],l=0,d=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],s=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(s=!1)}s&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={app:0},r={app:0},c=[];function a(e){return o.p+"static/js/"+({}[e]||e)+"."+{"chunk-014e8b04":"7f400c2d","chunk-2d2091df":"ec2fb649","chunk-16a3f845":"59b58d41","chunk-4bbbb9a3":"6f0e4975","chunk-24ff873d":"f955ad3b","chunk-5710a9bc":"47bb3f2d","chunk-62a3d08e":"8fc4fd3a","chunk-ac6aae98":"04b7413c","chunk-e8078048":"e668de5f"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-014e8b04":1,"chunk-16a3f845":1,"chunk-4bbbb9a3":1,"chunk-24ff873d":1,"chunk-5710a9bc":1,"chunk-62a3d08e":1,"chunk-ac6aae98":1,"chunk-e8078048":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var s="static/css/"+({}[e]||e)+"."+{"chunk-014e8b04":"542f4068","chunk-2d2091df":"31d6cfe0","chunk-16a3f845":"1df61c27","chunk-4bbbb9a3":"431b3300","chunk-24ff873d":"5ef32028","chunk-5710a9bc":"763b29ed","chunk-62a3d08e":"495b15c5","chunk-ac6aae98":"f24d8093","chunk-e8078048":"6c400707"}[e]+".css",r=o.p+s,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var u=c[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===r))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===s||l===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var s=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=s,delete i[e],h.parentNode.removeChild(h),n(c)},h.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){i[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var c=new Promise((function(t,n){s=r[e]=[t,n]}));t.push(s[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=a(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,n[1](d)}r[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01e1":function(e,t,n){},"0f0c":function(e,t,n){var s={"./Light/Index":["cf99","chunk-014e8b04"],"./LightHue/Index":["a84f","chunk-014e8b04","chunk-2d2091df"]};function i(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(s)},i.id="0f0c",e.exports=i},1061:function(e,t,n){"use strict";n("c345")},"1d73":function(e,t,n){"use strict";n("4876")},"1daf":function(e,t,n){"use strict";n("3399")},"1e25":function(e,t,n){"use strict";n("c7c8")},"2e56":function(e,t,n){"use strict";n("7907")},3399:function(e,t,n){},"3a5e":function(e,t,n){"use strict";var s=n("7a23"),i=Object(s["J"])("data-v-4d9c871b");Object(s["u"])("data-v-4d9c871b");var r={class:"loading"},c={class:"icon"};Object(s["s"])();var a=i((function(e,t,n,i,a,o){return Object(s["r"])(),Object(s["e"])("div",r,[Object(s["h"])("div",c,[(Object(s["r"])(),Object(s["e"])(s["a"],null,Object(s["x"])(4,(function(e){return Object(s["h"])("div",{key:e})})),64))])])}));n("4f22");const o={};o.render=a,o.__scopeId="data-v-4d9c871b";t["a"]=o},"3e54":function(e,t,n){"use strict";n("d3b7");var s=n("bc3a"),i=n.n(s),r={name:"Api",methods:{execute:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e4,s={};return"target"in e&&e["target"]||(e["target"]="localhost"),"type"in e&&e["type"]||(e["type"]="request"),n&&(s.timeout=n),new Promise((function(n,r){i.a.post("/execute",e,s).then((function(e){var s;if(e=e.data.response,null===(s=e.errors)||void 0===s?void 0:s.length){var i,c=(null===(i=e.errors)||void 0===i?void 0:i[0])||e;t.notify({text:c,error:!0}),r(c)}else n(e.output)})).catch((function(e){t.notify({text:e,error:!0}),r(e)}))}))},request:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6e4;return this.execute({type:"request",action:e,args:t},n)}}},c=r,a={name:"DateTime",methods:{formatDate:function(e){return e.toDateString().substring(0,10)},formatTime:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.toTimeString().substring(0,t?8:5)}}},o=a,u=n("f5ef"),l={name:"Events",computed:{_eventsReady:function(){var e;return null===(e=this.$root.$refs.events)||void 0===e?void 0:e.initialized}},methods:{subscribe:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];var i=function(){u["a"].emit("subscribe",{events:n,handler:e})};if(this._eventsReady)i();else var r=this,c=this.$watch((function(){return r._eventsReady}),(function(e){e&&(i(),c())}))}}},d=l,h={name:"Notification",methods:{notify:function(e){u["a"].emit("notification-create",e)},warn:function(e){this.notify({text:e,warning:!0})},error:function(e){throw this.notify({text:e,error:!0}),e}}},b=h,f={name:"Screen",methods:{isMobile:function(){return window.matchMedia("only screen and (max-width: 760px)").matches}}},p=f,m={name:"Types",methods:{parseBoolean:function(e){return"string"===typeof e?(e=e.toLowerCase(),"true"===e||"false"!==e&&!!parseInt(e)):!!e}}},v=m,O={name:"Utils",mixins:[c,b,d,o,p,v]};t["a"]=O},4876:function(e,t,n){},"4ef2":function(e,t,n){"use strict";n("9bb9")},"4f22":function(e,t,n){"use strict";n("d4c7")},5056:function(e){e.exports=JSON.parse('{"a":{"light.hue":{"class":"fas fa-lightbulb"}}}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23");function i(e,t,n,i,r,c){var a=Object(s["z"])("Events"),o=Object(s["z"])("Notifications"),u=Object(s["z"])("VoiceAssistant"),l=Object(s["z"])("Pushbullet"),d=Object(s["z"])("router-view");return Object(s["r"])(),Object(s["e"])(s["a"],null,[c.hasWebsocket?(Object(s["r"])(),Object(s["e"])(a,{key:0,ref:"events","ws-port":r.config["backend.http"].websocket_port},null,8,["ws-port"])):Object(s["f"])("",!0),Object(s["h"])(o,{ref:"notifications"},null,512),c.hasAssistant?(Object(s["r"])(),Object(s["e"])(u,{key:1,ref:"voice-assistant"},null,512)):Object(s["f"])("",!0),c.hasPushbullet?(Object(s["r"])(),Object(s["e"])(l,{key:2,ref:"pushbullet"},null,512)):Object(s["f"])("",!0),Object(s["h"])(d)],64)}n("96cf");var r=n("1da1"),c=(n("9911"),Object(s["J"])("data-v-6dc8bebc"));Object(s["u"])("data-v-6dc8bebc");var a={class:"notifications"};Object(s["s"])();var o=c((function(e,t,n,i,r,c){var o=Object(s["z"])("Notification");return Object(s["r"])(),Object(s["e"])("div",a,[(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["x"])(e.notifications,(function(e,t,n){return Object(s["r"])(),Object(s["e"])(o,{key:n,id:t,text:e.text,html:e.html,title:e.title,link:e.link,image:e.image,warning:e.warning,error:e.error,onClicked:c.destroy},null,8,["id","text","html","title","link","image","warning","error","onClicked"])})),128))])})),u=(n("a9e3"),Object(s["J"])("data-v-7646705e"));Object(s["u"])("data-v-7646705e");var l={class:"body"},d={key:0,class:"image col-3"},h={class:"row"},b={key:3,class:"fa fa-exclamation"},f={key:4,class:"fa fa-times"};Object(s["s"])();var p=u((function(e,t,n,i,r,c){return Object(s["r"])(),Object(s["e"])("div",{class:["notification fade-in",{warning:n.warning,error:n.error}],onClick:t[1]||(t[1]=function(){return c.clicked.apply(c,arguments)})},[n.title?(Object(s["r"])(),Object(s["e"])("div",{key:0,class:"title",textContent:Object(s["C"])(n.title)},null,8,["textContent"])):Object(s["f"])("",!0),Object(s["h"])("div",l,[n.image||n.warning||n.error?(Object(s["r"])(),Object(s["e"])("div",d,[Object(s["h"])("div",h,[n.image&&n.image.src?(Object(s["r"])(),Object(s["e"])("img",{key:0,src:n.image.src,alt:""},null,8,["src"])):n.image&&n.image.icon?(Object(s["r"])(),Object(s["e"])("i",{key:1,class:["fa","fa-"+n.image.icon],style:n.image.color?"--color: "+n.image.color:""},null,6)):n.image&&n.image.iconClass?(Object(s["r"])(),Object(s["e"])("i",{key:2,class:n.image.iconClass,style:n.image.color?"--color: "+n.image.color:""},null,6)):n.warning?(Object(s["r"])(),Object(s["e"])("i",b)):n.error?(Object(s["r"])(),Object(s["e"])("i",f)):Object(s["f"])("",!0)])])):Object(s["f"])("",!0),n.text&&n.image?(Object(s["r"])(),Object(s["e"])("div",{key:1,class:"text col-9",textContent:Object(s["C"])(n.text)},null,8,["textContent"])):Object(s["f"])("",!0),n.html&&n.image?(Object(s["r"])(),Object(s["e"])("div",{key:2,class:"text col-9",innerHTML:n.html},null,8,["innerHTML"])):Object(s["f"])("",!0),n.text&&!n.image?(Object(s["r"])(),Object(s["e"])("div",{key:3,class:"text row horizontal-center",textContent:Object(s["C"])(n.text)},null,8,["textContent"])):Object(s["f"])("",!0),n.html&&!n.image?(Object(s["r"])(),Object(s["e"])("div",{key:4,class:"text row horizontal-center",innerHTML:n.html},null,8,["innerHTML"])):Object(s["f"])("",!0)])],2)})),m={name:"Notification",props:["id","text","html","title","image","link","error","warning"],methods:{clicked:function(){this.link&&window.open(this.link,"_blank"),this.$emit("clicked",this.id)}}};n("f34e");m.render=p,m.__scopeId="data-v-7646705e";var v=m,O={name:"Notifications",components:{Notification:v},props:{duration:{type:Number,default:1e4}},data:function(){return{index:0,notifications:{},timeouts:{}}},methods:{create:function(e){var t=this.index++;this.notifications[t]=e,null==e.duration&&(e.duration=this.duration);var n=e.duration?parseInt(e.duration):0;n&&(this.timeouts[t]=setTimeout(this.destroy.bind(null,t),n))},destroy:function(e){delete this.notifications[e],delete this.timeouts[e]}}};n("2e56");O.render=o,O.__scopeId="data-v-6dc8bebc";var g=O,j=n("3e54");function y(e,t,n,i,r,c){return Object(s["r"])(),Object(s["e"])("div")}n("99af"),n("c975"),n("a434");var k=n("b85c"),w=n("2909"),x=n("f5ef"),C={name:"Events",props:{wsPort:{type:Number,default:8009}},data:function(){return{ws:null,initialized:!1,pending:!1,opened:!1,timeout:null,reconnectMsecs:3e4,handlers:{}}},methods:{onWebsocketTimeout:function(){console.log("Websocket reconnection timed out, retrying"),this.pending=!1,this.ws&&this.ws.close(),this.onClose()},onMessage:function(e){var t=[];if(e=e.data,"string"===typeof e)try{e=JSON.parse(e)}catch(r){console.warn("Received invalid non-JSON event"),console.warn(e)}if(console.debug(e),"event"===e.type){null in this.handlers&&t.push(this.handlers[null]),e.args.type in this.handlers&&t.push.apply(t,Object(w["a"])(this.handlers[e.args.type]));for(var n=0,s=t;n<s.length;n++){var i=s[n];i instanceof Array&&(i=i[0]),i(e.args)}}},onOpen:function(){this.opened&&(console.log("There's already an opened websocket connection, closing the newly opened one"),this.ws&&(this.ws.onclose=function(){},this.ws.close())),console.log("Websocket connection successful"),this.opened=!0,this.pending&&(this.pending=!1),this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0)},onError:function(e){console.error("Websocket error"),console.error(e)},onClose:function(e){e&&console.log("Websocket closed - code: "+e.code+" - reason: "+e.reason),this.opened=!1,this.pending||(this.pending=!0,this.init())},init:function(){try{var e="https:"===location.protocol?"wss:":"ws",t="".concat(e,"://").concat(location.hostname,":").concat(this.wsPort);this.ws=new WebSocket(t)}catch(n){return console.error("Websocket initialization error"),void console.error(n)}this.pending=!0,this.timeout=setTimeout(this.onWebsocketTimeout,this.reconnectMsecs),this.ws.onmessage=this.onMessage,this.ws.onopen=this.onOpen,this.ws.onerror=this.onError,this.ws.onclose=this.onClose,this.initialized=!0},subscribe:function(e){var t,n=e.handler,s=e.events.length?e.events:[null],i=Object(k["a"])(s);try{for(i.s();!(t=i.n()).done;){var r=t.value;r in this.handlers||(this.handlers[r]=[]),this.handlers[r].push(n)}}catch(c){i.e(c)}finally{i.f()}},unsubscribe:function(e){var t,n=e.handler,s=e.events.length?e.events:[null],i=Object(k["a"])(s);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(r in this.handlers){var c=this.handlers[r].indexOf(n);c<0||(this.handlers[r]=this.handlers[r].splice(c,1)[1],this.handlers[r].length||delete this.handlers[r])}}}catch(a){i.e(a)}finally{i.f()}}},created:function(){x["a"].on("subscribe",this.subscribe),x["a"].on("unsubscribe",this.unsubscribe),this.init()}};C.render=y;var _=C,N={class:"assistant-modal"},S={class:"icon"},T={key:0,class:"fa fa-bell"},P={key:1,class:"fa fa-volume-up"},I={key:2,class:"fa fa-comment-dots"},z={key:3,class:"fa fa-microphone"},E={class:"text"},R={key:0,class:"listening"},M=Object(s["h"])("span",null,"Assistant listening",-1),A={key:1,class:"speech-recognized"},V={key:2,class:"responding"};function $(e,t,n,i,r,c){var a=Object(s["z"])("Modal");return Object(s["r"])(),Object(s["e"])("div",N,[Object(s["h"])(a,{ref:"assistantModal"},{default:Object(s["G"])((function(){return[Object(s["h"])("div",S,[r.state.alerting?(Object(s["r"])(),Object(s["e"])("i",T)):r.state.responding?(Object(s["r"])(),Object(s["e"])("i",P)):r.state.speechRecognized?(Object(s["r"])(),Object(s["e"])("i",I)):(Object(s["r"])(),Object(s["e"])("i",z))]),Object(s["h"])("div",E,[r.state.listening?(Object(s["r"])(),Object(s["e"])("div",R,[M])):r.state.speechRecognized?(Object(s["r"])(),Object(s["e"])("div",A,[Object(s["h"])("span",{textContent:Object(s["C"])(r.phrase)},null,8,["textContent"])])):r.state.responding?(Object(s["r"])(),Object(s["e"])("div",V,[Object(s["h"])("span",{textContent:Object(s["C"])(r.responseText)},null,8,["textContent"])])):Object(s["f"])("",!0)])]})),_:1},512)])}var L=Object(s["J"])("data-v-62975272");Object(s["u"])("data-v-62975272");var q={class:"body"};Object(s["s"])();var D=L((function(e,t,n,i,r,c){return Object(s["r"])(),Object(s["e"])("div",{class:["modal-container fade-in",{hidden:!r.isVisible}],id:n.id,style:{"--z-index":c.zIndex},onClick:t[3]||(t[3]=function(){return c.close.apply(c,arguments)})},[Object(s["h"])("div",{class:"modal",style:{"--width":n.width,"--height":n.height}},[Object(s["h"])("div",{class:"content",onClick:t[2]||(t[2]=function(e){return e.stopPropagation()})},[n.title?(Object(s["r"])(),Object(s["e"])("div",{key:0,class:"header",textContent:Object(s["C"])(n.title)},null,8,["textContent"])):Object(s["f"])("",!0),Object(s["h"])("div",q,[Object(s["y"])(e.$slots,"default",{onModalClose:t[1]||(t[1]=function(){return c.close.apply(c,arguments)})})])])],4)],14,["id"])})),W={name:"Modal",props:{id:{type:String},title:{type:String},width:{type:[Number,String]},height:{type:[Number,String]},visible:{type:Boolean,default:!1},timeout:{type:[Number,String]},level:{type:Number,default:1}},data:function(){return{timeoutId:void 0,prevVisible:this.visible,isVisible:this.visible}},computed:{zIndex:function(){return 500+this.level}},methods:{close:function(){this.prevVisible=this.isVisible,this.isVisible=!1},show:function(){this.prevVisible=this.isVisible,this.isVisible=!0},toggle:function(){this.isVisible?this.close():this.show()}},updated:function(){if(this.prevVisible=this.isVisible,this.isVisible){var e,t=parseInt(getComputedStyle(this.$el).zIndex),n=[],s=Object(k["a"])(document.querySelectorAll(".modal-container:not(.hidden)"));try{for(s.s();!(e=s.n()).done;){var i=e.value,r=parseInt(getComputedStyle(i).zIndex);r>t?(t=r,n=[i]):r===t&&n.push(i)}}catch(a){s.e(a)}finally{s.f()}(n.indexOf(this.$el)<0||n.length>1)&&(this.$el.style.zIndex=t+1)}if(this.isVisible&&this.timeout&&!this.timeoutId){var c=function(e){return function(){e.close(),e.timeoutId=void 0}};this.timeoutId=setTimeout(c(this),0+this.timeout)}}};n("1e25");W.render=D,W.__scopeId="data-v-62975272";var J=W,B={name:"VoiceAssistant",components:{Modal:J},mixins:[j["a"]],data:function(){return{responseText:"",phrase:"",hideTimeout:void 0,state:{listening:!1,speechRecognized:!1,responding:!1,alerting:!1}}},methods:{reset:function(){this.state.listening=!1,this.state.speechRecognized=!1,this.state.responding=!1,this.state.alerting=!1,this.phrase="",this.responseText=""},conversationStart:function(){this.reset(),this.state.listening=!0,this.$refs.assistantModal.show(),this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=void 0)},conversationEnd:function(){var e=this,t=this;this.hideTimeout=setTimeout((function(){e.reset(),t.$refs.assistantModal.close(),t.hideTimeout=void 0}),4e3)},speechRecognized:function(e){this.reset(),this.state.speechRecognized=!0,this.phrase=e.phrase,this.$refs.assistantModal.show()},response:function(e){this.reset(),this.state.responding=!0,this.responseText=e.response_text,this.$refs.assistantModal.show()},alertOn:function(){this.reset(),this.state.alerting=!0,this.$refs.assistantModal.show()},alertOff:function(){this.reset(),this.state.alerting=!1,this.$refs.assistantModal.close()},registerHandlers:function(){this.subscribe(this.conversationStart,"platypush.message.event.assistant.ConversationStartEvent"),this.subscribe(this.alertOn,"platypush.message.event.assistant.AlertStartedEvent"),this.subscribe(this.alertOff,"platypush.message.event.assistant.AlertEndEvent"),this.subscribe(this.speechRecognized,"platypush.message.event.assistant.SpeechRecognizedEvent"),this.subscribe(this.response,"platypush.message.event.assistant.ResponseEvent"),this.subscribe(this.conversationEnd,"platypush.message.event.assistant.ConversationEndEvent","platypush.message.event.assistant.NoResponseEvent","platypush.message.event.assistant.ConversationTimeoutEvent")}},mounted:function(){this.registerHandlers()}};n("6305");B.render=$;var U=B;function H(e,t,n,i,r,c){return Object(s["r"])(),Object(s["e"])("div")}var F={name:"Pushbullet",mixins:[j["a"]],methods:{onMessage:function(e){"mirror"===e.push_type&&this.notify({title:e.title,text:e.body,image:{src:e.icon?"data:image/png;base64, "+e.icon:void 0,icon:e.icon?void 0:"bell"}})}},mounted:function(){this.subscribe(this.onMessage,"platypush.message.event.pushbullet.PushbulletEvent")}};F.render=H;var K=F,G={name:"App",mixins:[j["a"]],components:{Pushbullet:K,Notifications:g,Events:_,VoiceAssistant:U},data:function(){return{config:{},userAuthenticated:!1}},computed:{hasWebsocket:function(){return this.userAuthenticated&&"backend.http"in this.config},hasAssistant:function(){return this.hasWebsocket},hasPushbullet:function(){return this.hasWebsocket&&("pushbullet"in this.config||"backend.pushbullet"in this.config)}},methods:{onNotification:function(e){this.$refs.notifications.create(e)},initConfig:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.request("config.get");case 2:e.config=t.sent,e.userAuthenticated=!0;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.initConfig()},mounted:function(){x["a"].on("notification-create",this.onNotification)}};n("9cdc");G.render=i;var Z=G,Q=n("6c02"),X=Object(s["J"])("data-v-0ba67711"),Y=X((function(e,t,n,i,r,c){var a=Object(s["z"])("Loading"),o=Object(s["z"])("Widget"),u=Object(s["z"])("Row");return Object(s["r"])(),Object(s["e"])(s["a"],null,[r.loading?(Object(s["r"])(),Object(s["e"])(a,{key:0})):Object(s["f"])("",!0),Object(s["h"])("div",{id:"dashboard",class:["columns is-mobile",c.classes],style:r.style},[(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["x"])(r.rows,(function(e,t){return Object(s["r"])(),Object(s["e"])(u,{key:t,class:e.class,style:e.style},{default:X((function(){return[(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["x"])(e.widgets,(function(e,t){return Object(s["r"])(),Object(s["e"])(s["b"],{key:t},[Object(s["h"])(o,{style:e.style,class:e.class},{default:X((function(){return[(Object(s["r"])(),Object(s["e"])(Object(s["A"])(e.component),e.props,null,16))]})),_:2},1032,["style","class"])],1024)})),128))]})),_:2},1032,["class","style"])})),128))],6)],64)})),ee=(n("d81d"),n("13d5"),n("b0c0"),n("b680"),n("d3b7"),n("3a5e")),te=Object(s["J"])("data-v-1b4663f2"),ne=te((function(e,t,n,i,r,c){return Object(s["r"])(),Object(s["e"])("div",{class:["row",c.classes],style:n.style},[Object(s["y"])(e.$slots,"default")],6)})),se={name:"Row",props:{class:{type:String,required:!1,default:""},style:{type:String,required:!1,default:""}},computed:{classes:function(){return this.class}}};n("6682");se.render=ne,se.__scopeId="data-v-1b4663f2";var ie=se,re=Object(s["J"])("data-v-8c529832"),ce=re((function(e,t,n,i,r,c){return Object(s["r"])(),Object(s["e"])("div",{style:n.style,class:c.classes},[Object(s["y"])(e.$slots,"default")],6)})),ae=(n("ac1f"),n("1276"),{name:"Widget",props:{style:{type:String,required:!1,default:""},class:{type:String,required:!1,default:""}},computed:{classes:function(){return(this.class&&this.class.length?this.class.split(" "):["col-3"]).concat(["widget","column"])}}});n("1061");ae.render=ce,ae.__scopeId="data-v-8c529832";var oe=ae,ue={name:"Dashboard",mixins:[j["a"]],components:{Widget:oe,Loading:ee["a"],Row:ie},props:{refreshSeconds:{type:Number,required:!1,default:0}},data:function(){return{rows:[],loading:!1,style:void 0,class:void 0}},computed:{classes:function(){return this.class}},methods:{parseTemplate:function(e,t){var i=(new DOMParser).parseFromString(t,"text/xml").childNodes[0],r=this;this.style=i.attributes.style?i.attributes.style.nodeValue:void 0,this.class=i.attributes.class?i.attributes.class.nodeValue:void 0,this.rows=Object(w["a"])(i.getElementsByTagName("Row")).map((function(e){return{style:e.attributes.style?e.attributes.style.nodeValue:void 0,class:e.attributes.class?e.attributes.class.nodeValue:void 0,widgets:Object(w["a"])(e.children).map((function(e){var t=Object(s["i"])((function(){return n("cdb9")("./".concat(e.nodeName,"/Index"))})),i=e.attributes.style?e.attributes.style.nodeValue:void 0,c=e.attributes.class?e.attributes.class.nodeValue:void 0,a=Object(w["a"])(e.attributes).reduce((function(e,t){return"style"!==t.nodeName&&(e[t.nodeName]=t.nodeValue),e}),{}),o={component:t,style:i,class:c,props:a||{}};return r.$options.components[e.nodeName]=t,o}))}})),this.loading=!1},refreshDashboard:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.widgets=[],n=e.$route.params.name,t.next=5,e.request("config.get_dashboard",{name:n});case 5:s=t.sent,s||e.error("Dashboard ".concat(n," not found")),e.parseTemplate(n,s);case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){if(this.refreshDashboard(),this.refreshSeconds){var e=this;setInterval((function(){e.refreshDashboard()}),parseInt((1e3*this.refreshSeconds).toFixed(0)))}}};n("1daf"),n("9a5d");ue.render=Y,ue.__scopeId="data-v-0ba67711";var le=ue;function de(e,t,n,i,r,c){return Object(s["r"])(),Object(s["e"])("h1",null,"Object not found")}var he={name:"NotFound"};he.render=de;var be=he,fe={class:"login-container"},pe={class:"login",method:"POST"},me={class:"description"},ve=Object(s["h"])("div",{class:"row"},[Object(s["h"])("label",null,[Object(s["h"])("input",{type:"text",name:"username",placeholder:"Username"})])],-1),Oe=Object(s["h"])("div",{class:"row"},[Object(s["h"])("label",null,[Object(s["h"])("input",{type:"password",name:"password",placeholder:"Password"})])],-1),ge={key:0,class:"row"},je=Object(s["h"])("label",null,[Object(s["h"])("input",{type:"password",name:"confirm_password",placeholder:"Confirm password"})],-1),ye={class:"row pull-right"},ke=Object(s["h"])("div",{class:"row pull-right"},[Object(s["h"])("label",{class:"checkbox"},[Object(s["h"])("input",{type:"checkbox",name:"remember"}),Object(s["g"])("  Keep me logged in on this device   ")])],-1);function we(e,t,n,i,r,c){return Object(s["r"])(),Object(s["e"])("div",fe,[Object(s["h"])("form",pe,[Object(s["h"])("div",me,Object(s["C"])(c._register?"Welcome":"Authenticate")+" to platypush ",1),ve,Oe,c._register?(Object(s["r"])(),Object(s["e"])("div",ge,[je])):Object(s["f"])("",!0),Object(s["h"])("div",ye,[Object(s["h"])("input",{type:"submit",class:"btn btn-primary",value:c._register?"Register":"Login"},null,8,["value"])]),ke])])}var xe={name:"Login",mixins:[j["a"]],props:{register:{type:Boolean,required:!1,default:!1}},computed:{_register:function(){return this.parseBoolean(this.register)}}};n("1d73");xe.render=we;var Ce=xe;function _e(e,t,n,i,r,c){var a=Object(s["z"])("Login");return Object(s["r"])(),Object(s["e"])(a,{register:!0})}var Ne={name:"Register",mixins:[Ce],components:{Login:Ce},props:{register:{type:Boolean,required:!1,default:!0}}};Ne.render=_e;var Se=Ne,Te=Object(s["J"])("data-v-44328a16");Object(s["u"])("data-v-44328a16");var Pe={class:"canvas"};Object(s["s"])();var Ie=Te((function(e,t,n,i,r,c){var a=Object(s["z"])("Loading"),o=Object(s["z"])("Nav");return Object(s["r"])(),Object(s["e"])("main",null,[r.loading?(Object(s["r"])(),Object(s["e"])(a,{key:0})):(Object(s["r"])(),Object(s["e"])(o,{key:1,panels:r.components,"selected-panel":r.selectedPanel,hostname:r.hostname,onSelect:t[1]||(t[1]=function(e){return r.selectedPanel=e})},null,8,["panels","selected-panel","hostname"])),Object(s["h"])("div",Pe,[(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["x"])(r.components,(function(e,t){return Object(s["r"])(),Object(s["e"])("div",{class:"panel",key:t},[t===r.selectedPanel?(Object(s["r"])(),Object(s["e"])(Object(s["A"])(e.component),{key:0,config:e.config,"plugin-name":t},null,8,["config","plugin-name"])):Object(s["f"])("",!0)])})),128))])])})),ze=(n("4160"),n("a15b"),n("fb6a"),n("4fad"),n("3ca3"),n("466d"),n("159b"),n("ddb0"),n("3835")),Ee=(n("b64b"),Object(s["J"])("data-v-f1c0ba72"));Object(s["u"])("data-v-f1c0ba72");var Re=Object(s["h"])("i",{class:"fas fa-bars"},null,-1),Me={class:"icon"},Ae={key:1,class:"fas fa-puzzle-piece"},Ve={key:0,class:"name"};Object(s["s"])();var $e=Ee((function(e,t,n,i,r,c){return Object(s["r"])(),Object(s["e"])("nav",{class:{collapsed:r.collapsed}},[Object(s["h"])("div",{class:"toggler",onClick:t[1]||(t[1]=function(e){return r.collapsed=!r.collapsed})},[Re,n.hostname?(Object(s["r"])(),Object(s["e"])("span",{key:0,class:"hostname",textContent:Object(s["C"])(n.hostname)},null,8,["textContent"])):Object(s["f"])("",!0)]),(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["x"])(Object.keys(n.panels),(function(e){var t;return Object(s["r"])(),Object(s["e"])("li",{key:e,class:["entry",{selected:e===n.selectedPanel}],title:e,onClick:function(t){return c.onItemClick(e)}},[Object(s["h"])("a",{href:"/#".concat(e)},[Object(s["h"])("span",Me,[(null===(t=r.icons[e])||void 0===t?void 0:t.class)?(Object(s["r"])(),Object(s["e"])("i",{key:0,class:r.icons[e].class},null,2)):(Object(s["r"])(),Object(s["e"])("i",Ae))]),r.collapsed?Object(s["f"])("",!0):(Object(s["r"])(),Object(s["e"])("span",Ve,Object(s["C"])(c.displayName(e)),1))],8,["href"])],10,["title","onClick"])})),128))],2)})),Le=n("5056"),qe={name:"Nav",emits:["select"],mixins:[j["a"]],props:{panels:{type:Object,required:!0},selectedPanel:{type:String},hostname:{type:String}},methods:{displayName:function(e){return e.split(".").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(" ")},onItemClick:function(e){this.$emit("select",e),this.isMobile()&&(this.collapsed=!0)}},data:function(){return{collapsed:!0,icons:Le["a"],host:null}},mounted:function(){this.isMobile()&&!this.$root.$route.hash.length&&(this.collapsed=!1)}};n("64c7");qe.render=$e,qe.__scopeId="data-v-f1c0ba72";var De=qe,We={name:"Panel",mixins:[j["a"]],components:{Nav:De,Loading:ee["a"]},data:function(){return{loading:!1,plugins:{},backends:{},procedures:{},components:{},hostname:void 0,selectedPanel:void 0}},methods:{initSelectedPanel:function(){var e=this.$route.hash.match("#?([a-zA-Z0-9.]+)[?]?(.*)");if(e){var t=e[1];(null===t||void 0===t?void 0:t.length)&&(this.selectedPanel=t)}},initPanels:function(){var e=this;this.components={},Object.entries(this.plugins).forEach(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(i){var c,a,o,u,l,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=Object(ze["a"])(i,2),a=c[0],o=c[1],u=a.split(".").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(""),l=null,t.prev=3,t.next=6,n("0f0c")("./".concat(u,"/Index"));case 6:l=t.sent,t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](3),t.abrupt("return");case 12:d=Object(s["i"])(Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",l);case 1:case"end":return e.stop()}}),e)})))),e.$options.components[a]=d,e.components[a]={component:d,pluginName:a,config:o};case 15:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}())},parseConfig:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.request("config.get_plugins"),e.request("config.get_backends"),e.request("config.get_procedures"),e.request("config.get_device_id")]);case 2:n=t.sent,s=Object(ze["a"])(n,4),e.plugins=s[0],e.backends=s[1],e.procedures=s[2],e.hostname=s[3];case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.parseConfig();case 4:e.initPanels(),e.initSelectedPanel();case 6:return t.prev=6,e.loading=!1,t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[1,,6,9]])})))()}};n("4ef2"),n("d555");We.render=Ie,We.__scopeId="data-v-44328a16";var Je=We,Be=[{path:"/",name:"Panel",component:Je},{path:"/dashboard/:name",name:"Dashboard",component:le},{path:"/login",name:"Login",component:Ce},{path:"/register",name:"Register",component:Se},{path:"/:catchAll(.*)",component:be}],Ue=Object(Q["a"])({history:Object(Q["b"])(),routes:Be}),He=Ue,Fe=Object(s["d"])(Z);Fe.config.globalProperties._config=window.config,Fe.use(He).mount("#app")},6305:function(e,t,n){"use strict";n("b296")},"64c7":function(e,t,n){"use strict";n("e09c")},6682:function(e,t,n){"use strict";n("9430")},"6fda":function(e,t,n){},7907:function(e,t,n){},9430:function(e,t,n){},"9a5d":function(e,t,n){"use strict";n("6fda")},"9bb9":function(e,t,n){},"9cdc":function(e,t,n){"use strict";n("c701")},b296:function(e,t,n){},c345:function(e,t,n){},c701:function(e,t,n){},c7c8:function(e,t,n){},cdb9:function(e,t,n){var s={"./Calendar/Index":["3c97","chunk-62a3d08e"],"./DateTime/Index":["365a","chunk-4bbbb9a3"],"./DateTimeWeather/Index":["3737","chunk-16a3f845","chunk-4bbbb9a3","chunk-5710a9bc"],"./ImageCarousel/Index":["c845","chunk-16a3f845","chunk-4bbbb9a3","chunk-24ff873d"],"./Music/Index":["bcf7","chunk-ac6aae98"],"./RssNews/Index":["c306","chunk-e8078048"],"./Weather/Index":["5b43","chunk-16a3f845"]};function i(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(s)},i.id="cdb9",e.exports=i},d4c7:function(e,t,n){},d555:function(e,t,n){"use strict";n("01e1")},e09c:function(e,t,n){},f34e:function(e,t,n){"use strict";n("f5d6")},f5d6:function(e,t,n){},f5ef:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n("14b7"),i=Object(s["a"])()}});
//# sourceMappingURL=app.fd969252.js.map