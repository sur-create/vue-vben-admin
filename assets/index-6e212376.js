import{_ as o}from"./index-6aae0b3f.js";import{t as u}from"./data-b6067d4c.js";import{P as C}from"./index-b777c0c9.js";import{N as K}from"./index.js";import{R,K as s,aM as E,aN as w,J as m,y as $,e as y,aO as b}from"./antd-4273b3e7.js";import{d as A,f as i,a7 as B,Z as L,a8 as O,a9 as t,l as a,u as e,E as f,x as P}from"./vue-ea98dac5.js";import"./useContextMenu-a082ef9b.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";const G=A({__name:"index",setup(S){const p=i(null),_=i(null),v=i(null),d=i([]),l=i(!1);function T(n,c){}function h(){l.value=!0,setTimeout(()=>{d.value=y(u),l.value=!1,P(()=>{var n;(n=e(_))==null||n.expandAll(!0)})},2e3)}function k(){l.value=!0,setTimeout(()=>{d.value=y(u),l.value=!1},2e3)}const x=i([{title:"parent ",key:"0-0"}]);function D(n){return new Promise(c=>{if(K(n.children)&&n.children.length>0){c();return}setTimeout(()=>{const r=e(p);if(r){const g=[{title:`Child Node ${n.eventKey}-0`,key:`${n.eventKey}-0`},{title:`Child Node ${n.eventKey}-1`,key:`${n.eventKey}-1`}];r.updateNodeByKey(n.eventKey,{children:g}),r.setExpandedKeys(b([n.eventKey,...r.getExpandedKeys()]))}c()},300)})}return(n,c)=>{const r=B("a-button");return L(),O(e(C),{title:"Tree基础示例"},{default:t(()=>[a(e(R),{gutter:[16,16]},{default:t(()=>[a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"基础示例，默认展开第一层",treeData:e(u),defaultExpandLevel:"1"},{icon:t(()=>[a(e(E))]),title:t(()=>[f("666")]),switcherIcon:t(()=>[a(e(w))]),_:1},8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"可勾选，默认全部展开",treeData:e(u),checkable:!0,defaultExpandAll:"",onCheck:T},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"指定默认展开/勾选示例",treeData:e(u),checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"懒加载异步树",ref_key:"asyncTreeRef",ref:p,treeData:x.value,"load-data":D},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(m),{title:"异步数据，默认展开"},{extra:t(()=>[a(r,{onClick:h,loading:l.value},{default:t(()=>[f("加载数据")]),_:1},8,["loading"])]),default:t(()=>[a(e($),{spinning:l.value},{default:t(()=>[a(e(o),{ref_key:"asyncExpandTreeRef",ref:_,treeData:d.value},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(m),{title:"BasicTree内置加载"},{extra:t(()=>[a(r,{onClick:k,loading:l.value},{default:t(()=>[f("请求数据")]),_:1},8,["loading"])]),default:t(()=>[a(e(o),{ref_key:"loadTreeRef",ref:v,treeData:d.value,loading:l.value},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{G as default};