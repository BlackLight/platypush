"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[6324],{6890:function(l,e,a){a.r(e),a.d(e,{default:function(){return D}});var t=a(6252),s=a(3577),i=a(9963);const n=l=>((0,t.dD)("data-v-31c67fb5"),l=l(),(0,t.Cn)(),l),o={class:"entity variable-container"},d={class:"icon"},c={class:"label"},u=["textContent"],r=["textContent"],v={class:"row"},p={class:"row"},h={class:"col-9"},_=["disabled"],f={class:"col-3 pull-right"},b=["disabled"],m=n((()=>(0,t._)("i",{class:"fas fa-trash"},null,-1))),g=[m],y=["disabled"],C=n((()=>(0,t._)("i",{class:"fas fa-check"},null,-1))),w=[C];function k(l,e,a,n,m,C){const k=(0,t.up)("EntityIcon");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",{class:(0,s.C_)(["head",{collapsed:l.collapsed}])},[(0,t._)("div",d,[(0,t.Wm)(k,{entity:l.value,loading:l.loading,error:l.error},null,8,["entity","loading","error"])]),(0,t._)("div",c,[(0,t._)("div",{class:"name",textContent:(0,s.zw)(l.value.name)},null,8,u)]),(0,t._)("div",{class:"value-and-toggler",onClick:e[1]||(e[1]=(0,i.iM)((e=>l.collapsed=!l.collapsed),["stop"]))},[(0,t._)("div",{class:"value",textContent:(0,s.zw)(l.value.value)},null,8,r),(0,t._)("div",{class:"collapse-toggler",onClick:e[0]||(e[0]=(0,i.iM)((e=>l.collapsed=!l.collapsed),["stop"]))},[(0,t._)("i",{class:(0,s.C_)(["fas",{"fa-chevron-down":l.collapsed,"fa-chevron-up":!l.collapsed}])},null,2)])])],2),l.collapsed?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",{key:0,class:"body",onClick:e[5]||(e[5]=(0,i.iM)(((...e)=>l.prevent&&l.prevent(...e)),["stop"]))},[(0,t._)("div",v,[(0,t._)("form",{onSubmit:e[4]||(e[4]=(0,i.iM)(((...l)=>C.setValue&&C.setValue(...l)),["prevent"]))},[(0,t._)("div",p,[(0,t._)("div",h,[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=e=>l.value_=e),placeholder:"Variable value",disabled:l.loading,ref:"text"},null,8,_),[[i.nr,l.value_]])]),(0,t._)("div",f,[(0,t._)("button",{type:"button",title:"Clear",onClick:e[3]||(e[3]=(0,i.iM)(((...l)=>C.clearValue&&C.clearValue(...l)),["stop"])),disabled:l.loading},g,8,b),(0,t._)("button",{type:"submit",title:"Edit",disabled:l.loading},w,8,y)])])],32)])]))])}var V=a(847),x=a(4967),M={name:"Variable",components:{EntityIcon:x["default"]},mixins:[V["default"]],emits:["loading"],data:function(){return{collapsed:!0,value_:null}},computed:{isCollapsed(){return this.collapsed}},methods:{async clearValue(){this.$emit("loading",!0);try{await this.request("variable.unset",{name:this.value.name})}finally{this.$emit("loading",!1)}},async setValue(){const l=this.value_;if(!l?.length)return await this.clearValue();this.$emit("loading",!0);try{const e={};e[this.value.name]=l,await this.request("variable.set",e)}finally{this.$emit("loading",!1)}}},mounted(){this.value_=this.value.value,this.$watch((()=>this.value.value),(l=>{this.value_=l}))}},$=a(3744);const q=(0,$.Z)(M,[["render",k],["__scopeId","data-v-31c67fb5"]]);var D=q}}]);
//# sourceMappingURL=6324.c3f621ef.js.map