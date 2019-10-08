/**
 * @param {number[]} nums
 */
function getMode(nums) {
  if (nums === null || nums.length <= 0) return null

  nums.sort((a, b) => a - b)
  let last = nums[0]
  let lastFreq = 0
  let mode = null
  let modeFreq = 0
  for (let num of nums) {
    if (num === last) {
      ++lastFreq
    } else {
      last = num
      lastFreq = 1
    }
    if (lastFreq > modeFreq) {
      mode = last
      modeFreq = lastFreq
    }
  }
  return [mode, modeFreq]
}

console.log(getMode([1]))
console.log(getMode([100, 999, 999, 999, 1, 1, 2]))
