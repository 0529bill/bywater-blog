---
sidebar_position: 2
---

# [JS-Basics] Object's method

#### Object's filter

1. Use Object.entries(obj) to get an array of key/value pairs from obj.
2. Use array methods on that array, e.g. map, to transform these key/value pairs.
3. Use Object.fromEntries(array) transforms a list of key-value pairs into an object .

&nbsp;

```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

console.log(doublePrices);
// {banana: 2,orange: 4, meat: 8,}
```

[resources](https://javascript.info/keys-values-entries)
