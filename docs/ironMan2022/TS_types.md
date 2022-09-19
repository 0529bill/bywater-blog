---
sidebar_position: 16
---

# [鐵人賽 2022-擊敗前端面試大作戰] Typescript Basics?

嗨大家好，我是 bywater，今天會來講到 Typescript 的基礎型別。

## Primitive Types

```js
//string

const a: string = "A";

//number
const a: number = 10;

//boolean
const a: boolean = false;
```

**注意：string, number, boolean 都是小寫，而不是大寫！！**

## Object

Array 直接標記的顯示方法有以下兩種方式：

```js
//array有兩種顯示方法

const a: number[] = [1, 2, 3];

const a: Array<number> = [1, 2, 3];
```

**以上兩種都代表，array 裡面只有 number，所以如果你的 array 長這樣[1, 'haha']是會報錯的，因為這個 array 裡面有 string 也有 number。**

## any

any，故名思意可以用在任何地方，代表任何 type。

但我覺得使用`any`就失去使用 Typescript 的意義了！因此我建議不要使用`any`並且設定`noImplicitAny`在 tsconfig 設定檔裡，來避免誤用`any`的狀況出現！！

## function

function 在 typescript 中，我們可以給予其傳入值跟 return 值的 type。

以下面舉例，我們先訂出 input 的 type，也就是 number，然後再給予他回傳(return)的 type，也就是 string。

```js
//function
function a(input: number): string {
  return "correct";
}
```

配上上面的 object 顯示方式，我們在輸入值是 object 的 function 中，可以做以下的顯示

```js
function a(input: { first: string, second?: string }): string {
  return "correct";
}
```

細心的朋友就會發現，為什麼第二個傳入值 second 後面有一個問號，那其實代表的是**非必填的值**，代表 second 這個值不一定會傳入！

**注意：如果沒有加上問號符號，又沒有傳入 function 的話，typescript 可是會報錯的喔！**

另外一個要注意的點是，如果傳入的值是**非必填的值**，那在使用時必須先 check 該值不是 undefined，不然也會因為其值有可能是 undefined 而報錯喔！

```js
function a(input: { second?: string }): string {
  console.log(input.second);
  return "correct";
}
a();
//Object is possibly 'undefined'.
```

看完上面的 type 之後，很多的地方都可以使用了，但現在情況當然不會那麼剪簡單，我們會遇到 type 有多個可能性的狀況。像是下面的例子，input 傳入值有可能是 number 或是 string，這時候**Union type (|)**就派上用場了！**Union type**代表值可能是多種可能。：

```js
function a(input: number | string) {
  console.log(id);
}
```

但又會遇到新的問題，假如我們要使用 string 獨有的功能，程式碼就會報錯了。。。像是下面的例子，因為 typescript 會去檢查 Union type 裡面的各個 type 是否都符合使用的情境，而 number 沒有 toUpperCase 所以才會報錯！

```js
function a(input: number | string) {
  console.log(id.toUpperCase());
}
```

這時候就要用到另外一個技巧叫做`narrowing`，就是用把 type 的範圍縮小的方式，來確定使用情境下的 type 是正確的，就不會報錯了！！像是下面用 if statement 確定傳入的會是 string 才會去跑 toUpperCase，這樣就不會有值是 number 的時候，去跑 toUpperCase 的情況了！typescript 也終於滿意，不會再報錯摟！！

```js
function a(input: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
}
```

## type inference

```

```
