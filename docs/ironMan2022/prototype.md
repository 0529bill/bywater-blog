---
sidebar_position: 7
---

# [鐵人賽 2022-擊敗前端面試大作戰] prototype and prototype chain

![https://ithelp.ithome.com.tw/upload/images/20220921/20148825KfFZVp1tN7.jpg](https://ithelp.ithome.com.tw/upload/images/20220921/20148825KfFZVp1tN7.jpg)

_Javascript 是一個基於原型的語言（prototype-based)，他可以用在 OOP(Object-oriented programming)也可以用在 FP(Functional programming)_

## 什麼是 prototype chain?

回答:  
全部的 object 都有這個內建的 [[Prototype]]，這個 [[Prototype]] 自己也是一個 object，所以自己也會有 [[Prototype]]，這個一個個連接起來的 object 就叫做 原型鏈 prototype chain， [[Prototype]]最上的節點會連接到 null。

## 為甚麼需要 prototype 和 prototype chain?

透過繼承原型上的屬性和方法，來**重複使用程式碼，避免寫出重複的邏輯**。常見的例子像是 array 的方法，就是透過 prototype 所以讓我們在宣告 array 之後可以使用 map, forEach 等。

```js
array.prototype.forEach(...省略);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr1.forEach(...省略);
arr2.forEach(...省略);
//會往上層的prototype找forEach的方法，所以兩個array都可以使用forEach的方法

arr1.ffff(...省略);
//在上層找不到方法的時候，就會報錯
```

下面我們先來看一些常見的使用方法/語法，

1. `__proto＿＿`  
   :用於找上層的 [[Prototype]]，可以設定或是取用上層的 [[Prototype]]。

```js
//用＿_proto__設定[[Prototype]]的例子

var Circle = function () {};
var shape = {};

shape.__proto__ = circle; // => 設定shape的上層[[Prototype]]為circle。

//用__proto__取用上層的例子
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

**注意：不建議私自用`__proto__`去更改不屬於自己的 [[Prototype]]，ex, 瀏覽器中的 array.prototype，因為會影響到瀏覽器的效能**

2. `Object.getPrototypeOf()`也可以用來用來取得物件的 [[Prototype]] 屬性的值

```js
let obj = { name: "hi" };
Object.getPrototypeOf(obj);

// {constructor.....}會回傳obj的[[prototype]]
```

3. `Function.prototype`  
   每一個函數在創建之後都會擁有一個名為 prototype 的屬性，這個屬性指向函數的原型對象。

   下面這個表很清楚的解釋了，function 的上層 prototype 和透過 new 所產生的 function 的上層 prototype 的差別，可以看到這兩者的上層 prototype 其實是有差別的喔！！

![https://ithelp.ithome.com.tw/upload/images/20220921/20148825kLpkqfbDkR.jpg](https://ithelp.ithome.com.tw/upload/images/20220921/20148825kLpkqfbDkR.jpg)

**注意: [[Prototype]] 和 prototype 不一樣，JS 中全部的對象都有[[prototype]]，但是只有函式有 Ｆ Function.prototype。**

[這篇文章](https://www.zhihu.com/question/34183746)有很好的解釋！

4. `instanceof`  
   :判斷 A 是不是 B 的時例，比較的是原型([[Prototype]])。

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

5. `new`
   : 用來實例化一個對象。

   new 在用實例創建新 prototype 時，做了以下四件事：

- 創建出新的 object
- 把新創建的 object 的`__proto__`指向他的 實例
- 把 this 指向新創建的 object
- 回傳新創建的 object

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

上面都理解之後，我們就可以來試試下面幾題面試題拉～

1. 輸出結果是什麼？

```js
Function.prototype.a = () => {
  console.log(1);
};
Object.prototype.b = () => {
  console.log(2);
};
function A() {}
const a = new A();
a.a();
a.b();
A.a();
```

答案：

```js
a.a(); // Uncaught TypeError: a.a is not a function
a.b(); // 2
A.a(); // 1
A.b(); // 2
```

第一個`a.a()`會報錯的原因，是因為用 new 生成的 a 屬性，在往上找 a 方法的過程中，會先找到`A.prototype`然後再去找`Object.prototype`，就如同上面的那張 Function.prototype 圖表一樣，所以中間就不會碰到`Function.prototype.a`這個方法，也因此會報錯。至於第 2,3,4 都會依序找到其方法因此都可以印出相關的值～

2. 輸出結果是什麼？

```js
function Foo() {
  Foo.a = function () {
    console.log(1);
  };
  this.a = function () {
    console.log(2);
  };
}
Foo.prototype.a = function () {
  console.log(3);
};
Foo.a = function () {
  console.log(4);
};
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();
```

&nbsp;

總結一下，今天討論了 prototype 、 prototype chain 、[[Prototype]]和一些常見的內建語法～希望這篇文章有讓你對 prototype 有更深的了解，那我們就明天見拉！

---

Inheritance 定義： One object gets access to the properties and methods of another object.

---

Resources:

https://javascript.info/prototype-inheritance
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
https://www.geeksforgeeks.org/javascript-new-keyword/
https://www.cnblogs.com/everlose/p/12930468.html
https://www.cnblogs.com/everlose/p/12944524.html
https://medium.com/@ajmeyghani/interview-questions-1145e3763bce
https://developer.aliyun.com/article/940572

https://www.zhihu.com/question/34183746
https://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html
