function firstDuplicateValue(array) {
  // Write your code here.
  let numsTable = {};
  for (const num of array) {
    if (numsTable[num]) {
      return num;
    }
    numsTable[num] = 1;
  }
  return - 1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
