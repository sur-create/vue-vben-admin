import{B as c}from"./BasicTable-fe89efd8.js";import"./componentMap-9be5d326.js";import"./TableImg.vue_vue_type_style_index_0_lang-7740dbd3.js";import{u}from"./useTable-64dd7831.js";import{getBasicColumns as d}from"./tableData-251cea41.js";import{P as f}from"./index-b777c0c9.js";import{d as _}from"./table-9286518d.js";import{d as g,a7 as r,Z as C,a8 as B,a9 as e,l as a,E as m}from"./vue-ea98dac5.js";import{_ as b}from"./index.js";import"./useFormItem-dc719137.js";import"./antd-4273b3e7.js";import"./RadioButtonGroup-f37554dc.js";import"./uuid-a2a47690.js";import"./index-04dbccd5.js";import"./useWindowSizeFn-997fa1d0.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";import"./BasicForm-8ff45fc7.js";import"./FormItem.vue_vue_type_script_lang-3c9b82db.js";import"./useForm-e6560703.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";import"./useContentViewHeight-b8e9ee08.js";const h=g({components:{BasicTable:c,PageWrapper:f},setup(){const[o,{reload:t}]=u({title:"远程加载示例",api:_,columns:d(),pagination:{pageSize:10}});function i(){t()}function n(){t({page:1})}return{registerTable:o,handleReloadCurrent:i,handleReload:n}}});function T(o,t,i,n,k,R){const p=r("a-button"),s=r("BasicTable"),l=r("PageWrapper");return C(),B(l,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:e(()=>[a(s,{onRegister:o.registerTable},{toolbar:e(()=>[a(p,{type:"primary",onClick:o.handleReloadCurrent},{default:e(()=>[m(" 刷新当前页 ")]),_:1},8,["onClick"]),a(p,{type:"primary",onClick:o.handleReload},{default:e(()=>[m(" 刷新并返回第一页 ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}const X=b(h,[["render",T]]);export{X as default};
