function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        console.log(`${arr[j - 1]} > ${arr[j]}`);
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        break;
      }
    }
  }
  console.log(arr);
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
