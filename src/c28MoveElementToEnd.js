function moveElementToEnd(array, toMove) {
  // Write your code here.
  let idxOne = 0;
  let idxTwo = array.length - 1;

  while (idxOne < idxTwo) {
    let temp = 0;
    if (array[idxOne] === toMove && array[idxTwo] !== toMove) {
      temp = array[idxOne];
      array[idxOne] = array[idxTwo];
      array[idxTwo] = temp;
      idxOne++;
      idxTwo--;
    }
    if (array[idxOne] === toMove && array[idxTwo] === toMove) {
      idxTwo--;
    }
    if (array[idxOne] !== toMove) {
      idxOne++;
    }
  }

  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
