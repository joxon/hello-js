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
  let localBest = nums[0];
  let globalBest = nums[0];
  for (let i = 1; i < len; ++i) {
    // ! How to be greedy: every time you want more
    localBest = Math.max(nums[i], nums[i] + localBest);
    globalBest = Math.max(localBest, globalBest);
  }
  return globalBest;
};
