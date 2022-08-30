"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3430:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},c="[others] React trivia",l={unversionedId:"React/trivia",id:"React/trivia",isDocsHomePage:!1,title:"[others] React trivia",description:"React \u512a\u7f3a\u9ede/\u7279\u8272\uff1f",source:"@site/docs/React/trivia.md",sourceDirName:"React",slug:"/React/trivia",permalink:"/bywater-blog/React/trivia",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"[Optimization] Basics",permalink:"/bywater-blog/Optimization/Basic_Optimization"},next:{title:"[others] React reconciliation, Virtual DOM",permalink:"/bywater-blog/React/Reconciliation"}},i=[{value:"React \u512a\u7f3a\u9ede/\u7279\u8272\uff1f",id:"react-\u512a\u7f3a\u9ede\u7279\u8272",children:[]},{value:"Keys \u5728 react \u4e2d\u4ee3\u8868\u4ec0\u9ebc\uff1f",id:"keys-\u5728-react-\u4e2d\u4ee3\u8868\u4ec0\u9ebc",children:[]},{value:"controlled components vs uncontrolled components in React?",id:"controlled-components-vs-uncontrolled-components-in-react",children:[]},{value:"React element vs components?",id:"react-element-vs-components",children:[]}],p={toc:i};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"others-react-trivia"},"[others]"," React trivia"),(0,a.kt)("h2",{id:"react-\u512a\u7f3a\u9ede\u7279\u8272"},"React \u512a\u7f3a\u9ede/\u7279\u8272\uff1f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"React is declarative(\u5ba3\u544a\u5f0f)\uff0c\u4f7f\u7528\u8005\u53ea\u9700\u8981\u4f7f\u7528 React \u63d0\u4f9b\u7684 api \u505a state, data \u7684\u66f4\u6539\uff0c\u8207 DOM \u76f8\u95dc\u7684\u64cd\u4f5c React \u6703\u5728\u5e95\u5c64\u5e6b\u5fd9\u8655\u7406\u597d\u3002\u9019\u6a23\u7684\u512a\u9ede\u662f\u8b93 DOM \u70ba\u4eba\u8a6c\u75c5\u7684 performance \u554f\u984c\uff08\u4e3b\u8981\u56e0\u70ba reflow, repaint \u5f88\u8017\u8cbb\u6027\u80fd)\uff0c\u53ef\u4ee5\u88ab react \u7528 virtual-DOM \u7d66\u89e3\u6c7a\u3002"),(0,a.kt)("li",{parentName:"ol"},"React \u8b93\u6211\u5011\u53ef\u4ee5\u5efa\u7acb",(0,a.kt)("strong",{parentName:"li"},"\u80fd\u88ab\u91cd\u8907\u4f7f\u7528\u7684\u7d44\u4ef6"),"\uff0c\u4f86\u589e\u52a0\u7a0b\u5f0f\u78bc\u53ef\u5ea6\u6027\u3001\u91cd\u8907\u6027\uff0c\u6e1b\u5c11 debug \u6642\u9593\u3002"),(0,a.kt)("li",{parentName:"ol"},"React \u662f",(0,a.kt)("strong",{parentName:"li"},"one way data flow"),"\uff0c\u4ee3\u8868\u55ae\u4e00\u65b9\u5411\u7684\u8cc7\u6599\u6d41\u52d5\uff0c\u6e1b\u5c11 debug \u6642\u9593\u8ddf\u932f\u8aa4\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5927\u91cf\u7684 npm package/\u793e\u7fa4")),(0,a.kt)("h2",{id:"keys-\u5728-react-\u4e2d\u4ee3\u8868\u4ec0\u9ebc"},"Keys \u5728 react \u4e2d\u4ee3\u8868\u4ec0\u9ebc\uff1f"),(0,a.kt)("p",null,"key \u53ef\u4ee5\u5e6b\u52a9 React \u8ddf\u8e64\u5faa\u74b0\u5275\u5efa\u5217\u8868\u4e2d\u7684\u865b\u64ec DOM \u5143\u7d20\uff0c\u77ad\u89e3\u54ea\u4e9b\u5143\u7d20\u5df2\u66f4\u6539\u3001\u6dfb\u52a0\u6216\u522a\u9664\u3002"),(0,a.kt)("p",null,"\u6bcf\u500b\u7d81\u5b9a key \u7684\u865b\u64ec DOM \u5143\u7d20\uff0c\u5728\u9644\u8fd1\u7684\u5143\u7d20\u4e4b\u9593\u90fd\u662f\u7368\u4e00\u7121\u4e8c\u7684\u3002\u5728 React \u7684 reconciliation \u904e\u7a0b\u4e2d\uff0c\u6bd4\u8f03\u65b0\u7684\u865b\u64ec DOM \u6a39\u8207\u4e0a\u4e00\u500b virtual-DOM \u6a39\u4e4b\u9593\u7684\u5dee\u7570\uff0c\u4e26\u66f4\u6539\u5230\u9801\u9762\u4e2d\u3002key \u4f7f React \u8655\u7406\u5217\u8868\u4e2d\u865b\u64ec DOM \u6642\u66f4\u52a0\u9ad8\u6548\uff0c\u56e0\u7232 React \u53ef\u4ee5\u4f7f\u7528\u865b\u64ec DOM \u4e0a\u7684 key \u5c6c\u6027\uff0c\u5feb\u901f\u77ad\u89e3\u5143\u7d20\u662f\u65b0\u7684\u3001\u9700\u8981\u522a\u9664\u7684\uff0c\u9084\u662f\u4fee\u6539\u904e\u7684\u3002\u5982\u679c\u6c92\u6709 key,R\u03b5at \u5c31\u4e0d\u77e5\u9053\u5217\u8868\u4e2d\u865b\u64ec DOM \u5143\u7d20\u8207\u9801\u9762\u4e2d\u7684\u54ea\u500b\u5143\u7d20\u76f8\u5c0d\u61c9\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/lAQP3wNVuHpp-mt_RAqK1A"},"https://mp.weixin.qq.com/s/lAQP3wNVuHpp-mt_RAqK1A")),(0,a.kt)("h2",{id:"controlled-components-vs-uncontrolled-components-in-react"},"controlled components vs uncontrolled components in React?"),(0,a.kt)("h4",{id:"controlled-components"},"controlled components"),(0,a.kt)("p",null,":\u6307\u7684\u900f\u904e onChange \u6216\u662f\u5176\u4ed6 callback \u65b9\u5f0f\uff0c\u628a value \u5132\u5b58\u5728 parents components\uff0c\u88ab parents components \u6240\u201d\u63a7\u5236\u201c\u7684 components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<input type="text" value={value} onChange={handleChange} />\n')),(0,a.kt)("h4",{id:"uncontrolled-components"},"uncontrolled components"),(0,a.kt)("p",null,":\u6307\u7684\u5132\u5b58\u81ea\u5df1\u7684 value\uff0c\u800c\u5fc5\u9808\u900f\u904e",(0,a.kt)("inlineCode",{parentName:"p"},"ref"),"\u4f86\u7372\u53d6\u88e1\u9762\u7684 value \u7684 component\uff0c\u901a\u5e38\u7528\u65bc\u8207\u5176\u4ed6\u975e react code \u5408\u4f5c\u6642."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<input type="text" defaultValue="foo" ref={inputRef} />\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/uncontrolled-components.html"},"https://reactjs.org/docs/uncontrolled-components.html")),(0,a.kt)("h2",{id:"react-element-vs-components"},"React element vs components?"),(0,a.kt)("p",null,"React element \u662f\u4e00\u500b\u7528\u4f86\u5f62\u5bb9 components \u6216\u662f DOM node \u7684 Js object\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// React element\n{\n  type: 'button',\n  props: {\n    className: 'button button-blue',\n    children: {\n      type: 'b',\n      props: {\n        children: 'OK!'\n      }\n    }\n  }\n}\n\n<button class='button button-blue'>\n  <b>\n    OK!\n  </b>\n</button>\n\n\n\n\n\n")),(0,a.kt)("p",null,"React component \u6307\u7684\u662f functions/classes \u6709 props \u50b3\u9032\u4f86\u7576\u4f5c input\uff0c\u7136\u5f8c\u56de\u50b3 elements \u7576\u4f5c output\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zh-hant.reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html"},"https://zh-hant.reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E7%AD%86%E8%A8%98-why-react-424f2abaf9a2"},"https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E7%AD%86%E8%A8%98-why-react-424f2abaf9a2")))}s.isMDXComponent=!0}}]);