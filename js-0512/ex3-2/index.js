// 以下獲取DOM各元素物件實體
const result = document.querySelector('#result')
// 下拉選單
const yy = document.querySelector('#yy')
const mm = document.querySelector('#mm')
// 獲得今天的年月日
const nowY = new Date().getFullYear()
// getMonth得到的是0~11(索引值)，要得到真正的月份需要+1
const nowM = new Date().getMonth() + 1
const nowD = new Date().getDate()

console.log(nowY, nowM, nowD)

// 1900~2025
// yy.innerHTML = '<option value="">請選擇年份</option>'
yy.innerHTML += Array(2025 - 1900 + 1)
  .fill(1)
  .map((v, i) => {
    return `<option value="${1900 + i}" ${
      1900 + i === nowY ? 'selected' : ''
    }>${1900 + i}</option>`
  })
//1~12
// mm.innerHTML = '<option value="">請選擇月份</option>'
mm.innerHTML += Array(12)
  .fill(1)
  .map((v, i) => {
    return `<option value="${i + 1}" ${i + 1 === nowM ? 'selected' : ''}>${
      i + 1
    }</option>`
  })

// 日曆呈現的函式
function display(year = 2025, month = 5) {
  // #region 準備一個7x6=42個成員的資料陣列
  // 1. 獲得這個月份的第1天是星期幾(索引值0~4)
  const firstDay = new Date(`${year}/${month}/1`).getDay()

  // 2. 獲得這個月有幾天
  // 公式: 要得到某年的某個月有幾天，可以用`new Date(y, m, 0).getDate()`，例如 2009 年的 9 月就是使用`new Date(2009, 9, 0).getDate()`
  const days = new Date(year, month, 0).getDate()

  console.log(nowY, nowM, nowD, year, month)

  // 3. 組合為一個有42成員的陣列
  const allData = [
    ...Array(firstDay).fill(''), //產生具有firstDay數量的空白字串的陣列
    ...Array(days)
      .fill(1)
      .map((v, i) => i + 1), //產生一個從1~days的有序數字陣列
    ...Array(42 - firstDay - days).fill(''), // 產生最後42-firstDay-days的空白字串的陣列
  ].map(
    (v) =>
      `<td class="dd ${
        year === nowY && month === nowM && v === nowD ? 'today' : ''
      }">${v}</td>`
  ) // 將所有資料加上td前後標記，判斷為今天套入css類別today

  // 除錯
  // console.log('allData', allData)
  // 進行分塊(使用lodash)，每7個一列準備組合用
  const allDataChunks = _.chunk(allData, 7)
  // 除錯
  // console.log('allDataChunks', allDataChunks)

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

  // 每列加上 tr 前後標記，並組合為字串
  display += allDataChunks
    .map((v) => {
      return `<tr>${v.join('')}</tr>`
    })
    .join('')

  // display += '</tr>'
  display += '<tbody>'
  display += '</table>'
  // 呈現在頁面
  result.innerHTML = display

  // 獲得所有DOM元素實體物件(class=dd)
  const elements = document.getElementsByClassName('dd')
  //  也可以使用querySelectorAll，但物件類別有所不同
  // const elements2 = document.querySelectorAll('.dd')
  // console.log(elements)
  // 需要用for迴圈(或forEach)每個元素加入事件監聽
  for (let i = 0; i < elements.length; i++) {
    // 其中有數字時才加入事件監聽
    if (elements[i].innerHTML) {
      elements[i].addEventListener('click', function () {
        alert(`${year}/${month}/${elements[i].innerHTML}`)
      })
    }
  }
}

// 一開始呈現這個月的行事曆
display(nowY, nowM)

// 依照下拉選更動
yy.addEventListener('change', function () {
  console.log(yy.value, mm.value)
  if (yy.value && mm.value) {
    // 從html來的資料值都是字串，需要轉為數字
    display(Number(yy.value), Number(mm.value))
  }
})

mm.addEventListener('change', function () {
  console.log(yy.value, mm.value)
  if (yy.value && mm.value) {
    // 從html來的資料值都是字串，需要轉為數字
    display(Number(yy.value), Number(mm.value))
  }
})
