---
sidebar_position: 5
---

# [React] React 18

---

推薦閱讀文章:  
https://react.iamkasong.com/#%E5%AF%BC%E5%AD%A6%E8%A7%86%E9%A2%91

---

React 想解決的兩個問題：

1. CPU 瓶頸
2. IO 瓶頸

### CPU 瓶頸

![criticalRenderingPath](./Img/CRP.png)

瀏覽器在執行時，會依照 critical rendering path 的順序解析，主流瀏覽器刷新頻率為 60Hz，即每（1000ms / 60Hz）16.6ms 瀏覽器刷新一次，所以當 JS(DOM 中)執行過長時，就會擋到後面的 paint, composition，造成畫面出現卡頓。  
[範例](https://harttle.land/2017/08/15/browser-render-frame.html)

React 解決方法：

在瀏覽器每一幀的時間中，預留一些時間給 JS 線程，React 利用這部分時間更新組件（在源碼中，預留的初始時間是 5ms）。
當預留的時間不夠用時，React 將線程控制權交還給瀏覽器使其有時間渲染 UI，React 則等待下一幀時間到來繼續被中斷的工作。換句話說，time slicing 就是將同步的更新變為可中斷的異步更新。所以在執行 JS 任務時，預先預留出時間，當工作執行過長時，就先暫停當前的工作，等下一次的刷新渲染時，再繼續執行。

---

Resources:

https://react.iamkasong.com/preparation/idea.html#cpu%E7%9A%84%E7%93%B6%E9%A2%88
https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969

瀏覽器 frame rate
https://harttle.land/2017/08/15/browser-render-frame.html
