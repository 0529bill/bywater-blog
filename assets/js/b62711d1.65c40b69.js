"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=p(n),d=o,m=k["".concat(c,".").concat(d)]||k[d]||u[d]||r;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3021:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:3},l="[JS] The Execution Context, Call-stack and Event Loop",i={unversionedId:"Javascript/eventLoop",id:"Javascript/eventLoop",isDocsHomePage:!1,title:"[JS] The Execution Context, Call-stack and Event Loop",description:"\u89e3\u6c7a\u7684\u554f\u984c\uff1a JS \u672c\u8eab\u662f single threaded,\u4ee3\u8868\u4e00\u6b21\u53ea\u80fd\u6709\u4e00\u500b function \u88ab\u57f7\u884c\u3002",source:"@site/docs/Javascript/eventLoop.md",sourceDirName:"Javascript",slug:"/Javascript/eventLoop",permalink:"/bywater-blog/Javascript/eventLoop",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"[JS] Js types \u8fa8\u5225\u578b\u5225\u7684\u65b9\u6cd5",permalink:"/bywater-blog/Javascript/js-type"},next:{title:"[JS] let, const vs var, Hoisting",permalink:"/bywater-blog/Javascript/let-const-var-hoisting"}},c=[{value:"The Execution Context",id:"the-execution-context",children:[]},{value:"The Call-stack",id:"the-call-stack",children:[]},{value:"The Event Loop and The callback queue",id:"the-event-loop-and-the-callback-queue",children:[]}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"js-the-execution-context-call-stack-and-event-loop"},"[JS]"," The Execution Context, Call-stack and Event Loop"),(0,o.kt)("p",null,"\u89e3\u6c7a\u7684\u554f\u984c\uff1a JS \u672c\u8eab\u662f single threaded,\u4ee3\u8868\u4e00\u6b21\u53ea\u80fd\u6709\u4e00\u500b function \u88ab\u57f7\u884c\u3002"),(0,o.kt)("h2",{id:"the-execution-context"},"The Execution Context"),(0,o.kt)("p",null,"\u7576\u7a0b\u5f0f\u78bc\u88ab\u57f7\u884c\u6642\uff0c\u6703\u7522\u751f ",(0,o.kt)("inlineCode",{parentName:"p"},"Global Execution Context"),"\u3002\u7136\u5f8c engine \u9032\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"creation phase")," \uff0c\u56db\u4ef6\u4e8b\u60c5\u6703\u767c\u751f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5efa\u7acb global \u7269\u4ef6\uff0c\u5728 browser \u4e2d\u88ab\u7a31\u4f5c",(0,o.kt)("inlineCode",{parentName:"li"},"window"),"\uff0c\u5728 Node \u4e2d\u88ab\u7a31\u4f5c",(0,o.kt)("inlineCode",{parentName:"li"},"global")),(0,o.kt)("li",{parentName:"ol"},"create ",(0,o.kt)("inlineCode",{parentName:"li"},"this")," \u4e26\u4e14\u8207 global \u7269\u4ef6 binding"),(0,o.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u4e00\u500b memory heap \u4f86\u5132\u5b58 variables \u548c function references",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("a",{parentName:"li",href:"/bywater-blog/Javascript/Basics/basics"},"memory heap \u7684\u6587\u7ae0")),(0,o.kt)("li",{parentName:"ol"},"\u628a function declarations (function s()...)\u5132\u5b58\u5728 memory heap \u7136\u5f8c\u628a\u88e1\u9762\u7684 variable \u8ce6\u4e88",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"\u5b8c\u6210\u5f8c\uff0cengine \u6703\u9032\u5165\u4e0b\u4e00\u500b\u968e\u6bb5",(0,o.kt)("inlineCode",{parentName:"p"},"execution phase"),"\u3002"),(0,o.kt)("p",null,"\u5728\u9019\u500b\u968e\u6bb5\uff0c\u7a0b\u5f0f\u78bc\u6703\u88ab\u4e00\u689d\u689d\u7684\u57f7\u884c\uff0c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"variable \u6703\u88ab\u8ce6\u4e88\u503c\uff0c"),(0,o.kt)("li",{parentName:"ol"},"function \u5247\u6703\u88ab\u57f7\u884c\uff0c\u4e26\u4e14\u5728\u6bcf\u500b function \u88ab\u57f7\u884c\u6642\uff0cengine \u90fd\u6703 create \u4e00\u500b ",(0,o.kt)("inlineCode",{parentName:"li"},"Function Execution Context")," \uff08\u985e\u4f3c\u4e0a\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"Global Execution Context"),"\uff09\uff0c\u4f46\u662f global \u7269\u4ef6\u6703\u88ab\u6307\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"arguments"),"\u7269\u4ef6\uff0c\u88e1\u9762\u6703\u5132\u5b58\u6240\u6709\u50b3\u9032 function \u7684\u503c\u3002")),(0,o.kt)("p",null,"keyword: ",(0,o.kt)("inlineCode",{parentName:"p"},"Global Execution Context"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"creation phase"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"execution phase")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7576\u51fa\u73fe\u591a\u500b function,\u89f8\u767c\u591a\u500b ",(0,o.kt)("inlineCode",{parentName:"strong"},"Function Execution Context"),"\u6642\uff0cengine \u53c8\u8981\u600e\u9ebc\u8655\u7406\u5462\uff1f")),(0,o.kt)("h2",{id:"the-call-stack"},"The Call-stack"),(0,o.kt)("p",null,": ",(0,o.kt)("inlineCode",{parentName:"p"},"The call-stack")," \u662f\u4e00\u7a2e\u8cc7\u6599\u7d50\u69cb\uff08stack\uff09\u7528\u4f86\u8ffd\u8e64\u548c\u7ba1\u7406",(0,o.kt)("inlineCode",{parentName:"p"},"function execution"),"\u3002"),(0,o.kt)("p",null,"\u5be6\u969b\u60c5\u6cc1\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"The call-stack")," \u4f9d\u7167 Last In First Out \u7684\u898f\u77e9\uff0c\u7576 engine call \u5230 function \u6642\uff0c\u6703\u628a\u8a72 function push \u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"call-stack")," \u88e1\uff0c\u4e26\u4e14\u5728\u57f7\u884c\u8a72 function \u6642\uff0c\u6703\u628a\u8a72 function \u5f9e",(0,o.kt)("inlineCode",{parentName:"p"},"call-stack")," \u4e2d pop \u6389\uff0c"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"call stack",src:n(8354).Z})),(0,o.kt)("p",null,"Example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function thirdFunc() {\n  console.log("Greetings from thirdFunc()");\n}\n\nfunction secondFunc() {\n  thirdFunc();\n  console.log("Greetings from secondFunc()");\n}\n\nfunction firstFunc() {\n  secondFunc();\n  console.log("Greetings from firstFunc()");\n}\n\nfirstFunc();\n\n// Greetings from thirdFunc()\n// Greetings from secondFunc()\n// Greetings from firstFunc()\n')),(0,o.kt)("h2",{id:"the-event-loop-and-the-callback-queue"},"The Event Loop and The callback queue"),(0,o.kt)("p",null,"\u89e3\u6c7a\u7684\u7269\u984c\uff1a\u8b93 JS \u53ef\u4ee5\u57f7\u884c\u975e\u540c\u6b65\u7684\u52d5\u4f5c\uff08ex, network request\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"event loop",src:n(8753).Z})),(0,o.kt)("p",null,"\u5be6\u969b\u60c5\u6cc1\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"The event loop"),"\u8ffd\u8e64 ",(0,o.kt)("inlineCode",{parentName:"p"},"call-stack"),"\u4e2d\u9700\u8981\u57f7\u884c asynchronous \u7684 function,\u7576\u57f7\u884c\u5230\u8a72 function \u6642\u628a\u4ed6\u4e1f\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"callback queue"),"\u4e2d\uff08First-in, First-out),"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7576 ",(0,o.kt)("inlineCode",{parentName:"li"},"call-stack"),"\u5176\u4ed6 function \u90fd\u57f7\u884c\u5b8c\uff0c\u8b8a\u56de\u7a7a\u7684\u6642\u5019\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8655\u7406 ",(0,o.kt)("inlineCode",{parentName:"li"},"callback queue"),"\u4e2d\u7684 function \u4e1f\u56de\u5230",(0,o.kt)("inlineCode",{parentName:"li"},"call-stack"),"\u4e0a\u4f86\u57f7\u884c\u3002")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"callback queue"),"\u7684\u57f7\u884c\u9806\u5e8f\u70ba\uff1a Microtask > Macrotask"),(0,o.kt)("p",null,"\u5e38\u898b\u7684 microTask: Promise",(0,o.kt)("br",{parentName:"p"}),"\n","\u5e38\u898b\u7684 macroTask: setTimeout, setInterval... (\u8207\u700f\u89bd\u5668\u6216\u96fb\u8166\u5e95\u5c64\u7684\u904b\u4f5c\u8f03\u6709\u95dc\u4fc2)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'setTimeout(() => alert("timeout"));\n\nPromise.resolve().then(() => alert("promise"));\n\nalert("global ex. context");\n\n// global ex. context\n// promise\n// timeout\n')),(0,o.kt)("h1",{id:"resources"},"Resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dev.to/thebabscraig/the-javascript-execution-context-call-stack-event-loop-1if1"},"https://dev.to/thebabscraig/the-javascript-execution-context-call-stack-event-loop-1if1"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://pjchender.dev/javascript/note-event-loop-microtask/"},"https://pjchender.dev/javascript/note-event-loop-microtask/")))}s.isMDXComponent=!0},8354:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/call_stack-833007078557243f3b9c7af8a4d15da0.jpeg"},8753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event_loop-3d4445ccfa5d69404ece9d75571d680e.jpeg"}}]);