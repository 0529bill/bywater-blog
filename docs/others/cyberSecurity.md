---
sidebar_position: 21
---

# [others] Cyber Security 資訊安全

### XSS(cross-site scripting)

XSS 攻擊是指當某個惡意用戶，從客戶端用正當身份注入攻擊腳本，讓其他使用者在瀏覽該腳本時執行惡意程式，來達到某種目的（例如：竊取 Cookie、Session、密碼等)，導致其他用戶受到引響。

常見的 XSS 攻擊方法：

- 在釣魚或是色情網站上透過留言欄或是 input 欄位等使用者可以任意輸入資料的地方輸入`script`開頭的惡意程式，若沒有做 input 檢查，則其他用戶很容易在不知情下點擊或是執行該程式碼。

如何避免 XSS 攻擊

- 前後端所有欄位都要做檢查，並且把特定腳本轉換成字符串。ex, 攻擊者輸入 `<script>alert(1)</script>` ，就把 < 轉成 `&lt`。
- CSP (content security policy) 可以由 server 設定 `Content-Security-Policy` Header 來告訴瀏覽器哪些 domain 的相關資料可以信任。

```js

Content-Security-Policy: default-src 'self'
//A web site administrator wants all content to come from the site's own origin (this excludes subdomains.)

Content-Security-Policy: default-src 'self'; img-src *; media-src example.org example.net; script-src userscripts.example.com

// A web site administrator wants to allow users of a web application to include images from any origin in their own content, but to restrict audio or video media to trusted providers, and all scripts only to a specific server that hosts trusted code.
```

### CSRF(Cross Site Request Forgery) 跨站請求偽造

CSRF 攻擊是透過使用者在登入 A 網站之後網頁會存入 cookie，這時候如果再去惡意網頁，惡意網站可以透過帶入的 cookie 發起惡意請求到 A 網站，以使用者的身份來做惡意操作。

如何避免 CSRF 攻擊:

1. 對重要的行爲設定多重驗證方式 ex, Two-factor authentication (2FA)
2. 設定 SameSite cookies  
   sameSite 可以設定瀏覽器在哪些 domain 裡面會帶上 cookies，常見的 value 有`strict`、`Lax`  
   `strict`代表只有同 domain 的 request 瀏覽器才會送出 cookie  
   `Lax`是 default value，代表只有從外部 link 跳進來時才會帶上 cookie

### SQL Injection

SQL Injection 就是透過修改 SQL 語句，進而有辦法達到存取資料庫資料的功能
