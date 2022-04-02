function isValidSubsequence(array, sequence) {
  // Write your code here.
  console.log(array, sequence, "test");
  let indNum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[indNum]) {
      console.log(i);
      indNum++;
      if (indNum === sequence.length) return true;
      else continue;
    }
  }
  return false;
}
