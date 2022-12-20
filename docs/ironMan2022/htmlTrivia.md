---
sidebar_position: 25
---

# [鐵人賽 2022-擊敗前端面試大作戰] HTTP trivia

![https://ithelp.ithome.com.tw/upload/images/20221009/201488255J0Nxa6f3q.jpg](https://ithelp.ithome.com.tw/upload/images/20221009/201488255J0Nxa6f3q.jpg)

今天來到新的系列！主要會介紹四題必考的 HTTP 或是跟 Web 相關問題！

### 1. 什麼是 HTTP method？跟 POST,PUT 差別

HTTP 是一個客戶端（使用者）和伺服器端（網站）之間請求和應答的標準。
HTTP/1.1 的時候定義了八種包含 get,head, post, put, delete 等等。

常見的 method 的含義：

POST:create 資源請求  
PUT:replace 資源請求  
DELETE: 刪除資源請求  
GET: 讀取資料請求

完整的 method[看這裡](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Methods)

### 2. http vs https？

HTTP 本身是沒有加密的，因此是比較不安全的，所以就出現了 HTTPS。HTTPS 全名 超文本傳輸安全協定，而後面 S 就是 Secure 的意思。HTTPS 透過 HTTP 進行通訊，但通訊過程使用 SSL/TLS 進行加密，在 HTTP 之上定義了相對安全的資料傳輸方法。

https 文章：  
https://www.zhihu.com/question/53226983
https://showme.codes/2017-02-20/understand-https/
https://tw.alphacamp.co/blog/http-https-difference
https://www.gushiciku.cn/pl/gmB9/zh-tw
https://pengpon.github.io/studygroup/2020/05/26/http-and-https.html

http 書：
https://awesome-programming-books.github.io/http/%E5%9B%BE%E8%A7%A3HTTP.pdf

### OSI 和 TCP/IP 對照圖

http://kevin.hwai.edu.tw/~kevin/material/EAssistant/TCP.htm

### 3. Cookie、session 的差別？

#### cookies

因為 http 本身是個**無狀態( Stateless)**的協議，可以在 Client 與 Server 兩端進行溝通，但是無法紀錄網路上的行為，所以透過 cookie 來描述 client 與 server 目前溝通狀態的資料，這些資料會以 name-value pair 的形式呈現。基本上，它是用來**區分兩個要求是來自同一個瀏覽器**以此去保持使用者的登入狀態。例如，它提供了保存狀態資訊的功能，來幫助 HTTP 這個無法紀錄狀態的通訊協定。Cookie 是一段由 Server 送給**使用者瀏覽器的一小塊資料(文檔)**。**瀏覽器會儲存它，**並且在瀏覽器下一次發送要求的時候將它送回原本送來的伺服器。
Cookie 的缺點：

1. **cookie 中的所有數據在 Client 端就可以被修改**，數據非常容易被偽造，那麼一些重要的數據就不能存放在 cookie 中
2. **因為對目標網域的每個請求都會帶上 Cookies，所以如果 cookie 中數據字段太多會影響傳輸效率**

#### Session

用途:

session 用在儲存暫時的資訊，來應用在不同的 tab 之間，像是在瀏覽器中同時開多個分頁時瀏覽器可以透過 session 來讓各個分頁中的 session 資料一致！

1. session 資料比較安全，因為狀態資訊是直接存在 Server 端加密的，所以使用者無法讀取，使用者只能看到 session key 但不知道其結構
2. session 資料在使用者登出後或是關掉螢幕後就會被刪除。
3. Session 負責紀錄在 server 端上的使用者訊息，會在一個用戶完成身分認證後，存下所需的用戶資料，接著產生一組對應的 **ID**，存入 cookie 後傳回用戶端。

#### **session 和 cookie 的差別**

| cookie                                        | session                                   |
| --------------------------------------------- | ----------------------------------------- |
| 儲存在瀏覽器                                  | 儲存在伺服器                              |
| cookie 保存的時間根據設定的 expireDate 來決定 | 當使用者關掉網頁或是電腦 session 就會結束 |
| 大小限制為 4 KB                               | 大小無限制                                |
| 比較不安全                                    | 比較安全                                  |
| 儲存格式為 name-value pair                    | 儲存格式為加密格式                        |

閱讀文章：  
https://medium.com/tsungs-blog/day14-session%E8%88%87cookie%E5%B7%AE%E5%88%A5-eb7b4035a382

### 4. 什麼是 同源政策 CORS？

- 要解決 fetch 等方法造成的 CORS 問題，除了遵循 CORS 規定之外，還可以用 proxy 或是 JSONP 的方法來躲避 CORS!

JSONP 簡介：

透過 html 中 script 沒有 CORS 的特點，利用 script 來傳送 JSONP，但是缺點有以下幾個：

1.  JSONP 的資料傳輸方式是不安全的
2.  只支持 get 請求
3.  沒有錯誤處理

資源：https://medium.com/@brianwu1201/jsonp-with-simple-example-4711e2a07443

當我們在 JavaScript 中透過 fetch 或 XMLHttpRequest 存取資源時，如果是同源的情況下，存取不會受到限制，那什麼是同源呢?同源，包含以下三個條件

1. 相同的通訊協定 (protocol)，即 http/https
2. 相同的網域 (domain)
3. 相同的通訊埠 (port)

非同源的情況分成兩種：

1. 簡單請求

- 只能是 HTTP GET, POST or HEAD 方法
- 自訂的 request header 只能是 Accept、Accept-Language、Content-Language 或 Content-Type（值只能是 application/x-www-form-urlencoded、multipart/form-data 或 text/plain）

解決 CORS 方法：

- 後端設置 CORS header

```js
Access-Control-Allow-Origin: *

or

let origin = http://localhost:8081
Access-Control-Allow-Origin: origin

```

2. 非簡單請求

非簡單的跨來源請求會在發送前先透過瀏覽器發送一個 preflight request（預檢請求)來向 server 確認拿取資料是正當的。

關於如果不是同源的情況要怎麼解決呢?

解決方法：

瀏覽器會先傳一個 preflight request 給 server 確認拿取資料是正當的，

- 後端設定 Access-Control-Allow-Methods, Access-Control-Allow-Headers

```js
Access-Control-Allow-Methods: 允許的 HTTP 方法。
Access-Control-Allow-Headers: 允許的非「簡單」header。
```

確定請求的 request 和 header 都是正確之後，瀏覽器就會發送實際的請求了，這時候後端還要回覆 Access-Control-Allow-Origin

```js
Access-Control-Allow-Origin: *

or

origin = http://localhost:8081
Access-Control-Allow-Origin: origin

```

以上就是簡單和非簡單請求的步驟！

有 cookie 的情況要以下設定

```js
Access-Control-Allow-Origin：xxx origin
Access-Control-Allow-Credentials: true

//指定哪些header可以資源
 Access-Control-Expose-Headers

//指定哪些http method可以被接受
Access-Control-Allow-Methods

```

[這篇文章](https://blog.huli.tw/2021/02/19/cors-guide-2/)有很詳細的解說！

推薦閱讀文章：
https://shubo.io/what-is-cors/

總結一下，今天講了四個面試很常見的 HTTP 跟網頁相關面試題。除了上述幾篇推薦的文章之外，我還推薦[這篇文章](https://juejin.cn/post/6994012635909849124)裡面有更多相關常見的網頁考題～～

[https://vicxu.medium.com/authentication-那些小事上集-cookie-與-session-介紹-1da2d413afa2](https://vicxu.medium.com/authentication-%E9%82%A3%E4%BA%9B%E5%B0%8F%E4%BA%8B%E4%B8%8A%E9%9B%86-cookie-%E8%88%87-session-%E4%BB%8B%E7%B4%B9-1da2d413afa2)

[https://jimmywei01.github.io/2019/05/14/cookie、session、local-storage、session-storage-差異/](https://jimmywei01.github.io/2019/05/14/cookie%E3%80%81session%E3%80%81local-storage%E3%80%81session-storage-%E5%B7%AE%E7%95%B0/)
https://shubo.io/what-is-cors/
https://blog.huli.tw/2021/02/19/cors-guide-2/
