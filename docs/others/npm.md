---
sidebar_position: 5
---

# [others] npm, yarn & pnpm

## 使用 pnpm

1. homebrew 下載
2. 刪除專案中的 node_modules
3. pnpm install

#### pnpm 下載報錯 "hint: If you want peer dependencies to be automatically installed, set the "auto-install-peers" setting to "true"."

解決方法：

```js

//global
pnpm config set auto-install-peers true
```

```js
//專案中
1. 新增 .npmrc file
2. 加上 `auto-install-peers = true`

```

#### Install libraries with NPM or import from CDN?

TL;DL

npm advantage:

1. Webpack, babel, rollup ...allows you to bundle all your files (can tree shape/code split/ import specific file from a library...etc)
2. npm, yarn lock file (solve dependency problem)

Resources:  
https://stackoverflow.com/questions/69791670/install-libraries-with-npm-or-import-from-cdn

#### --legacy-peer-deps

https://blog.poychang.net/npm-install-with-legacy-peer-deps/
