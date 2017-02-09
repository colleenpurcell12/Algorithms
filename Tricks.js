//Tricks

//initialize an array as an instance of the array class new Array() or the literal syntax []
//if uncertain number of arguments
var args = Array.prototype.slice.call(arguments)


/* Tricks */

// undefined v not defined, typeof null === "Object"
// right to left
// use strict
// NaN
// setTimetOut()
//Private Methods
// eval() and delete()

// undefined v not defined, former has a declaration of the variable
// typeof null === "Object"
// Order of evaluation: formulas with multiple =, are evaluated right to left
// This and self: self. within a object's method, refers to the obj and hence can access the other properties of it's self
// JS files are wrapped with a function to create closure and avoid name conflicts
// 'use strict' enforces stricter parsing and error handling to catch bugs sooner by triggering error messages
	// for example it triggers errors when variables are assigned without declaration, to avoid global variable creation
	// errors when this references null/undefined, and duplicate variable name declaration
	// also impacts delete() and eval() behavior

// return
// { key: value }
	// ^ returns undefined, it will auuto-insert a semi colon after return and ignore what follows
// NaN is typeof 'Number', it doesnt equal it's self, and the only way to test if something is NaN is the new ES6 Numebr.isNan(x)
// Integers and Floating Point Numbers: it used ot be hard to check if a var is a int, ES6 allows Number.isInteger(x)
	// before, you had to check if n.round or n.floor= n, or if n%1===0, or n^1===x since some numbers have tiny decimal place values
// parseInt() for big enough numbers will make them into a 1e+21 type format and stop working
// setTimeout(run(), 0) will run after anything after it since it will be put in a queue and execute at the next time tick, not instantly

// Private Methods: put method's of contructor functions on the prototype, not the factory function to save space and avoid true private methods
// eval() takes a string and evaluates it like a math formula
// delete(x) only for deleting the properties of objects put in x, not for object key's, 
	// it makes an array's element undefined if x is arr[a], but doesn't change length
// Boolean+ number is a number when true is 1 and false is 0, every other multi-type + is just concatenated like 'truexyz'
// Ways to set array to [] aka empty
	// reassigning arr =[] doesnt impact the other variabels that refer to the array
	// or arr.length=0 which does impact all references to the arr
	// arr.slice(0,arr.length) does change all ref to it







