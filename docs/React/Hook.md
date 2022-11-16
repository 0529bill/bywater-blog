---
sidebar_position: 4
---

# [React] React Hooks

## useEffect

```js
function Test({ name, children = null }) {
  console.log("children", children);
  useEffect(() => {
    console.log(`${name} effect`);
    return () => {
      console.log(`${name} cleanup`);
    };
  });

  return children;
}

function App() {
  return (
    <Test name="parent">
      <Test name="child">123</Test>
    </Test>
  );
}
```

結果：https://codesandbox.io/s/boring-lena-9d2fnj

child 執行兩次因為在 dev 的 strict mode
[dev strict mode](https://stackoverflow.com/questions/61523632/why-when-i-put-my-component-into-react-strictmode-its-constructor-called-twice)

### useEffect cleanup function

React performs the cleanup when the dependencies to that hook changes and the effect hook needs to run again with new values.

https://stackoverflow.com/questions/57023074/why-is-the-cleanup-function-from-useeffect-called-on-every-render

### useLayoutEffect

效果類似 useEffect,差別是 useLayoutEffect 會在，state 被更改然後 DOM 變更後同步被調用。useEffect 則是在 state 被更改，DOM 變更，畫面 paint 在 browser 裡後才非同步的調用。
代表 useLayoutEffect 會永遠比 useEffect 早被執行，且因為在畫面被 paint 之前就同步調用，所以 useLayoutEffect 很適合用來處理 DOM 操作、頁面閃爍等情況。

---

Resources:

https://juejin.cn/post/6867338827418042375
