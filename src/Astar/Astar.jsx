import React from "react";
import Cell from "./Cell/Cell";
import "./Astar.css";

export default class Astar extends React.Component {
  
  constructor() {
    super();
    this.state = {
      grid: []
    }
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({grid});
  }

  render() {
    return (
      <div className="grid">
        {this.state.grid}
      </div>
    );
  }
}

function getInitialGrid() {
  let grid = create2DArray(20,20);

  // .length only works for n by n matrices
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid.length; j++) {
      grid[i][j] = <Cell row={i} col={j} />; 
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
