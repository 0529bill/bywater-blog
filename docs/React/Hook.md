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

### useDidMount

```js
const useDidMount = () => {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
};

export default useDidMount;
```

---

Resources:

https://juejin.cn/post/6867338827418042375
