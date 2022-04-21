// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, multiplier = 1) {
  // Write your code here.
	let sum = 0;
	
	// helper(array, multiplier, sum)
	for (const item of array) {
		if (Array.isArray(item)) {
				sum += productSum(item, multiplier + 1)
		}	else {
			sum += item;
		}
	}


	return sum * multiplier;
}

// Do not edit the line below.
exports.productSum = productSum;
