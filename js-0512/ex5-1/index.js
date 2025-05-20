// 命名導入(可以用as改名稱)
import { products } from './products.js'

// 以下獲取DOM各元素物件實體
const result = document.querySelector('#result')

// 呈現表格(串聯html字串)
let display = `<table border="1">
<thead>
<tr>
<th>ID</th>
<th>名稱</th>
<th>價格</th>
</tr>
</thead>
<tbody>`

display += products
  .map((v) => {
    return `<tr>
            <td>${v.id}</td>
            <td>${v.name}</td>
            <td>${v.price}</td>
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