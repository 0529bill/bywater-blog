---
sidebar_position: 23
---

# [鐵人賽 2022-擊敗前端面試大作戰] client-side-rendering vs server-side-rendering

CSR

pros:

for developer => 前後端程式碼分開
faster navigation

cons:

SEO 不好，why? workaround?sitemap?service worker?
large JS bundle，Performance，first content painting 很長

解決方法：

lazy loading
code splitting

SSR

pros:
SEO
learning curves (ex, framework Next.js )

cons:

Next.js

features:

1. pre-rendering: Next.js generates the HTML for each page in advance and not on the client-side. This process is called pre-rendering.
2. Hydration: https://blog.somewhatabstract.com/2020/03/16/hydration-and-server-side-rendering/
3. routes: Next.js supports pre-rendering through both Server-Side Rendering (SSR) and Static generation
4. data fetching: SSR and Static generation
5. Automatic Image Optimization: https://nextjs.org/docs/basic-features/image-optimization

Resources:

https://www.patterns.dev/posts/client-side-rendering/
https://www.patterns.dev/posts/server-side-rendering/
