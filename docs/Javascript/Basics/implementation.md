---
sidebar_position: 4
---

# [JS-Basics] Implementation

## 目錄

- Promise.all
- Promise.race
- debounce
- throttle
- Array method(Reduce, map, filter, forEach,every, some)
- shallow copy
- deep copy
- memoize function
- Lodash's get()
- instanceof

---

### Promise.all

```js
function promiseAll(values) {
  if (!Array.isArray(values)) return;
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          results[index] = result; // 確保回傳的Promise中，value的順序是對的！
          completed += 1;

          //如果成功的話就會回傳resolve
          if (completed == values.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}
```

### Promise.race

```js
const PromiseRace = (values) => {
  return new Promise((resolve, reject) => {
    for (const item of values) {
      //第一個完成的會直接回傳
      Promise.resolve(item).then(resolve).catch(reject);
    }
  });
};
```

### debounce

```js
function debounce(fn, delay = 500) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

### throttle

```js
function throttle(fn, delay = 500) {
  let timer = null;

  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}
```

### Array method

**Array.prototype.reduce**

```js
Array.prototype.myReduce = function (callback, initialValue) {
  let init = initialValue || this[0];
  let index = initialValue ? 0 : 1;
  for (let i = index; i < this.length; i++) {
    init = callback(init, this[i]);
  }
  return init;
};
```

**Array.prototype.map**

```js
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
```

**Array.prototype.filter**

```js
Array.prototype.myFilter = function (callback) {
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    if (!!callback(this[i], i, this)) {
      resultArray.push(this[index]);
    }
  }
  return resultArray;
};
```

**Array.prototype,forEach**

```js
Array.prototype.myEach = function myEach(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
```

&nbsp;

**Array.prototype.every**

```js
Array.prototype.myEvery = function myEvery(callback, thisArg) {
  for (var i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) return false;
  }
  return true;
};
```

**Array.prototype.some**

```js
Array.prototype.mySome = function mySome(callback, thisArg) {
  for (var i = 0; i < this.length; ++i) {
    if (callback(this[i], i, this)) return true;
  }
  return false;
};
```

### shallow copy

array

1. spread operator
2. Array.prototype.slice()

object

1. spread operator
2. Object.assign
3. lodash's \_.clone

### deep copy

1. JSON.parse(JSON.stringify())
2. lodash \_.cloneDeep
3. structuredClone(Node 17):

### memoize function

```js
function memoizeMap(fn) {
  let map = new Map();
  return function (...args) {
    let key = JSON.stringify(args);
    if (map.has(key)) {
      return map.get(key);
    } else {
      let value = fn(...args);
      map.set(key, value);
      return value;
    }
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

### lodash's get

```js
//lodash中的get使用方法
const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

get(obj, "a.b.c"); // [1,2,3]
get(obj, "a.b.c.0"); // 1
get(obj, "a.b.c[1]"); // 2
get(obj, ["a", "b", "c", "2"]); // 3
get(obj, "a.b.c[3]"); // undefined
get(obj, "a.c", "bfe"); // 'bfe'
```

```js
/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
  const arrPath = typeof path === "string" ? path.match(/[^\[\]\.]+/g) : path;
  if (!(arrPath && arrPath.length)) return;
  const result = arrPath.reduce((obj, key) => obj && obj[key], source);
  return result || defaultValue;
}
```

### instanceof

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
