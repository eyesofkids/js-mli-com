// 常數count得到的是DOM物件實體
// const count = document.getElementById('count')
// 以下是用selector(選取器)語法(對應css技術)
const count = document.querySelector('#count')

count = 1

// 加入事件監聽器
count.addEventListener('click', function () {
  // 當 count 被點擊時，將 count 的數字加 1
  count.innerText = Number(count.innerText) + 1
})

