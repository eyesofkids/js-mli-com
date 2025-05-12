# 物件陣列的處理-2

## 1. 呈現資料

讀取`products.js`中的商品資料，用一個表格(table)呈現出來。

## 2. 與 localStorage 互動

將商品資料轉為 JSON 格式，儲存在本機的瀏覽器的 localStorage 中。localStorage 中使用的 key 值為"cart"。

提示: [localStorage API](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage)可參考

## 3. 加入訂購功能

1. 擴充所有商品物件多增加一個`count:0`屬性。
2. 在表格上最後行加入一個欄位"訂購數量"，類似計數器功能有"+"與"-"按鈕，與一個數量數字，每次按下"+"為增加 1，按下"-"為減少 1。
3. 訂購數量功能需每次有增減均需與 localStorage 中的記錄的 JSON 資料同步。

## 4. 加入小計與總計功能

1. 在表格上最後行加入一個欄位"小計"，呈現每種商品的單價(price)相乘於數量(count)的結果值
2. 整個表格最後加入一個"總計"，呈現所有商品的單價(price)相乘於數量(count)的結果值
