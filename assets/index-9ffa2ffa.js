import{C as x,M as u,J as R}from"./index-c4d58489.js";import{P as B}from"./index-b777c0c9.js";import{ac as c,Q as D,M as h}from"./antd-4273b3e7.js";import{d as b,f,u as P,m as S,a7 as n,Z as k,a8 as y,a9 as o,l as a,E as i}from"./vue-ea98dac5.js";import{_ as M}from"./index.js";import"./useWindowSizeFn-997fa1d0.js";import"./useContentViewHeight-b8e9ee08.js";import"./onMountedOrActivated-3eb95ecd.js";const v='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"科技园路.","city":"江苏苏州","country":"中国"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',j=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,J=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,A=b({components:{CodeEditor:x,PageWrapper:B,RadioButton:c.Button,RadioGroup:c.Group,ASpace:D},setup(){const t=f(u.JSON),e=f(v),s=p=>{const l=p.target.value;if(l===u.JSON){e.value=v;return}if(l===u.HTML){e.value=J;return}if(l===u.JS){e.value=j;return}};function d(){P(t)==="application/json"?h.info({title:"编辑器当前值",content:S(R,{data:JSON.parse(e.value)})}):h.info({title:"编辑器当前值",content:e.value})}return{value:e,modeValue:t,handleModeChange:s,showData:d}}});function F(t,e,s,d,p,l){const _=n("a-button"),r=n("RadioButton"),w=n("RadioGroup"),E=n("a-space"),g=n("CodeEditor"),C=n("PageWrapper");return k(),y(C,{title:"代码编辑器组件示例",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(E,{size:"middle"},{default:o(()=>[a(_,{onClick:t.showData,type:"primary"},{default:o(()=>[i("获取数据")]),_:1},8,["onClick"]),a(w,{"button-style":"solid",value:t.modeValue,"onUpdate:value":e[0]||(e[0]=m=>t.modeValue=m),onChange:t.handleModeChange},{default:o(()=>[a(r,{value:"application/json"},{default:o(()=>[i(" json数据 ")]),_:1}),a(r,{value:"htmlmixed"},{default:o(()=>[i(" html代码 ")]),_:1}),a(r,{value:"javascript"},{default:o(()=>[i(" javascript代码 ")]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(g,{value:t.value,"onUpdate:value":e[1]||(e[1]=m=>t.value=m),mode:t.modeValue},null,8,["value","mode"])]),_:1})}const I=M(A,[["render",F]]);export{I as default};
