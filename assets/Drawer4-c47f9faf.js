import{B as p,a as m}from"./index-ac691826.js";import{B as c}from"./BasicForm-8ff45fc7.js";import"./componentMap-9be5d326.js";import{u as l}from"./useForm-e6560703.js";import"./RadioButtonGroup-f37554dc.js";import{_ as f}from"./index.js";import"./uuid-a2a47690.js";import{d,a7 as s,Z as u,a8 as B,a9 as _,$ as g,l as w,ac as F}from"./vue-ea98dac5.js";import"./antd-4273b3e7.js";import"./FormItem.vue_vue_type_script_lang-3c9b82db.js";import"./index-04dbccd5.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-dc719137.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";const a=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}],h=d({components:{BasicDrawer:p,BasicForm:c},setup(){const[o,{setFieldsValue:r}]=l({labelWidth:120,schemas:a,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=m(e=>{r({field2:e.data,field1:e.info})});return{register:t,schemas:a,registerForm:o}}});function D(o,r,t,e,$,C){const i=s("BasicForm"),n=s("BasicDrawer");return u(),B(n,F(o.$attrs,{onRegister:o.register,title:"Drawer Title",width:"50%"}),{default:_(()=>[g("div",null,[w(i,{onRegister:o.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}const E=f(h,[["render",D]]);export{E as default};
