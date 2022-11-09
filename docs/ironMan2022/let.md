---
sidebar_position: 4
---

# [鐵人賽 2022-擊敗前端面試大作戰] let,const, var and hoisting

嗨大家好，這是 bywater，今天是 JS 系列的第一篇文章。在 JS 系列中，我們會有八篇文章，介紹各個常見的 JS 面試題，會有這麼多篇幅是因為 JS 實在是太重要拉！有太多的東西想要跟大機分享，所以我也只能從中勁量挑到八個我覺得比較有趣的主題來分享！那話不多說我們就開始正文吧！

如果問前端工程師說最常在面試被問到的 Js 考題是什麼，十個裡面可能有五六個會說是 let, const, and var 吧！

## 這一篇文章適合誰看

**適合閱讀者**

1. 了解 let, const 和 var 語法

&nbsp;

## 面試題牛刀小試

### let, const vs var 的差別

回答：  
兩者的差別在`作用域`，var 因為會有重新復值的問題， 因此現在大家都只使用 let 或是 const。

面試回答思路：這題主要是在問 `作用域` 的觀念，所以可以講這兩種作用域的不同，然後可以延伸到 `hoisting`跟`暫時性死區TDZ`。

&nbsp;

基本上，let, const vs var 的差別有以下三個：

1. let, const 的作用域是 block scope, var 是 function scope, **沒有在作用域之內** 的 variable 就會被宣告成 global 變數，進而容易造成誤用等 bug。
2. var 可以重複宣告，let, const 不行。
3. var 被 hoisting 之後會被賦予 undefined，let,const 則不會。

&nbsp;

如果上面看不懂的話沒關係，下面會放程式碼來解釋。

先來繼續講第一個差別，var 是 function scope,let,const 是 block scope。那你可能會問什麼是 scope? 你可以想像 scope 就像是一個家的牆，家外面的人看不到裡面。在外面的變數無法取的裡面的變數的資訊。而在 function 括號裡面的我們稱為 function scope，如果只有括號，那它就會被稱作 block scope。

```js

//function scope
function a() {
  ...function scope
}



//block scope

if (true) {
  ...block scope
}

```

了解了 scope 的概念之後，回到主題。所以 var 只要不是在 function 中宣告就會成為 global 變數，容易造成誤用，也因此現在已經不建議使用 var 了。

```js
// var 會變成global
if (true) {
  var abc = 10;
}
console.log(abc); // 10
```

當時為了解決 var 變成 global 而濫用的問題，所以出現了一個東西叫做 IIFE 來解決這樣的問題。IIFE 是一個會立即被執行的 function，透過 var 是 function scope 的特性，把 var 放到 function 內，並且在使用之後就被垃圾回收，這樣 var 就不會變成 global，也不會出現剛剛提到的問題！

**在現代因為有 let, const 的出現，目前大部分的情境之下已經沒有需要用到 IIFE 了!**

```js
//IIFE
(function () {
  var message = "Hello";

  alert(message); // Hello
})();
```

&nbsp;

let,const 因為 是 block scope 所以只要在 block 裡面宣告，就會只能在該 block 裡面使用。

```js
//let, const 會待在block裡面，外面無法取用該變數。
if (true) {
  let abc = 10;
}
console.log(abc); //Uncaught ReferenceError: abc is not defined
```

**注意：這裡的報錯是 ReferenceError: abc is not defined**

&nbsp;

### var 可以重複宣告，let, const 不行。

了解作用域之後，我們再來看第二點的差別，**可否重複宣告**。這點就簡單很多，var 在宣告後，還是可以再度宣告來覆蓋前一個宣告，而 let 跟 const 不行。可以重複宣告的缺點是，我們可能在無意見重複宣告而造成很難追蹤的 bug！我們來看下面的範例：

```js
let a = 10;
let a = 11;
// Uncaught SyntaxError: Identifier 'a' has already been declared

var a = 10;
var a = 11;

a; // 11
```

&nbsp;

### var 被 hoisting 之後會被賦予 undefined，let,const 則不會

再來說第三個差別，兩者 hoisting 的差別。那什麼是 hoisting 呢？

Hoisting 定義：  
Hoisting 是 Javascript 在執行階段中，把變數或是 function 提升的特性。

而 var 會被 hoisted，然後被賦予 undefined。

```js
// var 被賦予undefined, 直到被執行。
function printName() {
  console.log(name); // undefined
  var name = "John";
  console.log(name); // John
}
```

**注意：這裡 name 的值是 undefined**

let, const 也會被 hoisted，但會維持在 **uninitialized** 的狀態。所以在它被宣告之前到它的 block scope 的起點的地方，該變數還是 **uninitialized** 而不能被使用，這個地方(A to B)也被稱作為暫時性死區（TDZ）。這部分關於程式碼被執行時所發生的事，我們在後面 EventLoop 的文章會提到喔～請大家再稍等一下！

```js
//
function printName() {
  //A
  console.log(name); // ReferenceError: Cannot access 'name' before initialization
  //B
  const name = "John";
  console.log(name);
}
```

**注意：這裡的報錯是 ReferenceError: Cannot access 'name' before initialization**

&nbsp;

題外話，function 會被 hoisted，但是可以被使用。

```js
printName(); //John

function printName() {
  console.log("John");
}
```

---

以上就是 let,const 和 var 的三點差別和介紹了 hoisting！想必看到這裡，讀者應該對這個重要的 JS 觀念有一定的了解了，下面我會列一些常見的面試問題，讀者就可以自己回答看看摟～

### 常見的面試題

面試題 1. let, const 和 var 的差別？  
面試題 2. hoisting 是什麼？  
面試題 3. ReferenceError: Cannot access x before initialization vs ReferenceError: x is not defined 的差別是什麼？
面試題 4. 結果會是什麼？

```js
var a = 2;
// 問題1
(function () {
  console.log(a);
  const a = 1;
})()(
  // 問題2
  function () {
    console.log(a);
    var a = 1;
  }
)();
```

&nbsp;

References:

https://shubo.io/javascript-hoisting/
