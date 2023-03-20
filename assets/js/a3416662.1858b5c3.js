"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[52],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||o;return r?n.createElement(u,s(s({ref:t},p),{},{components:r})):n.createElement(u,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},45:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:7},s="[others] Computer science basics",i={unversionedId:"others/computerScience",id:"others/computerScience",isDocsHomePage:!1,title:"[others] Computer science basics",description:"General knowledge",source:"@site/docs/others/computerScience.md",sourceDirName:"others",slug:"/others/computerScience",permalink:"/bywater-blog/others/computerScience",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"[others] CSS trivia",permalink:"/bywater-blog/others/cssTrivia"},next:{title:"[others] \u6a94\u6848\u985e\u578b",permalink:"/bywater-blog/others/file"}},l=[{value:"General knowledge",id:"general-knowledge",children:[{value:"\u55ae\u4f4d",id:"\u55ae\u4f4d",children:[]},{value:"32bit vs 64 bit",id:"32bit-vs-64-bit",children:[]},{value:"Unicode &amp; ASCII",id:"unicode--ascii",children:[]}]},{value:"Wed-related knowledge",id:"wed-related-knowledge",children:[{value:"HTTP vs HTTPS",id:"http-vs-https",children:[]},{value:"Web socket",id:"web-socket",children:[]},{value:"REST \u67b6\u69cb",id:"rest-\u67b6\u69cb",children:[]},{value:"http-proxy",id:"http-proxy",children:[]},{value:"Inside look at modern web browser",id:"inside-look-at-modern-web-browser",children:[]}]}],c={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"others-computer-science-basics"},"[others]"," Computer science basics"),(0,a.kt)("h2",{id:"general-knowledge"},"General knowledge"),(0,a.kt)("h3",{id:"\u55ae\u4f4d"},"\u55ae\u4f4d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"1b (bit \u4f4d\uff0c\u6bd4\u7279\u4f4d\uff0c\u8ba1\u7b97\u673a\u8868\u793a\u6570\u636e\u6700\u5c0f\u7684\u5355\u4f4d, \u4e8c\u8fdb\u5236\u7684\u8303\u7574\uff0c\u5b58\u653e\u4e00\u4f4d\u4e8c\u8fdb\u5236\u6570\uff0c\u53730\u62161)\n1B (Byte \u5b57\u8282)\n1KB (Kilobyte \u5343\u5b57\u8282)\n1MB (Megabyte \u5146\u5b57\u8282 \u7b80\u79f0\u201c\u5146\u201d)\n1GB (Gigabyte \u5409\u5b57\u8282 \u53c8\u79f0\u201c\u5343\u5146\u201d)\n1TB\uff08Tera Byte 1000\u5409(\u5343\u5146)\u5b57\u8282(GB)\u3001\u5146\u5146\u4f4d(\u91cf\u5ea6\u4fe1\u606f\u5355\u4f4d\uff09\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"1 b \u5373 1 bit\n1 Byte = 8 Bits\uff08\u5373 1B=8 bit\uff09\n1 KB = 1024 Bytes\n1 MB = 1024 KB\n1 GB = 1024 MB\n1 TB = 1024 GB\n")),(0,a.kt)("h3",{id:"32bit-vs-64-bit"},"32bit vs 64 bit"),(0,a.kt)("p",null,"When it comes to computers, the difference between 32-bit and a 64-bit is all about processing power. Computers with 32-bit processors are older, slower, and less secure, while a 64-bit processor is newer, faster, and more secure.",(0,a.kt)("br",{parentName:"p"}),"\n","Your computer\u2019s central processing unit (CPU) functions like the brain of your computer. It controls all the communication and the flow of data to and from the other parts of your computer. Some computers use two or more processors. However, there are only two main categories of processors now: 32-bit processors and 64-bit processors. The type of processor that your computer uses affects its overall performance and what kind of software it can utilize."),(0,a.kt)("p",null,"Most computers made in the 1990s to early 2000s have a 32-bit system that can access 2^32 (or 4,294,967,296) bytes (units of digital information) of RAM (random access memory). Meanwhile, a 64-bit processor can handle 2^64 (or 18,446,744,073,709,551,616) bytes of RAM. In other words, a 64-bit processor can process more data than 4 billion 32-bit processors combined."),(0,a.kt)("p",null,"64 \u4f4d\u5143\u8a08\u7b97\u4e3b\u8981\u6709\u5169\u5927\u512a\u9ede\uff1a\u53ef\u4ee5\u9032\u884c\u66f4\u5927\u7bc4\u570d\u7684\u6574\u6578\u904b\u7b97\uff1b\u53ef\u4ee5\u652f\u63f4\u66f4\u591a\u7684\u8a18\u61b6\u9ad4\u7a7a\u9593\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.hellotech.com/blog/whats-the-difference-between-32-bit-and-64-bit"},"https://www.hellotech.com/blog/whats-the-difference-between-32-bit-and-64-bit")),(0,a.kt)("h3",{id:"unicode--ascii"},"Unicode & ASCII"),(0,a.kt)("p",null,"\u63a8\u85a6\u95b1\u8b80\u6587\u7ae0\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://pjchender.dev/webdev/guide-unicode/#%E5%8F%AA%E4%BD%BF%E7%94%A8%E5%88%B0-unicode-%E5%9F%BA%E6%9C%AC%E5%B9%B3%E9%9D%A2%E6%99%82u%E7%A2%BC%E9%BB%9E"},"https://pjchender.dev/webdev/guide-unicode/#%E5%8F%AA%E4%BD%BF%E7%94%A8%E5%88%B0-unicode-%E5%9F%BA%E6%9C%AC%E5%B9%B3%E9%9D%A2%E6%99%82u%E7%A2%BC%E9%BB%9E")),(0,a.kt)("p",null,"\u89e3\u6c7a\u554f\u984c\uff1aUnicode \u8ddf ASCII \u7684\u51fa\u73fe\u662f\u70ba\u4e86\u89e3\u6c7a\u96fb\u8166\u770b\u4e0d\u61c2\u4eba\u985e\u6587\u5b57\u7684\u554f\u984c\u3002"),(0,a.kt)("p",null,"The American Standard Code for Information Interchange (ASCII) was an early standardized encoding system for text. Encoding is the process of converting characters in human languages into binary sequences that computers can process."),(0,a.kt)("p",null,"cons: it only includes English and some common symbols(like /, !, and ?)."),(0,a.kt)("h4",{id:"utf-8-vs-utf-16"},"UTF-8 vs UTF-16"),(0,a.kt)("p",null,"\u89e3\u6c7a\u554f\u984c\uff1aASCII \u662f\u4ee5\u82f1\u6587\u5b57\u6bcd\u4f86\u5efa\u9020\uff0c\u7121\u6cd5\u4f7f\u7528\u4e9e\u6d32\u6587\u5b57(\u4e2d\u6587/\u65e5\u6587\u7b49\u7b49)\uff0c\u6240\u4ee5\u51fa\u73fe\u4e86 Unicode \u4f86\u8b93\u5168\u4e16\u754c\u7684\u8a9e\u8a00\u90fd\u80fd\u5920\u8f49\u63db\u6210\u96fb\u8166\u8b80\u5f97\u61c2\u7684\u8a9e\u8a00\u3002"),(0,a.kt)("p",null,"UTF-8 encoding is preferable to UTF-16 on the majority of websites, because it uses less memory. Recall that UTF-8 encodes each ASCII character in just one byte. UTF-16 must encode these same characters in either two or four bytes. This means that an English text file encoded with UTF-16 would be at least double the size of the same file encoded with UTF-8."),(0,a.kt)("p",null,"UTF-16 is only more efficient than UTF-8 on some non-English websites. If a website uses a language with characters farther back in the Unicode library, UTF-8 will encode all characters as four bytes, whereas UTF-16 might encode many of the same characters as only two bytes. Still, if your pages are filled with ABCs and 123s, stick with UTF-8."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.hubspot.com/website/what-is-utf-8"},"https://blog.hubspot.com/website/what-is-utf-8")),(0,a.kt)("h2",{id:"wed-related-knowledge"},"Wed-related knowledge"),(0,a.kt)("h3",{id:"http-vs-https"},"HTTP vs HTTPS"),(0,a.kt)("p",null,"HTTP\uff08\u8d85\u6587\u672c\u50b3\u8f38\u5354\u5b9a\uff09\u662f\u4e00\u7a2e\u5354\u5b9a\uff0c\u7528\u65bc\u5728 Web \u700f\u89bd\u5668\u548c Web \u670d\u52d9\u5668\u4e4b\u9593\u50b3\u8f38\u8cc7\u6599\u3002\u5b83\u662f\u4e00\u7a2e\u660e\u6587\u5354\u5b9a\uff0c\u9019\u610f\u5473\u8457\u901a\u904e HTTP \u50b3\u8f38\u7684\u6578\u64da\u672a\u7d93\u52a0\u5bc6\uff0c\u53ef\u4ee5\u88ab\u4efb\u4f55\u5177\u6709\u7db2\u8def\u6d41\u91cf\u8a2a\u554f\u6b0a\u9650\u7684\u4eba\u622a\u53d6\u548c\u95b1\u8b80\u3002"),(0,a.kt)("p",null,"HTTPS\uff08\u8d85\u6587\u672c\u50b3\u8f38\u5b89\u5168\u5354\u5b9a\uff09\u662f HTTP \u7684\u4e00\u500b\u66f4\u5b89\u5168\u7684\u7248\u672c\uff0c\u4f7f\u7528\u52a0\u5bc6\u6280\u8853\u4fdd\u8b77 Web \u700f\u89bd\u5668\u548c Web \u670d\u52d9\u5668\u4e4b\u9593\u50b3\u8f38\u7684\u8cc7\u6599\u3002HTTPS \u4f7f\u7528\u50b3\u8f38\u5c64\u5b89\u5168\u6027\uff08TLS\uff09\u548c\u5b89\u5168\u5957\u63a5\u5b57\u5c64\uff08SSL\uff09\u5354\u5b9a\u7684\u7d44\u5408\u5c0d\u6578\u64da\u9032\u884c\u52a0\u5bc6\uff0c\u9019\u4f7f\u5f97\u653b\u64ca\u8005\u66f4\u96e3\u622a\u53d6\u548c\u95b1\u8b80\u50b3\u8f38\u7684\u8cc7\u6599\u3002"),(0,a.kt)("h3",{id:"web-socket"},"Web socket"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.readfog.com/a/1649297763805007872"},"https://www.readfog.com/a/1649297763805007872")),(0,a.kt)("h3",{id:"rest-\u67b6\u69cb"},"REST \u67b6\u69cb"),(0,a.kt)("p",null,"Representational State Transfer\uff0c\u7c21\u7a31 REST\uff0c\u5b83\u662f\u4e00\u7a2e\u7db2\u8def\u67b6\u69cb\u98a8\u683c\uff0c\u8fd1\u5e7e\u5e74\u4f86 REST \u7684\u6982\u5ff5\u5df2\u7d93\u88ab\u5be6\u4f5c\u5728\u5927\u578b\u7db2\u8def\u7cfb\u7d71\u4e2d\uff0c\u800c\u5728 Web Service \u4e2d\u4f7f\u7528 REST \u6982\u5ff5\u88ab\u5be6\u4f5c\u51fa\u4f86\u7684 API \u5c31\u7c21\u7a31\u70ba RESTful API \u3002"),(0,a.kt)("p",null,"\u4e00\u500b REST request \u662f\u7531\u4ee5\u4e0b\u5e7e\u500b\u6771\u897f\u6240\u7d44\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"endpoint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HTTP method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Header")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Body"))),(0,a.kt)("h4",{id:"\u5e38\u898b\u7684http-method"},"\u5e38\u898b\u7684",(0,a.kt)("inlineCode",{parentName:"h4"},"HTTP method")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST \u65b0\u589e\u65b0\u8cc7\u6599 (create)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PUT \u66f4\u6539\u8cc7\u6599 (update)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PATCH \u6307\u66f4\u6539\u5c0f\u7b46\u8cc7\u6599(ex, \u4e00\u500b\u6b04\u4f4d)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PATCH")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")),(0,a.kt)("p",null,"When working with data, a RESTful API uses HTTP methods to perform CRUD (Create, Read, Update and Delete) operations."),(0,a.kt)("h4",{id:"http-status-code"},"HTTP status code"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"2xx success")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"3xx redirection")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"4xx client error")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"5xx server error")),(0,a.kt)("h3",{id:"http-proxy"},"http-proxy"),(0,a.kt)("p",null,"Frontend proxy can be called reverse proxy. It\u2019s a type of proxy server that can retrieve data from one or many servers to client app. Those resources are returned to client side in original from the server."),(0,a.kt)("p",null,"Example usages of reverse proxy are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bypass CORS errors \uff08CORS Proxy allows us to bypass CORS errors using a proxy server that acts as a bridge between the client and the server. \uff09"),(0,a.kt)("li",{parentName:"ul"},"it can distribute load from incoming requests to many servers."),(0,a.kt)("li",{parentName:"ul"},"it can add basic HTTP authentication access to a web server"),(0,a.kt)("li",{parentName:"ul"},"it can optimize content by compressing it and speed up a load time"),(0,a.kt)("li",{parentName:"ul"},"it can cache some static content to reduce time of load")),(0,a.kt)("p",null,"vite config \u4e5f\u6709\u63d0\u4f9b http-proxy \u9078\u9805",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/config/server-options.html#server-proxy"},"https://vitejs.dev/config/server-options.html#server-proxy")),(0,a.kt)("p",null,"github:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/http-party/node-http-proxy#options"},"https://github.com/http-party/node-http-proxy#options")),(0,a.kt)("p",null,"build your own proxy server:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://jakemccambley.medium.com/fixing-cors-errors-when-working-with-3rd-party-apis-a69dc5474804"},"https://jakemccambley.medium.com/fixing-cors-errors-when-working-with-3rd-party-apis-a69dc5474804")),(0,a.kt)("h3",{id:"inside-look-at-modern-web-browser"},"Inside look at modern web browser"),(0,a.kt)("p",null,"Resources:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/blog/inside-browser-part1/"},"https://developer.chrome.com/blog/inside-browser-part1/")),(0,a.kt)("h4",{id:"gpu-and-cpu"},"GPU and CPU"),(0,a.kt)("p",null,"CPU(Central Processing Unit): A CPU core can be considered your computer\u2019s brain, it handles many different tasks one by one as they come in."),(0,a.kt)("p",null,"GPU(Graphics Processing Unit): it handles graphic."),(0,a.kt)("h4",{id:"process-and-thread"},"Process and thread"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ProcessThread",src:r(574).Z})),(0,a.kt)("p",null,"Program: Program \u6307\u7684\u662f IDE\u3001editor \u7b49\u6240\u5beb\u7684\u7a0b\u5f0f\u78bc(code)\uff0c\u4e5f\u5c31\u662f\u8aaa\u9084\u5c1a\u672a load \u5165\u8a18\u61b6\u9ad4\u7684 code\u3002"),(0,a.kt)("p",null,"Process:Process \u610f\u65e8\u5df2\u7d93\u57f7\u884c\u4e26\u4e14 load \u5230\u8a18\u61b6\u9ad4\u4e2d\u7684 Program \uff0c\u7a0b\u5e8f\u4e2d\u7684\u6bcf\u4e00\u884c\u7a0b\u5f0f\u78bc\u96a8\u6642\u90fd\u6709\u53ef\u80fd\u88ab CPU \u57f7\u884c\uff0c\u5728\u5be6\u969b\u751f\u6d3b\u4e2d\uff0c\u9ede\u958b\u61c9\u7528\u7a0b\u5f0f\u5c31\u662f\u5c07 Program \u6d3b\u5316\u6210 Process\uff0cProcess \u5c31\u662f\u5be6\u9ad4\u7684\u5de5\u5ee0\uff0c\u7167\u8457 Program \u9019\u5f35\u8a2d\u8a08\u85cd\u5716\u6240\u5b8c\u6210\u7684\u5de5\u5ee0\u3002"),(0,a.kt)("p",null,"Thread: Process \u4e2d\u7684\u5de5\u4eba\uff0c\u8ca0\u8cac\u57f7\u884c process \u4e2d\u7684\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u8cc7\u6599\u4f86\u6e90: ",(0,a.kt)("a",{parentName:"p",href:"https://totoroliu.medium.com/program-process-thread-%E5%B7%AE%E7%95%B0-4a360c7345e5"},"https://totoroliu.medium.com/program-process-thread-%E5%B7%AE%E7%95%B0-4a360c7345e5")),(0,a.kt)("h4",{id:"shell-vs-zsh-vs-cmd"},"shell vs zsh vs cmd"),(0,a.kt)("p",null,"Shell, cmd, and zsh are all command-line interfaces (CLIs) used for interacting with an operating system."),(0,a.kt)("p",null,'Shell: The term "shell" generally refers to a program that provides a command-line interface for interacting with an operating system. Some of the most popular shells are Bash, zsh, sh, and csh. Shells provide features such as command-line completion, command history, and shell scripting. Bash is the default shell on most Linux distributions and macOS.'),(0,a.kt)("p",null,"cmd: cmd is the command-line interpreter for the Windows operating system. It provides a command prompt where users can enter commands to perform various tasks such as managing files, running programs, and configuring system settings."),(0,a.kt)("p",null,"zsh: zsh is an advanced shell designed for interactive use. It provides many features not found in other shells, such as advanced command-line completion, spelling correction, and globbing. zsh is also highly customizable and supports plugins and themes."),(0,a.kt)("h4",{id:"browser-architecture"},"Browser Architecture"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6bcf\u500b browser \u4e2d\u7684 Architecture \u90fd\u4e0d\u4e00\u6a23"),"\n",(0,a.kt)("img",{alt:"browserArch",src:r(6180).Z})),(0,a.kt)("h4",{id:"sdk-and-api"},"SDK and API"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hackmd.io/@metal35x/SJpPMBGSI"},"https://hackmd.io/@metal35x/SJpPMBGSI")),(0,a.kt)("p",null,"\u95b1\u8b80\u6587\u7ae0:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://blog.techbridge.cc/2017/06/17/cache-introduction/"},"https://blog.techbridge.cc/2017/06/17/cache-introduction/")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/m/articles/10219276"},"https://ithelp.ithome.com.tw/m/articles/10219276"))),(0,a.kt)("h4",{id:"vpn"},"VPN"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nordvpn.com/zh-tw/what-is-a-vpn/"},"https://nordvpn.com/zh-tw/what-is-a-vpn/")),(0,a.kt)("h4",{id:"\u5167\u7db2-vs-\u5916\u7db2"},"\u5167\u7db2 vs \u5916\u7db2"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stevessmarthomeguide.com/internal-external-ip-addresses/"},"https://stevessmarthomeguide.com/internal-external-ip-addresses/")),(0,a.kt)("h4",{id:"\u52a0\u5bc6"},"\u52a0\u5bc6"),(0,a.kt)("h5",{id:"\u7de8\u78bcencoding"},"\u7de8\u78bc\uff08Encoding\uff09"),(0,a.kt)("p",null,":\u63db\u500b\u65b9\u5f0f\u8868\u9054\uff0c\u6240\u4ee5\u53ea\u8981\u77e5\u9053\u8f49\u63db\u5de5\u5f0f\uff0c\u5c31\u53ef\u4ee5\u9084\u539f\u56de\u4f86"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// 1\nencodeURL();\ndecodeURL();\n\n// 2\nBase64;\n")),(0,a.kt)("h5",{id:"\u52a0\u5bc6encrypt"},"\u52a0\u5bc6\uff08Encrypt\uff09"),(0,a.kt)("h5",{id:"\u5c0d\u7a31\u52a0\u5bc6"},"\u5c0d\u7a31\u52a0\u5bc6"),(0,a.kt)("p",null,":\u7528\u540c\u4e00\u500b key \u52a0\u5bc6\u8ddf\u89e3\u5bc6"),(0,a.kt)("p",null,"\u7f3a\u9ede\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"key \u8981\u50b3\u9001\u7d66\u5c0d\u65b9"),(0,a.kt)("li",{parentName:"ol"},"key \u907a\u5931\u6216\u662f\u88ab\u7aca\u53d6\uff0c\u5c31\u6703\u9020\u6210\u8cc7\u6599\u5916\u6d29")),(0,a.kt)("p",null,"AES (Advanced Encryption Standard)\nex, OpenSSL"),(0,a.kt)("h5",{id:"\u975e\u5c0d\u7a31\u52a0\u5bc6"},"\u975e\u5c0d\u7a31\u52a0\u5bc6"),(0,a.kt)("p",null,":\u7522\u751f\u516c\u9470\u8ddf\u79c1\u9470\uff0c\u516c\u9470\u7528\u4f86\u52a0\u5bc6\uff0c\u79c1\u9470\u7528\u4f86\u89e3\u5bc6\uff0c\u516c\u9470\u53ef\u4ee5\u516c\u958b\uff0c\u79c1\u9470\u8981\u4fdd\u5bc6"),(0,a.kt)("p",null,"ex, RSA"),(0,a.kt)("h5",{id:"hash-\u96dc\u6e4a"},"Hash \u96dc\u6e4a"),(0,a.kt)("p",null,"\uff1a\u900f\u904e\u4e00\u7cfb\u5217\u7684\u904b\u7b97\u5f97\u5230\u503c\uff0c\u9019\u662f\u4e00\u500b\u55ae\u5411\u904b\u7b97\uff0c\u7121\u6cd5\u900f\u904e\u96dc\u6e4a\u503c\u53cd\u63a8\u51fa\u539f\u672c\u7684\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/starbugs/what-are-encoding-encrypt-and-hashing-4b03d40e7b0c"},"https://medium.com/starbugs/what-are-encoding-encrypt-and-hashing-4b03d40e7b0c")))}p.isMDXComponent=!0},6180:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/browserArch-08c67acc1aa73ce0c5e1deb85ad5765a.png"},574:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/processThread-442b89241308eb7297d3ac77bcebb05c.png"}}]);