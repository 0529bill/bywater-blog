---
sidebar_position: 1
---

# [React] Git basic

## Resources: https://dev.to/lydiahallie/cs-visualized-useful-git-commands-37p1#fetch

### Reset, Revert and Rebase

https://gitbook.tw/chapters/rewrite-history/reset-revert-and-rebase

### merge vs rebase

merge:

- Fast-forward (--ff) => default behavior when the merging branches has all of the current branch's commit.
  - will not create a new commit.
- No-fast-forward (--no-ff) => default behavior when current branch contains commits that the merging branch doesn't have.
  - will create a new commit.

rebase:

- Copies commits on top of another branch
  - will not create a new commit
- interactive rebase
  - allow users to reword, edit, squash, fixup...commit.
