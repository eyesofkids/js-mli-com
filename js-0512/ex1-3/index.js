// 以下獲取DOM各元素物件實體
/**
 *  @type HTMLInputElement
 */
const money = document.querySelector('#money')
const usd2twd = document.querySelector('#usd2twd')
const twd2usd = document.querySelector('#twd2usd')
const result = document.querySelector('#result')

// 匯率公式: 1 USD 美金 = 30.42 TWD 新台幣
const exchangeRate = 30.42

/**
 * 根據給定的匯率、四捨五入精度和操作類型轉換數值。
 *
 * @param {string|number} [value=''] - 要轉換的輸入值。默認為空字符串。
 * @param {number} [rate=30] - 要應用的匯率。默認為30。
 * @param {number} [digit=0] - 要四捨五入的小數位數。默認為0。
 * @param {string} [type='multiply'] - 操作類型，可以是 'multiply' 或 'divide'。默認為 'multiply'。
 * @returns {string} - 轉換後的值，帶有千位分隔符的字符串。
 */
const converter = (value = '', rate = 30, digit = 0, type = 'multiply') => {
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
  result.innerHTML =
    '轉換金額(新台幣): NT$' +
    converter(money.value, exchangeRate, 0, 'multiply')
})

// 新台幣 -> 美金
twd2usd.addEventListener('click', function () {
  result.innerHTML =
    '轉換金額(美金): $' + converter(money.value, exchangeRate, 2, 'division')
})
