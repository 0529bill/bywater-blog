---
sidebar_position: 10
---

# [JS] setTimeout & setInterval

### setTimeout & clearTimeout

&nbsp;

```js

setTimeout(func|code, [delay], [arg1], [arg2], ...)

```

Example

```js
function sayHi(firstName, lastName) {
  alert("Hello");
}

setTimeout(sayHi, 1000, "Bill", "Lin");
```

&nbsp;

#### ClearTimeout

&nbsp;

```js
//clearTimeout 會回傳一個 'timerId'，用來當作clearTimeout的argument
let timerId = setTimeout(...);
clearTimeout(timerId);

```

&nbsp;

---

&nbsp;

### setInterval

&nbsp;

```js

let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

//clearInterval

clearInterval(timerId)



```

&nbsp;

---

&nbsp;

### Running things regularly.

1. setTimeout
2. setInterval

&nbsp;

```js
//setInterval
let i = 1;
setInterval(function () {
  func(i++);
}, 100);
```

&nbsp;

```js
//setTimeout
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
```

&nbsp;

**IMPORTANT: setTimeout 的時間區隔會比 setInterval 來的準確**
因為 setInterval 的 func 執行也在設定的時間區隔之內，相法的，setTimeout 的時間區隔每一回都會重新計算。

---

&nbsp;

https://javascript.info/settimeout-setinterval
