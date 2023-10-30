var O=Object.defineProperty,I=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var P=(u,e,o)=>e in u?O(u,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[e]=o,A=(u,e)=>{for(var o in e||(e={}))V.call(e,o)&&P(u,o,e[o]);if(v)for(var o of v(e))W.call(e,o)&&P(u,o,e[o]);return u},_=(u,e)=>I(u,N(e));var h=(u,e,o)=>new Promise((s,p)=>{var F=r=>{try{a(o.next(r))}catch(m){p(m)}},n=r=>{try{a(o.throw(r))}catch(m){p(m)}},a=r=>r.done?s(r.value):Promise.resolve(r.value).then(F,n);a((o=o.apply(u,e)).next())});import{b as C}from"./index-04dbccd5.js";import T from"./Modal1-24d88139.js";import R from"./Modal2-a9ede944.js";import $ from"./Modal3-3c4f64e7.js";import S from"./Modal4-3592890d.js";import{P as q}from"./index-b777c0c9.js";import{d as b,f as B,Z as D,a8 as w,a9 as l,$ as K,l as t,u as k,r as z,I as L,m as U,s as G,x as H,a7 as d,E as i,ah as Q,ab as X}from"./vue-ea98dac5.js";import{B as Z}from"./BasicForm-8ff45fc7.js";import"./componentMap-9be5d326.js";import{u as j}from"./useForm-e6560703.js";import"./RadioButtonGroup-f37554dc.js";import{_ as J}from"./index.js";import"./uuid-a2a47690.js";import{M as Y,X as x,Q as ee,f as ue}from"./antd-4273b3e7.js";import"./useWindowSizeFn-997fa1d0.js";import"./useContentViewHeight-b8e9ee08.js";import"./onMountedOrActivated-3eb95ecd.js";import"./FormItem.vue_vue_type_script_lang-3c9b82db.js";import"./useFormItem-dc719137.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";const oe={InputTextArea:{colProps:{span:23},componentProps:{placeholder:"请输入内容",autoSize:{minRows:2,maxRows:6},maxlength:255,showCount:!0}},InputNumber:{colProps:{span:20,offset:2},componentProps:{placeholder:"请输入数字",min:0}},Input:{colProps:{span:20,offset:2},componentProps:{placeholder:"请输入内容",min:0}}};function te({label:u="备注信息",required:e=!0,inputType:o="InputTextArea",defaultValue:s=""}){return[A({field:"txt",component:o,label:u,defaultValue:s,required:!!e},oe[o])]}const ae={class:"pt-5 pr-3px"},ne=b({__name:"dialog",props:{title:{},addFormSchemas:{},onOK:{},width:{},labelWidth:{},layout:{}},setup(u){const e=u,o=B(!0),[s,{validate:p}]=j({schemas:e.addFormSchemas,showActionButtonGroup:!1,labelWidth:e.labelWidth||80,layout:e.layout||"horizontal"});function F(){return h(this,null,function*(){const n=yield p();e.onOK&&(yield e.onOK(n.txt)),o.value=!1})}return(n,a)=>(D(),w(k(Y),{open:o.value,"onUpdate:open":a[0]||(a[0]=r=>o.value=r),title:n.title,onOk:F,destroyOnClose:!0,width:n.width||"500px",okText:"确定",cancelText:"取消"},{default:l(()=>[K("div",ae,[t(k(Z),{onRegister:k(s)},null,8,["onRegister"])])]),_:1},8,["open","title","width"]))}});function re(u){let e=null;const o=z(_(A({},u),{addFormSchemas:te({label:u.label,required:u.required,inputType:u.inputType,defaultValue:u.defaultValue})})),s=b({render(){return U(ne,A({},o))}});e=t(s),L(e,document.createElement("div"));function p(){e!=null&&e.el&&e.el.parentNode&&e.el.parentNode.removeChild(e.el)}return{vm:e,close:p,get $el(){return e==null?void 0:e.el}}}const le=b({components:{Alert:x,Modal1:T,Modal2:R,Modal3:$,Modal4:S,PageWrapper:q,ASpace:ee},setup(){const u=G(null),[e,{openModal:o}]=C(),[s,{openModal:p}]=C(),[F,{openModal:n}]=C(),[a,{openModal:r}]=C(),m=B(!1),f=B(null);function g(){r(!0,{data:"content",info:"Info"})}function E(){o(!0)}function M(y){switch(y){case 1:u.value=T;break;case 2:u.value=R;break;case 3:u.value=$;break;default:u.value=S;break}H(()=>{f.value={data:Math.random(),info:"Info222"},m.value=!0})}function c(){re({title:"请输入邮箱",required:!0,label:"邮箱",defaultValue:"默认邮箱",onOK:y=>h(this,null,function*(){ue.success("填写的邮箱地址为"+y)}),inputType:"Input"})}return{register1:e,openModal1:o,register2:s,openModal2:p,register3:F,openModal3:n,register4:a,openModal4:r,modalOpen:m,userData:f,openTargetModal:M,send:g,currentModal:u,openModalLoading:E,handleCreatePrompt:c}}});function se(u,e,o,s,p,F){const n=d("Alert"),a=d("a-button"),r=d("a-space"),m=d("Modal1"),f=d("Modal2"),g=d("Modal3"),E=d("Modal4"),M=d("PageWrapper");return D(),w(M,{title:"modal组件使用示例"},{default:l(()=>[t(n,{message:`使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable
    参数进行控制是否可以拖动/全屏，并演示了在Modal内动态加载内容并自动调整高度`,"show-icon":""}),t(a,{type:"primary",class:"my-4",onClick:u.openModalLoading},{default:l(()=>[i(" 打开弹窗,加载动态数据并自动调整高度(默认可以拖动/全屏) ")]),_:1},8,["onClick"]),t(n,{message:"内外同时同时显示隐藏","show-icon":""}),t(a,{type:"primary",class:"my-4",onClick:u.openModal2},{default:l(()=>[i(" 打开弹窗 ")]),_:1},8,["onClick"]),t(n,{message:"自适应高度","show-icon":""}),t(a,{type:"primary",class:"my-4",onClick:u.openModal3},{default:l(()=>[i(" 打开弹窗 ")]),_:1},8,["onClick"]),t(n,{message:"内外数据交互","show-icon":""}),t(a,{type:"primary",class:"my-4",onClick:u.send},{default:l(()=>[i(" 打开弹窗并传递数据 ")]),_:1},8,["onClick"]),t(n,{message:"使用动态组件的方式在页面内使用多个弹窗","show-icon":""}),t(r,null,{default:l(()=>[t(a,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=c=>u.openTargetModal(1))},{default:l(()=>[i(" 打开弹窗1 ")]),_:1}),t(a,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=c=>u.openTargetModal(2))},{default:l(()=>[i(" 打开弹窗2 ")]),_:1}),t(a,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=c=>u.openTargetModal(3))},{default:l(()=>[i(" 打开弹窗3 ")]),_:1}),t(a,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=c=>u.openTargetModal(4))},{default:l(()=>[i(" 打开弹窗4 ")]),_:1})]),_:1}),t(n,{message:"使用函数方式创建Prompt，适合较为简单的表单内容，如果需要弹出较为复杂的内容，请使用 Modal.","show-icon":""}),t(a,{type:"primary",class:"my-4",onClick:u.handleCreatePrompt},{default:l(()=>[i(" Prompt ")]),_:1},8,["onClick"]),u.currentModal?(D(),w(Q(u.currentModal),{key:0,open:u.modalOpen,"onUpdate:open":e[4]||(e[4]=c=>u.modalOpen=c),userData:u.userData},null,40,["open","userData"])):X("",!0),t(m,{onRegister:u.register1,minHeight:100},null,8,["onRegister"]),t(f,{onRegister:u.register2},null,8,["onRegister"]),t(g,{onRegister:u.register3},null,8,["onRegister"]),t(E,{onRegister:u.register4},null,8,["onRegister"])]),_:1})}const Oe=J(le,[["render",se]]);export{Oe as default};
