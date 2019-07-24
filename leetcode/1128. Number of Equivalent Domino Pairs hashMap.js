/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const map = new Map()
  dominoes.forEach(domino => {
    const dominoStr =
      domino[0] > domino[1]
        ? [domino[1], domino[0]].toString()
        : domino.toString()
    if (map.has(dominoStr)) {
      map.set(dominoStr, map.get(dominoStr) + 1)
    } else {
      map.set(dominoStr, 1)
    }
  })
  let total = 0
  for (let val of map.values()) {
    total += val === 1 ? 0 : (val * (val - 1)) / 2
  }
  return total
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
