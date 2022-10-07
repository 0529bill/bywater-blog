"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[3554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),y=r,h=u["".concat(i,".").concat(y)]||u[y]||m[y]||a;return n?o.createElement(h,p(p({ref:t},s),{},{components:n})):o.createElement(h,p({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},139:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7},p="[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] prototype and prototype chain",l={unversionedId:"ironMan2022/prototype",id:"ironMan2022/prototype",isDocsHomePage:!1,title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] prototype and prototype chain",description:"https://ithelp.ithome.com.tw/upload/images/20220921/20148825KfFZVp1tN7.jpg",source:"@site/docs/ironMan2022/prototype.md",sourceDirName:"ironMan2022",slug:"/ironMan2022/prototype",permalink:"/bywater-blog/ironMan2022/prototype",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] Promise",permalink:"/bywater-blog/ironMan2022/promise"},next:{title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] The Execution Context, Call-stack and Event Loop",permalink:"/bywater-blog/ironMan2022/executionContext"}},i=[{value:"\u4ec0\u9ebc\u662f prototype chain?",id:"\u4ec0\u9ebc\u662f-prototype-chain",children:[]},{value:"\u70ba\u751a\u9ebc\u9700\u8981 prototype \u548c prototype chain?",id:"\u70ba\u751a\u9ebc\u9700\u8981-prototype-\u548c-prototype-chain",children:[]}],c={toc:i};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9435\u4eba\u8cfd-2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230-prototype-and-prototype-chain"},"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230]"," prototype and prototype chain"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20220921/20148825KfFZVp1tN7.jpg",alt:"https://ithelp.ithome.com.tw/upload/images/20220921/20148825KfFZVp1tN7.jpg"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Javascript \u662f\u4e00\u500b\u57fa\u65bc\u539f\u578b\u7684\u8a9e\u8a00\uff08prototype-based)\uff0c\u4ed6\u53ef\u4ee5\u7528\u5728 OOP(Object-oriented programming)\u4e5f\u53ef\u4ee5\u7528\u5728 FP(Functional programming)")),(0,r.kt)("h2",{id:"\u4ec0\u9ebc\u662f-prototype-chain"},"\u4ec0\u9ebc\u662f prototype chain?"),(0,r.kt)("p",null,"\u56de\u7b54:",(0,r.kt)("br",{parentName:"p"}),"\n","\u5168\u90e8\u7684 object \u90fd\u6709\u9019\u500b\u5167\u5efa\u7684 [","[Prototype]","]\uff0c\u9019\u500b [","[Prototype]","] \u81ea\u5df1\u4e5f\u662f\u4e00\u500b object\uff0c\u6240\u4ee5\u81ea\u5df1\u4e5f\u6703\u6709 [","[Prototype]","]\uff0c\u9019\u500b\u4e00\u500b\u500b\u9023\u63a5\u8d77\u4f86\u7684 object \u5c31\u53eb\u505a \u539f\u578b\u93c8 prototype chain\uff0c [","[Prototype]","]\u6700\u4e0a\u7684\u7bc0\u9ede\u6703\u9023\u63a5\u5230 null\u3002"),(0,r.kt)("h2",{id:"\u70ba\u751a\u9ebc\u9700\u8981-prototype-\u548c-prototype-chain"},"\u70ba\u751a\u9ebc\u9700\u8981 prototype \u548c prototype chain?"),(0,r.kt)("p",null,"\u900f\u904e\u7e7c\u627f\u539f\u578b\u4e0a\u7684\u5c6c\u6027\u548c\u65b9\u6cd5\uff0c\u4f86",(0,r.kt)("strong",{parentName:"p"},"\u91cd\u8907\u4f7f\u7528\u7a0b\u5f0f\u78bc\uff0c\u907f\u514d\u5beb\u51fa\u91cd\u8907\u7684\u908f\u8f2f"),"\u3002\u5e38\u898b\u7684\u4f8b\u5b50\u50cf\u662f array \u7684\u65b9\u6cd5\uff0c\u5c31\u662f\u900f\u904e prototype \u6240\u4ee5\u8b93\u6211\u5011\u5728\u5ba3\u544a array \u4e4b\u5f8c\u53ef\u4ee5\u4f7f\u7528 map, forEach \u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"array.prototype.forEach(...\u7701\u7565);\n\nlet arr1 = [1, 2, 3];\nlet arr2 = [4, 5, 6];\n\narr1.forEach(...\u7701\u7565);\narr2.forEach(...\u7701\u7565);\n//\u6703\u5f80\u4e0a\u5c64\u7684prototype\u627eforEach\u7684\u65b9\u6cd5\uff0c\u6240\u4ee5\u5169\u500barray\u90fd\u53ef\u4ee5\u4f7f\u7528forEach\u7684\u65b9\u6cd5\n\narr1.ffff(...\u7701\u7565);\n//\u5728\u4e0a\u5c64\u627e\u4e0d\u5230\u65b9\u6cd5\u7684\u6642\u5019\uff0c\u5c31\u6703\u5831\u932f\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u6211\u5011\u5148\u4f86\u770b\u4e00\u4e9b\u5e38\u898b\u7684\u4f7f\u7528\u65b9\u6cd5/\u8a9e\u6cd5\uff0c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"__proto\uff3f\uff3f"),(0,r.kt)("br",{parentName:"li"}),":\u7528\u65bc\u627e\u4e0a\u5c64\u7684 [","[Prototype]","]\uff0c\u53ef\u4ee5\u8a2d\u5b9a\u6216\u662f\u53d6\u7528\u4e0a\u5c64\u7684 [","[Prototype]","]\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//\u7528\uff3f_proto__\u8a2d\u5b9a[[Prototype]]\u7684\u4f8b\u5b50\n\nvar Circle = function () {};\nvar shape = {};\n\nshape.__proto__ = circle; // => \u8a2d\u5b9ashape\u7684\u4e0a\u5c64[[Prototype]]\u70bacircle\u3002\n\n//\u7528__proto__\u53d6\u7528\u4e0a\u5c64\u7684\u4f8b\u5b50\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nPerson.prototype.log = function () {\n  console.log(this.name + ", age:" + this.age);\n};\n\nvar nick = new Person("nick", 18);\n\nconsole.log(nick.__proto__ === Person.prototype); // true\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u4e0d\u5efa\u8b70\u79c1\u81ea\u7528",(0,r.kt)("inlineCode",{parentName:"strong"},"__proto__"),"\u53bb\u66f4\u6539\u4e0d\u5c6c\u65bc\u81ea\u5df1\u7684 [","[Prototype]","]\uff0cex, \u700f\u89bd\u5668\u4e2d\u7684 array.prototype\uff0c\u56e0\u70ba\u6703\u5f71\u97ff\u5230\u700f\u89bd\u5668\u7684\u6548\u80fd")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Object.getPrototypeOf()"),"\u4e5f\u53ef\u4ee5\u7528\u4f86\u7528\u4f86\u53d6\u5f97\u7269\u4ef6\u7684 [","[Prototype]","] \u5c6c\u6027\u7684\u503c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let obj = { name: "hi" };\nObject.getPrototypeOf(obj);\n\n// {constructor.....}\u6703\u56de\u50b3obj\u7684[[prototype]]\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype"),(0,r.kt)("br",{parentName:"p"}),"\n","\u6bcf\u4e00\u500b\u51fd\u6578\u5728\u5275\u5efa\u4e4b\u5f8c\u90fd\u6703\u64c1\u6709\u4e00\u500b\u540d\u70ba prototype \u7684\u5c6c\u6027\uff0c\u9019\u500b\u5c6c\u6027\u6307\u5411\u51fd\u6578\u7684\u539f\u578b\u5c0d\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4e0b\u9762\u9019\u500b\u8868\u5f88\u6e05\u695a\u7684\u89e3\u91cb\u4e86\uff0cfunction \u7684\u4e0a\u5c64 prototype \u548c\u900f\u904e new \u6240\u7522\u751f\u7684 function \u7684\u4e0a\u5c64 prototype \u7684\u5dee\u5225\uff0c\u53ef\u4ee5\u770b\u5230\u9019\u5169\u8005\u7684\u4e0a\u5c64 prototype \u5176\u5be6\u662f\u6709\u5dee\u5225\u7684\u5594\uff01\uff01"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20220921/20148825kLpkqfbDkR.jpg",alt:"https://ithelp.ithome.com.tw/upload/images/20220921/20148825kLpkqfbDkR.jpg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f: [","[Prototype]","] \u548c prototype \u4e0d\u4e00\u6a23\uff0cJS \u4e2d\u5168\u90e8\u7684\u5c0d\u8c61\u90fd\u6709[","[prototype]","]\uff0c\u4f46\u662f\u53ea\u6709\u51fd\u5f0f\u6709 \uff26 Function.prototype\u3002")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/34183746"},"\u9019\u7bc7\u6587\u7ae0"),"\u6709\u5f88\u597d\u7684\u89e3\u91cb\uff01"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"instanceof"),(0,r.kt)("br",{parentName:"li"}),":\u5224\u65b7 A \u662f\u4e0d\u662f B \u7684\u6642\u4f8b\uff0c\u6bd4\u8f03\u7684\u662f\u539f\u578b([","[Prototype]","])\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nPerson.prototype.log = function () {\n  console.log(this.name + ", age:" + this.age);\n};\n\nvar nick = new Person("nick", 18);\n\nconsole.log(nick instanceof Person); // true\uff0c\u56e0\u70banick\u662f\u7531Person\u6240\u5275\u5efa\u7684\nconsole.log(nick instanceof Object);\n// true\uff0c\u56e0\u70baPerson.prototype instanceof Object === true\nconsole.log(nick instanceof Array); // false\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"new"),"\n: \u7528\u4f86\u5be6\u4f8b\u5316\u4e00\u500b\u5c0d\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"},"new \u5728\u7528\u5be6\u4f8b\u5275\u5efa\u65b0 prototype \u6642\uff0c\u505a\u4e86\u4ee5\u4e0b\u56db\u4ef6\u4e8b\uff1a"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5275\u5efa\u51fa\u65b0\u7684 object"),(0,r.kt)("li",{parentName:"ul"},"\u628a\u65b0\u5275\u5efa\u7684 object \u7684",(0,r.kt)("inlineCode",{parentName:"li"},"__proto__"),"\u6307\u5411\u4ed6\u7684 \u5be6\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"\u628a this \u6307\u5411\u65b0\u5275\u5efa\u7684 object"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u50b3\u65b0\u5275\u5efa\u7684 object")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function Person(name) {\n  this.name = name;\n}\n\nvar person = Person("John");\nconsole.log(person); // undefined\nconsole.log(person.name); // Uncaught TypeError: Cannot read property \'name\' of undefined\n\nvar person = new Person("John");\nconsole.log(person); // Person { name: "John" }\nconsole.log(person.name); // "john"\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u90fd\u7406\u89e3\u4e4b\u5f8c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u4f86\u8a66\u8a66\u4e0b\u9762\u5e7e\u984c\u9762\u8a66\u984c\u62c9\uff5e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8f38\u51fa\u7d50\u679c\u662f\u4ec0\u9ebc\uff1f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Function.prototype.a = () => {\n  console.log(1);\n};\nObject.prototype.b = () => {\n  console.log(2);\n};\nfunction A() {}\nconst a = new A();\na.a();\na.b();\nA.a();\n")),(0,r.kt)("p",null,"\u7b54\u6848\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"a.a(); // Uncaught TypeError: a.a is not a function\na.b(); // 2\nA.a(); // 1\nA.b(); // 2\n")),(0,r.kt)("p",null,"\u7b2c\u4e00\u500b",(0,r.kt)("inlineCode",{parentName:"p"},"a.a()"),"\u6703\u5831\u932f\u7684\u539f\u56e0\uff0c\u662f\u56e0\u70ba\u7528 new \u751f\u6210\u7684 a \u5c6c\u6027\uff0c\u5728\u5f80\u4e0a\u627e a \u65b9\u6cd5\u7684\u904e\u7a0b\u4e2d\uff0c\u6703\u5148\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"A.prototype"),"\u7136\u5f8c\u518d\u53bb\u627e",(0,r.kt)("inlineCode",{parentName:"p"},"Object.prototype"),"\uff0c\u5c31\u5982\u540c\u4e0a\u9762\u7684\u90a3\u5f35 Function.prototype \u5716\u8868\u4e00\u6a23\uff0c\u6240\u4ee5\u4e2d\u9593\u5c31\u4e0d\u6703\u78b0\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.a"),"\u9019\u500b\u65b9\u6cd5\uff0c\u4e5f\u56e0\u6b64\u6703\u5831\u932f\u3002\u81f3\u65bc\u7b2c 2,3,4 \u90fd\u6703\u4f9d\u5e8f\u627e\u5230\u5176\u65b9\u6cd5\u56e0\u6b64\u90fd\u53ef\u4ee5\u5370\u51fa\u76f8\u95dc\u7684\u503c\uff5e"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u8f38\u51fa\u7d50\u679c\u662f\u4ec0\u9ebc\uff1f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Foo() {\n  Foo.a = function () {\n    console.log(1);\n  };\n  this.a = function () {\n    console.log(2);\n  };\n}\nFoo.prototype.a = function () {\n  console.log(3);\n};\nFoo.a = function () {\n  console.log(4);\n};\nFoo.a();\nlet obj = new Foo();\nobj.a();\nFoo.a();\n")),(0,r.kt)("p",null,"\u7e3d\u7d50\u4e00\u4e0b\uff0c\u4eca\u5929\u8a0e\u8ad6\u4e86 prototype \u3001 prototype chain \u3001[","[Prototype]","]\u548c\u4e00\u4e9b\u5e38\u898b\u7684\u5167\u5efa\u8a9e\u6cd5\uff5e\u5e0c\u671b\u9019\u7bc7\u6587\u7ae0\u6709\u8b93\u4f60\u5c0d prototype \u6709\u66f4\u6df1\u7684\u4e86\u89e3\uff0c\u90a3\u6211\u5011\u5c31\u660e\u5929\u898b\u62c9\uff01"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Resources:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://javascript.info/prototype-inheritance"},"https://javascript.info/prototype-inheritance"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/proto"},"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/proto"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/javascript-new-keyword/"},"https://www.geeksforgeeks.org/javascript-new-keyword/"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/everlose/p/12930468.html"},"https://www.cnblogs.com/everlose/p/12930468.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/everlose/p/12944524.html"},"https://www.cnblogs.com/everlose/p/12944524.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@ajmeyghani/interview-questions-1145e3763bce"},"https://medium.com/@ajmeyghani/interview-questions-1145e3763bce"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/article/940572"},"https://developer.aliyun.com/article/940572")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/34183746"},"https://www.zhihu.com/question/34183746"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html"},"https://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html")))}s.isMDXComponent=!0}}]);