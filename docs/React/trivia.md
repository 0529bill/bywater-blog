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

每個綁定 key 的虛擬 DOM 元素，在附近的元素之間都是獨一無二的。在 React 的 reconciliation 過程中，比較新的虛擬 DOM 樹與上一個 virtual-DOM 樹之間的差異，並更改到頁面中。key 使 React 處理列表中虛擬 DOM 時更加高效，因爲 React 可以使用虛擬 DOM 上的 key 屬性，快速瞭解元素是新的、需要刪除的，還是修改過的。如果沒有 key, React 就不知道列表中虛擬 DOM 元素與頁面中的哪個元素相對應。

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

[程式範例](https://codesandbox.io/s/brave-ramanujan-3p1l27?file=/src/App.js)

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

Fix:

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

## React one-way data flow/ one-way data binding

1. 資料是從 parent 透過 props 往下傳到 child
1. child 有兩種選擇 1. 使用該 props 2. 繼續往下傳到子 component

### one-way data flow 缺點

1. props drilling

解決方法：

1. Redux => 把資料都放到一個統一的 store

資源： https://tkssharma.gitbook.io/react-training/day-01/react-js-3-principles/one-way-data-flow

&nbsp;

## Share data between tabs when using react & redux ?

Redux 只存在個別 tab 裡，所以如果要在各個 tab 中使用共同的資料的話，有以下幾個方法：

1.  使用 redux-persist
2.  使用 localStorage
3.  使用 react-router 把資料放在 pathname 裡面

https://stackoverflow.com/questions/49384212/how-can-we-use-the-same-state-across-multiple-tabs-pages
&nbsp;

### useLayoutEffect vs useEffect

效果類似 useEffect,差別是 useLayoutEffect 會在，state 被更改然後 DOM 變更後同步被調用。useEffect 則是在 state 被更改，DOM 變更，畫面 paint 在 browser 裡後才非同步的調用。
代表 useLayoutEffect 會永遠比 useEffect 早被執行，且因為在畫面被 paint 之前就同步調用，所以 useLayoutEffect 很適合用來處理 DOM 操作、頁面閃爍等情況。

### 實踐 useState, useEffect?

https://github.com/brickspert/blog/issues/26

### Synthetic event 合成事件

#### attach synthetic event at root

why?  
https://reactjs.org/blog/2020/08/10/react-v17-rc.html

TL;DR  
避免遇到 project 中有其他原生的 document 操作時，在 document 上的操作會互相衝突，原生的 document event handler 會引響到 React 本身設定在 document 的合成事件，所以 react17 把合成事件改在 root 上

example  
https://www.bigbinary.com/blog/react-17-delegates-events-to-root-instead-of-document

### Higher order function vs Higher order component

HOF: _A function that takes a function as an argument, or returns a function as a result_

```js
ex, Array.prototype.map();
```

HOC: _A function that takes a component as an argument, or returns a component as a result_

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

React doc HOC 介紹：https://zh-hant.reactjs.org/docs/higher-order-components.html

---

Resources:

https://overreacted.io/react-as-a-ui-runtime/#batching
https://juejin.cn/post/6844903857135304718
https://zh-hant.reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props
