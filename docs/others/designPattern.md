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

### MVC, MVVM 架構

React 嚴格上來說，並非是一個完整的 Framework，只能稱得上是一個處理 view 的 Library。所以以宏觀的角度來看，React 負責 MVC 架構中的 view 的，model 跟 controller 則會由後端來處裡。

用 MVC, MVVM 的角度來看 React ：  
https://blog.yyisyou.tw/1dddc6d7/
