function fa(a, b) {
  return a + b
}

const fb = function (a, b) {
  return a + b
}

const fc = (a, b) => a + b

//----

function log(x, y, fn) {
  const r = fn(x, y)
  console.log(r)
}

log(1, 2, fb)

log(1, 2, function (a, b) {
  return a - b
})

// add event listener
function addListener(eventName, callback) {
  if (eventName === 'click') {
    //使用者點按
    callback()
  }
}

addListener('click', function () {
  alert('使用者點按')
})
