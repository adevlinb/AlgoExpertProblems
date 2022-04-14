function nodeDepths(root) {
  // Write your code here.
  let count = 0;
  let sum = [0];
  helperFunc(root, count, sum);
  let total = sum.reduce((a, b) => a + b);
  return total;
}

function helperFunc(tree, count, sum) {
  count++;

  if (tree.left) {
    sum.push(count);
    helperFunc(tree.left, count, sum);
  }
  if (tree.right) {
    sum.push(count);
    helperFunc(tree.right, count, sum);
  }
  console.log(sum, "sum");
  return sum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
