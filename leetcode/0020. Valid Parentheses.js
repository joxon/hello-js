/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0) return true
  if (s.length === 1) return false
  let a = []
  for (let i = 0; i < s.length; ++i) {
    let ch = s[i]
    if (ch === '(' || ch === '{' || ch === '[') a.push(ch)
    else if (ch === ')' && a[a.length - 1] === '(') a.pop()
    else if (ch === '}' && a[a.length - 1] === '{') a.pop()
    else if (ch === ']' && a[a.length - 1] === '[') a.pop()
    else return false
  }
  return a.length === 0
}

console.log(isValid('()[]{}'))
console.log(isValid('([)]'))
console.log(isValid('(])'))
console.log(isValid('([])'))
console.log(isValid('(('))
