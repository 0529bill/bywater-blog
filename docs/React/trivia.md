---
sidebar_position: 1
---

# [others] React trivia

### Keys 在 react 中代表什麼？

key 可以幫助 React 跟蹤循環創建列表中的虛擬 DOM 元素，瞭解哪些元素已更改、添加或刪除。

每個綁定 key 的虛擬 DOM 元素，在附近的元素之間都是獨一無二的。在 React 的 reconciliation 過程中，比較新的虛擬 DOM 樹與上一個 virtual-DOM 樹之間的差異，並更改到頁面中。key 使 React 處理列表中虛擬 DOM 時更加高效，因爲 React 可以使用虛擬 DOM 上的 key 屬性，快速瞭解元素是新的、需要刪除的，還是修改過的。如果沒有 key,Rεat 就不知道列表中虛擬 DOM 元素與頁面中的哪個元素相對應。

https://mp.weixin.qq.com/s/lAQP3wNVuHpp-mt_RAqK1A
