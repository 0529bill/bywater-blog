---
sidebar_position: 9
---

# [JS] Modules, Script and module export, export default

## 什麼是 module?

:module 只是一個文件，一個 script.

## 歷史

：過去有 commonjs 給 nodejs server 端使用，browser 端則有 AMD，但是在 ES6 module 出現之後，其他 module 慢慢消失。

## 為什麼要 modules?

JavaScript 可以做的事情越來越多，所以透過模組化的概念來讓各個 Js file 獨立。

## common js vs es module

動態引入：  
common.js => 可以動態引入
es module => 靜態引入，會把引入提升到 file 開頭處。

同步/非同步引入
common.js => 同步引入（對大型網站可能造成 blocking）synchronous
es module => 非同步引入 asynchronous, lazy loading

易讀性：
es module 勝

```js

// common.js動態引入
if(user.length > 0){
   const userDetails = require(‘./userDetails.js’);
  // Do something ..
}

```

https://blog.logrocket.com/commonjs-vs-es-modules-node-js/
https://juejin.cn/post/6938581764432461854
https://tempura-good-good.coderbridge.io/2022/03/04/commonjs-&-es-module/

## ES6 module 用途?

&nbsp;
module 讓我們可以使用 `export` 和 `import`語法，來把 JS 切分成個自的 module，來解決遇到大型 codebase，有很多 function、變數而變得難以管理的狀況。
除此之外 module 還有幾項用途：

1. Deferred by default，代表 script 會等到 HTML 跑完後才執行。
2. script 加上 `async`的話，inline scripts 會變成非同步，代表他會在該 inline scripts 準備好後直接執行。
3. 重複引入會呼略第一個之後的引入，來避免重複引入的狀況。
4. module 會自動開啟 `strict mode`。
5. 每個 module 會有自己的 scope。

&nbsp;

## module 使用方法?

```js
<script type="module" src="XXX"></script>
```

&nbsp;

## Defer vs Async

解決問題：傳統瀏覽器會一行行讀去 HTML,當讀到 script 時就會停止建立 DOM,然後會去馬上執行 script,結束後才能回去建立 DOM,造成 1. script 可能無法抓到 DOM(因為當下 DOM 還未建立) 2.如果遇到大型 script,畫面會卡住，導致使用者體驗很糟。

### Defer

:執行到 script 時會繼續建立 DOM,在 DOM 建立完成後材會去執行該 Script 或是 handlers.  
:module 是用類似 defer 載入的方式，會等到 DOM 都建立完成後，才會去執行 script

```js

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready after defer!"));
</script>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>


//1. DOM handler 'DOMContentLoaded'等到defer script跑完之後才執行。
```

&nbsp;

### Async

:執行到該 script,就會去跑該 script,跑完後直接執行。
:用途：適合用在 GA,或是其他不會影響使用者體驗的地方。

```js
<!-- Google Analytics is usually added like this -->
<script async src="https://google-analytics.com/analytics.js"></script>
```

&nbsp;

https://gcdeng.com/blog/script-tag-async-defer-attributes

https://javascript.info/modules-intro  
https://javascript.info/script-async-defer

---

## Module Exports vs. Export Default?

require: Node.js 和 ES6 都支援的引入
export / import : 只有 ES6 支援的導出引入
module.exports / exports: 只有 Node.js 支援的導出

### How can I use an ES6 import in Node.js?

#### Node.js >= v13

It's very simple in Node.js 13 and above. You need to either:

Save the file with .mjs extension, or
Add { "type": "module" } in the nearest package.json.
You only need to do one of the above to be able to use ECMAScript modules.

#### Node.js <= v12

If you are using Node.js version 9.6 - 12, save the file with ES6 modules with .mjs extension and run it like:

node --experimental-modules my-app.mjs

---

## Resources

https://israynotarray.com/javascript/20210424/616364031/
https://segmentfault.com/a/1190000010426778
https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js
