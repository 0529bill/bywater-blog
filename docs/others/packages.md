---
sidebar_position: 9
---

# [others] packages

### dev dependencies vs dependencies

A dependency is a library that a project needs to function effectively. DevDependencies are the packages a developer needs during development.

### vite

解決問題： 傳統的打包工具（webpack) can often take an unreasonably long wait (sometimes up to minutes!) to spin up a dev server, and even with Hot Module Replacement (HMR), file edits can take a couple of seconds to be reflected in the browser.

解決方法： 把 file 分成 Dependencies 和 Source code  
Dependencies: 這裡指的是套件，會用 esbuild(用 go 所寫成的高速打包工具)來 pre-bundle。
Source code：這裡指的是專案中的程式碼，因為會有大量變動並且含有 JSX, CSS 等不同 components，所以使用瀏覽器原生的 ES module(優點是 code splitting，只有用到的 file 才會被使用)

讓程式碼在 development 階段可以快速的 HMR 和 load。

#### Production

在 production 階段，vite 還是使用 bundle 的方法（rollup)，原因是因為 ES module 會因為 nested imports 而造成多餘的 network request 等問題。

Resources:  
https://vitejs.dev/guide/why.html
