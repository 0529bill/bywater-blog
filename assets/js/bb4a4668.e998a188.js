"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[4143],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=i.createContext({}),m=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=m(t.components);return i.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=m(n),d=a,b=u["".concat(p,".").concat(d)]||u[d]||s[d]||r;return n?i.createElement(b,o(o({ref:e},l),{},{components:n})):i.createElement(b,o({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6189:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},o="[Optimization] Basics",c={unversionedId:"Optimization/Basic_Optimization",id:"Optimization/Basic_Optimization",title:"[Optimization] Basics",description:"\u512a\u5316\u597d\u6587\uff1a",source:"@site/docs/Optimization/Basic_Optimization.md",sourceDirName:"Optimization",slug:"/Optimization/Basic_Optimization",permalink:"/bywater-blog/Optimization/Basic_Optimization",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"[React] Git basic",permalink:"/bywater-blog/Git/Basic"},next:{title:"[Optimization] React optimization",permalink:"/bywater-blog/Optimization/React"}},p={},m=[{value:"\u524d\u7aef CoreWebVital \u512a\u5316",id:"\u524d\u7aef-corewebvital-\u512a\u5316",level:2},{value:"social media tag for twitter/fb",id:"social-media-tag-for-twitterfb",level:2},{value:"\u6309\u9700\u8f38\u5165",id:"\u6309\u9700\u8f38\u5165",level:2},{value:"vite \u6309\u9700\u8f38\u5165 with antd",id:"vite-\u6309\u9700\u8f38\u5165-with-antd",level:4}],l={toc:m};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"optimization-basics"},"[Optimization]"," Basics"),(0,a.kt)("p",null,"\u512a\u5316\u597d\u6587\uff1a"),(0,a.kt)("p",null,"1.",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6994383328182796295"},"\u9a30\u8a0a\u512a\u5316\u5206\u4eab")),(0,a.kt)("h2",{id:"\u524d\u7aef-corewebvital-\u512a\u5316"},"\u524d\u7aef CoreWebVital \u512a\u5316"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gcdeng.com/blog/a-guidebook-to-optimize-web-vitals"},"https://gcdeng.com/blog/a-guidebook-to-optimize-web-vitals")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u512a\u5316 fonts",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://web.dev/optimize-webfont-loading/"},"https://web.dev/optimize-webfont-loading/")),(0,a.kt)("li",{parentName:"ul"},"\u512a\u5316 Critical Rendering Path",(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("a",{parentName:"li",href:"https://web.dev/critical-rendering-path/"},"https://web.dev/critical-rendering-path/"),(0,a.kt)("a",{parentName:"li",href:"https://medium.com/swlh/critical-rendering-path-in-react-the-important-yet-overlooked-performance-metric-32f6bb18869c"},"https://medium.com/swlh/critical-rendering-path-in-react-the-important-yet-overlooked-performance-metric-32f6bb18869c"),(0,a.kt)("a",{parentName:"li",href:"https://tcssh611503.medium.com/%E7%B6%B2%E7%AB%99%E5%89%8D%E7%AB%AF%E6%95%88%E8%83%BD%E5%84%AA%E5%8C%96-performance-optimize-%E7%9A%84%E6%96%B9%E6%B3%95-ec9b05804547"},"https://tcssh611503.medium.com/%E7%B6%B2%E7%AB%99%E5%89%8D%E7%AB%AF%E6%95%88%E8%83%BD%E5%84%AA%E5%8C%96-performance-optimize-%E7%9A%84%E6%96%B9%E6%B3%95-ec9b05804547"))),(0,a.kt)("h2",{id:"social-media-tag-for-twitterfb"},"social media tag for twitter/fb"),(0,a.kt)("p",null,"\u529f\u80fd\uff1a\u5728 social media \u4e2d\u8cbc\u4e0a\u9023\u7d50\u6642\u53ef\u4ee5\u986f\u793a\u5716\u7247\u8ddf\u6587\u5b57"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\n    {/* OpenGraph tags */}\n      <meta name="og:url" content={url} />\n      <meta name="og:title" content={title} />\n      <meta name="og:description" content={description} />\n      <meta name="og:image" content={image} />\n      <meta name="og:type" content="website" />\n      <meta name="fb:app_id" content={facebook.appId} />\n      {/* Twitter Card tags */}\n      <meta name="twitter:title" content={title} />\n      <meta name="twitter:description" content={description} />\n      <meta name="twitter:image" content={image} />\n      <meta name="twitter:card" content="summary" />\n      <meta\n        name="twitter:creator"\n        content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}\n      />\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5728 react \u4e2d\u53ef\u4ee5\u7528 react-helmet(",(0,a.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/react-helmet"},"https://www.npmjs.com/package/react-helmet"),")")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://edwardbeazer.com/social-meta-tags/"},"https://edwardbeazer.com/social-meta-tags/")),(0,a.kt)("h2",{id:"\u6309\u9700\u8f38\u5165"},"\u6309\u9700\u8f38\u5165"),(0,a.kt)("h4",{id:"vite-\u6309\u9700\u8f38\u5165-with-antd"},"vite \u6309\u9700\u8f38\u5165 with antd"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/meowtec/vite-plugin-import/issues/2#issuecomment-782555233"},"https://github.com/meowtec/vite-plugin-import/issues/2#issuecomment-782555233"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6926850164015497229"},"https://juejin.cn/post/6926850164015497229"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://3x.ant.design/docs/react/getting-started-cn"},"https://3x.ant.design/docs/react/getting-started-cn")))}s.isMDXComponent=!0}}]);