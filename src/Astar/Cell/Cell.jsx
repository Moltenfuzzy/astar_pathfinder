import React from "react";
import "./Cell.css";

export default class Cell extends React.Component {
	render() {
		const {
			col, 
			row, 
			isWall,
		} = this.props;

		return (
			<div className="cell"
				id = {`cell ${row} ${col}`}
			>
			</div>
		);
	}
}
