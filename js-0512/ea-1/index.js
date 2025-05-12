// 函式傳入參數預設值(es6)
// function sum(a=1, b=2) {
//   return a + b
// }

// 使用ES5以前的"指定預設值"語法
function sum(a, b) {
  // or邏輯運算(前面是falsy用後面的值)
  const va = a || 1
  const vb = b || 2
  return va + vb
}

console.log(sum(1, 2))

console.log(sum(0))
