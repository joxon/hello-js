// 执行用时为 204 ms 的范例
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  dominoes.forEach(item => {
    if (item[0] > item[1]) {
      ;[item[0], item[1]] = [item[1], item[0]]
    }
  })
  dominoes.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })
  let count = 0
  let bol = false
  let result = 0
  for (let i = 1, pre = dominoes[0]; i < dominoes.length; i++) {
    const temp = dominoes[i]
    if (pre[0] == temp[0] && pre[1] == temp[1]) {
      if (!bol) {
        bol = true
        count = 2
      } else {
        count++
      }
    } else {
      bol = false
      result += getNums(count)
      count = 0
    }
    pre = temp
  }
  if (count != 0) {
    result += getNums(count)
  }
  return result
}

var getNums = n => {
  if (n == 1) return 0
  if (n == 2) return 1
  return (n * (n - 1)) / 2
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
