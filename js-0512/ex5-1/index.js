// 命名導入(可以用as改名稱)
import { products } from './products.js'

// 以下獲取DOM各元素物件實體
const result = document.querySelector('#result')

// 拷貝出products，不要更動到導入的原始資料
// 以下為物件陣列固定使用語法，map可以展開陣列第一層，物件展開運算可以拷貝第二層的物件(可以進行擴充或是覆蓋)
const myProducts = products.map((product) => {
  return { ...product, count: 0 }
})

// console.log(myProducts)

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

display += myProducts
  .map((product) => {
    return `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.count}</td>
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
