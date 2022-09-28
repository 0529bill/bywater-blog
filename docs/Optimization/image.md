---
sidebar_position: 2
---

# [Optimization] 圖片優化

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
