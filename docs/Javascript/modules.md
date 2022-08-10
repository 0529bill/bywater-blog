---
sidebar_position: 9
---

# [JS] Modules & Script

## 什麼是 module?

:module 只是一個文件，一個 script.

## module 用途?

&nbsp;
module 讓我們可以使用 `export` 和 `import`語法，來把 JS 切分成個自的 module，來解決遇到大型 codebase，有很多 function、變數而變得難以管理的狀況。
除此之外 module 還有幾項用途：

1. Deferred by default，代表 script 會等到 HTML 跑完後才執行。
2. script 加上 `async`的話，inline scripts 會變成非同步，代表他會在該 inline scripts 準備好後直接執行。
3. 重複引入會呼略第一個之後的引入，來避免重複引入的狀況。
4. module 會自動開啟 `stirct mode`。
5. 每個 module 會有自己的 scope。

&nbsp;

## module 使用方法?

```js
<script type="module" src=XXX>

</script>
```

&nbsp;

## Defer vs Async

解決問題：傳統瀏覽器會一行行讀去 HTML,當讀到 script 時就會停止建立 DOM,然後會去馬上執行 script,結束後才能回去建立 DOM,造成 1. script 可能無法抓到 DOM(因為當下 DOM 還未建立) 2.如果遇到大型 script,畫面會卡住，導致使用者體驗很糟。

### Defer

:執行到 script 時會繼續建立 DOM,在 DOM 建立完成後材會去執行該 Script 或是 handlers .

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

https://javascript.info/modules-intro  
https://javascript.info/script-async-defer
