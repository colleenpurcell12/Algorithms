// Trees: ike an HTML DOM is a tree

// Binary tree
	//--type of graph
// 	--every node has 2 children
// 	--left child is lesser than parent, and right child is greater

// If its sorted and balanced, you half the options at each step so a million item tree can be solved in 20 steps.

// add
// remove a node and its children/subtree
// balance to make it optimal for searching
// search 


// root node
// 3 attributes data, right and left


 function Node(data, right and left){
 	this.data = data
 	this.left = left || null;
 	this.right = right || null
 }
 function BTree(){
  		this.root = null
  		this.length = 0
 }

BTree.prototype.add = function(data){
	var node = new Node(data)
	this.length += 1
	if(this.root === null){ return this.root = node}
		
	var currentNode = this.root
	var parentNode = null
	while(currentNode){
		parentNode = currentNode
		if(data.id < currentNode.data.id){ //is data of new node less? than it should go to the left, unless there is already a left node descendent in which case that becomes the new node
			currentNode = currentNode.left
			if(currentNode === null){ 
				return parentNode.left = node
			}
		} else { 
			currentNode = currentNode.right 
			if(currentNode === null){ 
				return parentNode.right = node
			}
		}
	}
}











