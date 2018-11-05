 **** QUICK SORT *****


// 1st element is pivot
// iterating from left to right, put all elements less than pivot into a left array, greater into a right arr
// then use recursion to call the func on the left/right sub-arrays until they are one or zero elements
// then combine

// Approach: recursion and divide and conquer
// not stable, meaning it does swap the order of equal elements

// time complexity Ο(n log n)**
// better space complexity than merge-sort since quick-sort sorts in place
  // Fun fact: Arrays.sort() uses Quick Sort for sorting primitives, but Merge Sort for sorting Arrays or Objects cause it's stable and <space complex.

// Packt Video

// pivot is 1st element
function quickSort(arr) { 
    if(arr.length < 1){return []} //terminating condition
	var p = arr[0]
    var left=[]
    var right=[]
    for(var i = 1; i<arr.length; i++){
    	arr[i] < p ? left.push(arr[i]) : right.push(arr[i])
    	//console.log("left",left,"p",p,"right",right)
    }
    return [].concat(quickSort(left), p, quickSort(right))
}

console.log(quickSort([2,7,3,8,5,9,4]))


//HackerRank
function recursiveQuicksort(arr) { 
    if(arr.length<=1){return arr}
    var p = parseInt(arr[0])
    var left=[]
    var right=[]
    for(var i = 1; i<arr.length; i++){
        if(parseInt(arr[i])) {parseInt(arr[i])>p? right.push(arr[i]) : left.push(arr[i])}
        if(arr.length===2){
          left.push(p)
          //console.log( left.concat(right).join(" "))
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



