"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[1340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=p,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:p,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),p=(n(7294),n(3905));const a={sidebar_position:5},l="[others] npm, yarn & pnpm",o={unversionedId:"others/npm",id:"others/npm",title:"[others] npm, yarn & pnpm",description:"npm, yarn vs pnpm",source:"@site/docs/others/npm.md",sourceDirName:"others",slug:"/others/npm",permalink:"/bywater-blog/others/npm",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"[others] microFrontend \u5fae\u524d\u7aef",permalink:"/bywater-blog/others/microFrontend"},next:{title:"[others] CSS trivia",permalink:"/bywater-blog/others/cssTrivia"}},i={},s=[{value:"npm, yarn vs pnpm",id:"npm-yarn-vs-pnpm",level:3},{value:"pnpm",id:"pnpm",level:2},{value:"\u4f7f\u7528 pnpm",id:"\u4f7f\u7528-pnpm",level:3},{value:"pnpm \u4e0b\u8f09\u5831\u932f &quot;hint: If you want peer dependencies to be automatically installed, set the &quot;auto-install-peers&quot; setting to &quot;true&quot;.&quot;",id:"pnpm-\u4e0b\u8f09\u5831\u932f-hint-if-you-want-peer-dependencies-to-be-automatically-installed-set-the-auto-install-peers-setting-to-true",level:3},{value:"npm",id:"npm",level:2},{value:"Install libraries with NPM or import from CDN?",id:"install-libraries-with-npm-or-import-from-cdn",level:3},{value:"--legacy-peer-deps",id:"--legacy-peer-deps",level:3},{value:"&quot;postversion&quot;",id:"postversion",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"others-npm-yarn--pnpm"},"[others]"," npm, yarn & pnpm"),(0,p.kt)("h3",{id:"npm-yarn-vs-pnpm"},"npm, yarn vs pnpm"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"npm 2.0 => nested node_modules structure\n\u7f3a\u9ede\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u6a94\u6848\u592a\u5927\uff0cnested too deep\uff0c\u6d88\u8017\u592a\u591a dist \u7a7a\u9593"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"npm 3.0 => flat node_modules structure\uff08\u6e1b\u5c11\u4e92\u76f8\u4f9d\u8cf4\uff09\n\u7f3a\u9ede\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"flat dependencies algorithm \u8017\u8cbb\u4e0b\u8f09\u6642\u9593(\u901f\u5ea6\u6162\u3001\u82b1\u8cbb\u904e\u591a disk \u7a7a\u9593)"),(0,p.kt)("li",{parentName:"ul"},"\u5e7d\u9748\u4f9d\u8cf4\uff08\u56e0\u70ba\u4f7f\u7528\u6241\u5e73\u7684\u7d50\u69cb\uff0c\u8b8a\u6210\u672a\u5b9a\u7fa9\u7684\u4f9d\u8cf4\u88ab\u62c9\u5230\u7b2c\u4e00\u5c64\uff0c\u8b8a\u6210\u4e5f\u53ef\u4ee5\u4f7f\u7528\u3002\uff09"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"yarn => \u65b0\u589e lock file \u4f86\u8a18\u8f09\u4e92\u76f8\u4f9d\u8cf4\u7684\u7248\u672c")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"pnpm => \u628a package \u5132\u5b58\u5728 disk \u4e2d\u7684 store\uff0c\u5728\u5c08\u6848\u4e2d\u900f\u904e sym link \u4f86\u9023\u7d50\u5230 store \u4e2d\u7684 package"))),(0,p.kt)("p",null,"TL;DR;"),(0,p.kt)("p",null,"pnpm \u6bd4 npm, yarn \u9084\u5feb\uff0c\u4e26\u4e14\u82b1\u8cbb\u66f4\u5c11\u7684 disk \u5bb9\u91cf\uff0c\u4e26\u4e14\u540c\u6642\u89e3\u6c7a\u4e86\u5e7d\u9748\u4f9d\u8cf4\u7b49\u554f\u984c\u3002"),(0,p.kt)("p",null,"\u95b1\u8b80\u6587\u7ae0\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://www.readfog.com/a/1673072431709917184"},"https://www.readfog.com/a/1673072431709917184")),(0,p.kt)("h2",{id:"pnpm"},"pnpm"),(0,p.kt)("h3",{id:"\u4f7f\u7528-pnpm"},"\u4f7f\u7528 pnpm"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"homebrew \u4e0b\u8f09"),(0,p.kt)("li",{parentName:"ol"},"\u522a\u9664\u5c08\u6848\u4e2d\u7684 node_modules"),(0,p.kt)("li",{parentName:"ol"},"pnpm install")),(0,p.kt)("h3",{id:"pnpm-\u4e0b\u8f09\u5831\u932f-hint-if-you-want-peer-dependencies-to-be-automatically-installed-set-the-auto-install-peers-setting-to-true"},'pnpm \u4e0b\u8f09\u5831\u932f "hint: If you want peer dependencies to be automatically installed, set the "auto-install-peers" setting to "true"."'),(0,p.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"\n//global\npnpm config set auto-install-peers true\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"//\u5c08\u6848\u4e2d\n1. \u65b0\u589e .npmrc file\n2. \u52a0\u4e0a `auto-install-peers = true`\n\n")),(0,p.kt)("h2",{id:"npm"},"npm"),(0,p.kt)("h3",{id:"install-libraries-with-npm-or-import-from-cdn"},"Install libraries with NPM or import from CDN?"),(0,p.kt)("p",null,"TL;DL"),(0,p.kt)("p",null,"npm advantage:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Webpack, babel, rollup ...allows you to bundle all your files (can tree shape/code split/ import specific file from a library...etc)"),(0,p.kt)("li",{parentName:"ol"},"npm, yarn lock file (solve dependency problem)")),(0,p.kt)("p",null,"Resources:",(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/69791670/install-libraries-with-npm-or-import-from-cdn"},"https://stackoverflow.com/questions/69791670/install-libraries-with-npm-or-import-from-cdn")),(0,p.kt)("h3",{id:"--legacy-peer-deps"},"--legacy-peer-deps"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://blog.poychang.net/npm-install-with-legacy-peer-deps/"},"https://blog.poychang.net/npm-install-with-legacy-peer-deps/")),(0,p.kt)("h3",{id:"postversion"},'"postversion"'),(0,p.kt)("p",null,"scripts \u88e1\u9762\u7684 postversion \u6703\u5728 npm version \u6642\u81ea\u52d5\u57f7\u884c\u3002\n\u5e38\u7528\u4f86\u8655\u7406 git tag \u7684\u66f4\u65b0\u6216\u662f\u767c\u5e03\u5230 remote \u7b49\u7b49\u3002\n",(0,p.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v9/commands/npm-version"},"https://docs.npmjs.com/cli/v9/commands/npm-version")))}u.isMDXComponent=!0}}]);