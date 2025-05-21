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

const url ='http://localhost:3000/users'

// 用箭頭函式的語法
// const getUsers= async () => {}
// 用一般函式的語法
async function getUsers() {
  // 用try...catch作錯誤處理
  try {
    // await關鍵字只能在async函式裡使用
    // 等候promise實現or拒絕，回傳解析的值or理由
    const res = await fetch(url,{
      method:'GET'
    })
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

async function createUsers(user) {
  // 用try...catch作錯誤處理
  try {
    // await關鍵字只能在async函式裡使用
    // 等候promise實現or拒絕，回傳解析的值or理由
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
    })
    // 等候res物件解析為js資料格式
    const resData = await res.json()
    // 除錯
    console.log(resData)
    // 呈現結果在頁面上
    // display(resData)
  } catch (error) {
    console.error(error)
  }
}

// 呼叫async函式
getUsers()


