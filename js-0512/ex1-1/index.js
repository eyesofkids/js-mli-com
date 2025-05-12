const count = document.getElementById('count')

count.addEventListener('click', function () {
  count.innerText = Number(count.innerText) + 1
})
