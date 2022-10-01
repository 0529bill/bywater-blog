---
sidebar_position: 18
---

# [鐵人賽 2022-擊敗前端面試大作戰] Typescript Generics and Utility types

昨天講到了 Typescript 基本的幾個 type，在普通的場景中使用那幾個 type 就夠用了。但在實際應用上時，有時候懷是會遇到昨天講的 type 無法解決的情況，這時候我們就可以用到 Typescript 所提供的兩個工具--Generics 和 Utility types 了！

## Generics

想像一下，如果今天我們要寫一個共用元件，共用元件的傳入值跟傳出值會是同個型別，但是不限單一型別，代表他可能輸入值是 string 輸出值也是 string，或是輸入值是 number 輸出值也是 number，像是下面的例子，

```js
 function doSomething(input) {
  ...做計算
  return result
}
```

然後回傳成下面的樣子，

```js
 doSomething('name') => 回傳string
 doSomething(123) => 回傳number

```

這時我們要如何把 doSomething 改寫成 Typescript 呢？
如果把每個 type 都寫出來那太麻煩了，這時候就可以用到 generics ！

generics 的語法長這樣，`<T>`，然後在中間慣例上會是一個英文大寫字母，代表任意值。

```js
//全部type都寫出來的寫法
 function doSomething(input: string | number) :string| number {
  ...做計算
  return result
}

```

```js
//用generics寫出input跟return type的寫法。
 function doSomething<T>(input: T):T {
  ...做計算
  return result
```

```js
//使用方法
doSomething<number>(10);

//input 值要是 number，並且回傳值也要是 number，不然就會報錯。
```

但是doSomething還有一個更簡便的寫法，記得我們昨天提到的 type inference 嗎？Typescript 其實很聰明的，不用寫別寫出 type 他也可以依據傳入的值來判別出 T 應該要是什麼，所以這裡其實可以直接寫`doSomething(10)`就可以了！

那我們再來看另外一個例子，假如現在我們有一個 array 的共用 function，function 裡面有一個簡單的 array.length，然後你會發現 length 就報錯了。。。

```js
function arrayMethod<T>(array: T): T {
  console.log(array.length); //length會報錯: Property 'length' does not exist on type 'T'.
  return array;
}
```

[範例](https://codesandbox.io/s/festive-nobel-m5joc1)

仔細想一下應該會發現，因為 T 可能是任何型別，所以 Typescript 當然無法確定所有帶入的型別都有 length 這個 method，所以就報錯了！這時候就要用到 Typescript 的另外一個 keyword 叫做`extends`，**透過`extends`我們可以給予 generics 更嚴格的規範**，來解決上面的問題，下面看例子。

[範例 1](https://codesandbox.io/s/delicate-thunder-9j81rt)

```js
 function arrayMethod<T extends string | number[]>(array: T): T {
    console.log(array.length); //length不會報錯
    return array;
  }

```

透過 `extends`，我們限制 T 的 type 只能是 array，因此就不會報錯了！

到這裡我們來整理一下 generics 所做的事：

1. generics 可以達到共用元件的功能，他的語法長這樣`<T>`。
2. 透過`extends`，可以給予 generics type 更嚴格的限制，來解決可能報錯的問題。

在了解 generics 後，下面我們會繼續去講 Typescript 另外一個很好用的功能，就是 utility type。我會挑幾個常用的分享，對其他有興趣的讀者可以來[官網](https://www.typescriptlang.org/docs/handbook/utility-types.html)看全部的 Utility Type 喔！

## Utility type

### Record<Keys, Type>

第一個要介紹的是 Record<>，它用在組建重複性的 object 上。什麼是重複性的 object 呢？我們下面看例子：

```js
const person = {
  harry: { age: 10, gender: "male" },
  amy: { age: 5, gender: "female" },
  justin: { age: 16, gender: "male" },
};
```

Record 第一個值代表的是 Object 的 key，第二個值是 Object 中的 value! 我們回到上面的例子，這三個人的 values 都是固定的，假如這個 list 上面有一百人，那要一直重複寫`{age: number, gender: string}`實在是會很麻煩啊！這時候我們可以用 Record 來解決這個問題。

```js
interface PersonInfo {
  age: number;
  gender: string;
}

type PersonName = "harry" | "amy" | "justin";

const person: Record<PersonName, PersonInfo> = {
  harry: { age: 10, gender: "male" },
  amy: { age: 5, gender: "female" },
  justin: { age: 16, gender: "male" },
};
```

這樣程式碼是不是就簡潔很多了！

### Readonly<Type>

Readonly 可以把值設定為已讀，並且任何改變的操作都會報錯！

```js
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "My todo",
};

todo.title = "Hi!";
//報錯！！！
```

這時候讀者可能會有疑惑了，那 readonly 跟 const 有差別嗎？能不能用 const 就好?
答案是這兩者其實是有差的！ 首先，const 是在 run-time 做檢查，readonly 是在 compile time 做檢查。第二點是，const 有一個問題是雖然不能再賦值，但是 object 的改變還是可以的。

```js
const Arr = [1, 2, 3];

Arr[0] = 10; //OK
Arr.push(12); // OK
Arr.pop(); //Ok
```

這樣我們還是有可能會不小心改到 const 的值。相反的，使用 readonly，這樣改變也會報錯，就可以確保我們不會不小心改到 readonly 的值。

```js
const Arr: Readonly<number[]> = [1, 2, 3];

Arr[0] = 10; //error
Arr.push(12); // error
Arr.pop(); //error

Arr = [4, 5, 6]; //error
```

[Readonly 範例](https://codesandbox.io/s/loving-merkle-w75mjs)

那以上就是 Generics 跟 Utility types 的介紹，希望對大家有幫助，明天會繼續講 Typescript 的 narrowing，那就明天見啦！

---

Resources:

https://www.typescriptlang.org/docs/handbook/utility-types.html
