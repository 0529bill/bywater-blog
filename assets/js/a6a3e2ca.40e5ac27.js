"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[4641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1849:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="[JS-Basics] Basics",o={unversionedId:"Javascript/Basics/basics",id:"Javascript/Basics/basics",isDocsHomePage:!1,title:"[JS-Basics] Basics",description:"JavaScript \u5171\u6709\u516b\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5206\u522b\u662f Undefined\u3001Null\u3001Boolean\u3001Number\u3001String\u3001Object\u3001Symbol\u3001BigInt\u3002",source:"@site/docs/Javascript/Basics/basics.md",sourceDirName:"Javascript/Basics",slug:"/Javascript/Basics/basics",permalink:"/bywater-blog/Javascript/Basics/basics",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hi!\u6211\u662f bywater,\u9019\u662f\u6211\u7684 tech blog!",permalink:"/bywater-blog/"},next:{title:"[JS-Basics] Object's method",permalink:"/bywater-blog/Javascript/Basics/object-method"}},s=[{value:"Heap and Stack",id:"heap-and-stack",children:[]},{value:"Type coercion \u5f37\u5236\u8f49\u578b",id:"type-coercion-\u5f37\u5236\u8f49\u578b",children:[{value:"+:\u6703\u8f49\u6210 string",id:"\u6703\u8f49\u6210-string",children:[]},{value:"-:\u6703\u88ab\u8f49\u70ba number,\u5982\u679c\u4e0d\u884c\u8f49\u6210\u6578\u5b57\u7684\u8a71\u7d50\u679c\u6703\u662f NaN",id:"-\u6703\u88ab\u8f49\u70ba-number\u5982\u679c\u4e0d\u884c\u8f49\u6210\u6578\u5b57\u7684\u8a71\u7d50\u679c\u6703\u662f-nan",children:[]}]},{value:"null vs undefined",id:"null-vs-undefined",children:[{value:"type null vs undefined",id:"type-null-vs-undefined",children:[]}]},{value:"arrow function vs function",id:"arrow-function-vs-function",children:[]},{value:"call, apply and bind",id:"call-apply-and-bind",children:[]},{value:"Event delegation \u4e8b\u4ef6\u59d4\u6d3e &amp; addEventListener",id:"event-delegation-\u4e8b\u4ef6\u59d4\u6d3e--addeventlistener",children:[{value:"\u70ba\u4ec0\u9ebc\u9700\u8981 Event delegation?",id:"\u70ba\u4ec0\u9ebc\u9700\u8981-event-delegation",children:[]},{value:"e.stopPropagation vs preventDefault",id:"estoppropagation-vs-preventdefault",children:[]},{value:"addEventListener:document.addEventListener(event, function, Capture)",id:"addeventlistenerdocumentaddeventlistenerevent-function-capture",children:[]}]},{value:"Strict Mode \u56b4\u683c\u6a21\u5f0f",id:"strict-mode-\u56b4\u683c\u6a21\u5f0f",children:[]},{value:"this",id:"this",children:[]},{value:"ES6",id:"es6",children:[]}],p={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"js-basics-basics"},"[JS-Basics]"," Basics"),(0,r.kt)("p",null,"JavaScript \u5171\u6709\u516b\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5206\u522b\u662f Undefined\u3001Null\u3001Boolean\u3001Number\u3001String\u3001Object\u3001Symbol\u3001BigInt\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6570\u636e\u53ef\u4ee5\u5206\u4e3a\u539f\u59cb\u6570\u636e\u7c7b\u578b(primitives)\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b(Object)\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6808(stack)\uff1a\u539f\u59cb\u6570\u636e\u7c7b\u578b\uff08string, number, bigint, boolean, symbol, null and undefined\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5806(heap)\uff1a\u5f15\u7528\u6570\u636e\u7c7b\u578b\uff08\u5bf9\u8c61 object\u3001\u6570\u7ec4 array \u548c\u51fd\u6570 function\uff09")),(0,r.kt)("p",null,"\u4e24\u79cd\u7c7b\u578b\u7684\u533a\u522b\u5728\u4e8e\u5b58\u50a8\u4f4d\u7f6e\u7684\u4e0d\u540c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u539f\u59cb\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u5360\u636e\u7a7a\u95f4\u5c0f\u3001\u5927\u5c0f\u56fa\u5b9a\uff0c\u5c5e\u4e8e\u88ab\u9891\u7e41\u4f7f\u7528\u6570\u636e\uff0c\u6240\u4ee5\u653e\u5165\u6808\u4e2d\u5b58\u50a8\uff1b (primitive types => by value)"),(0,r.kt)("li",{parentName:"ul"},"\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u5360\u636e\u7a7a\u95f4\u5927\u3001\u5927\u5c0f\u4e0d\u56fa\u5b9a\u3002\u5982\u679c\u5b58\u50a8\u5728\u6808\u4e2d\uff0c\u5c06\u4f1a\u5f71\u54cd\u7a0b\u5e8f\u8fd0\u884c\u7684\u6027\u80fd\uff1b\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5728\u6808(stack)\u4e2d\u5b58\u50a8\u4e86\u6307\u9488\uff0c\u8be5\u6307\u9488\u6307\u5411\u5806\u4e2d\u8be5\u5b9e\u4f53\u7684\u8d77\u59cb\u5730\u5740\u3002\u5f53\u89e3\u91ca\u5668\u5bfb\u627e\u5f15\u7528\u503c\u65f6\uff0c\u4f1a\u9996\u5148\u68c0\u7d22\u5176\u5728\u6808\u4e2d\u7684\u5730\u5740\uff0c\u53d6\u5f97\u5730\u5740\u540e\u4ece\u5806\u4e2d\u83b7\u5f97\u5b9e\u4f53\u3002(object => by reference)")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"primitives"},"Primitives"),(0,r.kt)("p",null,"(string, number, bigint, boolean, symbol, null and undefined)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javascript.info/symbol"},"Symbol"))),(0,r.kt)("h4",{id:"object"},"Object"),(0,r.kt)("p",null,"(function, array(ordered collections), objects(keyed collections), Map(like object, but allows key to be any type), Set(collection of unique values))"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javascript.info/map-set"},"Map & Set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javascript.info/keys-values-entries"},"Object.keys, values, entries are common agreement to use for data structure, ex,Map,Set,Array,Object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javascript.info/symbol"},"Object's filter,map... method"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"heap-and-stack"},"Heap and Stack"),(0,r.kt)("p",null,"Stack(Static memory allocation)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A stack is a data structure that JavaScript uses to store static data. Static data is data where ",(0,r.kt)("mark",null,"the engine knows the size at compile time"),". In JavaScript, this includes primitive values (strings, numbers, booleans, undefined, and null) and references, which point to objects and functions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"primitive values"),(0,r.kt)("li",{parentName:"ul"},"references, which point to objects and functions")))),(0,r.kt)("p",null,"The stack contains a reference to the object in the heap: The memory of the heap is not ordered in any particular way, which is why we need to keep a reference to it in the stack."),(0,r.kt)("p",null,"Since the engine knows that the size won't change, it will allocate ",(0,r.kt)("mark",null,"a fixed amount of memory for each value"),".\nThe process of allocating memory right before execution is known as ",(0,r.kt)("mark",null,"static memory allocation"),".\nBecause the engine allocates a fixed amount of memory for these values, there is a limit to how large primitive values can be."),(0,r.kt)("p",null,"Heap(Dynamic memory allocation)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The heap is a different space for storing data where JavaScript stores objects and functions and it allocate ",(0,r.kt)("mark",null," a fixed amount of memory ")," for these objects. Instead, more space will be allocated as needed.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"type-coercion-\u5f37\u5236\u8f49\u578b"},"Type coercion \u5f37\u5236\u8f49\u578b"),(0,r.kt)("h3",{id:"\u6703\u8f49\u6210-string"},"+:\u6703\u8f49\u6210 string"),(0,r.kt)("h3",{id:"-\u6703\u88ab\u8f49\u70ba-number\u5982\u679c\u4e0d\u884c\u8f49\u6210\u6578\u5b57\u7684\u8a71\u7d50\u679c\u6703\u662f-nan"},"-:\u6703\u88ab\u8f49\u70ba number,\u5982\u679c\u4e0d\u884c\u8f49\u6210\u6578\u5b57\u7684\u8a71\u7d50\u679c\u6703\u662f NaN"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"null-vs-undefined"},"null vs undefined"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," is used to describe variables that do not point to a reference."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," is used to define something programmatically empty."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/6604749/what-reason-is-there-to-use-null-instead-of-undefined-in-javascript"},"https://stackoverflow.com/questions/6604749/what-reason-is-there-to-use-null-instead-of-undefined-in-javascript")),(0,r.kt)("p",null,"TLDR; Don't use the undefined primitive. It's a value that the JS compiler will automatically set for you when you declare variables without assignment or if you try to access properties of objects for which there is no reference. On the other hand, use null if and only if you intentionally want a variable to have \"no value\"."),(0,r.kt)("h3",{id:"type-null-vs-undefined"},"type null vs undefined"),(0,r.kt)("p",null,":\u7576\u6bd4\u8f03 null \u548c undefined \u7684\u503c\u7684\u6642\u5019\uff0c\u4f7f\u7528\u975e\u56b4\u683c\u76f8\u7b49\uff08\uff1d\uff1d\uff09\u6703\u76f8\u540c\uff0c\u6240\u4ee5\u5fc5\u9808\u4f7f\u7528 typeof \u6216\u662f\u56b4\u683c\u76f8\u7b49\uff08\uff1d\uff1d\uff1d\uff09\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"arrow-function-vs-function"},"arrow function vs function"),(0,r.kt)("p",null,"arrow function pros:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"readability")),(0,r.kt)("p",null,"arrow function cons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Do not have this"),(0,r.kt)("li",{parentName:"ol"},"Do not have arguments"),(0,r.kt)("li",{parentName:"ol"},"Can\u2019t be called with new"),(0,r.kt)("li",{parentName:"ol"},"They also don\u2019t have super.")),(0,r.kt)("p",null,"\u4e0d\u8a72\u4f7f\u7528\u7684\u6642\u6a5f\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","\u9700\u8981\u4f7f\u7528 this \u7684\u6642\u5019\uff0c\u56e0\u70ba\u6703\u6307\u5411\u4e0a\u4e00\u5c64\uff08\u5f88\u591a\u6642\u5019\u662f window\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"ex.Array.prototype.forEach = () => {\n  this; // \u6307\u5411window\uff0c\u800c\u4e0d\u662fArray\n};\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hsien-w-wei.medium.com/js-arrow-function-vs-function-ec601dead231"},"https://hsien-w-wei.medium.com/js-arrow-function-vs-function-ec601dead231")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"call-apply-and-bind"},"call, apply and bind"),(0,r.kt)("p",null,":call, apply \u6703\u7acb\u5373\u628a this \u7d81\u5b9a\u5728 call/apply \u7684\u7b2c\u4e00\u500b\u503c\uff0c\u8b93\u51fd\u5f0f\u53ef\u4ee5\u52d5\u614b\u4f7f\u7528 this\u3002\n:bind \u6703\u5efa\u7acb\u65b0\u7684\u51fd\u5f0f\uff0c\u5728\u88ab\u547c\u53eb\u4e4b\u5f8c\u624d\u6703\u7d81\u5b9a\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fun.call(thisArg[, arg1[, arg2","[, ...]","]])"),(0,r.kt)("br",{parentName:"p"}),"\n",":\u8a2d\u5b9a thisArg \u503c\uff0c\u4e26\u4e14\u628a\u8a72 this \u7d81\u5b9a\u5728 thisArg \u4e0a\uff0c\u5f8c\u9762\u7684\u53c3\u6578\u70ba\u539f\u5148 function \u7684 argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var person = {\n  fullName: function () {\n    return this.firstName + " " + this.lastName;\n  },\n};\nvar person1 = {\n  firstName: "Bill",\n  lastName: "Gates",\n};\nvar person2 = {\n  firstName: "Steve",\n  lastName: "Jobs",\n};\nperson.fullName.call(person1); // \u5c06\u8fd4\u56de "Bill Gates"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var person = {\n  fullName: function (city, country) {\n    return this.firstName + " " + this.lastName + "," + city + "," + country;\n  },\n};\nvar person1 = {\n  firstName: "Bill",\n  lastName: "Gates",\n};\nperson.fullName.call(person1, "Seattle", "USA"); //Bill Gates,Seattle,USA\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fun.apply(thisArg, ","[argsArray]",")"),(0,r.kt)("br",{parentName:"p"}),"\n",":\u7528\u6cd5\u548c call \u985e\u4f3c\uff0c\u4f46\u662f\u7b2c\u4e8c\u500b parameter \u662f array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var person = {\n  fullName: function (city, country) {\n    return this.firstName + " " + this.lastName + "," + city + "," + country;\n  },\n};\nvar person1 = {\n  firstName: "Bill",\n  lastName: "Gates",\n};\nperson.fullName.apply(person1, ["Oslo", "Norway"]); //\'Bill Gates,Oslo,Norway\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fun.bind(thisArg[, arg1[, arg2","[, ...]","]])"),(0,r.kt)("br",{parentName:"p"}),"\n",":\u6703\u5efa\u7acb\u65b0\u7684\u51fd\u5f0f\uff0c\u7576\u51fd\u5f0f\u88ab\u547c\u53eb\u6642\uff0c\u6703\u5c07 this \u95dc\u9375\u5b57\u8a2d\u70ba\u7d66\u5b9a\u7684\u53c3\u6578\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\nconst person = {\n  firstName:"John",\n  lastName: "Doe",\n  display: function () {\n    let x = document.getElementById("demo");\n    x.innerHTML = this.firstName + " " + this.lastName;\n  }\n}\n\n//\u6c92\u6709bind Person\u7684\u8a71\uff0c\u5728setTimeout\u5f8c\uff0cdisplay\u7684this\u907a\u5931\uff0c\u8f38\u51fa\u7d50\u679c\u6703\u662fundefined\nlet display = person.display.bind(person);\nsetTimeout(display, 3000);\n//John Doe\n\nhttps://www.w3schools.com/js/js_function_bind.asp\n\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"event-delegation-\u4e8b\u4ef6\u59d4\u6d3e--addeventlistener"},"Event delegation \u4e8b\u4ef6\u59d4\u6d3e & addEventListener"),(0,r.kt)("p",null,"\u4e8b\u4ef6\u59d4\u8a17\u662f\u5c07\u4e8b\u4ef6\u76e3\u807d\u5668\u6dfb\u52a0\u5230\u7236\u5143\u7d20\uff0c\u800c\u4e0d\u662f\u6bcf\u500b\u5b50\u5143\u7d20\u55ae\u7368\u8a2d\u7f6e\u4e8b\u4ef6\u76e3\u807d\u5668\u3002\u7576\u89f8\u767c\u5b50\u5143\u7d20\u6642\uff0c\u4e8b\u4ef6\u6703\u5192\u6ce1\u5230\u7236\u5143\u7d20\uff0c\u76e3\u807d\u5668\u5c31\u6703\u89f8\u767c\uff0c\u5f80\u4e0b\u50b3\u905e\u7684\u904e\u7a0b\u88ab\u7a31\u70ba",(0,r.kt)("strong",{parentName:"p"},"\u6355\u6349\uff08capturing\uff09"),"\uff0c\u5f80\u4e0a\u50b3\u905e\u7684\u904e\u7a0b\u88ab\u7a31\u70ba",(0,r.kt)("strong",{parentName:"p"},"\u5192\u6ce1\uff08bubbling\uff09")),(0,r.kt)("p",null,"Event delegation \u512a\u7f3a\u9ede\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"event handler \u53ef\u4ee5\u5927\u5e45\u6e1b\u5c11\uff0c\u53ea\u9700\u8981\u8a2d\u5b9a\u5728\u7236\u5c64")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<ul onclick=\"alert(event.type + '!')\">\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n</ul>\n//\u7576\u6309\u5230 <li> \u5176\u4e2d\u4efb\u4f55\u4e00\u500bonclick\u90fd\u6703\u5728bubbling\u6642\u88ab\u89f8\u767c\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"event delegation",src:n(3529).Z})),(0,r.kt)("h3",{id:"\u70ba\u4ec0\u9ebc\u9700\u8981-event-delegation"},"\u70ba\u4ec0\u9ebc\u9700\u8981 Event delegation?"),(0,r.kt)("h3",{id:"estoppropagation-vs-preventdefault"},"e.stopPropagation vs preventDefault"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"e.stopPropagation"),": \u505c\u6b62\u63a5\u4e0b\u4f86\u7684 bubbling \u6216\u662f capturing",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"preventDefault"),": \u505c\u6b62 browser \u7684\u9810\u5b9a\u884c\u70ba\uff08default action\uff09ex,\u7528 preventDefault \u4f86\u963b\u6b62\\",(0,r.kt)("a",null),"\u8df3\u8f49\u9801\u9762"),(0,r.kt)("h3",{id:"addeventlistenerdocumentaddeventlistenerevent-function-capture"},"addEventListener:document.addEventListener(event, function, Capture)"),(0,r.kt)("p",null,"\u7b2c\u4e09\u500b parameter\uff0cdefault \u70ba false\uff0c\u57f7\u884c\u5728\u5192\u6ce1\u968e\u6bb5\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u8a2d\u5b9a\u70ba true \u6642\uff0c\u57f7\u884c\u5728\u6355\u6349\u968e\u6bb5\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation"},"https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"strict-mode-\u56b4\u683c\u6a21\u5f0f"},"Strict Mode \u56b4\u683c\u6a21\u5f0f"),(0,r.kt)("p",null,"\u7528\u6cd5\uff1a\u5728\u6a94\u6848\u524d\u9762\u52a0\u4e0a \u2019use strict'",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728\u56b4\u683c\u6a21\u5f0f\u4e0b\uff0c\u4ee5\u4e0b\u5e7e\u7a2e\u72c0\u6cc1\u662f\u4e0d\u88ab\u5141\u8a31\u7684\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u5b9a\u7fa9\u672a\u5ba3\u544a\u8b8a\u6578"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 delete \u522a\u9664\u8b8a\u6578\u6216\u51fd\u5f0f"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u8907\u8b8a\u6578"),(0,r.kt)("li",{parentName:"ol"},"\u8ddf\u5176\u4ed6\u5f88\u591a\u72c0\u6cc1\u3002\u3002")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"this"},"this"),(0,r.kt)("p",null,"\xa0","\n:this \u6307\u5411\uff08reference\uff09object.\u800c\u5b83\u7684\u503c\u4e0d\u4e00\u5b9a\uff0c\u6703\u6839\u64da\u5b83\u88ab\u57f7\u884c\u7684\u5730\u65b9(call site)\u6240\u6c7a\u5b9a\u7684\uff0c\u4ee5\u4e0b\u6709\u56db\u500b this \u7684\u898f\u5247\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u57f7\u884c function \u6642\uff0c\u662f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"new"),"\u4f86\u57f7\u884c\u7684\uff0c\u90a3 this \u6703\u6307\u5411\u4e00\u500b\u7a7a\u7684 object."),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u57f7\u884c function \u6642\uff0c\u662f\u7528 call,apply,bind\uff0c\u90a3 this \u6703\u6307\u5411\u50b3\u9032\u4f86\u7684 argument."),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u57f7\u884c\u6642\uff0c\u662f object \u4e2d\u7684\u4e00\u500b method\uff0c\u90a3 this \u6703\u6307\u5411 dot \u7684\u5de6\u908a\uff08\u8a72 object)."),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c function \u57f7\u884c\u6642\u6c92\u6709\u4ee5\u4e0a\u689d\u4ef6\uff0cthis \u5c31\u6703\u662f\u5168\u5c40\u5c0d\u8c61. \u700f\u89bd\u5668\u74b0\u5883\u4e0b this \u7684\u503c\u6307\u5411 window \u5c0d\u8c61\uff0c\u4f46\u662f\u5728\u56b4\u683c\u6a21\u5f0f\u4e0b('use strict')\uff0cthis \u7684\u503c\u70ba undefined\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u76f8\u540c\u7684\u898f\u5247\u90fd\u51fa\u73fe\u7684\u8a71\uff0c\u6392\u540d\u524d\u7684\u6703\u5148\u57f7\u884c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5305\u4f4f this \u7684 function \u662f arrow function \u7684\u8a71\uff0c\u4e0d\u9069\u7528\u4e0a\u9762\u7684\u898f\u5247\uff0c\u56e0\u70ba\u5b83\u672c\u8eab\u6c92\u6709 this\uff0c\u6240\u4ee5 this \u6703\u7b49\u540c\u65bc\u4e0a\u4e00\u5c64\u7684 this\u3002")),(0,r.kt)("p",null,"\u7528\u9014\uff1a ex. \u5be6\u4f5c array map method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const personA = {\n  name: "AAA",\n  doing: function () {\n    console.log(this);\n  },\n};\npersonA.doing();\n// {name: \'AAA\', doing: f}\n\n//\u7576\u662farrow function\u6642\nconst personB = {\n  name: "AAA",\n  doing: () => console.log(this),\n};\npersonB.doing();\n// window\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function makeUser() {\n  return {\n    name: "John",\n    ref: this,\n  };\n}\n\nlet user = makeUser();\n\nalert(user.ref.name); // undefined, \u56e0\u70baref\u4e0d\u662f\u4e00\u500bfunction\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://medium.com/codeburst/the-simple-rules-to-this-in-javascript-35d97f31bde3"},"https://medium.com/codeburst/the-simple-rules-to-this-in-javascript-35d97f31bde3"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://javascript.info/object-methods#this-in-methods"},"https://javascript.info/object-methods#this-in-methods"),"\n","\xa0"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"es6"},"ES6"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://felixgerschau.com/javascript-memory-management/"},"resources"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6940945178899251230"},"resources-ch"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/jsref/met_document_addeventlistener.asp"},"https://www.w3schools.com/jsref/met_document_addeventlistener.asp"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault"},"https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/itsems-frontend/javascript-strict-mode-d0a3aa74458b"},"https://medium.com/itsems-frontend/javascript-strict-mode-d0a3aa74458b"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@sunnyhuang.sc/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98-javascript-%E4%BD%95%E8%AC%82%E5%BC%B7%E5%88%B6%E8%BD%89%E5%9E%8B-coercion-%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E4%BD%9C%E5%88%B0%E8%BD%89%E6%8F%9B%E5%9E%8B%E5%88%A5-d7e39e30083"},"https://medium.com/@sunnyhuang.sc/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98-javascript-%E4%BD%95%E8%AC%82%E5%BC%B7%E5%88%B6%E8%BD%89%E5%9E%8B-coercion-%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E4%BD%9C%E5%88%B0%E8%BD%89%E6%8F%9B%E5%9E%8B%E5%88%A5-d7e39e30083")))}c.isMDXComponent=!0},3529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event_delegation-538c0f084a8c7aef48a3c4760205a606.png"}}]);