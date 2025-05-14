// 以下獲取DOM各元素物件實體
const result = document.querySelector('#result')

// 定義年與月
const year = 2025
const month = 5

// #region 準備一個7x6=42個成員的資料陣列
// 1. 獲得這個月份的第1天是星期幾(索引值0~4)
const firstDay = new Date(`${year}/${month}/1`).getDay()

// 2. 獲得這個月有幾天
// 公式: 要得到某年的某個月有幾天，可以用`new Date(y, m, 0).getDate()`，例如 2009 年的 9 月就是使用`new Date(2009, 9, 0).getDate()`
const days = new Date(year, month, 0).getDate()

// 3. 組合為一個有42成員的陣列
const allData = [
  ...Array(firstDay).fill(''), //產生具有firstDay數量的空白字串的陣列
  ...Array(days)
    .fill(1)
    .map((v, i) => i + 1), //產生一個從1~days的有序數字陣列
  ...Array(42 - firstDay - days).fill(''), // 產生最後42-firstDay-days的空白字串的陣列
].map((v)=> `<td>${v}</td>`)

// 除錯
console.log('allData', allData)
// 進行分塊(使用lodash)
const allDataChunks = _.chunk(allData,7)
console.log('allDataChunks', allDataChunks)

// #endregion

// 以下為使用表格呈現在網頁上
let display = '<table border="1">'
// 表格標頭
display += `<thead>
 <tr>
  <td>日</td>
  <td>一</td> 
  <td>二</td>
  <td>三</td>
  <td>四</td>
  <td>五</td>
  <td>六</td>
 </tr>
</thead>`
// 表格內容
display += '<tbody>'

display += allDataChunks.map((v)=>{
  return `<tr>${v.join('')}</tr>`
}).join('')


// display += '</tr>'
display += '<tbody>'
display += '</table>'
// 呈現在頁面
result.innerHTML = display
