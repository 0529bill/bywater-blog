---
sidebar_position: 6
---

# [JS] Js types 辨別型別的方法

&nbsp;

- ### `typeof`
  缺點：無法辨別 object, array, null, 因為都會回傳 object.

```js

		typeof string:string
        typeof bool: boolean
        typeof num: number
        typeof undefined: undefined
        typeof function: function
        typeof array: object
        typeof obj: object
        typeof null: object
```

### 解決方法

&nbsp;

- ### `Object.prototype.toString.call()`
  原理：Js 各個 types 都有 `to string` method，用 object's to string 會回傳其 type 的特型來辨別型別。

```js
const dataTypeChecker = (data) => {
  let result = ``;
  const typeString = Object.prototype.toString.call(data);
  result = typeString.replace(/\[object /gi, ``).replace(/\]/gi, ``);
  return result;
};
```

---

# [JS] Js types 辨別空 array, object

```js
Array;

if (Array.length > 0) {
  //not empty
}

Object;

if (Object.keys(object).length > 0) {
  //not empty
}
```

https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
