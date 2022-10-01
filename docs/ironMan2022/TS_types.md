---
sidebar_position: 17
---

# [鐵人賽 2022-擊敗前端面試大作戰] Typescript Basics

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

Object 標記的方法則是如下:

```js
const a: { name: string } = { name: "water" };
```

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

**注意：如果傳入值的標記沒有加上問號符號，結果又沒有傳入該值到 function 的話，typescript 可是會報錯的喔！**

另外一個要注意的點是，如果傳入的值是**非必填的值**，那在 function 內必須 check 該值不是 undefined，不然也會因為其值有可能是 undefined 而報錯喔！這個步驟叫做 narrowing，關於這部分的介紹我們會在後面介紹～

```js
function a(input: { second?: string }): string {
  console.log(input.second); //報錯，因為input可能為空
  return "correct";
}
a();
//Object is possibly 'undefined'.
```

看完上面的 type 之後，大部分的情境上都可以給予變數 type 了。但現實情況當然不會那麼簡單，我們會遇到 type 有多個可能性的狀況。像是下面的例子，input 傳入值有可能是 number 或是 string，這樣的情況下要怎麼標記 input 的 type 呢？

這時候**Union type (|)**就派上用場了！**Union type**代表值可能是多種可能。：

```js
function a(input: number | string) {
  console.log(id);
}
```

但又會遇到新的問題，假如我們要使用 string 獨有的功能，程式碼就會報錯了。。。像是下面的例子，因為 typescript 會去檢查 Union type 裡面的各個 type 是否都符合使用的情境，而 number 沒有 toUpperCase 所以才會報錯！

```js
function a(input: number | string) {
  console.log(id.toUpperCase()); //報錯，因為number沒有toUpperCase的method!
}
```

這時候就要用到剛剛提到的`narrowing`技巧。換句話說就是用把 type 的範圍縮小的方式，來確定使用情境下的 type 是正確的，就不會報錯了！！像是下面用 if statement 確定傳入的會是 string 才會去跑 toUpperCase，這樣就不會有值是 number 的時候，去跑 toUpperCase 的情況了！typescript 也終於滿意，不會再報錯摟！！

```js
function a(input: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
}
```

解決完這些問題後，你以為就完成了嗎？假如我們現在想要復用 type 呢？好險 Typescript 也幫我們想好了，Typescript 提供了幾個復用 type 的方式，來讓 type 可以更有彈性，下面我會介紹幾個常見的，

## Type

用 Type 可以解決重複使用的問題。  
像是下面的 Name type 就都可以使用在 function a 跟 b 上。

```js


type Name = {
    letter: string,
    length: number
}

function a(name: Name) {
   ...省略
}

function b(name: Name) {
   ...省略
}

```

另外一種解決重複使用的方法就是用 Interface! Interface 的語法其實剛 Type 非常類似：

## Interface

```js


interface Name {
    letter: string,
    length: number
}

function a(name: Name) {
   ...省略
}

function b(name: Name) {
   ...省略
}

```

但其實他們還是有差別的！Ｉ

1.  Interface 可以透過`extends`進行擴充，而 type 只能用 Union 或是 Intersection 來重新產生一個新的 Type。

```js
interface Name {
  letter: string;
  length: number;
}

interface newName extends Name {
  age: number;
}
```

Type 透過 Union 或是 Intersection 產生一個新的 Type

```js
type Bear = Animal & {
  honey: boolean,
};
```

2. Interface 可以重複宣告來增加新的 type，Types 不能重複宣告

```js
interface Name {
  letter: string;
  length: number;
}

interface Name {
  age: number;
}
```

```js
type Bear = {
  age: 10,
};

type Bear = {
  gender: male,
};

//報錯
```

綜合這兩個差別我們就可以得知：

Interface: 彈性較大，適合用在功能是可以被重複再利用的地方，或是功能可能會被多方程式碼或第三方套件依賴的地方。  
Type: 比較沒有彈性，適合用在不希望被人擴充、單純想代表一種獨立的靜態資料時。

## type inference

最後我想來講一下 type inference(型別推論)，因為在大部分時間其實我們不用主動做型別註記！！Typescript 很聰明的知道我們宣告的型別是什麼，只有在部份時候當 Typescript 使用 any type 或是報錯的時候，才會需要我們去手動註記！

以上就是最基礎的 Typescript type 的介紹！實際在面試中，比較常被問到的會是 Interface 跟 type 的差別，至於其他基本型別就比較少被問到了，但在實際寫 Typescript 的過程中還是要把這些 type 給記熟的！！！那我們就明天見摟！大家掰掰！

面試題：

1. 什麼是 type inference？
2. TS 的 type 和 interface 的差別？

---

Resources:

https://arc.dev/developer-blog/typescript-interview-questions/
