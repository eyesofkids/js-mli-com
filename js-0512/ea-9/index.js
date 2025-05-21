// 呈現資料用函式
const display = (users) => {
  const usersNode= users
    .map((user) => {
      return `<li>${user.id}/${user.name}/${user.age}</li>`
    })
    .join('')

  const htmlString = `<ul>${usersNode}</ul>`
  // 呈現在頁面上id=result的DOM節點
  document.querySelector('#result').innerHTML = htmlString
}

const url =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'

// method: get 獲取資料(預設)
fetch(url)
  .then((res) => {
    // 從回應(res)物件解析json資料為js資料格式
    return res.json()
  })
  .then((users) => {
    console.log(users)
    // 要在promise的then的callback裡面呼叫呈現的函式
    display(users)
  })
  .catch((error) => {
    // 錯誤處理用
    console.error(error)
  })
