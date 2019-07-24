// 执行用时：1356 ms
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  dominoes.forEach(domino => domino.sort((a, b) => a - b))
  dominoes.sort((a, b) => a[0] - b[0])
  // 只能按一个标准排序？不。试试下面
  // dominoes.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))

  let count = 0
  let i = 0
  const len = dominoes.length
  while (i < len - 1) {
    let j = 0,
      curr = dominoes[i],
      next = dominoes[i + 1]
    while (curr[0] === next[0]) {
      if (curr[1] === next[1]) ++count
      let nextIdx = i + 1 + ++j
      if (nextIdx >= len) break
      next = dominoes[nextIdx]
      // 注意最后一组在比较时可能会越界
    }
    ++i
  }

  return count
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
)
