---
sidebar_position: 22
---

# [鐵人賽 2022-擊敗前端面試大作戰] Image ant text optimization

今天要來針對昨天討論到 core web vital 的優化方法做更深入的討論！記得昨天討論到 Largest Contentful Paint(LCP)，然後我們有講到要解決 LCP 的一個方法就是假如畫面中有大型照片的話可以使用畫面優化來減少 LCP 的數字！今天就會針對照片的優化來討論！

1. preload
2. 使用合適的圖片格式
3. 用 image CDN
4. 線上壓縮圖片

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

## 使用合適的圖片格式

第二個圖片優化的方法就是去看我們使用的我們使用的圖片格式是什麼，然後看能不能透過更改格式的方式來達到圖片的優化。首先我們先來介紹常見的圖片格式，圖片格式可以分成兩類，一種是 Vector graphics(向量圖檔)，另外一種則是 Raster graphics(點陣圖檔)。Raster graphics 的優點是他的色彩顯示畫質很精細，但是他在放大時畫面會變模糊，常見的 Vector graphics 包含 GIF、JPEG、PNG，而 Vector graphics 的優點是它在放大縮小時都會保持一樣的銳利度，而且他的檔案大小非常小，缺點是其不適合用在色彩鮮豔的圖片。常見的 Vector graphics 有 SVG。

|                 |    常見格式    |                                                                                                                                                                優點 |                               缺點 |
| :-------------- | :------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------: |
| Vector graphics |      SVG       | 1. 可擴展性，代表檔案不管放大或是縮小都會保持一樣的銳利度。2. 檔案小 3. 適合用在圖案是簡單幾何圖形或是文字。4. 以上幾點，適用用在小的圖片上，像是用在網頁的 logo 上 | 不適合用在顏色鮮豔、圖案複雜的照片 |
| Raster graphics | GIF, JPEG, PNG |                                                                                                                                                      色彩顯示更精細 |               放大時，畫面會變模糊 |

通常前端在處理圖片時，很多時候是在處理 GIF、JPEG、PNG 等等格式的圖檔，這裡我們就這幾種來優缺利弊分析一下，這樣我們下次前端處理圖檔時，就可以把耗費資源的圖片格式改成檔案較小的格式來優化 LCP 摟！

|      |     支援度     | 檔案大小 |                                           畫面 |
| :--- | :------------: | -------: | ---------------------------------------------: |
| PNG  |       高       |       大 |           支援透明度，不失真壓縮所以畫面品質高 |
| JPEG |       高       |       中 | 不支援透明度，使用失真壓縮所以導致畫面品質降低 |
| WebP | 主流瀏覽器支援 |       小 |                         支援透明度，畫面品質高 |
| AVIF | 少數瀏覽器支援 |       小 |                         支援透明度，畫面品質高 |

接下來我們會介紹用 CDN 的方式來優化 image

## image CDN

Image CDN 是一種網路服務，它主要的功能是圖片的轉換與優化的服務，我們預先把照片儲存在我們自己架設或是供應方提供的 server 裡，然後只要在需要用到的時候再去 call api 去拿這個照片就好了！

透過從 CDN 存取圖片的方式，我們可以不用在本地端儲存圖片，來減少前端檔案的大小，進而讓網頁可以跑更快！

### 使用 image CDN 的方法

- 自己架設 image CDN，透過 [thumbor](https://github.com/thumbor/thumbor)
- Image CDN 服務提供者，常見的包含 [cloudinary](https://cloudinary.com/)、[cloudflare](https://www.cloudflare.com/cdn/)等

## 線上壓縮圖片

最後一個我們介紹來優化圖片的方法是線上圖片壓縮器！做法是先透過線上圖片壓縮器把圖片檔案壓縮過後，再把他存到程式碼裡！
我推薦以下這兩個壓縮網站。

https://compressor.io/
https://tinypng.com/

&nbsp;

額外補充 image 常見的問題

1. 如何作出響應式 image

- 用`srcset`來做響應式 image

這裡推薦一個很棒的`srcset`[教學](https://shubo.io/responsive-image/#%E7%82%BA%E5%9C%96%E7%89%87%E6%8C%87%E5%AE%9A%E5%A4%A7%E5%B0%8Fsizes-%E5%B1%AC%E6%80%A7)

- 手寫 function，在不同視窗大小載入不同大小的 image

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

2. 圖片很大跑不出來，或是間隔很久才跑出來？

除了上面幾個讓圖片縮小的方法，也可以透過 progressive image 來增加使用者的體驗。progressive image 的想法是先載入一個檔案比較小的同一個 image，然後再載入大的 image，這樣使用者就不會有很長的沒有圖片的空檔，下面推薦一個不錯的學習資源。

[progressive image](https://blog.logrocket.com/progressive-image-loading-react-tutorial/)

&nbsp;

面試題:

1. 圖片優化方法？
2. 圖片在 loading 很慢跑不出來的時候要怎麼處理？

https://medium.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/%E5%8A%A0%E9%80%9F%E7%B6%B2%E7%AB%99%E6%95%88%E8%83%BD-%E4%BE%86%E7%90%86%E8%A7%A3%E5%9C%96%E7%89%87%E7%9A%84%E5%84%AA%E5%8C%96%E5%90%A7-b3eea3d0296c

https://www.cythilya.tw/2018/08/24/responsive-images/
https://web.dev/optimize-vitals-lighthouse/
https://juejin.cn/post/6844904024165056525
