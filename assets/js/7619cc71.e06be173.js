"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[6445],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1108:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:9},a="[JS] Modules, Script and module export, export default",l={unversionedId:"Javascript/modules",id:"Javascript/modules",isDocsHomePage:!1,title:"[JS] Modules, Script and module export, export default",description:"\u4ec0\u9ebc\u662f module?",source:"@site/docs/Javascript/modules.md",sourceDirName:"Javascript",slug:"/Javascript/modules",permalink:"/bywater-blog/Javascript/modules",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"[JS] Deep copy & Shallow copy",permalink:"/bywater-blog/Javascript/deep-shallow-copy"},next:{title:"[JS] setTimeout & setInterval",permalink:"/bywater-blog/Javascript/SetTimout-setInterval"}},i=[{value:"\u4ec0\u9ebc\u662f module?",id:"\u4ec0\u9ebc\u662f-module",children:[]},{value:"\u6b77\u53f2",id:"\u6b77\u53f2",children:[]},{value:"\u70ba\u4ec0\u9ebc\u8981 modules?",id:"\u70ba\u4ec0\u9ebc\u8981-modules",children:[]},{value:"common js vs es module",id:"common-js-vs-es-module",children:[]},{value:"ES6 module \u7528\u9014?",id:"es6-module-\u7528\u9014",children:[]},{value:"module \u4f7f\u7528\u65b9\u6cd5?",id:"module-\u4f7f\u7528\u65b9\u6cd5",children:[]},{value:"Defer vs Async",id:"defer-vs-async",children:[{value:"Defer",id:"defer",children:[]},{value:"Async",id:"async",children:[]}]},{value:"Module Exports vs. Export Default?",id:"module-exports-vs-export-default",children:[{value:"How can I use an ES6 import in Node.js?",id:"how-can-i-use-an-es6-import-in-nodejs",children:[]}]},{value:"Resources",id:"resources",children:[]}],p={toc:i};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"js-modules-script-and-module-export-export-default"},"[JS]"," Modules, Script and module export, export default"),(0,o.kt)("h2",{id:"\u4ec0\u9ebc\u662f-module"},"\u4ec0\u9ebc\u662f module?"),(0,o.kt)("p",null,":module \u53ea\u662f\u4e00\u500b\u6587\u4ef6\uff0c\u4e00\u500b script."),(0,o.kt)("h2",{id:"\u6b77\u53f2"},"\u6b77\u53f2"),(0,o.kt)("p",null,"\uff1a\u904e\u53bb\u6709 commonjs \u7d66 nodejs server \u7aef\u4f7f\u7528\uff0cbrowser \u7aef\u5247\u6709 AMD\uff0c\u4f46\u662f\u5728 ES6 module \u51fa\u73fe\u4e4b\u5f8c\uff0c\u5176\u4ed6 module \u6162\u6162\u6d88\u5931\u3002"),(0,o.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u8981-modules"},"\u70ba\u4ec0\u9ebc\u8981 modules?"),(0,o.kt)("p",null,"JavaScript \u53ef\u4ee5\u505a\u7684\u4e8b\u60c5\u8d8a\u4f86\u8d8a\u591a\uff0c\u6240\u4ee5\u900f\u904e\u6a21\u7d44\u5316\u7684\u6982\u5ff5\u4f86\u8b93\u5404\u500b Js file \u7368\u7acb\u3002"),(0,o.kt)("h2",{id:"common-js-vs-es-module"},"common js vs es module"),(0,o.kt)("p",null,"\u52d5\u614b\u5f15\u5165\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n","common.js => \u53ef\u4ee5\u52d5\u614b\u5f15\u5165\nes module => \u975c\u614b\u5f15\u5165\uff0c\u6703\u628a\u5f15\u5165\u63d0\u5347\u5230 file \u958b\u982d\u8655\u3002"),(0,o.kt)("p",null,"\u540c\u6b65/\u975e\u540c\u6b65\u5f15\u5165\ncommon.js => \u540c\u6b65\u5f15\u5165\uff08\u5c0d\u5927\u578b\u7db2\u7ad9\u53ef\u80fd\u9020\u6210 blocking\uff09\nes module => \u975e\u540c\u6b65\u5f15\u5165"),(0,o.kt)("p",null,"\u6613\u8b80\u6027\uff1a\nes module \u52dd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\n// common.js\u52d5\u614b\u5f15\u5165\nif(user.length > 0){\n   const userDetails = require(\u2018./userDetails.js\u2019);\n  // Do something ..\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/commonjs-vs-es-modules-node-js/"},"https://blog.logrocket.com/commonjs-vs-es-modules-node-js/"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6938581764432461854"},"https://juejin.cn/post/6938581764432461854"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://tempura-good-good.coderbridge.io/2022/03/04/commonjs-&-es-module/"},"https://tempura-good-good.coderbridge.io/2022/03/04/commonjs-&-es-module/")),(0,o.kt)("h2",{id:"es6-module-\u7528\u9014"},"ES6 module \u7528\u9014?"),(0,o.kt)("p",null,"\xa0","\nmodule \u8b93\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),"\u8a9e\u6cd5\uff0c\u4f86\u628a JS \u5207\u5206\u6210\u500b\u81ea\u7684 module\uff0c\u4f86\u89e3\u6c7a\u9047\u5230\u5927\u578b codebase\uff0c\u6709\u5f88\u591a function\u3001\u8b8a\u6578\u800c\u8b8a\u5f97\u96e3\u4ee5\u7ba1\u7406\u7684\u72c0\u6cc1\u3002\n\u9664\u6b64\u4e4b\u5916 module \u9084\u6709\u5e7e\u9805\u7528\u9014\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deferred by default\uff0c\u4ee3\u8868 script \u6703\u7b49\u5230 HTML \u8dd1\u5b8c\u5f8c\u624d\u57f7\u884c\u3002"),(0,o.kt)("li",{parentName:"ol"},"script \u52a0\u4e0a ",(0,o.kt)("inlineCode",{parentName:"li"},"async"),"\u7684\u8a71\uff0cinline scripts \u6703\u8b8a\u6210\u975e\u540c\u6b65\uff0c\u4ee3\u8868\u4ed6\u6703\u5728\u8a72 inline scripts \u6e96\u5099\u597d\u5f8c\u76f4\u63a5\u57f7\u884c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u91cd\u8907\u5f15\u5165\u6703\u547c\u7565\u7b2c\u4e00\u500b\u4e4b\u5f8c\u7684\u5f15\u5165\uff0c\u4f86\u907f\u514d\u91cd\u8907\u5f15\u5165\u7684\u72c0\u6cc1\u3002"),(0,o.kt)("li",{parentName:"ol"},"module \u6703\u81ea\u52d5\u958b\u555f ",(0,o.kt)("inlineCode",{parentName:"li"},"stirct mode"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6bcf\u500b module \u6703\u6709\u81ea\u5df1\u7684 scope\u3002")),(0,o.kt)("h2",{id:"module-\u4f7f\u7528\u65b9\u6cd5"},"module \u4f7f\u7528\u65b9\u6cd5?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<script type="module" src=XXX>\n\n<\/script>\n')),(0,o.kt)("h2",{id:"defer-vs-async"},"Defer vs Async"),(0,o.kt)("p",null,"\u89e3\u6c7a\u554f\u984c\uff1a\u50b3\u7d71\u700f\u89bd\u5668\u6703\u4e00\u884c\u884c\u8b80\u53bb HTML,\u7576\u8b80\u5230 script \u6642\u5c31\u6703\u505c\u6b62\u5efa\u7acb DOM,\u7136\u5f8c\u6703\u53bb\u99ac\u4e0a\u57f7\u884c script,\u7d50\u675f\u5f8c\u624d\u80fd\u56de\u53bb\u5efa\u7acb DOM,\u9020\u6210 1. script \u53ef\u80fd\u7121\u6cd5\u6293\u5230 DOM(\u56e0\u70ba\u7576\u4e0b DOM \u9084\u672a\u5efa\u7acb) 2.\u5982\u679c\u9047\u5230\u5927\u578b script,\u756b\u9762\u6703\u5361\u4f4f\uff0c\u5c0e\u81f4\u4f7f\u7528\u8005\u9ad4\u9a57\u5f88\u7cdf\u3002"),(0,o.kt)("h3",{id:"defer"},"Defer"),(0,o.kt)("p",null,":\u57f7\u884c\u5230 script \u6642\u6703\u7e7c\u7e8c\u5efa\u7acb DOM,\u5728 DOM \u5efa\u7acb\u5b8c\u6210\u5f8c\u6750\u6703\u53bb\u57f7\u884c\u8a72 Script \u6216\u662f handlers.",(0,o.kt)("br",{parentName:"p"}),"\n",":module \u662f\u7528\u985e\u4f3c defer \u8f09\u5165\u7684\u65b9\u5f0f\uff0c\u6703\u7b49\u5230 DOM \u90fd\u5efa\u7acb\u5b8c\u6210\u5f8c\uff0c\u624d\u6703\u53bb\u57f7\u884c script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\n<script>\n  document.addEventListener('DOMContentLoaded', () => alert(\"DOM ready after defer!\"));\n<\/script>\n\n<script defer src=\"https://javascript.info/article/script-async-defer/long.js?speed=1\"><\/script>\n\n\n//1. DOM handler 'DOMContentLoaded'\u7b49\u5230defer script\u8dd1\u5b8c\u4e4b\u5f8c\u624d\u57f7\u884c\u3002\n")),(0,o.kt)("h3",{id:"async"},"Async"),(0,o.kt)("p",null,":\u57f7\u884c\u5230\u8a72 script,\u5c31\u6703\u53bb\u8dd1\u8a72 script,\u8dd1\u5b8c\u5f8c\u76f4\u63a5\u57f7\u884c\u3002\n:\u7528\u9014\uff1a\u9069\u5408\u7528\u5728 GA,\u6216\u662f\u5176\u4ed6\u4e0d\u6703\u5f71\u97ff\u4f7f\u7528\u8005\u9ad4\u9a57\u7684\u5730\u65b9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\x3c!-- Google Analytics is usually added like this --\x3e\n<script async src="https://google-analytics.com/analytics.js"><\/script>\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gcdeng.com/blog/script-tag-async-defer-attributes"},"https://gcdeng.com/blog/script-tag-async-defer-attributes")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/modules-intro"},"https://javascript.info/modules-intro"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/script-async-defer"},"https://javascript.info/script-async-defer")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"module-exports-vs-export-default"},"Module Exports vs. Export Default?"),(0,o.kt)("p",null,"require: Node.js \u548c ES6 \u90fd\u652f\u63f4\u7684\u5f15\u5165\nexport / import : \u53ea\u6709 ES6 \u652f\u63f4\u7684\u5c0e\u51fa\u5f15\u5165\nmodule.exports / exports: \u53ea\u6709 Node.js \u652f\u63f4\u7684\u5c0e\u51fa"),(0,o.kt)("h3",{id:"how-can-i-use-an-es6-import-in-nodejs"},"How can I use an ES6 import in Node.js?"),(0,o.kt)("h4",{id:"nodejs--v13"},"Node.js >= v13"),(0,o.kt)("p",null,"It's very simple in Node.js 13 and above. You need to either:"),(0,o.kt)("p",null,'Save the file with .mjs extension, or\nAdd { "type": "module" } in the nearest package.json.\nYou only need to do one of the above to be able to use ECMAScript modules.'),(0,o.kt)("h4",{id:"nodejs--v12"},"Node.js <= v12"),(0,o.kt)("p",null,"If you are using Node.js version 9.6 - 12, save the file with ES6 modules with .mjs extension and run it like:"),(0,o.kt)("p",null,"node --experimental-modules my-app.mjs"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://israynotarray.com/javascript/20210424/616364031/"},"https://israynotarray.com/javascript/20210424/616364031/"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000010426778"},"https://segmentfault.com/a/1190000010426778"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js"},"https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js")))}c.isMDXComponent=!0}}]);