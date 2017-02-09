


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