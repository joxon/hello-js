/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const map = new Map(); // to record where the sum occured for the FIRST time
  let sum = 0; // add all nums to it. Draw a line chart and you will understand
  let max = 0; // our result

  map.set(0, -1); // sum 0 occured at -1 (base case). Because index begins at 0
  nums.forEach((num, idx) => {
    sum += num === 1 ? 1 : -1;
    if (map.has(sum)) {
      max = Math.max(max, idx - map.get(sum));
    } else {
      map.set(sum, idx);
    }
  });

  return max;
};

console.log(findMaxLength([0, 1, 1, 0, 1, 1, 1, 0])); // 4
