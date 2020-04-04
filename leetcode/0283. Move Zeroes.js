/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let positionToReplace = -1;
  nums.forEach((num, idx, arr) => {
    if (positionToReplace === -1 && num === 0) {
      // make it a start point
      positionToReplace = idx;
    } else if (positionToReplace !== -1 && num !== 0) {
      // move the pointer step by step
      arr[positionToReplace++] = num;
    }
  });
  // replace all that come after with 0
  if (positionToReplace !== -1) {
    while (positionToReplace < nums.length) {
      nums[positionToReplace++] = 0;
    }
  }
};

moveZeroes([0, 1, 0, 3, 12]);
