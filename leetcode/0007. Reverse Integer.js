/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let sx = x.toString()
  let srev = ''
  for (let i = sx.length - 1; i >= 0; --i) {
    srev += sx[i]
  }

  const irev = srev.endsWith('-')
    ? Number('-' + srev.substr(0, srev.length - 1))
    : Number(srev)
  return -(2 ** 31) <= irev && irev <= 2 ** 31 - 1 ? irev : 0
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(-120))
