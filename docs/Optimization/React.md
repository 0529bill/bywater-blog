---
sidebar_position: 2
---

# [Optimization] React optimization

## 優化工具

### React profiler

:React profiler 會去計算 React 網頁中每個元件 render 的原因跟花費的時間，並且提供 ranked, chart 來直觀地顯示效能瓶頸。

教學資源：  
https://juejin.cn/post/7008337341634854942

## 優化方法

### lazy loading

React 提供的動態載入，只有在使用到該程式碼的 bundle 才會被載入，如果還沒載入完成的話會先顯示<suspense>中的 fallback

```js
import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

### Image lazy loading

https://stackoverflow.com/questions/58352168/implementing-lazy-loading-of-image-using-styled-components
