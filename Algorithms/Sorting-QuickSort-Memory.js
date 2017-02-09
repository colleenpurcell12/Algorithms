function quickSort(arr){
	if(arr.length<1){ return []}
	var p = arr[0]
	var left = []
	var right = []
	for(var i =0; i<arr.length; i++){
		arr[i]>p ? right.push(arr[i]) : left.push(arr[i])
	}
	return [].concat(quickSor(left),pivot,quickSort(right))
}