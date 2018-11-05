Bubble, selection, intertion, merge sort, quick/partition sort


// Explain types of sorting algos
// QUICK SORT is BETTER THAN MERGE sort
//*** Quick merge and heap sort all have the same asymptotic complexity O(nlogn
 Bubble sort
    // slowest n^2
    // compares two at a time, swaps if one is greater than prior
    // (sinking sort) is a simple sorting algo that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.
    // poor performance/time complexity О(n2)
    function bubbleSort(data){
      var len = data.length
      do{
        for(var i = 0; i<len-1; i++){
          if(data[i]>data[i+1]){
            swap(data,i,i+1)
          }
        }
      } while(len--)
      return data
    }
    
    function swap(arr, indexA, indexB){
      var temp = arr[indexA]
      arr[indexA]= arr[indexB]
      arr[indexB] = temp
    }
//all in one version of bubble sort
function bubbleSort(data){
      var len = data.length
      var temp
      do{
        for(var i = 0; i<len-1; i++){
          if(data[i]>data[i+1]){
            temp = data[i]
            data[i]= arr[i+1]
            data[i+1] = temp
          }
        }
      } while(len--)
      return data
    }


 Selection sort
    // selects the next-smallest element and swaps it into place
    // poor performance/time complexity О(n2)

 Insertion sort
    // separates an array into two sections, a sorted section and an unsorted section
    // keep taking an element from the unsorted array and added it to a spot on the sorted array, which starts empty
    // you see if the new card is higher than the last sorted element, if not, see if it's higher than the 2nd highest, if so put it after the 2nd highest
    // best-case complexity of O(n)
    // it's a "stable" kind of sorting algo

// Shell sort

 Merge sort --one of the fastest
  // STABLE, based on divide and conquer technique, 
  // first divides the array into equal halves and then combines them in a sorted manner
  // worst-case time complexity being Ο(n log n) WOW!! respected 
  nlog(n)


 Quick sort (Partition Sort)
  //BETTER THAN MERGE sort, same time complexity but better space complexity since sorts in place
  //****Arrays.sort() uses Quick Sort for sorting primitives and Merge Sort for sorting Arrays of Objects. This is because, merge sort is stable, so it won't reorder elements that are equal.
  // pivot
  // recursive, based on divide and conquer technique, not stable
  // time complexity is O(n^2) at worst and O(n log n) on avg 


//INSERTION SORT
//Intersion sort Part 1
function processData(input) {
    var arr = input.split("\n")[1].split(" ")
    var x = arr[arr.length-1]
    var keepOn = true
    for(var i =arr.length-2;i>=0;i--){
      if(arr[i]>=x){
        arr[i+1]=arr[i]
      } else if (keepOn){ 
        arr[i+1]=x 
        keepOn = false
      }
      console.log("i is",i,"and ",arr.join(' '))
      if(i===0 && arr[0]>x){
        arr[0]=x
        console.log("i is",i,"and ",arr.join(' '))
      }
      if(!keepOn){break}
    }
}
//Intersion sort Part 2
function processData(input) {
    var arr = input.split("\n")[1].split(" ")
    var i = 0
    var sortedPart
    while(i<arr.length-1){
      sortedPart=sortBites(arr.slice(0,i+2))
      arr=sortedPart.concat(arr.slice(i+2))
      console.log( arr.join(' '))
      i++
    }
    return takeBites(arr)
}
function sortBites(arr){
    var x = parseInt(arr[arr.length-1])
    var keepOn = true
    for(var i =arr.length-2;i>=0;i--){
      if(parseInt(arr[i])>=x){ arr[i+1]=arr[i]} 
      else if (keepOn){ arr[i+1]=x; keepOn = false}
      if(i===0 &&  parseInt(arr[0])>x){ arr[0]=x }
      if(!keepOn){break}
    } return arr //.join(' ')
}
 ********

//MERGE SORT
function merge(left, right) {
    var outputArray = [];
    
    while(left.length && right.length) {
        if (left[0] < right[0]) outputArray.push(left.shift());
        else outputArray.push(right.shift());
    }
    
    while(left.length) {
        outputArray.push(left.shift());
    }
    
    while(right.length) {
        outputArray.push(right.shift());
    }

    return outputArray
}

function mergeSort(array) {
    if (array.length < 2) return array
    
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    
    return merge(mergeSort(left),mergeSort(right));
}

   ********
//QUICK SORT or Partition Sort).

//Quicksort Part 1
// take the 1st element and make it the pivot, then put lesser on left and greater on right
function processData(input) {
    var arr = input.split("\n")[1].split(" ") //array of all the numbers to be sorted
    //console.log(input)
    var p = parseInt(arr[0])
    var left=[]
    var right=[]
    for(var i = 1; i<input.length; i++){
        if(parseInt(arr[i])) {parseInt(arr[i])>p? right.push(arr[i]) : left.push(arr[i])}
        //console.log(left,p,right)
    }
    left.push(p)
    arr= left.concat(right)
    console.log(arr.join(' '))
} 
console.log(processData('5\n4 5 3 7 2'))
//console.log(processData('9\n2 10 3 7 9 4 6 12 8'))


//Quicksort Part 2
// use partition sort to finish the sorting

function processData(input) {
  var arr = input.split("\n")[1].split(" ") 
  recursiveQuicksort(arr)
}
function recursiveQuicksort(arr) { 
    if(arr.length<=1){return arr}
    var p = parseInt(arr[0])
    var left=[]
    var right=[]
    for(var i = 1; i<arr.length; i++){
        if(parseInt(arr[i])) {parseInt(arr[i])>p? right.push(arr[i]) : left.push(arr[i])}
        if(arr.length===2){
          left.push(p)
          console.log( left.concat(right).join(" "))
           return left.concat(right)
        }
    }
    left=recursiveQuicksort(left)
    left.push(p)
    right=recursiveQuicksort(right)
    arr= left.concat(right)
    console.log(arr.join(' '))
    return arr
}




