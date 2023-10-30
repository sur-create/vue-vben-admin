import{B as c}from"./componentMap-9be5d326.js";import{b as l,_ as d}from"./index.js";import{B as f}from"./BasicForm-8ff45fc7.js";import{u as g}from"./useForm-e6560703.js";import"./RadioButtonGroup-f37554dc.js";import"./uuid-a2a47690.js";import{P as _}from"./index-b777c0c9.js";import{u as n}from"./upload-6ed80259.js";import{d as B,a7 as e,Z as C,a8 as h,a9 as A,l as a}from"./vue-ea98dac5.js";import{X as p}from"./antd-4273b3e7.js";import"./useFormItem-dc719137.js";import"./index-04dbccd5.js";import"./useWindowSizeFn-997fa1d0.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";import"./FormItem.vue_vue_type_script_lang-3c9b82db.js";import"./useContentViewHeight-b8e9ee08.js";import"./onMountedOrActivated-3eb95ecd.js";const F=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:n}}],P=B({components:{BasicUpload:c,BasicForm:f,PageWrapper:_,[p.name]:p},setup(){const{createMessage:o}=l(),[r]=g({labelWidth:120,schemas:F,actionColOptions:{span:16}});return{handleChange:t=>{o.info(`已上传文件${JSON.stringify(t)}`)},uploadApi:n,register:r}}});function $(o,r,t,b,x,U){const s=e("a-alert"),i=e("BasicUpload"),m=e("BasicForm"),u=e("PageWrapper");return C(),h(u,{title:"上传组件示例"},{default:A(()=>[a(s,{message:"基础示例"}),a(i,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),a(s,{message:"嵌入表单,加入表单校验"}),a(m,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}const K=d(P,[["render",$]]);export{K as default};
