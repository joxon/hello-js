/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const set = new Set();
  nums.forEach(num => {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  });
  return set.values().next().value;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
