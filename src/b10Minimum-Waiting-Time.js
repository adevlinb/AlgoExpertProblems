function minimumWaitingTime(queries) {
  // Write your code here.
	queries.sort((a, b) => a - b);
	let count = 1;
	let sum = 0;
	while (count < queries.length) {
		for (i = 0; i < count; i++) {
			sum = sum + queries[i];
		}
		count ++
	}
	
	
  return sum;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
