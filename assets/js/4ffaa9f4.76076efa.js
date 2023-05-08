"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[6723],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const c={sidebar_position:5},o="[React] React 18",i={unversionedId:"React/React18",id:"React/React18",title:"[React] React 18",description:"---",source:"@site/docs/React/React18.md",sourceDirName:"React",slug:"/React/React18",permalink:"/bywater-blog/React/React18",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"[React] React Optimization",permalink:"/bywater-blog/React/Optimization"},next:{title:"[React] Next",permalink:"/bywater-blog/React/Next"}},l={},p=[{value:"CPU \u74f6\u9838",id:"cpu-\u74f6\u9838",level:3},{value:"IO \u74f6\u9838",id:"io-\u74f6\u9838",level:3}],s={toc:p};function u(e){let{components:t,...c}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-react-18"},"[React]"," React 18"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u63a8\u85a6\u95b1\u8b80\u6587\u7ae0:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://react.iamkasong.com/#%E5%AF%BC%E5%AD%A6%E8%A7%86%E9%A2%91"},"https://react.iamkasong.com/#%E5%AF%BC%E5%AD%A6%E8%A7%86%E9%A2%91")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"React \u60f3\u89e3\u6c7a\u7684\u5169\u500b\u554f\u984c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"CPU \u74f6\u9838"),(0,a.kt)("li",{parentName:"ol"},"IO \u74f6\u9838")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8981\u9054\u5230\u4ee5\u4e0b\u6240\u505a\u7684\u4e8b\uff0c\u5fc5\u9808\u505a\u5230\u8b93\u540c\u6b65\u7684\u66f4\u65b0\u8b8a\u70ba\u53ef\u4e2d\u65b7\u7684\u7570\u6b65\u66f4\u65b0\u3002\u5728 React 16 \u4e2d\u66f4\u6539\u4e86 Scheduler, reconciler, Renderer \u7684\u67b6\u69cb\u4f86\u9054\u5230\u4e0a\u9762\u7684\u4e8b\u3002")),(0,a.kt)("p",null,"Scheduler\uff08\u8abf\u5ea6\u5668\uff09\u2014\u2014 \u8abf\u5ea6\u4efb\u52d9\u7684\u512a\u5148\u7d1a\uff0c\u9ad8\u512a\u4efb\u52d9\u512a\u5148\u9032\u5165 Reconciler\nReconciler\uff08\u5354\u8abf\u5668\uff09\u2014\u2014 \u8ca0\u8cac\u627e\u51fa\u8b8a\u5316\u7684\u7d44\u4ef6\uff0c\u5982\u679c Scheduler\uff08\u8abf\u5ea6\u5668)\u6709\u6a19\u8a18\u904e\u9ad8\u512a\u5148\u9806\u5e8f\u7684\u4efb\u52d9\uff0cReconciler\uff08\u5354\u8abf\u5668\uff09\u5c31\u6703\u66ab\u505c\u7576\u524d\u4efb\u52d9\uff0c\u4e26\u4e14\u512a\u5148\u57f7\u884c\u4efb\u52d9\u9806\u5e8f\u9ad8\u7684\u4efb\u52d9\u3002\nRenderer\uff08\u6e32\u67d3\u5668\uff09\u2014\u2014 \u8ca0\u8cac\u5c07\u8b8a\u5316\u7684\u7d44\u4ef6\u6e32\u67d3\u5230\u9801\u9762\u4e0a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Scheduler",src:r(4986).Z,width:"811",height:"344"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cpu-\u74f6\u9838"},"CPU \u74f6\u9838"),(0,a.kt)("p",null,"TL;DR"),(0,a.kt)("p",null,"\u7528 time slicing \u4f86\u78ba\u4fdd\u5c31\u7b97\u56e0\u70ba CPU \u74f6\u9838\u6240\u4ee5\u5c0e\u81f4 JS loading \u8b8a\u5927 blocking \u5230 paint,composition \u6642\uff0c\u9084\u662f\u53ef\u4ee5\u900f\u904e\u628a\u4efb\u52d9\u5207\u5206\u6210 chunks \u7684\u65b9\u5f0f\uff0c\u9810\u7559\u4e94\u79d2\u7d66\u700f\u89bd\u5668\u505a painting\uff0c\u4f86\u9054\u5230\u756b\u9762\u4e0d\u5361\u9813\u7684\u6548\u679c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"criticalRenderingPath",src:r(1273).Z,width:"1400",height:"256"})),(0,a.kt)("p",null,"\u700f\u89bd\u5668\u5728\u57f7\u884c\u6642\uff0c\u6703\u4f9d\u7167 critical rendering path \u7684\u9806\u5e8f\u89e3\u6790\uff0c\u4e3b\u6d41 device \u5237\u65b0\u983b\u7387\u70ba 60Hz\uff0c\u5373\u6bcf\uff081000ms / 60Hz\uff0916.6ms \u700f\u89bd\u5668\u5237\u65b0\u4e00\u6b21\uff0c\u6240\u4ee5\u7576 JS(DOM \u4e2d)\u57f7\u884c\u904e\u9577\u6642\uff0c\u5c31\u6703\u64cb\u5230\u5f8c\u9762\u7684 paint, composition\uff0c\u9020\u6210\u756b\u9762\u51fa\u73fe\u5361\u9813\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://harttle.land/2017/08/15/browser-render-frame.html"},"\u7bc4\u4f8b")),(0,a.kt)("p",null,"\u5237\u65b0\u7387:\u55ae\u4f4d\u70ba\u8d6b\u8332\uff0c\u4ee3\u8868\u6bcf\u79d2\u87a2\u5e55\u66f4\u65b0\u87a2\u5e55\u7684\u6b21\u6578\uff0c60hz \u5c31\u4ee3\u8868\u6bcf\u79d2\u53ef\u4ee5\u66f4\u65b0\u87a2\u5e55\u5f71\u50cf 60 \u6b21\u3002"),(0,a.kt)("p",null,"React \u89e3\u6c7a\u65b9\u6cd5\uff1a"),(0,a.kt)("p",null,"\u5728\u700f\u89bd\u5668\u6bcf\u4e00\u5e40\u7684\u6642\u9593\u4e2d\uff0c\u9810\u7559\u4e00\u4e9b\u6642\u9593\u7d66 JS \u7dda\u7a0b\uff0cReact \u5229\u7528\u9019\u90e8\u5206\u6642\u9593\u66f4\u65b0\u7d44\u4ef6\uff08\u5728\u6e90\u78bc\u4e2d\uff0c\u9810\u7559\u7684\u521d\u59cb\u6642\u9593\u662f 5ms\uff09\u3002\n\u7576\u9810\u7559\u7684\u6642\u9593\u4e0d\u5920\u7528\u6642\uff0cReact \u5c07\u7dda\u7a0b\u63a7\u5236\u6b0a\u4ea4\u9084\u7d66\u700f\u89bd\u5668\u4f7f\u5176\u6709\u6642\u9593\u6e32\u67d3 UI\uff0cReact \u5247\u7b49\u5f85\u4e0b\u4e00\u5e40\u6642\u9593\u5230\u4f86\u7e7c\u7e8c\u88ab\u4e2d\u65b7\u7684\u5de5\u4f5c\u3002\u63db\u53e5\u8a71\u8aaa\uff0ctime slicing \u5c31\u662f\u5c07\u540c\u6b65\u7684\u66f4\u65b0\u8b8a\u70ba\u53ef\u4e2d\u65b7\u7684\u7570\u6b65\u66f4\u65b0\u3002\u6240\u4ee5\u5728\u57f7\u884c JS \u4efb\u52d9\u6642\uff0c\u9810\u5148\u9810\u7559\u51fa\u6642\u9593\uff0c\u7576\u5de5\u4f5c\u57f7\u884c\u904e\u9577\u6642\uff0c\u5c31\u5148\u66ab\u505c\u7576\u524d\u7684\u5de5\u4f5c\uff0c\u7b49\u4e0b\u4e00\u6b21\u7684\u5237\u65b0\u6e32\u67d3\u6642\uff0c\u518d\u7e7c\u7e8c\u57f7\u884c\u3002"),(0,a.kt)("h3",{id:"io-\u74f6\u9838"},"IO \u74f6\u9838"),(0,a.kt)("p",null,"\u7db2\u8def\u5ef6\u9072\u662f\u524d\u7aef\u7121\u6cd5\u89e3\u6c7a\u7684\u554f\u984c\uff0c\u4f46\u662f\u53ef\u5df2\u900f\u904e\u66f4\u6539\u756b\u9762\u7684\u986f\u793a\uff0c\u4f86\u589e\u52a0\u4f7f\u7528\u8005\u9ad4\u9a57\u3002"),(0,a.kt)("p",null,"React \u5229\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useTransition"),"\u4f86\u628a\u4efb\u52d9\u8a2d\u5b9a\u6210\u975e\u7dca\u6025\uff0c\u8b93\u4efb\u52d9\u53ef\u4ee5\u88ab interrupt\uff0c\u4f86\u907f\u514d\u56e0\u70ba\u4e00\u500b loading \u592a\u4e45\u800c\u5c0e\u81f4\u9801\u9762\u5361\u9813\u7684\u60c5\u6cc1\u3002\n",(0,a.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/apis/react/useTransition"},"useTransition \u8209\u4f8b")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Resources:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7010539227284766751"},"https://juejin.cn/post/7010539227284766751"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://react.iamkasong.com/preparation/idea.html#cpu%E7%9A%84%E7%93%B6%E9%A2%88"},"https://react.iamkasong.com/preparation/idea.html#cpu%E7%9A%84%E7%93%B6%E9%A2%88"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969"},"https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969")),(0,a.kt)("p",null,"\u700f\u89bd\u5668 frame rate\n",(0,a.kt)("a",{parentName:"p",href:"https://harttle.land/2017/08/15/browser-render-frame.html"},"https://harttle.land/2017/08/15/browser-render-frame.html")))}u.isMDXComponent=!0},1273:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CRP-b00744949041488d8d873d97ed782d8f.png"},4986:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/reconciler-da5cc3c2342a13656e9d8da82d85c3a9.png"}}]);