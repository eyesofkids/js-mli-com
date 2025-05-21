# 客戶(連絡人)管理系統(待辨事項)

- 設計一個簡單的客戶(連絡人)管理系統
- 客戶欄位: 編號/姓名/性別/年齡/電話/地址(縣市地區)/群組

## 基本操作

### C(create, add/new) 新增項目

Request(要求)

url: `http://localhost:3000/users`
method: POST
headers:
  Accept: 'application/json'
  'Content-Type': 'application/json'
body:

```json
{
  "id": "107005",
  "name": "陳語合",
  "age": 20
}
```

Response(回應):

成功:

```json
{
  "id": "107005",
  "name": "陳語合",
  "age": 20
}
```

失敗:

```json

```

- R(read, list/item view) 列出清單，讀取單筆資料 (GET)
- U(update, edit/toggle status) 修改，更動狀態 (PUT/PATCH)
- D(delete, remove) 刪除 (DELETE)

## 其它操作

- 搜尋: 輸入關鍵字更動列出清單
- 過濾: 依不同分類或狀態切換不同清單
- 排序: 依時間、名稱排列
- 永久儲存: localStorage
- 分頁: 當項目多時進行分頁

## 進階操作

- 多條件過濾
- 分類: 項目可以有自訂分類
- 標籤: 項目可以定義多個標籤
- 拖曳重新排序(re-order)
- 倒數計時通知
- 永久儲存: 遠端 server/database
- 動畫

---

## 備註: json-server

 [json-server](https://github.com/typicode/json-server)  npm 套件，是一個可以快速建立 REST API 的工具，適合用來做測試或原型開發。

```shell
npx json-server db.json
```

- `db.json` 是一個 json 格式的檔案，裡面可以定義資料結構和初始資料。
- 啟動後，會在本地端的 `http://localhost:3000` 提供 REST API 介面，可以用來進行 CRUD 操作。
- 例如，`GET /users` 會回傳所有使用者的資料，`POST /users` 可以新增一個使用者，`PUT /users/1` 可以更新 id 為 1 的使用者資料，`DELETE /users/1` 可以刪除 id 為 1 的使用者資料。
- 也可以使用查詢參數來過濾、排序和分頁資料，例如 `GET /users?name_like=陳` 會回傳姓名中包含「陳」的使用者資料，`GET /users?_sort=age&_order=asc` 會回傳按年齡升冪排序的使用者資料。
- 這些功能都可以透過 json-server 自動生成，不需要額外撰寫程式碼。
- json-server 也支援使用 `--watch` 參數來監控資料檔案的變化，當檔案內容改變時，會自動重新載入資料。
- 這樣可以方便開發者在開發過程中，隨時修改資料檔案，而不需要重新啟動伺服器。

> `db.json`

```json
{
  "users": [
    {
      "id": "107001",
      "name": "張佳蓉",
      "age": 22
    },
    {
      "id": "107002",
      "name": "楊智云",
      "age": 18
    },
    {
      "id": "107003",
      "name": "陳語合",
      "age": 20
    },
    {
      "id": "107004",
      "name": "林世名",
      "age": 23
    }
  ],
  "products": [
    {
      "id": 1,
      "picture": "https://via.placeholder.com/150",
      "stock": 5,
      "name": "iPhone 12 Pro",
      "price": 25000,
      "tags": "蘋果,大螢幕"
    },
    {
      "id": 2,
      "picture": "https://via.placeholder.com/150",
      "stock": 5,
      "name": "iPhone 12",
      "price": 15000,
      "tags": "蘋果,小螢幕"
    },
    {
      "id": 3,
      "picture": "https://via.placeholder.com/150",
      "stock": 10,
      "name": "iPhone SE",
      "price": 12500,
      "tags": "蘋果,小螢幕"
    },
    {
      "id": 4,
      "picture": "https://via.placeholder.com/150",
      "stock": 10,
      "name": "iPhone XS",
      "price": 22000,
      "tags": "蘋果,大螢幕"
    },
    {
      "id": 5,
      "picture": "https://via.placeholder.com/150",
      "stock": 6,
      "name": "Google Pixel 5",
      "price": 17000,
      "tags": "安卓,大螢幕"
    },
    {
      "id": 6,
      "picture": "https://via.placeholder.com/150",
      "stock": 6,
      "name": "Google Pixel 4",
      "price": 15500,
      "tags": "安卓,小螢幕"
    },
    {
      "id": 7,
      "picture": "https://via.placeholder.com/150",
      "stock": 6,
      "name": "紅米",
      "price": 9500,
      "tags": "安卓,一般螢幕"
    },
    {
      "id": 8,
      "picture": "https://via.placeholder.com/150",
      "stock": 1,
      "name": "黃米",
      "price": 8800,
      "tags": "安卓,一般螢幕"
    }
  ]
}
```