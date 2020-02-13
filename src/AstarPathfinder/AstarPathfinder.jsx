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
  col: 18
}

export default class AstarPathfinder extends React.Component {
  
  constructor() {
    super();
    this.state = {
      grid: []
    }
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({grid});

    Astar(this.grid, START_POS, END_POS);
  }

  render() {
    return (
      <div className="grid">
        {this.state.grid}
      </div>
    );
  }
}

// REMOVE MAGIC NUMBERS
function getInitialGrid() {
  let grid = create2DArray(20,25);

  for(let i = 0; i < 20; i++) {
    for(let j = 0; j < 30; j++) {
      // TODO: CHANGE THESE TO CONSTANTS OR ALLOW USER TO INPUT LOCATION
      if(i === START_POS.row && j === START_POS.col) {
        // This is why we need to pass props into child components
        // If we don't then it wouldnt define these properties im passing in the component
        grid[i][j] = <Cell row={i} col={j} isWall={false} isStart={true} isEnd={false}/>
      }
      else if(i === END_POS.row && j === END_POS.col) {
        grid[i][j] = <Cell row={i} col={j} isWall={false} isStart={false} isEnd={true}/>
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
 
  for(let i = 0; i < numColumns; i++) {
    array[i] = new Array(numColumns); 
  }
 
  return array; 
}

