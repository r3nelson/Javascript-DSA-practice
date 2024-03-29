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

  // remove node at index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let removedNode = this.get(index);
    if (removedNode == null) {
      return false;
    }

    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  print() {
    let current = this.head;
    let count = 0;
    const arr = [];
    while (count < this.length) {
      arr.push(current.val);
      current = current.next;
      count++;
    }
    console.log(arr);
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let nextNode = null;
    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      currentNode.prev = nextNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
