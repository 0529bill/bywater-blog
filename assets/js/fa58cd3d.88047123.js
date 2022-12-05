"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[7474],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var i=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,i,l=function(t,e){if(null==t)return{};var n,i,l={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=i.createContext({}),p=function(t){var e=i.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(o.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),m=p(n),u=l,d=m["".concat(o,".").concat(u)]||m[u]||h[u]||r;return n?i.createElement(d,s(s({ref:e},c),{},{components:n})):i.createElement(d,s({ref:e},c))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,s=new Array(r);s[0]=m;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=t,a.mdxType="string"==typeof t?t:l,s[1]=a;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1634:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=n(7462),l=(n(7294),n(3905));const r={sidebar_position:6},s="[others] CSS trivia",a={unversionedId:"others/cssTrivia",id:"others/cssTrivia",isDocsHomePage:!1,title:"[others] CSS trivia",description:"\u81f3\u4e2d",source:"@site/docs/others/cssTrivia.md",sourceDirName:"others",slug:"/others/cssTrivia",permalink:"/bywater-blog/others/cssTrivia",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"[others] npm, yarn & pnpm",permalink:"/bywater-blog/others/npm"},next:{title:"[others] Computer science basics",permalink:"/bywater-blog/others/computerScience"}},o=[{value:"\u81f3\u4e2d",id:"\u81f3\u4e2d",children:[]},{value:"Specificity \u6b0a\u91cd",id:"specificity-\u6b0a\u91cd",children:[]},{value:"box model",id:"box-model",children:[]},{value:"css layout",id:"css-layout",children:[]},{value:"CSS \u5957\u4ef6",id:"css-\u5957\u4ef6",children:[{value:"CSS-in-JS",id:"css-in-js",children:[]},{value:"atomic css",id:"atomic-css",children:[]},{value:"\u6bd4\u8f03",id:"\u6bd4\u8f03",children:[]},{value:"CSS \u7528\u6cd5",id:"css-\u7528\u6cd5",children:[]}]}],p={toc:o};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"others-css-trivia"},"[others]"," CSS trivia"),(0,l.kt)("h3",{id:"\u81f3\u4e2d"},"\u81f3\u4e2d"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903982960214029"},"https://juejin.cn/post/6844903982960214029")),(0,l.kt)("h3",{id:"specificity-\u6b0a\u91cd"},"Specificity \u6b0a\u91cd"),(0,l.kt)("p",null,"Every CSS selector has its place in the specificity hierarchy."),(0,l.kt)("p",null,"There are four categories which define the specificity level of a selector:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'1. important\n2. Inline styles - Example: <h1 style="color: pink;">\n3. IDs - Example: #navbar\n4. Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [href]\n5. Elements and pseudo-elements - Example: h1, :before\n')),(0,l.kt)("p",null,"resources:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.w3schools.com/css/css_specificity.asp"},"https://www.w3schools.com/css/css_specificity.asp")),(0,l.kt)("h3",{id:"box-model"},"box model"),(0,l.kt)("p",null,"box model explain\n",(0,l.kt)("a",{parentName:"p",href:"https://www.oxxostudio.tw/articles/202008/css-box-model.html"},"https://www.oxxostudio.tw/articles/202008/css-box-model.html")),(0,l.kt)("p",null,"margin(\u5143\u7d20\u5916\u64f4\u5c55) vs padding(\u5143\u7d20\u5167\u64f4\u5c55)\n",(0,l.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10205322"},"https://ithelp.ithome.com.tw/articles/10205322")),(0,l.kt)("h3",{id:"css-layout"},"css layout"),(0,l.kt)("h4",{id:"position-fixed"},"position fixed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled"),(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u53c3\u8003 viewport \u7684\u7a7a\u9593")),(0,l.kt)("h4",{id:"position-absolute"},"position absolute"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"positioned relative to the nearest positioned ancestor."),(0,l.kt)("li",{parentName:"ul"},"\u6703\u5f9e\u8cc7\u6599\u6d41\u4e2d\u62bd\u96e2\uff0c\u81ea\u5df1\u7368\u7acb\u4e00\u500b\u5c64\uff0c\u4e26\u53c3\u8003\u7236\u5c64\u7a7a\u9593\u4f5c\u70ba\u5b9a\u4f4d\u7684\u7a7a\u9593\uff0c\u4e5f\u4ee3\u8868\u5f8c\u9762\u7684 UI \u6709\u53ef\u80fd\u6703\u8986\u84cb\u5230\u88ab\u8a2d\u5b9a absolute \u800c\u812b\u96e2\u7684\u8cc7\u6599\u6d41\u4e2d\u7684 UI"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u7d20\u7684 position \u8a2d\u5b9a absolute \u5f8c\uff0c\u5b83\u5c31\u6703\u5f80\u5916\u5c64\u7684\u5143\u7d20\u627e\u662f\u5426\u6709 position:relative | absolute | fixed | inherit(\u82e5\u7e7c\u627f\u7684\u662f\u524d\u9762 3 \u500b\u4e4b\u4e00)\u7684\u5143\u7d20\uff0c\u82e5\u662f\u90fd\u6c92\u6709\uff0c\u5c31\u6703\u4ee5\u8a72\u7db2\u9801\u9801\u9762(",(0,l.kt)("inlineCode",{parentName:"li"},"<body>"),")\u7684\u5de6\u4e0a\u89d2\u70ba\u5b9a\u4f4d\u9ede\u3002")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10253500"},"https://ithelp.ithome.com.tw/articles/10253500"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10212202"},"https://ithelp.ithome.com.tw/articles/10212202")),(0,l.kt)("h4",{id:"position-relative"},"position relative"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"relative \u6240\u53c3\u8003\u7684\u7a7a\u9593\u662f\u7269\u4ef6\u672c\u8eab\u4f4d\u65bc\u8cc7\u6599\u6d41\u5167\u7684\u539f\u59cb\u4f4d\u7f6e\uff0c\u4f46\u662f\u53ef\u4ee5\u8a2d\u5b9a\u8ddd\u96e2\u6bcd\u5c64\u7684 right, left \u7b49\u4f4d\u7f6e")),(0,l.kt)("h4",{id:"\u4ec0\u9ebc\u662f-box-sizingborder-box"},"\u4ec0\u9ebc\u662f box-sizing:border-box?"),(0,l.kt)("p",null,"\u8a2d\u5b9a box-sizing:border-box \u4e0d\u7528\u518d\u53bb\u8a08\u7b97\u5be6\u969b\u7684 width/height\uff0c\u56e0\u70ba width/height \u6703\u8a2d\u5b9a\u70ba border-box\uff0c\u4ee3\u8868 padding \u6703\u5f80 border-box \u88e1\u9762\u9577\uff0cmargin \u5247\u6703\u5f80\u5916\u9577\uff0cwidth/height \u4e0d\u6703\u56e0\u6b64\u800c\u6539\u8b8a\u3002"),(0,l.kt)("p",null,"\u5c07 box-sizing \u8a2d\u5b9a\u6210 border-box \u5f8c\uff0c width / height \u7684\u4f5c\u7528\u7bc4\u570d\u5c31\u662f\u6307\u5230 border \u9019\u500b box \u7684\u7bc4\u570d\u4e86\uff0c\u6211\u5011\u5c31\u7a31\u70ba border-box\uff0c\u5f9e\u524d\u9762\u6240\u5beb\u7684\u53ef\u4ee5\u4e86\u89e3\u4e00\u500b\u7269\u4ef6\u7684\u7bc4\u570d\uff0c\u662f\u7531\u56db\u500b\u5c64\u5c64\u5305\u88f9\u7684\u77e9\u5f62\u6240\u69cb\u6210\uff0c\u6b64\u6642 width \u6240\u4f5c\u7528\u7684 box \u5c31\u662f border \u9019\u500b\u7bc4\u570d\u4e86\uff0c\u5982\u4e0b\u5716\u6240\u793a(\u5716\u7247\u53d6\u81ea Chrome DevTools)"),(0,l.kt)("h4",{id:"css-display"},"css display"),(0,l.kt)("h5",{id:"display-inline-block-vs-block"},"display: inline-block vs block?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"display: inline-block allows to set a width and height on the element."),(0,l.kt)("li",{parentName:"ol"},"with display: inline-block, width, height and padding are respected,")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block"},"https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block")),(0,l.kt)("h4",{id:"css-flex"},"css flex?"),(0,l.kt)("h4",{id:"css-grid"},"css grid?"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.casper.tw/css/2017/03/22/css-grid-layout/"},"Grid \u4ecb\u7d39")),(0,l.kt)("h2",{id:"css-\u5957\u4ef6"},"CSS \u5957\u4ef6"),(0,l.kt)("h3",{id:"css-in-js"},"CSS-in-JS"),(0,l.kt)("h4",{id:"styled-components"},"styled-components"),(0,l.kt)("p",null,"pros:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u907f\u514d\u6c59\u67d3\u5168\u57df CSS\uff1a\u751f\u6210\u552f\u4e00\u7684 class \u540d\uff0c\u907f\u514d\u6c59\u67d3\u5168\u57df CSS\u3002"),(0,l.kt)("li",{parentName:"ol"},"autoprefixer: \u81ea\u52d5\u7522\u751f\u700f\u89bd\u5668\u517c\u5bb9\u6027\u524d\u7db4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7528 props \u505a dynamic styling")),(0,l.kt)("p",null,"cons:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728 SSR hydration \u4e2d\u8981\u984d\u5916\u53bb render ServerStyleSheet\uff0c\u56e0\u70ba styled-components \u662f\u52d5\u614b\u7684\u88ab\u751f\u6210(ex, props)"),(0,l.kt)("li",{parentName:"ol"},"\u6548\u80fd\u4e0d\u597d\uff08\u8d8a\u591a JS\uff0c\u4ee3\u8868\u8981\u89e3\u6790\u8d8a\u591a\u6771\u897f\uff0c\u6548\u80fd\u8d8a\u4e0d\u597d\uff09")),(0,l.kt)("h4",{id:"lineria"},"lineria"),(0,l.kt)("p",null,"pros:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7528 CSS-in-JS \u7684\u5beb\u6cd5\u52a0\u4e0a zero runtime\uff08\u5728 build time \u5efa\u7acb css\uff09 \u4f86\u6e1b\u5c11 JS \u7a0b\u5f0f\u78bc\u91cf\uff0c\u4ee5\u589e\u52a0 loading \u6642\u9593\u4f86\u9054\u5230\u66f4\u597d\u7684 SEO")),(0,l.kt)("p",null,"\u8cc7\u6e90\uff1a"),(0,l.kt)("p",null,"why airbnb switch to linaria",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/airbnb-engineering/airbnbs-trip-to-linaria-dc169230bd12"},"https://medium.com/airbnb-engineering/airbnbs-trip-to-linaria-dc169230bd12")),(0,l.kt)("p",null,"use lineria with atomic css",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/callstack/linaria/blob/master/docs/ATOMIC_CSS.md"},"https://github.com/callstack/linaria/blob/master/docs/ATOMIC_CSS.md")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://css-tricks.com/lets-define-exactly-atomic-css/"},"https://css-tricks.com/lets-define-exactly-atomic-css/")),(0,l.kt)("h3",{id:"atomic-css"},"atomic css"),(0,l.kt)("p",null,":\u628a css \u5207\u5206\uff0c\u4f86\u6e1b\u5c11\u591a\u9918/\u91cd\u8907\u7684 CSS\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'//before\n<style>\n  .redButton {\n    background: red;\n    width: 100px;\n  }\n\n  .blueButton {\n    background: blue;\n    width: 100px;\n  }\n</style>\n<button class="redButton" />\n<button class="blueButton" />\n\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\n//after\n\n<style>\n  .a {\n    background: red;\n  }\n  .b {\n    background: blue;\n  }\n  .c {\n    width: 100px;\n  }\n</style>\n<button class="a c" />\n<button class="b c" />\n')),(0,l.kt)("p",null,"\u7db2\u7ad9\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://acss.io/"},"https://acss.io/")),(0,l.kt)("h3",{id:"\u6bd4\u8f03"},"\u6bd4\u8f03"),(0,l.kt)("h4",{id:"css-in-js-vs-css-module"},"CSS-in-JS vs CSS-Module"),(0,l.kt)("p",null,"CSS-in-JS"),(0,l.kt)("p",null,"pros"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8907\u7528\u6027\u9ad8"),(0,l.kt)("li",{parentName:"ol"},"\u597d\u7528,\u6613\u8b80")),(0,l.kt)("p",null,"cons"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6a23\u5f0f\u662f\u548c JS \u6587\u4ef6\u6253\u5305\u5728\u4e00\u8d77\uff0c\u6240\u4ee5\u6703\u62d6\u6162 JS \u6587\u4ef6\u52a0\u8f09\u6642\u9593"),(0,l.kt)("li",{parentName:"ol"},"\u6c92\u6709\u55ae\u7368 CSS \u6587\u4ef6\u6240\u4ee5\u7121\u6cd5\u7de9\u5b58")),(0,l.kt)("p",null,"CSS-Module"),(0,l.kt)("p",null,"pros"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6a23\u5f0f\u4ee3\u78bc\u8207 JS \u4ee3\u78bc\u5206\u96e2\uff0c\u4ee3\u78bc\u6703\u76f8\u5c0d\u7c21\u6f54\u6a23\u5f0f"),(0,l.kt)("li",{parentName:"ol"},"\u53ea\u662f\u5728 CSS \u57fa\u790e\u4e0a\u52a0\u5165\u4e86\u5c40\u90e8\u4f5c\u7528\u57df\u8ddf\u6a21\u584a\u4ee5\u4f86\uff0c\u4ee3\u78bc\u76f8\u5c0d\u898f\u7bc4")),(0,l.kt)("p",null,"cons"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"CSS Modules don\u2019t accept props.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7030349710023983117"},"https://juejin.cn/post/7030349710023983117")),(0,l.kt)("h3",{id:"css-\u7528\u6cd5"},"CSS \u7528\u6cd5"),(0,l.kt)("h4",{id:"---selector-\u7528\u6cd5"},"~, +, > selector \u7528\u6cd5"),(0,l.kt)("h4",{id:"-select-element-immediate-after"},"+ \uff08select element immediate after)"),(0,l.kt)("h4",{id:"-select-element-behind-it"},"~ (select element behind it)"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://gocreating.lation.app/blog/interview/appier"},"https://gocreating.lation.app/blog/interview/appier")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/6910049/on-a-css-hover-event-can-i-change-another-divs-styling"},"https://stackoverflow.com/questions/6910049/on-a-css-hover-event-can-i-change-another-divs-styling"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/10782054/what-does-the-tilde-squiggle-twiddle-css-selector-mean"},"https://stackoverflow.com/questions/10782054/what-does-the-tilde-squiggle-twiddle-css-selector-mean")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Resources:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zh-tw.learnlayout.com/frameworks.html"},"https://zh-tw.learnlayout.com/frameworks.html"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10252827"},"https://ithelp.ithome.com.tw/articles/10252827"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://zh-tw.learnlayout.com/box-sizing.html"},"https://zh-tw.learnlayout.com/box-sizing.html")))}c.isMDXComponent=!0}}]);