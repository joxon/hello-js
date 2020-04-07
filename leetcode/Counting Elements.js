// https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3289/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  const set = new Set();
  arr.forEach((num) => set.add(num));

  let count = 0;
  arr.forEach((num) => {
    if (set.has(num + 1)) {
      ++count;
    }
  });
  return count;
};

console.log(countElements([1, 2, 3])); // 2
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7])); // 0
console.log(countElements([1, 3, 2, 3, 5, 0])); // 3
console.log(countElements([1, 1, 2, 2])); // 2
