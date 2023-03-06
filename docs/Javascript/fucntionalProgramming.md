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

什麼是 side effects?
副作用（side effects）指的是函數執行過程中對外在環境造成的影響都稱為副作用

常見的 side effect:

1. 更改（mutate）input
2. 更新 DOM
3. console.log
4. call api
5. 更改全局變數

&nbsp;

#### Immutability 不可變性

:對傳進來的數據不應該更改，如果要更改，必須複製數據再來更改。

```js
let student = {
  firstName: "testing",
  lastName: "testing",
  marks: 500,
};

function changeName(student) {
  // student.firstName = "testing11" //should not do it
  let copiedStudent = Object.assign({}, student);
  copiedStudent.firstName = "testing11";
  return copiedStudent;
}

console.log(changeName(student));

console.log(student);
```

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

#### currying

定義：Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

pros

1. 可以使用成 partials

https://javascript.info/currying-partials

---

Resources:

https://juejin.cn/post/6844903857135304718
