
// Check if a number is a part of an arbitrary fibonacci sequence
// Description:

// You will be given a function, isFibo(), which will take three arguments: a,b and f.

// a is the first term of a fibonacci sequence, b is the second term of this sequence (it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking) and f is a number which you'll need to check whether or not is a part of this fibonacci sequence.




function isFibo(a,b,f) {
  var c = a+b
  var prior =b
  while( c<f){
      b=c
      c+=prior //b+c, what is the new prior?
      prior=b   
  } return c===f
}

//Fibonacci
function Fibonacci(n){
    if(n <= 2) { return 1; } 
    else {  return Fibonacci(n - 1) + Fibonacci(n - 2);}
};

// Product Fibonacci
function productFib(prod){
  //go through and test if fib(n)*(fibn+1)===prod
  let product = 0 
  for(var n = 1; n>0 ;n++){
    product = Fibonacci(n) * Fibonacci(n+1)
    if(product===prod){return [Fibonacci(n),Fibonacci(n+1),true]}
    //keep goin as long as the product<prod
    else if(product>prod){
      return [Fibonacci(n),Fibonacci(n+1),false]
    }
  }
}


//  you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence. Signature will always contain 3 numbers

function tribonacci(sign,n){
  if(n===0){return []}
  else if(n<3){return sign.slice(0,n)} //1 or 2
  else if(sign.length===n){return sign} //3 or higher
  else{ //need to add to the list
    let sum = 0
    // just add one additional element
    for(var i = sign.length-3;i<sign.length;i++){
      sum+=sign[i]
    }
    sign.push(sum)
    return tribonacci(sign,n)
  }  
}