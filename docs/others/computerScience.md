---
sidebar_position: 7
---

# [others] Computer science basics

## General knowledge

### 單位

```js
1b (bit 位，比特位，计算机表示数据最小的单位, 二进制的范畴，存放一位二进制数，即0或1)
1B (Byte 字节)
1KB (Kilobyte 千字节)
1MB (Megabyte 兆字节 简称“兆”)
1GB (Gigabyte 吉字节 又称“千兆”)
1TB（Tera Byte 1000吉(千兆)字节(GB)、兆兆位(量度信息单位）
```

```js
1 b 即 1 bit
1 Byte = 8 Bits（即 1B=8 bit）
1 KB = 1024 Bytes
1 MB = 1024 KB
1 GB = 1024 MB
1 TB = 1024 GB
```

### 32bit vs 64 bit

When it comes to computers, the difference between 32-bit and a 64-bit is all about processing power. Computers with 32-bit processors are older, slower, and less secure, while a 64-bit processor is newer, faster, and more secure.  
Your computer’s central processing unit (CPU) functions like the brain of your computer. It controls all the communication and the flow of data to and from the other parts of your computer. Some computers use two or more processors. However, there are only two main categories of processors now: 32-bit processors and 64-bit processors. The type of processor that your computer uses affects its overall performance and what kind of software it can utilize.

Most computers made in the 1990s to early 2000s have a 32-bit system that can access 2^32 (or 4,294,967,296) bytes (units of digital information) of RAM (random access memory). Meanwhile, a 64-bit processor can handle 2^64 (or 18,446,744,073,709,551,616) bytes of RAM. In other words, a 64-bit processor can process more data than 4 billion 32-bit processors combined.

64 位元計算主要有兩大優點：可以進行更大範圍的整數運算；可以支援更多的記憶體空間。

https://www.hellotech.com/blog/whats-the-difference-between-32-bit-and-64-bit

### Unicode & ASCII

The American Standard Code for Information Interchange (ASCII) was an early standardized encoding system for text. Encoding is the process of converting characters in human languages into binary sequences that computers can process.

cons: it only includes English and some common symbols(like /, !, and ?).

#### UTF-8 vs UTF-16

UTF-8 encoding is preferable to UTF-16 on the majority of websites, because it uses less memory. Recall that UTF-8 encodes each ASCII character in just one byte. UTF-16 must encode these same characters in either two or four bytes. This means that an English text file encoded with UTF-16 would be at least double the size of the same file encoded with UTF-8.

UTF-16 is only more efficient than UTF-8 on some non-English websites. If a website uses a language with characters farther back in the Unicode library, UTF-8 will encode all characters as four bytes, whereas UTF-16 might encode many of the same characters as only two bytes. Still, if your pages are filled with ABCs and 123s, stick with UTF-8.

https://blog.hubspot.com/website/what-is-utf-8

## Wed-related knowledge

### REST 架構

Representational State Transfer，簡稱 REST，它是一種網路架構風格，近幾年來 REST 的概念已經被實作在大型網路系統中，而在 Web Service 中使用 REST 概念被實作出來的 API 就簡稱為 RESTful API 。

一個 REST request 是由以下幾個東西所組成：

- `endpoint`
- `HTTP method`
- `Header`
- `Body`

#### 常見的`HTTP method`

`POST 新增新資料 (create)`

`PUT 更改資料 (update)`

`PATCH 指更改小筆資料(ex, 一個欄位)`

`PATCH`

`DELETE`

When working with data, a RESTful API uses HTTP methods to perform CRUD (Create, Read, Update and Delete) operations.

#### HTTP status code

`2xx success`

`3xx redirection`

`4xx client error`

`5xx server error`

### http-proxy

Frontend proxy can be called reverse proxy. It’s a type of proxy server that can retrieve data from one or many servers to client app. Those resources are returned to client side in original from the server.

Example usages of reverse proxy are:

- bypass CORS errors （CORS Proxy allows us to bypass CORS errors using a proxy server that acts as a bridge between the client and the server. ）
- it can distribute load from incoming requests to many servers.
- it can add basic HTTP authentication access to a web server
- it can optimize content by compressing it and speed up a load time
- it can cache some static content to reduce time of load

vite config 也有提供 http-proxy 選項  
https://vitejs.dev/config/server-options.html#server-proxy

github:

https://github.com/http-party/node-http-proxy#options

build your own proxy server:

https://jakemccambley.medium.com/fixing-cors-errors-when-working-with-3rd-party-apis-a69dc5474804

---

Resources:  
https://rapidapi.com/guides/cors-proxy-apis
https://www.quora.com/What-is-front-end-proxy
