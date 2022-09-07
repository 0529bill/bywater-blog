---
sidebar_position: 7
---

# [鐵人賽 2022-擊敗前端面試大作戰] prototype and prototype chain

_Javascript 是一個基於原型的語言（prototype-based)，他可以用在 OOP(Object-oriented programming)也可以用在 FP(Functional programming)_

## 什麼是 prototype?

簡易解釋:prototype 是一個內建在所有的 function 和 object 裡的 object。透過 prototype 我們可以繼承其他 object 的特性。

## 什麼是 prototype chain?

簡單解釋: 全部的 object 都有這個內建的 prototype，這個 prototype 自己也是一個 object，所以自己也會有 prototype，這個一個個連接起來的 object 就叫做 原型鏈 prototype chain，prototype 最上的節點會連接到 null。

## 為甚麼需要 prototype 和 prototype chain?

: 透過繼承原型上的屬性和方法，來重複使用程式碼，避免寫出重複的邏輯。常見的例子像是 array 的方法，就是透過 prototype 所以讓我們在宣告 array 之後可以使用 map, forEach 等。

面試回答思路: 先簡單介紹 `prototype` 和 `prototype chain`

下面我們先來看一些常見的內建 prototype 使用方法，

1. `__proto＿＿`  
   :用於找上層的 prototype，可以設定或是取用上層的 prototype。

```js
//設定的例子

var Circle = function () {};
var shape = {};

shape.__proto__ = circle; // => 設定shape的上層prototype為circle。

//取用的例子
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.log = function () {
  console.log(this.name + ", age:" + this.age);
};

var nick = new Person("nick", 18);

console.log(nick.__proto__ === Person.prototype); // true
```

**不建議私自用`__proto__`去更改 prototype，因為會影響到瀏覽器的效能**

2. `instanceof`  
   :判斷 A 是不是 B 的時例，比較的是原型(prototype)。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.log = function () {
  console.log(this.name + ", age:" + this.age);
};

var nick = new Person("nick", 18);

console.log(nick instanceof Person); // true，因為nick是由Person所創建的
console.log(nick instanceof Object);
// true，因為Person.prototype instanceof Object === true
console.log(nick instanceof Array); // false
```

3. `new`
   : 用來實例化一個對象。

   new 在用實例創建新 prototype 時，做了以下四件事：

1. 創建出新的 object
1. 把新創建的 object 的`__proto__`指向他的 實例
1. 把 this 指向新創建的 object
1. 回傳新創建的 object

```js
function Person(name) {
  this.name = name;
}

var person = Person("John");
console.log(person); // undefined
console.log(person.name); // Uncaught TypeError: Cannot read property 'name' of undefined

var person = new Person("John");
console.log(person); // Person { name: "John" }
console.log(person.name); // "john"
```

can also use

```js
Object.create(Person.prototype);
```

https://javascript.info/prototype-inheritance
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
https://www.geeksforgeeks.org/javascript-new-keyword/
