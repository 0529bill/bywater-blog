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

https://juejin.cn/post/6867338827418042375
