---
sidebar_position: 8
---

# [JS] Prototype

_Javascript 是一個基於原型的語言（prototype-based)，他可以用在 OOP(Object-oriented programming)也可以用在 FP(Functional programming)_

### methods

`__proto_-`  
:用於找上層的 prototype，被串接起來到上面的 prototype，直到到最上面的 null，這就是所謂的原型練。

```js
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

`instanceof`

:判斷 A 是不是 B 的 instance

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.log = function () {
  console.log(this.name + ", age:" + this.age);
};

var nick = new Person("nick", 18);

console.log(nick instanceof Person); // true
console.log(nick instanceof Object); // true
console.log(nick instanceof Array); // false
```

`new`

:new 在用 instance 創建新 prototype 時，做了以下四件事：

1. 創建出新的 object
2. 把新創建的 object 的`__proto__`指向他的 instance
3. 把新創建的 object 當作 context,呼叫其 instance
4. 回傳新創建的 object

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
