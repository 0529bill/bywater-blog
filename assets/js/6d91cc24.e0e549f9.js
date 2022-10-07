"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[6888],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=s(t),d=a,g=y["".concat(p,".").concat(d)]||y[d]||u[d]||o;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7960:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:18},l="[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] Typescript Generics and Utility types",i={unversionedId:"ironMan2022/generics",id:"ironMan2022/generics",isDocsHomePage:!1,title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] Typescript Generics and Utility types",description:"\u6628\u5929\u8b1b\u5230\u4e86 Typescript \u57fa\u672c\u7684\u5e7e\u500b type\uff0c\u5728\u666e\u901a\u7684\u5834\u666f\u4e2d\u4f7f\u7528\u90a3\u5e7e\u500b type \u5c31\u5920\u7528\u4e86\u3002\u4f46\u5728\u5be6\u969b\u61c9\u7528\u4e0a\u6642\uff0c\u6709\u6642\u5019\u61f7\u662f\u6703\u9047\u5230\u6628\u5929\u8b1b\u7684 type \u7121\u6cd5\u89e3\u6c7a\u7684\u60c5\u6cc1\uff0c\u9019\u6642\u5019\u6211\u5011\u5c31\u53ef\u4ee5\u7528\u5230 Typescript \u6240\u63d0\u4f9b\u7684\u5169\u500b\u5de5\u5177--Generics \u548c Utility types \u4e86\uff01",source:"@site/docs/ironMan2022/generics.md",sourceDirName:"ironMan2022",slug:"/ironMan2022/generics",permalink:"/bywater-blog/ironMan2022/generics",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] Typescript Basics",permalink:"/bywater-blog/ironMan2022/TS_types"},next:{title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] Typescript narrowing and Type guard",permalink:"/bywater-blog/ironMan2022/narrowing"}},p=[{value:"Generics",id:"generics",children:[]},{value:"Utility type",id:"utility-type",children:[{value:"Record&lt;Keys, Type&gt;",id:"recordkeys-type",children:[]},{value:"<code>Readonly&lt;Type&gt;</code>",id:"readonlytype",children:[]}]}],s={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9435\u4eba\u8cfd-2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230-typescript-generics-and-utility-types"},"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230]"," Typescript Generics and Utility types"),(0,a.kt)("p",null,"\u6628\u5929\u8b1b\u5230\u4e86 Typescript \u57fa\u672c\u7684\u5e7e\u500b type\uff0c\u5728\u666e\u901a\u7684\u5834\u666f\u4e2d\u4f7f\u7528\u90a3\u5e7e\u500b type \u5c31\u5920\u7528\u4e86\u3002\u4f46\u5728\u5be6\u969b\u61c9\u7528\u4e0a\u6642\uff0c\u6709\u6642\u5019\u61f7\u662f\u6703\u9047\u5230\u6628\u5929\u8b1b\u7684 type \u7121\u6cd5\u89e3\u6c7a\u7684\u60c5\u6cc1\uff0c\u9019\u6642\u5019\u6211\u5011\u5c31\u53ef\u4ee5\u7528\u5230 Typescript \u6240\u63d0\u4f9b\u7684\u5169\u500b\u5de5\u5177--Generics \u548c Utility types \u4e86\uff01"),(0,a.kt)("h2",{id:"generics"},"Generics"),(0,a.kt)("p",null,"\u60f3\u50cf\u4e00\u4e0b\uff0c\u5982\u679c\u4eca\u5929\u6211\u5011\u8981\u5beb\u4e00\u500b\u5171\u7528\u5143\u4ef6\uff0c\u5171\u7528\u5143\u4ef6\u7684\u50b3\u5165\u503c\u8ddf\u50b3\u51fa\u503c\u6703\u662f\u540c\u500b\u578b\u5225\uff0c\u4f46\u662f\u4e0d\u9650\u55ae\u4e00\u578b\u5225\uff0c\u4ee3\u8868\u4ed6\u53ef\u80fd\u8f38\u5165\u503c\u662f string \u8f38\u51fa\u503c\u4e5f\u662f string\uff0c\u6216\u662f\u8f38\u5165\u503c\u662f number \u8f38\u51fa\u503c\u4e5f\u662f number\uff0c\u50cf\u662f\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," function doSomething(input) {\n  ...\u505a\u8a08\u7b97\n  return result\n}\n")),(0,a.kt)("p",null,"\u7136\u5f8c\u56de\u50b3\u6210\u4e0b\u9762\u7684\u6a23\u5b50\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," doSomething('name') => \u56de\u50b3string\n doSomething(123) => \u56de\u50b3number\n\n")),(0,a.kt)("p",null,"\u9019\u6642\u6211\u5011\u8981\u5982\u4f55\u628a doSomething \u6539\u5beb\u6210 Typescript \u5462\uff1f\n\u5982\u679c\u628a\u6bcf\u500b type \u90fd\u5beb\u51fa\u4f86\u90a3\u592a\u9ebb\u7169\u4e86\uff0c\u9019\u6642\u5019\u5c31\u53ef\u4ee5\u7528\u5230 generics \uff01"),(0,a.kt)("p",null,"generics \u7684\u8a9e\u6cd5\u9577\u9019\u6a23\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"<T>"),"\uff0c\u7136\u5f8c\u5728\u4e2d\u9593\u6163\u4f8b\u4e0a\u6703\u662f\u4e00\u500b\u82f1\u6587\u5927\u5beb\u5b57\u6bcd\uff0c\u4ee3\u8868\u4efb\u610f\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//\u5168\u90e8type\u90fd\u5beb\u51fa\u4f86\u7684\u5beb\u6cd5\n function doSomething(input: string | number) :string| number {\n  ...\u505a\u8a08\u7b97\n  return result\n}\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//\u7528generics\u5beb\u51fainput\u8ddfreturn type\u7684\u5beb\u6cd5\u3002\n function doSomething<T>(input: T):T {\n  ...\u505a\u8a08\u7b97\n  return result\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//\u4f7f\u7528\u65b9\u6cd5\ndoSomething < number > 10;\n\n//input \u503c\u8981\u662f number\uff0c\u4e26\u4e14\u56de\u50b3\u503c\u4e5f\u8981\u662f number\uff0c\u4e0d\u7136\u5c31\u6703\u5831\u932f\u3002\n")),(0,a.kt)("p",null,"\u4f46\u662f doSomething \u9084\u6709\u4e00\u500b\u66f4\u7c21\u4fbf\u7684\u5beb\u6cd5\uff0c\u8a18\u5f97\u6211\u5011\u6628\u5929\u63d0\u5230\u7684 type inference \u55ce\uff1fTypescript \u5176\u5be6\u5f88\u8070\u660e\u7684\uff0c\u4e0d\u7528\u5beb\u5225\u5beb\u51fa type \u4ed6\u4e5f\u53ef\u4ee5\u4f9d\u64da\u50b3\u5165\u7684\u503c\u4f86\u5224\u5225\u51fa T \u61c9\u8a72\u8981\u662f\u4ec0\u9ebc\uff0c\u6240\u4ee5\u9019\u88e1\u5176\u5be6\u53ef\u4ee5\u76f4\u63a5\u5beb",(0,a.kt)("inlineCode",{parentName:"p"},"doSomething(10)"),"\u5c31\u53ef\u4ee5\u4e86\uff01"),(0,a.kt)("p",null,"\u90a3\u6211\u5011\u518d\u4f86\u770b\u53e6\u5916\u4e00\u500b\u4f8b\u5b50\uff0c\u5047\u5982\u73fe\u5728\u6211\u5011\u6709\u4e00\u500b array \u7684\u5171\u7528 function\uff0cfunction \u88e1\u9762\u6709\u4e00\u500b\u7c21\u55ae\u7684 array.length\uff0c\u7136\u5f8c\u4f60\u6703\u767c\u73fe length \u5c31\u5831\u932f\u4e86\u3002\u3002\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function arrayMethod<T>(array: T): T {\n  console.log(array.length); //length\u6703\u5831\u932f: Property 'length' does not exist on type 'T'.\n  return array;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/festive-nobel-m5joc1"},"\u7bc4\u4f8b")),(0,a.kt)("p",null,"\u4ed4\u7d30\u60f3\u4e00\u4e0b\u61c9\u8a72\u6703\u767c\u73fe\uff0c\u56e0\u70ba T \u53ef\u80fd\u662f\u4efb\u4f55\u578b\u5225\uff0c\u6240\u4ee5 Typescript \u7576\u7136\u7121\u6cd5\u78ba\u5b9a\u6240\u6709\u5e36\u5165\u7684\u578b\u5225\u90fd\u6709 length \u9019\u500b method\uff0c\u6240\u4ee5\u5c31\u5831\u932f\u4e86\uff01\u9019\u6642\u5019\u5c31\u8981\u7528\u5230 Typescript \u7684\u53e6\u5916\u4e00\u500b keyword \u53eb\u505a",(0,a.kt)("inlineCode",{parentName:"p"},"extends"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u900f\u904e",(0,a.kt)("inlineCode",{parentName:"strong"},"extends"),"\u6211\u5011\u53ef\u4ee5\u7d66\u4e88 generics \u66f4\u56b4\u683c\u7684\u898f\u7bc4"),"\uff0c\u4f86\u89e3\u6c7a\u4e0a\u9762\u7684\u554f\u984c\uff0c\u4e0b\u9762\u770b\u4f8b\u5b50\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/delicate-thunder-9j81rt"},"\u7bc4\u4f8b 1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," function arrayMethod<T extends string | number[]>(array: T): T {\n    console.log(array.length); //length\u4e0d\u6703\u5831\u932f\n    return array;\n  }\n\n")),(0,a.kt)("p",null,"\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"extends"),"\uff0c\u6211\u5011\u9650\u5236 T \u7684 type \u53ea\u80fd\u662f array\uff0c\u56e0\u6b64\u5c31\u4e0d\u6703\u5831\u932f\u4e86\uff01"),(0,a.kt)("p",null,"\u5230\u9019\u88e1\u6211\u5011\u4f86\u6574\u7406\u4e00\u4e0b generics \u6240\u505a\u7684\u4e8b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"generics \u53ef\u4ee5\u9054\u5230\u5171\u7528\u5143\u4ef6\u7684\u529f\u80fd\uff0c\u4ed6\u7684\u8a9e\u6cd5\u9577\u9019\u6a23",(0,a.kt)("inlineCode",{parentName:"li"},"<T>"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u900f\u904e",(0,a.kt)("inlineCode",{parentName:"li"},"extends"),"\uff0c\u53ef\u4ee5\u7d66\u4e88 generics type \u66f4\u56b4\u683c\u7684\u9650\u5236\uff0c\u4f86\u89e3\u6c7a\u53ef\u80fd\u5831\u932f\u7684\u554f\u984c\u3002")),(0,a.kt)("p",null,"\u5728\u4e86\u89e3 generics \u5f8c\uff0c\u4e0b\u9762\u6211\u5011\u6703\u7e7c\u7e8c\u53bb\u8b1b Typescript \u53e6\u5916\u4e00\u500b\u5f88\u597d\u7528\u7684\u529f\u80fd\uff0c\u5c31\u662f utility type\u3002\u6211\u6703\u6311\u5e7e\u500b\u5e38\u7528\u7684\u5206\u4eab\uff0c\u5c0d\u5176\u4ed6\u6709\u8208\u8da3\u7684\u8b80\u8005\u53ef\u4ee5\u4f86",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html"},"\u5b98\u7db2"),"\u770b\u5168\u90e8\u7684 Utility Type \u5594\uff01"),(0,a.kt)("h2",{id:"utility-type"},"Utility type"),(0,a.kt)("h3",{id:"recordkeys-type"},"Record<Keys, Type>"),(0,a.kt)("p",null,"\u7b2c\u4e00\u500b\u8981\u4ecb\u7d39\u7684\u662f Record\uff0c\u5b83\u7528\u5728\u7d44\u5efa\u91cd\u8907\u6027\u7684 object \u4e0a\u3002\u4ec0\u9ebc\u662f\u91cd\u8907\u6027\u7684 object \u5462\uff1f\u6211\u5011\u4e0b\u9762\u770b\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const person = {\n  harry: { age: 10, gender: "male" },\n  amy: { age: 5, gender: "female" },\n  justin: { age: 16, gender: "male" },\n};\n')),(0,a.kt)("p",null,"Record \u7b2c\u4e00\u500b\u503c\u4ee3\u8868\u7684\u662f Object \u7684 key\uff0c\u7b2c\u4e8c\u500b\u503c\u662f Object \u4e2d\u7684 value! \u6211\u5011\u56de\u5230\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u9019\u4e09\u500b\u4eba\u7684 values \u90fd\u662f\u56fa\u5b9a\u7684\uff0c\u5047\u5982\u9019\u500b list \u4e0a\u9762\u6709\u4e00\u767e\u4eba\uff0c\u90a3\u8981\u4e00\u76f4\u91cd\u8907\u5beb",(0,a.kt)("inlineCode",{parentName:"p"},"{age: number, gender: string}"),"\u5be6\u5728\u662f\u6703\u5f88\u9ebb\u7169\u554a\uff01\u9019\u6642\u5019\u6211\u5011\u53ef\u4ee5\u7528 Record \u4f86\u89e3\u6c7a\u9019\u500b\u554f\u984c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'interface PersonInfo {\n  age: number;\n  gender: string;\n}\n\ntype PersonName = "harry" | "amy" | "justin";\n\nconst person: Record<PersonName, PersonInfo> = {\n  harry: { age: 10, gender: "male" },\n  amy: { age: 5, gender: "female" },\n  justin: { age: 16, gender: "male" },\n};\n')),(0,a.kt)("p",null,"\u9019\u6a23\u7a0b\u5f0f\u78bc\u662f\u4e0d\u662f\u5c31\u7c21\u6f54\u5f88\u591a\u4e86\uff01"),(0,a.kt)("h3",{id:"readonlytype"},(0,a.kt)("inlineCode",{parentName:"h3"},"Readonly<Type>")),(0,a.kt)("p",null,"Readonly \u53ef\u4ee5\u628a\u503c\u8a2d\u5b9a\u70ba\u5df2\u8b80\uff0c\u4e26\u4e14\u4efb\u4f55\u6539\u8b8a\u7684\u64cd\u4f5c\u90fd\u6703\u5831\u932f\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'interface Todo {\n  title: string;\n}\n\nconst todo: Readonly<Todo> = {\n  title: "My todo",\n};\n\ntodo.title = "Hi!";\n//\u5831\u932f\uff01\uff01\uff01\n')),(0,a.kt)("p",null,"\u9019\u6642\u5019\u8b80\u8005\u53ef\u80fd\u6703\u6709\u7591\u60d1\u4e86\uff0c\u90a3 readonly \u8ddf const \u6709\u5dee\u5225\u55ce\uff1f\u80fd\u4e0d\u80fd\u7528 const \u5c31\u597d?\n\u7b54\u6848\u662f\u9019\u5169\u8005\u5176\u5be6\u662f\u6709\u5dee\u7684\uff01 \u9996\u5148\uff0cconst \u662f\u5728 run-time \u505a\u6aa2\u67e5\uff0creadonly \u662f\u5728 compile time \u505a\u6aa2\u67e5\u3002\u7b2c\u4e8c\u9ede\u662f\uff0cconst \u6709\u4e00\u500b\u554f\u984c\u662f\u96d6\u7136\u4e0d\u80fd\u518d\u8ce6\u503c\uff0c\u4f46\u662f object \u7684\u6539\u8b8a\u9084\u662f\u53ef\u4ee5\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Arr = [1, 2, 3];\n\nArr[0] = 10; //OK\nArr.push(12); // OK\nArr.pop(); //Ok\n")),(0,a.kt)("p",null,"\u9019\u6a23\u6211\u5011\u9084\u662f\u6709\u53ef\u80fd\u6703\u4e0d\u5c0f\u5fc3\u6539\u5230 const \u7684\u503c\u3002\u76f8\u53cd\u7684\uff0c\u4f7f\u7528 readonly\uff0c\u9019\u6a23\u6539\u8b8a\u4e5f\u6703\u5831\u932f\uff0c\u5c31\u53ef\u4ee5\u78ba\u4fdd\u6211\u5011\u4e0d\u6703\u4e0d\u5c0f\u5fc3\u6539\u5230 readonly \u7684\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Arr: Readonly<number[]> = [1, 2, 3];\n\nArr[0] = 10; //error\nArr.push(12); // error\nArr.pop(); //error\n\nArr = [4, 5, 6]; //error\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/loving-merkle-w75mjs"},"Readonly \u7bc4\u4f8b")),(0,a.kt)("p",null,"\u90a3\u4ee5\u4e0a\u5c31\u662f Generics \u8ddf Utility types \u7684\u4ecb\u7d39\uff0c\u5e0c\u671b\u5c0d\u5927\u5bb6\u6709\u5e6b\u52a9\uff0c\u660e\u5929\u6703\u7e7c\u7e8c\u8b1b Typescript \u7684 narrowing\uff0c\u90a3\u5c31\u660e\u5929\u898b\u5566\uff01"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Resources:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html"},"https://www.typescriptlang.org/docs/handbook/utility-types.html")))}c.isMDXComponent=!0}}]);