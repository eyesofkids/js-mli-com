const url =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'

// method: get 獲取資料(預設)
fetch(url)
  .then((res) => {
    // 從回應(res)物件解析json資料為js資料格式
    return res.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
