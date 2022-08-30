---
sidebar_position: 1
---

# [React] React trivia

## React 優缺點/特色？

1. React is declarative(宣告式)，**它關注的是你要做什麼，而不是如何做**。使用者只需要使用 React 提供的 api 做 state, data 的更改，與 DOM 相關的操作 React 會在底層幫忙處理好。這樣的優點是讓 DOM 為人詬病的 performance 問題（主要因為 reflow, repaint 很耗費性能)，可以被 react 用 virtual-DOM 給解決。
2. React 讓我們可以建立**能被重複使用的組件**，來增加程式碼可度性、重複性，減少 debug 時間。
3. React 是**one way data flow**，代表單一方向的資料流動，減少 debug 時間跟錯誤。
4. 大量的 npm package/社群

## Keys 在 react 中代表什麼？

&nbsp;

key 可以幫助 React 跟蹤循環創建列表中的虛擬 DOM 元素，瞭解哪些元素已更改、添加或刪除。

每個綁定 key 的虛擬 DOM 元素，在附近的元素之間都是獨一無二的。在 React 的 reconciliation 過程中，比較新的虛擬 DOM 樹與上一個 virtual-DOM 樹之間的差異，並更改到頁面中。key 使 React 處理列表中虛擬 DOM 時更加高效，因爲 React 可以使用虛擬 DOM 上的 key 屬性，快速瞭解元素是新的、需要刪除的，還是修改過的。如果沒有 key,Rεat 就不知道列表中虛擬 DOM 元素與頁面中的哪個元素相對應。

https://mp.weixin.qq.com/s/lAQP3wNVuHpp-mt_RAqK1A

&nbsp;

## controlled components vs uncontrolled components in React?

&nbsp;

#### controlled components

:指的透過 onChange 或是其他 callback 方式，把 value 儲存在 parents components，被 parents components 所”控制“的 components.

```js
<input type="text" value={value} onChange={handleChange} />
```

#### uncontrolled components

:指的儲存自己的 value，而必須透過`ref`來獲取裡面的 value 的 component，通常用於與其他非 react code 合作時.

```js
<input type="text" defaultValue="foo" ref={inputRef} />
```

https://reactjs.org/docs/uncontrolled-components.html

## React element vs components?

React element 是一個用來形容 components 或是 DOM node 的 Js object。

```js
// React element
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}

<button class='button button-blue'>
  <b>
    OK!
  </b>
</button>





```

React component 指的是 functions/classes 有 props 傳進來當作 input，然後回傳 elements 當作 output。

https://zh-hant.reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html

https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E7%AD%86%E8%A8%98-why-react-424f2abaf9a2

&nbsp;

## Error boundary 錯誤邊界

用途：避免當一個組件壞掉時，導致全部的組件都壞變，而無法捕捉這些錯誤。Error boundary 會去抓 `runtime Error`，亦即沒被編譯器找到 但是在運行中強迫被中止的錯誤(ex, window.printme()，而 printme()不存在）。

錯誤邊界有兩個作用

- 如果發生錯誤，顯示回退 UI
- 記錄錯誤

https://zh-hant.reactjs.org/docs/error-boundaries.html#how-about-event-handlers

&nbsp;

## Props vs State

props 是被傳遞進 component（類似於 function 的參數），而 state 是在 component 內部被管理（類似於在 function 中宣告中的變數）。
此外，props 應該要是 immutable 的。

&nbsp;

## Batching

用途:避免不必要的 rerender，react 會等到全部的 event handler 都跑完，然後才會跑 batch rerender

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

_without batching_

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

_with batching_

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

Ex.

```js
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}

function handleClick() {
  increment();
  increment();
  increment();
  // these would just be three setCount(1) calls.
}

handleClick();

//count => 1
```

FIX:

```js
const [count, setCount] = useState(0);

function increment() {
  setCount((prev) => prev + 1);
}

function handleClick() {
  increment();
  increment();
  increment();
  //React would put the updater functions in a queue, and later run them in sequence, resulting in a re-render with count set to 3.
}

//count => 3
```

&nbsp;

Resources:

https://overreacted.io/react-as-a-ui-runtime/#batching
https://juejin.cn/post/6844903857135304718
https://zh-hant.reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props
