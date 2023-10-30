import{B as R}from"./BasicForm-8ff45fc7.js";import{A as M}from"./componentMap-9be5d326.js";import"./RadioButtonGroup-f37554dc.js";import{C as T,u as _,b as q,_ as w}from"./index.js";import"./uuid-a2a47690.js";import{P as $}from"./index-b777c0c9.js";import{o as f}from"./select-93eac05e.js";import{t as S}from"./tree-164e6087.js";import{a as H}from"./cascader-c1ebc95c.js";import{u as O}from"./upload-6ed80259.js";import{N as U,e as A}from"./antd-4273b3e7.js";import{d as V,f as d,c as h,u,a7 as c,Z as j,a8 as L,a9 as s,l as r}from"./vue-ea98dac5.js";import"./FormItem.vue_vue_type_script_lang-3c9b82db.js";import"./index-04dbccd5.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-dc719137.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";import"./useContentViewHeight-b8e9ee08.js";import"./onMountedOrActivated-3eb95ecd.js";const F=d([]),k=d([]),b=d([]);for(let e=1;e<10;e++)b.value.push({label:"选项"+e,value:`${e}`});const Y=h(()=>A(u(b)).map(e=>(e.disabled=u(k).indexOf(e.value)!==-1,e))),G=h(()=>A(u(b)).map(e=>(e.disabled=u(F).indexOf(e.value)!==-1,e))),v=[{id:"guangdong",label:"广东省",value:"1",key:"1"},{id:"jiangsu",label:"江苏省",value:"2",key:"2"}],C={guangdong:[{label:"珠海市",value:"1",key:"1"},{label:"深圳市",value:"2",key:"2"},{label:"广州市",value:"3",key:"3"}],jiangsu:[{label:"南京市",value:"1",key:"1"},{label:"无锡市",value:"2",key:"2"},{label:"苏州市",value:"3",key:"3"}]},I=[{field:"divider-basic",component:"Divider",label:"基础字段",colProps:{span:24}},{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>({placeholder:"自定义placeholder",onChange:l=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"fieldsc",component:"Upload",label:"上传",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:O}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}],onChange:(e,o)=>{}}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"divider-api-select",component:"Divider",label:"远程下拉演示",colProps:{span:24}},{field:"field30",component:"ApiSelect",label:"懒加载远程下拉",required:!0,componentProps:{api:f,params:{id:1},resultField:"list",labelField:"name",valueField:"id",immediate:!0,onChange:(e,o)=>{},onOptionsChange:e=>{}},colProps:{span:8},defaultValue:"0"},{field:"field8",component:"ApiCascader",label:"联动ApiCascader",required:!0,colProps:{span:8},componentProps:{api:H,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:e=>!(e.levelType<3),onChange:(e,...o)=>{}}},{field:"field31",component:"Input",label:"下拉本地搜索",helpMessage:["ApiSelect组件","远程数据源本地搜索","只发起一次请求获取所有选项"],required:!0,slot:"localSearch",colProps:{span:8},defaultValue:"0"},{field:"field32",component:"Input",label:"下拉远程搜索",helpMessage:["ApiSelect组件","将关键词发送到接口进行远程搜索"],required:!0,slot:"remoteSearch",colProps:{span:8},defaultValue:"0"},{field:"field33",component:"ApiTreeSelect",label:"远程下拉树",helpMessage:["ApiTreeSelect组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:S,resultField:"list",onChange:(e,o)=>{}},colProps:{span:8}},{field:"field33",component:"ApiTreeSelect",label:"远程懒加载下拉树",helpMessage:["ApiTreeSelect组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:()=>new Promise(e=>{e([{title:"Parent Node",value:"0-0"}])}),async:!0,onChange:(e,o)=>{},onLoadData:({treeData:e,resolve:o,treeNode:l})=>{setTimeout(()=>{const p=[{title:`Child Node ${l.eventKey}-0`,value:`${l.eventKey}-0`},{title:`Child Node ${l.eventKey}-1`,value:`${l.eventKey}-1`}];p.forEach(i=>{i.isLeaf=!1,i.children=[]}),l.dataRef.children=p,e.value=[...e.value],o()},300)}},colProps:{span:8}},{field:"field34",component:"ApiRadioGroup",label:"远程Radio",helpMessage:["ApiRadioGroup组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:f,params:{count:2},resultField:"list",labelField:"name",valueField:"id"},defaultValue:"1",colProps:{span:8}},{field:"field35",component:"ApiRadioGroup",label:"远程Radio",helpMessage:["ApiRadioGroup组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:f,params:{count:2},resultField:"list",labelField:"name",valueField:"id",isBtn:!0,onChange:(e,o)=>{}},colProps:{span:8}},{field:"field36",component:"ApiTree",label:"远程Tree",helpMessage:["ApiTree组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:S,params:{count:2},afterFetch:e=>e,resultField:"list"},colProps:{span:8}},{field:"divider-linked",component:"Divider",label:"字段联动",colProps:{span:24}},{field:"province",component:"Select",label:"省份",colProps:{span:8},componentProps:({formModel:e,formActionType:o})=>({options:v,placeholder:"省份与城市联动",onChange:l=>{let p=l==1?C[v[0].id]:C[v[1].id];l===void 0&&(p=[]),e.city=void 0;const{updateSchema:i}=o;i({field:"city",componentProps:{options:p}})}})},{field:"city",component:"Select",label:"城市",colProps:{span:8},componentProps:{options:[],placeholder:"省份与城市联动"}},{field:"divider-selects",component:"Divider",label:"互斥多选",helpMessage:["两个Select共用数据源","但不可选择对方已选中的项目"],colProps:{span:24}},{field:"selectA",component:"Select",label:"互斥SelectA",slot:"selectA",defaultValue:[],colProps:{span:8}},{field:"selectB",component:"Select",label:"互斥SelectB",slot:"selectB",defaultValue:[],colProps:{span:8}},{field:"divider-deconstruct",component:"Divider",label:"字段解构",helpMessage:["如果组件的值是 array 或者 object","可以根据 ES6 的解构语法分别取值"],colProps:{span:24}},{field:"[startTime, endTime]",label:"时间范围",component:"TimeRangePicker",componentProps:{format:"HH:mm:ss",placeholder:["开始时间","结束时间"]}},{field:"[startDate, endDate]",label:"日期范围",component:"RangePicker",componentProps:{format:"YYYY-MM-DD",placeholder:["开始日期","结束日期"]}},{field:"[startDateTime, endDateTime]",label:"日期时间范围",component:"RangePicker",componentProps:{format:"YYYY-MM-DD HH:mm:ss",placeholder:["开始日期、时间","结束日期、时间"],showTime:{format:"HH:mm:ss"}}},{field:"divider-others",component:"Divider",label:"其它",colProps:{span:24}},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}},{field:"field21",component:"Slider",label:"字段21",componentProps:{min:0,max:100,range:!0,marks:{20:"20°C",60:"60°C"}},colProps:{span:8}},{field:"field22",component:"Rate",label:"字段22",defaultValue:3,colProps:{span:8},componentProps:{disabled:!1,allowHalf:!0}},{field:"field23",component:"ImageUpload",label:"字段23",colProps:{span:8},componentProps:{api:()=>Promise.resolve("https://via.placeholder.com/600/92c952")}}],K=V({components:{BasicForm:R,CollapseContainer:T,PageWrapper:$,ApiSelect:M,ASelect:U},setup(){const e=d(null),{createMessage:o}=q(),l=d(""),p=h(()=>({keyword:u(l)}));function i(m){l.value=m}return{schemas:I,optionsListApi:f,optionsA:Y,optionsB:G,valueSelectA:F,valueSelectB:k,onSearch:_(i,300),searchParams:p,handleReset:()=>{l.value=""},handleSubmit:m=>{o.success("click search,values:"+JSON.stringify(m))},check:e}}});function W(e,o,l,p,i,m){const P=c("a-select"),g=c("ApiSelect"),y=c("BasicForm"),B=c("CollapseContainer"),D=c("PageWrapper");return j(),L(D,{title:"表单基础示例",contentFullHeight:""},{default:s(()=>[r(B,{title:"基础示例"},{default:s(()=>[r(y,{autoFocusFirstItem:"",labelWidth:200,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit,onReset:e.handleReset},{selectA:s(({model:a,field:n})=>[r(P,{options:e.optionsA,mode:"multiple",value:a[n],"onUpdate:value":t=>a[n]=t,onChange:t=>e.valueSelectA=a[n],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),selectB:s(({model:a,field:n})=>[r(P,{options:e.optionsB,mode:"multiple",value:a[n],"onUpdate:value":t=>a[n]=t,onChange:t=>e.valueSelectB=a[n],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),localSearch:s(({model:a,field:n})=>[r(g,{api:e.optionsListApi,showSearch:"",value:a[n],"onUpdate:value":t=>a[n]=t,optionFilterProp:"label",resultField:"list",labelField:"name",valueField:"id"},null,8,["api","value","onUpdate:value"])]),remoteSearch:s(({model:a,field:n})=>[r(g,{api:e.optionsListApi,showSearch:"",value:a[n],"onUpdate:value":t=>a[n]=t,filterOption:!1,resultField:"list",labelField:"name",valueField:"id",params:e.searchParams,onSearch:e.onSearch},null,8,["api","value","onUpdate:value","params","onSearch"])]),_:1},8,["schemas","onSubmit","onReset"])]),_:1})]),_:1})}const he=w(K,[["render",W]]);export{he as default};