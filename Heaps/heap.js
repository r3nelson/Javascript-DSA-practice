class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  // swap array values
  swap(num1, num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
    return num1, num2;
  }

  bubbleUp() {
    let index = this.values.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      let child = this.values[index];

      if (child > parent) {
        child, (parent = this.swap(child, parent));
        index = parentIndex;
      } else if (child === parent) {
        console.log("duplicate value entered into values");
        break;
      }
    }
  }

  extractMax() {
    if (!this.heap.length) return;

    this.swap(this.values[0], this.values[this.heap.length - 1]);
    const oldNode = this.heap.pop();

    //trikle down
    let parent = 0,
      childLeft = 1,
      childRight = 2;
    //Math.max returns NaN is one of the arguments is undefined
    let max = Math.max(
      this.heap[childLeft],
      this.heap[childRight] || -Infinity
    );

    while (this.heap[parent] < max) {
      let child = this.heap[childLeft] === max ? childLeft : childRight;
      this.swap(parent, child);
      parent = child;

      childLeft = parent * 2 + 1;
      childRight = parent * 2 + 2;
      max = Math.max(this.heap[childLeft], this.heap[childRight] || -Infinity);
    }
    return oldNode;
  }
}
