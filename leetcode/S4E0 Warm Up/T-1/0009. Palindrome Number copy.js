/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false

  const stack = []
  const len = Math.ceil(Math.log10(x + 1))
  const half = Math.floor(len / 2)

  for (let i = 0; i < half; ++i) {
    stack.push(Math.trunc(x % 10))
    x /= 10
  }

  if (len % 2 === 1) {
    x /= 10
  }

  for (let i = 0; i < half; ++i) {
    if (stack[stack.length - 1] === Math.trunc(x % 10)) stack.pop()
    else return false
    x /= 10
  }

  return true
}

// log10(1)=0
// log10(10)=1
// log10(100)=2

console.log(isPalindrome(121))
console.log(isPalindrome(0))
console.log(isPalindrome(-121))
console.log(isPalindrome(11))
