class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// FIFO
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // remove from beginning
  dequeue() {
    if (!this.first) return undefined;
    let oldFirst = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return oldFirst;
  }

  // add to end
  enqueuqe(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldLast = this.last;
      this.last = newNode;
      oldLast.next = newNode;
    }

    return ++this.length;
  }
}
