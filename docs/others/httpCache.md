---
sidebar_position: 19
---

# [others] Http cache

## 什麼時候需要用到 http cache

閱讀資源：

- https://web.dev/http-cache/
- https://blog.techbridge.cc/2017/06/17/cache-introduction/
- https://juejin.cn/post/6844903838768431118
- https://pjchender.dev/webdev/note-http-cache/
- https://www.explainthis.io/zh-hant/interview-guides/browser/http-caching

緩存的適用情況：

- 不經常更改的資源，如圖像、視頻和樣式表等，緩存這些靜態資源有助於加快頁面加載速度和減少服務器負載。
- 生成成本較高的資源，如需要在服務器上花費較長時間才能生成的資源，緩存響應可以減少生成同一資源所需的時間和資源。
- 不涉及用戶個性化信息的資源，如公司標誌或頁面頁腳等，可以緩存並提供給所有用戶。
- 不包含敏感信息的資源，如公共博客文章，可以緩存而不會影響安全性。
- 安全可緩存的資源：安全可緩存的資源指的是不會意外更改的資源。例如，基於當前時間生成的資源不適合緩存，因為每次請求時都會不同。
