---
sidebar_position: 1
---

# [React] Git basic

## Resources: https://dev.to/lydiahallie/cs-visualized-useful-git-commands-37p1#fetch

### Reset, Revert and Rebase

https://gitbook.tw/chapters/rewrite-history/reset-revert-and-rebase

### merge vs rebase

merge:
缺點：No-fast-forward 會產生新節點，讓 git graph 變更複雜。

- Fast-forward (--ff) => default behavior when the merging branches has all of the current branch's commit.
  - will not create a new commit.
- No-fast-forward (--no-ff) => default behavior when current branch contains commits that the merging branch doesn't have.
  - will create a new commit.

rebase:

優點：git graph 更清楚。

- Copies commits on top of another branch
  - will not create a new commit
- interactive rebase
  - allow users to reword, edit, squash, fixup...commit.

### git flow vs github flow

- git flow (master/develop/feature 開新分支來寫功能)
  缺點：整個開發建立在 develop 上，顯得多餘（分支多）
  優點：分支清晰
- github flow(master(最新代碼)/從 master 中發出分支來開發，完成後再 PR 回 master)
  特點：master 永遠都是可以被部署的，不同 git flow 上面的 master 是不能動的。
