//Fundamental JS Concepts

// JavaScript High level questions

// Event Handlers

// Q? if you wanna track running total, or growing array in a recursive function, does it have to be a parameter?

// Closure
	// a function defined inside another extenal/parent function that has access to varaibles from the parent's scope
	// bound
	// when variables bound in a function are bound to the external functions' scope so when it called, the variable definitions are informed by the parent function scope, which could be the parameters of the parent

// Hoisting
	// undefined v not defined
	// parse time v load time
	// variable declarations and functions are hoisted to the top and changed from not defined to undefined, when program loads
	// a function expression (saved as variabels) is still an undefined var, unlike actual functions
	// the start of the program, at "parse time" when the program first loads, is when the var declarations and functions are hoisted. Then at run time, the normal sequence of code defines/assigns the variables.

// Programming Paradigms
	// Functional Programming
		// closures, 1st class functions, higher order functions, lambdas (?)
		// pure functions, function purity
		// avoid sife effects (?)
	// Object oriented programming
		//prototypal inheritence 

// Object oriented programming
	// the object prototype ispasses methods to the inheritors: functions, arrays, strings and numbers
	// the highest ancestor is the object prototype
	// prototype chain
	// helpful for memory issues, inherit from one location, one storage
	// so if you want to build a function for all strings, make it a String.prototype.method
	// Classical v Prototypal inheritence
			//

// First Class Functions:
	// Characteristics- 
			// be typeof===objects
			// instance of a 	constructor, 
			// stored as variable, 
			// functions can be returned by functions, 
			// passed in as parameters, 
	// example of function as a parameter is the map() method that takes a function
