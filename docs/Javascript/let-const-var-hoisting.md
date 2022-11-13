---
sidebar_position: 4
---

# [JS] let, const vs var, Hoisting

## let, const vs var

兩者的差別是：作用域

1. let, const 的作用域是 block scope, var 是 function scope, **沒有在作用域之內** 的 variable 就會被宣告成 global 變數。
2. var 可以重複宣告，let, const 不行 （但是可以重新復值）
3. **var,function, let, const 都會被 hoisted** ，但是 var, function 會被賦予 undefined/function, 而 let, const 則會維持在 **uninitialized** 的狀態，直到 let,const 被執行到是才會夠使用，而在 let, const 語法被執行到之前的地方就叫做 TDZ(temporal dead zone).

```js
// var 被賦予undefined, 直到被執行。
function printName() {
  console.log(name); // undefined
  var name = "John";
  console.log(name); // John
}
```

&nbsp;
&nbsp;

```js
//
function printName() {
  console.log(name); // ReferenceError: Cannot access 'name' before initialization
  const name = "John";
  console.log(name);
}
```

&nbsp;

## ReferenceError: "x" is not defined vs Cannot access 'x' before initialization

&nbsp;

"x" is not defined => x 不在 scope 內，找不到這個變數。

```js
//

console.log(x);
let x = 10; //Uncaught ReferenceError: x is not defined

//
```

Cannot access 'x' before initialization => 在 scope 內，有被 hoisted，但是還沒執行到該語法

```js
//

{
  console.log(x);
  let x = 10; //Uncaught ReferenceError: Cannot access 'x' before initialization
}
//
```

---

## Hoisting

**什麼是 hoisting?**

Hoisting 是 Javascript 在執行階段中，把變數或是 function 提升的特性。

### function 也會被 hoisted

```js
printName(); //John

function printName() {
  console.log("John");
}
```

&nbsp;

---

&nbsp;

### IIFE

**有 let, const 之後，現在沒有必要使用 IIFE**

&nbsp;
解決問題：讓在以前只有 var 的時代，可以創建不被污染/成為全域變數的 var，在使用之後就被垃圾回收。

```js
(function () {
  var message = "Hello";

  alert(message); // Hello
})();
```

&nbsp;

### 補充：

```js
console.log(x);
let x = 10; //Uncaught ReferenceError: x is not defined

console.log(x);
var x = 10; //undefined
```

會出現這樣的情況是因為，let 只有在 scope 裡面的時候才會有提升，當 let 沒有在 scope 裡面得時候，雖然也可以宣告但是並不會加入 global object 中，因此也沒有提升，所以才會出現 not defined 的情況。如下圖的案例：

```js
<script>
  'use strict';
  let fromLet = 'from let';
  var fromVar = 'from var';
</script>

<script>
  console.log(fromLet);        // 'from let'
  console.log(fromVar);        // 'from var'
  console.log(window.fromLet); // undefined
  console.log(window.fromVar); // 'from var'
</script>
```

相反的，var 會被加入 global object 中，所以就算不是在 function scope 中宣告，在外頭宣告也會先被賦予 undefined

資源：  
https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-hoisted

---

References:

https://shubo.io/javascript-hoisting/
