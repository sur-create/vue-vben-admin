import{f as p,_ as m}from"./index.js";import{b as c}from"./index-a48ef9cf.js";import{d,a7 as f,Z as n,_ as r,F as u,aa as _,a1 as i,af as C,l as k}from"./vue-ea98dac5.js";import{aE as h}from"./antd-4273b3e7.js";import"./index-ac691826.js";import"./index-8d734a88.js";import"./index-ea97099c.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./lock-e1183472.js";const v=d({name:"ThemeColorPicker",components:{CheckOutlined:h},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:o}=p("setting-theme-picker");function s(a){e.event&&c(e.event,a)}return{prefixCls:o,handleClick:s}}});const y=["onClick"];function $(e,o,s,a,g,b){const l=f("CheckOutlined");return n(),r("div",{class:i(e.prefixCls)},[(n(!0),r(u,null,_(e.colorList||[],t=>(n(),r("span",{key:t,onClick:L=>e.handleClick(t),class:i([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:C({background:t})},[k(l)],14,y))),128))],2)}const A=m(v,[["render",$]]);export{A as default};