class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
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
      if (element.priority <= parent.priority) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  dequeue() {
    if (!this.values.length) return;
    const start = 0;
    const end = this.values.length - 1;

    this.swap(start, end);
    const oldNode = this.values.pop();

    //trikle down]
    let parentIndex = 0,
      childLeftIndex = 1,
      childRightIndex = 2;
    //Math.max returns NaN is one of the arguments is undefined
    let min = Math.min(
      this.values[childLeftIndex].priority,
      this.values[childRightIndex].priority || -Infinity
    );

    while (this.values[parentIndex].priority > min) {
      let childIndex =
        this.values[childLeftIndex].priority === min
          ? childLeftIndex
          : childRightIndex;
      this.swap(parentIndex, childIndex);
      parentIndex = childIndex;

      childLeftIndex = parentIndex * 2 + 1;
      childRightIndex = parentIndex * 2 + 2;
      min = Math.min(
        this.values[childLeftIndex].priority,
        this.values[childRightIndex].priority || -Infinity
      );
    }
    return oldNode;
  }
}
