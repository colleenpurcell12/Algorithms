Async and Events.js


 *********** EVENTS ******************
 Q: Explain event bubbling
 // A: when the event starts from the most specific element in the dom, and flows up to the lease specific node, the document.

// Ex: After an event triggers on the deepest possible element, it then triggers on its parents in nesting order.
// Like an an onClick event, bubbling guarantees that it will trigger an onclick handler first on the innermost nested element and last on the outermost element (specific to general)

// Event Flow describles the order in which events are received on the page. An event has three phases to its life cycle: capture, target, and bubbling.


 Q: Explain event delegation
// A: instead of putting a event listener on a serious of DOM elements, you can just put one on the parent, and you can figure out which child node was clicked when the event bubbles up to the parent element by checking the event object's TARGET property
e.target.nodeName, e.target.id

$(document).on('click','button', function(){
   console.log('works for all future buttons');
}) 

 Q: What is event loop?
// call stack, task queue for async events, loop adds to stack from queue when empty

 q: What is a Call stack?
// A: mechanism for an interpreter (like the JS interpreter in a web browser) to keep track of its place in a script that calls multiple functions — it tracks what function is currently being run, what functions are called from within that function and should be called next

// func is called, it's added to the stack, and the function starts to be run
// internal funcs of the first func are then added to the call stack 
// once the parent function is done, it's removed from the stack
// if the stack it taking up too much space, results in a stck overflow error

 Q: What is a task queue?
 // A: it synchronously distribute a sequence of tasks among parallel threads of execution

 Q: What is the difference between call stack and task queue?


 ********** ASYNC operations ******************
// Examples:
	// SetTimeOut (easiest ex)
	// Database calls
	// Http requests
	// Event emitters like onClick

 Q: Diff btw synchronous and asynchronous functions
 // A: Synchronous functions is when the program execution waits until the function returns before continuing. Asyc is when you can move on without waiting.

 Q: What are the pros and cons /*of*/ using Promises instead /*of*/ callbacks?
// A: Pro of promises is that you can specify what to do if the promise is resolved or rejected, it's more maintainable and readable then using callbacks

 Q: Whats the difference between a promise and a callback
// A: promise is a type of asyncronous callback

//Callback function -- is a function that is passed into a func as a parameter to either be called later or returned by the function to be executed later, it is an example of closure (Promises are asynchronous callbacks that are a better abstraction for clearer/better code)

//Promises --  an object used in async operations, the future result of an asynchronous operation, you can use methods like .then and .catch in a promise chain
//Promise.then((resolvedPriorPromis)=>new Promise)
//Promise.catch((reasonForFailing)=>new Promise)
//Promise.all([]) takes an array (iterable obj) and returns an array of resolutions when all promises have resolved, or the reason the 1st promise to fail failed (syncronous)

.then() method

p.then(onFulfilled[, onRejected]);

p.then(function(value) {
   // fulfillment
  }, function(reason) {
  // rejection
});