"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5445:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:2},o="[others] React reconciliation, Virtual DOM",c={unversionedId:"React/Reconciliation",id:"React/Reconciliation",isDocsHomePage:!1,title:"[others] React reconciliation, Virtual DOM",description:"\u4ec0\u9ebc\u662f Virtual DOM",source:"@site/docs/React/Reconciliation.md",sourceDirName:"React",slug:"/React/Reconciliation",permalink:"/bywater-blog/React/Reconciliation",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"[others] React trivia",permalink:"/bywater-blog/React/trivia"},next:{title:"[others] Rendering Patterns",permalink:"/bywater-blog/others/rendering"}},l=[{value:"\u4ec0\u9ebc\u662f Virtual DOM",id:"\u4ec0\u9ebc\u662f-virtual-dom",children:[]},{value:"\u4ec0\u9ebc\u662f React reconciliation",id:"\u4ec0\u9ebc\u662f-react-reconciliation",children:[]},{value:"\u70ba\u4ec0\u9ebc\u9700\u8981 reconciliation?",id:"\u70ba\u4ec0\u9ebc\u9700\u8981-reconciliation",children:[]},{value:"\u4ec0\u9ebc\u662f React fiber?",id:"\u4ec0\u9ebc\u662f-react-fiber",children:[]}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"others-react-reconciliation-virtual-dom"},"[others]"," React reconciliation, Virtual DOM"),(0,i.kt)("h3",{id:"\u4ec0\u9ebc\u662f-virtual-dom"},"\u4ec0\u9ebc\u662f Virtual DOM"),(0,i.kt)("p",null,"Virtual DOM \u5be6\u969b\u4e0a\u5c31\u662f\u7528\u7269\u4ef6\u4f86\u63cf\u8ff0 DOM \u7684\u7d50\u69cb\u4e26\u5132\u5b58\u5728 memory \u88e1\uff0c\u5728 DOM \u7684\u7bc0\u9ede\u9700\u8981\u66f4\u52d5\u6642\uff0c\u4e0d\u76f4\u63a5\u4fee\u6539 DOM\uff0c\u800c\u662f\u900f\u904e diff \u6f14\u7b97\u6cd5\u6bd4\u8f03 Virtual DOM \u4fee\u6539\u524d\u8207\u4fee\u6539\u5f8c\u7684\u6a39\u72c0\u7d50\u69cb\uff0c\u7136\u5f8c\u6279\u6b21\u66f4\u65b0\u771f\u5be6 DOM \u4e2d\u7684\u7bc0\u9ede\u3002"),(0,i.kt)("h3",{id:"\u4ec0\u9ebc\u662f-react-reconciliation"},"\u4ec0\u9ebc\u662f React reconciliation"),(0,i.kt)("p",null,":reconciliation \u6307\u7684\u662f react \u66f4\u65b0 Virtual-DOM \u548c DOM \u7684\u904e\u7a0b\uff0c\u900f\u904e\u53ea\u66f4\u65b0\u6709\u66f4\u52d5\u7684\u90e8\u5206\uff0c\u8b93 React \u53ef\u4ee5\u6bd4\u64cd\u4f5c\u539f\u751f DOM \u66f4\u7701\u6548\u80fd\u8ddf\u5feb\u901f\u3002"),(0,i.kt)("h3",{id:"\u70ba\u4ec0\u9ebc\u9700\u8981-reconciliation"},"\u70ba\u4ec0\u9ebc\u9700\u8981 reconciliation?"),(0,i.kt)("p",null,"\u56e0\u70ba\u700f\u89bd\u5668\u7684 DOM \u64cd\u4f5c\u662f\u5f88\u6d88\u8017\u8cc7\u6e90\u7684\u3002\u900f\u904e React \u63d0\u4f9b\u7684 declarative api(\u5ba3\u544a\u5f0f api\uff0c\u6307\u50c5\u9700\u8981\u7528\u5176\u900f\u904e\u7684 api \u4f86\u57f7\u884c\u7a0b\u5f0f\uff0c\u800c\u4e0d\u9700\u8981\u64cd\u63a7\u5230\u5e95\u5c64\u5f97\u5167\u5bb9\u3002Ex, react \u63d0\u4f9b render, jsx \u8a9e\u6cd5\u8b93\u6211\u5011\u4e0d\u7528\u5be6\u969b\u64cd\u63a7\u5230 DOM)\uff0c\u548c\u5176 diff \u6f14\u7b97\u6cd5(\u53ea\u6539\u52d5 virtual-DOM \u4e2d\u6709\u6539\u52d5\u7684\u90e8\u5206)\uff0c\u8b93\u7a0b\u5f0f\u53ef\u4ee5\u5728 state \u6539\u8b8a\u7684\u60c5\u6cc1\u4e0b\u66f4\u5feb\u901f\u3002"),(0,i.kt)("h3",{id:"\u4ec0\u9ebc\u662f-react-fiber"},"\u4ec0\u9ebc\u662f React fiber?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000039682751"},"https://segmentfault.com/a/1190000039682751")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1882296"},"https://cloud.tencent.com/developer/article/1882296"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://tech-blog.cymetrics.io/posts/mingyou/deep-dive-into-react-fiber/"},"https://tech-blog.cymetrics.io/posts/mingyou/deep-dive-into-react-fiber/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/reconciliation.html"},"https://reactjs.org/docs/reconciliation.html"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/acdlite/react-fiber-architecture"},"https://github.com/acdlite/react-fiber-architecture"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://hackernoon.com/virtual-dom-reconciliation-and-diffing-algorithm-explained-simply-ycn34gr"},"https://hackernoon.com/virtual-dom-reconciliation-and-diffing-algorithm-explained-simply-ycn34gr")))}u.isMDXComponent=!0}}]);