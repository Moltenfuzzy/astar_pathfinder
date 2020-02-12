import React from "react";
import "./Cell.css";

export default class Cell extends React.Component {

	constructor(props) {
		super(props); 
		this.state = { 
				row: props.row,
				col: props.col,
				isWall: props.isWall,
				isStart: props.isStart,
				isEnd: props.isEnd
		}
		this.handleMouseEnter = this.handleMouseEnter.bind(this); 
		this.handleMouseDown = this.handleMouseDown.bind(this); 
	}

	handleMouseEnter() {
		this.setState({isWall: true});
		console.log("works");
	}

	handleMouseDown() {
		console.log("Down");
		console.log(`Row: ${this.state.row}`);
		console.log(`Col: ${this.state.col}`);
	}

	render() {
		const extraClassName = 
		this.state.isEnd ? 'cell-end' : 
		this.state.isStart ? 'cell-start': 
		this.state.isWall ? 'cell-wall' : '';

		return (
			<div 
				className={`cell ${extraClassName}`}
				id = {`cell ${this.state.row} ${this.state.col}`}
				onMouseEnter={this.handleMouseEnter}
				onMouseDown={this.handleMouseDown}
			>
			</div>
		);
	}
}
