import React from "react";
import "./Cell.css";

export default class Cell extends React.Component {

	render() {
		const {
			row,
			col,
			isVisited,
			isEnd,
			isStart,
			isWall,
			onMouseDown
		} = this.props;

		const extraClassName = 
		isVisited ? 'cell-visited' :
		isEnd ? 'cell-end' : 
		isStart ? 'cell-start': 
		isWall ? 'cell-wall' : '';

		return (
			<div 
				className={`cell ${extraClassName}`}
				id = {`cell-${row}-${col}`}
				onMouseDown={onMouseDown}
			>
			</div>
		);
	}
}
