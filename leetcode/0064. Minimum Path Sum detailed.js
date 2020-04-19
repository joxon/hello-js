/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const lenRow = grid.length;
  const lenCol = grid[0].length;

  // first row: take left
  for (let col = 1; col < lenCol; ++col) {
    const left = grid[0][col - 1];
    grid[0][col] += left;
  }

  // first column: take up
  for (let row = 1; row < lenRow; ++row) {
    const up = grid[row - 1][0];
    grid[row][0] += up;
  }

  for (let row = 1; row < lenRow; row++) {
    for (let col = 1; col < lenCol; col++) {
      // middle cells: take up or left
      const up = grid[row - 1][col];
      const left = grid[row][col - 1];
      grid[row][col] += Math.min(up, left);
    }
  }

  return grid[lenRow - 1][lenCol - 1];
};
