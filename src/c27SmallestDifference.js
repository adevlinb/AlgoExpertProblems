function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let smallNums = [];
  let one = arrayOne.sort((a, b) => a - b);
  let two = arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let currentDiff = Infinity;
  let smallestDiff = Infinity;

  while (idxOne < one.length && idxTwo < two.length) {
    let firstNum = one[idxOne];
    let secondNum = two[idxTwo];
    if (firstNum < secondNum) {
      currentDiff = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      currentDiff = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallestDiff > currentDiff) {
      smallestDiff = currentDiff;
      smallNums = [firstNum, secondNum];
    }
  }

  return smallNums;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
