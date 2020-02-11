import React from "react";
import Cell from "./Cell/Cell";
import "./Astar.css";

export default class Astar extends React.Component {
  
  constructor() {
    super();
    this.grid = 0; // ??? init
  }

  create2DArray(numRows, numColumns) {
    let array = new Array(numRows); 
   
    for(let i = 0; i < numColumns; i++) {
      array[i] = new Array(numColumns); 
    }
   
    return array; 
  }

  // fills grid with component
  fillGrid(obj) {
    let grid = this.create2DArray(20,20);
    
    // .length only works for n by n matrices
    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid.length; j++) {
        grid[i][j] = obj; 
      }
    }

    return grid; 
  }

  render() {
    this.grid = this.fillGrid(<Cell />);
    return (
      <div className="grid">
        {this.grid}
      </div>
    );
  }
}