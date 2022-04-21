function findThreeLargestNumbers(array) {
  // Write your code here.
  let topThree = [null, null, null];

  for (let j = 0; j < array.length; j++) {
    if (topThree[0] === null) {
      topThree[0] = array[j];
      continue;
    } else if (topThree[1] === null) {
      topThree[1] = array[j];
      continue;
    } else if (topThree[2] === null) {
      topThree[2] = array[j];
      continue;
    }
    topThree.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < topThree.length; i++) {
      if (array[j] > topThree[i]) {
        topThree[i] = array[j];
        break;
      }
    }
  }

  topThree.sort((a, b) => {
    return a - b;
  });
  return topThree;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
