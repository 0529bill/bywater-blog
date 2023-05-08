---
sidebar_position: 6
---

# [JS-Basics] Common Js method/function

### debounce

```js
function debounce(func, delay) {
  let timeout = null;
  return function (...args) {
    let context = this;
    //綁定在傳進來的func上
    clearTimeout(timeout);
    //清除掉前一個timeout

    timeout = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}
```

usage: input searchBox => 減少使用者在 input 裡面打字時的動作（ex, api call），在 onChange 停止後等待 setTimeout 過後才會 fire 想要做的動作。

https://webdesign.tutsplus.com/tutorials/javascript-debounce-and-throttle--cms-36783
https://blog.bitsrc.io/what-is-debounce-in-javascript-a2b8e6157a5a
https://codesandbox.io/s/musing-grothendieck-4irboh?file=/src/index.js

---

### throttle

用途: 畫面 scrolling 時透過 throttle 來避免一次大量 scroll event

```js
function throttle(func, delay) {
  let inThrottle;
  let timeout = null;
  return function (...args) {
    let context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        inThrottle = false;
      }, delay);
    }
  };
}
```

```js
//using arrow function

let throttlePause;

const throttle = (callback, time) => {
  //don't run the function if throttlePause is true
  if (throttlePause) return;

  //set throttlePause to true after the if condition. This allows the function to be run once
  throttlePause = true;

  //setTimeout runs the callback within the specified time
  setTimeout(() => {
    callback();

    //throttlePause is set to false once the function has been called, allowing the throttle function to loop
    throttlePause = false;
  }, time);
};
```

https://ithelp.ithome.com.tw/articles/10222749

---

### flatten

推薦閱讀文章：[flatten](https://segmentfault.com/a/1190000021366004)

Input: [[[1, [1.1]], 2, 3], [4, 5]]  
Output: [1, 1.1, 2, 3, 4, 5]

```js
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}
```

```js
function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
```

https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays
https://stackoverflow.com/questions/52752666/time-complexity-for-recrusive-deep-flatten

### 寫一個 memoize function

```js
function memoizeMap(fn) {
  const map = new Map();
  return function (arg) {
    if (map.has(arg)) {
      return map.get(arg);
    }
    const cachedArg = arg;
    const cachedResult = fn(arg);
    map.set(cachedArg, cachedResult);
    return cachedResult;
  };
}

let testFn = (foo) => foo + 999;

let memoizeMapFn = memoizeMap(testFn);

memoizeMapFn(1); // map對arg 1生成緩存
memoizeMapFn(1); // 取緩存結果
memoizeMapFn(1); // 取緩存結果

memoizeMapFn(2); // map對arg 2生成緩存
memoizeMapFn(2); // 取緩存結果
memoizeMapFn(1); // 取緩存結果
```

Resources: https://github.com/FrankKai/FrankKai.github.io/issues/252

### 數組去重 unique value in a array

推薦資源： https://segmentfault.com/a/1190000016418021

```js
//using ES6 Set

function unique(arr) {
  return Array.from(new Set(arr));
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

```js
//using Reduce
function unique(arr) {
  return arr.reduce(
    (prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]),
    []
  );
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
```

### deepCopy

推薦資源： https://juejin.cn/post/6844903929705136141

### 實現 instanceof

```js
function _instanceof(L, R) {
  if (typeof L !== "object") return false;

  L = L.__proto__;
  R = R.prototype;

  while (true) {
    if (L === null) return false;

    if (L === R) return true;

    L = L.__proto__;
  }
}
```

資源：https://www.jianshu.com/p/e07a8a7c0ce7
