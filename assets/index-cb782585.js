var k=(h,l,o)=>new Promise((t,m)=>{var f=r=>{try{a(o.next(r))}catch(i){m(i)}},d=r=>{try{a(o.throw(r))}catch(i){m(i)}},a=r=>r.done?t(r.value):Promise.resolve(r.value).then(f,d);a((o=o.apply(h,l)).next())});import{d as v,f as E,w as T,x as D,a7 as A,Z as u,_,F as R,aa as B,n as V,z as I,l as s,u as e,a9 as n,E as y,a0 as b,a8 as S,ab as M}from"./vue-ea98dac5.js";import{_ as N}from"./DetailModal.vue_vue_type_script_setup_true_lang-be66a1ec.js";import{B as j}from"./BasicTable-fe89efd8.js";import{T as F}from"./componentMap-9be5d326.js";import"./TableImg.vue_vue_type_style_index_0_lang-7740dbd3.js";import{u as Z}from"./useTable-64dd7831.js";import{b as $}from"./index-04dbccd5.js";import{d as z,k as H,aZ as q}from"./index.js";import{getColumns as G}from"./data-c3f7e3f4.js";import{e as J}from"./antd-4273b3e7.js";import"./index-505401e2.js";import"./useDescription-84a474fb.js";import"./useFormItem-dc719137.js";import"./RadioButtonGroup-f37554dc.js";import"./uuid-a2a47690.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";import"./BasicForm-8ff45fc7.js";import"./FormItem.vue_vue_type_script_lang-3c9b82db.js";import"./useForm-e6560703.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";const K=()=>z.get({url:"/error"}),O={class:"p-4"},P=["src"],Lr=v({__name:"index",setup(h){const l=E(),o=E([]),{t}=H(),m=q(),[f,{setTableData:d}]=Z({title:t("sys.errorLog.tableTitle"),columns:G(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[a,{openModal:r}]=$();T(()=>m.getErrorLogInfoList,c=>{D(()=>{d(J(c))})},{immediate:!0});function i(c){l.value=c,r(!0)}function w(){throw new Error("fire vue error!")}function C(){o.value.push(`${new Date().getTime()}.png`)}function L(){return k(this,null,function*(){yield K()})}return(c,Q)=>{const g=A("a-button");return u(),_("div",O,[(u(!0),_(R,null,B(o.value,p=>V((u(),_("img",{key:p,src:p,alt:""},null,8,P)),[[I,!1]])),128)),s(N,{info:l.value,onRegister:e(a)},null,8,["info","onRegister"]),s(e(j),{onRegister:e(f),class:"error-handle-table"},{toolbar:n(()=>[s(g,{onClick:w,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireVueError")),1)]),_:1}),s(g,{onClick:C,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireResourceError")),1)]),_:1}),s(g,{onClick:L,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:n(({column:p,record:x})=>[p.key==="action"?(u(),S(e(F),{key:0,actions:[{label:e(t)("sys.errorLog.tableActionDesc"),onClick:i.bind(null,x)}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"])])}}});export{Lr as default};