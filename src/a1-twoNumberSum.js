function twoNumberSum(array, targetSum) {
  // Write your code here.
  let numsArray = [];

  array.forEach(function (num, index) {
    for (let i = index + 1; i < array.length; i++) {
      if (num + array[i] === targetSum) {
        console.log(num, array[i], "im here");
        numsArray.push(num, array[i]);
      }
    }
  });
  console.log(numsArray);
  return numsArray;
}
