---
sidebar_position: 3
---

# [Optimization] 實際工作優化經驗

優化方法：

目標： 解決 bundle size 太大得問題

工具： vite-bundle-analyzer

- 可視化 bundle size

1. rollup up manualChunks
   把 bundle size 太大的套件切分成小的 chunk

2. React lazy load
   初步的 lazy loading 從 routes 開始，在 routes 的部分新增 react lazy load。
