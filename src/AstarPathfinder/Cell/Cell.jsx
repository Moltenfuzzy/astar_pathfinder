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
				isEnd: props.isEnd
		}
		this.handleMouseEnter = this.handleMouseEnter.bind(this); 
		this.handleMouseDown = this.handleMouseDown.bind(this); 
	}

	// TODO: ADD CONDITION FOR ISEND SO IT ISNT ISWALL AND ISEND/ISSTART

	handleMouseEnter() {
		if(!this.state.isStart)
			this.setState({isWall: true});
			// For removing walls 
		// if(this.state.isWall)
		// 	this.setState({isWall: false});
	}

	handleMouseDown() {
		if(!this.state.isStart)
			this.setState({isWall: true});
			
		console.log(this.state.isWall);
		console.log(`Row: ${this.state.row}`);
		console.log(`Col: ${this.state.col}`);
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
				onMouseEnter={this.handleMouseEnter}
				onMouseDown={this.handleMouseDown}
			>
			</div>
		);
	}
}
