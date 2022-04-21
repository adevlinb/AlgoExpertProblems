function binarySearch(array, target) {
  // Write your code here.
	array.sort((a, b)=> {
		return a - b;
	})
	
	if (array.includes(target)) {
		for (let i = 0; i < array.length; i++) {
			if(array[i] === target) return i;
		}
	}
	
	let half = Math.floor(array.length / 2);
	let left = array.slice(0, half);
	let right = array.slice((half), array.length)	
	if (target <= left[half]) binarySearch(left)
	if (target >= right[0]) binarySearch(right)
	console.log(left, right)
	// let index = helper(left, right target);
	
	
	return -1;
	
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
