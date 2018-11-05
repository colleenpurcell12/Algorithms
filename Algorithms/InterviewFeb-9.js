//[1, 0, 3] -> [1, 0, 4]
//[1, 0, 9]

[] -> []
[0, 0] 
// >999 might have a comma [ 1, ',', 9,9,9]
// decimal split and only increment whole numbers
// parseInt('7')
// 
// [1, 9, 9, 9, 9 ] // 4 
// [2, 0, 0]



function addOne(arr){
    // approach: take the last element and increment
     var last = arr.length-1
    
    if(arr[last]===9){ //[9]
        //if(last===0) {   arr=[1,0]}
        var i = last //i === 1
        while(arr[i]===9 && i>=0){
            if(i===0) {  
                arr[i]=0
                arr.unshift(1) //add to front 
                return arr   
            }
            arr[i]=0
            i--        
        } 
        arr[i]=++arr[i]       
    }
    else{
        arr[last]= ++arr[lst]
    }
    
    return arr
}




top_tracker = new TopTracker()
top_tracker.track(3)
top_tracker.track(1)
top_tracker.track(20)
top_tracker.track(16)
top_tracker.track(12)
top_tracker.track(6)
top_tracker.nearest5(10) => [12, 6, 16, 3, 1]



// logging, added over time, then summarize
// order of proximity to the tracker, not the order it was added

// difference between each item and the target, 
// if the difference is 
// 1st element, is diff w/ target > or <, diff with 1st element, if greater than push onto end, otherwise unshift onto start

// sorting 

TopTracker.prototype.track = function(newItem){
    this.list.push(newItem) 
    //
    // add in order
    
}


TopTracker.prototype.nearest5 = function(target){  // [5,6,7, 5,9,10,11,12,13,14
// index of element closest to target, n*(5!) --> n
// slice((i-2),(i+3)
// store distances to target and their index, sort index by distances to target
// obj or a 2D arr to track index/element and distance 


    var len = this.list.length
    // 
    // 
    // each diff btw the target and items of length x, O(n^2)  //merge sort nlog(n), n*m -> n // n^2 logn
}




















