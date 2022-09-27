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
