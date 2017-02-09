//split
function mergeSort(arr){
	if (arr.length<2){return arr}
	var mid = Math.round(arr.length/2)
	return merge( mergeSort(arr.slice(0,mid)),
				  mergeSort(arr.slice(mid)) )
}
//combine
function merge(left, right){
	var out= []
	while(left.length && right.length){
		out.push(left[0]>right[0] ? left.shift() : right.shift())

	}
	while(left.length){
		out.push( left.shift())

	}
	while(right.length){
		out.push( right.shift())

	}
}