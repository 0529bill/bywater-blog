---
sidebar_position: 6
---

# [others] CSS trivia

### 至中

https://juejin.cn/post/6844903982960214029

### Specificity 權重

Every CSS selector has its place in the specificity hierarchy.

There are four categories which define the specificity level of a selector:

```js
1. important
2. Inline styles - Example: <h1 style="color: pink;">
3. IDs - Example: #navbar
4. Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [href]
5. Elements and pseudo-elements - Example: h1, :before
```

resources:

https://www.w3schools.com/css/css_specificity.asp

### box model

box model explain
https://www.oxxostudio.tw/articles/202008/css-box-model.html

margin(元素外擴展) vs padding(元素內擴展)
https://ithelp.ithome.com.tw/articles/10205322

### css layout

#### position fixed

- positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled
- 直接參考 viewport 的空間

#### position absolute

- positioned relative to the nearest positioned ancestor.
- 會從資料流中抽離，自己獨立一個層，並參考父層空間作為定位的空間
- 元素的 position 設定 absolute 後，它就會往外層的元素找是否有 position:relative | absolute | fixed | inherit(若繼承的是前面 3 個之一)的元素，若是都沒有，就會以該網頁頁面(<body>)的左上角為定位點。

https://ithelp.ithome.com.tw/articles/10253500  
https://ithelp.ithome.com.tw/articles/10212202

#### position relative

- relative 所參考的空間是物件本身位於資料流內的原始位置

#### 什麼是 box-sizing:border-box?

設定 box-sizing:border-box 不用再去計算實際的 width/height，因為 width/height 會設定為 border-box，代表 padding 會往 border-box 裡面長，margin 則會往外長，width/height 不會因此而改變。

將 box-sizing 設定成 border-box 後， width / height 的作用範圍就是指到 border 這個 box 的範圍了，我們就稱為 border-box，從前面所寫的可以了解一個物件的範圍，是由四個層層包裹的矩形所構成，此時 width 所作用的 box 就是 border 這個範圍了，如下圖所示(圖片取自 Chrome DevTools)

#### css display

##### display: inline-block vs block?

1. display: inline-block allows to set a width and height on the element.
2. with display: inline-block, width, height and padding are respected,

https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block

#### css flex?

#### css grid?

[Grid 介紹](https://www.casper.tw/css/2017/03/22/css-grid-layout/)

## CSS 套件

### CSS-in-JS

#### styled-components

pros:

1. 避免汙染全域 CSS：生成唯一的 class 名，避免汙染全域 CSS。
2. autoprefixer: 自動產生瀏覽器兼容性前綴。

cons:

1. 在 SSR hydration 中要額外去 render ServerStyleSheet，因為 styled-components 是動態的被生成(ex, props)
2. 效能不好（越多 JS，代表要解析越多東西，效能越不好）

#### lineria

pros:

1. 用 CSS-in-JS 的寫法加上 zero runtime（在 build time 建立 css） 來減少 JS 程式碼量，以增加 loading 時間來達到更好的 SEO

資源：

why airbnb switch to linaria  
https://medium.com/airbnb-engineering/airbnbs-trip-to-linaria-dc169230bd12

use lineria with atomic css  
https://github.com/callstack/linaria/blob/master/docs/ATOMIC_CSS.md

https://css-tricks.com/lets-define-exactly-atomic-css/

### atomic css

:把 css 切分，來減少多餘/重複的 CSS。

```js
//before
<style>
  .redButton {
    background: red;
    width: 100px;
  }

  .blueButton {
    background: blue;
    width: 100px;
  }
</style>
<button class="redButton" />
<button class="blueButton" />

```

```js

//after

<style>
  .a {
    background: red;
  }
  .b {
    background: blue;
  }
  .c {
    width: 100px;
  }
</style>
<button class="a c" />
<button class="b c" />
```

網站：https://acss.io/

### 比較

#### CSS-in-JS vs CSS-Module

CSS-in-JS

pros

1. 複用性高
2. 好用,易讀

cons

1. 樣式是和 JS 文件打包在一起，所以會拖慢 JS 文件加載時間
2. 沒有單獨 CSS 文件所以無法緩存

CSS-Module

pros

1. 樣式代碼與 JS 代碼分離，代碼會相對簡潔樣式是和 JS 文件打包在一起，所以會拖慢 JS 文件加載時間
2. 只是在 CSS 基礎上加入了局部作用域跟模塊以來，代碼相對規範

cons

1.  CSS Modules don’t accept props.

https://juejin.cn/post/7030349710023983117

### hamburger

https://codepen.io/designcouch/pen/ExvwPY

---

Resources:

https://zh-tw.learnlayout.com/frameworks.html
https://ithelp.ithome.com.tw/articles/10252827
https://zh-tw.learnlayout.com/box-sizing.html
