/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const lenRow = grid.length;
  const lenCol = grid[0].length;

  // up -> down
  for (let i = 0; i < lenRow; i++) {
    // left -> right
    for (let j = 0; j < lenCol; j++) {
      // first row: take left
      if (i === 0 && j !== 0) grid[i][j] += grid[i][j - 1];
      // first column: take up
      else if (i !== 0 && j === 0) grid[i][j] += grid[i - 1][j];
      // middle cells: take up or left
      else if (i !== 0 && j !== 0)
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[lenRow - 1][lenCol - 1];
};
