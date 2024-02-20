class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(root) {
    this.root = root;
  }

  // insert val in BST
  insert(val) {
    let current = this.root;
    let newNode = new Node(val);

    while (true) {
      if (val === current.val) return undefined;
      // go left
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
        // go right
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // find val in BST
  find(val) {}

  // return if val in BST
  contains(val) {}
}