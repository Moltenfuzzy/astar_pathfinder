import React from "react";
import "./Cell.css";

export default class Cell extends React.Component {

	constructor() {
		super(); 
		this.state = { 
				col: 0, 
				row: 0,
				color: "white",
				isWall: false,
		}
	}

	render() {
		return (
			<div 
				className="cell"
				id = {`cell ${this.state.row} ${this.state.col}`}
			>
			</div>
		);
	}
}
