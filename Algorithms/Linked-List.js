"use strict";
var LinkedList = function(){
  this.head = null
}
var node = function(value){
  this.value = value;
  this.next = null;
}
LinkedList.prototype.addToHead = function(value){
  var n = new node(value);
  
  if(!this.head){
    this.head = n;
    
  }else{
      // this.next = this.head; <- What you had
      n.next = this.head; // What it should be
      this.head = n;
    }
};


LinkedList.prototype.addToTail = function(value){
  var cur = null;
  var n = new node(value)
  if(!this.head){
    this.head = n;
  }else{
    cur = this.head;
    while(cur.next){
      cur = cur.next;
    }
    cur.next = n;
  }
}

LinkedList.prototype.contains = function(value) {
  var node = this.head;
  while (node) {
    if (node.value === value) {
      return true;
    }
    node = node.next;
  }
  return false;
};

var ll = new LinkedList();
ll.addToTail(20)
ll.addToTail(40)
ll.addToHead(8)
console.log(ll.contains(40))