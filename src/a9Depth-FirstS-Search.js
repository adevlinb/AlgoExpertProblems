// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
		helperFunc(this, array)
		return array
  }
}

function helperFunc (node, array) {
	if (!node) return;
	array.push(node.name);
	node.children.forEach(function(child){
			helperFunc(child, array);
	})

	return array;
}

// Do not edit the line below.
exports.Node = Node;
