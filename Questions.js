//Interview Qs
/*
Given an n by n depth map, find all cavities in the map. A   cavity is a position that has a higher depth than all of its adjacent squares and is not on the edge of the map. 


How would organize different levels of hierarchy for the website? That is, how would you show a Math header, multiple subheaders (such as Addition and Subtraction), and multiple subheaders under that (such as Videos and Articles). The levels are not predefined, so there could be things that extend well beyond the Videos sub-subheader. How would one determine how many videos are under a main header or how many other subheaders

design a system to get the number of days between two dates

Given a tree, create a program that moves one node and all of its children to a different parent 

ount the number of leav
*/

HTTP Questions
PASS BY VALUE V reference
MUTABILITY

ITERATING //Obj Object.keys(), for in loop; Arrays: forEach/map, let of loop


Currying: 

How do you organize your code? (module pattern, classical inheritance?)

Hashtable : // is a data structure that associates keys with values;
Use /*case for*/ anonymous functions: event handler IIFE

Whats the difference between host objects and native objects?
// Native objects are those objects supplied by JavaScript. Examples of these are String, Number, Array, Image, Date, Math, etc.

// Host objects are objects that are supplied to JavaScript by the browser environment. Examples of these are window, document, forms, etc.

document.write() // bad practice, only used by generated ads

Explain AJAX in as much detail as possible
// AJAX is short for Asynchronous Javascript + XML. The technique consisted of making server requests for additional data without unloading the page,resulting in a better user experience.


Introduced by ES6
	// - arrow functions ()=>
	// - template strings
	// - destructuring
	// - native promises


	// - classes
	// - param defaults
	// - rest / spread
	// - block scoping (let & const)
	// - for...of
	// - generators
	// - modules
	// - sets / maps
	// - symbols


********** Hypertext Transfer Protocol (HTTP) **********
 //request-response protocol between a client and server. browser may be the client, and an application on a computer that hosts a web site may be the serve
// Ex: A client (browser) makes a request (re.param, server give a response constaining the STATUS of the request and potenially the content (res.body)

 Q: What is an ReSTful api? 
// "ReST" or Representational State Transfer relies on a stateless, client-server, cacheable communications protocol--> the HTTP protocol.

 Q: What are HTTP methods? List all HTTP methods that you know, and explain them.
// GET -- Requests data from a specified resource, like the SQL database
// POST --Submits data to be processed to a specified resource, added to db
	//instance of the model
// PUT --update
// DELETE --remove

// HEAD method is same as GET, but transfers the status line and header section only.
// Also connect, options, and trace I think, but I im not too familar with those.

********* OTHER ********* 

Immediately-Invoked Function Expression (IIFE) 
// (function(){/*action*/})()

Virtual Dom
// Virtual DOM is a technique and set of libraries / algorithms that allow us to improve front end performance by avoiding direct work with DOM and work only with lightweight JavaScript object that mimics the DOM tree.
// The idea of Virtual DOM is great and isn’t new actually. We knew for a long time that touching the DOM is expensive. But the implementation of this technique is hard.

Q: What is the difference between == and ===?
// "==" compares the value, and ignores the type, after type conversion
// "===" compares both value and type
// 0 == false; // true
// 2 == '2' // true

Q: Ternary expression, what does the word "Ternary" indicate?
// It's a control flow ES6 syntax with 3 parts
// condition ? expr1 : expr2

Q: What language constructions do you use /*for*/ iterating over object properties and array items?

//Object: Object.keys(), for in loop 
//Arrays: forEach, map, let of loop
//Object properties
	// 1. Object.keys(object) returns an array of the property key names
	// 2. for in loop for properties of an array
	for (var prop in obj) {
	  console.log('obj.' + prop, '=', obj[prop]);
	}
// Arrays 
//(iterable objects can be arrays, strings, or array-like elements such as the function.arguments property)
	// 1. loop over the elements of an array, the values of the arguments object
		for (let value of iterable) {
	// 2. Array.forEach
	// 3. Array.map( () => )


********** Pass by reference, pass by value *******

// Objects get passed by reference while 
// primitives get passed by value. 

// Pass-by-value means that a copy of the entity is passed into the called function, 
// while pass-by-reference means that the original object is used in the called function.

********** mutable and immutable ****
Data types:
6 Primitives (immutable)
	// Strings
	// Numbers
	// Boolean 
	// Null 
	// Undefined 
	// Symbol (new in ECMAScript 6)
Objects (mutable)
	// array
	// function
	// object

 Q: Explain the difference between mutable and immutable objects.
	//mutable are objects that can't change and remain constant, immutable are the opposite.
	// const is immutable and  var is mutable
	// Methods that does mutate: map, slice, push/pop
	// Methods that dont mutate: forEach, concat and all string methods
	// strings are also immutable in JavaScript

 Q: What is an example of an immutable object in JavaScript?
// All 6 Primitive datatypes are immutable, such as string, number, boolean, null, undefined, and symbol. That's why all the string methods return a new string.

 Q: What are the pros and cons of immutability?
//A: pros is that it increases performance and enables tracking changes
//PROS 
	// 1. Immutable data structures are quite SIMPLE in a way that it has only state
	// 2. Thread-safe, multiple threads cannot modify/corrupt the state.
	// 3. Shared easily by references without copying--side-effect free, no defensive copies
	// 4. Makes debugging either since there is only one value the state

// Disadvantages is have to create a new object whenever it's modified

 Q: How can you achieve immutability in your own code?
 // use react, the store is never changes, single app state object and update it immutably
 

//Resurce: You Can't JavaScript Under Pressure

************* TEST QUESTIONS ************
// Q: what does this print?
(function() {
   var a = b = 5;
})();
console.log(b);
// A: it prints 5, because that line is the same as b=5, then var a=b since it gets evaluated from right to left. Since b isn't declared, it is a global variable accessible outside the scope of the function called before b is logged.


// Q:Define a repeatify function on the String object. takes an int, returns a str
String.prototype.repeatify = function(n){
	var str=''
	while(n>0){
		str+=this
		n--
	}
	return str
}
console.log('hello'.repeatify(3));
//Should print hellohellohello.

// Q: what gets logged?
function test() {
   console.log(a); 
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}
test();
// A: when test is called, undefined gets logged and then 2 gets called since function definitions are hoisted by variable definitions aren't.

// Q: what gets logged?
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); 

var test = obj.prop.getFullname; 

console.log(test()); 
// A: getFullname goes into function that is inside the object scope 'this', and finds it's full name;'Colin Ihrig'. the test returns John since the this is the global window on which test was called. 
// to print Aurelio, you must log test.call(obj.prop)

//Q: will cause a stack overflow if the array list is too large. How can you fix this?
var list = readHugeList();
var nextListItem = function() {
    var item = list.pop();
    if (item) {
        nextListItem(); //setTimeout( nextListItem, 0);
    }
};
//A: The stack overflow is eliminated because the ***event loop*** handles the recursion, not the call stack. 
//When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the **event queue*** and the function exits, thereby leaving the call stack clear. When the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem. Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations.


//Q:
var Dog = function (name) {
  this.name = name;
};

Dog.prototype.bark = function () {
  console.log('my name is '+ this.name + ', Woof!');
}

var rex = new Dog('rex');

rex.bark();

setTimeout(rex.bark, 1000);
//A: the name of the dog instance isn't being passed in since 'this' isnt bound.
setTimeout(rex.bark.call(rex), 1000);







