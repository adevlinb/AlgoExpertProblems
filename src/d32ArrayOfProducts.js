function arrayOfProducts(array) {
  // Write your code here.
  let newArr = [];
  
  for(let i = 0; i < array.length; i++) {
    let products = 1;
    for(let j = 0; j < array.length; j++) {
      if (i !== j) {
        products *= array[j];
      }
      newArr[i] = products;
    }
  }

  return newArr;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
