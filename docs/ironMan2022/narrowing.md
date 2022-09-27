---
sidebar_position: 19
---

# [鐵人賽 2022-擊敗前端面試大作戰] Typescript narrowing and Type guard

這是 TS 系列的最後一篇文章，今天我們會來討論 Typescript narrowing 跟 type guard!

## 什麼是 type guard 跟 narrowing?

```js
function example(input: string | boolean) {
  console.log(input.length); // 這裡會報錯，Property 'length' does not exist on type 'string | boolean'.
}
```

我們先來看看上面的程式碼，在`input.length`的地方會報錯，原因是因為我們的 input 有可能會是 string 或是 boolean，但是`.length`的方法只有 string 有，boolean 沒有這個方法，所以就報錯了！如果讀者有看過我們前一篇的 generics 文章的話，應該記得我們也有遇到類似的問題，那時候我們的解決方法是用`extends`來給予 generics 更嚴格的 type，而在這裡我們可以用一個叫做 type guard 的程式碼來解決這個問題。我們看下面的程式碼：

```js
function example(input: string | boolean) {
  if (typeof input === "string") {
    console.log(input.length);
  }
}
```

[範例](https://codesandbox.io/s/determined-leftpad-yhn1in)

我們用一個 if 條件句讓 if 條件句裡面的程式碼只有 input 是 string 的情況下才會被執行到。這段`typeof input === "string"`條件我們就稱它為 type guard，而整個透過 type guard 把 type 限制在更嚴苛 type 的行為我們就稱它為 narrowing。了解這兩個的意思之後，我們來看幾個 TS 的 narrowing 方法。

## `typeof` type guard

對 JS 熟悉的朋友應該對 typeof 不會陌生，typeof 可以分別出以下幾種 type:

```js
"string";
"number";
"bigint";
"boolean";
"symbol";
"undefined";
"object";
"function";
```

我們只要把`typeof` type guard 放在 if 條件句中，就可以做到 narrowing 摟！

我們回來看看剛剛的這個 function，這時候我們如果把箭頭移動到 input 上，typescript 會整理判定 input 的 type 呢？讀者可以猜猜看！

```js

function example(input: string | boolean) {
  if (typeof input === "string") {
    return ...
  }
  console.log(input)
}
```

答案是 Typescript 會判定 input 為 boolean！因為 input 為 string 的情況已經在剛剛的 type guard 中 return 了，而這個透過各個程式碼的能不能被觸及到的 Typescript 功能就叫做----**Control flow analysis**。因為這個重要的功能，我們可以用它來處理現實中其他更為複雜的情況！

## type predicates

另外一種更為"暴力"的 narrowing 方式，叫做 type predicates，就是主動的去給變數 type，我們一樣舉上面的例子，在這裡我們不用到 type guard，我們只要斷言 input 是什麼 type，它就會是什麼 type。

```js
function example(input: string | boolean) {
      console.log((input as string).length);
  }
```

今天大概的介紹了 narrowing 和 type guard！TS 系列只有短短的四篇的篇幅，完全無法去討論全部 TS 的功能，其他就等待讀者去自己閱讀摟！

面試題：

1. 什麼是 type guard?
2. 什麼是 narrowing?
3. 什麼是 Control flow analysis？
4. 什麼是 type predicates?

---

```js
有打錯或是問題，非常歡迎在下面留言討論！
```

> 也可以追蹤我的[medium](https://medium.com/@bywater529)，裡面不定期會寫一些最近在研究的東西或是想法！
