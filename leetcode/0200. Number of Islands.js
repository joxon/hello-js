/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const lenRow = grid.length;
  if (lenRow === 0) return 0;
  const lenCol = grid[0].length;
  if (lenCol === 0) return 0;

  const markers = new Array(lenRow);
  for (let i = 0; i < lenRow; ++i) {
    markers[i] = new Array(lenCol).fill(0);
  }

  let count = 0;
  const markIsland = (cell, i, j) => {
    markers[i][j] = count;

    const row = grid[i];
    if (row) {
      const left = row[j - 1];
      if (left === "1" && markers[i][j - 1] === 0) markIsland(left, i, j - 1);

      const right = row[j + 1];
      if (right === "1" && markers[i][j + 1] === 0) markIsland(right, i, j + 1);
    }

    const rowUp = grid[i - 1];
    if (rowUp) {
      const up = rowUp[j];
      if (up === "1" && markers[i - 1][j] === 0) markIsland(up, i - 1, j);
    }

    const rowDown = grid[i + 1];
    if (rowDown) {
      const down = rowDown[j];
      if (down === "1" && markers[i + 1][j] === 0) markIsland(down, i + 1, j);
    }
  };

  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === "1" && markers[i][j] === 0) {
        ++count;
        markIsland(cell, i, j);
      }
    });
  });

  return count;
};

console.assert(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
  1
);

console.assert(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
  3
);
