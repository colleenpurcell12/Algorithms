Sorting.js

//currying:
function add (a) {
  return function (b) {
    return a + b;
  }
}

//anotther curry func
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};
var greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"

// "Currying is the process by which a function of N arguments is implemented as N single-argument functions such that first of them takes in the first argument and returns a function which takes in the 2nd argument and so on, until the Nth single-argument function finally returns the value of the multi-argument function being implemented."
//accumulate the number of following arguments
//once the # of args is enough, call the function and return the result

function curry( originalFunc ) {
	var originalLength = originalFunc.length;
	function resolver() {
		var memory = Array.prototype.slice.call( arguments );
		var whatToReturn = function() {
			var next,
				args = Array.prototype.slice.call( arguments ),
				copy = memory.concat(args);
			if (copy.length >= originalLength) {
				next = originalFunc;
			} else {
				next = resolver;
			}
			return next.apply(null, copy);
		};
		return whatToReturn;
	}
	return resolver();
}

//MERGE SORT
function merge(left, right) {
    var outputArray = [];
    
    while(left.length && right.length) {
        if (left[0] < right[0]) outputArray.push(left.shift());
        else outputArray.push(right.shift());
    }
    
    while(left.length) {
        outputArray.push(left.shift());
    }
    
    while(right.length) {
        outputArray.push(right.shift());
    }

    return outputArray
}

function mergeSort(array) {
    if (array.length < 2) return array
    
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    
    return merge(mergeSort(left),mergeSort(right));
}

//QUICK SORT or Partition Sort).

//Quicksort Part 1
// take the 1st element and make it the pivot, then put lesser on left and greater on right
function processData(input) {
    var arr = input.split("\n")[1].split(" ") //array of all the numbers to be sorted
    //console.log(input)
    var p = parseInt(arr[0])
    var left=[]
    var right=[]
    for(var i = 1; i<input.length; i++){
        if(parseInt(arr[i])) {parseInt(arr[i])>p? right.push(arr[i]) : left.push(arr[i])}
        //console.log(left,p,right)
    }
    left.push(p)
    arr= left.concat(right)
    console.log(arr.join(' '))
} 
console.log(processData('5\n4 5 3 7 2'))
//console.log(processData('9\n2 10 3 7 9 4 6 12 8'))


//Quicksort Part 2
// use partition sort to finish the sorting

function processData(input) {
  var arr = input.split("\n")[1].split(" ") 
  recursiveQuicksort(arr)
}
function recursiveQuicksort(arr) { 
    if(arr.length<=1){return arr}
    var p = parseInt(arr[0])
    var left=[]
    var right=[]
    for(var i = 1; i<arr.length; i++){
        if(parseInt(arr[i])) {parseInt(arr[i])>p? right.push(arr[i]) : left.push(arr[i])}
        if(arr.length===2){
          left.push(p)
          console.log( left.concat(right).join(" "))
           return left.concat(right)
        }
    }
    left=recursiveQuicksort(left)
    left.push(p)
    right=recursiveQuicksort(right)
    arr= left.concat(right)
    console.log(arr.join(' '))
    return arr
}

//INSERTION SORT
//Intersion sort Part 1
function processData(input) {
    var arr = input.split("\n")[1].split(" ")
    var x = arr[arr.length-1]
    var keepOn = true
    for(var i =arr.length-2;i>=0;i--){
      if(arr[i]>=x){
        arr[i+1]=arr[i]
      } else if (keepOn){ 
        arr[i+1]=x 
        keepOn = false
      }
      console.log("i is",i,"and ",arr.join(' '))
      if(i===0 && arr[0]>x){
        arr[0]=x
        console.log("i is",i,"and ",arr.join(' '))
      }
      if(!keepOn){break}
    }
}
//Intersion sort Part 2
function processData(input) {
    var arr = input.split("\n")[1].split(" ")
    var i = 0
    var sortedPart
    while(i<arr.length-1){
      sortedPart=sortBites(arr.slice(0,i+2))
      arr=sortedPart.concat(arr.slice(i+2))
      console.log( arr.join(' '))
      i++
    }
    return takeBites(arr)
}
function sortBites(arr){
    var x = parseInt(arr[arr.length-1])
    var keepOn = true
    for(var i =arr.length-2;i>=0;i--){
      if(parseInt(arr[i])>=x){ arr[i+1]=arr[i]} 
      else if (keepOn){ arr[i+1]=x; keepOn = false}
      if(i===0 &&  parseInt(arr[0])>x){ arr[0]=x }
      if(!keepOn){break}
    } return arr //.join(' ')
}



