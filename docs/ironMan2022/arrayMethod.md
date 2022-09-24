---
sidebar_position: 11
---

# [鐵人賽 2022-擊敗前端面試大作戰] Array's method

昨天我們講了 JS 的 promise 實作，今天我們要來繼續討論另一類很常在面試中遇到的實作題---Array 方法實作。  
Array 的內建方法實在是很多，真的要每個都實作的話，可能要講個三天也講不完，所以這裡我們就只挑最常見的幾個來實作，其他的方法就留給大家自己查摟～～而這一篇文章會是 JS 系列的最後一篇文，接下來我們就會進入前端框架 React 的系列了!請大家拭目以待！下面就進入我們的正文吧！

### Array.prototype.map

我們第一個要實踐的是 Array.map，想必各位前端工程師對這個方法一定不會陌生，map 可以執行陣列內的值並且回傳一個新的陣列。那要注意的是，forEach 雖然也是跑陣列但是他並不會回傳任何東西，所以 return 在 forEach 裡不會有作用！！接下來老樣子來看一下 map 的使用範例吧！

#### 語法:

```js
const newArr = arr.map(function (value, index, array) {
  //...
});
```

#### 範例：

```js
let name = ["小明", "小王", "小林"];
let newName = name.map(function (value, index, array) {
  return `我的名字是： ${value}`;
});

console.log(name); // ['小明', '小王', '小林']
console.log(newName); // ['我的名字是： 小明', '我的名字是： 小王', '我的名字是： 小林']
```

**原陣列不會被修改，並且會產生新的陣列！**

知道他的用法之後，我們就來實作他看看吧！

實作思路：

1. 新增一個方法到 Array 裡，讓所有 Array 都可以使用，所以用 prototype，如果對 prototype 還不熟悉的朋友可以去前幾天的 prototype 那篇文章喔!
2. Array.map(callback)接收的值是一個 callback，然後裡面應該是要長以下這樣

```js
function (value, index, array) {
  //...
});

```

所以我們的實作必須要回一個有 value,index 跟該 array 的 callback!

思路釐清後，要實作就顯得很簡單摟，以下就是實際實作的結果！

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

我們下一個要介紹的 Array 方法是 Array.filter，這個方法可以幫我們從原本的陣列中篩選出想要的值，然後會回傳一個新的陣列！

#### 語法:

```js
const newArr = arr.filter(function (value, index, array) {
  //...
});
```

#### 範例：

```js
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

**注意：原陣列不會被修改，並且會產生新的陣列！**

Array.filter 的實作思路：

1. 他過 Array.map 一樣，會有一個 callback，而且裡面會有下面這三個值 value, index, array
2. 他會用 callback 裡面的判斷，如果判斷為 true 就會被 push 進回傳陣列中，相反的，判斷為 false 的話就會被省略。

了解 Array.filter 的使用方法之後，下面就來實作吧！！

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

最後一個要來實作的是 Array.reduce，相信這是一個讓人又愛又恨的陣列方法，因為它的確是陣列方法中比較複雜的！曾經的我也很少用並且不去了解 Array.reduce 的用法，但是他其實很好用，如果可以善用它的話，可以讓程式碼更加簡潔！

### Array.prototype.reduce

#### 語法:

```js
const newArr = arr.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  //...
},
initialValue);
```

#### 範例：

Reduce 可以派上用場的經典題目像是以下這題，用 reduce 就可以快速的算出答案！

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

Array.Reduce 的實作思路：

1. 首先，callback 裡面會有四個值（ accumulator 累加值,
   currentValue 當前值,
   currentIndex 當前 index,
   array
   )
2. 如果有提供 initialValue，那就用 initialValue 來做計算。沒有的話，就用 array 中的第一個值，來當作 initialValue。

下面就是實作的結果：

```js
Array.prototype.myReduce = function (callback, initialValue) {
  let init = initialValue || this[0];
  let index = initialValue ? 0 : 1;
  for (let i = index; i < this.length; i++) {
    init = callback(init, this[i], i, this);
  }
  return init;
};
```

看到這裡大家應該對 map,filter, reduce 三個陣列方法有更深的了解了，另外，第一次如果看不懂的話是正常的，我自己也是有固定複習這些語法才能慢慢記住他們的實現方式，鐵人賽擊敗面試大作戰到第十天大家都辛苦了，JS 系列已經在此告一段落，下一章我們就會開始來看 React 框架摟，我們明天見！！！！

https://blog.bitsrc.io/lets-implement-our-own-array-map-sort-methods-e89c9d5e2dc8  
https://www.digitalocean.com/community/tutorials/how-to-implement-javascript-array-methods-from-scratch
https://tzulinchang.medium.com/javascript-array-reduce%E7%9A%84%E7%94%A8%E6%B3%95-c435611a2935
