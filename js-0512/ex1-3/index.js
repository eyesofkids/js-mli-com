// 以下獲取DOM各元素物件實體
const money = document.querySelector('#money')
const usd2twd = document.querySelector('#usd2twd')
const twd2usd = document.querySelector('#twd2usd')
const result = document.querySelector('#result')

// (1 USD 美金 = 30.31 TWD 新台幣)
// 美金 -> 新台幣
usd2twd.addEventListener('click', function () {
  // input文字輸入框使用 `.value`得到輸入值
  // 從html中得到的值對js來說一定是字串值
  // `toFixed(0)` 從數字回傳一個小數點後0位的"字串"
  const cValue = (Number(money.value) * 30.31).toFixed(0)
  // 呈現時加入千位符號
  result.innerHTML = '轉換金額(新台幣): NT$' + Number(cValue).toLocaleString()
})
