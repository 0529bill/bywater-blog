---
sidebar_position: 22
---

# [others] WebSockets & Server-Sent Events

### Comparison

[WebSockets vs SSE](https://ably.com/blog/websockets-vs-sse)

**When to use WebSockets**
WebSockets are more complex and demanding than SSE, and require a bit of developer input up front. For this investment, you gain a full-duplex TCP connection that is useful for a wide range of application scenarios. For example, WebSockets are preferable for use cases such as multiplayer collaboration and chat apps.  
ex, Miro, real-time chat app

**Why use Server-Sent Events over WebSockets?**
Server-Sent Events is a good alternative to WebSockets for simple realtime use cases that only require one-way communication (from server to client). Examples include read-only realtime apps like stock tickers, or news updates. However, bear in mind that you can only send UTF-8 data over SSE (binary data is not supported).  
ex, chatGpt

### Demo

#### Real-Time Collaboration website using WebSockets

blog: https://blog.logrocket.com/websocket-tutorial-real-time-node-react/
github repo: https://github.com/codezri/react-node-websockets-demo
