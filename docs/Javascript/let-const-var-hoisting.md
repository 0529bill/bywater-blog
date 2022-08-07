---
sidebar_position: 4
---

# [JS] let, const vs var, Hoisting

## let, const vs var

兩者的差別是：作用域

1. let, const 的作用域是 block scope, var 是 function scope, **沒有在作用域之內** 的 variable 就會被宣告成 global 變數。
2. var 可以重複宣告，let, const 不行 （但是可以重新復值）
3. **var,function, let, const 都會被 hoisted** ，但是 var, function 會被賦予 undefined/function, 而 let, const 則會維持在 **uninitialised** 的狀態，直到 let,const 被執行到是才會夠使用，而在 let, const 語法被執行到之前的地方就叫做 TDZ(temporal dead zone).

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

References:

https://shubo.io/javascript-hoisting/
