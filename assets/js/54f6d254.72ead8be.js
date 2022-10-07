"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[3909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,m=s["".concat(p,".").concat(d)]||s[d]||k[d]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=s;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1201:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const l={sidebar_position:8},i="[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] The Execution Context, Call-stack and Event Loop",r={unversionedId:"ironMan2022/executionContext",id:"ironMan2022/executionContext",isDocsHomePage:!1,title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] The Execution Context, Call-stack and Event Loop",description:"\u4eca\u5929\u662f\u9435\u4eba\u8cfd\u6b63\u6587\u7684\u7b2c\u4e94\u5929\u4e86\uff0c\u5927\u5bb6\u90fd\u9084\u597d\u55ce\uff1f\u4eca\u5929\u5462\u8981\u4f86\u8b1b\u4e00\u500b\u6211\u89ba\u5f97\u5f88\u6709\u8da3\u7684\u984c\u76ee---Event loop\uff0c\u9019\u984c\u5728\u9762\u8a66\u4e2d\u88ab\u554f\u5230\u7684\u6a5f\u6703\u975e\u5e38\u7684\u9ad8\uff0c\u6211\u81ea\u5df1\u5c31\u6709\u5728\u9762\u8a66\u4e2d\u88ab\u554f\u5230\u8d85\u904e\u5169\u6b21\uff01\u6240\u4ee5\u5982\u679c\u5728\u9762\u8a66\u4e2d\u53ef\u4ee5\u628a\u9019\u984c\u56de\u7b54\u5f97\u5f88\u597d\uff0c\u6211\u89ba\u5f97\u662f\u6703\u8b93\u9762\u8a66\u5b98\u773c\u775b\u4e00\u4eae\u7684\uff01\u90a3\u6211\u5011\u5c31\u9032\u5165\u4e3b\u984c\u5427\uff5e",source:"@site/docs/ironMan2022/executionContext.md",sourceDirName:"ironMan2022",slug:"/ironMan2022/executionContext",permalink:"/bywater-blog/ironMan2022/executionContext",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] prototype and prototype chain",permalink:"/bywater-blog/ironMan2022/prototype"},next:{title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] Polyfills and Transpiler",permalink:"/bywater-blog/ironMan2022/polyfills"}},p=[{value:"\u4ec0\u9ebc\u662f Event Loop \u4e8b\u4ef6\u5faa\u74b0",id:"\u4ec0\u9ebc\u662f-event-loop-\u4e8b\u4ef6\u5faa\u74b0",children:[]},{value:"Event Loop \u89e3\u6c7a\u4e86\u4ec0\u9ebc\u554f\u984c\uff1f",id:"event-loop-\u89e3\u6c7a\u4e86\u4ec0\u9ebc\u554f\u984c",children:[]},{value:"The Execution Context",id:"the-execution-context",children:[]},{value:"The Call-stack",id:"the-call-stack",children:[]},{value:"The callback queue",id:"the-callback-queue",children:[]},{value:"The Event Loop and The callback queue",id:"the-event-loop-and-the-callback-queue",children:[]}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u9435\u4eba\u8cfd-2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230-the-execution-context-call-stack-and-event-loop"},"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230]"," The Execution Context, Call-stack and Event Loop"),(0,o.kt)("p",null,"\u4eca\u5929\u662f\u9435\u4eba\u8cfd\u6b63\u6587\u7684\u7b2c\u4e94\u5929\u4e86\uff0c\u5927\u5bb6\u90fd\u9084\u597d\u55ce\uff1f\u4eca\u5929\u5462\u8981\u4f86\u8b1b\u4e00\u500b\u6211\u89ba\u5f97\u5f88\u6709\u8da3\u7684\u984c\u76ee---Event loop\uff0c\u9019\u984c\u5728\u9762\u8a66\u4e2d\u88ab\u554f\u5230\u7684\u6a5f\u6703\u975e\u5e38\u7684\u9ad8\uff0c\u6211\u81ea\u5df1\u5c31\u6709\u5728\u9762\u8a66\u4e2d\u88ab\u554f\u5230\u8d85\u904e\u5169\u6b21\uff01\u6240\u4ee5\u5982\u679c\u5728\u9762\u8a66\u4e2d\u53ef\u4ee5\u628a\u9019\u984c\u56de\u7b54\u5f97\u5f88\u597d\uff0c\u6211\u89ba\u5f97\u662f\u6703\u8b93\u9762\u8a66\u5b98\u773c\u775b\u4e00\u4eae\u7684\uff01\u90a3\u6211\u5011\u5c31\u9032\u5165\u4e3b\u984c\u5427\uff5e"),(0,o.kt)("h2",{id:"\u4ec0\u9ebc\u662f-event-loop-\u4e8b\u4ef6\u5faa\u74b0"},"\u4ec0\u9ebc\u662f Event Loop \u4e8b\u4ef6\u5faa\u74b0"),(0,o.kt)("p",null,"\u56de\u7b54\uff1aEvent Loop \u662f\u4e00\u500b JS \u7684\u6a5f\u5236\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u8655\u7406\u975e\u540c\u6b65\u7684\u52d5\u4f5c\u3002"),(0,o.kt)("h2",{id:"event-loop-\u89e3\u6c7a\u4e86\u4ec0\u9ebc\u554f\u984c"},"Event Loop \u89e3\u6c7a\u4e86\u4ec0\u9ebc\u554f\u984c\uff1f"),(0,o.kt)("p",null,"\u56de\u7b54\uff1aJS \u672c\u8eab\u662f \u55ae\u7dda\u7a0b\u5e8f\uff08single-threaded\uff09\uff0c\u4ee3\u8868\u4e00\u6b21\u53ea\u80fd\u6709\u4e00\u4ef6\u4e8b\u80fd\u88ab\u57f7\u884c\uff0c\u6240\u4ee5\u7576\u51fa\u73fe\u4e00\u500b\u5f88\u5927\u7684\u8a08\u7b97\u7684\u6642\u5019\uff0c\u5c31\u6703\u5c0e\u81f4\u5f8c\u9762\u7684\u8a08\u7b97\u6c92\u8fa6\u6cd5\u88ab\u57f7\u884c\u3002\u800c\u900f\u904e Event Loop \u6211\u5011\u53ef\u4ee5\u89e3\u6c7a\u9019\u500b\u554f\u984c\u3002"),(0,o.kt)("p",null,"\u9762\u8a66\u56de\u7b54\u601d\u8def\uff1a\u56de\u7b54 event loop \u89e3\u6c7a\u7684\u554f\u984c\uff0c\u7136\u5f8c\u5e36\u5230 The Execution Context \u8ddf Call-stack\u3002"),(0,o.kt)("p",null,"\u6c92\u807d\u904e\u9019\u5169\u500b\u540d\u8a5e",(0,o.kt)("inlineCode",{parentName:"p"},"The Execution Context"),"\u8ddf",(0,o.kt)("inlineCode",{parentName:"p"},"The Call-stack"),"\u7684\u8a71\u6c92\u95dc\u4fc2\uff0c\u4e0b\u9762\u6211\u5011\u5c31\u4f86\u8a0e\u8ad6\u9019\u5169\u500b\u6771\u897f\u5427\uff01"),(0,o.kt)("h2",{id:"the-execution-context"},"The Execution Context"),(0,o.kt)("p",null,"\u4f60\u6709\u6c92\u6709\u60f3\u904e\u4e00\u500b\u554f\u984c\uff0c\u7576\u4f60\u5728\u700f\u89bd\u5668\u4e0a\u9762\u8dd1 Js \u5f97\u6642\u5019\uff0c\u80cc\u5730\u88e1\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\u60c5\uff1f\u700f\u89bd\u5668\u662f\u600e\u9ebc\u57f7\u884c\u6211\u5011\u50b3\u9001\u7d66\u4ed6\u7684 Js \u7a0b\u5f0f\u78bc\u7684\uff1f\u6216\u662f\u50cf\u4e0a\u9762\u9019\u6bb5\u7a0b\u5f0f\u78bc\u5728\u57f7\u884c\u6642\uff0c\u5230\u5e95\u700f\u89bd\u5668\u662f\u600e\u9ebc\u53bb\u8dd1\u4ed6\u7684\uff1f"),(0,o.kt)("p",null,"\u8981\u56de\u7b54\u9019\u4e9b\u554f\u984c\uff0c\u6211\u5011\u5fc5\u9808\u5148\u8b1b\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"The Execution Context"),"\u3002"),(0,o.kt)("p",null,"\u7576\u4e00\u6bb5\u7a0b\u5f0f\u78bc\u88ab\u57f7\u884c\u6642\uff0c\u6703\u5148\u7522\u751f \u5168\u5c40\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Execution Context"),"\u3002\u7136\u5f8c \u700f\u89bd\u5668\u5f15\u64ce \u9032\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"creation phase")," \uff0c\u6709\u56db\u4ef6\u4e8b\u60c5\u6703\u767c\u751f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5efa\u7acb \u5168\u5c40 \u7269\u4ef6\uff0c\u5b83\u5728 \u700f\u89bd\u5668 \u4e2d\u88ab\u7a31\u4f5c",(0,o.kt)("inlineCode",{parentName:"li"},"window"),"\uff0c\u5728 Node \u4e2d\u88ab\u7a31\u4f5c",(0,o.kt)("inlineCode",{parentName:"li"},"global")),(0,o.kt)("li",{parentName:"ol"},"\u5efa\u7acb ",(0,o.kt)("inlineCode",{parentName:"li"},"this")," \u4e26\u4e14\u6307\u5411 \u5168\u5c40 \u7269\u4ef6"),(0,o.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u4e00\u500b memory heap \u4f86\u5132\u5b58 \u8b8a\u6578 \u548c \u51fd\u5f0f\u7684 references"),(0,o.kt)("li",{parentName:"ol"},"\u628a \u51fd\u5f0f\u5ba3\u544a\u5f0f (ex, function s()...)\u5132\u5b58\u5728 memory heap \u4e2d\uff0c \u7136\u5f8c\u628a memory heap \u88e1\u9762\u7684 \u8b8a\u6578 \u8ce6\u4e88",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002\u9019\u4e00\u9ede\u883b\u91cd\u8981\u7684\uff0c\u56e0\u70ba\u4e5f\u5c31\u662f\u9019\u6a23\u6240\u4ee5\u6211\u5011\u624d\u80fd\u5728\u5ba3\u544a function \u4e4b\u524d\u5c31\u4f7f\u7528 function")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const a = 10;\n\nfunction text() {\n  return "text";\n}\n')),(0,o.kt)("p",null,"\u6240\u4ee5\u4ee5\u4e0a\u9762\u7684\u7a0b\u5f0f\u78bc\u70ba\u4f8b\uff0c\u9019\u6642\u5019\u6211\u5011\u7684 \u5168\u5c40\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Execution Context")," \u6703\u6709\u4ee5\u4e0b\u5e7e\u500b\u6771\u897f\uff0c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5168\u5c40 \u7269\u4ef6\uff0c\u88e1\u9762\u7684\u503c\u662f window"),(0,o.kt)("li",{parentName:"ol"},"this\uff0c\u4e5f\u6307\u5411 window"),(0,o.kt)("li",{parentName:"ol"},"a\uff0c\u503c\u662f undefined"),(0,o.kt)("li",{parentName:"ol"},"function text")),(0,o.kt)("p",null,"\u4e0d\u77e5\u9053\u5927\u5bb6\u9084\u8a18\u4e0d\u8a18\u5f97 let, const \u548c var \u90a3\u7bc7\u6587\u7ae0\uff0c\u88e1\u9762\u6709\u500b\u4f8b\u5b50\u9577\u9019\u6a23\uff0c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'printName(); //John\n\nfunction printName() {\n  console.log("John");\n}\n')),(0,o.kt)("p",null,"\u7136\u5f8c\u7576\u6642\u6211\u8aaa",(0,o.kt)("inlineCode",{parentName:"p"},"function \u6703\u88ab hoisted\uff0c\u4f46\u662f\u53ef\u4ee5\u88ab\u4f7f\u7528\u3002"),"\uff0c\u73fe\u5728\u4e86\u89e3",(0,o.kt)("inlineCode",{parentName:"p"},"Execution Context"),"\u7684\u6a5f\u5236\u5f8c\uff0c\u6211\u5011\u7d42\u65bc\u77e5\u9053\u70ba\u4ec0\u9ebc function \u53ef\u4ee5\u88ab\u63d0\u524d\u4f7f\u7528\u4e86!\u56e0\u70ba\u5168\u5c40",(0,o.kt)("inlineCode",{parentName:"p"},"The Execution Context"),"\u88ab\u5efa\u7acb\u6642\u5c31\u6703\u5148\u628a function \u5132\u5b58\u5728 memory heap \u4e2d\uff01\uff01"),(0,o.kt)("p",null,"\u56de\u5230\u525b\u525b\u7684\u60c5\u6cc1\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"creation phase"),"\u5b8c\u6210\u5f8c\uff0c\u700f\u89bd\u5668 \u6703\u9032\u5165\u4e0b\u4e00\u500b\u968e\u6bb5-----",(0,o.kt)("inlineCode",{parentName:"p"},"execution phase"),"\u3002"),(0,o.kt)("p",null,"\u5728\u9019\u500b\u968e\u6bb5\uff0c\u7a0b\u5f0f\u78bc\u6703\u88ab\u4e00\u689d\u689d\u7684\u57f7\u884c\uff0c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8b8a\u6578 \u6703\u88ab\u8ce6\u4e88\u503c\uff0c"),(0,o.kt)("li",{parentName:"ol"},"function \u6703\u88ab\u57f7\u884c\uff0c\u4e26\u4e14\u5728\u6bcf\u500b function \u88ab\u57f7\u884c\u6642\uff0c\u700f\u89bd\u5668\u5f15\u7434 \u90fd\u6703 \u5efa\u7acb \u4e00\u500b ",(0,o.kt)("inlineCode",{parentName:"li"},"Function Execution Context")," \uff08\u985e\u4f3c\u4e0a\u9762\u7684 \u5168\u5c40",(0,o.kt)("inlineCode",{parentName:"li"}," Execution Context"),"\uff09\uff0c\u4f46\u662f \u5168\u5c40 \u7269\u4ef6\u6703\u88ab\u6307\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"arguments"),"\u7269\u4ef6\uff0c\u88e1\u9762\u6703\u5132\u5b58\u6240\u6709\u50b3\u9032 function \u7684\u503c\u3002")),(0,o.kt)("p",null,"\u9019\u500b\u968e\u6bb5\u5f8c\uff0c \u5168\u5c40\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Execution Context"),"\u6703\u9577\u9019\u6a23\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5168\u5c40 \u7269\u4ef6\uff0c\u88e1\u9762\u662f window"),(0,o.kt)("li",{parentName:"ol"},"this\uff0c\u4e5f\u6307\u5411 window"),(0,o.kt)("li",{parentName:"ol"},"a\uff0c\u503c\u70ba 10"),(0,o.kt)("li",{parentName:"ol"},"function text")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u700f\u89bd\u5668\u5728\u8dd1 JS \u6a94\u6848\u6642\u6240\u767c\u751f\u7684\u4e8b\u60c5\uff01"),(0,o.kt)("p",null,"\u9019\u6642\u5019\u6709\u500b\u554f\u984c\u4f86\u4e86\uff0c\u7576\u6211\u5011\u51fa\u73fe\u591a\u500b\u5d4c\u5957\u7684\uff08nested)\u51fd\u5f0f\u6642\uff0c\u6211\u5011\u5df2\u7d93\u77e5\u9053\u6703\u89f8\u767c\u591a\u500b",(0,o.kt)("inlineCode",{parentName:"p"},"Function Execution Context"),"\uff0c\u90a3\u700f\u89bd\u5668\u5f15\u64ce\u53c8\u8981\u600e\u9ebc\u53bb\u57f7\u884c\u9019\u4e9b\u51fd\u5f0f\u5462\uff1f\u9019\u5c31\u8981\u8ac7\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"The Event Loop"),"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"callback queue"),"\u4e86\uff01\u4f46\u5728\u90a3\u4e4b\u524d\uff0c\u6211\u5011\u9084\u5148\u9700\u8981\u77e5\u9053\u5169\u500b\u6771\u897f",(0,o.kt)("inlineCode",{parentName:"p"},"The Call-stack"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"The callback queue"),"\u3002"),(0,o.kt)("h2",{id:"the-call-stack"},"The Call-stack"),(0,o.kt)("p",null,": ",(0,o.kt)("inlineCode",{parentName:"p"},"The call-stack")," \u662f\u4e00\u7a2e\u8cc7\u6599\u7d50\u69cb\uff08stack\uff09\u7528\u4f86\u8ffd\u8e64\u548c\u7ba1\u7406",(0,o.kt)("inlineCode",{parentName:"p"},"function execution"),"\u3002"),(0,o.kt)("p",null,"\u5be6\u969b\u60c5\u6cc1\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"The call-stack")," \u4f9d\u7167 Last In First Out \u7684\u898f\u77e9\uff0c\u7576 \u700f\u89bd\u5668\u5f15\u64ce \u57f7\u884c \u5230 \u51fd\u5f0f \u6642\uff0c\u6703\u628a\u8a72 \u51fd\u5f0f push \u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"call-stack")," \u88e1\uff0c\u4e26\u4e14\u5728\u57f7\u884c\u8a72 \u51fd\u5f0f \u6642\uff0c\u6703\u628a\u8a72 \u51fd\u5f0f \u5f9e",(0,o.kt)("inlineCode",{parentName:"p"},"call-stack")," \u4e2d pop \u6389\uff0c"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"call stack",src:n(7483).Z})),(0,o.kt)("h2",{id:"the-callback-queue"},"The callback queue"),(0,o.kt)("p",null,": ",(0,o.kt)("inlineCode",{parentName:"p"},"The callback queue"),"\u662f\u4e00\u7a2e\u8cc7\u6599\u7d50\u69cb queue \u7528\u4f86\u8ffd\u8e64\u8ddf\u7ba1\u7406\u9700\u8981\u88ab\u665a\u9ede\u57f7\u884c\u7684\u4e8b\u4ef6\uff0c\u5305\u542b setTimeout, setInterval \u7b49\u7b49\u3002First-in, First-out"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u9019\u88e1\u53ea\u6709\u7c21\u7565\u8b1b\u89e3 stack \u548c queue\uff0c\u5be6\u969b\u7684\u5be6\u8e10\u65b9\u5f0f\u6709\u8208\u8da3\u7684\u8b80\u8005\u53ef\u4ee5\u4e0a\u7db2\u81ea\u884c\u7814\u7a76\u645f")),(0,o.kt)("h2",{id:"the-event-loop-and-the-callback-queue"},"The Event Loop and The callback queue"),(0,o.kt)("p",null,"\u89e3\u6c7a\u7684\u554f\u984c\uff1a\u8b93 JS \u53ef\u4ee5\u57f7\u884c\u975e\u540c\u6b65\u7684\u52d5\u4f5c\uff08ex, network request\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"event loop",src:n(5932).Z})),(0,o.kt)("p",null,"\u8b1b\u4e86\u9019\u9ebc\u591a\uff0c\u73fe\u5728\u7d42\u65bc\u8b1b\u5230 event loop \u7684\u7cbe\u5f69\u968e\u6bb5\u4e86\uff01",(0,o.kt)("inlineCode",{parentName:"p"},"The event loop"),"\u6703\u53bb\u8ffd\u8e64 ",(0,o.kt)("inlineCode",{parentName:"p"},"call-stack"),"\u4e2d\u9700\u8981\u57f7\u884c \u975e\u540c\u6b65 \u7684 \u51fd\u5f0f,\u7576\u57f7\u884c\u5230\u8a72 \u51fd\u5f0f \u6642\u628a\u4ed6\u4e1f\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"callback queue"),"\u4e2d,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7576 ",(0,o.kt)("inlineCode",{parentName:"li"},"call-stack"),"\u5176\u4ed6 function \u90fd\u57f7\u884c\u5b8c\uff0c\u8b8a\u56de\u7a7a\u7684\u6642\u5019\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8655\u7406 ",(0,o.kt)("inlineCode",{parentName:"li"},"callback queue"),"\u4e2d\u7684 function \u4e1f\u56de\u5230",(0,o.kt)("inlineCode",{parentName:"li"},"call-stack"),"\u4e0a\u4f86\u57f7\u884c\u3002")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"callback queue"),"\u7684\u57f7\u884c\u9806\u5e8f\u70ba\uff1a Microtask > Macrotask"),(0,o.kt)("p",null,"\u5e38\u898b\u7684 microTask: Promise",(0,o.kt)("br",{parentName:"p"}),"\n","\u5e38\u898b\u7684 macroTask: setTimeout, setInterval... (\u8207\u700f\u89bd\u5668\u6216\u96fb\u8166\u5e95\u5c64\u7684\u904b\u4f5c\u8f03\u6709\u95dc\u4fc2)"),(0,o.kt)("p",null,"\u6240\u4ee5\u4f86\u7e3d\u7d50\u4e00\u4e0b\u3002\u4eca\u5929\u5148\u8ac7\u5230\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"execution context"),"\u8ddf\u700f\u89bd\u5668\u5728\u57f7\u884c\u4e2d\u6240\u6709\u7684\u5169\u500b\u968e\u6bb5\uff0c\u5305\u62ec",(0,o.kt)("inlineCode",{parentName:"p"},"creation phase"),"\u8ddf",(0,o.kt)("inlineCode",{parentName:"p"},"execution phase"),"\uff0c\u7136\u5f8c\u6211\u5011\u53c8\u8b1b\u5230\u8981\u89e3\u6c7a\u975e\u540c\u6b65\u554f\u984c\u6211\u5011\u9700\u8981",(0,o.kt)("inlineCode",{parentName:"p"},"call-stack")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"callback-queue"),"\u9019\u5169\u500b\u6771\u897f\uff0c\u6700\u5f8c\u9019\u4e9b\u6240\u7d44\u6210\u7684\u7528\u4f86\u8655\u7406\u975e\u540c\u6b65\u7684\u6a5f\u5236\uff0c\u5c31\u53eb\u505a",(0,o.kt)("inlineCode",{parentName:"p"},"event loop"),"!\u90a3\u4e0b\u9762\u6709\u4e00\u500b\u5c0f\u9762\u8a66\u984c\u76ee\u5c31\u7559\u7d66\u8b80\u8005\u4f86\u5617\u8a66\u770b\u770b\u645f\uff01\u6211\u5011\u660e\u5929\u898b\uff01"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'setTimeout(() => alert("timeout"));\n\nPromise.resolve().then(() => alert("promise"));\n\nalert("global ex. context");\n')),(0,o.kt)("h1",{id:"resources"},"Resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dev.to/thebabscraig/the-javascript-execution-context-call-stack-event-loop-1if1"},"https://dev.to/thebabscraig/the-javascript-execution-context-call-stack-event-loop-1if1"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://pjchender.dev/javascript/note-event-loop-microtask/"},"https://pjchender.dev/javascript/note-event-loop-microtask/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.educative.io/answers/what-is-an-event-loop-in-javascript"},"https://www.educative.io/answers/what-is-an-event-loop-in-javascript")),(0,o.kt)("p",null,"keyword: ",(0,o.kt)("inlineCode",{parentName:"p"},"Global Execution Context"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"creation phase"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"execution phase")))}u.isMDXComponent=!0},7483:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/call_stack-833007078557243f3b9c7af8a4d15da0.jpeg"},5932:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event_loop-3d4445ccfa5d69404ece9d75571d680e.jpeg"}}]);