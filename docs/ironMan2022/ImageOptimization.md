---
sidebar_position: 22
---

# [鐵人賽 2022-擊敗前端面試大作戰] Image ant text optimization

preload??
Preload should be used sparingly.
https://web.dev/optimize-vitals-lighthouse/

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

```js
function returnImgResponsiveSrcSet(
  image1x,
  image2x = image1x,
  image3x = image2x
) {
  const windowWidth = window.innerWidth;
  switch (true) {
    case windowWidth >= 1440:
      return image3x;
    case windowWidth >= 1080:
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
