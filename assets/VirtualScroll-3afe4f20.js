import{H as A,x as D,_ as $,w as I}from"./index.js";import{d as C,f as B,r as M,c,u as i,w as k,o as P,x as L,l as o,a7 as S,Z as q,a8 as U,a9 as _,E as W,$ as g,a0 as E}from"./vue-ea98dac5.js";import{P as Z}from"./index-b777c0c9.js";import{$ as j}from"./antd-4273b3e7.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";const z={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},w="virtual-scroll";function a(t,s="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${s}`}const G=C({name:"VirtualScroll",props:z,setup(t,{slots:s}){const u=B(null),r=M({first:0,last:0,scrollTop:0}),p=c(()=>parseInt(t.bench,10)),d=c(()=>parseInt(t.itemHeight,10)),m=c(()=>Math.max(0,r.first-i(p))),f=c(()=>Math.min((t.items||[]).length,r.last+i(p))),v=c(()=>({height:a((t.items||[]).length*i(d))})),h=c(()=>{const e={},n=a(t.height),l=a(t.minHeight),H=a(t.minWidth),b=a(t.maxHeight),N=a(t.maxWidth),F=a(t.width);return n&&(e.height=n),l&&(e.minHeight=l),H&&(e.minWidth=H),b&&(e.maxHeight=b),N&&(e.maxWidth=N),F&&(e.width=F),e});k([()=>t.itemHeight,()=>t.height],()=>{y()});function x(e){const n=i(u);if(!n)return 0;const l=parseInt(t.height||0,10)||n.clientHeight;return e+Math.ceil(l/i(d))}function V(){return Math.floor(r.scrollTop/i(d))}function y(){const e=i(u);e&&(r.scrollTop=e.scrollTop,r.first=V(),r.last=x(r.first))}function R(){const{items:e=[]}=t;return e.slice(i(m),i(f)).map(T)}function T(e,n){n+=i(m);const l=a(n*i(d));return o("div",{class:`${w}__item`,style:{top:l},key:n},[D(s,"default",{index:n,item:e})])}return P(()=>{r.last=x(0),L(()=>{const e=i(u);e&&A({el:e,name:"scroll",listener:y,wait:0})})}),()=>o("div",{class:w,style:i(h),ref:u},[o("div",{class:`${w}__container`,style:i(v)},[R()])])}});const J=$(G,[["__scopeId","data-v-762bdd43"]]),K=I(J),O=(()=>{const t=[];for(let s=1;s<2e4;s++)t.push({title:"列表项"+s});return t})(),Q=C({components:{VScroll:K,Divider:j,PageWrapper:Z},setup(){return{data:O}}});const X={class:"virtual-scroll-demo-wrap"},Y={class:"virtual-scroll-demo__item"},tt={class:"virtual-scroll-demo-wrap"},et={class:"virtual-scroll-demo__item"};function it(t,s,u,r,p,d){const m=S("Divider"),f=S("VScroll"),v=S("PageWrapper");return q(),U(v,{class:"virtual-scroll-demo"},{default:_(()=>[o(m,null,{default:_(()=>[W("基础滚动示例")]),_:1}),g("div",X,[o(f,{itemHeight:41,items:t.data,height:300,width:300},{default:_(({item:h})=>[g("div",Y,E(h.title),1)]),_:1},8,["items"])]),o(m,null,{default:_(()=>[W("即使不可见，也预先加载50条数据，防止空白")]),_:1}),g("div",tt,[o(f,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:_(({item:h})=>[g("div",et,E(h.title),1)]),_:1},8,["items"])])]),_:1})}const ut=$(Q,[["render",it],["__scopeId","data-v-777deded"]]);export{ut as default};
