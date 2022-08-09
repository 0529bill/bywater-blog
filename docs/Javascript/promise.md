---
sidebar_position: 7
---

# [JS] Promise ＆ Callback

callback

解決問題：非同步 asynchronous  
缺點：readability, callback hell  
解決辦法：Promise

### Promise

`new Promise( /* executor */ function(resolve, reject) { ... } );`

&nbsp;

1. 當執行到 promise 中的 resolve or reject 後，後面的語法就不會再執行了。

&nbsp;

```js
let promise = new Promise(function (resolve, reject) {
  resolve(1); //執行成功，下面的語法不會繼續執行。

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); // 1
```

&nbsp;

### then, catch, finally 語法

&nbsp;

```js
// then, catch
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
  (result) => alert(result), // doesn't run
  (error) => alert(error) // shows "Error: Whoops!" after 1 second
);
```

&nbsp;

```js

//finally
new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve or maybe reject */
})
  // runs when the promise is settled, doesn't matter successfully or not
  .finally(() => stop loading indicator)
  // so the loading indicator is always stopped before we go on
  .then(result => show result, err => show error)
```

1. finally 沒有 arguments。
2. finally 會 ignore return 繼續往下一階走。

&nbsp;

---

&nbsp;

### Async/await

:更直觀的方式來處理 Promise

```js
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // shows 10 after 1 second
  wait().then((result) => alert(result));
}

f();
```

&nbsp;

---

&nbsp;

### Fetch

:用 Fetch 來處理 call api 需求

&nbsp;

```js
let response = await fetch("/article/fetch/post/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(user),
});
```

&nbsp;

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise

https://javascript.info/async-await
https://javascript.info/fetch
