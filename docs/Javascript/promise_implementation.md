---
sidebar_position: 13
---

# [JS] promise implementation

嗨大家好，我是 bywater，這篇文章要來討論 Promise 這個東西！我在 2022 年的鐵人賽有寫過兩篇 promise 的文章，分別是[為什麼要 Promise](https://medium.com/@bywater529/%E6%93%8A%E6%95%97%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%A9%A6%E5%A4%A7%E4%BD%9C%E6%88%B0-%E4%BB%80%E9%BA%BC%E6%98%AFpromise-2e7b5c0aafd6)跟[Promise.all,Promise.race 實作](https://medium.com/@bywater529/%E6%93%8A%E6%95%97%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%A9%A6%E5%A4%A7%E4%BD%9C%E6%88%B0-%E5%AF%A6%E4%BD%9C-promise-promise-all-promise-race-a124d9c04601)，如果還沒有看過的讀者可以先去看看，這篇的深度會比前兩篇再深一點！  
會想這篇文章是因為當初雖然寫了上面兩篇文章，但我總是覺得對 promise 還是有點那麼的陌生，所以這次我決定直球對決，嘗試來理解 Promise 實作！

看完這篇文章你會學到什麼？

1. Promise.all vs Promise.allSettled vs Promise.race vs Promise.any 的差別
2. Promise 實作

先從簡單一點的開始，我們會來討論 Promise.all, Promise.allSettled,Promise.race 跟 Promise.any 的差別！

### Promise.all

Promise.all 會等到全部的 resolve 完成，才會一次回傳一個包含全部 resolve 結果的 array。
Promise.all 只要收到一個 reject，就會馬上回傳該 reject 結果。

```js
const p1 = new Promise((resolve) => setTimeout(resolve, 1000, "promise1"));
const p2 = new Promise((resolve) => setTimeout(resolve, 500, "promise2"));
const p3 = Promise.resolve("promise3");

const allResolved = await Promise.all([p1, p2, p3]);

console.log(allResolved); // ['promise1', 'promise2', 'promise3']
```

### Promise.allSettled

Promise.allSettled 不管回傳的是 resolve 或是 reject 都會等到全部的結果都完成後才回傳。

```js
const p1 = new Promise((resolve) => setTimeout(resolve, 1000, "promise1"));
const p2 = new Promise((resolve) => setTimeout(reject, 500, "promise2"));

const allResolved = await Promise.allSettled([p1, p2]);

console.log(allResolved);
/**
 * [
 *   { status: 'fulfilled', value: 'promise1' },
 *   { status: 'rejected', value: Reference Error },
 * ]
 */
```

### Promise.any

Promise.any 只會回傳最快被 resolve 的值，如果沒有任何值 resolve(代表全部的值都被 reject)，才會回傳一個 AggregateError(AggregateError 用於多個錯誤需要再一次報錯時出現)。

```js
const p1 = Promise.reject("promise1 failed");
const p2 = new Promise((resolve) => setTimeout(resolve, 500, "promise2 quick"));
const p3 = new Promise((resolve) =>
  setTimeout(resolve, 100, "promise3 quicker")
);

const firstResolved = await Promise.any([p1, p2, p3]);

console.log(firstResolved); // promise3 quicker
```

### Promise.race

Promise.race 會回傳第一個完成的值，不管那個值是 resolve 或是 reject。

```js
const p1 = new Promise((resolve) => setTimeout(resolve, 500, "promise1 quick"));
const p2 = new Promise((resolve) =>
  setTimeout(resolve, 100, "promise2 quicker")
);

const firstResolved = await Promise.race([p1, p2]);

console.log(firstResolved); // promise2 quicker
```

下面我列了一個表，來分別這四者的差別～～

|                     | Promise.all            |   Promise.allSettled   |                     Promise.race | Promise.any                              |
| ------------------- | ---------------------- | :--------------------: | -------------------------------: | ---------------------------------------- |
| 回傳時機（resolve） | 全部的 resolve 完成    | 會等到全部的結果都完成 | 第一個完成的 resolve 或是 reject | 第一個完成的 resolve                     |
| 回傳時機（reject)   | 收到一個 reject 及回傳 | 會等到全部的結果都完成 | 第一個完成的 resolve 或是 reject | 沒有任何 resolve 完成才回傳全部的 reject |

## 實踐 Promise

在了解 Promise 的四種常見方法之後，下面我們會來正式開始實踐 Promise 本身了！

首先我們會先列出 Promise 的三個 state，分別是 fulfilled,rejected 和 pending。Promise 一開始時的 state 會是 pending 然後在 resolve 時會變成 fulfilled，reject 時會變成 rejected。

```js
const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};
```

然後我們來實作 promise 中的 resolve 跟 reject 兩個方法吧！

首先先來看一下我們的 Promise，為了避免跟真正的 promise 搞混，我們這裡會稱它為 simplePromise。在 simplePromise 中，我們會先在 constructor 裡放入一個 try catch，如果沒問題出現的話，使用者丟進來的 executionCallback 就會帶入`onSuccessBinded`跟`onFailBinded`並且執行。這裡的概念是在 promise 中我們會丟入一個有 resolve, reject 兩個變數的 function。而這裡的 executionCallback 就是那個有兩個變數的 function，而 resolve 和 reject 分別就是`onSuccessBinded`和`onFailBinded`這兩個方法！另外，有注意看的讀者應該發現我們這裡有用一個`#`，這代表的是 private property，透過這個符號，我們可以讓變數變成 private 的，並且只能在 class 中使用！

上面理解後，我們就可以來看我們的 class 裡面會有哪些變數了！可以看到我們有 thenCallback, catchCallback，這兩個 callback 會紀錄 promise 的 then 跟 catch 中的 function，then 跟 catch 的部分也是我覺得實踐 promise 最難的地方，所以我們這部分留到下面再去，我們只要先知道這兩個 array 會儲存 then 和 catch 中的 function 就好了！我們接著往下看，state 的初始值會是 pending，然後 value 因為還沒有東西傳進來所以會是空的。

```js

class simplePromise {

  #thenCallback = [];
  #catchCallback = [];
  #state = STATE.PENDING;
  #value;
  #onSuccessBinded = this.#onSuccess.bind(this);
  #onFailBinded = this.#onFail.bind(this);

  constructor(executionCallback) {
    if (typeof executionCallback !== "function") {
      throw new TypeError("Promise is not a function!");
    }

    try {
      executionCallback(this.#onSuccessBinded, this.#onFailBinded);
    } catch (error) {
      this.#onFail(error);
    }
  }
}


//案例示範

const executionCallback = ((resolve, reject) => ...)
new simplePromise(executionCallback)
```

接著我們會來實踐 promise 中很重要的 resolve（onSuccess）, 跟 reject (onReject)功能！

我們的 onSuccess 跟 OnFail 在執行時(下圖 A 點)都會先去看當前的 state，如果使用者 call 了 resolve(觸發 onSuccess)，結果發現 state 不是 pending 代表目前不是初始的情況，那就會 return。相法的就會繼續往下走，來更新 value、state 並且 call 一個叫做 runCallback 的 function。在來討論 runCallback 之前，我們來看一下包住全部 function 的 queueMicrotask!

queueMicroTask 基本上能夠讓我們把包在裡面的函數轉換成為微任務(micro task)，關於什麼是微任務我在這篇[文章](https://0529bill.github.io/bywater-blog/ironMan2022/executionContext)有大概提到，有興趣的讀者可以去看看，簡單來說，微任務就是 event loop 裡面的一個任務，並且微任務會在 call-stack 都執行完後，從 callback queue 丟回 call-stack 中執行。而 promise 也是微任務!所以這裡我們就可以理解，**透過 queueMicroTask，我們讓 resolve、reject 中的 function 轉化成為微任務，確保每此執行 resolve、reject 時，其他事件已經執行完成，並且每次執行過程都是穩定的和一致的**！

\*\*注意: 有些 promise 實踐在這裡會用 setTimeout 來替代 queueMicrotask，但這其實是不太精確的，因為 setTimeout 是 MacroTask 而 queueMicrotask 和 promise 都是 MicroTask，而 microTask 的執行時間會比 MacroTask 還早\*\*～～

```js

#onSuccess(value) {
    queueMicrotask(() => {
        // A點
      if (this.#state !== STATE.PENDING) return;

      this.#value = value;
      this.#state = STATE.FULFILLED;
      this.#runCallbacks();
    });
  }

#onFail(value) {
    queueMicrotask(() => {
        // A點
      if (this.#state !== STATE.PENDING) return;

      this.#value = value;
      this.#state = STATE.REJECTED;
      this.#runCallbacks();
    });
  }

```

接下來我們來看 Promise 中非常常使用的 then！
首先我們要知道 Promise 中的 then、catch、finally 都是可以 chaining 的！chaining 就是指 then 後面又接上數量不等的 then，像是下面這樣。

```js
new simplePromise().then().then().then().catch().then();
```

並且每一次的執行過程中，都會在回傳一個新的 promise，透過這樣我們才可以達成 chaining 的功能！  
基本上，then 做的事情就是，**他會去把每個 then 裡面的 function 儲存到 thenCallback 中，並且在 runCallback 的時候，把 value 帶入 thenCallback 中所儲存的 function**，我們來看下面的範例會比較好理解。

```js
// thenCallback示範範例

//promise長這樣
new simplePromise(resolve(0))
  .then((t) => t)
  .then((t) => t + 1)
  .then((t) => t + 2);

//then執行完後，thenCallback會長這樣
thenCallback = [(t) => t, (t) => t + 1, (t) => t + 2];

// runCallback把value丟到thenCallback中執行
this.thenCallback.forEach((callback) => {
  callback(this.#value);
});
```

另外要注意的是，整個 simplePromise 執行的順序以上面的例子為例會是：

1. simplePromise 被 resolve，因為被 queueMicrotask 所包住，所以被轉為微任務丟到 callback queue 中
2. 第一個 then 中的 function 被丟到 thenCallback 中
3. 第二個 then 中的 function 被丟到 thenCallback 中
4. 第三個 then 中的 function 被丟到 thenCallback 中
5. 這時候 thenCallback 會長這樣 [(t) => t, (t) => t + 1, (t) => t + 2]
6. queueMicrotask 中的 resolve 被丟回到 call stack 中執行
7. runCallbacks 被執行，value 被帶到剛剛的 thenCallback 中來執行，最後會得到最終的 value

知道 then 的運作方法後，下面就是 then 的實現:

```js
then(thenCb, catchCb) {
    return new simplePromise((resolve, reject) => {
      this.#thenCallback.push((result) => {
        if (!thenCb) {
          resolve(result);
          return;
        }
        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });

      this.#catchCallback.push((result) => {
        if (!catchCb) {
          reject(result);
          return;
        }
        try {
          resolve(catchCb(result));
        } catch (error) {
          reject(error);
        }
      });

      //避免已經resolve了，所以這裡call runcallback
      this.#runCallbacks();
    });

  }

  #runCallback = () => {
     if (this.#state === STATE.FULFILLED) {
      this.#thenCallback.forEach((callback) => {
        callback(this.#value);
      });
      this.#thenCallback = []; //reset the callback
    }
  }

```

所以這裡統整一下幾個 promise 的 then 比較有趣的地方：

1. 每個 then,catch,finally 都會回傳一個新的 promise
2. 因為上面的原因，所以可以做多個 chaining
3. 因為 queueMicrotask 的關係，chaining 的 then 會累積到 thenCallback 中，等 call stack 清空後，再去執行

看到這裡我們就完成了我們的 Promise 實踐!！
完整的程式碼在[這裡](https://github.com/0529bill/promise-implementation)，裡面除了有完整的 Promise 實踐，還有上面所提到的各種 Promise 方法，包含 all, allSettled, any 等等的實踐，並且還有 test case 可以讓讀者去改看看程式碼，自己動手玩玩看！那我們 promise 的實踐就講到這了，終於面對 promise 一直以來逃避的問題，心中終於覺得踏實一點了！！那我們就下次見了！

---

```js
有打錯或是問題，非常歡迎在下面留言跟我討論！
```

---

Resources:

https://betterprogramming.pub/4-javascript-promise-methods-all-allsettled-any-and-race-ba0e0c8c034e
https://www.youtube.com/watch?v=1l4wHWQCCIc
