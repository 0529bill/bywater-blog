---
sidebar_position: 13
---

# [鐵人賽 2022-擊敗前端面試大作戰] React Reconciliation

今天我們要來延續昨天的提到的 DOM 為人詬病的效能問題，來討論 React 是如何透過 reconciliation 來解決這個問題的！DOM 在操作時會對效能造成很大的影響，關於相關的 reflow 和 repaint 我在我的[筆記](https://0529bill.github.io/bywater-blog/Javascript/DOM)裡面有提過，有興趣的可以去看看！

要知道 React 解決 DOM 的效能問題，首先我們要先來了解什麼是**Virtual DOM**!!

### 什麼是 Virtual DOM?

Virtual DOM 是 React 所建立的一個虛擬的 DOM tree，透過物件的格式來描述 DOM 的結構並儲存在內存裡。當 Virtual DOM 更動時，不直接修改 DOM，而是先透過 diff 演算法比較 Virtual DOM 修改前與修改後的樹狀結構，然後批次更新真實 DOM 中的節點，來達到兩個優勢，

1. 減少 DOM 的變動，避免不必要的 reflow 或 repaint。
2. Virtual DOM 的變動比 DOM 的變動還要有效率，因為它不用做顯示在螢幕上的動作。

Virtual DOM 顯示的過程，從 JSX 被 render，接著 Virtual DOM 會被更新，然後 React 會去比較更新前的 Virtual DOM 跟更新後的 Virtual DOM，接著 React 會去做一個叫做'diffing’的動作，也就是去找出確切 Virtual DOM 哪裡被更新了。在知道哪裡被更新後，React 只會去 DOM 更新需要被更新的地方。

### 什麼是 diffing 演算法？

diffing 演算法用於比對兩顆 Virtual DOM 之間的差別，來找出變動的地方。他在執行時，有幾個重點：

1. 比對不同類型的 root Element 時，會重建新的 DOM tree

像是以下的兩個 DOM tree，root element 從`div`變成`span`，這時就算中間的 component 是一樣的，但還是會被銷毀，然後重新建立一個 DOM tree

```js
// 舊tree
<div>
  <Counter />
</div>



//新tree
<span>
  <Counter />
</span>


```

2. 同類型的 DOM element，只會更動 attribute

當比對以下兩個 DOM tree 時，因為他們的 root element 一樣，這時候就只要更新有變動的 attribute!

```js
// 舊tree
<div className="before" title="stuff" />


//新tree
<div className="after" title="stuff" />

```

更多的細節可以在這裡看到～ [react docs](https://zh-hant.reactjs.org/docs/reconciliation.html)

### 什麼是 React reconciliation

:reconciliation 指的是 react 更新 Virtual-DOM 和 DOM 的過程，透過只更新有更動的部分，讓 React 可以比操作原生 DOM 更省效能跟快速。

https://www.geeksforgeeks.org/reactjs-reconciliation/

在了解 Virtual-DOM 和 diffing 演算法，我們來總結一下，就是 React 透過 reconciliation 來解決 DOM 的變動很耗能的問題，而 reconciliation 就是 react 透過 diffing 演算法 更新 Virtual-DOM 和 DOM 的過程。到這裡，我們終於知道 React 為什麼可以如此有效率跟快速了！下一篇我們會開始講實際應用到的層面，hooks。

### 常見面試題

面試題 1. 什麼是 reconciliation?
面試題 2. 什麼是 Virtual-DOM?
面試題 1. 什麼是 diffing 演算法?

https://segmentfault.com/a/1190000039682751
https://tw.alphacamp.co/blog/dom-and-virtual-dom
https://cloud.tencent.com/developer/article/1882296  
https://tech-blog.cymetrics.io/posts/mingyou/deep-dive-into-react-fiber/
