import React, { cloneElement } from "react";
import Cell from "./Cell/Cell";
import "./AstarPathfinder.css";
import { Astar } from "../Algorithms/Astar.js"

const MAXROW = 20; 
const MAXCOL = 30; 

const START_POS = {
  row: 1,
  col: 1
}

const END_POS = {
  row: 18,
  col: 28
}

export default class AstarPathfinder extends React.Component {

  // dont put jsx in state
  // call the function directly inside render, and render that
  // store the data that you use to render JSX in state, and map over that state data inside render

  constructor() { 
    super(); 
    this.state = { 
      gridData: getInitialGrid()
    }
  }

  Visualize() {
    // how do i get the updated grid ??
    const grid = this.state.gridData;
    console.log(grid);
    const path = Astar(grid, START_POS, END_POS);
    this.animatePath(path);
    console.log(path); 
  } 

  animatePath(path) {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const cell = path[i];
        document.getElementById(`cell-${cell.row}-${cell.col}`).className =
          'cell cell-path';
      }, 50 * i);
    }
  }

  getWallToggledGrid(row, col) {

  }

  render() {
    // map grid data to an array
    const grid = this.state.gridData.map(row => {
      return row.map(cell => {
            return <Cell row={cell.row} col={cell.col} isVisited={cell.isVisited} isWall={cell.isWall} isStart={cell.isStart} isEnd={cell.isEnd} />
        } );
    } );

    console.log(grid); 
    return (
      <>
        <button className="btn" onClick={() => this.Visualize()}>
          Visualize 
        </button>
        <div className="grid">
          {grid}
        </div>
      </>
    );
  }
}

const createCell = (row, col, isWall=false) => {
  return ( {
    row, 
    col, 
    isVisited: false,
    isWall,
    isStart: row === START_POS.row && col === START_POS.col,
    isEnd: row === END_POS.row && col === END_POS.col, 
  });
}

function getInitialGrid() {
  let grid = create2DArray(MAXROW, MAXCOL);

  for(let i = 0; i < MAXROW; i++) {
    for(let j = 0; j < MAXCOL; j++) {
      grid[i][j] = createCell(i,j,false); 
    }
  }

  return grid; 
}

function create2DArray(numRows, numColumns) {
  let array = new Array(numRows); 
 
  for(let i = 0; i < numRows; i++) {
    array[i] = new Array(numColumns); 
  }
 
  return array; 
}
