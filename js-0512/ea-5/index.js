// 拷貝(copy/clone)

const aa = [1, 2, 3]
// 展開運算子(淺拷貝，意即只能拷貝一層深度)
const ab = [...aa]

// console.log('aa', aa)
// console.log('ab', ab)

aa[2] = 333

// console.log('aa', aa)
// console.log('ab', ab)

// 深拷貝解說
const ac = [1, 2, [3, 4]]
// 展開運算子(淺拷貝，意即只能拷貝一層深度)
// const ad = [...ac]
// 深拷貝(內建語法)
// const ad = JSON.parse(JSON.stringify(ac))
// 新深拷貝api(深拷貝專用)
const ad = structuredClone(ac)

console.log('ac', ac)
console.log('ad', ad)

// 改變第一層深度
ac[0] = 111
console.log('ac', ac)
console.log('ad', ad)

// 改變第二層深度
ac[2][0] = 333
console.log('ac', ac)
console.log('ad', ad)
