function threeNumberSum(array, targetSum) {
  // Write your code here
  let sorted = array.sort((a, b) => a - b);
  let arrOfSets = [];

  for (let i = 0; i < sorted.length; i++) {
    let left = i + 1;
    let end = sorted.length - 1;
    while (left < end) {
      let currentSum = array[i] + array[left] + array[end];
      if (currentSum === targetSum) {
        arrOfSets.push([array[i], array[left], array[end]]);
        left++;
        end--;
      } else if (currentSum < targetSum) left++;
      else if (currentSum > targetSum) end--;
    }
  }

  console.log(arrOfSets);
  return arrOfSets;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
