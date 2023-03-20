"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[7474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=l.createContext({}),p=function(e){var t=l.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(r.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,u=m["".concat(r,".").concat(d)]||m[d]||h[d]||a;return n?l.createElement(u,s(s({ref:t},c),{},{components:n})):l.createElement(u,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1634:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var l=n(7462),i=(n(7294),n(3905));const a={sidebar_position:6},s="[others] CSS trivia",o={unversionedId:"others/cssTrivia",id:"others/cssTrivia",isDocsHomePage:!1,title:"[others] CSS trivia",description:"\u81f3\u4e2d",source:"@site/docs/others/cssTrivia.md",sourceDirName:"others",slug:"/others/cssTrivia",permalink:"/bywater-blog/others/cssTrivia",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"[others] npm, yarn & pnpm",permalink:"/bywater-blog/others/npm"},next:{title:"[others] Computer science basics",permalink:"/bywater-blog/others/computerScience"}},r=[{value:"\u81f3\u4e2d",id:"\u81f3\u4e2d",children:[]},{value:"Specificity \u6b0a\u91cd",id:"specificity-\u6b0a\u91cd",children:[]},{value:"box model (\u76d2\u6a21\u578b)",id:"box-model-\u76d2\u6a21\u578b",children:[]},{value:"BFC\uff08Block Formatting Contexts\uff09",id:"bfcblock-formatting-contexts",children:[]},{value:"css layout",id:"css-layout",children:[]},{value:"css flex?",id:"css-flex",children:[]},{value:"CSS \u5957\u4ef6",id:"css-\u5957\u4ef6",children:[{value:"CSS-in-JS",id:"css-in-js",children:[]},{value:"atomic css",id:"atomic-css",children:[]},{value:"\u6bd4\u8f03",id:"\u6bd4\u8f03",children:[]},{value:"visibility:hidden vs display:none",id:"visibilityhidden-vs-displaynone",children:[]},{value:"\u507d\u5143\u7d20 vs \u507d\u985e",id:"\u507d\u5143\u7d20-vs-\u507d\u985e",children:[]},{value:"css combinators \u7528\u6cd5",id:"css-combinators-\u7528\u6cd5",children:[]}]}],p={toc:r};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"others-css-trivia"},"[others]"," CSS trivia"),(0,i.kt)("h3",{id:"\u81f3\u4e2d"},"\u81f3\u4e2d"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903982960214029"},"https://juejin.cn/post/6844903982960214029")),(0,i.kt)("h3",{id:"specificity-\u6b0a\u91cd"},"Specificity \u6b0a\u91cd"),(0,i.kt)("p",null,"Every CSS selector has its place in the specificity hierarchy."),(0,i.kt)("p",null,"There are four categories which define the specificity level of a selector:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'1. important\n2. Inline styles - Example: <h1 style="color: pink;">\n3. IDs - Example: #navbar\n4. Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [href]\n5. Elements and pseudo-elements - Example: h1, :before\n')),(0,i.kt)("p",null,"resources:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3schools.com/css/css_specificity.asp"},"https://www.w3schools.com/css/css_specificity.asp")),(0,i.kt)("h3",{id:"box-model-\u76d2\u6a21\u578b"},"box model (\u76d2\u6a21\u578b)"),(0,i.kt)("p",null,"\u7531\u5916\u5230\u5167\u5206\u5225\u70ba margin > border > padding > content",(0,i.kt)("br",{parentName:"p"}),"\n",":box model(\u76d2\u6a21\u578b)\u70ba css \u4e2d\u7684\u4f48\u5c40\u6a21\u578b\u3002"),(0,i.kt)("p",null,"box model explain\n",(0,i.kt)("a",{parentName:"p",href:"https://www.oxxostudio.tw/articles/202008/css-box-model.html"},"https://www.oxxostudio.tw/articles/202008/css-box-model.html")),(0,i.kt)("p",null,"margin(\u5143\u7d20\u5916\u64f4\u5c55) vs padding(\u5143\u7d20\u5167\u64f4\u5c55)\n",(0,i.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10205322"},"https://ithelp.ithome.com.tw/articles/10205322")),(0,i.kt)("p",null,"\u4ec0\u9ebc\u662f box-sizing:content box?\u70ba\u4ec0\u9ebc\u9700\u8981\u8a2d box-sizing:border-box?"),(0,i.kt)("h4",{id:"\u4ec0\u9ebc\u662f-box-sizingborder-box"},"\u4ec0\u9ebc\u662f box-sizing:border-box?"),(0,i.kt)("p",null,"\u8a2d\u5b9a box-sizing:border-box \u4e0d\u7528\u518d\u53bb\u8a08\u7b97\u5be6\u969b\u7684 width/height\uff0c\u56e0\u70ba width/height \u6703\u8a2d\u5b9a\u70ba border-box\uff0c\u4ee3\u8868 padding \u6703\u5f80 border-box \u88e1\u9762\u9577\uff0cmargin \u5247\u6703\u5f80\u5916\u9577\uff0cwidth/height \u4e0d\u6703\u56e0\u6b64\u800c\u6539\u8b8a\u3002"),(0,i.kt)("p",null,"\u5c07 box-sizing \u8a2d\u5b9a\u6210 border-box \u5f8c\uff0c width / height \u7684\u4f5c\u7528\u7bc4\u570d\u5c31\u662f\u6307\u5230 border \u9019\u500b box \u7684\u7bc4\u570d\u4e86\uff0c\u6211\u5011\u5c31\u7a31\u70ba border-box\uff0c\u5f9e\u524d\u9762\u6240\u5beb\u7684\u53ef\u4ee5\u4e86\u89e3\u4e00\u500b\u7269\u4ef6\u7684\u7bc4\u570d\uff0c\u662f\u7531\u56db\u500b\u5c64\u5c64\u5305\u88f9\u7684\u77e9\u5f62\u6240\u69cb\u6210\uff0c\u6b64\u6642 width \u6240\u4f5c\u7528\u7684 box \u5c31\u662f border \u9019\u500b\u7bc4\u570d\u4e86\uff0c\u5982\u4e0b\u5716\u6240\u793a(\u5716\u7247\u53d6\u81ea Chrome DevTools)"),(0,i.kt)("h3",{id:"bfcblock-formatting-contexts"},"BFC\uff08Block Formatting Contexts\uff09"),(0,i.kt)("p",null,":W3C \u898f\u7bc4\u4e2d\u7684\u4e00\u500b\u6982\u5ff5\uff0c\u7c21\u55ae\u4f86\u8aaa\u5177\u6709 BFC \u7279\u6027\u7684\u5143\u7d20\u53ef\u4ee5\u770b\u505a\u662f\u9694\u96e2\u4e86\u7684\u7368\u7acb\u5bb9\u5668\uff0c\u5bb9\u5668\u88e1\u9762\u7684\u5143\u7d20\u4e0d\u6703\u5728\u4f48\u5c40\u4e0a\u5f71\u97ff\u5230\u5916\u9762\u7684\u5143\u7d20\u3002"),(0,i.kt)("p",null,"\u89e3\u6c7a\u554f\u984c\uff1a"),(0,i.kt)("p",null,"\u5143\u7d20\u9593\u7684 margin collapsing(\u5916\u908a\u8ddd\u91cd\u758a)\u554f\u984c"),(0,i.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5\uff1a"),(0,i.kt)("h4",{id:"\u89f8\u767c-bfc-\u7684\u689d\u4ef6"},"\u89f8\u767c BFC \u7684\u689d\u4ef6"),(0,i.kt)("p",null,"\u6839\u5143\u7d20\u6216\u5176\u5b83\u5305\u542b\u5b83\u7684\u5143\u7d20\n\u6d6e\u52d5\u5143\u7d20 (\u5143\u7d20\u7684 float \u4e0d\u662f none)\n\u7d55\u5c0d\u5b9a\u4f4d\u5143\u7d20 (\u5143\u7d20\u5177\u6709 position \u70ba absolute \u6216 fixed)\n\u5167\u806f\u584a (\u5143\u7d20\u5177\u6709 display: inline-block)\n\u8868\u683c\u55ae\u5143\u683c (\u5143\u7d20\u5177\u6709 display: table-cell\uff0cHTML \u8868\u683c\u55ae\u5143\u683c\u9ed8\u8a8d\u5c6c\u6027)\n\u8868\u683c\u6a19\u984c (\u5143\u7d20\u5177\u6709 display: table-caption, HTML \u8868\u683c\u6a19\u984c\u9ed8\u8a8d\u5c6c\u6027)\n\u5177\u6709 overflow \u4e14\u503c\u4e0d\u662f visible \u7684\u584a\u5143\u7d20\n\u5f48\u6027\u76d2\uff08flex \u6216 inline-flex\uff09\ndisplay: flow-root\ncolumn-span: all"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/crazy-paper-8imk9f?file=/src/App.js"},"https://codesandbox.io/s/crazy-paper-8imk9f?file=/src/App.js"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/19718634/how-to-disable-margin-collapsing"},"https://stackoverflow.com/questions/19718634/how-to-disable-margin-collapsing")),(0,i.kt)("p",null,"\u95b1\u8b80\u8cc7\u6599\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://yachen168.github.io/article/Block-formatting-context.html"},"https://yachen168.github.io/article/Block-formatting-context.html")),(0,i.kt)("h3",{id:"css-layout"},"css layout"),(0,i.kt)("h4",{id:"position-fixed"},"position fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled"),(0,i.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u53c3\u8003 viewport \u7684\u7a7a\u9593")),(0,i.kt)("h4",{id:"position-absolute"},"position absolute"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"positioned relative to the nearest positioned ancestor."),(0,i.kt)("li",{parentName:"ul"},"\u6703\u5f9e\u8cc7\u6599\u6d41\u4e2d\u62bd\u96e2\uff0c\u81ea\u5df1\u7368\u7acb\u4e00\u500b\u5c64\uff0c\u4e26\u53c3\u8003\u7236\u5c64\u7a7a\u9593\u4f5c\u70ba\u5b9a\u4f4d\u7684\u7a7a\u9593\uff0c\u4e5f\u4ee3\u8868\u5f8c\u9762\u7684 UI \u6709\u53ef\u80fd\u6703\u8986\u84cb\u5230\u88ab\u8a2d\u5b9a absolute \u800c\u812b\u96e2\u7684\u8cc7\u6599\u6d41\u4e2d\u7684 UI"),(0,i.kt)("li",{parentName:"ul"},"\u5143\u7d20\u7684 position \u8a2d\u5b9a absolute \u5f8c\uff0c\u5b83\u5c31\u6703\u5f80\u5916\u5c64\u7684\u5143\u7d20\u627e\u662f\u5426\u6709 position:relative | absolute | fixed | inherit(\u82e5\u7e7c\u627f\u7684\u662f\u524d\u9762 3 \u500b\u4e4b\u4e00)\u7684\u5143\u7d20\uff0c\u82e5\u662f\u90fd\u6c92\u6709\uff0c\u5c31\u6703\u4ee5\u8a72\u7db2\u9801\u9801\u9762(",(0,i.kt)("inlineCode",{parentName:"li"},"<body>"),")\u7684\u5de6\u4e0a\u89d2\u70ba\u5b9a\u4f4d\u9ede\u3002")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10253500"},"https://ithelp.ithome.com.tw/articles/10253500"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10212202"},"https://ithelp.ithome.com.tw/articles/10212202")),(0,i.kt)("h4",{id:"position-relative"},"position relative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"relative \u6240\u53c3\u8003\u7684\u7a7a\u9593\u662f\u7269\u4ef6\u672c\u8eab\u4f4d\u65bc\u8cc7\u6599\u6d41\u5167\u7684\u539f\u59cb\u4f4d\u7f6e\uff0c\u4f46\u662f\u53ef\u4ee5\u8a2d\u5b9a\u8ddd\u96e2\u6bcd\u5c64\u7684 right, left \u7b49\u4f4d\u7f6e")),(0,i.kt)("h4",{id:"css-display"},"css display"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"inline")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6392\u5217\u6210 inline \u6a23\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"width, height \u7686\u7121\u6548"),(0,i.kt)("li",{parentName:"ul"},"default inline: ",(0,i.kt)("inlineCode",{parentName:"li"},"span"),",",(0,i.kt)("inlineCode",{parentName:"li"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"img"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"inline-block")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6392\u5217\u6210 inline \u6a23\u5f0f\uff0c\u4f46\u662f\u53ef\u4ee5\u64cd\u63a7 width, height")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"block")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6392\u5217\u6210 block \u6a23\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u5e38\u898b block \u6a23\u5f0f\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"div"),",",(0,i.kt)("inlineCode",{parentName:"li"},"h1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"p"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"li"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"section"))),(0,i.kt)("h5",{id:"display-inline-block-vs-block"},"display: inline-block vs block?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"display: inline-block allows to set a width and height on the element."),(0,i.kt)("li",{parentName:"ol"},"with display: inline-block, width, height and padding are respected,")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block"},"https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block")),(0,i.kt)("h3",{id:"css-flex"},"css flex?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"},"flex \u6559\u7a0b - \u962e\u4e00\u5cf0\u7684\u7f51\u7edc\u65e5\u5fd7")),(0,i.kt)("h4",{id:"flex1-"},"flex:1 ?"),(0,i.kt)("p",null,"TL;DR"),(0,i.kt)("p",null,"flex:1 \u7b49\u65bc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"flex-grow : 1;\nflex-shrink : 1;\nflex-basis : 0;\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.51cto.com/article/683878.html"},"https://www.51cto.com/article/683878.html")),(0,i.kt)("h4",{id:"css-grid"},"css grid?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.casper.tw/css/2017/03/22/css-grid-layout/"},"Grid \u4ecb\u7d39")),(0,i.kt)("h4",{id:"css-grid-vs-css-flexbox"},"CSS grid vs CSS flexbox?"),(0,i.kt)("p",null,"CSS Grid \u662f\u4e00\u500b\u4e8c\u7dad\u4f48\u5c40\u7cfb\u7d71\uff0c\u5141\u8a31\u4f60\u5728\u4e00\u500b\u7db2\u683c\u4e2d\u5b9a\u7fa9\u5169\u500b\u7dad\u5ea6\u7684\u5927\u5c0f(ex, \u884c\u548c\u5217)\uff0c\u4ee5\u5275\u5efa\u8907\u96dc\u7684\u4f48\u5c40\u3002\u5b83\u63d0\u4f9b\u4e86\u5c0d\u4f48\u5c40\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\u7684\u63a7\u5236\uff0c\u5305\u62ec\u5275\u5efa\u91cd\u758a\u5143\u7d20\u548c\u63a7\u5236\u9805\u76ee\u6cbf\u8457\u5169\u500b\u8ef8\u7684\u5c0d\u9f4a\u65b9\u5f0f\u3002CSS Grid \u975e\u5e38\u9069\u5408\u5275\u5efa\u9700\u8981\u7cbe\u78ba\u548c\u53ef\u9069\u61c9\u7684\u8907\u96dc\u4f48\u5c40\uff0c\u4f8b\u5982\u96dc\u8a8c\u5f0f\u4f48\u5c40\u6216\u6578\u64da\u8868\u683c\u3002"),(0,i.kt)("p",null,"\u800c Flexbox \u5247\u662f\u4e00\u500b\u4e00\u7dad\u4f48\u5c40\u7cfb\u7d71\uff0c\u4ee3\u8868\u4e00\u6b21\u53ea\u80fd\u63a7\u5236\u4e00\u500b\u7dad\u5ea6(ex, \u884c)\uff0c\u7528\u65bc\u6cbf\u8457\u55ae\u500b\u8ef8\uff08\u6c34\u5e73\u6216\u5782\u76f4\uff09\u6392\u5217\u9805\u76ee\u3002\u5b83\u8a2d\u8a08\u7528\u65bc\u66f4\u9748\u6d3b\u548c\u7c21\u55ae\u7684\u4f48\u5c40\uff0c\u4e0d\u9700\u8981\u8907\u96dc\u7684\u5b9a\u4f4d\u3002Flexbox \u5c24\u5176\u9069\u7528\u65bc\u5275\u5efa\u9700\u8981\u6839\u64da\u4e0d\u540c\u7684\u5c4f\u5e55\u5c3a\u5bf8\u8abf\u6574\u7684\u97ff\u61c9\u5f0f\u4f48\u5c40\uff0c\u4f8b\u5982\u5c0e\u822a\u83dc\u55ae\u3001\u5361\u7247\u4f48\u5c40\u548c\u53ef\u5f48\u6027\u8abf\u6574\u7684\u5167\u5bb9\u5bb9\u5668\u3002"),(0,i.kt)("h2",{id:"css-\u5957\u4ef6"},"CSS \u5957\u4ef6"),(0,i.kt)("h3",{id:"css-in-js"},"CSS-in-JS"),(0,i.kt)("h4",{id:"styled-components"},"styled-components"),(0,i.kt)("p",null,"pros:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u907f\u514d\u6c59\u67d3\u5168\u57df CSS\uff1a\u751f\u6210\u552f\u4e00\u7684 class \u540d\uff0c\u907f\u514d\u6c59\u67d3\u5168\u57df CSS\u3002"),(0,i.kt)("li",{parentName:"ol"},"autoprefixer: \u81ea\u52d5\u7522\u751f\u700f\u89bd\u5668\u517c\u5bb9\u6027\u524d\u7db4\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u7528 props \u505a dynamic styling")),(0,i.kt)("p",null,"cons:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728 SSR hydration \u4e2d\u8981\u984d\u5916\u53bb render ServerStyleSheet\uff0c\u56e0\u70ba styled-components \u662f\u52d5\u614b\u7684\u88ab\u751f\u6210(ex, props)"),(0,i.kt)("li",{parentName:"ol"},"\u6548\u80fd\u4e0d\u597d\uff08\u8d8a\u591a JS\uff0c\u4ee3\u8868\u8981\u89e3\u6790\u8d8a\u591a\u6771\u897f\uff0c\u6548\u80fd\u8d8a\u4e0d\u597d\uff09")),(0,i.kt)("h4",{id:"lineria"},"lineria"),(0,i.kt)("p",null,"pros:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7528 CSS-in-JS \u7684\u5beb\u6cd5\u52a0\u4e0a zero runtime\uff08\u5728 build time \u5efa\u7acb css\uff09 \u4f86\u6e1b\u5c11 JS \u7a0b\u5f0f\u78bc\u91cf\uff0c\u4ee5\u589e\u52a0 loading \u6642\u9593\u4f86\u9054\u5230\u66f4\u597d\u7684 SEO")),(0,i.kt)("p",null,"\u8cc7\u6e90\uff1a"),(0,i.kt)("p",null,"why airbnb switch to linaria",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/airbnb-engineering/airbnbs-trip-to-linaria-dc169230bd12"},"https://medium.com/airbnb-engineering/airbnbs-trip-to-linaria-dc169230bd12")),(0,i.kt)("p",null,"use lineria with atomic css",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/linaria/blob/master/docs/ATOMIC_CSS.md"},"https://github.com/callstack/linaria/blob/master/docs/ATOMIC_CSS.md")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://css-tricks.com/lets-define-exactly-atomic-css/"},"https://css-tricks.com/lets-define-exactly-atomic-css/")),(0,i.kt)("h3",{id:"atomic-css"},"atomic css"),(0,i.kt)("p",null,":\u628a css \u5207\u5206\uff0c\u4f86\u6e1b\u5c11\u591a\u9918/\u91cd\u8907\u7684 CSS\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'//before\n<style>\n  .redButton {\n    background: red;\n    width: 100px;\n  }\n\n  .blueButton {\n    background: blue;\n    width: 100px;\n  }\n</style>\n<button class="redButton" />\n<button class="blueButton" />\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'\n//after\n\n<style>\n  .a {\n    background: red;\n  }\n  .b {\n    background: blue;\n  }\n  .c {\n    width: 100px;\n  }\n</style>\n<button class="a c" />\n<button class="b c" />\n')),(0,i.kt)("p",null,"\u7db2\u7ad9\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://acss.io/"},"https://acss.io/")),(0,i.kt)("h3",{id:"\u6bd4\u8f03"},"\u6bd4\u8f03"),(0,i.kt)("h4",{id:"css-in-js-vs-css-module"},"CSS-in-JS vs CSS-Module"),(0,i.kt)("p",null,"CSS-in-JS"),(0,i.kt)("p",null,"pros"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8907\u7528\u6027\u9ad8"),(0,i.kt)("li",{parentName:"ol"},"\u597d\u7528,\u6613\u8b80")),(0,i.kt)("p",null,"cons"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6a23\u5f0f\u662f\u548c JS \u6587\u4ef6\u6253\u5305\u5728\u4e00\u8d77\uff0c\u6240\u4ee5\u6703\u62d6\u6162 JS \u6587\u4ef6\u52a0\u8f09\u6642\u9593"),(0,i.kt)("li",{parentName:"ol"},"\u6c92\u6709\u55ae\u7368 CSS \u6587\u4ef6\u6240\u4ee5\u7121\u6cd5\u7de9\u5b58")),(0,i.kt)("p",null,"CSS-Module"),(0,i.kt)("p",null,"pros"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6a23\u5f0f\u4ee3\u78bc\u8207 JS \u4ee3\u78bc\u5206\u96e2\uff0c\u4ee3\u78bc\u6703\u76f8\u5c0d\u7c21\u6f54\u6a23\u5f0f"),(0,i.kt)("li",{parentName:"ol"},"\u53ea\u662f\u5728 CSS \u57fa\u790e\u4e0a\u52a0\u5165\u4e86\u5c40\u90e8\u4f5c\u7528\u57df\u8ddf\u6a21\u584a\u4ee5\u4f86\uff0c\u4ee3\u78bc\u76f8\u5c0d\u898f\u7bc4")),(0,i.kt)("p",null,"cons"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"CSS Modules don\u2019t accept props.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7030349710023983117"},"https://juejin.cn/post/7030349710023983117")),(0,i.kt)("h3",{id:"visibilityhidden-vs-displaynone"},"visibility:hidden vs display:none"),(0,i.kt)("p",null,"\u7e3d\u4e4b\uff0cdisplay: none \u548c visibility: hidden \u4e4b\u9593\u7684\u4e3b\u8981\u5340\u5225\u5728\u65bc\u524d\u8005\u5b8c\u5168\u5f9e\u6587\u6a94\u6d41\u4e2d\u522a\u9664\u5143\u7d20\uff0c\u800c\u5f8c\u8005\u96b1\u85cf\u5143\u7d20\u4f46\u4ecd\u4f7f\u5176\u4fdd\u7559\u5728\u6587\u6a94\u6d41\u4e2d\uff0c\u4f54\u64da\u7a7a\u9593\u4e26\u5f71\u97ff\u4f48\u5c40\u3002"),(0,i.kt)("h3",{id:"\u507d\u5143\u7d20-vs-\u507d\u985e"},"\u507d\u5143\u7d20 vs \u507d\u985e"),(0,i.kt)("p",null,"\u507d\u5143\u7d20\uff1aa css pseudo-element is used to style specified parts of an element.\nex, ::first, ::before"),(0,i.kt)("p",null,"\u507d\u985e\uff1aa css pseudo-class is used to define a special state of an element.\nex, :hover, :active, :visited"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@bywater529/css-%E5%81%BD%E5%85%83%E7%B4%A0%E8%88%87%E5%81%BD%E9%A1%9E-3224b58a8202"},"https://medium.com/@bywater529/css-%E5%81%BD%E5%85%83%E7%B4%A0%E8%88%87%E5%81%BD%E9%A1%9E-3224b58a8202")),(0,i.kt)("h3",{id:"css-combinators-\u7528\u6cd5"},"css combinators \u7528\u6cd5"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3schools.com/css/css_combinators.asp"},"https://www.w3schools.com/css/css_combinators.asp")),(0,i.kt)("h4",{id:"-select-element-immediate-after"},"+ \uff08select element immediate after)"),(0,i.kt)("h4",{id:"-select-element-behind-it"},"~ (select element behind it)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/6910049/on-a-css-hover-event-can-i-change-another-divs-styling"},"https://stackoverflow.com/questions/6910049/on-a-css-hover-event-can-i-change-another-divs-styling"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/10782054/what-does-the-tilde-squiggle-twiddle-css-selector-mean"},"https://stackoverflow.com/questions/10782054/what-does-the-tilde-squiggle-twiddle-css-selector-mean")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Resources:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://zh-tw.learnlayout.com/frameworks.html"},"https://zh-tw.learnlayout.com/frameworks.html"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10252827"},"https://ithelp.ithome.com.tw/articles/10252827"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://zh-tw.learnlayout.com/box-sizing.html"},"https://zh-tw.learnlayout.com/box-sizing.html")))}c.isMDXComponent=!0}}]);