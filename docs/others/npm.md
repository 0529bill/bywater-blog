---
sidebar_position: 5
---

# [others] npm, yarn & pnpm

### npm, yarn vs pnpm

- npm 2.0 => nested node_modules structure
  缺點：

  - 檔案太大，nested too deep，消耗太多 dist 空間

- npm 3.0 => flat node_modules structure（減少互相依賴）
  缺點：

  - flat dependencies algorithm 耗費下載時間(速度慢、花費過多 disk 空間)
  - 幽靈依賴（因為使用扁平的結構，變成未定義的依賴被拉到第一層，變成也可以使用。）

- yarn => 新增 lock file 來記載互相依賴的版本

- pnpm => 把 package 儲存在 disk 中的 store，在專案中透過 sym link 來連結到 store 中的 package

TL;DR;

pnpm 比 npm, yarn 還快，並且花費更少的 disk 容量，並且同時解決了幽靈依賴等問題。

閱讀文章：https://www.readfog.com/a/1673072431709917184

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
