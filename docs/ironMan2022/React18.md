---
sidebar_position: 15
---

# [鐵人賽 2022-擊敗前端面試大作戰] React 18

這篇是 React 系列的最後一篇，下一篇就會開始講最近很紅的 Typescript！那這篇會以 React 18 為主題，大概講幾個我覺得蠻有趣的新功能，然後提供幾個我很推的學習資源，那我們就開始吧！

React 18 新增了一些新的 api、功能和新的 concurrent renderer。我們今天會針對 concurrent feature 跟 Automatic batching 這兩個功能來做討論～

## React concurrent

那我們先來討論一下，什麼是 concurrent?  
Wiki 的翻譯是這樣的： **_In computer science, concurrency is the ability of different parts or units of a program, algorithm, or problem to be executed out-of-order or in partial order, without affecting the final outcome._**

以我的理解換成中文，**_就是在執行程式時，不同部分的程式能夠改變執行順序，同時擁有一樣的結果。_**

**那為什麼 React 需要 concurrent？**  
因為 concurrent renderer 可以做到讓 react 能夠暫停 update、然後再恢復 update 甚至是丟棄整個 update 等能力，這樣讓 react 可以達到更快速的使用者體驗，像是使用者在跳到其他 tab 再跳回來的時候，能夠有一樣的 state。又或是可以做到讓比較重要的任務先執行，完成後再去執行優先度較低的任務。換句話說，concurrent feature 能做到**更改 render 順序的能力，來讓使用者體驗更好**

## Automatic batching

有在寫 react 的使用者應該知道 react 在 18 之前就會做 batching，來避免不必要的 rerender，react 會等到全部的 event handler 都跑完，然後才會跑 rerender。像是下面的案例，

```js
function Parent() {
  let [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      Parent clicked {count} times
      <Child />
    </div>
  );
}

function Child() {
  let [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Child clicked {count} times
    </button>
  );
}
```

沒有 batching 的狀況

```js

//Entering React's browser click event handler
Child (onClick)
  - setState
  - re-render Child // 😞 unnecessary
Parent (onClick)
  - setState
  - re-render Parent
  - re-render Child
//Exit

```

有 batching 的狀況

```js
// Entering React's browser click event handler ***
Child (onClick)
  - setState
Parent (onClick)
  - setState
Processing state updates
  - re-render Parent
  - re-render Child
//Exit

```

但是 react 過去只有在 browser event 中有 batching，在 promise 等其他地方則沒有 batching，這樣會造成如果在 promise 中連續更改 state，就會造成多個 rerender，像是下面的例子：

```js
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    fetchSomething().then(() => {
      // React 17 and earlier does NOT batch these because
      // they run *after* the event in a callback, not *during* it
      setCount((c) => c + 1); // Causes a re-render
      setFlag((f) => !f); // Causes a re-render
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}
```

在 react 18 之後，我們不必擔心上面的事情會發生了！因為現在在這些場合都會有 batching！！

但新的問題來了，假如你需不需要 batching 的時候呢？react 也有提供一個 api 可以使用，`flushSync`可以讓被包住的程式碼不在 batching 的範圍內，像是下面得舉例：

```js
import { flushSync } from "react-dom"; // Note: react-dom, not react

function handleClick() {
  flushSync(() => {
    setCounter((c) => c + 1);
  });
  // React has updated the DOM by now
  flushSync(() => {
    setFlag((f) => !f);
  });
  // React has updated the DOM by now
}
```

所以回顧一下，今天我們討論了 React18、什麼是 concurrent?、concurrent feature 能做到什麼跟 Automatic batching。那如果對 React18 還想瞭解更多的讀者，推薦可以到[這個官方 repo](https://github.com/reactwg/react-18)去研究，裡面有很多關於 React18 功能的介紹跟討論～

那這篇是擊敗前端面試大作戰的第 15 篇文章，也代表鐵人賽已經過了一半了，那我們就明天見摟，大家掰掰！

https://zh-hant.reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props
https://github.com/reactwg/react-18/discussions/21
