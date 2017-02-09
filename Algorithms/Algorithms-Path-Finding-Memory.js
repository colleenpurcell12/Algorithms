// DFT pop and push, FIFO stack
// BFS shift and push, LIFO queue


var Tree = function(value){
	var newTree={}
	newTree.value = value
	newTree.children = []
	return newTree
}
//depth first search
// RECURSIVE DFT, GREAT!
Tree.prototype.traverse = function(callback){
	callback(this.value)
	if(!this.children){return}
	var child
	//while()
	for(var i = 0l i<this.children.length; i++){
		child = this.children[i]
		child.traverse(callback)
	}
}

// NON-RECURSIVE DFT 
Tree.prototype.traverse = function(callback){
	var stack = [this]
	var child	
	while(stack.length>0)
		child = stack.pop()
		callback(child.value) //even if it's only the root
		for(var i = 0; i<this.children.length; i++){
			stack.push(child.children[i])
		}
	}
}
// breadth first search
Tree.prototype.traverse = function(callback){
	var queue = [this]
	var child	
	while(queue.length>0)
		child = stack.shift()
		callback(child.value) //even if it's only the root
		if (!child.children) { continue; }
		for(var i = 0; i<this.children.length; i++){
			queue.push(child.children[i])
		}
	}
}





