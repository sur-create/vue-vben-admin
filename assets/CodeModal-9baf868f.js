var p=Object.defineProperty,c=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var r=(o,e,t)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,n=(o,e)=>{for(var t in e||(e={}))u.call(e,t)&&r(o,t,e[t]);if(s)for(var t of s(e))v.call(e,t)&&r(o,t,e[t]);return o},i=(o,e)=>c(o,f(e));import{r as C,a as b}from"./index-a57e3581.js";import _ from"./PreviewCode-e21f7892.js";import{M as w}from"./antd-4273b3e7.js";import{d as D,r as M,c as h,G as J,a7 as m,Z as V,a8 as $,a9 as x,l as y}from"./vue-ea98dac5.js";import{_ as A}from"./index.js";import"./index-c4d58489.js";import"./useWindowSizeFn-997fa1d0.js";import"./copyTextToClipboard-a2756f90.js";const g=`<template>
  <div>
    <v-form-create
      :formConfig="formConfig"
      :formData="formData"
      v-model="fApi"
    />
    <a-button @click="submit">提交</a-button>
  </div>
</template>
<script>

export default {
  name: 'Demo',
  data () {
    return {
      fApi:{},
      formData:{},
      formConfig: `;let j=`
    }
  },
  methods: {
    async submit() {
      const data = await this.fApi.submit()
      console.log(data)
     }
  }
}
<\/script>`;const k=D({name:"CodeModal",components:{PreviewCode:_,Modal:w},setup(){const o=M({visible:!1,jsonData:{}}),e=a=>{a.schemas&&b(a.schemas),o.visible=!0,o.jsonData=a},t=h(()=>g+JSON.stringify(C(o.jsonData),null,"	")+j);return i(n({},J(o)),{editorVueJson:t,showModal:e})}});function N(o,e,t,a,P,B){const l=m("PreviewCode"),d=m("Modal");return V(),$(d,{title:"代码",footer:null,open:o.visible,onCancel:e[0]||(e[0]=E=>o.visible=!1),wrapClassName:"v-code-modal",style:{top:"20px"},width:"850px",destroyOnClose:!0},{default:x(()=>[y(l,{editorJson:o.editorVueJson,fileFormat:"vue"},null,8,["editorJson"])]),_:1},8,["open"])}const H=A(k,[["render",N]]);export{H as default};
