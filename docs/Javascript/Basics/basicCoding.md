---
sidebar_position: 4
---

# [JS-Basics] Basics JS Questions

### Count Occurrences of each Element in Array

Problem: 列出 array 內的 element 數量

Input: arr = ["a", "b", "c", "b", "a"]  
Output: {a: 2, b: 2, c: 1}

```js
//Array.prototype.reduce;

function countOccurrences(arr) {
  return arr.reduce(function (a, b) {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
}
console.log(countOccurrences(["a", "b", "c", "b", "a"]));
```

```js
arr.reduce((prev, curr) => {
  prev[curr] = (prev[curr] || 0) + 1;
  return prev;
}, {});
```

```js
//For loop

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
```

### Guess the output

Problem1:

```js
for (var val = 0; val < 10; val++) {
  console.log(val);
  setTimeout(function () {
    console.log(`The number is ${val}`);
  }, 1000);
}
// var => global scope(no function here)
```

Problem2:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function printValue() {
    console.log(`The number is ${i}`);
  }, 1000);
}
// let => block scope
```

solution1:

```js
for (var i = 1; i < 6; i++) {
  function timer() {
    // create a unique function (scope) each time
    var k = i; // save i to the variable k which
    setTimeout(() => {
      console.log(k);
    }, 1000);
  }
  timer();
}
```

solution2:

```js
let a = (i) =>
  setTimeout(function () {
    console.log(i);
  }, 100);

for (var i = 1; i < 10; ++i) {
  a(i);
}
```

### Fibonacci Number

```js
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
```

```js
//cached version
let cached = new Map();

function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  if (cached.has(n)) {
    return cached.get(n);
  }
  cached.set(n, fib(n - 1) + fib(n - 2));
  return fib(n - 1) + fib(n - 2);
}
```

### check if string is English/Chinese

```js
//English
var englishTest = /^[A-Za-z0-9]*$/;
english.test("dsfsdfs");

// Chinese
var chineseTest = /^[\u4e00-\u9fa5]*$/;
```

Resources:

https://discuss.codecademy.com/t/var-and-let-in-a-loop-working-differently/550468
