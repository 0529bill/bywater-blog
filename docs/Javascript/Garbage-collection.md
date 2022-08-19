---
sidebar_position: 1
---

# [JS] Garbage collection 垃圾回收

:Js 透過垃圾回收這個自動的機制來確保 memory 可以最有效的使用，也讓工程師不需要去擔心或是手動控制 memory 的使用。

### GC 的原則

:*Reachability*是 GC 的主要原則，只要是跟 roots 有關係的就會被繼續儲存在 memory，反之則會被 GC(從 memory 中被丟棄，來釋放 memory)。

Roots 為以下幾點組成：

1. 正在執行的 function 跟其內部的變數（local parameter）和傳入的變數（parameter）
2. 存在以上的 nested function
3. 全局變數（Global variables)
4. 其他（包括底部的變數、function）

# Resources

https://javascript.info/garbage-collection
