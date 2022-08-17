---
sidebar_position: 11
---

# [JS] functional Programming

### 什麼是 functional programming(FP)

FP 是程式設計典範（programming paradigm）中的一種，利用 pure function 來減少 bug 和寫出更容易閱讀的程式碼。

&nbsp;

### FP 中的一些概念

&nbsp;

#### Pure functions

:_不會產生 side effects 的函式，一樣的 input，會永遠得到可以預測的 output。_

```js
//pure function
function sayGreeting(name) {
  return `Hello ${name}`;
}
```

```js
let greeting = "Hello";

function sayGreeting(name) {
  return `${greeting} ${name}`;
}

//因為當greeting改變時，output也會跟著改變
```

常見的 side effect:

1. 更改（mutate）input
2. 更新 DOM
3. console.log
4. call api

&nbsp;

#### Higher-order function(HOF)

:_A function that takes a function as an argument, or returns a function as a result_

舉例：
Array.prototype.map, Array.prototype.forEach

```js
const arr = [1, 2, 3];

arr.map(function (value) {
  console.log(value);
});
```