function findClosestValueInBst(tree, target) {
  // Write your code here.
  console.log(tree, target);
  return findClosest(tree, target, tree.value);
}

function findClosest(currentTree, target, currentVal) {
  if (currentTree === null) return currentVal;
  if (Math.abs(target - currentVal) > Math.abs(target - currentTree.value)) {
    currentVal = currentTree.value;
  }
  if (target < currentTree.value) {
    return findClosest(currentTree.left, target, currentVal);
  } else if (target > currentTree.value) {
    return findClosest(currentTree.right, target, currentVal);
  } else {
    return currentVal;
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
