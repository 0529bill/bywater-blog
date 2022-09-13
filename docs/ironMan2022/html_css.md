---
sidebar_position: 2
---

# [鐵人賽 2022-擊敗前端面試大作戰] HTML/CSS

今天是擊敗前端面試大作戰正文的第一篇！我們就先來點輕鬆的吧，今天會從 HTML 面試題開始，然後以 CSS 常見面試題作結尾，文章的寫作方式會是以面試問答為主，歡迎讀者把提示跟答案先遮住跟著一起作答。那本篇文章是適合/假設你對 HTML/CSS 已經有一定的了解了～或是最少已經有看過 w3school 對[html](https://www.w3schools.com/html/)和[css](https://www.w3schools.com/css/)的介紹！那下面正文開始！

1. src vs ref?

回答思路：src 用於替代這個元素，而 href 用於建立這個標籤與外部資源之間的關係

`<link href="style.css" rel="stylesheet" />`  
瀏覽器載入到這裡的時候，html 的渲染和解析不會暫停，css 檔案的載入是同時進行的

`<script src="script.js"></script>`  
當瀏覽器解析到這句程式碼時，頁面的載入和解析都會暫停直到瀏覽器拿到並執行完這個 js 檔案，因此會建議把`script`放到`<body>`的最下面。

HTML5 中新增了`defer`和`async`在`script`中，他們的用途是，當使用 `defer` 時，執行到該 `script` 時會繼續建立 DOM,在 DOM 建立完成後才會去執行該 `script`。而當使用 `async` 時，執行到該 `script`,就非同步的去跑該 `script`,跑完後直接執行，因此 `async` 適合用在 GA,或是其他不會影響使用者體驗的地方。
**注意：defer 和 async 屬性都是非同步下載外部的 JS 腳本文件，它們都不會阻塞頁面的解析**

https://nicolakacha.coderbridge.io/2020/09/20/css-flex-grid-1/

2. HTML 语义化優點?

回答：

- 增加程式碼可讀性，可以馬上知道程式的結構。
- 有利於 SEO，有助於爬蟲到到更多訊息。

2. display:inline-block, block, inline 的區別及差別

回答： inline-block，會以 block 的方式呈現，但可以在同一列 inline 水平並列，它可以設定元素的寬高/margin/padding。inline，為行內元素，元素的寬高/margin/padding 接不可以改變，多個相鄰的行內元素排在同一行裡，如果頁面一行排列不下，才會換新的一行。block，可以設定元素的寬高/margin/padding，並且每個 block 都是新的一行。

![block](./Img/block.jpeg)

1. CSS Modules VS. styled-components？

回答思路：可以先從 css 的問題開始講起，然後提到這兩個的不同。

回答：

原生 CSS 因為缺乏變量、函數這等方法，導致程式碼的維護性不高而且無法復用。除此之外，原生 CSS 還會造成**全局污染**的問題，同樣名稱的選擇器會造成樣式覆蓋等等問題。因此出現 CSS Module 和 CSS-in-JS 的解決方法，兩者的特點如下：

CSS Module

1. 利用文件名來產生 hash className 來解決命名衝突的問題
2. 然後搭配 Sass 或是 Less 來增加變量、函數等特性來增加維護性

styled-components 則是 CSS-in-JS 其中一種

1. 可讀性佳，好維護因為相關的 css 會在同一個區塊
2. 樣式是和 JS 文件打包在一起，所以會拖慢 JS 文件加載時間
3. 沒有單獨 CSS 文件所以無法緩存

4. 垂直置中？

https://codesandbox.io/s/intelligent-lamarr-xrbi95?file=/src/App.js

https://www.w3schools.com/css/css_align.asp

推薦的面試題資源：

HTML:  
https://juejin.cn/post/6905294475539513352

CSS:  
https://hackmd.io/@mingjunlu/front-end-interview-questions

Resources:

https://onurkul.com.tr/css-satir-ici-blok-inline-block
