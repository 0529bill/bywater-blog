"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7533:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="[others] Design pattern",l={unversionedId:"others/designPattern",id:"others/designPattern",isDocsHomePage:!1,title:"[others] Design pattern",description:"\u70ba\u4ec0\u9ebc\u9700\u8981 Design pattern?",source:"@site/docs/others/designPattern.md",sourceDirName:"others",slug:"/others/designPattern",permalink:"/bywater-blog/others/designPattern",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"[others] Rendering Patterns",permalink:"/bywater-blog/others/rendering"},next:{title:"[others] what happens when you type in a URL in an address bar in a browser?",permalink:"/bywater-blog/others/enterURl"}},p=[{value:"Module pattern",id:"module-pattern",children:[]},{value:"MVC, MVVM \u67b6\u69cb",id:"mvc-mvvm-\u67b6\u69cb",children:[]}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"others-design-pattern"},"[others]"," Design pattern"),(0,o.kt)("p",null,"\u70ba\u4ec0\u9ebc\u9700\u8981 Design pattern?\n:\u7528 design pattern \u4f86\u589e\u52a0\u958b\u767c\u901f\u5ea6\u3001\u6548\u7387\u3001\u53ef\u8b80\u6027\u3002"),(0,o.kt)("h3",{id:"module-pattern"},"Module pattern"),(0,o.kt)("p",null,":\u628a\u7a0b\u5f0f\u78bc\u5206\u5272\u70ba\u5404\u500b module,\u4e26\u4e14\u8b93\u90e8\u5206\u8b8a\u6578\u53ea\u5b58\u5728\u8a72 module \u4e2d\uff08private)\uff0c\u53ea\u6709\u88ab export/import \u7684\u8b8a\u6578\u624d\u53ef\u4ee5\u4f7f\u7528\uff0c\u9019\u6709\u4ee5\u4e0b\u5e7e\u9ede\u512a\u9ede"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8b93 global \u8b8a\u6578\u662f\u4e7e\u6de8\u7684\uff0c\u4e0d\u6703\u6709\u8aa4\u7528\u8b8a\u6578\u7684\u60c5\u6cc1\uff08ex, name collision\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u7a0b\u5f0f\u78bc\u66f4\u597d\u95b1\u8b80\u8ddf\u6574\u7406")),(0,o.kt)("p",null,"ex, ES2015 Modules"),(0,o.kt)("h3",{id:"mvc-mvvm-\u67b6\u69cb"},"MVC, MVVM \u67b6\u69cb"),(0,o.kt)("p",null,"React \u56b4\u683c\u4e0a\u4f86\u8aaa\uff0c\u4e26\u975e\u662f\u4e00\u500b\u5b8c\u6574\u7684 Framework\uff0c\u53ea\u80fd\u7a31\u5f97\u4e0a\u662f\u4e00\u500b\u8655\u7406 view \u7684 Library\u3002\u6240\u4ee5\u4ee5\u5b8f\u89c0\u7684\u89d2\u5ea6\u4f86\u770b\uff0cReact \u8ca0\u8cac MVC \u67b6\u69cb\u4e2d\u7684 view \u7684\uff0cmodel \u8ddf controller \u5247\u6703\u7531\u5f8c\u7aef\u4f86\u8655\u88e1\u3002"),(0,o.kt)("p",null,"\u7528 MVC, MVVM \u7684\u89d2\u5ea6\u4f86\u770b React \uff1a",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://blog.yyisyou.tw/1dddc6d7/"},"https://blog.yyisyou.tw/1dddc6d7/")))}c.isMDXComponent=!0}}]);