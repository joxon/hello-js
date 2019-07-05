/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1, 1]
  let rowOld = [1, 1]
  let rowNew
  while (rowIndex > 1) {
    rowNew = [1]
    for (let i = 0; i < rowOld.length - 1; ++i) {
      rowNew.push(rowOld[i] + rowOld[i + 1])
    }
    rowNew.push(1)
    rowOld = rowNew
    --rowIndex
  }
  return rowNew
}

console.log(getRow(0))
console.log(getRow(1))
console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(4))
