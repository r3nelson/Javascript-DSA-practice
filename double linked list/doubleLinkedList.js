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

  // add val to end
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

  // remove end node
  pop() {
    if (this.length === 0) return null;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  // remove first value
  shift() {
    if (!this.head) return null;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // add new val to front
  unshift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = this.head;
    }
    this.length++;
    return this;
  }
  // return node at index
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // set new value at index
  set(index, val) {
    foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // insert new node at index, val
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    if (beforeNode != null && afterNode != null) {
      let newNode = new Node(val);

      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      afterNode.prev = newNode;
      this.length++;
      return true;
    }
    return false;
  }
}

// let DoublyLinkedList = new DoublyLinkedList();

// DoublyLinkedList.push("first");
let list = new DoublyLinkedList();

list.push(99);

list.push(100);

list.push(101);
list.push(102);
const x = list.pop();
console.log(x);

// let newNode = new Node("first");
// newNode;
