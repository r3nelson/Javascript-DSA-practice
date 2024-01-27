function merge(arr1, arr2) {
  // given two sorted arrays
  // merge them into one sorted array
  // [1,5,7] , [4,6,8]
  //     const x = [1, 5, 7];
  //   const y = [4, 6, 8];

  let left = 0;
  let right = 0;

  results = [];
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      results.push(arr1[left]);
      left++;
    } else {
      results.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    results.push(arr1[left]);
    left++;
  }
  while (right < arr2.length) {
    results.push(arr2[right]);
    right++;
  }

  return results;
}

function mergeSort(arr) {
  // break an array into halfs repeatedly until only one element remains
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, mid));
  //   console.log(leftArr);
  let rightArr = mergeSort(arr.slice(mid));
  //   console.log(rightArr);
  return merge(leftArr, rightArr);
}

console.log(
  mergeSort([4, 3, 7, 65, 34, 32, 64, 34, 23, 86, 89, 56, 7, 8, 4, 99, 10])
);
console.log(mergeSort([]));
