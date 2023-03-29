---
sidebar_position: 9
---

# [others] packages

### dev dependencies vs dependencies

A dependency is a library that a project needs to function effectively. DevDependencies are the packages a developer needs during development.

### vite

#### vite basics

解決問題： 傳統的打包工具（webpack) can often take an unreasonably long wait (sometimes up to minutes!) to spin up a dev server, and even with Hot Module Replacement (HMR), file edits can take a couple of seconds to be reflected in the browser.

解決方法： 把 file 分成 Dependencies 和 Source code  
Dependencies: 這裡指的是套件，會用 esbuild(用 go 所寫成的高速打包工具)來 pre-bundle。
Source code：這裡指的是專案中的程式碼，因為會有大量變動並且含有 JSX, CSS 等不同 components，所以使用瀏覽器原生的 ES module(優點是 code splitting，只有用到的 file 才會被使用)

讓程式碼在 development 階段可以快速的 HMR 和 load。

與 webpack 比較：

打包比較：
webpack 雖然支援 import export 寫法，但是底層還 webpack 底層會把 import, export 轉成 CommonJS 然後還要去分析所以套件的相依性等等，最後把整個專案打包在一起。
相反的，vite 使用原生的 ESM，把這些都丟給瀏覽器處理，並且只有用到的 file 才會被解析到，所以少了打包的時間讓整體才 hot reload 的速度快上很多！

vite 缺點：  
雖然 vite 在 development 時很好用，但是因為 vite 使用的 ES module 還不夠成熟到可以完美得處理大量 nested import 的情況，所以 vite 選擇繼續在 production 時使用傳統的 bundle 方法，並且在 bundle 工具上沒有使用 development 中所使用的 ES build 而是用 rollup，原因是因為 ES build 在 production 階段時還沒辦法做到像是 code-splitting and CSS handling 等等事情！

資源:  
https://vitejs.dev/guide/why.html
https://github.com/aszx87410/blog/issues/61

在 production 階段，vite 還是使用 bundle 的方法（rollup)，原因是因為 ES module 會因為 nested imports 而造成多餘的 network request 等問題。

Resources:  
https://vitejs.dev/guide/why.html

#### vite react-ts 中的 tsconfig.node.json 文件

介紹： https://juejin.cn/post/7126043888573218823

### vitest

#### 推薦閱讀文章

Jest 迁移到 Vitest 指南:  
https://juejin.cn/post/7093872789337145380

vitest compares to other testing frameworks:  
https://vitest.dev/guide/comparisons.html

vitest vs jest benchmark:  
https://dev.to/mbarzeev/from-jest-to-vitest-migration-and-benchmark-23pl

https://pjchender.dev/npm/note-vite-vitest/

#### vitest 中的 c8 覆蓋率含義

- 行數覆蓋率（line coverage）：以行數為單位來計算。
- 函式覆蓋率（function coverage）：以內部的函式為單位來計算。
- 分枝覆蓋率（branch coverage）：以每個判斷式為單位來計算。
- 語句覆蓋率（statement coverage）：以每個語句（statement）為單位計算。
  https://ithelp.ithome.com.tw/articles/10309187?sc=iThelpR
