---
sidebar_position: 5
---

# [JS-Basics] Common Js method/function

### debounce

```js
function debounce(func, delay) {
  let timeout = null;
  return function (...args) {
    let context = this;
    //綁定在傳進來的func上
    clearTimeout(timeout);
    //清除掉前一個timeout

    timeout = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}
```

usage: input searchBox => 減少使用者在 input 裡面打字時的動作（ex, api call），在 onChange 停止後等待 setTimeout 過後才會 fire 想要做的動作。

https://webdesign.tutsplus.com/tutorials/javascript-debounce-and-throttle--cms-36783
https://blog.bitsrc.io/what-is-debounce-in-javascript-a2b8e6157a5a
https://codesandbox.io/s/musing-grothendieck-4irboh?file=/src/index.js

---

### throttle

用途: 畫面 scrolling 時透過 throttle 來避免一次大量 scroll event

```js
function throttle(func, delay) {
  let inThrottle;
  let timeout = null;
  return function (...args) {
    let context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        inThrottle = false;
      }, delay);
    }
  };
}
```

```js
//using arrow function

let throttlePause;

const throttle = (callback, time) => {
  //don't run the function if throttlePause is true
  if (throttlePause) return;

  //set throttlePause to true after the if condition. This allows the function to be run once
  throttlePause = true;

  //setTimeout runs the callback within the specified time
  setTimeout(() => {
    callback();

    //throttlePause is set to false once the function has been called, allowing the throttle function to loop
    throttlePause = false;
  }, time);
};
```

https://ithelp.ithome.com.tw/articles/10222749
