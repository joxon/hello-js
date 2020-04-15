/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = [1];
  const len = nums.length;
  for (let i = 1; i < len; ++i) {
    ans[i] = nums[i - 1] * ans[i - 1];
  }
  let productRight = 1;
  for (let i = len - 1; i >= 0; --i) {
    ans[i] = ans[i] * productRight;
    productRight *= nums[i];
  }
  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
