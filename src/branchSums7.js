// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let sum = 0;
  let finalArr = [];
  helperFunc(root, sum, finalArr);
  console.log(finalArr);
  return finalArr;
}

function helperFunc(tree, sum, finalArr) {
  sum = sum + tree.value;

  if (tree.left) {
    helperFunc(tree.left, sum, finalArr);
  }
  if (tree.right) {
    helperFunc(tree.right, sum, finalArr);
  }
  if (!tree.right && !tree.left) {
    finalArr.push(sum);
  }

  return finalArr;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
