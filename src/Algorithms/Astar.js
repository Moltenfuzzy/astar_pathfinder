// Pseudocode

// // A* (star) Pathfinding
// // Initialize both open and closed list
// let the openList equal empty list of nodes
// let the closedList equal empty list of nodes
// // Add the start node
// put the startNode on the openList (leave it's f at zero)
// // Loop until you find the end
// while the openList is not empty
//     // Get the current node
//     let the currentNode equal the node with the least f value
//     remove the currentNode from the openList
//     add the currentNode to the closedList
//     // Found the goal
//     if currentNode is the goal
//         Congratz! You've found the end! Backtrack to get path
//     // Generate children
//     let the children of the currentNode equal the adjacent nodes
    
//     for each child in the children
//         // Child is on the closedList
//         if child is in the closedList
//             continue to beginning of for loop
//         // Create the f, g, and h values
//         child.g = currentNode.g + distance between child and current
//         child.h = distance from child to end
//         child.f = child.g + child.h
//         // Child is already in openList
//         if child.position is in the openList's nodes positions
//             if the child.g is higher than the openList node's g
//                 continue to beginning of for loop
//         // Add the child to the openList
//         add the child to the openList

class Node {
	constructor(parent = null, pos = null) {
		this.parent = parent;
		this.pos = pos;
		this.f = 0;
		this.g = 0;
		this.h = 0;
	}
}

// pass in the grid, start and end locations
export function Astar(grid, start, end) {

	let start_node = new Node(null, start);
	let end_node = new Node(null, end); 

	let open_list = [];
	let closed_list = []; 

	open_list.push(start_node);

	while(open_list.length > 0) {
		let current_node = open_list[0];
		let current_index = 0; 

		for(let i = 0; i < open_list.length; i++) {
			// total cost of node(i) less than current node, 
			// assign node(i) to current node
			if(open_list[i].f < current_node.f) {
				current_node = open_list[i];
				current_index = i; 
			}
		}

		// removes current index from open list (index, amount of elements)
		open_list.splice(current_index,1); 
		closed_list.push(current_node); 

		// console.log(isEqual(current_node, end_node));

		// BUG: Open list is contains too many nodes, closed list is holding 1/10 of open list
		if(isEqual(current_node, end_node)) {
			let path = [];
			let current = current_node;

			while(current != null) {
				path.push(current.pos);
				current = current.parent;
			}
			return path.reverse();
		}

		let children = [];

		// adjacent cells (REFFACTOR INTO A FOR LOOP)
		let neighbors = [
			{row: 0, col: -1}, 
			{row: 0, col: 1}, 
			{row: -1, col: 0}, 
			{row: 1, col: 0}, 
			{row: -1, col: -1}, 
			{row: -1, col: 1}, 
			{row: 1, col: -1}, 
			{row: 1, col: 1}
		]; 
	
		// BUG: doesnt push any children, so open_list will be 0
		// Generating Children
		for(let i = 0; i < neighbors.length; i++) {
			let node_pos = {
				row: current_node.pos.row + neighbors[i].row,
				col: current_node.pos.col + neighbors[i].col
			};

			// CHECK IF IN RANGE
			if(node_pos.row > grid.length - 1 || node_pos.row < 0 || node_pos.col > grid[grid.length-1].length - 1 || node_pos.col < 0)
				continue; 

			// Ensuring not wall
			if(grid[node_pos.row][node_pos.col].isWall)
				continue;
		
			children.push(new Node(current_node, node_pos)); 
		}

		// Looping through children
		for(let i = 0; i < children.length; i++) {

			for(let j = 0; j < closed_list.length; j++) {
				if(children[i].pos === closed_list[j].pos) {
					continue; 
				}
			}

			children[i].g = current_node.g + 1;
			// Pythagoren Theorem => a^2 + b^2 = c^2
			children[i].h = Math.pow((children[i].pos.row - end_node.pos.row), 2) + Math.pow((children[i].pos.col - end_node.pos.col), 2);
			children[i].f = children[i].g + children[i].h; 

			for(let j = 0; j < open_list.length; j++) {
				if(isEqual(children[i], open_list[j]) && children[i].g > open_list[j].g)
					continue;
			}

			open_list.push(children[i]); 
		}
	}
}

function isEqual(current_node, end_node) {
	return (current_node.pos.row === end_node.pos.row) && (current_node.pos.col === end_node.pos.col);
}

