// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

const addSubarray = (arrOfInts, target) => {
  let temp = 0;
  for (let num of arrOfInts.slice(0, target)) {
    temp += num;
  }
  return temp;
};

const maxSubarraySum = (arrOfInts, target) => {
  if (arrOfInts.length < target) {
    console.log(null);
    return null;
  }

  let temp = addSubarray(arrOfInts, target);
  let max = 0;

  for (let i = target; i < arrOfInts.length; i++) {
    temp = temp + arrOfInts[i] - arrOfInts[i - target];
    // console.log(
    //   `temp: ${temp}, arrofInts[i]: ${
    //     arrOfInts[i]
    //   }, target: ${target} arrOfInts[i - target]: ${arrOfInts[i - target]}`
    // );
    if (temp > max) max = temp;
    // console.log(temp);
  }
  console.log(max);
  return max;
};

maxSubarraySum([100, 200, 300, 400], 2);
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
