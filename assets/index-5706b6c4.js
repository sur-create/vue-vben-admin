import{B as S}from"./index-cf6bb915.js";import{b as v,_ as h}from"./index.js";import{P as F}from"./index-b777c0c9.js";import{aY as D,aD as b}from"./antd-4273b3e7.js";import{d as $,f as r,a7 as i,Z as d,a8 as m,a9 as l,$ as p,l as n,E as a,_ as B}from"./vue-ea98dac5.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";const A=$({components:{BasicDragVerify:S,BugOutlined:D,RightOutlined:b,PageWrapper:F},setup(){const{createMessage:e}=v(),s=r(null),y=r(null),_=r(null),g=r(null),k=r(null);function o(c){const{time:f}=c;e.success(`校验成功,耗时${f}秒`)}function u(c){c&&c.resume()}return{handleSuccess:o,el1:s,el2:y,el3:_,el4:g,el5:k,handleBtnClick:u}}});const O={class:"flex justify-center p-4 items-center bg-gray-700"},V={class:"flex justify-center p-4 items-center bg-gray-700"},j={class:"flex justify-center p-4 items-center bg-gray-700"},E={class:"flex justify-center p-4 items-center bg-gray-700"},P={class:"flex justify-center p-4 items-center bg-gray-700"},N={key:0},W={key:1};function I(e,s,y,_,g,k){const o=i("BasicDragVerify"),u=i("a-button"),c=i("BugOutlined"),f=i("RightOutlined"),C=i("PageWrapper");return d(),m(C,{title:"拖动校验示例"},{default:l(()=>[p("div",O,[n(o,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),n(u,{type:"primary",class:"ml-2",onClick:s[0]||(s[0]=t=>e.handleBtnClick(e.el1))},{default:l(()=>[a(" 还原 ")]),_:1})]),p("div",V,[n(o,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),n(u,{type:"primary",class:"ml-2",onClick:s[1]||(s[1]=t=>e.handleBtnClick(e.el2))},{default:l(()=>[a(" 还原 ")]),_:1})]),p("div",j,[n(o,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{backgroundColor:"#018ffb"}},null,8,["onSuccess"]),n(u,{type:"primary",class:"ml-2",onClick:s[2]||(s[2]=t=>e.handleBtnClick(e.el3))},{default:l(()=>[a(" 还原 ")]),_:1})]),p("div",E,[n(o,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:l(t=>[t?(d(),m(c,{key:0})):(d(),m(f,{key:1}))]),_:1},8,["onSuccess"]),n(u,{type:"primary",class:"ml-2",onClick:s[3]||(s[3]=t=>e.handleBtnClick(e.el4))},{default:l(()=>[a(" 还原 ")]),_:1})]),p("div",P,[n(o,{ref:"el5",onSuccess:e.handleSuccess},{text:l(t=>[t?(d(),B("div",N,[n(c),a(" 成功 ")])):(d(),B("div",W,[a(" 拖动 "),n(f)]))]),_:1},8,["onSuccess"]),n(u,{type:"primary",class:"ml-2",onClick:s[4]||(s[4]=t=>e.handleBtnClick(e.el5))},{default:l(()=>[a(" 还原 ")]),_:1})])]),_:1})}const z=h(A,[["render",I],["__scopeId","data-v-87e4d763"]]);export{z as default};
