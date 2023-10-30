import{B as d}from"./BasicTable-fe89efd8.js";import{T as f}from"./componentMap-9be5d326.js";import"./TableImg.vue_vue_type_style_index_0_lang-7740dbd3.js";import{u as B}from"./useTable-64dd7831.js";import{P as C}from"./index-b777c0c9.js";import{getBasicColumns as F}from"./tableData-251cea41.js";import{d as b}from"./table-9286518d.js";import{d as g,a7 as t,Z as u,a8 as s,a9 as n,l as E,$ as _,a0 as T,ab as w}from"./vue-ea98dac5.js";import{_ as A}from"./index.js";import"./useFormItem-dc719137.js";import"./antd-4273b3e7.js";import"./RadioButtonGroup-f37554dc.js";import"./uuid-a2a47690.js";import"./index-04dbccd5.js";import"./useWindowSizeFn-997fa1d0.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";import"./BasicForm-8ff45fc7.js";import"./FormItem.vue_vue_type_script_lang-3c9b82db.js";import"./useForm-e6560703.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-b8e9ee08.js";import"./select-93eac05e.js";const h=g({components:{BasicTable:d,TableAction:f,PageWrapper:C},setup(){const[o]=B({api:b,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:F(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function i(r){}function a(r){}return{registerTable:o,handleDelete:i,handleOpen:a}}});function k(o,i,a,r,x,y){const l=t("TableAction"),m=t("BasicTable"),c=t("PageWrapper");return u(),s(c,{title:"可展开表格",content:"TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:n(()=>[E(m,{onRegister:o.registerTable},{expandedRowRender:n(({record:e})=>[_("span",null,"No: "+T(e.no),1)]),bodyCell:n(({column:e,record:p})=>[e.key==="action"?(u(),s(l,{key:0,stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,p)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:o.handleOpen.bind(null,p)}}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])]),_:1})}const no=A(h,[["render",k]]);export{no as default};