"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[210],{7379:(e,n,s)=>{s.d(n,{A:()=>a});var t=s(3216),c=s(579);const a=function(e){let{title:n,content:s,price:a,index:l,imageUrl:o}=e;const r=(0,t.Zp)(),i=()=>{r("/detail/".concat(l))};return(0,c.jsxs)("div",{onClick:i,children:[(0,c.jsx)("img",{className:"productImg",src:o,alt:n}),(0,c.jsx)("h5",{onClick:i,children:n}),(0,c.jsx)("h6",{children:s}),(0,c.jsxs)("p",{children:[a,"$"]})]})}},5210:(e,n,s)=>{s.r(n),s.d(n,{default:()=>N});var t,c,a,l,o=s(7528),r=s(5043),i=s(3519),d=s(1072),p=s(8602),h=s(3216),m=s(7379),u=s(197),x=s(579);const f=u.Ay.div(t||(t=(0,o.A)(["\n    width: 100%;\n    text-align: center;\n    margin-bottom: 30px;\n"]))),g=u.Ay.div(c||(c=(0,o.A)(["\n    position: fixed;\n    background-color: #fff;\n    right: 15px;\n    top: 75px;\n    width: 100px;\n    height: 275px;\n    border-radius: 10px;\n    text-align: center;\n    box-shadow: 1px 1px 5px;\n"]))),j=u.Ay.p(a||(a=(0,o.A)(["\n    font-size: 10px;\n    cursor: pointer;\n"]))),b=u.Ay.p(l||(l=(0,o.A)(["\n    margin: 0px;\n    padding: 10px 0 10px 0;\n"])));const N=function(e){const[n,s]=(0,r.useState)(3),[t,c]=(0,r.useState)([]),[a,l]=(0,r.useState)(!1),o=JSON.parse(localStorage.getItem("latestView")),u=(0,h.Zp)();return(0,r.useEffect)((()=>{console.log(e),(0===e.perfume.length||e.perfume.length>=12)&&l(!0)}),[]),(0,r.useEffect)((()=>{c(e.perfume.filter(((e,s)=>s<n)))}),[e.perfume,n]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"main-bg",children:(0,x.jsxs)("div",{className:"main-bgIntro",children:[(0,x.jsx)("h2",{className:"IntroH2",children:"The most versatile floral perfume"}),(0,x.jsx)("p",{className:"IntroP",children:"Bright neroli, soft jasmine grandy Florum and Rose Centifolia Absolute"}),(0,x.jsx)("p",{className:"IntroP",children:"The essence of floral notes is integrated"}),(0,x.jsx)("p",{className:"IntroP",children:"There are intense and dazzling guests"})]})}),(0,x.jsxs)(g,{children:[(0,x.jsx)(b,{children:"last view"}),null!==o?o.map(((n,s)=>(o.length=3,(0,x.jsxs)("div",{className:"lastViewContainer",children:[(0,x.jsx)("img",{className:"lastViewIMG",onClick:()=>{u("/detail/"+o[s])},src:"https://daks4012.github.io/REACT/shop/assets/img/perfume"+o[s]+".png",alt:"pixabay"}),(0,x.jsx)(j,{onClick:()=>{u("/detail/"+o[s])},children:e.perfume[o[s]]&&e.perfume[o[s]].title})]},s)))):null]}),(0,x.jsx)("div",{className:"porductTitle",children:(0,x.jsx)("h4",{children:"Product"})}),(0,x.jsxs)(i.A,{children:[(0,x.jsx)(d.A,{children:t.map(((e,n)=>(0,x.jsx)(p.A,{sm:4,children:(0,x.jsx)(m.A,{title:e.title,content:e.content,price:e.price,index:n,imageUrl:"".concat("/REACT/shop","/assets/img/perfume").concat(n,".png")})},n)))}),a||t.length>=e.perfume.length?(0,x.jsx)(f,{children:(0,x.jsx)("button",{className:"btn moreBtn",onClick:()=>u("/product"),children:"\uc0c1\ud488 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9"})}):(0,x.jsx)(f,{children:(0,x.jsx)("button",{className:"btn moreBtn",onClick:()=>{s((e=>e+3)),c(e.perfume.filter(((e,s)=>s<n+3)))},children:"\uc0c1\ud488 \ub354 \ubcf4\uae30"})})]})]})}},8602:(e,n,s)=>{s.d(n,{A:()=>i});var t=s(4600),c=s.n(t),a=s(5043),l=s(7852),o=s(579);const r=a.forwardRef(((e,n)=>{const[{className:s,...t},{as:a="div",bsPrefix:r,spans:i}]=function(e){let{as:n,bsPrefix:s,className:t,...a}=e;s=(0,l.oU)(s,"col");const o=(0,l.gy)(),r=(0,l.Jm)(),i=[],d=[];return o.forEach((e=>{const n=a[e];let t,c,l;delete a[e],"object"===typeof n&&null!=n?({span:t,offset:c,order:l}=n):t=n;const o=e!==r?"-".concat(e):"";t&&i.push(!0===t?"".concat(s).concat(o):"".concat(s).concat(o,"-").concat(t)),null!=l&&d.push("order".concat(o,"-").concat(l)),null!=c&&d.push("offset".concat(o,"-").concat(c))})),[{...a,className:c()(t,...i,...d)},{as:n,bsPrefix:s,spans:i}]}(e);return(0,o.jsx)(a,{...t,ref:n,className:c()(s,!i.length&&r)})}));r.displayName="Col";const i=r},1072:(e,n,s)=>{s.d(n,{A:()=>i});var t=s(4600),c=s.n(t),a=s(5043),l=s(7852),o=s(579);const r=a.forwardRef(((e,n)=>{let{bsPrefix:s,className:t,as:a="div",...r}=e;const i=(0,l.oU)(s,"row"),d=(0,l.gy)(),p=(0,l.Jm)(),h="".concat(i,"-cols"),m=[];return d.forEach((e=>{const n=r[e];let s;delete r[e],null!=n&&"object"===typeof n?({cols:s}=n):s=n;const t=e!==p?"-".concat(e):"";null!=s&&m.push("".concat(h).concat(t,"-").concat(s))})),(0,o.jsx)(a,{ref:n,...r,className:c()(t,i,...m)})}));r.displayName="Row";const i=r}}]);
//# sourceMappingURL=210.50aeeff1.chunk.js.map