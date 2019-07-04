/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  const smash = (a, b) => Math.abs(a - b)

  while (stones.length !== 0 && stones.length !== 1) {
    let a = stones.splice(stones.indexOf(Math.max(...stones)), 1)[0]
    let b = stones.splice(stones.indexOf(Math.max(...stones)), 1)[0]

    let c = smash(a, b)
    if (c !== 0) {
      stones.push(c)
    }
  }

  return stones.length === 1 ? stones[0] : 0
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))
