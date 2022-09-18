---
sidebar_position: 6
---

# [鐵人賽 2022-擊敗前端面試大作戰] Promise

來到擊敗前端面試大作戰系列的第三篇，今天要來討論前端工程師百寶袋中必備的一項工具---Promise.

### 什麼是 Promise？

回答：Promise 是 ES6 裡所提出的，透過其提供的內建方法包含 all, race, resolve, reject 等來處理非同步。

### 為什麽需要 Promise?

![callbackHell](./Img/callback_hell.jpeg)

Promise 解決了回乎地獄（callback hell)的問題，過去在處理非同步時會使用回乎函式來處理，但是當程式碼一多就會造成可讀性跟 debug 上的困難。透過 Promise 的語法，我們可以用簡潔的語法來處理這些問題。

### Promise 介紹

Promise 為一個建構函式，裡面要放 executor 也就是一個帶有 resolve, reject 的函式，在非同步處理完成後，可以用 resolve 來回傳成功結果，用 reject 來回傳失敗結果。下面我們來看一下 Promise 跟 async/await 的範例。

`new Promise( /* executor */ function(resolve, reject) { ... } );`

&nbsp;

```js
let promise = new Promise(function (resolve, reject) {
  resolve(1); //執行成功，下面的promise or reject不會繼續執行。

  setTimeout(() => resolve(2), 1000);
  reject('failed)
});

promise.then(alert); // 1
```

**注意: 當執行到 promise 中的 resolve or reject 後，後面的 promise or reject 就不會再執行了。**

### Async/await

原生方法讓我們可以用更直觀的方式來處理 Promise

```js
//使用async await
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

Promise 常用的地方包含在用 fetch 拿資料的時候，會回傳一個 Promise 物件，這時候就可以用其提供的各種語法，讓我們在處理非同步時更方便！

### 什麼是 Fetch？

一個原生方法用來處理 call api 需求，會回傳一個 Promise 物件。

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

以上就為 Promise 的簡略介紹，更詳細的介紹我推薦這一篇由卡斯柏所寫的文章，我覺得他很詳細地把 Promise 的功能用容易理解的方式寫出來～下面我們會繼續介紹一些很常見的 Promise 面試題！  
[卡斯柏's Promise 介紹](https://www.casper.tw/development/2020/02/16/all-new-promise/)

&nbsp;

---

&nbsp;

### 常見的 Promise 面試題

#### Promise.all vs Promise.race？

回答：

1. Promise.all 多個 Promise 行為同時執行，全部完成後統一回傳。
2. Promise.race 多個 Promise 同時執行，但僅回傳第一個完成的。

&nbsp;

### 什麼是 Promise 中的 finally?

回答：  
promise 中的 finally 用於處理額外的狀況，他有兩個重點。

1. finally 函式沒有辦法傳遞 promise 的值，代表你在 finally 中拿不到 Promise 的值。
2. finally 會忽略裡面的 return 然後執行下一階段。

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

&nbsp;

Resource:

https://www.casper.tw/development/2020/02/16/all-new-promise/
https://javascript.info/promise-basics
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://javascript.info/async-await
https://javascript.info/fetch
https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/140
https://segmentfault.com/a/1190000039775255
