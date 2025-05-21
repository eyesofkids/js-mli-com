// sync 同步
let a = 1
let b = a + 1 + 4 * 2
let c = b + 6

console.log(a)
console.log(b)
console.log(c)

// async 非同步(不同步、異步)
console.log('x')

setTimeout(() => {
  console.log('y')
}, 0)

console.log('z')


// 建立promise物件
const promise = new Promise((resolve, reject) => {
  // fulfilled
  resolve(3)

  // rejected
  reject('Error....Error....bye')
})

// 對promise物件進行操作，then針對有實現值，catch針對錯誤處理
promise
  .then((value) => {
    console.log('fulfilled', value)
    return value + 1
  })
  .then((value) => {
    console.log('fulfilled', value)
    return value + 2
  })
  .catch((reason) => {
    console.log('reject', reason)
  })

  