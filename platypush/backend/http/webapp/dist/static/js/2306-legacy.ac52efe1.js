"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[2306],{2306:function(e,t,l){l.r(t),l.d(t,{default:function(){return x}});l(8309),l(1539),l(3948);var n=l(6252),a=l(3577),u=l(9963),i={class:"entity switch-container"},s={class:"col-1 icon"},o={class:"col-s-8 col-m-9 label"},r=["textContent"],c={class:"col-s-3 col-m-2 buttons pull-right"},v=["textContent"],d={class:"row"},p={class:"input"},f=["disabled"],h={key:0,value:"",selected:""},g=["value","selected","textContent"];function w(e,t,l,w,y,k){var m,_=(0,n.up)("EntityIcon");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",{class:(0,a.C_)(["head",{collapsed:e.collapsed}])},[(0,n._)("div",s,[(0,n.Wm)(_,{entity:e.value,loading:e.loading,error:e.error},null,8,["entity","loading","error"])]),(0,n._)("div",o,[(0,n._)("div",{class:"name",textContent:(0,a.zw)(e.value.name)},null,8,r)]),(0,n._)("div",c,[null!=(null===(m=e.value)||void 0===m?void 0:m.value)?((0,n.wg)(),(0,n.iD)("span",{key:0,class:"value",textContent:(0,a.zw)(e.value.values[e.value.value]||e.value.value)},null,8,v)):(0,n.kq)("",!0),k.hasValues?((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:t[0]||(t[0]=(0,u.iM)((function(t){return e.collapsed=!e.collapsed}),["stop"]))},[(0,n._)("i",{class:(0,a.C_)(["fas",{"fa-angle-up":!e.collapsed,"fa-angle-down":e.collapsed}])},null,2)])):(0,n.kq)("",!0)])],2),e.collapsed?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",{key:0,class:"body",onClick:t[2]||(t[2]=(0,u.iM)((function(){return k.prevent&&k.prevent.apply(k,arguments)}),["stop"]))},[(0,n._)("div",d,[(0,n._)("div",p,[(0,n._)("select",{onInput:t[1]||(t[1]=function(){return k.setValue&&k.setValue.apply(k,arguments)}),ref:"values",disabled:e.loading},[e.value.is_write_only?((0,n.wg)(),(0,n.iD)("option",h,"--")):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.displayValues,(function(t,l){return(0,n.wg)(),(0,n.iD)("option",{value:l,selected:l==e.value.value,key:l,textContent:(0,a.zw)(t)},null,8,g)})),128))],40,f)])])]))])}var y=l(8534),k=(l(5666),l(2479),l(7909)),m=l(5017),_={name:"EnumSwitch",components:{EntityIcon:m["default"]},mixins:[k["default"]],computed:{hasValues:function(){var e;return!!Object.values((null===this||void 0===this||null===(e=this.value)||void 0===e?void 0:e.values)||{}).length},displayValues:function(){var e,t;return(null===(e=this.value)||void 0===e?void 0:e.values)instanceof Array?this.value.values.reduce((function(e,t){return e[t]=t,e}),{}):(null===(t=this.value)||void 0===t?void 0:t.values)||{}}},methods:{prevent:function(e){return e.stopPropagation(),!1},setValue:function(e){var t=this;return(0,y.Z)(regeneratorRuntime.mark((function l(){var n,a;return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:if(null!==(n=e.target.value)&&void 0!==n&&n.length){l.next=2;break}return l.abrupt("return");case 2:return t.$emit("loading",!0),t.value.is_write_only&&(a=t,setTimeout((function(){a.$refs.values.value=""}),1e3)),l.prev=4,l.next=7,t.request("entities.execute",{id:t.value.id,action:"set",value:e.target.value});case 7:return l.prev=7,t.$emit("loading",!1),l.finish(7);case 10:case"end":return l.stop()}}),l,null,[[4,,7,10]])})))()}}},b=l(3744);const C=(0,b.Z)(_,[["render",w],["__scopeId","data-v-1bc82e80"]]);var x=C}}]);
//# sourceMappingURL=2306-legacy.ac52efe1.js.map