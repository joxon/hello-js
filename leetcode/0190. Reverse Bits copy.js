/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  const SIZE = 31
  let rev = 0
  for (let i = SIZE; i >= 0; --i) {
    // 把左边的bit移到最右边，然后清掉其他bit
    // 把最右的bit左移到适合的位置
    // JS把bit31当作符号位
    rev |= ((n >> i) & 1) << (SIZE - i)
    // console.log(i, toBinaryString(rev))
  }
  // 转为无符号数
  rev >>>= 0
  // console.log(toBinaryString(n))
  // console.log(toBinaryString(rev))
  return rev
}

function toBinaryString(num) {
  return num.toString(2).padStart(32, '0')
}
// console.log(reverseBits(1))
// console.log(reverseBits(3))
// console.log(reverseBits(7))
// console.log(reverseBits(0xf0000000))
// console.log(reverseBits(0x0000000f))
// 1111 1111 1111 1111 1111 1111 1111 1101
console.log(reverseBits(0xfffffffd))

// > a = 0xf0000000
// 4026531840
// > a.toString(2)
// '11110000000000000000000000000000'
// > a |= 0x80000000
// > a.toString(2)
// '-10000000000000000000000000000'

// > a = 0x80000000
// 2147483648
// > a.toString(2)
// '10000000000000000000000000000000'
// > a |= 0x80000000
// -2147483648
// > a.toString(2)
// '-10000000000000000000000000000000'
