import React from "react";
import "./Cell.css";

export default class Cell extends React.Component {

	constructor(props) {
		super(props); 
		this.state = { 
				row: props.row,
				col: props.col,
				isVisited: props.isVisited,
				isWall: props.isWall,
				isStart: props.isStart,
				isEnd: props.isEnd,
				}
	}
	
	render() {
		const extraClassName = 
		this.state.isVisited ? 'cell-visited' :
		this.state.isEnd ? 'cell-end' : 
		this.state.isStart ? 'cell-start': 
		this.state.isWall ? 'cell-wall' : '';

		return (
			<div 
				className={`cell ${extraClassName}`}
				id = {`cell-${this.state.row}-${this.state.col}`}
				onMouseDown={this.props.onMouseDown}
			>
			</div>
		);
	}
}
