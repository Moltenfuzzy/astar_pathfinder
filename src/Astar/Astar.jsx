import React from "react";
import Cell from "./Cell/Cell";
import "./Astar.css";

export default class Astar extends React.Component {

  constructor() {
    super();
    this.grid = Array(25*25 -1).fill(<Cell />); // figure out way to make grid even (even number of cells, none left out)
  }

  render() {
    return (
      <div className="grid">
        {this.grid}
      </div>
    );
  }
}