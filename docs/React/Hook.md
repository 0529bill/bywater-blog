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

https://juejin.cn/post/6867338827418042375
