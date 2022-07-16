function spiralTraverse(array) {
  // Write your code here.
  let newArr = [];
  let startCol = 0;
  let startRow = 0;
  let endCol = array[0].length - 1;
  let endRow = array.length - 1;

  while(startRow <= endRow && startCol <= endCol) {

    
      for(let i = startCol; i <= endCol ; i++) {
       newArr.push(array[startRow][i]);
      }

      for(let j = startRow + 1; j <= endRow; j++) {
        newArr.push(array[j][endCol])
      }

      for(let k = endCol - 1; k >= startCol; k--) {
        if(startRow === endRow) break;
        newArr.push(array[endRow][k])
      }

      for(let l = endRow - 1; l > startRow; l--) {
        if(startCol === endCol) break;
        newArr.push(array[l][startCol])
      }
    
      startRow++;
      startCol++;
      endCol--;
      endRow--;
    
  }
    return newArr;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
