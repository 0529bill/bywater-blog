---
sidebar_position: 22
---

# [鐵人賽 2022-擊敗前端面試大作戰] Image ant text optimization

今天要來針對昨天討論到 core web vital 的優化方法做更深入的討論！記得昨天討論到 Largest Contentful Paint(LCP)，然後我們有講到要解決 LCP 的一個方法就是假如畫面中有大型照片的話可以使用畫面優化來減少 LCP 的數字！今天就會針對照片的優化來討論！

1. preload
2. 使用合適的圖片格式

## preload 的功能？

preload 是`<link>`裡面的一個 type，它可以告訴瀏覽器該資源需要提早載入，而能夠被 preload 的有 image,audio,style, video 等等。

使用方法

```js
//假設我們有一個img長這樣
<img src="wolf.jpg" srcset="wolf_400px.jpg 400w, wolf_800px.jpg 800w, wolf_1600px.jpg 1600w" sizes="50vw" alt="A rad wolf">

```

```js

//那在 link 裡我們就可以適用 preload 的方式來預先載入該圖片

<link rel="preload" as="image" href="wolf.jpg" imagesrcset="wolf_400px.jpg 400w, wolf_800px.jpg 800w, wolf_1600px.jpg 1600w" imagesizes="50vw">

```

**注意:過度使用 preload 反而會造成冷效果**

圖片單位種類

Vector graphics vs Raster graphics

Raster graphics(點陣圖檔)
GIF, JPEG, PNG

優點:

1. 色彩顯示更精細

缺點:

1. 放大時，畫面會變模糊。

Vector graphics（向量圖檔）
SVG
優點:

1. 可擴展性，代表檔案不管放大或是縮小都會保持一樣的銳利度。
2. 檔案小
3. 適合用在圖案是簡單幾何圖形或是文字
4. 以上幾點，適用用在小的圖片上，像是用在網頁的 logo 上。

缺點:

1. 不適合用在顏色鮮豔、圖案複雜的照片。

GIF, JPEG, PNG

|      |     支援度     | 檔案大小 |                                           畫面 |
| :--- | :------------: | -------: | ---------------------------------------------: |
| PNG  |       高       |       大 |           支援透明度，不失真壓縮所以畫面品質高 |
| JPEG |       高       |       中 | 不支援透明度，使用失真壓縮所以導致畫面品質降低 |
| WebP | 主流瀏覽器支援 |       小 |                         支援透明度，畫面品質高 |
| AVIF | 少數瀏覽器支援 |       小 |                         支援透明度，畫面品質高 |

額外補充一個 image 常見的問題就是 image 畫面模糊這時要做出響應式 image。

`srcset`

這裡推薦一個很棒的`srcset`[教學](https://shubo.io/responsive-image/#%E7%82%BA%E5%9C%96%E7%89%87%E6%8C%87%E5%AE%9A%E5%A4%A7%E5%B0%8Fsizes-%E5%B1%AC%E6%80%A7)

或是也可以手寫一個簡單的響應式 Image 函示，這時候我們只要在使用時，先行帶入多種 image 大小，然後這個 function 就會依照當時的 window 寬度來選擇合適的圖像！

```js
function responsiveImage(image1x, image2x, image3x) {
  const windowWidth = window.innerWidth;
  switch (windowWidth) {
    case windowWidth >= 1800:
      return image3x;
    case windowWidth >= 1440:
      return image2x;
    case windowWidth >= 768:
      return image1x;
    default:
      return image1x;
  }
}
```

https://medium.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/%E5%8A%A0%E9%80%9F%E7%B6%B2%E7%AB%99%E6%95%88%E8%83%BD-%E4%BE%86%E7%90%86%E8%A7%A3%E5%9C%96%E7%89%87%E7%9A%84%E5%84%AA%E5%8C%96%E5%90%A7-b3eea3d0296c

https://www.cythilya.tw/2018/08/24/responsive-images/
https://web.dev/optimize-vitals-lighthouse/
