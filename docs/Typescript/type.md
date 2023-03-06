---
sidebar_position: 2
---

# [Typescript]

## unknown vs any

unknown 和 any 都用在不確定型別的時候，但是 unknown 是比較安全的，因為 unknown 只能賦值給 unknown 或 any，而 any 可以賦值給任何型別。ㄋ

```js
let vAny: any = 10; // We can assign anything to any
let vUnknown: unknown = 10; // We can assign anything to unknown just like any

let s1: string = vAny; // Any is assignable to anything
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method(); // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable
```

https://stackoverflow.com/questions/51439843/unknown-vs-any

## `as` pros and cons

優點：

- 很好用，可以直接 assert type 給變數

缺點:

- 如果 assert 錯誤的 type，會導致接續的 type 都賦予錯誤的 type
