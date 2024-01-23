// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(sortedIntArr, targetAverage) {
  let start = 0;
  let end = sortedIntArr.length - 1;

  while (start < end) {
    const average = (sortedIntArr[start] + sortedIntArr[end]) / 2;
    if (average === targetAverage) return true;
    else if (average < targetAverage) {
      start++;
    } else if (average > targetAverage) {
      end--;
    }
  }

  return false;
}

const a = averagePair([1, 2, 3], 2.5); // true
const b = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
const c = averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
const d = averagePair([], 4); // false

console.log(a, b, c, d);
