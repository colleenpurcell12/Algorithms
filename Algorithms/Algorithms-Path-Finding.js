// DFT pop and push, FIFO stack
// BFS shift and push, LIFO queue

****** Depth first traversal ****** 

// Assume the searching is of a tree instance, wth value and children
// Depth first checks if there are children of the current node, if so it calls its self recursively on each children in the this.children array.

var Tree = function(value){
	var newTree = {}
	newTree.value = value
	newTree.children = []
	return newTree
}
// RECURSIVELY
Tree.prototype.depthFirst(callback){
	callback(this.value) //maybe print it in order
	var child;
	if(!this.children){ return }
	else{
		for (var i = 0; i < this.children.length; i++) {
			child = this.children[i]
			child.depthFirst(callback)
		}
	}
}

// NON-RECURSIVE --removing and adding to stack as you go FIFO
Tree.prototype.traverse = function (callback) {
  var stack=[this]; // this starts as root node
  var child;
  while(stack.length>0) { //constantly takin the last off and invoking
    child = stack.pop();
    callback(child.value); 
    if (!child.children) { continue; }
    for (var i = child.children.length-1; i>=0; i--) { //not sure why start last child
       stack.push(child.children[i]); //adding to the end (first in first out)
    }
  }
};

// use a stack
// follow a stack until the end
// take the part followed off the stack
// try next route

//REPEAT OF SOLUTIONS FOR DEPTH FIRST
var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; // extend(newTree, treeMethods);
  return newTree;
};

Tree.prototype.traverse = function (callback) {
  callback(this.value);

  if (!this.children) {
    return;
  }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.traverse(callback);
  }
};

// another
Tree.prototype.traverse = function (callback) {
  var stack=[this];
  var n;

  while(stack.length>0) {

    n = stack.pop();
    callback(n.value);

    if (!n.children) {
      continue;
    }

    for (var i = n.children.length-1; i>=0; i--) {
       stack.push(n.children[i]);
    }
  }
};


****** Breath first search ****** 
// uses queue, LIFO
// Enque every intersection
// visit all paths at the same time


// first take root and put it in the queue array
// dequeue the first item in the queue: queue.pop()
// check if it's already been visited, if not add it to visited arrary
// then take its descendents, add it to the list
// take the next element off the list
// check it's descendents, add them to the queue
// then check the next element at the front of the queue

//BFS shift and push
//conciser
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

//original
Tree.prototype.traverse = function (callback) {
  var queue=[this];
  var n;

  while(queue.length>0) {

    n = queue.shift(); //take off from front
    callback(n.value);

    if (!n.children) {
      continue;
    }

    for (var i = 0; i< n.children.length; i++) {
       queue.push(n.children[i]); // add to back
    }
  }
};







