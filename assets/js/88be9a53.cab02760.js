"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[3851],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>x});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),x=a,f=p["".concat(i,".").concat(x)]||p[x]||d[x]||o;return r?n.createElement(f,u(u({ref:t},s),{},{components:r})):n.createElement(f,u({ref:t},s))}));function x(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3043:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>u,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},u="[React] Redux",c={unversionedId:"React/Redux",id:"React/Redux",isDocsHomePage:!1,title:"[React] Redux",description:"\u70ba\u4ec0\u9ebc\u9700\u8981 Redux?",source:"@site/docs/React/Redux.md",sourceDirName:"React",slug:"/React/Redux",permalink:"/bywater-blog/React/Redux",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"[React] React reconciliation, Virtual DOM",permalink:"/bywater-blog/React/Reconciliation"},next:{title:"[React] React Hooks",permalink:"/bywater-blog/React/Hook"}},i=[{value:"\u70ba\u4ec0\u9ebc\u9700\u8981 Redux?",id:"\u70ba\u4ec0\u9ebc\u9700\u8981-redux",children:[]},{value:"Redux-Flow",id:"redux-flow",children:[]},{value:"context api+useReducer vs Redux",id:"context-apiusereducer-vs-redux",children:[]},{value:"Redux Thunk vs Redux Saga",id:"redux-thunk-vs-redux-saga",children:[]}],l={toc:i};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-redux"},"[React]"," Redux"),(0,a.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u9700\u8981-redux"},"\u70ba\u4ec0\u9ebc\u9700\u8981 Redux?"),(0,a.kt)("p",null,":\u5728\u5927\u578b\u5c08\u6848\u4e2d\uff0cstate \u7684\u6578\u91cf\u8b8a\u5f97\u6108\u4f86\u8d8a\u80fd\u638c\u63e1\uff0c\u9019\u6642\u5019\u6211\u5011\u9700\u8981\u4e00\u500b\u5171\u540c\u5132\u5b58 state \u7684\u5730\u65b9\uff0c\u8b93\u6211\u5011\u80fd\u5920\u5728\u4efb\u4f55 component \u4e2d\u4f7f\u7528\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","redux \u7684\u512a\u9ede\u70ba"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u4e86\u4e00\u500b store \u4f86\u7ba1\u7406 global state(single source of truth)\u3002\n",(0,a.kt)("img",{alt:"redux-globalState",src:r(4396).Z})),(0,a.kt)("li",{parentName:"ol"},"state \u662f\u552f\u7368\u7684\uff0c\u4e26\u4e14\u552f\u4e00\u7684\u65b9\u6cd5\u662f\u900f\u904e dispatch action\uff0c\u85c9\u6b64\u4f86\u9054\u5230 immutable \u4f86\u9632\u6b62 mutate \u5230 state\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u628a state \u5206\u5230\u500b\u5225\u7684 reducer \u88e1\u9762\u3002")),(0,a.kt)("h2",{id:"redux-flow"},"Redux-Flow"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"redux-data-flow",src:r(4190).Z})),(0,a.kt)("p",null,"\u4e09\u500b\u4e3b\u8981\u7684\u6982\u5ff5\uff1astore, action, reducer"),(0,a.kt)("p",null,"\u904e\u7a0b\uff1a\u5f9e store \u62ff\u5230 state\uff0c\u986f\u793a\u5728 view \u4e0a\uff0c\u7136\u5f8c\u7576\u8981\u505a state \u66f4\u52d5\u6642\uff0c\u767c\u8d77\u4e00\u500b action \u5230 state \u88e1\u7684 reducer \u88e1\u9762\uff0creducer \u88e1\u9762\u63cf\u8ff0\u4e86 action \u8981\u5982\u4f55\u66f4\u52d5 state\uff0c\u6700\u5f8c\u88ab\u66f4\u52d5\u7684 state \u6703\u56de\u5230 store \u88e1\u9762\uff0c\u5b8c\u6210\u4e00\u6b21\u5faa\u74b0\u3002"),(0,a.kt)("h2",{id:"context-apiusereducer-vs-redux"},"context api+useReducer vs Redux"),(0,a.kt)("p",null,"Redux: \u9069\u7528\u65bc\u5927\u578b\u5f97\u5c08\u6848\uff0c\u6709\u8c50\u5bcc\u7684 middleware \u7b49\u7b2c\u4e09\u65b9\u5957\u4ef6\u53ef\u4ee5\u4f7f\u7528\u3002\ncontext api+useReducer:\u9069\u7528\u65bc\u5c0f\u578b\u5c08\u6848\uff0c\u5b78\u7fd2\u66f2\u7dda\u4f4e\u4e14\u6613\u65bc\u4f7f\u7528\u3002\u3002"),(0,a.kt)("h2",{id:"redux-thunk-vs-redux-saga"},"Redux Thunk vs Redux Saga"),(0,a.kt)("h4",{id:"redux-thunk"},"Redux Thunk:"),(0,a.kt)("p",null,":\u8b93 action \u53ef\u4ee5\u8fd4\u56de\u4e00\u500b function\uff0c\u800c\u88e1\u9762\u53ef\u4ee5\u505a\u975e\u540c\u6b65\u7684\u64cd\u4f5c\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u7f3a\u9ede:\u6bcf\u500b\u975e\u540c\u6b65\u64cd\u4f5c\u90fd\u9700\u8981\u642d\u914d action\uff0c\u53ef\u80fd\u6703\u9020\u6210\u96e3\u4ee5\u7ba1\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//thunk action => return a function\nexport function thunkAction() {\n  return async (dispatch) => {\n    const result = await new apis.Store(); // call api\n    dispatch({ types: "xxx", data: result });\n  };\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// action\nexport function action() {\n  return {\n    type: "xxx",\n    data: xxx,\n  };\n}\n')),(0,a.kt)("h4",{id:"redux-saga"},"Redux Saga\uff1a"),(0,a.kt)("p",null,":\u529f\u80fd\u66f4\u70ba\u5f37\u5927\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903918103691271"},"https://juejin.cn/post/6844903918103691271")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.eternussolutions.com/2020/12/21/redux-thunk-redux-saga/#:~:text=Saga%20works%20like%20a%20separate,be%20minimized%20in%20redux%2Dthunk"},"https://www.eternussolutions.com/2020/12/21/redux-thunk-redux-saga/#:~:text=Saga%20works%20like%20a%20separate,be%20minimized%20in%20redux%2Dthunk")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6973977847547297800"},"https://juejin.cn/post/6973977847547297800")))}s.isMDXComponent=!0},4190:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/redux-data-flow-33f543c880c6b4f1d5c03cbc30457ddb.png"},4396:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/redux-flow-37ced90d950c30ffff886bd308bc3ca1.png"}}]);