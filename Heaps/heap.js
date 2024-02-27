class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  // swap array values
  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element > parent) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  extractMax() {
    if (!this.values.length) return;
    const start = 0;
    const end = this.values.length - 1;

    this.swap(start, end);
    const oldNode = this.values.pop();

    //trikle down
    let parent = 0,
      childLeft = 1,
      childRight = 2;
    //Math.max returns NaN is one of the arguments is undefined
    let max = Math.max(
      this.values[childLeft],
      this.values[childRight] || -Infinity
    );

    while (this.values[parent] < max) {
      let child = this.values[childLeft] === max ? childLeft : childRight;
      this.swap(parent, child);
      parent = child;

      childLeft = parent * 2 + 1;
      childRight = parent * 2 + 2;
      max = Math.max(
        this.values[childLeft],
        this.values[childRight] || -Infinity
      );
    }
    return oldNode;
  }
}
