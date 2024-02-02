class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
// let DoublyLinkedList = new DoublyLinkedList();

// DoublyLinkedList.push("first");
let list = new DoublyLinkedList();

list.push(99);

list.push(100);

list.push(101);
list;
// let newNode = new Node("first");
// newNode;
