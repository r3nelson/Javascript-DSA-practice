class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// LIFO
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // add val to beginning
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    return ++this.length;
  }

  // remove val from beginning
  pop() {
    if (!this.first) return null;
    let poppedValue = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return poppedValue;
  }
}
