---
sidebar_position: 3
---

# [JS-Basics] Implement Array's method

### Array.prototype.map

```js
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
```

&nbsp;

### Array.prototype.filter

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

&nbsp;

### Array.prototype,forEach

```js
Array.prototype.myEach = function myEach(callback) {
  for (let i = 0; i < this.length; i += 1) {
    callback(this[i], i, this);
  }
};
```

&nbsp;

### Array.prototype.every

```js
Array.prototype.myEvery = function myEvery(predicate, thisArg) {
  for (var i = 0; i < this.length; ++i) {
    if (!predicate(this[i], i, this)) return false;
  }

  return true;
};
```

&nbsp;

### Array.prototype.some

```js
Array.prototype.mySome = function mySome(predicate, thisArg) {
  for (var i = 0; i < this.length; ++i) {
    if (!predicate(this[i], i, this)) return true;
  }

  return false;
};
```

&nbsp;

### Array.prototype.reduce

```js
Array.prototype.myReduce = function (callback, initialValue) {
  let init = initialValue || this[0];
  let index = initialValue ? 0 : 1;
  for (let i = index; i < this.length; i++) {
    init = callback(init, this[i]);
  }
  return init;
};

usage:

https://code.tutsplus.com/articles/5-real-life-uses-for-the-javascript-reduce-method--cms-39096
```

### Array.prototype.sort

https://blog.bitsrc.io/lets-implement-our-own-array-map-sort-methods-e89c9d5e2dc8  
https://www.digitalocean.com/community/tutorials/how-to-implement-javascript-array-methods-from-scratch
