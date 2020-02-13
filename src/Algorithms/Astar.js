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
	console.log(start.row); 

	let start_node = new Node(null, start);
	let end_node = new Node(null, end); 

	let open_list = [];
	let closed_list = []; 

	open_list.push(start_node);

	while(open_list.length > 0) {
		let current_node = open_list[0];
		let current_index = 0; 

		for(let i = 0; i < open_list.length; i++) {
			if(open_list[i].f < current_node.f) {
				current_node = open_list[i];
				current_index = i; 
			}
		}

		// removes current index from open list (index, amount of elements)
		open_list.splice(current_index,1); 
		closed_list.push(current_node); 

		if(current_node === end_node) {
			let path = [];
			let current = current_node;

			while(current !== null) {
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
	
		// Generating Children
		for(let i = 0; i < neighbors.length; i++) {
			let node_pos = {
				row: current_node.pos.row + neightors[i].row,
				col: current_node.pos.row + neighbors[i].col
			};

			// CHECK IF IN RANGE
			if(node_pos.row > ((grid.length - 1) || node_position))
				continue; 
			if(grid[node_pos.row][node_pos.col] !== 0)
				continue;
		
			children.push(new Node(current_node, node_position)); 
		}

		// Looping through children
		for(let child = 0; child < children.length; child++) {
			for(let closed_child = 0; closed_child < closed_list.length; closed_child++) {
				if(children[child] === closed_list[closed_child]) {
					continue; 
				}
			}
		}
	
	}

	
}


