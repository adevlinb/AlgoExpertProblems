function firstNonRepeatingCharacter(string) {
  // Write your code here.
	let charArr = Array.from(string);
	let charMap = charArr.reduce(function(acc, num) {
		acc[num] = acc[num] ? acc[num] + 1 : 1
		return acc;
	}, {});
	
	let arr = [];
for (let [key, value] of Object.entries(charMap)) {
		console.log(key, value, "hello")
		value = parseInt(value)
		if (value === 1) {
			console.log(key)
			arr.push(key);
			break;
		}
	}

	let index = charArr.findIndex(function(char) {
		return char === arr[0];
	});

  return index;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
