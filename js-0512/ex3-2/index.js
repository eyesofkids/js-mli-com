// 以下獲取DOM各元素物件實體
const result = document.querySelector('#result')

// 定義年與月
const year = 2025
const month = 5

// 準備一個7x6=42個成員的陣列

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

console.log('frontData', frontData)
console.log('contentData', contentData)
console.log('endData', endData)

// 4. 組合為一個有42成員的陣列
const allData = [...frontData, ...contentData, ...endData]

console.log('allData', allData)

