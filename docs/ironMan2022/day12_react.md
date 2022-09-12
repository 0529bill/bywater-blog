---
sidebar_position: 12
---

# [鐵人賽 2022-擊敗前端面試大作戰] React

嗨大家好，我是 bywater，今天來到前端面大作戰的第十二篇文章，也是 React 系列的開始，這個系列我預計會有四篇文章，內容會從第一篇的 react 介紹跟為什麼要用 react 到第二篇會比較深入了解 reconciliation，
virtualDOM。接著第三天會延續第一天所說的 react 優點，繼續討論 react 的特性跟 react hooks。最後一天，會把重點聚焦在 react 的未來，包含 react18 跟其未來的走向等。
希望完整四篇文章，能夠讓讀者對 react 有更深入的了解或是啟發，那廢話不多說，第一篇正文開始！！

什麼是 react?

React 是一個免費的 Open Source JavaScript 函式庫，用來建立應用程式的使用者介面。

為什麼要用 react?

1.  使用者多，教學跟市場上的需求也高。根據 stackoverflow 網站的調查，40%的前端工程師使用 React 框架，是目前是目前最多人使用的框架。

react 的特點：

1. React is declarative(宣告式)，**它關注的是你要做什麼，而不是如何做**。使用者只需要使用 React 提供的 api 做 state, data 的更改，畫面就會隨之的重新變動，而其他與 DOM 相關的操作 React 會在底層幫忙處理好。這樣的優點讓 DOM 為人詬病的 效能問題，可以被解決。
2. React 讓我們可以建立**能被重複使用的組件**，來增加程式碼可度性、重複性，減少 debug 時間。
3. React 是**one way data flow**，代表單一方向的資料流動，減少 debug 時間跟錯誤。
4. 大量的 npm package/社群

react 的缺點：

1. 周遭套件都為第三方套件，這可以讓使用者選擇變得更自由，但也可能讓使用者需要不斷去學習新知，並且可能還會產生套件版本不被支援等問題。

回顧一下，今天大略地講了什麼是 react，為什麼要用 react 跟其特點，希望能夠推坑還在考慮要學習哪個框架的朋友，至於已經學習過 React 的朋友也沒關係，明天我們會稍微深入一點來講 React 到底做了什麼來改變 DOM 的效能問題，那我們就明天見摟！

### 常見的面試題

面試題 1. 什麼是 react?  
面試題 2. 為什麼要用 react?  
面試題 3. react 的特點?

https://zhuanlan.zhihu.com/p/21108312
https://thecodest.co/blog/pros-and-cons-of-react
