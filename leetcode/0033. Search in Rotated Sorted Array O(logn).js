/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[right]) {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    } else {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }
  return nums[left] == target ? left : -1;
};
