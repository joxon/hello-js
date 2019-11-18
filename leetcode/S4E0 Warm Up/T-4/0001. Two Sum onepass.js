/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const m = new Map()
  const len = nums.length
  for (let i = 0; i < len; ++i) {
    let a = nums[i]
    let b = target - a
    let anotherIndex = m.get(b)
    if (m.has(b)) {
      return [m.get(b), i]
    } else {
      m.set(a, i)
    }
  }
}

console.log(twoSum([1, 3, 4, 2], 6))
console.log(twoSum([2, 7], 9))
