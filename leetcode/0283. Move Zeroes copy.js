/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let positionToReplace = -1;
  let zeroCounts = 0;
  nums.forEach((num, idx, arr) => {
    if (num === 0) ++zeroCounts;
    if (positionToReplace === -1 && num === 0) {
      // make it a start point
      positionToReplace = idx;
    } else if (positionToReplace !== -1 && num !== 0) {
      // move the pointer step by step
      arr[positionToReplace++] = num;
    }
  });
  // replace all that come after with 0
  for (let i = 0; i < zeroCounts; ++i) {
    nums[nums.length - 1 - i] = 0;
  }
};

moveZeroes([0, 1, 0, 3, 12]);
