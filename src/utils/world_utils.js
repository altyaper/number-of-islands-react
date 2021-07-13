const createGrid = ({ width, height }) => {
  const grid = [];
    for (let i = 0; i < height; i++) {
      grid[i] = [];
      for (let j = 0; j < width; j++) {
        grid[i][j] = 0;
      }
    }
    return grid;
}

const cloneGrid = grid => {
  const cloneGrid = [];
  for (let i = 0; i < grid.length; i++) {
    const element = Array.from(grid[i]);
    cloneGrid.push(element)
    for (let j = 0; j < grid.length; j++) {
      cloneGrid[i][j] = grid[i][j];
    }
  }
  return cloneGrid;
}

const isInsideWorld = (grid, i, j) => {
  return j >= 0 &&      // Verify is not out from left
  i >= 0 &&             // Verify is not out from top
  i < grid.length &&    // Verify is not out from bottom
  j < grid[i].length && // Verify is not out from right
  grid[i][j] === 1;
}

const dfs = (grid, i, j) => {
  let queue = [[i, j]];

  while(queue.length) {
    const [i, j] = queue.shift(); // Remove cordinades from queue
    grid[i][j] = 0; // Marked it as visited

    const up = isInsideWorld(grid, i - 1, j);
    const right = isInsideWorld(grid, i, j + 1);
    const down = isInsideWorld(grid, i + 1, j);
    const left = isInsideWorld(grid, i, j - 1);

    if (up) queue.push([i - 1, j])
    if (right) queue.push([i, j + 1])
    if (down) queue.push([i + 1, j]);
    if (left) queue.push([i, j - 1])
  }
  return grid;
}

const calculateIslands = grid => {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        islands += 1;
        dfs(grid, i, j);
      }
    }
  }
  return islands;
}

module.exports = {
  createGrid,
  cloneGrid,
  dfs,
  calculateIslands,
  isInsideWorld
}