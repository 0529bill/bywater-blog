---
sidebar_position: 2
---

# [React] React reconciliation, Virtual DOM

### 什麼是 Virtual DOM

Virtual DOM 實際上就是用物件來描述 DOM 的結構並儲存在 memory 裡，在 DOM 的節點需要更動時，不直接修改 DOM，而是透過 diff 演算法比較 Virtual DOM 修改前與修改後的樹狀結構，然後批次更新真實 DOM 中的節點。

### 什麼是 React reconciliation

:reconciliation 指的是 react 更新 Virtual-DOM 和 DOM 的過程，透過只更新有更動的部分，讓 React 可以比操作原生 DOM 更省效能跟快速。

### 為什麼需要 reconciliation?

因為瀏覽器的 DOM 操作是很消耗資源的。透過 React 提供的 declarative api(宣告式 api，指僅需要用其透過的 api 來執行程式，而不需要操控到底層得內容。Ex, react 提供 render, jsx 語法讓我們不用實際操控到 DOM)，和其 diff 演算法(只改動 virtual-DOM 中有改動的部分)，讓程式可以在 state 改變的情況下更快速。

### 什麼是 React fiber?

TLDR: React fiber(a unit of work) 是內部的引擎機制，達到幾件事

1. 可以將頁面渲染的任務切分成 chunks(time slicing)
2. 不同的任務可以有優先等級
3. 任務可以暫停，之後再繼續執行（這也是將任務分優先級的目的，當做到一半出現更高優先級的任務的時候，可以先暫停目前工作的執行，等處理完高優先任務後再回來繼續執行）
4. fiber 是 asynchronous

來解決頁面卡頓等破壞使用者體驗的事件。

舊的 reconciler: stack

1. stack 是 synchronous
2. 只有在 stack 是 empty 時才能再次使用

fiber always has a 1-1 relationship with 'something'（ex, fragment, functionalComponent, contextConsumer...）

render phase:

1. asynchronous
2. tasks can be prioritized

commit phase:

1. synchronous and can't be interrupted

---

Resources:

https://www.freecodecamp.org/news/lets-fall-in-love-with-react-fiber-90f2e1f68ded/
https://medium.com/starbugs/react-%E9%96%8B%E7%99%BC%E8%80%85%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E5%BA%95%E5%B1%A4%E6%9E%B6%E6%A7%8B-react-fiber-c3ccd3b047a1
&nbsp;

https://segmentfault.com/a/1190000039682751

https://cloud.tencent.com/developer/article/1882296  
https://tech-blog.cymetrics.io/posts/mingyou/deep-dive-into-react-fiber/

&nbsp;

https://reactjs.org/docs/reconciliation.html
https://github.com/acdlite/react-fiber-architecture
https://hackernoon.com/virtual-dom-reconciliation-and-diffing-algorithm-explained-simply-ycn34gr
