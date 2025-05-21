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

// 年齡下拉選單
document.querySelector('#userAge').innerHTML =
  '<option value="">請選擇</option>' +
  Array(120)
    .fill(1)
    .map((v, i) => {
      return `<option value="${i + 1}">${i + 1}</option>`
    })
    .join('')

const url = 'http://localhost:3000/users'

// 用箭頭函式的語法
// const getUsers= async () => {}
// 用一般函式的語法
async function getUsers() {
  // 用try...catch作錯誤處理
  try {
    // await關鍵字只能在async函式裡使用
    // 等候promise實現or拒絕，回傳解析的值or理由
    const res = await fetch(url, {
      method: 'GET',
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

// 建立連絡人(單個)
async function createUser(user) {
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
    alert('新增成功!')
  } catch (error) {
    console.error(error)
  }
}

// 第一次呼叫呈現所有連絡人
getUsers()

// 新增表單監聽submit(送出)的事件
document.querySelector('#addForm').addEventListener('submit', async function (event) {
  // 在典型的表單送出時要阻擋預設行為
  event.preventDefault()
  // 用FormData物件來獲取使用者填寫資料
  const fd = new FormData(event.target)
  console.log(fd.get('name'), fd.get('id'), fd.get('age'))
  // 組成要新增的物件
  const user = {
    id: fd.get('id'),
    name: fd.get('name'),
    age: fd.get('age'),
  }
  // 往伺服器傳送
  await createUser(user)
  // 刷新伺服器資料
  await getUsers()
  // 清空表單
  event.target.reset()
})
