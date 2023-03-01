---
sidebar_position: 3
---

# [cheatSheet] Coding

## NPM

### package.json version

- tilde(~) => update to patch update
  - ~1.2.3 will use releases from 1.2.3 to <1.3.0
- caret(^) => update to all future minor/patch updates
  - ^2.3.4 will use releases from 2.3.4 to <3.0.0

## git macOS update

```js
    brew upgrade git //using homebrew

    // if git's version is still outdated, try this
    brew link --overwrite git // remove sym link
    git version // check version again

```
