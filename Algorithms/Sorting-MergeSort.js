 **** MERGE SORT *****

// Overview: create 2 functions: one that splits and one that combines

// break list in half, and half again until they are lists of one element
// then combine them in the right order

// approach: recursion and divide and conquer
// stable, meaning doesn't swap order of equal elements

// time complexity Ο(n log n)
// space complexity is worse than quick sort, doesn't sort in place

// Packt Video
function mergeSort(arr) {  //SPLITTING
	if(arr.length < 2){ return arr } // splits arrays of 2 or more elements
	var midPoint = Math.round(arr.length/2)
    // sends the recursive results of each side into the other function for combining
	return merge( mergeSort(arr.slice(0,midPoint)),
				  mergeSort(arr.slice(midPoint)) )
}
function merge(left, right) { //COMBINING
    var out = [];
    // keep taking the first element of each list, compare them, and add them to the end of the output array in sequencial order
    while(left.length && right.length) {
    	out.push(left[0] < right[0] ? left.shift() : right.shift() )
    }
    // once you've reached the end of one or the lists, just add from that one
    // like if there were an odd # to sort
    while(left.length) {  out.push(left.shift()); }
    while(left.length) {  out.push(left.shift()); }
}

// **********************
//HackerRank
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