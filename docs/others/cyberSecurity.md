---
sidebar_position: 21
---

# [others] Cyber Security 資訊安全

### XSS(cross-site scripting)

XSS 攻擊是指當某個惡意用戶，從客戶端注入攻擊腳本來達到某種目的（例如：竊取 Cookie、Session、密碼等)，導致其他用戶受到引響。

常見的 XSS 攻擊方法：

- 透過留言欄、url 或是 input 欄位等使用者可以任意輸入資料的地方，若沒有做 input 檢查，則很容易被輸入`script`等惡意 javascript 來被執行。

如何避免 XSS 攻擊

- 前後端所有欄位都要做檢查，並且把特定腳本轉換成字符串。ex, 攻擊者輸入 `<script>alert(1)</script>` ，就把 < 轉成 `&lt`。
- CSP (content security policy) 可以由 server 設定 `Content-Security-Policy` Header 來告訴瀏覽器哪些 domain 的相關資料可以信任。

```js

Content-Security-Policy: default-src 'self'
//A web site administrator wants all content to come from the site's own origin (this excludes subdomains.)

Content-Security-Policy: default-src 'self'; img-src *; media-src example.org example.net; script-src userscripts.example.com

// A web site administrator wants to allow users of a web application to include images from any origin in their own content, but to restrict audio or video media to trusted providers, and all scripts only to a specific server that hosts trusted code.
```
