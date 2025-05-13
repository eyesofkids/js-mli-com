function foo() {
  return arguments[0] + arguments[1]
}

console.log(foo());
console.log(foo(1, 2));

(function () {
  console.log(1234)
})()
