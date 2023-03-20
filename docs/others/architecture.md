---
sidebar_position: 18
---

# [others] 前端 architecture

### clean-architecture

[文章](https://bespoyasov.me/blog/clean-architecture-on-frontend/)
[github repo](https://github.com/bespoyasov/frontend-clean-architecture)

### 專案共用

[該用 Monorepo 嗎？比較 Monolith vs Multi-Repo vs Monorepo -- Summer](https://www.cythilya.tw/2023/01/28/monolith-vs-multi-repo-vs-mono-repo/)

#### npm package

透過發布共用套件的方式來達到共用的目的。

#### git submodule

git submodule 像是一個 git repo 的 link，透過這個 link，我們可以在一個專案中使用另一個專案的 code，並且可以在這個專案中編輯這個 link 的 code，並且可以在這個專案中 commit 這個 link 的 code，這樣就可以達到專案共用的目的。

缺點：增加 git 操作的複雜度，也增加的團隊的學習曲線。

[文章](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
