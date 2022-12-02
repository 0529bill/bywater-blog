"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,d=u["".concat(i,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6515:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:7},l="[JS] Promise \uff06 Callback",s={unversionedId:"Javascript/promise",id:"Javascript/promise",isDocsHomePage:!1,title:"[JS] Promise \uff06 Callback",description:"callback",source:"@site/docs/Javascript/promise.md",sourceDirName:"Javascript",slug:"/Javascript/promise",permalink:"/bywater-blog/Javascript/promise",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"[JS] Js types \u8fa8\u5225\u578b\u5225\u7684\u65b9\u6cd5",permalink:"/bywater-blog/Javascript/js-type"},next:{title:"[JS] Prototype",permalink:"/bywater-blog/Javascript/prototype"}},i=[{value:"Promise",id:"promise",children:[]},{value:"Promise.resolve vs new Promise",id:"promiseresolve-vs-new-promise",children:[]},{value:"then, catch, finally \u8a9e\u6cd5",id:"then-catch-finally-\u8a9e\u6cd5",children:[]},{value:"Async/await",id:"asyncawait",children:[]},{value:"Fetch",id:"fetch",children:[]},{value:"\u5be6\u8e10 Promise.all",id:"\u5be6\u8e10-promiseall",children:[]},{value:"\u5be6\u8e10 Promise.race",id:"\u5be6\u8e10-promiserace",children:[]}],c={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"js-promise--callback"},"[JS]"," Promise \uff06 Callback"),(0,a.kt)("p",null,"callback"),(0,a.kt)("p",null,"\u89e3\u6c7a\u554f\u984c\uff1a\u975e\u540c\u6b65 asynchronous",(0,a.kt)("br",{parentName:"p"}),"\n","\u7f3a\u9ede\uff1areadability, callback hell",(0,a.kt)("br",{parentName:"p"}),"\n","\u89e3\u6c7a\u8fa6\u6cd5\uff1aPromise"),(0,a.kt)("h3",{id:"promise"},"Promise"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"new Promise( /* executor */ function(resolve, reject) { ... } );")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise.all"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.race")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Promise.all \u591a\u500b Promise \u884c\u70ba\u540c\u6642\u57f7\u884c\uff0c\u5168\u90e8\u5b8c\u6210\u5f8c\u7d71\u4e00\u56de\u50b3\u3002"),(0,a.kt)("li",{parentName:"ol"},"Promise.race \u591a\u500b Promise \u540c\u6642\u57f7\u884c\uff0c\u4f46\u50c5\u56de\u50b3\u7b2c\u4e00\u500b\u5b8c\u6210\u7684\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7576\u57f7\u884c\u5230 promise \u4e2d\u7684 resolve or reject \u5f8c\uff0c\u5f8c\u9762\u7684\u8a9e\u6cd5\u5c31\u4e0d\u6703\u518d\u57f7\u884c\u4e86\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let promise = new Promise(function (resolve, reject) {\n  resolve(1); //\u57f7\u884c\u6210\u529f\uff0c\u4e0b\u9762\u7684\u8a9e\u6cd5\u4e0d\u6703\u7e7c\u7e8c\u57f7\u884c\u3002\n\n  setTimeout(() => resolve(2), 1000);\n});\n\npromise.then(alert); // 1\n")),(0,a.kt)("h3",{id:"promiseresolve-vs-new-promise"},"Promise.resolve vs new Promise"),(0,a.kt)("p",null,"Promise.resolve will create a promise which is already resolved, whereas new Promise(resolve) creates a promise which is neither resolved nor rejected."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/34014414/are-promise-resolve-and-new-promiseresolve-interchangeable"},"https://stackoverflow.com/questions/34014414/are-promise-resolve-and-new-promiseresolve-interchangeable")),(0,a.kt)("h3",{id:"then-catch-finally-\u8a9e\u6cd5"},"then, catch, finally \u8a9e\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// then, catch\nlet promise = new Promise(function (resolve, reject) {\n  setTimeout(() => reject(new Error("Whoops!")), 1000);\n});\n\n// reject runs the second function in .then\npromise.then(\n  (result) => alert(result), // doesn\'t run\n  (error) => alert(error) // shows "Error: Whoops!" after 1 second\n);\n')),(0,a.kt)("p",null,"finally: \u7528\u65bc\u8655\u7406\u984d\u5916\u7684\u72c0\u6cc1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\n//finally\nnew Promise((resolve, reject) => {\n  /* do something that takes time, and then call resolve or maybe reject */\n})\n  // runs when the promise is settled, doesn't matter successfully or not\n  .finally(() => stop loading indicator)\n  // so the loading indicator is always stopped before we go on\n  .then(result => show result, err => show error)\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"finally \u6c92\u6709 arguments\u3002"),(0,a.kt)("li",{parentName:"ol"},"finally \u6703 ignore return \u7e7c\u7e8c\u5f80\u4e0b\u4e00\u968e\u8d70\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"asyncawait"},"Async/await"),(0,a.kt)("p",null,":\u66f4\u76f4\u89c0\u7684\u65b9\u5f0f\u4f86\u8655\u7406 Promise"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function wait() {\n  await new Promise((resolve) => setTimeout(resolve, 1000));\n\n  return 10;\n}\n\nfunction f() {\n  // shows 10 after 1 second\n  wait().then((result) => alert(result));\n}\n\nf();\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fetch"},"Fetch"),(0,a.kt)("p",null,":\u7528 Fetch \u4f86\u8655\u7406 call api \u9700\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let response = await fetch("/article/fetch/post/user", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json;charset=utf-8",\n  },\n  body: JSON.stringify(user),\n});\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u5be6\u8e10-promiseall"},"\u5be6\u8e10 Promise.all"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function promiseAll(values) {\n  if (!Array.isArray(values)) return;\n  return new Promise((resolve, reject) => {\n    let results = [];\n    let completed = 0;\n\n    values.forEach((value, index) => {\n      Promise.resolve(value)\n        .then((result) => {\n          results[index] = result;\n          completed += 1;\n\n          if (completed == values.length) {\n            resolve(results);\n          }\n        })\n        .catch((err) => reject(err));\n    });\n  });\n}\n")),(0,a.kt)("h3",{id:"\u5be6\u8e10-promiserace"},"\u5be6\u8e10 Promise.race"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const PromiseRace = (iterable) => {\n  return new Promise((resolve, reject) => {\n    for (const item of iterable) {\n      Promise.resolve(item).then(resolve).catch(reject);\n    }\n  });\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://javascript.info/async-await"},"https://javascript.info/async-await"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://javascript.info/fetch"},"https://javascript.info/fetch"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/140"},"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/140")),(0,a.kt)("p",null,"ajax, xml",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html"},"https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html")))}p.isMDXComponent=!0}}]);