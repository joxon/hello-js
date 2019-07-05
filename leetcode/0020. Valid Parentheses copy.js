/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let count = s.length / 2
  while (count > 0) {
    s = s
      .replace('()', '')
      .replace('[]', '')
      .replace('{}', '')
    if (s.length === 0) return true
    --count
  }
  return s.length === 0
}

console.log(isValid('()[]{}'))
console.log(isValid('([)]'))
console.log(isValid('(])'))
console.log(isValid('([])'))
console.log(isValid('(('))
