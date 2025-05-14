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