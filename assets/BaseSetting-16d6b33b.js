var d=(o,r,e)=>new Promise((m,i)=>{var l=t=>{try{s(e.next(t))}catch(u){i(u)}},a=t=>{try{s(e.throw(t))}catch(u){i(u)}},s=t=>t.done?m(t.value):Promise.resolve(t.value).then(l,a);s((e=e.apply(o,r)).next())});import{B as v}from"./BasicForm-8ff45fc7.js";import"./componentMap-9be5d326.js";import{u as h}from"./useForm-e6560703.js";import"./RadioButtonGroup-f37554dc.js";import{C as g,l as B,b as A,_ as F}from"./index.js";import"./uuid-a2a47690.js";import{a as I}from"./index-a6ea8605.js";import{h as S}from"./header-55b09394.js";import{a as b}from"./account-728ff1b2.js";import{b as w}from"./data-15304551.js";import{u as y}from"./upload-6ed80259.js";import{B as E,R,K as $}from"./antd-4273b3e7.js";import{d as k,o as U,c as V,a7 as n,Z as x,a8 as M,a9 as c,l as p,$ as _,E as N,a2 as T,a3 as G}from"./vue-ea98dac5.js";import"./FormItem.vue_vue_type_script_lang-3c9b82db.js";import"./index-04dbccd5.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-dc719137.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";const K=k({components:{BasicForm:v,CollapseContainer:g,Button:E,ARow:R,ACol:$,CropperAvatar:I},setup(){const{createMessage:o}=A(),r=B(),[e,{setFieldsValue:m}]=h({labelWidth:120,schemas:w,showActionButtonGroup:!1});U(()=>d(this,null,function*(){const a=yield b();m(a)}));const i=V(()=>{const{avatar:a}=r.getUserInfo;return a||S});function l({src:a,data:s}){const t=r.getUserInfo;t.avatar=a,r.setUserInfo(t)}return{avatar:i,register:e,uploadApi:y,updateAvatar:l,handleSubmit:()=>{o.success("更新成功！")}}}});const P=o=>(T("data-v-85758967"),o=o(),G(),o),W={class:"change-avatar"},Z=P(()=>_("div",{class:"mb-2"},"头像",-1));function j(o,r,e,m,i,l){const a=n("BasicForm"),s=n("a-col"),t=n("CropperAvatar"),u=n("a-row"),f=n("Button"),C=n("CollapseContainer");return x(),M(C,{title:"基本设置",canExpan:!1},{default:c(()=>[p(u,{gutter:24},{default:c(()=>[p(s,{span:14},{default:c(()=>[p(a,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(s,{span:10},{default:c(()=>[_("div",W,[Z,p(t,{uploadApi:o.uploadApi,value:o.avatar,btnText:"更换头像",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),p(f,{type:"primary",onClick:o.handleSubmit},{default:c(()=>[N(" 更新基本信息 ")]),_:1},8,["onClick"])]),_:1})}const fo=F(K,[["render",j],["__scopeId","data-v-85758967"]]);export{fo as default};
