---
sidebar_position: 5
---

# [others] npm, yarn & pnpm

### npm, yarn vs pnpm

- npm, yarn => flat node_modules structure
  缺點：

  - flat dependencies algorithm 耗費下載時間(速度慢、花費過多 disk 空間)

- pnpm => 把 package 儲存在 disk 中的 store，在專案中透過 link 來連結到 store 中的 package

TL;DR;

pnpm 比 npm, yarn 還快，並且花費更少的 disk 容量。

## pnpm

### 使用 pnpm

1. homebrew 下載
2. 刪除專案中的 node_modules
3. pnpm install

### pnpm 下載報錯 "hint: If you want peer dependencies to be automatically installed, set the "auto-install-peers" setting to "true"."

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

## npm

### Install libraries with NPM or import from CDN?

TL;DL

npm advantage:

1. Webpack, babel, rollup ...allows you to bundle all your files (can tree shape/code split/ import specific file from a library...etc)
2. npm, yarn lock file (solve dependency problem)

Resources:  
https://stackoverflow.com/questions/69791670/install-libraries-with-npm-or-import-from-cdn

### --legacy-peer-deps

https://blog.poychang.net/npm-install-with-legacy-peer-deps/
