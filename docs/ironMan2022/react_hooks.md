---
sidebar_position: 14
---

# [鐵人賽 2022-擊敗前端面試大作戰] React Hooks

今天要來聊 React hooks，Hooks 在 React 16.8 推出，它提供了更低的學習曲線、更高的可讀性和更輕鬆的 debug。這篇文章會預設你已經看過 react 的[hooks 文章](https://reactjs.org/docs/hooks-reference.html)，並且對 hooks 有基本的了解，然後我們會以面試的問答方式來討論幾個常見的 hooks！

1. hooks 的規則？

回答：hooks 有兩個規則，第一個是 hooks 只能在最高層被呼叫，代表 hooks 不能在 if condition, function 等情況下呼叫。第二個是 hooks 只能在 React functional component 或是 custom hooks 中呼叫，不能在 Js function 中使用。

follow up: 為什麼 hooks 只能在最高層被呼叫？
回答：因為 React 依靠 hooks 呼叫的順序。

https://reactjs.org/docs/hooks-rules.html#explanation
&nbsp;

2. useEffect 執行順序，console.log 結果是什麼？

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

範例在[這](https://codesandbox.io/s/boring-lena-9d2fnj)

解題思路：在 React 16 中，**mount 的順序是父組建 => 子組建，effect 的順序是子組建 => 父組建**。

注意：child render 兩次，因為使用 strict mode 中並且在 dev 環境中，實際 prod 環境只會 render 一次。

&nbsp;

3. useRef，console.log 結果會是什麼？

```js
function App() {
  const ref = useRef(null);
  const [state, setState] = useState(1);

  useEffect(() => {
    setState(2);
  }, []);

  console.log("text", ref.current?.textContent);

  return (
    <div>
      <div ref={state === 1 ? ref : null}>1</div>
      <div ref={state === 2 ? ref : null}>2</div>
    </div>
  );
}
```

範例在[這]（https://codesandbox.io/s/objective-wood-hqxpqx?file=/src/App.js:111-413）

解題思路：ref 有兩個重點，

- ref 的值不會因為 re-render 而變動。
- 更新 ref 的值也不會造成 re-render。

follow up，如果把 useEffect 裡面的[]拿掉，結果會改變嗎？

如果對 useRef 還是有點不熟悉的話，筆者很推這篇[文章](https://dmitripavlutin.com/react-useref-guide/)，我覺得他用很淺顯的字句把 useRef 的用途講得很仔細！

&nbsp;

4. 什麼是 useImperativeHandle?

解題思路:useImperativeHandle 可以讓父組件輸出任意數據，其必須要和 forwardRef 一起使用。

下面看範例：

透過 useImperativeHandle，我們讓父層可以控制子層的 focus。

```js
// 透過forwardRef 讓FancyInput组件可以接收ref
const FancyInput = React.forwardRef(function FancyInput(props, ref) {
  const inputRef = useRef();

  // 命令式的给`ref.current`focus
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }));

  return <input ref={inputRef} ... />
})

// Example组件作为父组件
function Example() {
  const fancyInputRef = useRef()

  const focus = () => {
    fancyInputRef.current.focus()
  }

  return (
    <>
      <FancyInput ref={fancyInputRef} />
    </>
  )
}

```

&nbsp;
希望這些題目，能夠讓讀者對 hooks 有一些更深的理解，hooks 實在是很多，硬的場景真的要講也是講不完，這裡筆者只是列出幾個我覺得蠻有趣的例子，其他部分就等讀者自己去研究摟～～～

https://juejin.cn/post/7094651577117442056
https://segmentfault.com/a/1190000040758640
