---
sidebar_position: 9
---

# [JS] Deep copy & Shallow copy

### pass by value, pass by reference

&nbsp;

**Js 資料型別：基本型別（primitives), 物件型別 （object)**

&nbsp;

**Pass by value**: 儲存在 stack

- 基本型別（primitives): Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。

**Pass by references**: 儲存資料所在的位址（reference）在 stack, reference 指向 Heap

- 物件型別（Object): object, array, function

```js
//by reference
//example1
let a = {};
let b = a; // copy the reference

alert(a == b); // true, both variables reference the same object
alert(a === b); // true

//example2
let a = {};
let b = {}; // two independent objects

alert(a == b); // false

//objectData example3
function test(objectData) {
  objectData.number = 10;
  console.log(objectData); // { number: 10 }
}

let a = { number: 5 }; // Object
test(a);

console.log(a); // { number: 10 } => 跟著改變
```

&nbsp;

```js
//primitiveData by value

function test(primitiveData) {
  primitiveData = primitiveData + 5;
  console.log(primitiveData); // 10
}

let a = 5; // Primitive
test(a);

console.log(a); // 5 => 沒被改變
```

&nbsp;

---

&nbsp;

### Deep copy & Shallow copy

&nbsp;

**Shallow copy:**

- spread operator
- Object.assign

```js
let user = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert(user.name); // still John in the original object**
```

```js
Object.assign(dest, [src1, src2, src3...])
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
```

```js
spread operator
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
const newObject = {...user, ...permissions1, permissions2}

console.log(newObject)
// now user = { name: "John", canView: true, canEdit: true }

```

&nbsp;

**Deep copy**

&nbsp;

- JSON stringify + JSON parse

```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user

const newObject = { ...user, ...permissions1, permissions2 };

const deepCopyObject = JSON.parse(JSON.stringify(newObject));

deepCopyObject.canView = false;
console.log(newObject); // // now user = { name: "John", canView: true, canEdit: true }
console.log(deepCopyObject); //  // now user = { name: "John", canView: false, canEdit: true }

// now user = { name: "John", canView: true, canEdit: true }
```

缺點：

1. undefined : 會連同 key 一起消失
2. NaN : 會被轉成 null
3. Infinity :會被轉成 null
4. regExp : 會被轉乘 空 {}
5. Date : 型別會由 Data 轉成 string
6. 無法處理 function

&nbsp;

structuredClone(Node 17):

&nbsp;

```js
const clone = structuredClone(original);
```

&nbsp;

手寫深拷貝  
https://juejin.cn/post/6844903929705136141#heading-6
https://www.programfarmer.com/articles/javaScript/javascript-shallow-copy-deep-copy
