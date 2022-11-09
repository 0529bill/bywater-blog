---
sidebar_position: 26
---

# [鐵人賽 2022-擊敗前端面試大作戰]在網頁中輸入 URL 之後送出發生了什麼事？

![enterUrl](./Img/enterURl.jpeg)

今天要來討論在網頁中輸入 URL 之後送出發生了什麼事！上面這張圖很清楚的畫出了 URL 在瀏覽器中送出之後所發生的事～

1. 在網頁中輸入 URL www.example.com
2. www.example.com的請求到DNS(網域名稱系統)，可以把DNS想像成黃色的電話簿，裡面記錄URL的IP位置，透過DNS我們可以得到 www.example.com的實際IP。查找IP的順序會是以下幾個：
   - 從瀏覽器緩存(cache)中找 DNS 紀錄
   - 系統中查詢 DNS 紀錄
   - 路由器中查詢 DNS 紀錄
   - 跟網絡供應商 (Internet Service Provider, ISP)查詢 DNS 紀錄
   - 如果以上還找不到的話，就會向根域名伺服器供應商查詢 DNS 紀錄，直到找到對應的 IP 為止。
3. 建立 TCP/IP（Transmission Control Protocol/Internet Protocol）三次握手

- 推薦[閱讀文章](https://ithelp.ithome.com.tw/articles/10205476)

4. 請求到達伺服器端
5. 回傳 HTML/CSS/JS 等資源給瀏覽器
6. 瀏覽器解析並且渲染畫面

- 推薦閱讀[瀏覽器解析文章](https://0529bill.github.io/bywater-blog/Javascript/DOM)

額外推薦學習資源

[完整解析](https://juejin.cn/post/6844903832435032072)
[完整講解](https://www.cythilya.tw/2018/11/26/what-happens-when-you-type-an-url-in-the-browser-and-press-enter/)

---

Resources:

https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob
https://www.cythilya.tw/2018/11/26/what-happens-when-you-type-an-url-in-the-browser-and-press-enter/
