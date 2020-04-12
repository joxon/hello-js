/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    const stoneSmashed = Math.abs(stones.pop() - stones.pop());
    const stoneBigger = stones.findIndex((item) => item >= stoneSmashed);
    stones.splice(stoneBigger, 0, stoneSmashed);
  }
  return stones[0];
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([8, 10, 4]));
