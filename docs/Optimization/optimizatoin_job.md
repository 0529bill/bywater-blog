---
sidebar_position: 3
---

# [Optimization] 實際工作優化經驗

## 目標： 解決 bundle size 太大得問題

工具： vite-bundle-analyzer

- 可視化 bundle size

### 優化方法：

1. rollup up manualChunks
   把 bundle size 太大的套件切分成小的 chunk

2. React lazy loading / routed-based lazy loading
   初步的 lazy loading 從 routes 開始，在 routes 的部分新增 react lazy load。

   **Route-based lazy loading 會導致在路由切換時，有短暫的 loading 時所造成的白頻，這裡就要配合業務邏輯去用 suspense 或是其他來解決**
