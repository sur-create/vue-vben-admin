var y=Object.defineProperty,M=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var h=(o,e,a)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,c=(o,e)=>{for(var a in e||(e={}))I.call(e,a)&&h(o,a,e[a]);if(_)for(var a of _(e))j.call(e,a)&&h(o,a,e[a]);return o},i=(o,e)=>M(o,E(e));import{u as J}from"./useFormDesignState-2b7717e9.js";import{f as U,g}from"./index-a57e3581.js";import{C as D,M as F}from"./index-c4d58489.js";import{b as S,_ as k}from"./index.js";import{aj as w,M as O}from"./antd-4273b3e7.js";import{d as B,r as N,G as $,a7 as r,Z as x,a8 as T,a9 as n,l,E as u,$ as C,a2 as V,a3 as A}from"./vue-ea98dac5.js";import"./useWindowSizeFn-997fa1d0.js";const K=B({name:"ImportJsonModal",components:{CodeEditor:D,Upload:w,Modal:O},setup(){const{createMessage:o}=S(),e=N({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "输入框",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=J(),p=()=>{e.visible=!1},m=()=>{e.visible=!0},d=()=>{try{const s=JSON.parse(e.json);s.schemas&&U(s.schemas,t=>{g(t)}),a.setFormConfig(i(c({},s),{activeKey:1,currentItem:{component:""}})),p(),o.success("导入成功")}catch(s){o.error("导入失败，数据格式不对")}};return i(c({handleImportJson:d,beforeUpload:s=>{const t=new FileReader;return t.readAsText(s),t.onload=function(){e.json=this.result,d()},!1},handleCancel:p,showModal:m},$(e)),{MODE:F})}});const L=o=>(V("data-v-5853a62f"),o=o(),A(),o),R=L(()=>C("p",{class:"hint-box"},"导入格式如下:",-1)),z={class:"v-json-box"};function G(o,e,a,p,m,d){const f=r("CodeEditor"),s=r("a-button"),t=r("Upload"),b=r("Modal");return x(),T(b,{title:"JSON数据",open:o.visible,onOk:o.handleImportJson,onCancel:o.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(s,{onClick:o.handleCancel},{default:n(()=>[u("取消")]),_:1},8,["onClick"]),l(t,{class:"upload-button",beforeUpload:o.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(s,{type:"primary"},{default:n(()=>[u("导入json文件")]),_:1})]),_:1},8,["beforeUpload"]),l(s,{type:"primary",onClick:o.handleImportJson},{default:n(()=>[u("确定")]),_:1},8,["onClick"])]),default:n(()=>[R,C("div",z,[l(f,{value:o.json,"onUpdate:value":e[0]||(e[0]=v=>o.json=v),ref:"myEditor",mode:o.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["open","onOk","onCancel"])}const oo=k(K,[["render",G],["__scopeId","data-v-5853a62f"]]);export{oo as default};
