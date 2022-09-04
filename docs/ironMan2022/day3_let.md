---
sidebar_position: 3
---

# [鐵人賽 2022-擊敗前端面試大作戰] let,const, var and hoisting

如果問前端工程師說最常在面試被問到的 Js 考題是什麼，十個裡面可能有五六個會說是 let, const, and var 吧！所以今天就用個非非非非非常常見的萬年考題來當作擊敗前端面試系列的正式第一篇正文吧！

## let, const vs var 的差別

簡易解釋：兩者的差別在`作用域`，var 因為會有重新復值的問題， 因此現在大家都只使用 let 或是 const。

面試回答思路：這題主要是在問 `作用域` 的觀念，所以可以講這兩種作用域的不同，然後可以延伸到 `hoisting`跟`暫時性死區TDZ`。

&nbsp;

基本上，let, const vs var 的差別有以下三個：

1. let, const 的作用域是 block scope, var 是 function scope, **沒有在作用域之內** 的 variable 就會被宣告成 global 變數，進而容易造成誤用等 bug，所以現在已經不建議使用 var 了。
2. var 可以重複宣告，let, const 不行。
3. var 被 hoisting 之後會被賦予 undefined，let,const 則不會。

&nbsp;

如果上面看不懂的話沒關係，下面會放程式碼來解釋。

### 作用域跟 var 造成的問題

先來講解第一個差別，作用域跟 var 造成的問題。var 是 function scope,let,const 是 block scope。那你可能會問什麼是 scope? 在 function 括號裡面的是 function scope，如果只有括號，那它就是 block scope。

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

了解了 scope 的概念之後，回到主題。所以 var 只要不是在 function 中宣告就會成為 global 變數，容易造成誤用。

```js
// var 會變成global
if (true) {
  var abc = 10;
}
console.log(abc); // 10
```

當時為了解決 var 變成 global 而濫用的問題，所以出現了一個東西叫做 IIFE 來解決這樣的問題。IIFE 是一個會立即被執行的 function，透過 var 是 function scope 的特性，把 var 放到 function 內，並且在使用之後就被垃圾回收。在現代因為有 let, const 的出現，目前大部分的情境之下已經沒有需要用到 IIFE 了！

```js
//IIFE
(function () {
  var message = "Hello";

  alert(message); // Hello
})();
```

&nbsp;

而因為 let,const 是 block scope 所以只要在 block 裡面宣告，就會只能在該 block 裡面使用。

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
Hoisting 定義： Hoisting 是 Javascript 在執行階段中，把變數或是 function 提升的特性。

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

let, const 也會被 hoisted，但會維持在 **uninitialized** 的狀態。所以在它被宣告之前到它的 block scope 的起點的地方，該變數還是 **uninitialized** 而不能被使用，這個地方(A to B)也被稱作為暫時性死區（TDZ）。

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

想必看到這裡，讀者對 let,const and var 的差別應該有一定的了解了，下面我會列一些常見的面試問題，讀者就可以自己回答看看摟～

面試題 1. let, const 和 var 的差別？
面試題 2. hoisting 是什麼？
面試題 3. ReferenceError: Cannot access x before initialization vs ReferenceError: x is not defined 的差別是什麼？

&nbsp;

References:

https://shubo.io/javascript-hoisting/