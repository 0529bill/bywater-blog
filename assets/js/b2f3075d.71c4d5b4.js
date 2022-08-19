"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[555],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),b=o,f=m["".concat(c,".").concat(b)]||m[b]||u[b]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9128:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="[JS] Garbage collection \u5783\u573e\u56de\u6536",l={unversionedId:"Javascript/Garbage-collection",id:"Javascript/Garbage-collection",isDocsHomePage:!1,title:"[JS] Garbage collection \u5783\u573e\u56de\u6536",description:":Js \u900f\u904e\u5783\u573e\u56de\u6536\u9019\u500b\u81ea\u52d5\u7684\u6a5f\u5236\u4f86\u78ba\u4fdd memory \u53ef\u4ee5\u6700\u6709\u6548\u7684\u4f7f\u7528\uff0c\u4e5f\u8b93\u5de5\u7a0b\u5e2b\u4e0d\u9700\u8981\u53bb\u64d4\u5fc3\u6216\u662f\u624b\u52d5\u63a7\u5236 memory \u7684\u4f7f\u7528\u3002",source:"@site/docs/Javascript/Garbage-collection.md",sourceDirName:"Javascript",slug:"/Javascript/Garbage-collection",permalink:"/bywater-blog/Javascript/Garbage-collection",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"[JS-Basics] Common Js method/function",permalink:"/bywater-blog/Javascript/Basics/commonMethod"},next:{title:"[JS] Polyfills and transpilers",permalink:"/bywater-blog/Javascript/Polyfills-and-transpilers"}},c=[{value:"GC \u7684\u539f\u5247",id:"gc-\u7684\u539f\u5247",children:[]}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"js-garbage-collection-\u5783\u573e\u56de\u6536"},"[JS]"," Garbage collection \u5783\u573e\u56de\u6536"),(0,o.kt)("p",null,":Js \u900f\u904e\u5783\u573e\u56de\u6536\u9019\u500b\u81ea\u52d5\u7684\u6a5f\u5236\u4f86\u78ba\u4fdd memory \u53ef\u4ee5\u6700\u6709\u6548\u7684\u4f7f\u7528\uff0c\u4e5f\u8b93\u5de5\u7a0b\u5e2b\u4e0d\u9700\u8981\u53bb\u64d4\u5fc3\u6216\u662f\u624b\u52d5\u63a7\u5236 memory \u7684\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"gc-\u7684\u539f\u5247"},"GC \u7684\u539f\u5247"),(0,o.kt)("p",null,":",(0,o.kt)("em",{parentName:"p"},"Reachability"),"\u662f GC \u7684\u4e3b\u8981\u539f\u5247\uff0c\u53ea\u8981\u662f\u8ddf roots \u6709\u95dc\u4fc2\u7684\u5c31\u6703\u88ab\u7e7c\u7e8c\u5132\u5b58\u5728 memory\uff0c\u53cd\u4e4b\u5247\u6703\u88ab GC(\u5f9e memory \u4e2d\u88ab\u4e1f\u68c4\uff0c\u4f86\u91cb\u653e memory)\u3002"),(0,o.kt)("p",null,"Roots \u70ba\u4ee5\u4e0b\u5e7e\u9ede\u7d44\u6210\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6b63\u5728\u57f7\u884c\u7684 function \u8ddf\u5176\u5167\u90e8\u7684\u8b8a\u6578\uff08local parameter\uff09\u548c\u50b3\u5165\u7684\u8b8a\u6578\uff08parameter\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u5b58\u5728\u4ee5\u4e0a\u7684 nested function"),(0,o.kt)("li",{parentName:"ol"},"\u5168\u5c40\u8b8a\u6578\uff08Global variables)"),(0,o.kt)("li",{parentName:"ol"},"\u5176\u4ed6\uff08\u5305\u62ec\u5e95\u90e8\u7684\u8b8a\u6578\u3001function\uff09")),(0,o.kt)("h1",{id:"resources"},"Resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/garbage-collection"},"https://javascript.info/garbage-collection")))}s.isMDXComponent=!0}}]);