const fishPool = [
  {
    id: 1,
    weight: 100,
    color: 'white',
  },
  {
    id: 2,
    weight: 199,
    color: 'red',
  },
  {
    id: 3,
    weight: 250,
    color: 'yellow',
  },
  {
    id: 4,
    weight: 160,
    color: 'white',
  },
]

// 只需要白色(white)的魚
const r1 = fishPool.filter((v, i) => {
  return v.color === 'white'
})

console.log(r1)

// 排除掉白色(white)的魚=相當於=
// 產生一個移除掉白色(white)的魚的新陣列
const r2 = fishPool.filter((v, i) => {
  return v.color !== 'white'
})

console.log(r2)

// filter
// 移除id為2的魚
const r3 = fishPool.filter((v, i) => {
  return v.id !== 2
})

console.log(r3)

// splice
// 移除id為2的魚
// 第1步: 先找到id為2的索引值是多少
const foundIndex = fishPool.findIndex((v, i) => {
  return v.id === 2
})

// 如果有找到
if (foundIndex !== -1) {
  // 作移除動作(會更動作呼叫的陣列)
  fishPool.splice(foundIndex, 1)
}

console.log(fishPool)
