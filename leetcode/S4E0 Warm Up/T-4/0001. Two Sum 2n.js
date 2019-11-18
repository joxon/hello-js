/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const m = new Map()
  // first pass, bad
  nums.forEach((num, index) => m.set(num, index))
  // second pass
  const len = nums.length
  for (let index = 0; index < len; ++index) {
    let anotherNum = target - nums[index]
    let anotherIndex = m.get(anotherNum)
    if (anotherIndex && anotherIndex !== index) {
      return [index, anotherIndex]
    }
  }
}
