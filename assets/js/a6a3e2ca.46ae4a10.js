"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1849:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},i="[JS-Basics] Basics",s={unversionedId:"Javascript/Basics/basics",id:"Javascript/Basics/basics",isDocsHomePage:!1,title:"[JS-Basics] Basics",description:"JavaScript \u5171\u6709\u516b\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5206\u522b\u662f Undefined\u3001Null\u3001Boolean\u3001Number\u3001String\u3001Object\u3001Symbol\u3001BigInt\u3002",source:"@site/docs/Javascript/Basics/basics.md",sourceDirName:"Javascript/Basics",slug:"/Javascript/Basics/basics",permalink:"/bywater-blog/Javascript/Basics/basics",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hi! This is my blog!",permalink:"/bywater-blog/"},next:{title:"[JS-Basics] Object's method",permalink:"/bywater-blog/Javascript/Basics/object-method"}},o=[{value:"Heap and Stack",id:"heap-and-stack",children:[]},{value:"null vs undefined",id:"null-vs-undefined",children:[]},{value:"arrow function vs function",id:"arrow-function-vs-function",children:[]},{value:"call, apply and bind",id:"call-apply-and-bind",children:[]},{value:"ES6",id:"es6",children:[]}],c={toc:o};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"js-basics-basics"},"[JS-Basics]"," Basics"),(0,r.kt)("p",null,"JavaScript \u5171\u6709\u516b\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5206\u522b\u662f Undefined\u3001Null\u3001Boolean\u3001Number\u3001String\u3001Object\u3001Symbol\u3001BigInt\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6570\u636e\u53ef\u4ee5\u5206\u4e3a\u539f\u59cb\u6570\u636e\u7c7b\u578b(primitives)\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b(Object)\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6808(stack)\uff1a\u539f\u59cb\u6570\u636e\u7c7b\u578b\uff08string, number, bigint, boolean, symbol, null and undefined\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5806(heap)\uff1a\u5f15\u7528\u6570\u636e\u7c7b\u578b\uff08\u5bf9\u8c61 object\u3001\u6570\u7ec4 array \u548c\u51fd\u6570 function\uff09")),(0,r.kt)("p",null,"\u4e24\u79cd\u7c7b\u578b\u7684\u533a\u522b\u5728\u4e8e\u5b58\u50a8\u4f4d\u7f6e\u7684\u4e0d\u540c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u539f\u59cb\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u5360\u636e\u7a7a\u95f4\u5c0f\u3001\u5927\u5c0f\u56fa\u5b9a\uff0c\u5c5e\u4e8e\u88ab\u9891\u7e41\u4f7f\u7528\u6570\u636e\uff0c\u6240\u4ee5\u653e\u5165\u6808\u4e2d\u5b58\u50a8\uff1b (primitive types => by value)"),(0,r.kt)("li",{parentName:"ul"},"\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u5360\u636e\u7a7a\u95f4\u5927\u3001\u5927\u5c0f\u4e0d\u56fa\u5b9a\u3002\u5982\u679c\u5b58\u50a8\u5728\u6808\u4e2d\uff0c\u5c06\u4f1a\u5f71\u54cd\u7a0b\u5e8f\u8fd0\u884c\u7684\u6027\u80fd\uff1b\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5728\u6808(stack)\u4e2d\u5b58\u50a8\u4e86\u6307\u9488\uff0c\u8be5\u6307\u9488\u6307\u5411\u5806\u4e2d\u8be5\u5b9e\u4f53\u7684\u8d77\u59cb\u5730\u5740\u3002\u5f53\u89e3\u91ca\u5668\u5bfb\u627e\u5f15\u7528\u503c\u65f6\uff0c\u4f1a\u9996\u5148\u68c0\u7d22\u5176\u5728\u6808\u4e2d\u7684\u5730\u5740\uff0c\u53d6\u5f97\u5730\u5740\u540e\u4ece\u5806\u4e2d\u83b7\u5f97\u5b9e\u4f53\u3002(object => by reference)")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"primitives"},"Primitives"),(0,r.kt)("p",null,"(string, number, bigint, boolean, symbol, null and undefined)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javascript.info/symbol"},"Symbol"))),(0,r.kt)("h4",{id:"object"},"Object"),(0,r.kt)("p",null,"(function, array(ordered collections), objects(keyed collections), Map(like object, but allows key to be any type), Set(collection of unique values))"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javascript.info/map-set"},"Map & Set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javascript.info/keys-values-entries"},"Object.keys, values, entries are common agreement to use for data structure, ex,Map,Set,Array,Object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javascript.info/symbol"},"Object's filter,map... method"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"heap-and-stack"},"Heap and Stack"),(0,r.kt)("p",null,"Stack(Static memory allocation)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A stack is a data structure that JavaScript uses to store static data. Static data is data where ",(0,r.kt)("mark",null,"the engine knows the size at compile time"),". In JavaScript, this includes primitive values (strings, numbers, booleans, undefined, and null) and references, which point to objects and functions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"primitive values"),(0,r.kt)("li",{parentName:"ul"},"references, which point to objects and functions")))),(0,r.kt)("p",null,"The stack contains a reference to the object in the heap: The memory of the heap is not ordered in any particular way, which is why we need to keep a reference to it in the stack."),(0,r.kt)("p",null,"Since the engine knows that the size won't change, it will allocate ",(0,r.kt)("mark",null,"a fixed amount of memory for each value"),".\nThe process of allocating memory right before execution is known as ",(0,r.kt)("mark",null,"static memory allocation"),".\nBecause the engine allocates a fixed amount of memory for these values, there is a limit to how large primitive values can be."),(0,r.kt)("p",null,"Heap(Dynamic memory allocation)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The heap is a different space for storing data where JavaScript stores objects and functions and it allocate ",(0,r.kt)("mark",null," a fixed amount of memory ")," for these objects. Instead, more space will be allocated as needed.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"null-vs-undefined"},"null vs undefined"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," is used to describe variables that do not point to a reference."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," is used to define something programmatically empty."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/6604749/what-reason-is-there-to-use-null-instead-of-undefined-in-javascript"},"https://stackoverflow.com/questions/6604749/what-reason-is-there-to-use-null-instead-of-undefined-in-javascript")),(0,r.kt)("p",null,"TLDR; Don't use the undefined primitive. It's a value that the JS compiler will automatically set for you when you declare variables without assignment or if you try to access properties of objects for which there is no reference. On the other hand, use null if and only if you intentionally want a variable to have \"no value\"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"arrow-function-vs-function"},"arrow function vs function"),(0,r.kt)("p",null,"arrow function pros:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"readability")),(0,r.kt)("p",null,"arrow function cons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Do not have this"),(0,r.kt)("li",{parentName:"ol"},"Do not have arguments"),(0,r.kt)("li",{parentName:"ol"},"Can\u2019t be called with new"),(0,r.kt)("li",{parentName:"ol"},"They also don\u2019t have super.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"call-apply-and-bind"},"call, apply and bind"),(0,r.kt)("p",null,":call, apply \u6703\u7acb\u5373\u628a this \u7d81\u5b9a\u5728 call/apply \u7684\u7b2c\u4e00\u500b\u503c\uff0c\u8b93\u51fd\u5f0f\u53ef\u4ee5\u52d5\u614b\u4f7f\u7528 this\u3002\n:bind \u6703\u5efa\u7acb\u65b0\u7684\u51fd\u5f0f\uff0c\u5728\u88ab\u547c\u53eb\u4e4b\u5f8c\u624d\u6703\u7d81\u5b9a\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fun.call(thisArg[, arg1[, arg2","[, ...]","]])"),(0,r.kt)("br",{parentName:"p"}),"\n",":\u8a2d\u5b9a thisArg \u503c\uff0c\u4e26\u4e14\u628a\u8a72 this \u7d81\u5b9a\u5728 thisArg \u4e0a\uff0c\u5f8c\u9762\u7684\u53c3\u6578\u70ba\u539f\u5148 function \u7684 argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var person = {\n  fullName: function () {\n    return this.firstName + " " + this.lastName;\n  },\n};\nvar person1 = {\n  firstName: "Bill",\n  lastName: "Gates",\n};\nvar person2 = {\n  firstName: "Steve",\n  lastName: "Jobs",\n};\nperson.fullName.call(person1); // \u5c06\u8fd4\u56de "Bill Gates"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var person = {\n  fullName: function (city, country) {\n    return this.firstName + " " + this.lastName + "," + city + "," + country;\n  },\n};\nvar person1 = {\n  firstName: "Bill",\n  lastName: "Gates",\n};\nperson.fullName.call(person1, "Seattle", "USA"); //Bill Gates,Seattle,USA\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fun.apply(thisArg, ","[argsArray]",")"),(0,r.kt)("br",{parentName:"p"}),"\n",":\u7528\u6cd5\u548c call \u985e\u4f3c\uff0c\u4f46\u662f\u7b2c\u4e8c\u500b parameter \u662f array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var person = {\n  fullName: function (city, country) {\n    return this.firstName + " " + this.lastName + "," + city + "," + country;\n  },\n};\nvar person1 = {\n  firstName: "Bill",\n  lastName: "Gates",\n};\nperson.fullName.apply(person1, ["Oslo", "Norway"]); //\'Bill Gates,Oslo,Norway\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fun.bind(thisArg[, arg1[, arg2","[, ...]","]])"),(0,r.kt)("br",{parentName:"p"}),"\n",":\u6703\u5efa\u7acb\u65b0\u7684\u51fd\u5f0f\uff0c\u7576\u51fd\u5f0f\u88ab\u547c\u53eb\u6642\uff0c\u6703\u5c07 this \u95dc\u9375\u5b57\u8a2d\u70ba\u7d66\u5b9a\u7684\u53c3\u6578\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\nconst person = {\n  firstName:"John",\n  lastName: "Doe",\n  display: function () {\n    let x = document.getElementById("demo");\n    x.innerHTML = this.firstName + " " + this.lastName;\n  }\n}\n\n//\u6c92\u6709bind Person\u7684\u8a71\uff0c\u5728setTimeout\u5f8c\uff0cdisplay\u7684this\u907a\u5931\uff0c\u8f38\u51fa\u7d50\u679c\u6703\u662fundefined\nlet display = person.display.bind(person);\nsetTimeout(display, 3000);\n//John Doe\n\nhttps://www.w3schools.com/js/js_function_bind.asp\n\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"es6"},"ES6"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://felixgerschau.com/javascript-memory-management/"},"resources"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6940945178899251230"},"resources-ch")))}p.isMDXComponent=!0}}]);