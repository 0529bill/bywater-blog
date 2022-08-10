---
sidebar_position: 1
---

# [JS-Basics] Basics

JavaScript 共有八种数据类型，分别是 Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。

这些数据可以分为原始数据类型(primitives)和引用数据类型(Object)：

- 栈(stack)：原始数据类型（string, number, bigint, boolean, symbol, null and undefined）
- 堆(heap)：引用数据类型（对象 object、数组 array 和函数 function）

两种类型的区别在于存储位置的不同：

- 原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储； (primitive types => by value)
- 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈(stack)中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。(object => by reference)

---

&nbsp;

#### Primitives

(string, number, bigint, boolean, symbol, null and undefined)

- [Symbol](https://javascript.info/symbol)

#### Object

(function, array(ordered collections), objects(keyed collections), Map(like object, but allows key to be any type), Set(collection of unique values))

- [Map & Set](https://javascript.info/map-set)
- [Object.keys, values, entries are common agreement to use for data structure, ex,Map,Set,Array,Object](https://javascript.info/keys-values-entries)
- [Object's filter,map... method](https://javascript.info/symbol)

&nbsp;

---

&nbsp;

&nbsp;

## Heap and Stack

Stack(Static memory allocation)

- A stack is a data structure that JavaScript uses to store static data. Static data is data where <mark>the engine knows the size at compile time</mark>. In JavaScript, this includes primitive values (strings, numbers, booleans, undefined, and null) and references, which point to objects and functions.
  - primitive values
  - references, which point to objects and functions

The stack contains a reference to the object in the heap: The memory of the heap is not ordered in any particular way, which is why we need to keep a reference to it in the stack.

Since the engine knows that the size won't change, it will allocate <mark>a fixed amount of memory for each value</mark>.
The process of allocating memory right before execution is known as <mark>static memory allocation</mark>.
Because the engine allocates a fixed amount of memory for these values, there is a limit to how large primitive values can be.

Heap(Dynamic memory allocation)

- The heap is a different space for storing data where JavaScript stores objects and functions and it allocate <mark> a fixed amount of memory </mark> for these objects. Instead, more space will be allocated as needed.

&nbsp;

---

&nbsp;

## null vs undefined

`undefined` is used to describe variables that do not point to a reference.

`null` is used to define something programmatically empty.

https://stackoverflow.com/questions/6604749/what-reason-is-there-to-use-null-instead-of-undefined-in-javascript

TLDR; Don't use the undefined primitive. It's a value that the JS compiler will automatically set for you when you declare variables without assignment or if you try to access properties of objects for which there is no reference. On the other hand, use null if and only if you intentionally want a variable to have "no value".

&nbsp;

---

## arrow function vs function

arrow function pros:

1. readability

arrow function cons:

1. Do not have this
2. Do not have arguments
3. Can’t be called with new
4. They also don’t have super.

---

&nbsp;

## call, apply and bind

:call, apply 會立即把 this 綁定在 call/apply 的第一個值，讓函式可以動態使用 this。
:bind 會建立新的函式，在被呼叫之後才會綁定。

&nbsp;

**fun.call(thisArg[, arg1[, arg2[, ...]]])**  
:設定 thisArg 值，並且把該 this 綁定在 thisArg 上，後面的參數為原先 function 的 argument.

&nbsp;

```js
var person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
var person1 = {
  firstName: "Bill",
  lastName: "Gates",
};
var person2 = {
  firstName: "Steve",
  lastName: "Jobs",
};
person.fullName.call(person1); // 将返回 "Bill Gates"
```

```js
var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
var person1 = {
  firstName: "Bill",
  lastName: "Gates",
};
person.fullName.call(person1, "Seattle", "USA"); //Bill Gates,Seattle,USA
```

&nbsp;

**fun.apply(thisArg, [argsArray])**  
:用法和 call 類似，但是第二個 parameter 是 array

&nbsp;

```js
var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
var person1 = {
  firstName: "Bill",
  lastName: "Gates",
};
person.fullName.apply(person1, ["Oslo", "Norway"]); //'Bill Gates,Oslo,Norway'
```

&nbsp;

**fun.bind(thisArg[, arg1[, arg2[, ...]]])**  
:會建立新的函式，當函式被呼叫時，會將 this 關鍵字設為給定的參數。

```js

const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

//沒有bind Person的話，在setTimeout後，display的this遺失，輸出結果會是undefined
let display = person.display.bind(person);
setTimeout(display, 3000);
//John Doe

https://www.w3schools.com/js/js_function_bind.asp

```

&nbsp;

---

&nbsp;

## Event delegation 事件委派 & addEventListener

往下傳遞的過程被稱為**捕捉（capturing）**，往上傳遞的過程被稱為**冒泡（bubbling）**

&nbsp;

![event delegation](../Img/event_delegation.png)

&nbsp;

### e.stopPropagation vs preventDefault

&nbsp;

**e.stopPropagation**: 停止接下來的 bubbling 或是 capturing  
**preventDefault**: 停止 browser 的預定行為（default action）ex,用 preventDefault 來阻止\<a></a>跳轉頁面

## &nbsp;

### addEventListener:document.addEventListener(event, function, Capture)

第三個 parameter，default 為 false，執行在冒泡階段，  
設定為 true 時，執行在捕捉階段。

## &nbsp;

---

&nbsp;

## DOM 文件物件模型

:DOM 是 HTML,XML, SVG 文件的程式介面，他把文件跟程式語言（ex, js)綁在一起。透過 DOM，我們可以用 JS 來操控 HTML.

&nbsp;

---

&nbsp;

## Strict Mode 嚴格模式

用法：在檔案前面加上 ’use strict'  
在嚴格模式下，以下幾種狀況是不被允許的：

1. 直接定義未宣告變數
2. 使用 delete 刪除變數或函式
3. 重複變數
4. 跟其他很多狀況。。

## &nbsp;

## ES6

---

# Resources

[resources](https://felixgerschau.com/javascript-memory-management/)  
[resources-ch](https://juejin.cn/post/6940945178899251230)  
https://www.w3schools.com/jsref/met_document_addeventlistener.asp  
https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault  
https://medium.com/itsems-frontend/javascript-strict-mode-d0a3aa74458b
