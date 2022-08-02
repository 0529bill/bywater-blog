# Basics

JavaScript 共有八种数据类型，分别是 Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。

这些数据可以分为原始数据类型和引用数据类型：

- 栈(stack)：原始数据类型（Undefined、Null、Boolean、Number、String）
- 堆(heap)：引用数据类型（对象 object、数组 array 和函数 function）

两种类型的区别在于存储位置的不同：

- 原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储； (primitive types => by value)
- 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈(stack)中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。(object => by reference)

- dataType
  - primitives (string, number, bigint, boolean, symbol, null and undefined)
    - [Symbol](https://javascript.info/symbol)
  - Object (function, array(ordered collections), objects(keyed collections), Map(like object, but allows key to be any type), Set(collection of unique values))
    <!-- - [Basics]() -->
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

&nbsp;

# ES6

## let vs const vs var

1. 块级作用域： 块作用域由 { }(block scope)包括，let 和 const 具有块级作用域，var 不存在块级作用域。块级作用域解决了 ES5 中的两个问题：

- 内层变量可能覆盖外层变量
- 用来计数的循环变量泄露为全局变量

2. 变量提升： var 存在变量提升，let 和 const 不存在变量提升，即在变量只能在声明之后使用，否在会报错。
3. 给全局添加属性： 浏览器的全局对象是 window，Node 的全局对象是 global。var 声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是 let 和 const 不会。
4. 重复声明： var 声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const 和 let 不允许重复声明变量。
5. 暂时性死区： 在使用 let、const 命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用 var 声明的变量不存在暂时性死区。
6. 初始值设置： 在变量声明时，var 和 let 可以不用设置初始值。而 const 声明变量必须设置初始值。
7. 指针指向： let 和 const 都是 ES6 新增的用于创建变量的语法。 let 创建的变量是可以更改指针指向（可以重新赋值）。但 const 声明的变量是不允许改变指针的指向。

---

# Resources

[resources](https://felixgerschau.com/javascript-memory-management/)  
[resources-ch](https://juejin.cn/post/6940945178899251230)
