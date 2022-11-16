---
sidebar_position: 24
---

# [鐵人賽 2022-擊敗前端面試大作戰] 三人行必有我師焉 ---- useMemo vs React.memo vs useCallback 三種優化 React 的方法！

這篇是優化的最後一篇文章，要來討論優化 React 的三種方法，分別是 useMemo, React.memo 和 useCallback!

## useMemo vs React.memo vs useCallback

**TL;DR;**

- `useMemo`會回傳一個被 memoized 的值。
- `useCallback`會回傳一個被 memoized 的 callback function.
- `React.Memo`主要是用 shallow comparison 來 memoize 一個 **component** .

&nbsp;

#### `useMemo`

主要是用來 memoized**計算複雜、耗費效能的 function**，並且**回傳一個值**

```js
const calculation = useMemo(() => expensiveCalculation(count), [count]);
```

他長得跟 useEffect 很像，用法也很類似。只有在第二個值(在這裡是`count`)被改變時，整個 function 才會執行。

什麼時候該使用`useMemo`?

官網的解釋是這樣：

In general, unless you’re creating or looping over thousands of objects, it’s probably not expensive. If you want to get more confidence, you can add a console log to measure the time spent in a piece of code:

```js
console.time("filter array");
const visibleTodos = getFilteredTodos(todos, filter);
console.timeEnd("filter array");
```

Perform the interaction you’re measuring (for example, typing into the input). You will then see logs like filter array: 0.15ms in your console. If the overall logged time adds up to a significant amount (say, 1ms or more), it might make sense to memoize that calculation. As an experiment, you can then wrap the calculation in useMemo to verify whether the total logged time has decreased for that interaction or not:

#### `React.Memo`

第二個 React.Memo 他是用在 memoized**React component**，如果傳進該 component 的 props 沒有改變，那該 component 就不會 re-render。  
**注意: React.Memo 使用的是 shallow comparison，所以如果傳進去的 props 是物件的話是沒有用的**

那假如我們還是想傳 object props 進去怎麼辦呢？有兩種方法可以做到！第一種是假設傳進來的 props 是 function 的時候，可以用下面會講的 useCallback 把該 function 給包住，第二種則是用 React.memo 所提供的第二個 params 來處理，React.memo 的第二個 params 是一個 compare function，讓我們可以自行去寫比較的方法。

```js
function MyComponent(props) {
  /* render using props */
}

function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}

export default React.memo(MyComponent, areEqual);
```

```js
//範例
const areEqual = (prevProps, nextProps) =>
  JSON.stringify(prevProps) === JSON.stringfiy(nextProps);
export default React.memo(renderedTable, areEqual);
```

**根據[dan 大神的這篇文章](https://overreacted.io/before-you-memo/)，他建議在使用 memo 之前，試試看先把 state 提升到上一層或是下放到下一層裡面，或是可以把不需要 rerender 的部分做位置上的調整，來解決 rerender 的問題，如果還是無法解決的話，再用 memo 去處理！**

#### `useCallback`

`useCallback`會回傳一個 memoized 的 **function**，通常會被使用在有大量計算的 function 上。跟 useMemo 一樣，他也是只會在第二個值被改變時，整個 function 才會執行。不一樣的地方是 useMemo 回傳的是值，而 useCallback 回傳的是 function。

```js
const addTodo = useCallback(() => {
  setTodos((t) => [...t, "New Todo"]);
}, [todos]);
```

統整一下，這三者的差別是 useMemo 會回傳 memoized 的一個值，useCallback 會回傳 memoized 的 function 然後 React.memo 會回傳 memoized 的 component!
介紹完 useMemo, React.memo 和 useCallback 之後，下面我們會繼續去討論兩個很實用且常常在面試中被提出來的問題---debounce 和 throttle。

### debounce

debounce 可以用在 input searchBox 來避免每次使用者打字都更改 state，造成 re-render。

```js
//debounce實作
function debounce(func, delay) {
  let timeout = null;
  return function (...args) {
    let context = this;
    //綁定在傳進來的func上
    clearTimeout(timeout);
    //清除掉前一個timeout

    timeout = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}
```

[範例看這裡](https://codesandbox.io/s/vibrant-https-h3c51i?file=/src/index.js:293-405)

```js
//useDebounce
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

[範例](https://codesandbox.io/s/ecstatic-varahamihira-0u4q8f?file=/src/useDebounce.jsx)

https://webdesign.tutsplus.com/tutorials/javascript-debounce-and-throttle--cms-36783
https://blog.bitsrc.io/what-is-debounce-in-javascript-a2b8e6157a5a

---

### throttle

throttle 可以用在畫面 scrolling 時透過 throttle 來避免一次大量 scroll event

```js
//throttle實作
//用function寫
function throttle(func, delay) {
  let inThrottle;
  let timeout = null;
  return function (...args) {
    let context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        inThrottle = false;
      }, delay);
    }
  };
}
```

面試題：

1. react 優化方法
2. 三者的差別 useMemo, React.memo 和 useCallback？
3. debounce 實作？
4. throttle 實作？

---

https://ithelp.ithome.com.tw/articles/10222749
https://www.w3schools.com/react/react_usememo.asp
