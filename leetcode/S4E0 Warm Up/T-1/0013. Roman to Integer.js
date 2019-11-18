/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])
  const romans = s.split('')
  const nums = romans.map(roman => map.get(roman))
  const len = nums.length
  let int = 0
  for (let i = 0; i < len - 1; ++i) {
    if (nums[i] < nums[i + 1]) {
      int -= nums[i]
    } else {
      int += nums[i]
    }
  }
  int += nums[len - 1]
  return int
}

/*
Symbol Value
I      1
V      5
X      10
L      50
C      100
D      500
M      1000
*/

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
