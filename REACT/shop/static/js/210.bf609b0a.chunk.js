"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[210],{7379:(e,n,t)=>{t.d(n,{A:()=>l});var s=t(3216),i=t(579);const l=function(e){let{title:n,content:t,price:l,index:r,imageUrl:a}=e;const c=(0,s.Zp)(),o=()=>{c("/detail/".concat(r))};return(0,i.jsxs)("div",{onClick:o,children:[(0,i.jsx)("img",{className:"productImg",src:a,alt:n}),(0,i.jsx)("h5",{onClick:o,children:n}),(0,i.jsx)("h6",{children:t}),(0,i.jsxs)("p",{children:[l,"$"]})]})}},5210:(e,n,t)=>{t.r(n),t.d(n,{default:()=>N});var s,i,l,r,a=t(7528),c=t(9265),o=t(5043),d=t(7154),h=t(3519),p=t(1072),x=t(8602),m=t(3216),g=t(7379),u=t(197),j=t(579);const f=u.Ay.div(s||(s=(0,a.A)(["\n    width: 100%;\n    text-align: center;\n    margin-bottom: 30px;\n"]))),A=u.Ay.div(i||(i=(0,a.A)(["\n    position: fixed;\n    background-color: #fff;\n    right: 15px;\n    top: 75px;\n    width: 100px;\n    height: 275px;\n    border-radius: 10px;\n    text-align: center;\n    box-shadow: 1px 1px 5px;\n"]))),b=u.Ay.p(l||(l=(0,a.A)(["\n    font-size: 10px;\n    cursor: pointer;\n"]))),C=u.Ay.p(r||(r=(0,a.A)(["\n    margin: 0px;\n    padding: 10px 0 10px 0;\n"])));const N=function(){const[e,n]=(0,o.useState)(c.A),[t,s]=(0,o.useState)(3),[i,l]=(0,o.useState)([]),[r,a]=(0,o.useState)(!1),u=JSON.parse(localStorage.getItem("latestView")),N=(0,m.Zp)();return(0,o.useEffect)((()=>{d.A.get("https://daks4012.github.io/REACT/shop/dummy/newPerfume.js").then((t=>{const s=[...e,...t.data];n(s),(0===t.data.length||s.length>=12)&&a(!0)})).catch((e=>{console.error("Error fetching perfume data:",e)}))}),[]),(0,o.useEffect)((()=>{l(e.filter(((e,n)=>n<t)))}),[e,t]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"main-bg",children:(0,j.jsxs)("div",{className:"main-bgIntro",children:[(0,j.jsx)("h2",{className:"IntroH2",children:"The most versatile floral perfume"}),(0,j.jsx)("p",{className:"IntroP",children:"Bright neroli, soft jasmine grandy Florum and Rose Centifolia Absolute"}),(0,j.jsx)("p",{className:"IntroP",children:"The essence of floral notes is integrated"}),(0,j.jsx)("p",{className:"IntroP",children:"There are intense and dazzling guests"})]})}),(0,j.jsxs)(A,{children:[(0,j.jsx)(C,{children:"last view"}),null!==u?u.map(((n,t)=>(u.length=3,(0,j.jsxs)("div",{className:"lastViewContainer",children:[(0,j.jsx)("img",{className:"lastViewIMG",onClick:()=>{N("/detail/"+u[t])},src:"/REACT/blog./assets/img/perfume"+u[t]+".png",alt:"pixabay"}),(0,j.jsx)(b,{onClick:()=>{N("/detail/"+u[t])},children:e[u[t]]&&e[u[t]].title})]},t)))):null]}),(0,j.jsx)("div",{className:"porductTitle",children:(0,j.jsx)("h4",{children:"Product"})}),(0,j.jsxs)(h.A,{children:[(0,j.jsx)(p.A,{children:i.map(((e,n)=>(0,j.jsx)(x.A,{sm:4,children:(0,j.jsx)(g.A,{title:e.title,content:e.content,price:e.price,index:n,imageUrl:"".concat("/REACT/blog","/assets/img/perfume").concat(n,".png")})},n)))}),r||i.length>=e.length?(0,j.jsx)(f,{children:(0,j.jsx)("button",{className:"btn moreBtn",onClick:()=>N("/product"),children:"\uc0c1\ud488 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9"})}):(0,j.jsx)(f,{children:(0,j.jsx)("button",{className:"btn moreBtn",onClick:()=>{s((e=>e+3)),l(e.filter(((e,n)=>n<t+3)))},children:"\uc0c1\ud488 \ub354 \ubcf4\uae30"})})]})]})}}}]);
//# sourceMappingURL=210.bf609b0a.chunk.js.map