"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[28],{9028:(e,s,t)=>{t.r(s),t.d(s,{default:()=>f});var n,a=t(7528),c=t(3216),l=t(5043),i=t(9456),r=t(3519),o=t(8602),d=t(7805),u=t(197),h=t(730),p=t(579);let m=u.Ay.select(n||(n=(0,a.A)(["\n    border-radius: 5px;\n    padding-bottom: 3px;\n    width: 75px;\n"])));function x(e){let{nowTap:s}=e,[t,n]=(0,l.useState)("");return(0,l.useEffect)((()=>(setTimeout((()=>{n("tapEnd")}),100),()=>{n("")})),[s]),(0,p.jsx)("div",{className:"tapContents tapStart "+t,children:[(0,p.jsx)("div",{children:"\uc0c1\uc138\uc815\ubcf4"}),(0,p.jsx)("div",{children:"\uc0c1\ud488\ud6c4\uae30"}),(0,p.jsx)("div",{children:"Q&A"})][s]})}const f=function(e){let{productId:s}=(0,c.g)(),[t,n]=(0,l.useState)("50"),[a,u]=(0,l.useState)(0),f=(0,i.wA)();return(0,l.useEffect)((()=>{let e=localStorage.getItem("latestView");e=JSON.parse(e)||[],e.unshift(s),e=new Set(e),e=Array.from(e),localStorage.setItem("latestView",JSON.stringify(e))}),[s]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.A,{children:(0,p.jsxs)(o.A,{className:"detailItem",children:[(0,p.jsx)("img",{className:"detailImg",src:"/REACT/shop/assets/img/perfume"+s+".png",alt:"pixabay"}),(0,p.jsxs)("div",{className:"detailText",children:[(0,p.jsx)("h3",{children:e.perfume[s].title}),(0,p.jsx)("h6",{children:e.perfume[s].content}),(0,p.jsxs)("p",{children:[e.perfume[s].price,"$"]}),(0,p.jsx)("br",{}),(0,p.jsx)("span",{children:"\uc6a9\ub7c9"}),"\u2002",(0,p.jsxs)(m,{onChange:e=>{n(e.target.value)},children:[(0,p.jsx)("option",{value:50,children:"50ml"}),(0,p.jsx)("option",{value:100,children:"100ml"}),(0,p.jsx)("option",{value:150,children:"150ml"})]}),(0,p.jsxs)("div",{className:"total",children:["\ud569\uacc4 : ",e.perfume[s].price*t/50,"$"]}),(0,p.jsx)("button",{className:"btn buyBtn",onClick:()=>{f((0,h.uG)({name:e.perfume[s].title,volume:t,quantity:1,price:e.perfume[s].price}))},children:"\uad6c\ub9e4\ud558\uae30"})]})]})}),(0,p.jsx)(r.A,{className:"detailContainerNav",children:(0,p.jsxs)(d.A,{variant:"tabs",defaultActiveKey:"link0",style:{clear:"both"},children:[(0,p.jsx)(d.A.Item,{children:(0,p.jsx)(d.A.Link,{eventKey:"link0",className:"tabLink",onClick:()=>{u(0)},children:"\uc0c1\uc138\uc815\ubcf4"})}),(0,p.jsx)(d.A.Item,{children:(0,p.jsx)(d.A.Link,{eventKey:"link1",className:"tabLink",onClick:()=>{u(1)},children:"\uc0c1\ud488\ud6c4\uae30"})}),(0,p.jsx)(d.A.Item,{children:(0,p.jsx)(d.A.Link,{eventKey:"link2",className:"tabLink",onClick:()=>{u(2)},children:"Q&A"})})]})}),(0,p.jsx)(x,{nowTap:a})]})}},8602:(e,s,t)=>{t.d(s,{A:()=>o});var n=t(4600),a=t.n(n),c=t(5043),l=t(7852),i=t(579);const r=c.forwardRef(((e,s)=>{const[{className:t,...n},{as:c="div",bsPrefix:r,spans:o}]=function(e){let{as:s,bsPrefix:t,className:n,...c}=e;t=(0,l.oU)(t,"col");const i=(0,l.gy)(),r=(0,l.Jm)(),o=[],d=[];return i.forEach((e=>{const s=c[e];let n,a,l;delete c[e],"object"===typeof s&&null!=s?({span:n,offset:a,order:l}=s):n=s;const i=e!==r?"-".concat(e):"";n&&o.push(!0===n?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(n)),null!=l&&d.push("order".concat(i,"-").concat(l)),null!=a&&d.push("offset".concat(i,"-").concat(a))})),[{...c,className:a()(n,...o,...d)},{as:s,bsPrefix:t,spans:o}]}(e);return(0,i.jsx)(c,{...n,ref:s,className:a()(t,!o.length&&r)})}));r.displayName="Col";const o=r}}]);
//# sourceMappingURL=28.d5261caf.chunk.js.map