import{B as m}from"./BasicTable-fe89efd8.js";import"./componentMap-9be5d326.js";import"./TableImg.vue_vue_type_style_index_0_lang-7740dbd3.js";import{u as c}from"./useTable-64dd7831.js";import{getBasicColumns as u,getTreeTableData as d}from"./tableData-251cea41.js";import{d as _,a7 as s,Z as f,_ as b,l as o,a9 as t,E as l}from"./vue-ea98dac5.js";import{_ as T}from"./index.js";import"./useFormItem-dc719137.js";import"./antd-4273b3e7.js";import"./RadioButtonGroup-f37554dc.js";import"./uuid-a2a47690.js";import"./index-04dbccd5.js";import"./useWindowSizeFn-997fa1d0.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";import"./BasicForm-8ff45fc7.js";import"./FormItem.vue_vue_type_script_lang-3c9b82db.js";import"./useForm-e6560703.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";const C=_({components:{BasicTable:m},setup(){const[e,{expandAll:r,collapseAll:i}]=c({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(a){return a.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:u(),dataSource:d(),rowKey:"id"});return{register:e,expandAll:r,collapseAll:i}}}),g={class:"p-4"};function k(e,r,i,a,B,x){const p=s("a-button"),n=s("BasicTable");return f(),b("div",g,[o(n,{onRegister:e.register},{toolbar:t(()=>[o(p,{type:"primary",onClick:e.expandAll},{default:t(()=>[l("展开全部")]),_:1},8,["onClick"]),o(p,{type:"primary",onClick:e.collapseAll},{default:t(()=>[l("折叠全部")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}const O=T(C,[["render",k]]);export{O as default};
