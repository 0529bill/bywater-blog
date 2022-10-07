"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[1431],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,E=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(E,i(i({ref:t},m),{},{components:r})):n.createElement(E,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9346:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:12},i="[JS] DOM and DOM manipulations",p={unversionedId:"Javascript/DOM",id:"Javascript/DOM",isDocsHomePage:!1,title:"[JS] DOM and DOM manipulations",description:"DOM \u6587\u4ef6\u7269\u4ef6\u6a21\u578b",source:"@site/docs/Javascript/DOM.md",sourceDirName:"Javascript",slug:"/Javascript/DOM",permalink:"/bywater-blog/Javascript/DOM",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"[JS] functional Programming",permalink:"/bywater-blog/Javascript/fucntionalProgramming"},next:{title:"[Optimization] Basics",permalink:"/bywater-blog/Optimization/Basic_Optimization"}},l=[{value:"DOM \u6587\u4ef6\u7269\u4ef6\u6a21\u578b",id:"dom-\u6587\u4ef6\u7269\u4ef6\u6a21\u578b",children:[]},{value:"DOM manipulation",id:"dom-manipulation",children:[{value:"Why?",id:"why",children:[]}]},{value:"DOM traversal",id:"dom-traversal",children:[]}],s={toc:l};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"js-dom-and-dom-manipulations"},"[JS]"," DOM and DOM manipulations"),(0,a.kt)("h2",{id:"dom-\u6587\u4ef6\u7269\u4ef6\u6a21\u578b"},"DOM \u6587\u4ef6\u7269\u4ef6\u6a21\u578b"),(0,a.kt)("p",null,":DOM \u662f HTML,XML, SVG \u6587\u4ef6\u7684\u7a0b\u5f0f\u4ecb\u9762\uff0c\u4ed6\u628a\u6587\u4ef6\u8ddf\u7a0b\u5f0f\u8a9e\u8a00\uff08ex, js)\u7d81\u5728\u4e00\u8d77\u3002\u900f\u904e DOM\uff0c\u6211\u5011\u53ef\u4ee5\u7528 JS \u4f86\u64cd\u63a7 HTML."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u201cIt is an abstract representation of structured text, where the structured text is our HTML code.\u201d")),(0,a.kt)("h2",{id:"dom-manipulation"},"DOM manipulation"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"DOM manipulation \u662f\u5f88\u8017\u8cbb\u6027\u80fd\u7684!")),(0,a.kt)("h3",{id:"why"},"Why?"),(0,a.kt)("p",null,"TL;DR:\n\u56e0\u70ba DOM \u5728 browser \u4e2d\u7684\u64cd\u4f5c\u6240\u9020\u6210\u7684 reflow\uff08\u8a08\u7b97 render tree layout\uff09, repaint(\u8a08\u7b97 render tree \u9806\u5e8f)\u5f88\u6d88\u8017\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\xa0","\n",(0,a.kt)("img",{alt:"webkit",src:r(3573).Z}),"\n","\xa0"),(0,a.kt)("p",null,"\u9019\u662f Webkit \u8655\u7406 HTML,Css \u7684\u6d41\u7a0b\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","webkit \u662f\u4e00\u500b open source \u7684 rendering engine,\u88ab\u61c9\u7528\u5728 chrome, safari \u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u7576 server \u5728\u63a5\u6536\u5230 browser \u6240\u6536\u5230\u7684\u8acb\u6c42\u5f8c\uff0c\u6703\u50b3\u9001 HTML/Css \u7d66 browser\uff0c\u4e26\u4e14\u6703\u767c\u751f\u4ee5\u4e0b\u5e7e\u4ef6\u4e8b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0crendering engine \u6703\u7de8\u8b6f(parse)HTML \u548c Css \u7528\u700f\u89bd\u5668\u63d0\u4f9b\u7684\u5404\u81ea\u7de8\u8b6f\u5668(parser)\uff0cHTML \u6703\u88ab\u5efa\u69cb\u51fa",(0,a.kt)("strong",{parentName:"li"},"\u5de2\u72c0\u7684 Js \u7269\u4ef6"),"\u7a31\u70ba Node Tree (DOM tree)\uff0cCSS \u5247\u6703\u88ab\u67b6\u69cb\u51fa\u5de2\u72c0\u7684 CSSOM(CSS object Modal or CSSOM tree)\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u4f86\uff0crendering engine \u6703\u628a DOM tree \u548c CSSOM tree \u7d50\u5408\u6210 Render tree\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5169\u6b65\u9a5f\u5b8c\u6210\u5f8c\uff0c\u5c31\u6703\u9032\u5165\u6e32\u67d3\u6d41\u7a0b\uff0c\u6703\u6709\u4ee5\u4e0b\u5e7e\u500b\u6b65\u9a5f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reflow or Layout stage\uff08\u6392\u7248\uff09\u968e\u6bb5"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u700f\u89bd\u5668\u9996\u5148\u6703\u70ba render tree \u4e2d\u7684\u5404\u500b\u7bc0\u9ede\u5efa\u69cb\u6392\u7248\uff0c\u9019\u5305\u542b\u4e86\u8a08\u7b97\u6bcf\u500b\u7bc0\u9ede\u5728\u87a2\u5e55\u4e0a\u7684\u50cf\u7d20\u5c3a\u5b58\u4ee5\u53ca\u78ba\u5207\u7684\u4f4d\u7f6e(positions and the coordinates)\uff0c\u900f\u904e\u5f9e Node \u7684\u6e90\u982d\uff08root node\uff09\u958b\u59cb\u5f80\u4e0b\u8a08\u7b97\u6bcf\u500b element \u548c\u5176\u9644\u8fd1\u7684 element \u7684\u4f4d\u7f6e\u8ddf\u95dc\u4fc2\uff08ex, \u78ba\u5207\u8ddd\u96e2 exact pixels\uff09\u3002\u6211\u5011\u5c07\u9019\u500b\u904e\u7a0b\u70ba layout\uff08\u6392\u7248\uff09\uff0c\u9019\u500b\u904e\u7a0b\u53c8\u88ab\u7a31\u4f5c reflow \u6216\u662f browser reflow\u3002\u8981\u6ce8\u610f\u7684\u662f\u7576\u6211\u5011\u5728\u6372\u52d5\u87a2\u5e55\u3001\u8abf\u6574\u8996\u7a97\u5927\u5c0f\u6216\u662f\u4fee\u6539 DOM \u5143\u7d20\u6642\uff0c\u90fd\u6703\u89f8\u767c layout \u7684\u7a0b\u5e8f\u3002",(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("strong",{parentName:"li"},"\u9019\u662f\u4e00\u500b\u5f88\u6d88\u8017\u6027\u80fd\u7684\u6b65\u9a5f\uff0c\u56e0\u70ba\u4ed6\u8981\u5f9e\u982d\u5230\u5c3e\u8a08\u7b97\u6bcf\u500b node \u4e4b\u9593\u7684\u8ddd\u96e2\u8ddf\u95dc\u4fc2\u3002")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Painting/ repaint (\u7e6a\u5716\uff09\u968e\u6bb5"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u9019\u500b\u968e\u6bb5\uff0c\u6392\u7248\u5b8c\u7684 render tree \u6709\u53ef\u80fd\u6703\u6709\u5143\u7d20\u4e92\u76f8\u91cd\u758a\uff08ex, z-index)\uff0c\u900f\u904e painting \u9019\u500b\u968e\u6bb5\u628a\u5404\u500b\u5143\u7d20\u7684 painting \u4e0a\u4e0b\u7b49\u7b49\u9806\u5e8f\u8a08\u7b97\u597d\uff08ex, background first, then text, then rectangle\uff09\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Compositing (\u7d44\u5408)\u968e\u6bb5\n\u5728 compositing\uff08\u7d44\u5408\uff09\u968e\u6bb5\u6642\uff0crendering engine \u624d\u6703\u6703\u900f\u904e GPU \u88ab\u7e6a\u88fd\u5230\u87a2\u5e55\u4e2d\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DOM_TREE",src:r(9607).Z}),"\n",(0,a.kt)("em",{parentName:"p"},"DOM tree")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CSSOM_TREE",src:r(8850).Z}),"\n",(0,a.kt)("em",{parentName:"p"},"CSSOM tree")),(0,a.kt)("h2",{id:"dom-traversal"},"DOM traversal"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zellwk.com/blog/dom-traversals/"},"https://zellwk.com/blog/dom-traversals/"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/technogise/dom-manipulation-in-browser-59b793bee559"},"https://medium.com/technogise/dom-manipulation-in-browser-59b793bee559"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://medium.someone.tw/web-%E7%80%8F%E8%A6%BD%E5%99%A8%E5%A6%82%E4%BD%95%E7%B9%AA%E8%A3%BD%E7%B6%B2%E9%A0%81-%E6%8E%A2%E8%A8%8E-dom-cssom-%E8%88%87%E6%B8%B2%E6%9F%93-%E7%BF%BB%E8%AD%AF-e9ba8c2be451"},"https://medium.someone.tw/web-%E7%80%8F%E8%A6%BD%E5%99%A8%E5%A6%82%E4%BD%95%E7%B9%AA%E8%A3%BD%E7%B6%B2%E9%A0%81-%E6%8E%A2%E8%A8%8E-dom-cssom-%E8%88%87%E6%B8%B2%E6%9F%93-%E7%BF%BB%E8%AD%AF-e9ba8c2be451"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/walkout/%E5%A2%9E%E9%80%B2%E6%95%88%E8%83%BD%E5%BE%9E%E4%BA%86%E8%A7%A3%E7%80%8F%E8%A6%BD%E5%99%A8%E9%96%8B%E5%A7%8B-%E9%97%9C%E9%8D%B5%E6%B8%B2%E6%9F%93%E8%B7%AF%E5%BE%91-595c5da265a9"},"https://medium.com/walkout/%E5%A2%9E%E9%80%B2%E6%95%88%E8%83%BD%E5%BE%9E%E4%BA%86%E8%A7%A3%E7%80%8F%E8%A6%BD%E5%99%A8%E9%96%8B%E5%A7%8B-%E9%97%9C%E9%8D%B5%E6%B8%B2%E6%9F%93%E8%B7%AF%E5%BE%91-595c5da265a9"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/34269416/when-does-parsing-html-dom-tree-happen"},"https://stackoverflow.com/questions/34269416/when-does-parsing-html-dom-tree-happen"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/blog/inside-browser-part3/"},"https://developer.chrome.com/blog/inside-browser-part3/"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/86153264"},"https://zhuanlan.zhihu.com/p/86153264")))}m.isMDXComponent=!0},8850:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CSSOM_TREE-2924fc0c7ae6bdb6cada9d35af97b49b.png"},9607:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/DOM_TREE-2b7e6e91eb91ce39cc9213962da5b067.png"},3573:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/webkit-596dfa078d8d277f64aca95b2b1de6d8.png"}}]);