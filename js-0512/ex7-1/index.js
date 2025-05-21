// 伺服器網址
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

// 獲取單一筆的資料
async function getUserById(uid) {
  // 用try...catch作錯誤處理
  try {
    // await關鍵字只能在async函式裡使用
    // 等候promise實現or拒絕，回傳解析的值or理由
    const res = await fetch(`${url}/${uid}`, {
      method: 'GET',
    })
    // 等候res物件解析為js資料格式
    const user = await res.json()
    // 除錯
    console.log(user)
    // 呈現結果在更新表單中的每個值
    document.querySelector('#updateName').value = user.name
    document.querySelector('#updateId').value = user.id
    document.querySelector('#updateAge').value = user.age
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

// 刪除連絡人(單個)
async function deleteUser(uid) {
  // 用try...catch作錯誤處理
  try {
    // await關鍵字只能在async函式裡使用
    // 等候promise實現or拒絕，回傳解析的值or理由
    const res = await fetch(`${url}/${uid}`, {
      method: 'DELETE',
    })
    // 等候res物件解析為js資料格式
    const resData = await res.json()
    // 除錯
    console.log(resData)
    // 呈現訊息
    alert(`已成功刪除!會員編號: ${uid}`)
  } catch (error) {
    console.error(error)
  }
}

// 更新連絡人(單個)
async function updateUser(user) {
  // 用try...catch作錯誤處理
  try {
    // await關鍵字只能在async函式裡使用
    // 等候promise實現or拒絕，回傳解析的值or理由
    const res = await fetch(`${url}/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
    })
    // 等候res物件解析為js資料格式
    const resData = await res.json()
    // 除錯
    console.log(resData)
    // 呈現訊息
    alert(`已成功更新!會員編號: ${user.id}`)
  } catch (error) {
    console.error(error)
  }
}

// 呈現資料用函式
const display = (users) => {
  const usersNode = users
    .map((user) => {
      return `<li>${user.id}/${user.name}/${user.age}
      <button class="deleteButton" data-uid="${user.id}">刪除</button>
      <button class="loadButton" data-uid="${user.id}">載入</button>
      </li>`
    })
    .join('')

  const htmlString = `<ul>${usersNode}</ul>`
  // 呈現在頁面上id=result的DOM節點
  document.querySelector('#result').innerHTML = htmlString

  // 刪除按鈕的事件監聽 獲得所有DOM元素實體物件(class=deleteButton)
  const deleteButtons = document.getElementsByClassName('deleteButton')

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', async function () {
      const uid = deleteButtons[i].dataset.uid
      // 往伺服器傳送(用await是為了確保執行順序)
      await deleteUser(uid)
      // 刷新伺服器資料(用await是為了確保執行順序)
      await getUsers()
    })
  }

  // 載入按鈕的事件監聽 獲得所有DOM元素實體物件(class=loadButton)
  const loadButtons = document.getElementsByClassName('loadButton')

  for (let i = 0; i < loadButtons.length; i++) {
    loadButtons[i].addEventListener('click', async function () {
      const uid = loadButtons[i].dataset.uid
      // 往伺服器傳送(用await是為了確保執行順序)
      await getUserById(uid)
    })
  }
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

document.querySelector('#updateAge').innerHTML =
  '<option value="">請選擇</option>' +
  Array(120)
    .fill(1)
    .map((v, i) => {
      return `<option value="${i + 1}">${i + 1}</option>`
    })
    .join('')

// 第一次呼叫呈現所有連絡人(注意，這行是異步的，這是動態的，先與伺服器取得資料後才會決定)
getUsers()

// 新增表單監聽submit(送出)的事件
document
  .querySelector('#addForm')
  .addEventListener('submit', async function (event) {
    // 在典型的表單送出時要阻擋預設行為
    event.preventDefault()
    // 用FormData物件來獲取使用者填寫資料
    const fd = new FormData(event.target)
    // fd.get(fieldName) 得到的資料必定為字串，需要依需求修改
    console.log(fd.get('name'), fd.get('id'), fd.get('age'))
    // 組成要新增的物件
    const user = {
      id: fd.get('id'),
      name: fd.get('name'),
      age: Number(fd.get('age')), // age應為數字
    }
    // 往伺服器傳送(用await是為了確保執行順序)
    await createUser(user)
    // 刷新伺服器資料(用await是為了確保執行順序)
    await getUsers()
    // 清空表單
    event.target.reset()
  })

// 更新表單監聽submit(送出)的事件
document
  .querySelector('#updateForm')
  .addEventListener('submit', async function (event) {
    // 在典型的表單送出時要阻擋預設行為
    event.preventDefault()
    // 用FormData物件來獲取使用者填寫資料
    const fd = new FormData(event.target)
    // fd.get(fieldName) 得到的資料必定為字串，需要依需求修改
    console.log(fd.get('updateName'), fd.get('updateId'), fd.get('updateAge'))
    // 組成要新增的物件
    const user = {
      id: fd.get('updateId'),
      name: fd.get('updateName'),
      age: Number(fd.get('updateAge')), // age應為數字
    }
    // 往伺服器傳送(用await是為了確保執行順序)
    await updateUser(user)
    // 刷新伺服器資料(用await是為了確保執行順序)
    await getUsers()
    // 清空表單
    event.target.reset()
  })
