// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	console.log(linkedList);
	let current = linkedList;

	while(current !== null) {
			let next = current.next
			while(next !== null && next.value === current.value) {
				next = next.next
			}
		current.next = next;
		current = next;
	}
	console.log(linkedList);
  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
