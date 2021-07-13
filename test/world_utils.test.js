import { expect } from 'chai';
import {
  createGrid,
  cloneGrid,
  isInsideWorld,
  calculateIslands,
  dfs
} from '../src/utils/world_utils';

describe('World Utils', () => {
  it('should create grid from width and height', () => {
    const grid = createGrid({
      width: 5,
      height: 2
    });

    const expectedGrid = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];

    expect(grid).to.eql(expectedGrid);
  });

  it('should clone a grid', () => {
    const originalGrid = [
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0]
    ];

    const expectedGrid = [
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0]
    ]

    expect(cloneGrid(originalGrid)).to.eql(expectedGrid);
  });

  it('should test that an island is inside the world', () => {
    const grid = [
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    expect(isInsideWorld(grid, 0, 4)).to.be.equals(true);
    expect(isInsideWorld(grid, 0, 0)).to.be.equals(false);
    expect(isInsideWorld(grid, 4, 0)).to.be.equals(false);
    expect(isInsideWorld(grid, 4, 4)).to.be.equals(false);
    expect(isInsideWorld(grid, 2, 2)).to.be.equals(true);
  });

  it ('should DFS and convert all neighbors items into 0 (not visited)', () => {
    const grid = [
      [1, 1, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 0, 1]
    ];

    const expectedGrid = [
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1]
    ]

    expect(dfs(grid, 0, 0)).to.eql(expectedGrid);
  });

  it('should calculate the number of islands a world has', () => {
    const gridOne = [
      [1, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 1]
    ];

    const gridTwo = [
      [1, 1, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 0, 1]
    ];

    const gridThree = [
      [1, 1, 0, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [1, 1, 0, 1]
    ];

    expect(calculateIslands(gridOne)).to.be.equals(4);
    expect(calculateIslands(gridTwo)).to.be.equals(2);
    expect(calculateIslands(gridThree)).to.be.equals(3);
  })
});