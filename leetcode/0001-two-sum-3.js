/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let m = new Map()
  const len = nums.length
  m.set(nums[0], 0)
  for (let index = 1; index < len; ++index) {
    let anotherNum = target - nums[index]
    let anotherIndex = m.get(anotherNum)
    if (anotherIndex !== undefined && anotherIndex !== index) {
      return [index, anotherIndex]
    }
    m.set(nums[index], index)
  }
}

console.log(twoSum([1, 3, 4, 2], 6))
console.log(twoSum([2, 7], 9))
