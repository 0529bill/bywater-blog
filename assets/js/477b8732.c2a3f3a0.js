"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[4450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},o="[React] React reconciliation, Virtual DOM",c={unversionedId:"React/Reconciliation",id:"React/Reconciliation",title:"[React] React reconciliation, Virtual DOM",description:"\u4ec0\u9ebc\u662f Virtual DOM",source:"@site/docs/React/Reconciliation.md",sourceDirName:"React",slug:"/React/Reconciliation",permalink:"/bywater-blog/React/Reconciliation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"[React] React trivia",permalink:"/bywater-blog/React/trivia"},next:{title:"[React] Redux",permalink:"/bywater-blog/React/Redux"}},l={},p=[{value:"\u4ec0\u9ebc\u662f Virtual DOM",id:"\u4ec0\u9ebc\u662f-virtual-dom",level:3},{value:"\u4ec0\u9ebc\u662f React reconciliation",id:"\u4ec0\u9ebc\u662f-react-reconciliation",level:3},{value:"\u70ba\u4ec0\u9ebc\u9700\u8981 reconciliation?",id:"\u70ba\u4ec0\u9ebc\u9700\u8981-reconciliation",level:3},{value:"\u4ec0\u9ebc\u662f React fiber?",id:"\u4ec0\u9ebc\u662f-react-fiber",level:3}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-react-reconciliation-virtual-dom"},"[React]"," React reconciliation, Virtual DOM"),(0,a.kt)("h3",{id:"\u4ec0\u9ebc\u662f-virtual-dom"},"\u4ec0\u9ebc\u662f Virtual DOM"),(0,a.kt)("p",null,"Virtual DOM \u5be6\u969b\u4e0a\u5c31\u662f\u7528\u7269\u4ef6\u4f86\u63cf\u8ff0 DOM \u7684\u7d50\u69cb\u4e26\u5132\u5b58\u5728 memory \u88e1\uff0c\u5728 DOM \u7684\u7bc0\u9ede\u9700\u8981\u66f4\u52d5\u6642\uff0c\u4e0d\u76f4\u63a5\u4fee\u6539 DOM\uff0c\u800c\u662f\u900f\u904e diff \u6f14\u7b97\u6cd5\u6bd4\u8f03 Virtual DOM \u4fee\u6539\u524d\u8207\u4fee\u6539\u5f8c\u7684\u6a39\u72c0\u7d50\u69cb\uff0c\u7136\u5f8c\u6279\u6b21\u66f4\u65b0\u771f\u5be6 DOM \u4e2d\u7684\u7bc0\u9ede\u3002"),(0,a.kt)("h3",{id:"\u4ec0\u9ebc\u662f-react-reconciliation"},"\u4ec0\u9ebc\u662f React reconciliation"),(0,a.kt)("p",null,":reconciliation \u6307\u7684\u662f react \u66f4\u65b0 Virtual-DOM \u548c DOM \u7684\u904e\u7a0b\uff0c\u900f\u904e\u53ea\u66f4\u65b0\u6709\u66f4\u52d5\u7684\u90e8\u5206\uff0c\u8b93 React \u53ef\u4ee5\u6bd4\u64cd\u4f5c\u539f\u751f DOM \u66f4\u7701\u6548\u80fd\u8ddf\u5feb\u901f\u3002"),(0,a.kt)("h3",{id:"\u70ba\u4ec0\u9ebc\u9700\u8981-reconciliation"},"\u70ba\u4ec0\u9ebc\u9700\u8981 reconciliation?"),(0,a.kt)("p",null,"\u56e0\u70ba\u700f\u89bd\u5668\u7684 DOM \u64cd\u4f5c\u662f\u5f88\u6d88\u8017\u8cc7\u6e90\u7684\u3002\u900f\u904e React \u63d0\u4f9b\u7684 declarative api(\u5ba3\u544a\u5f0f api\uff0c\u6307\u50c5\u9700\u8981\u7528\u5176\u900f\u904e\u7684 api \u4f86\u57f7\u884c\u7a0b\u5f0f\uff0c\u800c\u4e0d\u9700\u8981\u64cd\u63a7\u5230\u5e95\u5c64\u5f97\u5167\u5bb9\u3002Ex, react \u63d0\u4f9b render, jsx \u8a9e\u6cd5\u8b93\u6211\u5011\u4e0d\u7528\u5be6\u969b\u64cd\u63a7\u5230 DOM)\uff0c\u548c\u5176 diff \u6f14\u7b97\u6cd5(\u53ea\u6539\u52d5 virtual-DOM \u4e2d\u6709\u6539\u52d5\u7684\u90e8\u5206)\uff0c\u8b93\u7a0b\u5f0f\u53ef\u4ee5\u5728 state \u6539\u8b8a\u7684\u60c5\u6cc1\u4e0b\u66f4\u5feb\u901f\u3002"),(0,a.kt)("h3",{id:"\u4ec0\u9ebc\u662f-react-fiber"},"\u4ec0\u9ebc\u662f React fiber?"),(0,a.kt)("p",null,"TLDR: React fiber(a unit of work) \u662f\u5167\u90e8\u7684\u5f15\u64ce\u6a5f\u5236\uff0c\u9054\u5230\u5e7e\u4ef6\u4e8b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5c07\u9801\u9762\u6e32\u67d3\u7684\u4efb\u52d9\u5207\u5206\u6210 chunks(time slicing)"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u540c\u7684\u4efb\u52d9\u53ef\u4ee5\u6709\u512a\u5148\u7b49\u7d1a"),(0,a.kt)("li",{parentName:"ol"},"\u4efb\u52d9\u53ef\u4ee5\u66ab\u505c\uff0c\u4e4b\u5f8c\u518d\u7e7c\u7e8c\u57f7\u884c\uff08\u9019\u4e5f\u662f\u5c07\u4efb\u52d9\u5206\u512a\u5148\u7d1a\u7684\u76ee\u7684\uff0c\u7576\u505a\u5230\u4e00\u534a\u51fa\u73fe\u66f4\u9ad8\u512a\u5148\u7d1a\u7684\u4efb\u52d9\u7684\u6642\u5019\uff0c\u53ef\u4ee5\u5148\u66ab\u505c\u76ee\u524d\u5de5\u4f5c\u7684\u57f7\u884c\uff0c\u7b49\u8655\u7406\u5b8c\u9ad8\u512a\u5148\u4efb\u52d9\u5f8c\u518d\u56de\u4f86\u7e7c\u7e8c\u57f7\u884c\uff09"),(0,a.kt)("li",{parentName:"ol"},"fiber \u662f asynchronous")),(0,a.kt)("p",null,"\u4f86\u89e3\u6c7a\u9801\u9762\u5361\u9813\u7b49\u7834\u58de\u4f7f\u7528\u8005\u9ad4\u9a57\u7684\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"\u820a\u7684 reconciler: stack"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"stack \u662f synchronous"),(0,a.kt)("li",{parentName:"ol"},"\u53ea\u6709\u5728 stack \u662f empty \u6642\u624d\u80fd\u518d\u6b21\u4f7f\u7528")),(0,a.kt)("p",null,"fiber always has a 1-1 relationship with 'something'\uff08ex, fragment, functionalComponent, contextConsumer...\uff09"),(0,a.kt)("p",null,"render phase:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"asynchronous"),(0,a.kt)("li",{parentName:"ol"},"tasks can be prioritized")),(0,a.kt)("p",null,"commit phase:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"synchronous and can't be interrupted")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Resources:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/lets-fall-in-love-with-react-fiber-90f2e1f68ded/"},"https://www.freecodecamp.org/news/lets-fall-in-love-with-react-fiber-90f2e1f68ded/"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/starbugs/react-%E9%96%8B%E7%99%BC%E8%80%85%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E5%BA%95%E5%B1%A4%E6%9E%B6%E6%A7%8B-react-fiber-c3ccd3b047a1"},"https://medium.com/starbugs/react-%E9%96%8B%E7%99%BC%E8%80%85%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E5%BA%95%E5%B1%A4%E6%9E%B6%E6%A7%8B-react-fiber-c3ccd3b047a1"),"\n","\xa0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000039682751"},"https://segmentfault.com/a/1190000039682751")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1882296"},"https://cloud.tencent.com/developer/article/1882296"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://tech-blog.cymetrics.io/posts/mingyou/deep-dive-into-react-fiber/"},"https://tech-blog.cymetrics.io/posts/mingyou/deep-dive-into-react-fiber/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/reconciliation.html"},"https://reactjs.org/docs/reconciliation.html"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/acdlite/react-fiber-architecture"},"https://github.com/acdlite/react-fiber-architecture"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://hackernoon.com/virtual-dom-reconciliation-and-diffing-algorithm-explained-simply-ycn34gr"},"https://hackernoon.com/virtual-dom-reconciliation-and-diffing-algorithm-explained-simply-ycn34gr")))}s.isMDXComponent=!0}}]);