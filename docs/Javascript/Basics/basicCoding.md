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

Problem:

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

https://discuss.codecademy.com/t/var-and-let-in-a-loop-working-differently/550468
