// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (num1, num2) => {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  const frequencyObj1 = {};
  const frequencyObj2 = {};

  for (const num of strNum1) {
    const value = (frequencyObj1[num] = frequencyObj1[num]
      ? frequencyObj1[num] + 1
      : 1);
    frequencyObj1[num] = value;
  }

  for (const num of strNum2) {
    const value = (frequencyObj2[num] = frequencyObj2[num]
      ? frequencyObj2[num] + 1
      : 1);
    frequencyObj2[num] = value;
  }

  console.log(frequencyObj1);
  console.log(frequencyObj2);

  if (Object.keys(frequencyObj1).length !== Object.keys(frequencyObj2).length)
    return false;

  for (const key of Object.keys(frequencyObj1)) {
    if (frequencyObj1[key] !== frequencyObj2[key]) return false;
  }
  return true;
};

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
