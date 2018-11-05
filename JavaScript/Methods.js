  Q: What does apply() do
// A: it is a function method, it's called on a function, and it takes 'this' on which the function will be called, followed by the arguments as an array for the function on which it's called. It solves the 'this' issue.
// 

 Q: Explain what the js "map" /*function*/ does provide an example
// A: the map method on the array prototype, takes a function the parameter of which is usually an element of the array at a time, and it runs the func on every element, and returns a new array with all the returned values

Q: What does bind() do
//creates an another func = function.bind(this) 
// whenever it's called, the "this" context is constant
var boundGetX = retrieveX.bind(module);
boundGetX(); 



.call() //function.call(this, arguments)
.apply() //function.call(this, argumentsArray)
.bind() //function.bind(this) returns new function with this bound so no matter which context it's called in, this will refer to the same thing consistently

//new ES6: .from(), .of(), .findIndex(), .find(), .fill()

.map() 	 // takes a function, performs it on each element, and returns a new array

.forEach() // does the function parameter on each element of the array, doesn't return anything
.slice() // takes start index of array inclusive, and end index exclusive, creates new array
.splice() // takes index, 2nd parameter is how many after to remove, or string element to insert
.push()  // adds element to end of array
.split('') // method on an string that separates it into an array with deliminator as parameter
.join('') // method on an array that joins element into a string with deliminator as parameter
.length() //gives number of characters or elements
.filter() // creates a new string with only the subset of elements that passes boolean function parameter
.find() // (new ES6) returns the 1st element of the array (as a string) that passes the boolean function parameter
.concat() // adds an array to end of another, returning a new array
.includes(x, fromIndex) // returns boolean if x is in array
.findIndex() // (new ES6) takes an element and returns it's first location in the ARRAY, or -1 is not included
.indexOf() // takes an element and returns it's first location in the STRING, or -1 is not included
.reduce() // good for summing, multiplying, averages...
.reverse() //reverses the order of the elements of an array
.sort() // reorders array from a to z, if it's numbers 10 is before 2 unless you put in this function:
	//   arr.sort((a,b)  => a-b)
.some()
.toString()
.some()
.charAt()

.keys()
.values()
.entries()
.from()
.of()
.every()
.fill(x,start, end) //changes all the elements of array from index start to end (exclusive) with x
.eval() //method turns a string like 3+'*'+2 concatenated into a mathmatical formula before evaluating to 6
.pop() //modifies array and returns removed element from end of array
.shift() //removes element to front of array and shifts all other elements down
.unshift() //adds element to front of array and shifts all other elements down
.test()
.replace()
.parseInt()
.parseFloat()
