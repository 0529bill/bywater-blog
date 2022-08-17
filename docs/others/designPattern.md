---
sidebar_position: 2
---

# [others] Design pattern

為什麼需要 Design pattern?
:用 design pattern 來增加開發速度、效率、可讀性。

### Module pattern

:把程式碼分割為各個 module,並且讓部分變數只存在該 module 中（private)，只有被 export/import 的變數才可以使用，這有以下幾點優點

1. 讓 global 變數是乾淨的，不會有誤用變數的情況（ex, name collision）
2. 程式碼更好閱讀跟整理

ex, ES2015 Modules
