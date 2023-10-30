var A=(t,a,c)=>new Promise((m,p)=>{var _=n=>{try{r(c.next(n))}catch(e){p(e)}},E=n=>{try{r(c.throw(n))}catch(e){p(e)}},r=n=>n.done?m(n.value):Promise.resolve(n.value).then(_,E);r((c=c.apply(t,a)).next())});import P from"./CurrentPermissionMode-96ff4c4c.js";import{a0 as v,b4 as b,aK as g,l as h,b3 as M,_ as S}from"./index.js";import{A as $}from"./index-0d47940b.js";import{P as w}from"./index-b777c0c9.js";import{d as x,c as T,a7 as l,q as N,Z as i,a8 as d,a9 as u,l as o,$ as y,E as s,a0 as V,_ as W,ab as F,n as C,F as I}from"./vue-ea98dac5.js";import{X as K,$ as U}from"./antd-4273b3e7.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";const j=x({components:{Alert:K,PageWrapper:w,CurrentPermissionMode:P,Divider:U,Authority:$},setup(){const{hasPermission:t}=v(),a=b(),c=g(),m=h(),p=T(()=>c.getProjectConfig.permissionMode===M.BACK);function _(E){return A(this,null,function*(){const r="fakeToken"+E;m.setToken(r),m.getUserInfoAction(),a.changePermissionCode()})}return{hasPermission:t,permissionStore:a,switchToken:_,isBackPermissionMode:p}}});function q(t,a,c,m,p,_){const E=l("CurrentPermissionMode"),r=l("Divider"),n=l("Alert"),e=l("a-button"),f=l("Authority"),D=l("PageWrapper"),B=N("auth");return i(),d(D,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:u(()=>[o(E),y("p",null,[s(" 当前拥有的code列表: "),y("a",null,V(t.permissionStore.getPermCodeList),1)]),o(r),o(n,{class:"mt-4",type:"info",message:"点击后请查看按钮变化(必须处于后台权限模式才可测试此页面所展示的功能)","show-icon":""}),o(r),o(e,{type:"primary",class:"mr-2",onClick:a[0]||(a[0]=k=>t.switchToken(2)),disabled:!t.isBackPermissionMode},{default:u(()=>[s(" 点击切换按钮权限(用户id为2) ")]),_:1},8,["disabled"]),o(e,{type:"primary",onClick:a[1]||(a[1]=k=>t.switchToken(1)),disabled:!t.isBackPermissionMode},{default:u(()=>[s(" 点击切换按钮权限(用户id为1,默认) ")]),_:1},8,["disabled"]),t.isBackPermissionMode?(i(),W(I,{key:0},[o(r,null,{default:u(()=>[s("组件方式判断权限")]),_:1}),o(f,{value:"1000"},{default:u(()=>[o(e,{type:"primary",class:"mx-4"},{default:u(()=>[s(" 拥有code ['1000']权限可见 ")]),_:1})]),_:1}),o(f,{value:"2000"},{default:u(()=>[o(e,{color:"success",class:"mx-4"},{default:u(()=>[s(" 拥有code ['2000']权限可见 ")]),_:1})]),_:1}),o(f,{value:["1000","2000"]},{default:u(()=>[o(e,{color:"error",class:"mx-4"},{default:u(()=>[s(" 拥有code ['1000','2000']角色权限可见 ")]),_:1})]),_:1}),o(r,null,{default:u(()=>[s("函数方式方式判断权限")]),_:1}),t.hasPermission("1000")?(i(),d(e,{key:0,type:"primary",class:"mx-4"},{default:u(()=>[s(" 拥有code ['1000']权限可见 ")]),_:1})):F("",!0),t.hasPermission("2000")?(i(),d(e,{key:1,color:"success",class:"mx-4"},{default:u(()=>[s(" 拥有code ['2000']权限可见 ")]),_:1})):F("",!0),t.hasPermission(["1000","2000"])?(i(),d(e,{key:2,color:"error",class:"mx-4"},{default:u(()=>[s(" 拥有code ['1000','2000']角色权限可见 ")]),_:1})):F("",!0),o(r,null,{default:u(()=>[s("指令方式方式判断权限(该方式不能动态修改权限.)")]),_:1}),C((i(),d(e,{type:"primary",class:"mx-4"},{default:u(()=>[s(" 拥有code ['1000']权限可见 ")]),_:1})),[[B,"1000"]]),C((i(),d(e,{color:"success",class:"mx-4"},{default:u(()=>[s(" 拥有code ['2000']权限可见 ")]),_:1})),[[B,"2000"]]),C((i(),d(e,{color:"error",class:"mx-4"},{default:u(()=>[s(" 拥有code ['1000','2000']角色权限可见 ")]),_:1})),[[B,["1000","2000"]]])],64)):F("",!0)]),_:1})}const Y=S(j,[["render",q],["__scopeId","data-v-bb4f95d3"]]);export{Y as default};