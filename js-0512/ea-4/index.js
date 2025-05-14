// 迴圈&迭代
//-----------
// for
const ac = [1, 2, 3]

for (let i = 0; i < ac.length; i++) {
  ac[i] = ac[i] * 2
}

console.log(ac)

// forEach
const ab = [1, 2, 3]

ab.forEach((v, i) => {
  ab[i] = v * 2
})

console.log(ab)

// map
const ad = [1, 2, 3]
const ae = ad.map((v, i) => {
  return v * 2
})

console.log(ae)

// --------------------
// for迴圈處理陣列
const aa = []

for (let i = 0; i < 10; i++) {
  aa.push(i + 1)
}

console.log(aa)
