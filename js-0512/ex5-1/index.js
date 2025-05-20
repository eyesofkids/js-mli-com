// 命名導入(可以用as改名稱)
import { products } from './products.js'

// 以下獲取DOM各元素物件實體
const result = document.querySelector('#result')

// 呈現表格
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
  .map((v, i) => {
    return `<tr>
            <td>${v.id}</td>
            <td>${v.name}</td>
            <td>${v.price}</td>
         </tr>`
  })
  .join('')

display += '</tbody></table>'

result.innerHTML = display

