import{B as m}from"./BasicForm-8ff45fc7.js";import"./componentMap-9be5d326.js";import"./RadioButtonGroup-f37554dc.js";import{C as l,b as u,_ as c}from"./index.js";import"./uuid-a2a47690.js";import{M as d}from"./index-a3f6c49a.js";import{P as f}from"./index-b777c0c9.js";import{d as C,m as _,a7 as t,Z as h,a8 as b,a9 as a,l as s}from"./vue-ea98dac5.js";import"./FormItem.vue_vue_type_script_lang-3c9b82db.js";import"./antd-4273b3e7.js";import"./index-04dbccd5.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-dc719137.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";import"./onMountedOrActivated-3eb95ecd.js";import"./useContentViewHeight-b8e9ee08.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:o})=>_(d,{value:e[o],onChange:r=>{e[o]=r}})}],k=C({components:{BasicForm:m,CollapseContainer:l,PageWrapper:f},setup(){const{createMessage:e}=u();return{schemas:g,handleSubmit:o=>{e.success("click search,values:"+JSON.stringify(o))}}}});function B(e,o,r,w,F,M){const n=t("BasicForm"),p=t("CollapseContainer"),i=t("PageWrapper");return h(),b(i,{title:"MarkDown组件嵌入Form示例"},{default:a(()=>[s(p,{title:"MarkDown表单"},{default:a(()=>[s(n,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}const K=c(k,[["render",B]]);export{K as default};
