---
sidebar_position: 8
---

# [others] 檔案類型

## Blob

Blob URL/Object URL is a pseudo protocol to allow Blob and File objects to be used as URL source for things like images, download links for binary data and so forth. For example, you can not hand an Image object raw byte-data as it would not know what to do with it. It requires for example images (which are binary data) to be loaded via URLs. This applies to anything that require an URL as source. Instead of uploading the binary data, then serve it back via an URL it is better to use an extra local step to be able to access the data directly without going via a server

用途：用於儲存影音、大型文件或圖檔等大型檔案。
特點：

1. 檔案小、數度快、且 Blob 不可變。
2. Blob URLs can only be generated internally by the browser.
3. faster than data-url encoded as Base-64

Resources:

https://stackoverflow.com/questions/30864573/what-is-a-blob-url-and-why-it-is-used

https://blog.csdn.net/pfourfire/article/details/127396820

https://ithelp.ithome.com.tw/articles/10271735
