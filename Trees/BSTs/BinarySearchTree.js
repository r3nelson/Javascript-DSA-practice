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

  // find node with val in BST
  find(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      // go left
      if (val < current.val) {
        if (current.left === null) {
          return undefined;
        }
        current = current.left;
        // go right
      } else {
        if (current.right === null) {
          return undefined;
        }
        current = current.right;
      }
    }
  }

  // return if val in BST
  contains(val) {
    if (this.find(val)) return true;
    return false;
  }

  BFS() {
    const queue = [];
    const data = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  PreDFS() {
    const visited = [];

    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
  }
}
