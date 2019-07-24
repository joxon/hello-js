// 基于执行用时为 204 ms 的范例进行修改
// 144 ms, 132 ms
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  dominoes.forEach(domino => {
    if (domino[0] > domino[1]) [domino[0], domino[1]] = [domino[1], domino[0]]
  })
  dominoes.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))

  let groupHead = 0,
    totalCount = 0
  const len = dominoes.length
  while (groupHead < len - 1) {
    let groupCount = 1,
      curr = dominoes[groupHead],
      nextIdx = groupHead + groupCount,
      next = dominoes[nextIdx]
    while (nextIdx < len && curr[0] === next[0] && curr[1] === next[1]) {
      ++groupCount, ++nextIdx, (next = dominoes[nextIdx])
    }
    totalCount += groupCount === 1 ? 0 : (groupCount * (groupCount - 1)) / 2
    groupHead += groupCount
  }

  return totalCount
}

// console.log(numEquivDominoPairs([[1, 2], [3, 4], [5, 6], [2, 1]])) // 1
// console.log(numEquivDominoPairs([[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]])) // 3
// console.log(numEquivDominoPairs([[1, 1], [1, 2], [1, 1], [1, 2], [2, 2]])) // 2
// console.log(numEquivDominoPairs([[1, 1], [1, 1], [1, 1], [1, 1], [2, 2]])) // 6
// console.log(
//   numEquivDominoPairs([[2, 2], [1, 2], [1, 2], [1, 1], [1, 2], [1, 1], [2, 2]])
// ) // 5
console.log(
  numEquivDominoPairs([
    [2, 1],
    [5, 4],
    [3, 7],
    [6, 2],
    [4, 4],
    [1, 8],
    [9, 6],
    [5, 3],
    [7, 4],
    [1, 9],
    [1, 1],
    [6, 6],
    [9, 6],
    [1, 3],
    [9, 7],
    [4, 7],
    [5, 1],
    [6, 5],
    [1, 6],
    [6, 1],
    [1, 8],
    [7, 2],
    [2, 4],
    [1, 6],
    [3, 1],
    [3, 9],
    [3, 7],
    [9, 1],
    [1, 9],
    [8, 9]
  ])
) // 11
