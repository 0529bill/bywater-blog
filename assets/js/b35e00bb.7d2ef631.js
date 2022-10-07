"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[3117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,v=m["".concat(u,".").concat(g)]||m[g]||p[g]||i;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7251:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:10},l="[JS] setTimeout & setInterval",o={unversionedId:"Javascript/SetTimout-setInterval",id:"Javascript/SetTimout-setInterval",isDocsHomePage:!1,title:"[JS] setTimeout & setInterval",description:"setTimeout & clearTimeout",source:"@site/docs/Javascript/SetTimout-setInterval.md",sourceDirName:"Javascript",slug:"/Javascript/SetTimout-setInterval",permalink:"/bywater-blog/Javascript/SetTimout-setInterval",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"[JS] Modules & Script",permalink:"/bywater-blog/Javascript/modules"},next:{title:"[JS] functional Programming",permalink:"/bywater-blog/Javascript/fucntionalProgramming"}},u=[{value:"setTimeout &amp; clearTimeout",id:"settimeout--cleartimeout",children:[]},{value:"setInterval",id:"setinterval",children:[]},{value:"Running things regularly.",id:"running-things-regularly",children:[]}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"js-settimeout--setinterval"},"[JS]"," setTimeout & setInterval"),(0,a.kt)("h3",{id:"settimeout--cleartimeout"},"setTimeout & clearTimeout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nsetTimeout(func|code, [delay], [arg1], [arg2], ...)\n\n")),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function sayHi(firstName, lastName) {\n  alert("Hello");\n}\n\nsetTimeout(sayHi, 1000, "Bill", "Lin");\n')),(0,a.kt)("h4",{id:"cleartimeout"},"ClearTimeout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//clearTimeout \u6703\u56de\u50b3\u4e00\u500b 'timerId'\uff0c\u7528\u4f86\u7576\u4f5cclearTimeout\u7684argument\nlet timerId = setTimeout(...);\nclearTimeout(timerId);\n\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setinterval"},"setInterval"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nlet timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)\n\n//clearInterval\n\nclearInterval(timerId)\n\n\n\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"running-things-regularly"},"Running things regularly."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"setTimeout"),(0,a.kt)("li",{parentName:"ol"},"setInterval")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//setInterval\nlet i = 1;\nsetInterval(function () {\n  func(i++);\n}, 100);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//setTimeout\nlet i = 1;\nsetTimeout(function run() {\n  func(i++);\n  setTimeout(run, 100);\n}, 100);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT: setTimeout \u7684\u6642\u9593\u5340\u9694\u6703\u6bd4 setInterval \u4f86\u7684\u6e96\u78ba"),"\n\u56e0\u70ba setInterval \u7684 func \u57f7\u884c\u4e5f\u5728\u8a2d\u5b9a\u7684\u6642\u9593\u5340\u9694\u4e4b\u5167\uff0c\u76f8\u6cd5\u7684\uff0csetTimeout \u7684\u6642\u9593\u5340\u9694\u6bcf\u4e00\u56de\u90fd\u6703\u91cd\u65b0\u8a08\u7b97\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://javascript.info/settimeout-setinterval"},"https://javascript.info/settimeout-setinterval")))}c.isMDXComponent=!0}}]);