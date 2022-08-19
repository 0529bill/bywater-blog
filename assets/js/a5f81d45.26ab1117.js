"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,g=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2258:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:11},i="[JS] functional Programming",l={unversionedId:"Javascript/fucntionalProgramming",id:"Javascript/fucntionalProgramming",isDocsHomePage:!1,title:"[JS] functional Programming",description:"\u4ec0\u9ebc\u662f functional programming(FP)",source:"@site/docs/Javascript/fucntionalProgramming.md",sourceDirName:"Javascript",slug:"/Javascript/fucntionalProgramming",permalink:"/bywater-blog/Javascript/fucntionalProgramming",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"[JS] setTimeout & setInterval",permalink:"/bywater-blog/Javascript/SetTimout-setInterval"},next:{title:"[JS] DOM",permalink:"/bywater-blog/Javascript/DOM"}},c=[{value:"\u4ec0\u9ebc\u662f functional programming(FP)",id:"\u4ec0\u9ebc\u662f-functional-programmingfp",children:[]},{value:"FP \u4e2d\u7684\u4e00\u4e9b\u6982\u5ff5",id:"fp-\u4e2d\u7684\u4e00\u4e9b\u6982\u5ff5",children:[]}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"js-functional-programming"},"[JS]"," functional Programming"),(0,a.kt)("h3",{id:"\u4ec0\u9ebc\u662f-functional-programmingfp"},"\u4ec0\u9ebc\u662f functional programming(FP)"),(0,a.kt)("p",null,"FP \u662f\u7a0b\u5f0f\u8a2d\u8a08\u5178\u7bc4\uff08programming paradigm\uff09\u4e2d\u7684\u4e00\u7a2e\uff0c\u5229\u7528 pure function \u4f86\u6e1b\u5c11 bug \u548c\u5beb\u51fa\u66f4\u5bb9\u6613\u95b1\u8b80\u7684\u7a0b\u5f0f\u78bc\u3002"),(0,a.kt)("h3",{id:"fp-\u4e2d\u7684\u4e00\u4e9b\u6982\u5ff5"},"FP \u4e2d\u7684\u4e00\u4e9b\u6982\u5ff5"),(0,a.kt)("h4",{id:"pure-functions"},"Pure functions"),(0,a.kt)("p",null,":",(0,a.kt)("em",{parentName:"p"},"\u4e0d\u6703\u7522\u751f side effects \u7684\u51fd\u5f0f\uff0c\u4e00\u6a23\u7684 input\uff0c\u6703\u6c38\u9060\u5f97\u5230\u53ef\u4ee5\u9810\u6e2c\u7684 output\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//pure function\nfunction sayGreeting(name) {\n  return `Hello ${name}`;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let greeting = "Hello";\n\nfunction sayGreeting(name) {\n  return `${greeting} ${name}`;\n}\n\n//\u56e0\u70ba\u7576greeting\u6539\u8b8a\u6642\uff0coutput\u4e5f\u6703\u8ddf\u8457\u6539\u8b8a\n')),(0,a.kt)("p",null,"\u5e38\u898b\u7684 side effect:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u66f4\u6539\uff08mutate\uff09input"),(0,a.kt)("li",{parentName:"ol"},"\u66f4\u65b0 DOM"),(0,a.kt)("li",{parentName:"ol"},"console.log"),(0,a.kt)("li",{parentName:"ol"},"call api")),(0,a.kt)("h4",{id:"higher-order-functionhof"},"Higher-order function(HOF)"),(0,a.kt)("p",null,":",(0,a.kt)("em",{parentName:"p"},"A function that takes a function as an argument, or returns a function as a result")),(0,a.kt)("p",null,"\u8209\u4f8b\uff1a\nArray.prototype.map, Array.prototype.forEach"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [1, 2, 3];\n\narr.map(function (value) {\n  console.log(value);\n});\n")))}u.isMDXComponent=!0}}]);