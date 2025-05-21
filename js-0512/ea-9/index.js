// 呈現資料用函式
const display = (users) => {
  const usersNode = users
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

// 用箭頭函式的語法
// const getUsers= async () => {}
// 用一般函式的語法
async function getUsers() {
  // 用try...catch作錯誤處理
  try {
    // await關鍵字只能在async函式裡使用
    // 等候promise實現or拒絕，回傳解析的值or理由
    const res = await fetch(url)
    // 等候res物件解析為js資料格式
    const users = await res.json()
    // 除錯
    console.log(users)
    // 呈現結果在頁面上
    display(users)
  } catch (error) {
    console.error(error)
  }
}

// 呼叫async函式
getUsers()

// method: get 獲取資料(預設)
// fetch(url)
//   .then((res) => {
//     // 從回應(res)物件解析json資料為js資料格式
//     return res.json()
//   })
//   .then((users) => {
//     console.log(users)
//     // 要在promise的then的callback裡面呼叫呈現的函式
//     display(users)
//   })
//   .catch((error) => {
//     // 錯誤處理用
//     console.error(error)
//   })
