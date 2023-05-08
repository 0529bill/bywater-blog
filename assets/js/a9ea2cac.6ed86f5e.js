"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[8380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(n),h=r,m=k["".concat(l,".").concat(h)]||k[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:17},i="[others] \u524d\u7aef\u767b\u5165",s={unversionedId:"others/login",id:"others/login",title:"[others] \u524d\u7aef\u767b\u5165",description:"\u56db\u7a2e\u524d\u7aef\u767b\u5165\u7684\u65b9\u6cd5\uff1a",source:"@site/docs/others/login.md",sourceDirName:"others",slug:"/others/login",permalink:"/bywater-blog/others/login",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"[others] HTML",permalink:"/bywater-blog/others/html"},next:{title:"[others] \u524d\u7aef architecture",permalink:"/bywater-blog/others/architecture"}},l={},p=[{value:"Cookie + Session \u767b\u9304",id:"cookie--session-\u767b\u9304",level:2},{value:"Cookie + session \u7684\u554f\u984c",id:"cookie--session-\u7684\u554f\u984c",level:3},{value:"token \u767b\u5165",id:"token-\u767b\u5165",level:2},{value:"oAuth \u767b\u5165",id:"oauth-\u767b\u5165",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"others-\u524d\u7aef\u767b\u5165"},"[others]"," \u524d\u7aef\u767b\u5165"),(0,r.kt)("p",null,"\u56db\u7a2e\u524d\u7aef\u767b\u5165\u7684\u65b9\u6cd5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cookie + Session \u767b\u9304"),(0,r.kt)("li",{parentName:"ol"},"Token \u767b\u9304 (ex, JWT)"),(0,r.kt)("li",{parentName:"ol"},"SSO \u55ae\u9ede\u767b\u9304"),(0,r.kt)("li",{parentName:"ol"},"OAuth \u7b2c\u4e09\u65b9\u767b\u9304")),(0,r.kt)("h2",{id:"cookie--session-\u767b\u9304"},"Cookie + Session \u767b\u9304"),(0,r.kt)("p",null,"\u9996\u6b21\u767b\u5165\u6642\u7684\u72c0\u614b\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"cookie",src:n(2734).Z,width:"744",height:"254"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u767b\u5165\u6210\u529f\u5f8c\uff0c\u5f8c\u7aef\u6703\u7522\u751f\u4e00\u7d44 sessionId \u5132\u5b58\u5728\u5f8c\u7aef\u4e26\u4e14\u540c\u6642\u628a\u8a72 id \u548c expire date \u5beb\u5165\u5728 cookie \u4e2d\uff0c\u7136\u5f8c\u56de\u50b3\u7d66\u524d\u7aef\uff0c\u4f86\u505a\u4e0b\u6b21\u767b\u5165\u6642\u7684\u9a57\u8b49\u3002")),(0,r.kt)("p",null,"express \u4e2d\u5e38\u7528\u7684 session \u751f\u6210\u5957\u4ef6\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/express-session"},"https://www.npmjs.com/package/express-session")),(0,r.kt)("p",null,"\u6216\u662f\u4e5f\u53ef\u4ee5\u7528 uuid, date \u4f86\u5be6\u4f5c\u4e00\u500b session method\u3002"),(0,r.kt)("p",null,"\u518d\u6b21\u767b\u5165\u72c0\u614b\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"cookie2",src:n(3291).Z,width:"744",height:"254"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u9032\u5230\u9801\u9762\u6642\uff0c\u5982\u679c\u6c92\u6709\u5e36 cookie \u6216\u662f cookie \u4e2d\u7684 session \u5df2\u7d93\u7121\u6548\uff0c\u5c31\u628a\u4f7f\u7528\u8005\u5c0e\u89bd\u56de\u767b\u5165\u9801\u9762\u3002")),(0,r.kt)("h3",{id:"cookie--session-\u7684\u554f\u984c"},"Cookie + session \u7684\u554f\u984c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"session \u9700\u8981\u5132\u653e\u5728\u5f8c\u7aef\uff0c\u5728\u5927\u91cf\u4f7f\u7528\u8005\u7684\u60c5\u6cc1\u4e0b\uff0c\u6703\u9020\u6210\u9700\u8981\u5132\u5b58\u5f88\u591a\u4f7f\u7528\u8005 session \u8cc7\u6599\u7684\u554f\u984c\u3002")),(0,r.kt)("h2",{id:"token-\u767b\u5165"},"token \u767b\u5165"),(0,r.kt)("p",null,"token \u767b\u5165\u8ddf session/cookie \u767b\u5165\u6700\u5927\u7684\u4e0d\u540c\uff0c\u662f\u4ed6\u89e3\u6c7a\u4e86\u8981\u5728\u5f8c\u7aef\u5132\u5b58\u591a\u9918\u8cc7\u6599\u7684\u554f\u984c\u3002token \u6703\u5728 server \u4e2d\u751f\u6210\u4f46\u662f\u4e26\u4e0d\u6703\u5132\u5b58\u5728 server\uff0c\u800c\u662f\u76f4\u63a5\u5132\u5b58\u5728\u524d\u7aef\u3002"),(0,r.kt)("p",null,"\u9996\u6b21\u767b\u5165\u6642\u7684\u72c0\u614b\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"token1",src:n(1084).Z,width:"740",height:"316"})),(0,r.kt)("p",null,"\u518d\u6b21\u767b\u5165\u72c0\u614b\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"token1",src:n(8764).Z,width:"740",height:"280"})),(0,r.kt)("p",null,"JWT \u7b97\u6cd5\u4e3b\u8981\u5206\u70ba 3 \u500b\u90e8\u5206\uff1aheader\uff08\u982d\u4fe1\u606f\uff09\uff0cpayload\uff08\u6d88\u606f\u9ad4\uff09\uff0csignature\uff08\u7c3d\u540d\uff09\u3002header \u90e8\u5206\u6307\u5b9a\u4e86\u8a72 JWT \u4f7f\u7528\u7684\u7c3d\u540d\u7b97\u6cd5\uff0cpayload \u90e8\u5206\u8868\u660e\u4e86 JWT \u7684\u610f\u5716\uff0csignature \u90e8\u5206\u70ba JWT \u7684\u7c3d\u540d\uff0c\u76ee\u7684\u662f\u70ba\u4e86\u8b93 JWT \u4e0d\u80fd\u88ab\u96a8\u610f\u7be1\u6539"),(0,r.kt)("h2",{id:"oauth-\u767b\u5165"},"oAuth \u767b\u5165"),(0,r.kt)("p",null,"\u900f\u904e oAuth \u4f86\u8ddf\u7b2c\u4e09\u65b9\u5e73\u53f0\u62ff\u53d6\u8cc7\u6599\u6216\u662f\u505a\u767b\u5165\u9a57\u8b49\u3002"),(0,r.kt)("p",null,"\u6d41\u7a0b\u6587\u7ae0:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://akuma1.pixnet.net/blog/post/363242271-oauth-2.0-%283lo%29-%E6%B5%81%E7%A8%8B%E8%AA%AA%E6%98%8E%E4%B8%AD%E6%96%87%E7%89%88"},"https://akuma1.pixnet.net/blog/post/363242271-oauth-2.0-%283lo%29-%E6%B5%81%E7%A8%8B%E8%AA%AA%E6%98%8E%E4%B8%AD%E6%96%87%E7%89%88")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.technice.com.tw/experience/12520/"},"https://www.technice.com.tw/experience/12520/")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u6587\u7ae0/\u5716\u7247\u51fa\u8655\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6845166891393089544"},"https://juejin.cn/post/6845166891393089544")))}u.isMDXComponent=!0},2734:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cookieLogin1-3417a21bb008afdb76e65028351fce1c.png"},3291:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cookieLogin2-0d4124c617d8abfa0ccc70d200cf923e.png"},1084:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tokenLogin1-50a9e132ab3ee949e40d54cb0e10c191.png"},8764:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tokenLogin2-691ee830b4ac02e4ec2862d0db7c8ab7.png"}}]);