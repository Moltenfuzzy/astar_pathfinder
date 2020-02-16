import React from "react";
import Cell from "./Cell/Cell";
import "./AstarPathfinder.css";
import { Astar } from "../Algorithms/Astar.js"

// TODO: Fix bug with grid thats displaying, each cell doesnt have correct row and col
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
  // Also this can be turned into a function

  constructor() { 
    super(); 
    this.grid = getInitialGrid();
  }

  Visualize() {
    // how do i get the updated grid ??
    const grid = this.grid; 
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

  render() {
    return (
      <div>
        <button style={{marginTop: "50px"}}onClick={() => this.Visualize()}>
          Visualize 
        </button>
        <div className="grid">
          {this.grid}
        </div>
      </div>
    );
  }
}

// REMOVE MAGIC NUMBERS
function getInitialGrid() {
  let grid = create2DArray(20,30);

  for(let i = 0; i < 20; i++) {
    for(let j = 0; j < 30; j++) {
      // TODO: CHANGE THESE TO CONSTANTS OR ALLOW USER TO INPUT LOCATION
      if(i === START_POS.row && j === START_POS.col) {
        // This is why we need to pass props into child components
        // If we don't then it wouldnt define these properties im passing in the component
        grid[i][j] = <Cell row={i} col={j} isWall={false} isStart={true} isEnd={false}/>;
      }
      else if(i === END_POS.row && j === END_POS.col) {
        grid[i][j] = <Cell row={i} col={j} isWall={false} isStart={false} isEnd={true}/>;
      }
      else if(i == 15 && j == 15) {
        grid[i][j] = <Cell row={i} col={j} isWall={true} isStart={false} isEnd={false}/>;
      }
      else {
        grid[i][j] = <Cell row={i} col={j} isWall={false} isStart={false} isEnd={false}/>; 
      }
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
