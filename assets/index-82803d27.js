import{P as i}from"./index-b777c0c9.js";import{J as r,R as _,K as m}from"./antd-4273b3e7.js";import{d as p,a7 as t,Z as f,a8 as g,a9 as l,l as s,$ as u,E as e}from"./vue-ea98dac5.js";import{_ as y}from"./index.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";const h=p({components:{PageWrapper:i,ACard:r,ARow:_,ACol:m}}),E={class:"my-2"},k=u("h3",null,"success",-1),F={class:"py-2"},C={class:"my-2"},b=u("h3",null,"warning",-1),B={class:"my-2"},D=u("h3",null,"error",-1),A={class:"my-2"},w=u("h3",null,"ghost",-1),v={class:"my-2"},x=u("h3",null,"primary",-1),$={class:"my-2"},P=u("h3",null,"default",-1),N={class:"my-2"},R=u("h3",null,"dashed",-1),V={class:"my-2"},W=u("h3",null,"ghost 常规幽灵按钮通常用于有色背景下",-1),I={class:"bg-gray-400 py-2"};function T(H,J,K,Z,j,q){const a=t("a-button"),o=t("a-card"),d=t("a-col"),n=t("a-row"),c=t("PageWrapper");return f(),g(c,{contentFullHeight:"",title:"基础组件",content:" 基础组件依赖于ant-design-vue,组件库已有的基础组件,项目中不会再次进行demo展示（二次封装组件除外）"},{default:l(()=>[s(n,{gutter:[20,20]},{default:l(()=>[s(d,{xl:10,lg:24},{default:l(()=>[s(o,{title:"BasicButton Color"},{default:l(()=>[u("div",E,[k,u("div",F,[s(a,{color:"success"},{default:l(()=>[e(" 成功 ")]),_:1}),s(a,{color:"success",class:"ml-2",disabled:""},{default:l(()=>[e(" 禁用 ")]),_:1}),s(a,{color:"success",class:"ml-2",loading:""},{default:l(()=>[e(" loading ")]),_:1}),s(a,{color:"success",type:"link",class:"ml-2"},{default:l(()=>[e(" link ")]),_:1}),s(a,{color:"success",type:"link",class:"ml-2",loading:""},{default:l(()=>[e(" loading link ")]),_:1}),s(a,{color:"success",type:"link",class:"ml-2",disabled:""},{default:l(()=>[e(" disabled link ")]),_:1})])]),u("div",C,[b,s(a,{color:"warning"},{default:l(()=>[e(" 警告 ")]),_:1}),s(a,{color:"warning",class:"ml-2",disabled:""},{default:l(()=>[e(" 禁用 ")]),_:1}),s(a,{color:"warning",class:"ml-2",loading:""},{default:l(()=>[e(" loading ")]),_:1}),s(a,{color:"warning",type:"link",class:"ml-2"},{default:l(()=>[e(" link ")]),_:1}),s(a,{color:"warning",type:"link",class:"ml-2",loading:""},{default:l(()=>[e(" loading link ")]),_:1}),s(a,{color:"warning",type:"link",class:"ml-2",disabled:""},{default:l(()=>[e(" disabled link ")]),_:1})]),u("div",B,[D,s(a,{color:"error"},{default:l(()=>[e(" 错误 ")]),_:1}),s(a,{color:"error",class:"ml-2",disabled:""},{default:l(()=>[e(" 禁用 ")]),_:1}),s(a,{color:"error",class:"ml-2",loading:""},{default:l(()=>[e(" loading ")]),_:1}),s(a,{color:"error",type:"link",class:"ml-2"},{default:l(()=>[e(" link ")]),_:1}),s(a,{color:"error",type:"link",class:"ml-2",loading:""},{default:l(()=>[e(" loading link ")]),_:1}),s(a,{color:"error",type:"link",class:"ml-2",disabled:""},{default:l(()=>[e(" disabled link ")]),_:1})]),u("div",A,[w,s(a,{ghost:"",color:"success",class:"ml-2"},{default:l(()=>[e(" 幽灵成功 ")]),_:1}),s(a,{ghost:"",color:"warning",class:"ml-2"},{default:l(()=>[e(" 幽灵警告 ")]),_:1}),s(a,{ghost:"",color:"error",class:"ml-2"},{default:l(()=>[e(" 幽灵错误 ")]),_:1}),s(a,{ghost:"",type:"dashed",color:"warning",class:"ml-2"},{default:l(()=>[e(" 幽灵警告dashed ")]),_:1}),s(a,{ghost:"",danger:"",class:"ml-2"},{default:l(()=>[e(" 幽灵危险 ")]),_:1})])]),_:1})]),_:1}),s(d,{xl:14,lg:24},{default:l(()=>[s(o,{title:"BasicButton Types"},{default:l(()=>[u("div",v,[x,s(a,{type:"primary",preIcon:"mdi:page-next-outline"},{default:l(()=>[e(" 主按钮 ")]),_:1}),s(a,{type:"primary",class:"ml-2",disabled:""},{default:l(()=>[e(" 禁用 ")]),_:1}),s(a,{type:"primary",class:"ml-2",danger:"",preIcon:"mdi:page-next-outline"},{default:l(()=>[e(" 危险 ")]),_:1}),s(a,{type:"primary",class:"ml-2",loading:""},{default:l(()=>[e(" loading ")]),_:1}),s(a,{type:"link",class:"ml-2"},{default:l(()=>[e(" link ")]),_:1}),s(a,{type:"link",class:"ml-2",loading:""},{default:l(()=>[e(" loading link ")]),_:1}),s(a,{type:"link",class:"ml-2",disabled:""},{default:l(()=>[e(" disabled link ")]),_:1})]),u("div",$,[P,s(a,{type:"default"},{default:l(()=>[e(" 默认 ")]),_:1}),s(a,{type:"default",class:"ml-2",disabled:""},{default:l(()=>[e(" 禁用 ")]),_:1}),s(a,{type:"default",class:"ml-2",danger:""},{default:l(()=>[e(" 危险 ")]),_:1}),s(a,{type:"default",class:"ml-2",loading:""},{default:l(()=>[e(" loading ")]),_:1}),s(a,{type:"link",class:"ml-2"},{default:l(()=>[e(" link ")]),_:1}),s(a,{type:"link",class:"ml-2",loading:""},{default:l(()=>[e(" loading link ")]),_:1}),s(a,{type:"link",class:"ml-2",disabled:""},{default:l(()=>[e(" disabled link ")]),_:1})]),u("div",N,[R,s(a,{type:"dashed"},{default:l(()=>[e(" dashed ")]),_:1}),s(a,{type:"dashed",class:"ml-2",disabled:""},{default:l(()=>[e(" 禁用 ")]),_:1}),s(a,{type:"dashed",class:"ml-2",danger:""},{default:l(()=>[e(" 危险 ")]),_:1}),s(a,{type:"dashed",class:"ml-2",loading:""},{default:l(()=>[e(" loading ")]),_:1})]),u("div",V,[W,u("div",I,[s(a,{ghost:"",type:"primary",class:"ml-2"},{default:l(()=>[e(" 幽灵主要 ")]),_:1}),s(a,{ghost:"",type:"default",class:"ml-2"},{default:l(()=>[e(" 幽灵默认 ")]),_:1}),s(a,{ghost:"",type:"dashed",class:"ml-2"},{default:l(()=>[e(" 幽灵dashed ")]),_:1}),s(a,{ghost:"",type:"primary",class:"ml-2",disabled:""},{default:l(()=>[e(" 禁用 ")]),_:1}),s(a,{ghost:"",type:"primary",class:"ml-2",loading:""},{default:l(()=>[e(" loading ")]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})}const U=y(h,[["render",T]]);export{U as default};
