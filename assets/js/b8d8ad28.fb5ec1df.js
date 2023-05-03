"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[9302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2306:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:21},a="[others] Cyber Security \u8cc7\u8a0a\u5b89\u5168",s={unversionedId:"others/cyberSecurity",id:"others/cyberSecurity",isDocsHomePage:!1,title:"[others] Cyber Security \u8cc7\u8a0a\u5b89\u5168",description:"XSS(cross-site scripting)",source:"@site/docs/others/cyberSecurity.md",sourceDirName:"others",slug:"/others/cyberSecurity",permalink:"/bywater-blog/others/cyberSecurity",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"[others] Vercel",permalink:"/bywater-blog/others/vercel"}},c=[{value:"XSS(cross-site scripting)",id:"xsscross-site-scripting",children:[]},{value:"CSRF(Cross Site Request Forgery) \u8de8\u7ad9\u8acb\u6c42\u507d\u9020",id:"csrfcross-site-request-forgery-\u8de8\u7ad9\u8acb\u6c42\u507d\u9020",children:[]},{value:"SQL Injection",id:"sql-injection",children:[]}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"others-cyber-security-\u8cc7\u8a0a\u5b89\u5168"},"[others]"," Cyber Security \u8cc7\u8a0a\u5b89\u5168"),(0,i.kt)("h3",{id:"xsscross-site-scripting"},"XSS(cross-site scripting)"),(0,i.kt)("p",null,"XSS \u653b\u64ca\u662f\u6307\u7576\u67d0\u500b\u60e1\u610f\u7528\u6236\uff0c\u5f9e\u5ba2\u6236\u7aef\u6ce8\u5165\u653b\u64ca\u8173\u672c\u4f86\u9054\u5230\u67d0\u7a2e\u76ee\u7684\uff08\u4f8b\u5982\uff1a\u7aca\u53d6 Cookie\u3001Session\u3001\u5bc6\u78bc\u7b49)\uff0c\u5c0e\u81f4\u5176\u4ed6\u7528\u6236\u53d7\u5230\u5f15\u97ff\u3002"),(0,i.kt)("p",null,"\u5e38\u898b\u7684 XSS \u653b\u64ca\u65b9\u6cd5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u900f\u904e\u7559\u8a00\u6b04\u3001url \u6216\u662f input \u6b04\u4f4d\u7b49\u4f7f\u7528\u8005\u53ef\u4ee5\u4efb\u610f\u8f38\u5165\u8cc7\u6599\u7684\u5730\u65b9\uff0c\u82e5\u6c92\u6709\u505a input \u6aa2\u67e5\uff0c\u5247\u5f88\u5bb9\u6613\u88ab\u8f38\u5165",(0,i.kt)("inlineCode",{parentName:"li"},"script"),"\u7b49\u60e1\u610f javascript \u4f86\u88ab\u57f7\u884c\u3002")),(0,i.kt)("p",null,"\u5982\u4f55\u907f\u514d XSS \u653b\u64ca"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u524d\u5f8c\u7aef\u6240\u6709\u6b04\u4f4d\u90fd\u8981\u505a\u6aa2\u67e5\uff0c\u4e26\u4e14\u628a\u7279\u5b9a\u8173\u672c\u8f49\u63db\u6210\u5b57\u7b26\u4e32\u3002ex, \u653b\u64ca\u8005\u8f38\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"<script>alert(1)<\/script>")," \uff0c\u5c31\u628a < \u8f49\u6210 ",(0,i.kt)("inlineCode",{parentName:"li"},"&lt"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"CSP (content security policy) \u53ef\u4ee5\u7531 server \u8a2d\u5b9a ",(0,i.kt)("inlineCode",{parentName:"li"},"Content-Security-Policy")," Header \u4f86\u544a\u8a34\u700f\u89bd\u5668\u54ea\u4e9b domain \u7684\u76f8\u95dc\u8cc7\u6599\u53ef\u4ee5\u4fe1\u4efb\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\nContent-Security-Policy: default-src 'self'\n//A web site administrator wants all content to come from the site's own origin (this excludes subdomains.)\n\nContent-Security-Policy: default-src 'self'; img-src *; media-src example.org example.net; script-src userscripts.example.com\n\n// A web site administrator wants to allow users of a web application to include images from any origin in their own content, but to restrict audio or video media to trusted providers, and all scripts only to a specific server that hosts trusted code.\n")),(0,i.kt)("h3",{id:"csrfcross-site-request-forgery-\u8de8\u7ad9\u8acb\u6c42\u507d\u9020"},"CSRF(Cross Site Request Forgery) \u8de8\u7ad9\u8acb\u6c42\u507d\u9020"),(0,i.kt)("p",null,"CSRF \u653b\u64ca\u662f\u900f\u904e\u4f7f\u7528\u8005\u5728\u767b\u5165 A \u7db2\u7ad9\u4e4b\u5f8c\u7db2\u9801\u6703\u5b58\u5165 cookie\uff0c\u9019\u6642\u5019\u5982\u679c\u518d\u53bb\u60e1\u610f\u7db2\u9801\uff0c\u60e1\u610f\u7db2\u7ad9\u53ef\u4ee5\u900f\u904e\u5e36\u5165\u7684 cookie \u767c\u8d77\u60e1\u610f\u8acb\u6c42\u5230 A \u7db2\u7ad9\uff0c\u4ee5\u4f7f\u7528\u8005\u7684\u8eab\u4efd\u4f86\u505a\u60e1\u610f\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u5982\u4f55\u907f\u514d CSRF \u653b\u64ca:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5c0d\u91cd\u8981\u7684\u884c\u7232\u8a2d\u5b9a\u591a\u91cd\u9a57\u8b49\u65b9\u5f0f ex, Two-factor authentication (2FA)"),(0,i.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a SameSite cookies",(0,i.kt)("br",{parentName:"li"}),"sameSite \u53ef\u4ee5\u8a2d\u5b9a\u700f\u89bd\u5668\u5728\u54ea\u4e9b domain \u88e1\u9762\u6703\u5e36\u4e0a cookies\uff0c\u5e38\u898b\u7684 value \u6709",(0,i.kt)("inlineCode",{parentName:"li"},"strict"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"Lax"),(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("inlineCode",{parentName:"li"},"strict"),"\u4ee3\u8868\u53ea\u6709\u540c domain \u7684 request \u700f\u89bd\u5668\u624d\u6703\u9001\u51fa cookie",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("inlineCode",{parentName:"li"},"Lax"),"\u662f default value\uff0c\u4ee3\u8868\u53ea\u6709\u5f9e\u5916\u90e8 link \u8df3\u9032\u4f86\u6642\u624d\u6703\u5e36\u4e0a cookie")),(0,i.kt)("h3",{id:"sql-injection"},"SQL Injection"),(0,i.kt)("p",null,"SQL Injection \u5c31\u662f\u900f\u904e\u4fee\u6539 SQL \u8a9e\u53e5\uff0c\u9032\u800c\u6709\u8fa6\u6cd5\u9054\u5230\u5b58\u53d6\u8cc7\u6599\u5eab\u8cc7\u6599\u7684\u529f\u80fd"))}u.isMDXComponent=!0}}]);