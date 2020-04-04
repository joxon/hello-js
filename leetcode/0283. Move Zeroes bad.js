/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const res = [];
  nums.forEach((num) => {
    if (num !== 0) res.push(num);
  });
  const diff = nums.length - res.length;
  for (let i = 0; i < diff; i++) {
    res.push(0);
  }
  res.forEach((num) => {
    nums.shift();
    nums.push(num);
  });
};
