

//permutation
function stringPermutations(str) {
    var results = [ ];
    var letters = str.split('');
    results.push([letters.shift()]) //add first letter (as an array) to results
    while (letters.length) {
        var curLetter = letters.shift();
        var tmpResults = [ ];
        results.forEach(function(curResult) {
            for (var i = 0; i<= curResult.length; i++) {
                var tmp = curResult.slice(); //make copy so we can modify it
                 //insert the letter at the current position
                tmp.splice(i,0,curLetter)
                tmpResults.push(tmp);
            }
        });
        results = tmpResults; //overwrite the previous results
    }
    results = results.map(function(letterArr) {
        return letterArr.join(''); //make string from letter array
    });
    return results.filter(function(el,index) {
        return results.indexOf(el) === index; //filter out non-unique words
    }).sort();
}


//permutations with recursion
function recursiveStringPermutations(str) {
    var results = [ ];
    getPerms(str, [ ])
    function getPerms(str, arr) {
        if (typeof str === 'string')
            //on first call, split the string into an array 
            str = str.split('');
        if (!str.length) 
            //base case- push the compiled results into the results variable
            results.push(arr.join('')); 
        for (var i = 0; i < str.length; i++) {
            var letter = str.splice(i, 1); 
            arr.push(letter);
            getPerms(str, arr); //recursive call
            arr.pop(); 
            str.splice(i, 0, letter);
        }
    }
    return results.filter(function(el,index) {
        return results.indexOf(el) === index; //filter out non-unique words
    }).sort();
}
//Fibonacci wih memoizaion
var fibT = [0, 1, 1]

function fibonacci(num){  
    if(num > 2){
        if(!fibT[num-1]) fibT[num-1] = fibonacci(num-1);
        if(!fibT[num-2]) fibT[num-2] = fibonacci(num-2);
        return fibT[num-1] + fibT[num-2];
    }
    else if(num <= 1) return num;
    else return 1;
}


//breadth first
function printTreeLevels (startingNode) {
  var levels = [];
  
  (function collectVals (node, level) {
    // if there is no level this deep yet, make it
    levels[ level ] = levels[ level ] || [];
    levels[ level ].push( node.value );
    // recursively handle each child node, one level deeper
    node.children.forEach(function (childNode) {
      collectVals( childNode, level+1 );
    });
  })( startingNode, 0 );

  // Print the results
  levels.forEach(function (level) {
    console.log( level.join(' ') );
  });
}

//*****
// Sudoku Validator

// input is a 2D array and output is true/false
// helpful function that makes sure there are numbers 1 through 9, otherwise stop checking
// look horiz, vertical and square

function hasAllNine(arr){
  for(var i = 0; i<9 ;i++){
    if(!arr.includes(++i)){return false}
  }
  return true;
}

function validate(twoDArray){
  if(twoDArray.filter(arr => !hasAllNine(arr) ).length>0){return false}
  // filter returns any horiz that doesn't have all nince
  
  // now much get every first element into the arrays
  var nextArray=[];
  for(var i = 0; i<9 ;i++){
    for(var j = 0; j<9 ;j++){ //quick loop gets all subarray's 1st element
      nextArray.push(twoDArray[j][i]);
    } if(!hasAllNine(nextArray)){return false}
  }
  //square /0-2,3-5,6-8
  nextArray=[];
  for(var k = 0; k<9; k+3){ //across
    for(var m = 0; m<9; m+3){ //vert
      // want 1st 3 of the 1st 3-5
      nextArray.push( twoDArray[m].slice(k,k+2) )
      nextArray.push( twoDArray[m+1].slice(k,k+2) )
      nextArray.push( twoDArray[m+2].slice(k,k+2) )
    } if(!hasAllNine(nextArray)){return false}
  }
  return true
}

//*****
// prototype method
// [1,2,3,4,5].over(4) should return [5]
Array.prototype.over = function(floor){
  return this.filter(el => el>floor)
}

//indexOf, needle in haystack, find the index of where the needle array begins
function indexOf(haystack, needle){
  var pos;
  for(var i=0;i<haystack.length;i++){
    if(haystack[i]===needle[0]){
      pos = i
      for(var j = 0 ; j<needle.length ; j++){
        if(haystack[i+j]!==needle[j]){
         break;
        }
        if(j===needle.length-1){return pos}
      }
    }
  }
  return -1
}

console.log(indexOf([0,1,2,3,4,5,6], [3,4]))

//*****
//Tic Tac toe checker

// figure out if -1 if the board is not solved yet, 1 if X won, 2 if O won, or 0 if it's a cat's game/draw
// board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an X, or 2 if it is an O, 

function hasBeenOne(board,w){
  if(board[0]===[w,w,w] && board[1]===[w,w,w] //across
    && board[2]===[w,w,w]){ return true}
  else if(board[0][0]===w && board[0][1]===w  //down
    && board[0][2]===w){ return true}
  else if(board[1][0]===w && board[1][1]===w  //down
    && board[1][2]===w){ return true}
  else if(board[2][0]===w && board[2][1]===w  //down
    && board[2][2]===w){ return true}
  else if(board[0][0]===w && board[1][1]===w  //diagonal
    && board[2][2]===w){ return true}
  else if(board[0][2]===w && board[1][1]===w  //diagonal
    && board[2][0]===w){ return true}
  return false
}
function isSolved(board) { //eight ways to win
return hasBeenOne(board,1) ? 1: hasBeenOne(board,2) ? 2: 
  (!board[0].includes(0) && !board[1].includes(0) && !board[2].includes(0)) ? 0: -1
}
//  [[0,0,1], [0,1,2], [2,1,0]]

//*****
//return a string based on a number (petals rotate sentiments)
 function howMuchILoveYou(n) {
    const arr = ['I love you', 'a little','a lot', 
    'passionately','madly','not at all']
    return arr[(n-1)%6]
}

//*****
//getMaxProfit
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

function getMaxProfit(p){
  var count=0
  var len = stockPricesYesterday.length
  var highestProfit=p[0]-p[1]
  for(var i = 0;i<len;i++){
    for(var j = i+1;j<len;j++){ //(i+1)
      count++
      if( (p[j]-p[i])>highestProfit){ //j>i &&
        highestProfit=p[j]-p[i]
      }
    }
  }
  return highestProfit
}
console.log(getMaxProfit([10, 7, 5, 8, 11, 9]))

//***** 
//Find the sum or a multi-demensional array
function mdArraySum(arr,sum){ //called with sum as 0
  if(arr===[]){ return sum}
  else if(typeof arr === 'number'){ return sum+arr }
  else{
    for(var i = 0 ; i<arr.length;i++){
      if(typeof arr[i] === 'object'){         
        sum+= mdArraySum(arr[i],0); //
      } else if (typeof arr[i] === 'number'){
        sum+=arr[i];
      }
    }
  }
  return sum;
}

//*****
//reversing words in a string
function reverse(string){
  if(string===''){return ''}
   var wordsArr = string.split(" ")
   if(wordsArr.length===1){return wordsArr[0]}
   var reversed = [];
   var currentWord
    for(var i = wordsArr.length; i>0; i--){
      reversed.push(wordsArr.pop())
    }
   return reversed.join(' ')
}



//*****
//find maximum number in nested array
function findNestedMaximum(arr) {
  var greatest = -1
  var result;
  arr.forEach(function(a){
      if( typeof(a)==='object'){
        result = findNestedMaximum(a)
         if(result>greatest){
         greatest=result
         }
      } 
      else{
        if(a>greatest){
          greatest=a
        }
      }
  })
  return greatest
}


//*****
function array_diff(a, b) {
  for(var i = 0 ; i<b.length; i++){
    a=a.filter((element) => element!==b[i])
  } return a
}
//*****
//*****
//*****
