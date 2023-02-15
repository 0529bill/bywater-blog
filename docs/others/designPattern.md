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

### 關注點分離 (Separation of concerns，SoC）

[前端技術發展史，關注點分離的辯證：模板語言到 React 與 Vue](https://nissentech.org/frontend-soc-evolution/)

### MVC, MVVM 架構

React 嚴格上來說，並非是一個完整的 Framework，只能稱得上是一個處理 view 的 Library。所以以宏觀的角度來看，React 負責 MVC 架構中的 view 的，model 跟 controller 則會由後端來處裡。

用 MVC, MVVM 的角度來看 React ：  
https://blog.yyisyou.tw/1dddc6d7/

## React's design pattern

React, being a JavaScript library for building user interfaces, employs several design patterns that help developers in creating efficient and maintainable code. Some of the most commonly used design patterns in React are:

Container/Presentational pattern: This pattern involves separating the logic of a component (Container) from its presentation (Presentational). The container component handles data manipulation and state management, while the presentational component focuses on how things look.

Higher-Order Components (HOCs): HOCs are functions that take a component as an argument and return a new component with additional props. HOCs can be used to abstract complex logic and reuse it across multiple components.

Render Props: Render Props is a pattern where a component exposes a function prop that allows a child component to render some content in a specific way. The Render Props pattern provides a way to share code between components without using inheritance or HOCs.

State Management Libraries: React doesn't provide a built-in way to manage global state, but there are several libraries that help with this such as Redux, MobX, and Unstated Next. These libraries provide a centralized store for storing and sharing data across multiple components.

React Hooks: React Hooks is a recent addition to the React library and provides a way to handle state and side effects in functional components. React Hooks allow developers to reuse stateful logic across multiple components without having to write class components.

These are some of the most commonly used design patterns in React, and they can greatly simplify the development process and make it easier to write maintainable code.
