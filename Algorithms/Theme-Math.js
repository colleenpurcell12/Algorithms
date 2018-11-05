// Math.pow(i,3)


//average of numbers in an array 
function find_average(array) {
  return array.reduce( (a,b)=> a+b )/array.length;
}

//sum numbers in an array
function sum(array) {
  return array.reduce( (a,b)=> a+b )
}

//****
function Fibonacci(n){
    if(n <= 2) { return 1; } 
    else { return Fibonacci(n - 1) + Fibonacci(n - 2);}
};

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

//eval() method turns a string into a mathmatical formula
function basicOp(o, a, b) {
  return eval(a+o+b)
}

//****
function even_or_odd(number) {
  return number%2===0? 'Even':'Odd'
}

//****
function highestProduct(arr){
  var highProd = arr[0]*arr[1]*arr[2]
  var len =arr.length
  for(var i =0; i<len;i++){
    for(var j =i+1; j<len;j++){
      for(var k =j+1; k<len;k++){//i!==j && j!==k &&
        highProd< arr[i]*arr[j]*arr[k] ? highProd= arr[i]*arr[j]*arr[k] : highProd
      }
    }
  }
  return highProd
}
console.log(highestProduct([5,9,3,8,4])) //9*8*5 =360

//****
function getGrade (s1, s2, s3) {
  var mean = (s1+ s2+ s3)/3
  var grade =''
  mean>= 90 ? grade='A' : mean>= 80? grade='B' : mean>= 70? grade='C': grade='D'
  if(mean<60){grade='F'}
  return grade
}

//****
function sumTwoSmallestNumbers(numbers) {  
  var sortedNums = numbers.sort(function(a,b){return a-b})
  return sortedNums[0]+sortedNums[1]
};
//****

Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};


Math.round = function(number) {
  var numArr = number.toString().split('.')
  var int = numArr[0]
  if(numArr[1]){ // has decimal
    if(numArr[1][0]>=5){
      return parseInt(++int)
    }
  }
  return parseInt(int)
};

Math.ceil = function(number) {
  var numArr = number.toString().split('.')
  if(numArr.length===1){return parseInt(numArr[0])}
  return parseInt(++numArr[0])
};

Math.floor = function(number) {
  var numArr = number.toString().split('.')
  return parseInt(numArr[0])
};