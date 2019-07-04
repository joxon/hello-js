/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b)
    const firstStone = stones.pop()
    const secondStone = stones.pop()
    const smashed = firstStone - secondStone
    if (smashed) stones.push(smashed)
  }
  return stones.length === 1 ? stones[0] : 0
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))
console.log(lastStoneWeight([8, 10, 4]))
