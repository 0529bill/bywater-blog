"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[7474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||n;return r?o.createElement(d,s(s({ref:t},p),{},{components:r})):o.createElement(d,s({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1634:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var o=r(7462),i=(r(7294),r(3905));const n={sidebar_position:6},s="[others] CSS trivia",a={unversionedId:"others/cssTrivia",id:"others/cssTrivia",isDocsHomePage:!1,title:"[others] CSS trivia",description:"Specificity \u6b0a\u91cd",source:"@site/docs/others/cssTrivia.md",sourceDirName:"others",slug:"/others/cssTrivia",permalink:"/bywater-blog/others/cssTrivia",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"[others] npm, yarn & pnpm",permalink:"/bywater-blog/others/npm"},next:{title:"[others] Computer science basics",permalink:"/bywater-blog/others/computerScience"}},c=[{value:"Specificity \u6b0a\u91cd",id:"specificity-\u6b0a\u91cd",children:[]},{value:"box model",id:"box-model",children:[]},{value:"css layout",id:"css-layout",children:[]}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"others-css-trivia"},"[others]"," CSS trivia"),(0,i.kt)("h3",{id:"specificity-\u6b0a\u91cd"},"Specificity \u6b0a\u91cd"),(0,i.kt)("p",null,"Every CSS selector has its place in the specificity hierarchy."),(0,i.kt)("p",null,"There are four categories which define the specificity level of a selector:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'1. important\n2. Inline styles - Example: <h1 style="color: pink;">\n3. IDs - Example: #navbar\n4. Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [href]\n5. Elements and pseudo-elements - Example: h1, :before\n')),(0,i.kt)("p",null,"resources:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3schools.com/css/css_specificity.asp"},"https://www.w3schools.com/css/css_specificity.asp")),(0,i.kt)("h3",{id:"box-model"},"box model"),(0,i.kt)("p",null,"box model explain\n",(0,i.kt)("a",{parentName:"p",href:"https://www.oxxostudio.tw/articles/202008/css-box-model.html"},"https://www.oxxostudio.tw/articles/202008/css-box-model.html")),(0,i.kt)("p",null,"margin(\u5143\u7d20\u5916\u64f4\u5c55) vs padding(\u5143\u7d20\u5167\u64f4\u5c55)\n",(0,i.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10205322"},"https://ithelp.ithome.com.tw/articles/10205322")),(0,i.kt)("h3",{id:"css-layout"},"css layout"),(0,i.kt)("h4",{id:"\u4ec0\u9ebc\u662f-box-sizingborder-box"},"\u4ec0\u9ebc\u662f box-sizing:border-box?"),(0,i.kt)("p",null,"\u8a2d\u5b9a box-sizing:border-box \u4e0d\u7528\u518d\u53bb\u8a08\u7b97\u5be6\u969b\u7684 width/height\uff0c\u56e0\u70ba width/height \u6703\u8a2d\u5b9a\u70ba border-box\uff0c\u4ee3\u8868 padding \u6703\u5f80 border-box \u88e1\u9762\u9577\uff0cmargin \u5247\u6703\u5f80\u5916\u9577\uff0cwidth/height \u4e0d\u6703\u56e0\u6b64\u800c\u6539\u8b8a\u3002"),(0,i.kt)("p",null,"\u5c07 box-sizing \u8a2d\u5b9a\u6210 border-box \u5f8c\uff0c width / height \u7684\u4f5c\u7528\u7bc4\u570d\u5c31\u662f\u6307\u5230 border \u9019\u500b box \u7684\u7bc4\u570d\u4e86\uff0c\u6211\u5011\u5c31\u7a31\u70ba border-box\uff0c\u5f9e\u524d\u9762\u6240\u5beb\u7684\u53ef\u4ee5\u4e86\u89e3\u4e00\u500b\u7269\u4ef6\u7684\u7bc4\u570d\uff0c\u662f\u7531\u56db\u500b\u5c64\u5c64\u5305\u88f9\u7684\u77e9\u5f62\u6240\u69cb\u6210\uff0c\u6b64\u6642 width \u6240\u4f5c\u7528\u7684 box \u5c31\u662f border \u9019\u500b\u7bc4\u570d\u4e86\uff0c\u5982\u4e0b\u5716\u6240\u793a(\u5716\u7247\u53d6\u81ea Chrome DevTools)"),(0,i.kt)("h4",{id:"css-position"},"css position?"),(0,i.kt)("h4",{id:"css-flex"},"css flex?"),(0,i.kt)("h4",{id:"css-grid"},"css grid?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10252827"},"https://ithelp.ithome.com.tw/articles/10252827"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://zh-tw.learnlayout.com/box-sizing.html"},"https://zh-tw.learnlayout.com/box-sizing.html")))}p.isMDXComponent=!0}}]);