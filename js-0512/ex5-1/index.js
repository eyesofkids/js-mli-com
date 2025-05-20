// 命名導入(可以用as改名稱)
import { products } from './products.js'

// 以下獲取DOM各元素物件實體
const result = document.querySelector('#result')

// 拷貝出products，不要更動到導入的原始資料
// 以下為物件陣列固定使用語法，map可以展開陣列第一層，物件展開運算可以拷貝第二層的物件
let myProducts = products.map((product) => {
  // 物件展開運算(物件拷貝，也可以進行擴充或是覆蓋)
  return { ...product, count: 0 }
})

console.log(myProducts)

const displayTable = (products) => {
  // 呈現表格(串聯html字串)
  let display = `<table border="1">
<thead>
<tr>
<th>ID</th>
<th>名稱</th>
<th>價格</th>
<th>數量</th>
</tr>
</thead>
<tbody>`

  display += products
    .map((product) => {
      return `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
            <button class="decrease" data-pid="${product.id}">-</button>
            ${product.count}
            <button class="increase" data-pid="${product.id}">+</button>
            </td>
         </tr>`
    })
    .join('')

  display += '</tbody></table>'
  // 呈現於網頁上
  result.innerHTML = display
  // 儲存到localStorage
  // JSON.stringify: JS資料 ==> JSON字串JS資料
  // JSON.parse: JSON字串 ==> JS資料
  localStorage.setItem('cart', JSON.stringify(products))

  // 以下程式碼需要在元素已經呈現在畫面上才能使用(獲取元件、加入事件監聽…)
  // 獲得所有DOM元素實體物件(class=dd)
  const increaseButtons = document.getElementsByClassName('increase')
  const decreaseButtons = document.getElementsByClassName('decrease')

  // 需要用for迴圈(或forEach)每個元素加入事件監聽
  for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener('click', function () {
      // console.log(increaseButtons[i].dataset.pid)
      // 從html頁面來的資料必定是字串，要轉為數字類型
      const pid = Number(increaseButtons[i].dataset.pid)
      // 從myProducts資料中產生更動的資料
      myProducts = myProducts.map((product) => {
        if (product.id === pid) {
          return { ...product, count: product.count + 1 }
        } else {
          return product
        }
      })
      // 更新表格呈現
      displayTable(myProducts)
    })
  }

  for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener('click', function () {
      // 從html頁面來的資料必定是字串，要轉為數字類型
      const pid = Number(decreaseButtons[i].dataset.pid)
      // 從myProducts資料中產生更動的資料
      myProducts = myProducts.map((product) => {
        if (product.id === pid && product.count > 0) {
          return { ...product, count: product.count - 1 }
        } else {
          return product
        }
      })
      // 更新表格呈現
      displayTable(myProducts)
    })
  }
}

// 第一次呈現myProducts資料
displayTable(myProducts)
