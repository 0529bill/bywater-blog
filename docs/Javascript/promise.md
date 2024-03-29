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

`Promise.all`  
`Promise.race`

&nbsp;

1. Promise.all 多個 Promise 行為同時執行，全部完成後統一回傳。
2. Promise.race 多個 Promise 同時執行，但僅回傳第一個完成的。
3. 當執行到 promise 中的 resolve or reject 後，後面的語法就不會再執行了。

&nbsp;

```js
let promise = new Promise(function (resolve, reject) {
  resolve(1); //執行成功，下面的語法不會繼續執行。

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); // 1
```

&nbsp;

### Promise.resolve vs new Promise

Promise.resolve will create a promise which is already resolved, whereas new Promise(resolve) creates a promise which is neither resolved nor rejected.

Promise.resolve(value) => 接受一個值在**resolve**裡面。
new Promise() => 建立一個 Promise 然後可以在裡面執行 action，最後在 resolve result。

https://stackoverflow.com/questions/34014414/are-promise-resolve-and-new-promiseresolve-interchangeable

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

finally: 用於處理額外的狀況

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

---

&nbsp;

### 實踐 Promise.all

&nbsp;

```js
function promiseAll(values) {
  if (!Array.isArray(values)) return;
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          results[index] = result;
          completed += 1;

          if (completed == values.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}
```

&nbsp;

### 實踐 Promise.race

&nbsp;

```js
const PromiseRace = (iterable) => {
  return new Promise((resolve, reject) => {
    for (const item of iterable) {
      Promise.resolve(item).then(resolve).catch(reject);
    }
  });
};
```

---

[要就来 45 道 Promise 面试题一次爽到底](https://juejin.cn/post/6844904077537574919)

&nbsp;

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise

https://javascript.info/async-await
https://javascript.info/fetch
https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/140

ajax, xml  
https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html
