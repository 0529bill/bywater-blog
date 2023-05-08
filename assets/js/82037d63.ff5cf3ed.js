"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[3293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),b=i,d=m["".concat(p,".").concat(b)]||m[b]||s[b]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},a="[Optimization] \u5be6\u969b\u5de5\u4f5c\u512a\u5316\u7d93\u9a57",l={unversionedId:"Optimization/optimizatoin_job",id:"Optimization/optimizatoin_job",title:"[Optimization] \u5be6\u969b\u5de5\u4f5c\u512a\u5316\u7d93\u9a57",description:"\u76ee\u6a19\uff1a \u89e3\u6c7a bundle size \u592a\u5927\u5f97\u554f\u984c",source:"@site/docs/Optimization/optimizatoin_job.md",sourceDirName:"Optimization",slug:"/Optimization/optimizatoin_job",permalink:"/bywater-blog/Optimization/optimizatoin_job",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"[Optimization] React optimization",permalink:"/bywater-blog/Optimization/React"},next:{title:"[Optimization] Sitemap",permalink:"/bywater-blog/Optimization/sitemap"}},p={},u=[{value:"\u76ee\u6a19\uff1a \u89e3\u6c7a bundle size \u592a\u5927\u5f97\u554f\u984c",id:"\u76ee\u6a19-\u89e3\u6c7a-bundle-size-\u592a\u5927\u5f97\u554f\u984c",level:2},{value:"\u512a\u5316\u65b9\u6cd5\uff1a",id:"\u512a\u5316\u65b9\u6cd5",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"optimization-\u5be6\u969b\u5de5\u4f5c\u512a\u5316\u7d93\u9a57"},"[Optimization]"," \u5be6\u969b\u5de5\u4f5c\u512a\u5316\u7d93\u9a57"),(0,i.kt)("h2",{id:"\u76ee\u6a19-\u89e3\u6c7a-bundle-size-\u592a\u5927\u5f97\u554f\u984c"},"\u76ee\u6a19\uff1a \u89e3\u6c7a bundle size \u592a\u5927\u5f97\u554f\u984c"),(0,i.kt)("p",null,"\u5de5\u5177\uff1a vite-bundle-analyzer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53ef\u8996\u5316 bundle size")),(0,i.kt)("h3",{id:"\u512a\u5316\u65b9\u6cd5"},"\u512a\u5316\u65b9\u6cd5\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"rollup up manualChunks\n\u628a bundle size \u592a\u5927\u7684\u5957\u4ef6\u5207\u5206\u6210\u5c0f\u7684 chunk")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"React lazy loading / routed-based lazy loading\n\u521d\u6b65\u7684 lazy loading \u5f9e routes \u958b\u59cb\uff0c\u5728 routes \u7684\u90e8\u5206\u65b0\u589e react lazy load\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Route-based lazy loading \u6703\u5c0e\u81f4\u5728\u8def\u7531\u5207\u63db\u6642\uff0c\u6709\u77ed\u66ab\u7684 loading \u6642\u6240\u9020\u6210\u7684\u767d\u983b\uff0c\u9019\u88e1\u5c31\u8981\u914d\u5408\u696d\u52d9\u908f\u8f2f\u53bb\u7528 suspense \u6216\u662f\u5176\u4ed6\u4f86\u89e3\u6c7a")))))}s.isMDXComponent=!0}}]);