"use client";
import React, { useState, useEffect } from "react";

interface Cell {
  isWall: boolean;
  isPath: boolean;
  isStart: boolean;
  isEnd: boolean;
  isVisited: boolean;
}

const MazeVisualizer: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [mazeGenerated, setMazeGenerated] = useState(false);
  const GRID_SIZE = 20;

  // Initialize an empty grid
  const initializeEmptyGrid = (): Cell[][] => {
    const newGrid: Cell[][] = [];
    for (let row = 0; row < GRID_SIZE; row++) {
      const currentRow: Cell[] = [];
      for (let col = 0; col < GRID_SIZE; col++) {
        currentRow.push({
          isWall: true, // Start with all walls
          isStart: row === 0 && col === 0, // top-left start point
          isEnd: row === GRID_SIZE - 1 && col === GRID_SIZE - 1, // bottom-right end point
          isVisited: false,
          isPath:false,
        });
      }
      newGrid.push(currentRow);
    }
    return newGrid;
  };

  // Depth-First Search Maze Generation
  const generateMaze = () => {
    const newGrid = initializeEmptyGrid();
    const directions = [
      [0, 2],
      [0, -2],
      [2, 0],
      [-2, 0],
    ];
    const visited = new Set<string>();

    // Depth-first search
    // algorithm for traversing or searching tree or graph data structures
    const dfs = (row: number, col: number) => {
      newGrid[row][col].isWall = false;
      visited.add(`${row}-${col}`);

      const shuffledDirections = directions.sort(() => Math.random() - 0.5);
      for (const [dx, dy] of shuffledDirections) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (
            newRow >= 0 &&
            newRow < GRID_SIZE &&
            newCol >= 0 &&
            newCol < GRID_SIZE &&
            !visited.has(`${newRow}-${newCol}`)
        ) {
          newGrid[row + dx / 2][col + dy / 2].isWall = false;
          dfs(newRow, newCol);
        }
      }
    };

    dfs(0, 0);

    // Ensure the end cell is reachable
    if (newGrid[GRID_SIZE - 1][GRID_SIZE - 1].isWall) {
      newGrid[GRID_SIZE - 1][GRID_SIZE - 1].isWall = false;
      newGrid[GRID_SIZE - 2][GRID_SIZE - 1].isWall = false;
    }

    setGrid([...newGrid]);
    setMazeGenerated(true);
  };

  // Breadth-First Search for Solving the Maze
  const solveMaze = async () => {
    if (!mazeGenerated) {
      console.log("Maze not generated yet!");
      return;
    }

    const queue: [number, number][] = [[0, 0]];
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    const newGrid = [...grid].map((row) => row.map((cell) => ({ ...cell })));

    const parents: Record<string, string | null> = {};
    parents[`0-0`] = null;

    let found = false;

    while (queue.length > 0) {
      const [row, col] = queue.shift()!;
      if (newGrid[row][col].isEnd) {
        found = true;
        break;
      }

      for (let [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (
            newRow >= 0 &&
            newRow < GRID_SIZE &&
            newCol >= 0 &&
            newCol < GRID_SIZE &&
            !newGrid[newRow][newCol].isWall &&
            !newGrid[newRow][newCol].isVisited
        ) {
          newGrid[newRow][newCol].isVisited = true;
          parents[`${newRow}-${newCol}`] = `${row}-${col}`;
          queue.push([newRow, newCol]);

          setGrid([...newGrid]); // Update for visualization
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
      }
    }

    // **Backtrack and mark the correct path**
    if (found) {
      let current = `${GRID_SIZE - 1}-${GRID_SIZE - 1}`;
      while (current !== "0-0") {
        const [r, c] = current.split("-").map(Number);
        newGrid[r][c].isVisited = false; // Remove yellow highlight
        newGrid[r][c].isWall = false;
        newGrid[r][c].isPath = true; // Mark correct path
        current = parents[current]!;
      }
      setGrid([...newGrid]);
    }
  };

  useEffect(() => {
    setGrid(initializeEmptyGrid()); // Initialize grid on component mount
  }, []);

  return (
    <div className="maze-visualizer">
      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={generateMaze}
        >
          Generate Maze
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={solveMaze}
        >
          Solve Maze
        </button>
      </div>

      {/* Grid container with explicit grid template for correct layout */}
      <div
        className={`grid border border-solid border-black`}
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
              <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-6 h-6 border 
    ${cell.isWall ? "bg-black" : ""} 
    ${cell.isVisited ? "bg-yellow-300" : ""} 
    ${cell.isPath ? "bg-green-500" : ""} 
    ${cell.isStart ? "bg-green-400" : ""} 
    ${cell.isEnd ? "bg-red-400" : ""}`}
              ></div>

          ))
        )}
      </div>
    </div>
  );
};

export default MazeVisualizer;
