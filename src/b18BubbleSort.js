function bubbleSort(array) {
  // Write your code here.
	let sorted = false;
	while(!sorted) {
		sorted = true;
		for(let i = 0; i < array.length; i++){
			if(array[i] > array[i + 1]) {
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				sorted = false;
			}
		}
	}
	return array
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
