---
sidebar_position: 6
---

# [others] CSS trivia

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

#### 什麼是 box-sizing:border-box?

設定 box-sizing:border-box 不用再去計算實際的 width/height，因為 width/height 會設定為 border-box，代表 padding 會往 border-box 裡面長，margin 則會往外長，width/height 不會因此而改變。

將 box-sizing 設定成 border-box 後， width / height 的作用範圍就是指到 border 這個 box 的範圍了，我們就稱為 border-box，從前面所寫的可以了解一個物件的範圍，是由四個層層包裹的矩形所構成，此時 width 所作用的 box 就是 border 這個範圍了，如下圖所示(圖片取自 Chrome DevTools)

#### css position?

#### css flex?

#### css grid?

[Grid 介紹](https://www.casper.tw/css/2017/03/22/css-grid-layout/)

---

Resources:

https://ithelp.ithome.com.tw/articles/10252827
https://zh-tw.learnlayout.com/box-sizing.html
