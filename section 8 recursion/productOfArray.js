// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr) => {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
};

const x = productOfArray([1, 2, 3]); // 6
const y = productOfArray([1, 2, 3, 10]); // 60

console.log(x, y);
