---
sidebar_position: 8
---

# [鐵人賽 2022-擊敗前端面試大作戰] The Execution Context, Call-stack and Event Loop

今天是鐵人賽正文的第五天了，大家都還好嗎？今天呢要來講一個我覺得很有趣的題目---Event loop，這題在面試中被問到的機會非常的高，我自己就有在面試中被問到超過兩次！所以如果在面試中可以把這題回答得很好，我覺得是會讓面試官眼睛一亮的！那我們就進入主題吧～

## 什麼是 Event Loop 事件循環

回答：Event Loop 是一個 JS 的機制，讓我們可以處理非同步的動作。

## Event Loop 解決了什麼問題？

回答：JS 本身是 單線程序（single-threaded），代表一次只能有一件事能被執行，所以當出現一個很大的計算的時候，就會導致後面的計算沒辦法被執行。而透過 Event Loop 我們可以解決這個問題。

面試回答思路：回答 event loop 解決的問題，然後帶到 The Execution Context 跟 Call-stack。

沒聽過這兩個名詞`The Execution Context`跟`The Call-stack`的話沒關係，下面我們就來討論這兩個東西吧！

## The Execution Context

定義: Execution context - a wrapper to help manage the code that is running. There are lots of lexical environments, areas of the code that you look at physically, but which one is currently running is managed via execution contexts.

你有沒有想過一個問題，當你在瀏覽器上面跑 Js 得時候，背地裡發生了什麼事情？瀏覽器是怎麼執行我們傳送給他的 Js 程式碼的？或是像上面這段程式碼在執行時，到底瀏覽器是怎麼去跑他的？

要回答這些問題，我們必須先講到`The Execution Context`。

當一段程式碼被執行時，會先產生 全局的 `Execution Context`。然後 瀏覽器引擎 進入 `creation phase` ，有四件事情會發生：

1. 建立 全局 物件，它在 瀏覽器 中被稱作`window`，在 Node 中被稱作`global`。在 JS 中，沒有在 scope 內的變數就會成為 global object，ex, var 在 function 之外，let/const 在 block scope 之外。
2. 建立 `this` 並且指向 全局 物件
3. 建立一個 memory heap 來儲存 變數 和 函式的 references
4. 把 函式宣告式 (ex, function s()...)儲存在 memory heap 中， 然後把 memory heap 裡面的 變數 賦予`undefined`。這一點蠻重要的，因為也就是這樣所以我們才能在宣告 function 之前就使用 function

```js
const a = 10;

function text() {
  return "text";
}
```

所以以上面的程式碼為例，這時候我們的 全局的 `Execution Context` 會有以下幾個東西，

1. 全局 物件，裡面的值是 window
2. this，也指向 window
3. a，值是 undefined
4. function text

&nbsp;

不知道大家還記不記得 let, const 和 var 那篇文章，裡面有個例子長這樣，

```js
printName(); //John

function printName() {
  console.log("John");
}
```

然後當時我說`function 會被 hoisted，但是可以被使用。`，現在了解`Execution Context`的機制後，我們終於知道為什麼 function 可以被提前使用了!因為全局`The Execution Context`被建立時就會先把 function 儲存在 memory heap 中！！

回到剛剛的情況，在`creation phase`完成後，瀏覽器 會進入下一個階段-----`execution phase`。

在這個階段，程式碼會被一條條的執行，

1. 變數 會被賦予值，
2. function 會被執行，並且在每個 function 被執行時，瀏覽器引琴 都會 建立 一個 `Function Execution Context` （類似上面的 全局` Execution Context`），但是 全局 物件會被指到 `arguments`物件，裡面會儲存所有傳進 function 的值。

這個階段後， 全局的 `Execution Context`會長這樣：

1. 全局 物件，裡面是 window
2. this，也指向 window
3. a，值為 10
4. function text

以上就是瀏覽器在跑 JS 檔案時所發生的事情！

&nbsp;

這時候有個問題來了，當我們出現多個嵌套的（nested)函式時，我們已經知道會觸發多個`Function Execution Context`，那瀏覽器引擎又要怎麼去執行這些函式呢？這就要談到`The Event Loop`和 `callback queue`了！但在那之前，我們還先需要知道兩個東西`The Call-stack`和`The callback queue`。

&nbsp;

## The Call-stack

: `The call-stack` 用資料結構（stack）來追蹤和管理`function execution`。

實際情況：`The call-stack` 依照 Last In First Out 的規矩，當 瀏覽器引擎 執行 到 函式 時，會把該 函式 push 到 `call-stack` 裡，並且在執行該 函式 時，會把該 函式 從`call-stack` 中 pop 掉，

![call stack](./Img/call_stack.jpeg)

下面舉個例子，

```js
function b() {
  console.log("b");
}

function a() {
  b();
  console.log("a");
}

a();
```

這樣的執行結果會是怎麼樣呢？

答案是會先 console.log 出 b 然後才會 log a

```js
b;
a;
```

整個程式碼執行的過程會是這樣的，首先會建立一個 global execution context，然後進入 creation phase 和 execution phase，在 execution phase 時，a 會被呼叫。然後 a function 會建立自己的 function execution context，在這裡面也同樣會經歷 creation phase 跟 execution phase，然後在 execution phase 時，b 會被呼叫。然後記得 JS 是 single threaded 的嗎？代表 JS 一次只能執行一件事情，所以我們會先去執行 function b，等到 b 執行完成後，才會回到 function a 裡面來 console.log。  
回到 function b 後，這裡也如同剛剛的 function a 一樣，會建立 execution context，跟經歷 creation phase 和 execution phase。在 function b console.log 完成後，我們會回到 function a，接著 console.log a 來完成 function a 的執行，以上就是完整的執行情況。

&nbsp;

## The callback queue

: `The callback queue`是一種資料結構 queue 用來追蹤跟管理需要被晚點執行的事件，包含 setTimeout, setInterval 等等。First-in, First-out

**這裡只有簡略講解 stack 和 queue，實際的實踐方式有興趣的讀者可以上網自行研究摟**

## The Event Loop and The callback queue

解決的問題：讓 JS 可以執行非同步的動作（ex, network request）

&nbsp;

![event loop](./Img//event_loop.jpeg)

講了這麼多，現在終於講到 event loop 的精彩階段了！`The event loop`會去追蹤 `call-stack`中需要執行 非同步 的 函式,當執行到該 函式 時把他丟入`callback queue`中,

1. 當 `call-stack`其他 function 都執行完，變回空的時候。
2. 處理 `callback queue`中的 function 丟回到`call-stack`上來執行。

`callback queue`的執行順序為： Microtask > Macrotask

常見的 microTask: Promise  
常見的 macroTask: setTimeout, setInterval... (與瀏覽器或電腦底層的運作較有關係)

所以來總結一下。今天先談到了`execution context`跟瀏覽器在執行中所有的兩個階段，包括`creation phase`跟`execution phase`，然後我們又講到要解決非同步問題我們需要`call-stack` 和 `callback-queue`這兩個東西，最後這些所組成的用來處理非同步的機制，就叫做`event loop`!那下面有一個小面試題目就留給讀者來嘗試看看摟！我們明天見！

```js
setTimeout(() => alert("timeout"));

Promise.resolve().then(() => alert("promise"));

alert("global ex. context");
```

&nbsp;

# Resources

https://dev.to/thebabscraig/the-javascript-execution-context-call-stack-event-loop-1if1
https://pjchender.dev/javascript/note-event-loop-microtask/

https://www.educative.io/answers/what-is-an-event-loop-in-javascript

keyword: `Global Execution Context`, `creation phase`, `execution phase`
