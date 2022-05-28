function selectionSort(array) {
  // Write your code here.
  let counter = 0;
  while (counter < array.length - 1) {
    let smallestNum = counter;
    for (let i = counter + 1; i < array.length; i++) {
      if (array[smallestNum] > array[i]) smallestNum = i;
    }
    let tempNum = array[smallestNum];
    array[smallestNum] = array[counter];
    array[counter] = tempNum;
    counter++;
  }
  return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
