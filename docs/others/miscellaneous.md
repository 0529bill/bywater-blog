---
sidebar_position: 11
---

# [others] miscellaneous

### ES6 swapping array causing error

解法：在 swap 前放一個逗號

https://dev.to/stephencweiss/swapping-array-elements-in-place-destructuring-and-automatic-semicolon-insertion-886

### RSS feed

RSS 是一個線上的網址，網址裡有 XML 格式的 text 資料，透過 RSS reader 訂閱該網址之後，就可以在該 RSS 作者發布新文章時，收到通知。

[為 Next.js 靜態網站產生 RSS feed](https://code.kpman.cc/2021/05/25/next-js-rss/)

### 在 Mac Terminal 中設定 alias

To set an alias in the Mac Terminal using Zsh, you can follow these steps:

1. Open the Terminal app on your Mac.
2. Type `nano ~/.zshrc` to open the Zsh configuration file in the Nano text editor. If you prefer a different text editor, you can use that instead of Nano.
   Scroll to the bottom of the file or to any empty line and add the alias you want to create. For example, to create an alias for the ls command to show file details in long format, you can add the following line:

```zsh
alias ll='ls -alh'
```

3. Save the changes by pressing Control + X, then Y, and then Enter.
4. Reload the Zsh configuration file by typing `source ~/.zshrc` or by opening a new terminal window.
5. Now you can use the alias ll instead of typing ls -alh every time you want to see file details in long format. You can create as many aliases as you like by following the same steps and replacing ll and ls -alh with your desired alias and command, respectively.
