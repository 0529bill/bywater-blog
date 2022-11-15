---
sidebar_position: 1
---

# [Optimization] Basics

優化好文：

1.[騰訊優化分享](https://juejin.cn/post/6994383328182796295)

## 前端 CoreWebVital 優化

https://gcdeng.com/blog/a-guidebook-to-optimize-web-vitals

- 優化 fonts  
  https://web.dev/optimize-webfont-loading/
- 優化 Critical Rendering Path  
   https://web.dev/critical-rendering-path/
  https://medium.com/swlh/critical-rendering-path-in-react-the-important-yet-overlooked-performance-metric-32f6bb18869c
  https://tcssh611503.medium.com/%E7%B6%B2%E7%AB%99%E5%89%8D%E7%AB%AF%E6%95%88%E8%83%BD%E5%84%AA%E5%8C%96-performance-optimize-%E7%9A%84%E6%96%B9%E6%B3%95-ec9b05804547

## social media tag for twitter/fb

功能：在 social media 中貼上連結時可以顯示圖片跟文字

```js

    {/* OpenGraph tags */}
      <meta name="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:type" content="website" />
      <meta name="fb:app_id" content={facebook.appId} />
      {/* Twitter Card tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
      />

```

**在 react 中可以用 react-helmet(https://www.npmjs.com/package/react-helmet)**

https://edwardbeazer.com/social-meta-tags/
