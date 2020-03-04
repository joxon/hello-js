/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (nums == null || nums.length < 2) {
    return [];
  }

  const map = new Map();
  map.set(nums[0], 0);

  const len = nums.length;
  for (let i = 1; i < len; i++) {
    const num = nums[i];
    const other = target - num;
    if (map.has(other)) {
      return [map.get(other), i];
    } else {
      map.set(num, i);
    }
  }

  return [];
};
