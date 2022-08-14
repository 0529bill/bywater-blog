---
sidebar_position: 3
---

# [JS-Basics] Implement Array's method

### Array.prototype.map

```js
Array.prototype.mymap = function (callback) {
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
