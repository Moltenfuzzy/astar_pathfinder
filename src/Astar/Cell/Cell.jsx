import React from "react";
import "./Cell.css";

export default class Cell extends React.Component {
	render() {
		let {
			state,
			col, 
			row, 
			color,
			isWall,
			IsShown,
		} = this.props;

		return (
			<div 
				className="cell"
				onMouseEnter={() => IsShown=true}
				onMouseLeave={() => IsShown=false}
				id = {`cell ${row} ${col}`}
			>
			</div>
		);
	}
}
