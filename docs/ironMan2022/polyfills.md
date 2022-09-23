---
sidebar_position: 9
---

# [鐵人賽 2022-擊敗前端面試大作戰] Polyfills and Transpiler

在寫程式時，往往會遇到想要用新的 feature 但是網頁不支援，或是常見的語法但一放到別的瀏覽器上時，就會出錯的情境。今天就是要來介紹兩個可以幫助我們解決這些問題的工具， polyfill 和 Transpiler。

## 什麼是 Polyfill ？

定義：polyfill 能夠產生舊瀏覽器所支援的程式版本，讓舊瀏覽器可以使用新的功能。

舉個例子，如果今天你的瀏覽器不支援`Number.isNan`的語法，那透過下面的 polyfill 我們可以讓該瀏覽器也能夠執行`isNan`的語法!

```js
if (!Number.isNan) {
  Number.isNaN = function isNaN(n) {
    return n !== n;
  };
}
```

當然在實際情況下，polyfill 不會長得這麼簡單，下面是實際的 Array.filter 的 polyfill，大家可以大概看一下～

```js
if (!Array.prototype.filter)
  Array.prototype.filter = function (func, thisArg) {
    "use strict";
    if (!(typeof func === "Function" && this)) throw new TypeError();

    var len = this.length >>> 0,
      res = new Array(len), // 預先配置陣列
      c = 0,
      i = -1;
    if (thisArg === undefined)
      while (++i !== len)
        // 確認物件的鍵值i是否有被設置
        if (i in this)
          if (func(t[i], i, t)) res[c++] = t[i];
          else
            while (++i !== len)
              // 確認物件的鍵值i是否有被設置
              if (i in this)
                if (func.call(thisArg, t[i], i, t)) res[c++] = t[i];

    res.length = c; // 將陣列縮至適當大小
    return res;
  };
//https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
```

常見的 polyfill 套件包含以下這兩個：
[Core-js](https://github.com/zloirock/core-js)  
[Polyfill.io](https://polyfill.io/v3/)

小常識：你知道為什麼這個產生能夠被支援的程式版本的功能叫做 polyfill 嗎？
原因是國外有一款牆面裂縫的補著劑叫做 polyfilla，而國外很有命名天賦的工程師就用 ployfill 來表達用程式碼修補有"裂縫"的程式的行為稱為 polyfill!很有創意吧！

&nbsp;

![polyfill](Img/polyfill.jpg)

&nbsp;

## 什麼是 Transpiler ？

定義：Transpiler 可以解析程式碼，然後重新寫成舊瀏覽器可以理解的程式碼。

常見的 Transpiler 為 babel。

另外就是要確認程式碼倒底在瀏覽器中能不能被資源的工具，常見的有以下幾個：

1. https://kangax.github.io/compat-table/es6/  
   用來查詢 JS 在瀏覽器中的支援度。
2. https://caniuse.com/  
   用來查詢跟瀏覽器相關的 API 支援度。

## 面試題

1. 什麼是 Polyfill? 為什麼需要 Polyfill？
2. 什麼是 Transpiler？Transpiler 舉例？

### Resources

https://javascript.info/polyfills
https://javascript.plainenglish.io/do-you-know-the-differences-between-polyfilling-and-transpiling-17b82e2053f6
https://tc39.es/ecma262/
https://kangax.github.io/compat-table/esintl/
