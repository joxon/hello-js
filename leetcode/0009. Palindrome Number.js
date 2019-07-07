/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const s = x.toString()
  const r = s
    .split('')
    .reverse()
    .join('')
  return s === r
}

console.log(isPalindrome(121))
console.log(isPalindrome(0))
console.log(isPalindrome(-121))
console.log(isPalindrome(11))
