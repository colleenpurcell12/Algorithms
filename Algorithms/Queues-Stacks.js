// Queues first in first out (from the front of the line)
// stacks, last in first out (off the top)

**** Queues ****
//operations and implementations

// preserve insertion order
// first in first out (from the front of the line)
// Ex task queue

Three properties of the constructor:
	Enqueue (like push)
	Dequeue (like pop)
	Length
 
 function Queue(optElements){
 	optElements instanceof Array ? this.items = optElements : this.items = []
 	this.length = this.items.length
 }

Queue.prototype.enqueue = funtction(item){
	this.length +=1
	return this.items.push(item) // add to end
}

Queue.prototype.dequeue = funtction(item){
	if( this.length >0){ 
		this.length -=1
	}
	return this.items.shift() //take off front
}


*** Stacks? ****