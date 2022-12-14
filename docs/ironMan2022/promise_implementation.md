---
sidebar_position: 10
---

# [鐵人賽 2022-擊敗前端面試大作戰] 實作 promise, promise.all, promise.race

今天來到前端面試系列文章的第十天，今天要來講的是 JS 實作題。coding 題目在面試中，是非常常見的。以我自己遇到的面試來說，coding 題一般會分成兩種，一種是考 JS 原生語法的實踐，像是 promise, array method 等等。另外一種，則是會考 easy~medium 難度的 leetcode 題。我會覺得，練習的順序應該是先熟悉 JS 常見的實作題之後，再去刷 leetcode 題，因為 JS 常見的就那幾類，而反觀 leetcode 題可以說是包山包海，自己刷得題目在面試上遇到的機率就相對的低很多了！那廢話不多說，我們先來看今天要實作的 Promise 相關題吧！

### Promise.all 實踐

在實作 Promise.all 之前，我們先來看一下 Promise.all 的用法吧！Promise.all 會接受一個 iterable（陣列），然後同步的去執行裡面的事件，並且會在裡面的事件都完成後，才會 回傳 Promise。

舉個例子，下面的 Promise.all 裡面有 P1,P2,P3 三個事件，Promise.all 會等到三個事件都完成了，才會回傳結果。

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```

要注意的是，如果遇到其中有一個事件被拒絕，那整個 Promise.all 都會被拒絕。來看下面的被拒絕的例子！

```js
var p1 = Promise.reject(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); //Promise(rejected)
});
```

了解 Promise.all 的使用方法後，那我們就來看一下 Promise.All 怎麼實踐吧！首先我們要做的是列出要實踐的細節：

1. promise.All 會接收一個傳入 array
2. promise.All 會回傳 Promise
3. promise.All 會等到陣列裡面的事件都執行完成後，才會回傳 Promise
4. promise.All 如果其中有一個事件失敗的話，promise.All 就算是失敗，並且只會回傳一個失敗的 Promise 數據

下面就是實踐方法：

```js
function promiseAll(values) {
  if (!Array.isArray(values)) return;
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          results[index] = result; // 確保回傳的Promise中，value的順序是對的！
          completed += 1;

          //如果成功的話就會回傳resolve
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

### Promise.race 實踐

下一個要實踐的是 Promise.race!跟 Promise.All 比較起來，race 的實踐就顯得容易許多了，因為 race 只需要回傳第一個完成的物件！先來看一下 Promise.race 的使用範例吧！

我們有兩個 promise 物件，一個會在五秒後完成，另外一個會在一秒後完成，在 Promise.race 中，先完成的(p2)會直接回傳。

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});
Promise.race([p1, p2]).then((result) => {
  console.log(result); // "two"
});
```

大概看過 race 的用法後，下面就是 race 的實踐。實踐得細節包括：

1. Promise.race 會接受一個傳入 array
2. Promise.race 會回傳一個 Promise 物件
3. Promise.race 在第一個物件完成/失敗後，就會回傳。

下面實踐方法：

```js
const PromiseRace = (values) => {
  return new Promise((resolve, reject) => {
    for (const item of values) {
      //第一個完成的會直接回傳
      Promise.resolve(item).then(resolve).catch(reject);
    }
  });
};
```

假如你有看到看到這裡並且跟著一起實作的話，恭喜你！成功學會 promise 的實作之後，以後面對 promise 的相關實作題都不用害怕了！

### 常見的面試題

面試題 1. 請你講解一下 Promise.all 用法，並且實作
面試題 2. 請你講解一下 Promise.race 用法，並且實作

&nbsp;

Resources:

推薦的 Promise 文章
https://www.casper.tw/javascript/2017/12/29/javascript-proimse/

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
