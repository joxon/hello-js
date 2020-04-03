/**
 * https://leetcode.com/problems/maximum-subarray/
 *
 * ! Pick the locally optimal move at each step, and that will lead to the globally optimal solution.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len = nums.length;
  let best = nums[0];
  for (let i = 1; i < len; ++i) {
    // if the previous number is good then we will take it
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    // else we will just begin with a new number
    best = Math.max(nums[i], best);
  }
  return best;
};
