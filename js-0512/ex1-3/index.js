// 以下獲取DOM各元素物件實體
const money = document.querySelector('#money')
const usd2twd = document.querySelector('#usd2twd')
const twd2usd = document.querySelector('#twd2usd')
const result = document.querySelector('#result')

// 匯率公式: 1 USD 美金 = 30.42 TWD 新台幣
const exchangeRate = 30.42

// 從輸入的金額(字串) => 幾個小數點(digit)的字串 => 加入千位符的金額字串
// type = 'multiply' | 'division'
const converter = (value, rate, digit = 0, type = 'multiply') => {
  // 先乘或除匯率
  const a1 = type === 'multiply' ? Number(value) * rate : Number(value) / rate
  // 調整小數點位數`(Number).toFixed(0)` 從數字回傳一個小數點後0位的"字串"
  const a2 = Number(a1.toFixed(digit))
  // 呈現千位符`(Number).toLocaleString()` 呈現時加入千位符號
  return a2.toLocaleString()
}

// 美金 -> 新台幣
usd2twd.addEventListener('click', function () {
  // input文字輸入框使用 `.value`得到輸入值
  // 從html中得到的值對js來說一定是字串值
  //   const cValue = (Number(money.value) * exchangeRate).toFixed(0)
  // `(Number).toLocaleString()` 呈現時加入千位符號
  result.innerHTML =
    '轉換金額(新台幣): NT$' +
    converter(money.value, exchangeRate, 0, 'multiply')
})

// 新台幣 -> 美金
twd2usd.addEventListener('click', function () {
  result.innerHTML = '轉換金額(美金): $' + converter(money.value, exchangeRate, 2, 'division')
})
