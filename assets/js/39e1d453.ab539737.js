"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[8721],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),y=n,d=m["".concat(p,".").concat(y)]||m[y]||s[y]||l;return t?a.createElement(d,o(o({ref:r},u),{},{components:t})):a.createElement(d,o({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4377:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const l={sidebar_position:11},o="[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] Array's method",i={unversionedId:"ironMan2022/arrayMethod",id:"ironMan2022/arrayMethod",title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] Array's method",description:"https://ithelp.ithome.com.tw/upload/images/20220925/20148825nqDMDMmKHd.jpg",source:"@site/docs/ironMan2022/arrayMethod.md",sourceDirName:"ironMan2022",slug:"/ironMan2022/arrayMethod",permalink:"/bywater-blog/ironMan2022/arrayMethod",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] \u5be6\u4f5c promise, promise.all, promise.race",permalink:"/bywater-blog/ironMan2022/promise_implementation"},next:{title:"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230] React",permalink:"/bywater-blog/ironMan2022/day12_react"}},p={},c=[{value:"Array.prototype.map",id:"arrayprototypemap",level:3},{value:"\u8a9e\u6cd5:",id:"\u8a9e\u6cd5",level:4},{value:"\u7bc4\u4f8b\uff1a",id:"\u7bc4\u4f8b",level:4},{value:"Array.prototype.filter",id:"arrayprototypefilter",level:3},{value:"\u8a9e\u6cd5:",id:"\u8a9e\u6cd5-1",level:4},{value:"\u7bc4\u4f8b\uff1a",id:"\u7bc4\u4f8b-1",level:4},{value:"Array.prototype.reduce",id:"arrayprototypereduce",level:3},{value:"\u8a9e\u6cd5:",id:"\u8a9e\u6cd5-2",level:4},{value:"\u7bc4\u4f8b\uff1a",id:"\u7bc4\u4f8b-2",level:4}],u={toc:c};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u9435\u4eba\u8cfd-2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230-arrays-method"},"[\u9435\u4eba\u8cfd 2022-\u64ca\u6557\u524d\u7aef\u9762\u8a66\u5927\u4f5c\u6230]"," Array's method"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20220925/20148825nqDMDMmKHd.jpg",alt:"https://ithelp.ithome.com.tw/upload/images/20220925/20148825nqDMDMmKHd.jpg"})),(0,n.kt)("p",null,"\u6628\u5929\u6211\u5011\u8b1b\u4e86 JS \u7684 promise \u5be6\u4f5c\uff0c\u4eca\u5929\u6211\u5011\u8981\u4f86\u7e7c\u7e8c\u8a0e\u8ad6\u53e6\u4e00\u985e\u5f88\u5e38\u5728\u9762\u8a66\u4e2d\u9047\u5230\u7684\u5be6\u4f5c\u984c---Array \u65b9\u6cd5\u5be6\u4f5c\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u9019\u88e1\u6211\u5011\u5c31\u53ea\u6311\u6700\u5e38\u898b\u7684\u5e7e\u500b\u4f86\u5be6\u4f5c\uff0c\u5176\u4ed6\u7684\u65b9\u6cd5\u5c31\u7559\u7d66\u5927\u5bb6\u81ea\u5df1\u67e5\u645f\uff5e\uff5e\u800c\u9019\u4e00\u7bc7\u6587\u7ae0\u6703\u662f JS \u7cfb\u5217\u7684\u6700\u5f8c\u4e00\u7bc7\u6587\uff0c\u63a5\u4e0b\u4f86\u6211\u5011\u5c31\u6703\u9032\u5165\u524d\u7aef\u6846\u67b6 React \u7684\u7cfb\u5217\u4e86!\u8acb\u5927\u5bb6\u62ed\u76ee\u4ee5\u5f85\uff01\u4e0b\u9762\u5c31\u9032\u5165\u6211\u5011\u7684\u6b63\u6587\u5427\uff01"),(0,n.kt)("h3",{id:"arrayprototypemap"},"Array.prototype.map"),(0,n.kt)("p",null,"\u6211\u5011\u7b2c\u4e00\u500b\u8981\u5be6\u8e10\u7684\u662f Array.map\uff0c\u60f3\u5fc5\u5404\u4f4d\u524d\u7aef\u5de5\u7a0b\u5e2b\u5c0d\u9019\u500b\u65b9\u6cd5\u4e00\u5b9a\u4e0d\u6703\u964c\u751f\uff0cmap \u53ef\u4ee5\u57f7\u884c\u9663\u5217\u5167\u7684\u503c\u4e26\u4e14\u56de\u50b3\u4e00\u500b\u65b0\u7684\u9663\u5217\u3002\u90a3\u8981\u6ce8\u610f\u7684\u662f\uff0cforEach \u96d6\u7136\u4e5f\u662f\u8dd1\u9663\u5217\u4f46\u662f\u4ed6\u4e26\u4e0d\u6703\u56de\u50b3\u4efb\u4f55\u6771\u897f\uff0c\u6240\u4ee5 return \u5728 forEach \u88e1\u4e0d\u6703\u6709\u4f5c\u7528\uff01\uff01\u63a5\u4e0b\u4f86\u8001\u6a23\u5b50\u4f86\u770b\u4e00\u4e0b map \u7684\u4f7f\u7528\u7bc4\u4f8b\u5427\uff01"),(0,n.kt)("h4",{id:"\u8a9e\u6cd5"},"\u8a9e\u6cd5:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const newArr = arr.map(function (value, index, array) {\n  //...\n});\n")),(0,n.kt)("h4",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"let name = [\"\u5c0f\u660e\", \"\u5c0f\u738b\", \"\u5c0f\u6797\"];\nlet newName = name.map(function (value, index, array) {\n  return `\u6211\u7684\u540d\u5b57\u662f\uff1a ${value}`;\n});\n\nconsole.log(name); // ['\u5c0f\u660e', '\u5c0f\u738b', '\u5c0f\u6797']\nconsole.log(newName); // ['\u6211\u7684\u540d\u5b57\u662f\uff1a \u5c0f\u660e', '\u6211\u7684\u540d\u5b57\u662f\uff1a \u5c0f\u738b', '\u6211\u7684\u540d\u5b57\u662f\uff1a \u5c0f\u6797']\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u539f\u9663\u5217\u4e0d\u6703\u88ab\u4fee\u6539\uff0c\u4e26\u4e14\u6703\u7522\u751f\u65b0\u7684\u9663\u5217\uff01")),(0,n.kt)("p",null,"\u77e5\u9053\u4ed6\u7684\u7528\u6cd5\u4e4b\u5f8c\uff0c\u6211\u5011\u5c31\u4f86\u5be6\u4f5c\u4ed6\u770b\u770b\u5427\uff01"),(0,n.kt)("p",null,"\u5be6\u4f5c\u601d\u8def\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u65b0\u589e\u4e00\u500b\u65b9\u6cd5\u5230 Array \u88e1\uff0c\u8b93\u6240\u6709 Array \u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u6240\u4ee5\u7528 prototype\uff0c\u5982\u679c\u5c0d prototype \u9084\u4e0d\u719f\u6089\u7684\u670b\u53cb\u53ef\u4ee5\u53bb\u524d\u5e7e\u5929\u7684 prototype \u90a3\u7bc7\u6587\u7ae0\u5594!"),(0,n.kt)("li",{parentName:"ol"},"Array.map(callback)\u63a5\u6536\u7684\u503c\u662f\u4e00\u500b callback\uff0c\u7136\u5f8c\u88e1\u9762\u61c9\u8a72\u662f\u8981\u9577\u4ee5\u4e0b\u9019\u6a23")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"function (value, index, array) {\n  //...\n});\n\n")),(0,n.kt)("p",null,"\u6240\u4ee5\u6211\u5011\u7684\u5be6\u4f5c\u5fc5\u9808\u8981\u56de\u4e00\u500b\u6709 value,index \u8ddf\u8a72 array \u7684 callback!"),(0,n.kt)("p",null,"\u601d\u8def\u91d0\u6e05\u5f8c\uff0c\u8981\u5be6\u4f5c\u5c31\u986f\u5f97\u5f88\u7c21\u55ae\u645f\uff0c\u4ee5\u4e0b\u5c31\u662f\u5be6\u969b\u5be6\u4f5c\u7684\u7d50\u679c\uff01"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype.myMap = function (callback) {\n  const result = [];\n  for (let i = 0; i < this.length; i++) {\n    result.push(callback(this[i], i, this));\n  }\n  return result;\n};\n")),(0,n.kt)("p",null,"\u6211\u5011\u4e0b\u4e00\u500b\u8981\u4ecb\u7d39\u7684 Array \u65b9\u6cd5\u662f Array.filter\uff0c\u9019\u500b\u65b9\u6cd5\u53ef\u4ee5\u5e6b\u6211\u5011\u5f9e\u539f\u672c\u7684\u9663\u5217\u4e2d\u7be9\u9078\u51fa\u60f3\u8981\u7684\u503c\uff0c\u7136\u5f8c\u6703\u56de\u50b3\u4e00\u500b\u65b0\u7684\u9663\u5217\uff01"),(0,n.kt)("h3",{id:"arrayprototypefilter"},"Array.prototype.filter"),(0,n.kt)("h4",{id:"\u8a9e\u6cd5-1"},"\u8a9e\u6cd5:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const newArr = arr.filter(function (value, index, array) {\n  //...\n});\n")),(0,n.kt)("h4",{id:"\u7bc4\u4f8b-1"},"\u7bc4\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"function isBigEnough(value) {\n  return value >= 10;\n}\n\nvar filtered = [12, 5, 8, 130, 44].filter(isBigEnough);\n// filtered is [12, 130, 44]\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u539f\u9663\u5217\u4e0d\u6703\u88ab\u4fee\u6539\uff0c\u4e26\u4e14\u6703\u7522\u751f\u65b0\u7684\u9663\u5217\uff01")),(0,n.kt)("p",null,"Array.filter \u7684\u5be6\u4f5c\u601d\u8def\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4ed6\u904e Array.map \u4e00\u6a23\uff0c\u6703\u6709\u4e00\u500b callback\uff0c\u800c\u4e14\u88e1\u9762\u6703\u6709\u4e0b\u9762\u9019\u4e09\u500b\u503c value, index, array"),(0,n.kt)("li",{parentName:"ol"},"\u4ed6\u6703\u7528 callback \u88e1\u9762\u7684\u5224\u65b7\uff0c\u5982\u679c\u5224\u65b7\u70ba true \u5c31\u6703\u88ab push \u9032\u56de\u50b3\u9663\u5217\u4e2d\uff0c\u76f8\u53cd\u7684\uff0c\u5224\u65b7\u70ba false \u7684\u8a71\u5c31\u6703\u88ab\u7701\u7565\u3002")),(0,n.kt)("p",null,"\u4e86\u89e3 Array.filter \u7684\u4f7f\u7528\u65b9\u6cd5\u4e4b\u5f8c\uff0c\u4e0b\u9762\u5c31\u4f86\u5be6\u4f5c\u5427\uff01\uff01"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype.myFilter = function (callback) {\n  const resultArray = [];\n  for (let i = 0; i < this.length; i++) {\n    if (!!callback(this[i], i, this)) {\n      resultArray.push(this[index]);\n    }\n  }\n  return resultArray;\n};\n")),(0,n.kt)("p",null,"\u6700\u5f8c\u4e00\u500b\u8981\u4f86\u5be6\u4f5c\u7684\u662f Array.reduce\uff0c\u76f8\u4fe1\u9019\u662f\u4e00\u500b\u8b93\u4eba\u53c8\u611b\u53c8\u6068\u7684\u9663\u5217\u65b9\u6cd5\uff0c\u56e0\u70ba\u5b83\u7684\u78ba\u662f\u9663\u5217\u65b9\u6cd5\u4e2d\u6bd4\u8f03\u8907\u96dc\u7684\uff01\u66fe\u7d93\u7684\u6211\u4e5f\u5f88\u5c11\u7528\u4e26\u4e14\u4e0d\u53bb\u4e86\u89e3 Array.reduce \u7684\u7528\u6cd5\uff0c\u4f46\u662f\u4ed6\u5176\u5be6\u5f88\u597d\u7528\uff0c\u5982\u679c\u53ef\u4ee5\u5584\u7528\u5b83\u7684\u8a71\uff0c\u53ef\u4ee5\u8b93\u7a0b\u5f0f\u78bc\u66f4\u52a0\u7c21\u6f54\uff01"),(0,n.kt)("h3",{id:"arrayprototypereduce"},"Array.prototype.reduce"),(0,n.kt)("h4",{id:"\u8a9e\u6cd5-2"},"\u8a9e\u6cd5:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const newArr = arr.reduce(function (\n  accumulator,\n  currentValue,\n  currentIndex,\n  array\n) {\n  //...\n},\ninitialValue);\n")),(0,n.kt)("h4",{id:"\u7bc4\u4f8b-2"},"\u7bc4\u4f8b\uff1a"),(0,n.kt)("p",null,"Reduce \u53ef\u4ee5\u6d3e\u4e0a\u7528\u5834\u7684\u7d93\u5178\u984c\u76ee\u50cf\u662f\u4ee5\u4e0b\u9019\u984c\uff0c\u7528 reduce \u5c31\u53ef\u4ee5\u5feb\u901f\u7684\u7b97\u51fa\u7b54\u6848\uff01"),(0,n.kt)("p",null,"Problem: \u5217\u51fa array \u5167\u7684 element \u6578\u91cf"),(0,n.kt)("p",null,"Input: arr = ",'["a", "b", "c", "b", "a"]',(0,n.kt)("br",{parentName:"p"}),"\n","Output: {a: 2, b: 2, c: 1}"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'//Array.prototype.reduce;\n\nfunction countOccurrences(arr) {\n  return arr.reduce(function (a, b) {\n    a[b] = a[b] + 1 || 1;\n    return a;\n  }, {});\n}\nconsole.log(countOccurrences(["a", "b", "c", "b", "a"]));\n')),(0,n.kt)("p",null,"Array.Reduce \u7684\u5be6\u4f5c\u601d\u8def\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9996\u5148\uff0ccallback \u88e1\u9762\u6703\u6709\u56db\u500b\u503c\uff08 accumulator \u7d2f\u52a0\u503c,\ncurrentValue \u7576\u524d\u503c,\ncurrentIndex \u7576\u524d index,\narray\n)"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u6709\u63d0\u4f9b initialValue\uff0c\u90a3\u5c31\u7528 initialValue \u4f86\u505a\u8a08\u7b97\u3002\u6c92\u6709\u7684\u8a71\uff0c\u5c31\u7528 array \u4e2d\u7684\u7b2c\u4e00\u500b\u503c\uff0c\u4f86\u7576\u4f5c initialValue\u3002")),(0,n.kt)("p",null,"\u4e0b\u9762\u5c31\u662f\u5be6\u4f5c\u7684\u7d50\u679c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype.myReduce = function (callback, initialValue) {\n  let init = initialValue || this[0];\n  let index = initialValue ? 0 : 1;\n  for (let i = index; i < this.length; i++) {\n    init = callback(init, this[i], i, this);\n  }\n  return init;\n};\n")),(0,n.kt)("p",null,"\u770b\u5230\u9019\u88e1\u5927\u5bb6\u61c9\u8a72\u5c0d map,filter, reduce \u4e09\u500b\u9663\u5217\u65b9\u6cd5\u6709\u66f4\u6df1\u7684\u4e86\u89e3\u4e86\uff0c\u53e6\u5916\uff0c\u7b2c\u4e00\u6b21\u5982\u679c\u770b\u4e0d\u61c2\u7684\u8a71\u662f\u6b63\u5e38\u7684\uff0c\u6211\u81ea\u5df1\u4e5f\u662f\u6709\u56fa\u5b9a\u8907\u7fd2\u9019\u4e9b\u8a9e\u6cd5\u624d\u80fd\u6162\u6162\u8a18\u4f4f\u4ed6\u5011\u7684\u5be6\u73fe\u65b9\u5f0f\uff0c\u9435\u4eba\u8cfd\u64ca\u6557\u9762\u8a66\u5927\u4f5c\u6230\u5230\u7b2c\u5341\u5929\u5927\u5bb6\u90fd\u8f9b\u82e6\u4e86\uff0cJS \u7cfb\u5217\u5df2\u7d93\u5728\u6b64\u544a\u4e00\u6bb5\u843d\uff0c\u4e0b\u4e00\u7ae0\u6211\u5011\u5c31\u6703\u958b\u59cb\u4f86\u770b React \u6846\u67b6\u645f\uff0c\u6211\u5011\u660e\u5929\u898b\uff01\uff01\uff01\uff01"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://blog.bitsrc.io/lets-implement-our-own-array-map-sort-methods-e89c9d5e2dc8"},"https://blog.bitsrc.io/lets-implement-our-own-array-map-sort-methods-e89c9d5e2dc8"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-implement-javascript-array-methods-from-scratch"},"https://www.digitalocean.com/community/tutorials/how-to-implement-javascript-array-methods-from-scratch"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://tzulinchang.medium.com/javascript-array-reduce%E7%9A%84%E7%94%A8%E6%B3%95-c435611a2935"},"https://tzulinchang.medium.com/javascript-array-reduce%E7%9A%84%E7%94%A8%E6%B3%95-c435611a2935")))}s.isMDXComponent=!0}}]);