---
sidebar_position: 5
---

# [React] React Optimization

React 想解決的兩個問題：

1. CPU 瓶頸
2. IO 瓶頸

### CPU 瓶頸

![criticalRenderingPath](./Img/CRP.png)

瀏覽器在執行時，會依照 critical rendering path 的順序解析，主流浏览器刷新频率为 60Hz，即每（1000ms / 60Hz）16.6ms 浏览器刷新一次，所以當 JS(DOM 中)執行過長時，就會擋到後面的 paint, composition。  
[範例](https://harttle.land/2017/08/15/browser-render-frame.html)

React 解決方法：

在浏览器每一帧的时间中，预留一些时间给 JS 线程，React 利用这部分时间更新组件（在源码中，预留的初始时间是 5ms）。
当预留的时间不够用时，React 将线程控制权交还给浏览器使其有时间渲染 UI，React 则等待下一帧时间到来继续被中断的工作。換句話說，time slicing 就是将同步的更新变为可中断的异步更新。所以在執行 JS 任務時，預先預留出時間，當工作執行過長時，就先暫停當前的工作，等下一次的刷新渲染時，再繼續執行。

---

Resources:

https://react.iamkasong.com/preparation/idea.html#cpu%E7%9A%84%E7%93%B6%E9%A2%88
https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969

瀏覽器 frame rate
https://harttle.land/2017/08/15/browser-render-frame.html
