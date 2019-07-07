/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const lena = a.length
  const lenb = b.length
  const lenm = lena > lenb ? lena : lenb
  a = a.padStart(lenm, '0')
  b = b.padStart(lenm, '0')
  let c = ''
  let carry = 0
  for (let i = lenm - 1; i >= 0; --i) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + carry
    if (sum === 0) {
      c = '0' + c
      carry = 0
    } else if (sum === 1) {
      c = '1' + c
      carry = 0
    } else if (sum === 2) {
      c = '0' + c
      carry = 1
    } else if (sum === 3) {
      c = '1' + c
      carry = 1
    }
  }
  return carry === 1 ? '1' + c : c
}

console.log(addBinary('1111', '1111'))
console.log(addBinary('11', '1'))
console.log(addBinary('10', '1'))
