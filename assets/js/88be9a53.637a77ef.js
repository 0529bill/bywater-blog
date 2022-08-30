"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[851],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,x=p["".concat(c,".").concat(f)]||p[f]||l[f]||o;return r?n.createElement(x,u(u({ref:t},d),{},{components:r})):n.createElement(x,u({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3043:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},u="[React] Redux",i={unversionedId:"React/Redux",id:"React/Redux",isDocsHomePage:!1,title:"[React] Redux",description:"\u70ba\u4ec0\u9ebc\u9700\u8981 Redux?",source:"@site/docs/React/Redux.md",sourceDirName:"React",slug:"/React/Redux",permalink:"/bywater-blog/React/Redux",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"[React] React reconciliation, Virtual DOM",permalink:"/bywater-blog/React/Reconciliation"},next:{title:"[others] Rendering Patterns",permalink:"/bywater-blog/others/rendering"}},c=[{value:"\u70ba\u4ec0\u9ebc\u9700\u8981 Redux?",id:"\u70ba\u4ec0\u9ebc\u9700\u8981-redux",children:[]},{value:"context api+useReducer vs Redux",id:"context-apiusereducer-vs-redux",children:[]},{value:"Redux Thunk vs Redux Saga",id:"redux-thunk-vs-redux-saga",children:[]}],s={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-redux"},"[React]"," Redux"),(0,a.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u9700\u8981-redux"},"\u70ba\u4ec0\u9ebc\u9700\u8981 Redux?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"redux-flow",src:r(4396).Z})),(0,a.kt)("h3",{id:""}),(0,a.kt)("h2",{id:"context-apiusereducer-vs-redux"},"context api+useReducer vs Redux"),(0,a.kt)("p",null,"Redux: \u9069\u7528\u65bc\u5927\u578b\u5f97\u5c08\u6848\uff0c\u6709\u8c50\u5bcc\u7684 middleware \u7b49\u7b2c\u4e09\u65b9\u5957\u4ef6\u53ef\u4ee5\u4f7f\u7528\u3002\ncontext api+useReducer:\u9069\u7528\u65bc\u5c0f\u578b\u5c08\u6848\uff0c\u5b78\u7fd2\u66f2\u7dda\u4f4e\u4e14\u6613\u65bc\u4f7f\u7528\u3002\u3002"),(0,a.kt)("h2",{id:"redux-thunk-vs-redux-saga"},"Redux Thunk vs Redux Saga"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.eternussolutions.com/2020/12/21/redux-thunk-redux-saga/#:~:text=Saga%20works%20like%20a%20separate,be%20minimized%20in%20redux%2Dthunk"},"https://www.eternussolutions.com/2020/12/21/redux-thunk-redux-saga/#:~:text=Saga%20works%20like%20a%20separate,be%20minimized%20in%20redux%2Dthunk")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6973977847547297800"},"https://juejin.cn/post/6973977847547297800")))}d.isMDXComponent=!0},4396:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/redux-flow-37ced90d950c30ffff886bd308bc3ca1.png"}}]);