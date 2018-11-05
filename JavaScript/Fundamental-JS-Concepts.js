 //Fundamental JS Concepts: JavaScript High level questions


First Class Functions:
	// Characteristics- 
			// be typeof===objects
			// instance of a 	constructor, 
			// stored as variable, 
			// functions can be returned by functions, 
			// passed in as parameters, 
	// example of function as a parameter is the map() method that takes a function


SCOPE, CLOSURE, HOISTING, STRICT mode, PARADIGMS, FUNCTIONAL PROGRAMMING, OBJECT ORIENTED PROGRAMNING

// Q? if you wanna track running total, or growing array in a recursive function, does it have to be a parameter?

 Scope
	// it's the context of a variable declaration, the global scope of the window, or within a function of layer of functions.
	// Should never touch /*global*/ scope because you might override pre-existing variables by declaring one with a duplicate name

 Closure
	// a function defined inside another extenal/parent function that has access to varaibles from the parent's scope
	// bound
	// when variables bound in a function are bound to the external functions' scope so when it called, the variable definitions are informed by the parent function scope, which could be the parameters of the parent

	// closures is when a function returns a function that refers to variables defined in it's external/parent function's scope. when the internal function is called, it has access to the last value that it's parent function gave each variable.

 Hoisting
	// undefined v not defined
	// parse time v load time
	// variable declarations and functions are hoisted to the top and changed from not defined to undefined, when program loads
	// a function expression (saved as variabels) is still an undefined var, unlike actual functions
	// the start of the program, at "parse time" when the program first loads, is when the var declarations and functions are hoisted. Then at run time, the normal sequence of code defines/assigns the variables.

Q: What is strict mode?
// A: use strict is helpful in a lot of ways, it gives more errors so you can debug faster, errors when you declare a duplicate named variable, 

// 'use strict' enforces stricter parsing and error handling to catch bugs sooner by triggering error messages
	// for example it triggers errors when variables are assigned without declaration, to avoid global variable creation
	// errors when "this" references null/undefined, and on duplicate variable name declaration
	// also impacts delete() and eval() behavior

 Programming Paradigms
	// Functional Programming
		// closures, 1st class functions, higher order functions, lambdas (?)
		// pure functions, function purity
		// avoid side effects (?)
	// Object oriented programming
		//prototypal inheritence 


Declarative vs Imperative
// Functional programming is a declarative paradigm, meaning that the program logic is expressed without explicitly describing the flow control. The how gets abstracted away.

// **Imperative** programs spend lines of code describing the specific steps used to achieve the desired results — the flow control: How to do things.

// D**eclarative programs abstract the flow control process, and instead spend lines of code describing the data flow: What to do. The how gets abstracted away.

 Prototypes: Object oriented programming
	// the object prototype passes methods to the inheritors: functions, arrays, strings and numbers
	// the highest ancestor is the object prototype
	// prototype chain
	// helpful for memory issues, inherit from one location, one storage
	// so if you want to build a function for all strings, make it a String.prototype.method
	// Classical v Prototypal inheritence
			//

//Whenever a function is created, its prototype property is also created according to a specific set of rules. 
// When it comes to inheritance, JavaScript only has one construct: objects. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. null, by definition, has no prototype, and acts as the final link in this prototype chain.


 