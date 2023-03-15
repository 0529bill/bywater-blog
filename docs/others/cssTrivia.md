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

### box model (盒模型)

由外到內分別為 margin > border > padding > content  
:box model(盒模型)為 css 中的佈局模型。

box model explain
https://www.oxxostudio.tw/articles/202008/css-box-model.html

margin(元素外擴展) vs padding(元素內擴展)
https://ithelp.ithome.com.tw/articles/10205322

什麼是 box-sizing:content box?為什麼需要設 box-sizing:border-box?

#### 什麼是 box-sizing:border-box?

設定 box-sizing:border-box 不用再去計算實際的 width/height，因為 width/height 會設定為 border-box，代表 padding 會往 border-box 裡面長，margin 則會往外長，width/height 不會因此而改變。

將 box-sizing 設定成 border-box 後， width / height 的作用範圍就是指到 border 這個 box 的範圍了，我們就稱為 border-box，從前面所寫的可以了解一個物件的範圍，是由四個層層包裹的矩形所構成，此時 width 所作用的 box 就是 border 這個範圍了，如下圖所示(圖片取自 Chrome DevTools)

### BFC（Block Formatting Contexts）

:W3C 規範中的一個概念，簡單來說具有 BFC 特性的元素可以看做是隔離了的獨立容器，容器裡面的元素不會在佈局上影響到外面的元素。

解決問題：

元素間的 margin collapsing(外邊距重疊)問題

解決方法：

#### 觸發 BFC 的條件

根元素或其它包含它的元素
浮動元素 (元素的 float 不是 none)
絕對定位元素 (元素具有 position 為 absolute 或 fixed)
內聯塊 (元素具有 display: inline-block)
表格單元格 (元素具有 display: table-cell，HTML 表格單元格默認屬性)
表格標題 (元素具有 display: table-caption, HTML 表格標題默認屬性)
具有 overflow 且值不是 visible 的塊元素
彈性盒（flex 或 inline-flex）
display: flow-root
column-span: all

https://codesandbox.io/s/crazy-paper-8imk9f?file=/src/App.js  
https://stackoverflow.com/questions/19718634/how-to-disable-margin-collapsing

閱讀資料：  
https://yachen168.github.io/article/Block-formatting-context.html

### css layout

#### position fixed

- positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled
- 直接參考 viewport 的空間

#### position absolute

- positioned relative to the nearest positioned ancestor.
- 會從資料流中抽離，自己獨立一個層，並參考父層空間作為定位的空間，也代表後面的 UI 有可能會覆蓋到被設定 absolute 而脫離的資料流中的 UI
- 元素的 position 設定 absolute 後，它就會往外層的元素找是否有 position:relative | absolute | fixed | inherit(若繼承的是前面 3 個之一)的元素，若是都沒有，就會以該網頁頁面(`<body>`)的左上角為定位點。

https://ithelp.ithome.com.tw/articles/10253500  
https://ithelp.ithome.com.tw/articles/10212202

#### position relative

- relative 所參考的空間是物件本身位於資料流內的原始位置，但是可以設定距離母層的 right, left 等位置

#### css display

`inline`

- 排列成 inline 樣式
- width, height 皆無效
- default inline: `span`,`a`, `img`

`inline-block`

- 排列成 inline 樣式，但是可以操控 width, height

`block`

- 排列成 block 樣式
- 常見 block 樣式：`div`,`h1`, `p`, `li`, `section`

##### display: inline-block vs block?

1. display: inline-block allows to set a width and height on the element.
2. with display: inline-block, width, height and padding are respected,

https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block

### css flex?

[flex 教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

#### flex:1 ?

TL;DR

flex:1 等於

```js
flex-grow : 1;
flex-shrink : 1;
flex-basis : 0;
```

https://www.51cto.com/article/683878.html

#### css grid?

[Grid 介紹](https://www.casper.tw/css/2017/03/22/css-grid-layout/)

#### CSS grid vs CSS flexbox?

CSS Grid 是一個二維佈局系統，允許你在一個網格中定義兩個維度的大小(ex, 行和列)，以創建複雜的佈局。它提供了對佈局的位置和大小的控制，包括創建重疊元素和控制項目沿著兩個軸的對齊方式。CSS Grid 非常適合創建需要精確和可適應的複雜佈局，例如雜誌式佈局或數據表格。

而 Flexbox 則是一個一維佈局系統，代表一次只能控制一個維度(ex, 行)，用於沿著單個軸（水平或垂直）排列項目。它設計用於更靈活和簡單的佈局，不需要複雜的定位。Flexbox 尤其適用於創建需要根據不同的屏幕尺寸調整的響應式佈局，例如導航菜單、卡片佈局和可彈性調整的內容容器。

## CSS 套件

### CSS-in-JS

#### styled-components

pros:

1. 避免汙染全域 CSS：生成唯一的 class 名，避免汙染全域 CSS。
2. autoprefixer: 自動產生瀏覽器兼容性前綴。
3. 用 props 做 dynamic styling

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

1. 樣式代碼與 JS 代碼分離，代碼會相對簡潔樣式
2. 只是在 CSS 基礎上加入了局部作用域跟模塊以來，代碼相對規範

cons

1.  CSS Modules don’t accept props.

https://juejin.cn/post/7030349710023983117

### visibility:hidden vs display:none

總之，display: none 和 visibility: hidden 之間的主要區別在於前者完全從文檔流中刪除元素，而後者隱藏元素但仍使其保留在文檔流中，佔據空間並影響佈局。

### 偽元素 vs 偽類

偽元素：a css pseudo-element is used to style specified parts of an element.
ex, ::first, ::before

偽類：a css pseudo-class is used to define a special state of an element.
ex, :hover, :active, :visited

https://medium.com/@bywater529/css-%E5%81%BD%E5%85%83%E7%B4%A0%E8%88%87%E5%81%BD%E9%A1%9E-3224b58a8202

### css combinators 用法

https://www.w3schools.com/css/css_combinators.asp

#### + （select element immediate after)

#### ~ (select element behind it)

https://stackoverflow.com/questions/6910049/on-a-css-hover-event-can-i-change-another-divs-styling
https://stackoverflow.com/questions/10782054/what-does-the-tilde-squiggle-twiddle-css-selector-mean

---

Resources:

https://zh-tw.learnlayout.com/frameworks.html
https://ithelp.ithome.com.tw/articles/10252827
https://zh-tw.learnlayout.com/box-sizing.html
