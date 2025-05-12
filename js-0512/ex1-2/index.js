const increase = document.querySelector('#increase')
const decrease = document.querySelector('#decrease')
const total = document.querySelector('#total')

// 加入事件監聽器
increase.addEventListener('click', function () {
  // 將 total 的數字+1
  total.innerText = Number(total.innerText) + 1
})

// 加入事件監聽器
decrease.addEventListener('click', function () {
  // 將 total 的數字-1
  total.innerText = Number(total.innerText) - 1
})