---
sidebar_position: 2
---

# [others] React reconciliation, Virtual DOM

### 什麼是 Virtual DOM

Virtual DOM 實際上就是用物件來描述 DOM 的結構並儲存在 memory 裡，在 DOM 的節點需要更動時，不直接修改 DOM，而是透過 diff 演算法比較 Virtual DOM 修改前與修改後的樹狀結構，然後批次更新真實 DOM 中的節點。

### 什麼是 React reconciliation

:reconciliation 指的是 react 更新 Virtual-DOM 和 DOM 的過程，透過只更新有更動的部分，讓 React 可以比操作原生 DOM 更省效能跟快速。

### 為什麼需要 reconciliation?

因為瀏覽器的 DOM 操作是很消耗資源的。透過 React 提供的 declarative api(宣告式 api，指僅需要用其透過的 api 來執行程式，而不需要操控到底層得內容。Ex, react 提供 render, jsx 語法讓我們不用實際操控到 DOM)，和其 diff 演算法(只改動 virtual-DOM 中有改動的部分)，讓程式可以在 state 改變的情況下更快速。

### 什麼是 React fiber?

&nbsp;

https://segmentfault.com/a/1190000039682751

https://cloud.tencent.com/developer/article/1882296  
https://tech-blog.cymetrics.io/posts/mingyou/deep-dive-into-react-fiber/

&nbsp;

https://reactjs.org/docs/reconciliation.html
https://github.com/acdlite/react-fiber-architecture
https://hackernoon.com/virtual-dom-reconciliation-and-diffing-algorithm-explained-simply-ycn34gr
