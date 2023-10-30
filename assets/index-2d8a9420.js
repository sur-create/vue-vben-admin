var N=Object.defineProperty,M=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var C=(e,n,a)=>n in e?N(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,F=(e,n)=>{for(var a in n||(n={}))y.call(n,a)&&C(e,a,n[a]);if(B)for(var a of B(n))I.call(n,a)&&C(e,a,n[a]);return e},$=(e,n)=>M(e,A(n));import{P as S}from"./index-b777c0c9.js";import{p as u,k as Y,aD as k,aE as P,ad as R,Q as w,s as H,n as U,M as W,_ as E,w as j,C as V}from"./index.js";import{d as O,f as q,w as G,Z as b,_ as Q,a0 as Z,r as z,G as J,a7 as h,a8 as K,a9 as f,l,$ as v}from"./vue-ea98dac5.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";import"./antd-4273b3e7.js";const p=1e3,d=p*60,_=d*60,D=_*24,L=O({name:"Time",props:{value:u.oneOfType([u.number,u.instanceOf(Date),u.string]).isRequired,step:u.number.def(60),mode:u.oneOf(["date","datetime","relative"]).def("relative")},setup(e){const n=q(""),{t:a}=Y();k(m,e.step*p),G(()=>e.value,()=>{m()},{immediate:!0});function T(){const{value:t}=e;let s=0;if(H(t)){const i=t.toString().length>10?t:t*1e3;s=new Date(i).getTime()}else U(t)?s=new Date(t).getTime():W(t)&&(s=t.getTime());return s}function m(){const{mode:t,value:s}=e,i=T();t==="relative"?n.value=g(i):t==="datetime"?n.value=P(s):t==="date"&&(n.value=R(s))}function g(t){const s=new Date().getTime(),i=w(t).isBefore(s);let o=s-t;i||(o=-o);let r="",c=a(i?"component.time.before":"component.time.after");return o<p?r=a("component.time.just"):o<d?r=parseInt(o/p)+a("component.time.seconds")+c:o>=d&&o<_?r=Math.floor(o/d)+a("component.time.minutes")+c:o>=_&&o<D?r=Math.floor(o/_)+a("component.time.hours")+c:o>=D&&o<262386e4?r=Math.floor(o/D)+a("component.time.days")+c:o>=262386e4&&o<=3156786e4&&i?r=w(t).format("MM-DD-HH-mm"):r=w(t).format("YYYY"),r}return{date:n}}});function X(e,n,a,T,m,g){return b(),Q("span",null,Z(e.date),1)}const x=E(L,[["render",X]]),ee=j(x),te=O({components:{PageWrapper:S,Time:ee,CollapseContainer:V},setup(){const e=new Date().getTime(),n=z({time1:e-60*3*1e3,time2:e-86400*3*1e3});return $(F({},J(n)),{now:e})}}),ne=v("br",null,null,-1),ae=v("br",null,null,-1),oe=v("br",null,null,-1),se=v("br",null,null,-1);function le(e,n,a,T,m,g){const t=h("Time"),s=h("CollapseContainer"),i=h("PageWrapper");return b(),K(i,{title:"时间组件示例"},{default:f(()=>[l(s,{title:"基础示例"},{default:f(()=>[l(t,{value:e.time1},null,8,["value"]),ne,l(t,{value:e.time2},null,8,["value"])]),_:1}),l(s,{title:"定时更新",class:"my-4"},{default:f(()=>[l(t,{value:e.now,step:1},null,8,["value"]),ae,l(t,{value:e.now,step:5},null,8,["value"])]),_:1}),l(s,{title:"定时更新"},{default:f(()=>[l(t,{value:e.now,mode:"date"},null,8,["value"]),oe,l(t,{value:e.now,mode:"datetime"},null,8,["value"]),se,l(t,{value:e.now},null,8,["value"])]),_:1})]),_:1})}const _e=E(te,[["render",le]]);export{_e as default};