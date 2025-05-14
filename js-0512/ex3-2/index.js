// 以下獲取DOM各元素物件實體
const result = document.querySelector('#result')

// 定義年與月
const year = 2025
const month = 5

// #region 準備一個7x6=42個成員的資料陣列
// 1. 獲得這個月份的第1天是星期幾(索引值0~4)
const firstDay = new Date(`${year}/${month}/1`).getDay()
// 產生一個具有firstDay數量的空白字串的陣列
const frontData = []
for (let i = 0; i < firstDay; i++) {
  frontData.push('')
}

// 2. 獲得這個月有幾天
// 公式: 要得到某年的某個月有幾天，可以用`new Date(y, m, 0).getDate()`，例如 2009 年的 9 月就是使用`new Date(2009, 9, 0).getDate()`
const days = new Date(year, month, 0).getDate()
// 產生一個從1~days的有序數字陣列
const contentData = []
for (let i = 0; i < days; i++) {
  contentData.push(i + 1)
}

// 3. 產生最後42-firstDay-days的空白字串的陣列
const endData = []
for (let i = 0; i < 42 - firstDay - days; i++) {
  endData.push('')
}
// 4. 組合為一個有42成員的陣列
const allData = [...frontData, ...contentData, ...endData]
// 除錯
console.log('allData', allData)
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
display += '<tr>'

// 使用for迴圈(每7個分行用</tr><tr>)
for (let i = 0; i < allData.length; i++) {
  display += `<td>${allData[i]}</td>`
  // 每7個要換列
  if ((i + 1) % 7 === 0) {
    display += '</tr><tr>'
  }
}

display += '</tr>'
display += '<tbody>'
display += '</table>'
// 呈現在頁面
result.innerHTML = display
