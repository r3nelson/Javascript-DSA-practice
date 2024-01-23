// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:
// (1,2,3,4,5,6,7,7,8,9,10)
// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// // SUPER COOL ONE LINE SOLUTION
// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
//   }

const areThereDuplicates = (...args) => {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let firstPointer = 0;
  let secondPointer = 1;

  while (secondPointer < args.length) {
    if (args[firstPointer] === args[secondPointer]) return true;
    else {
      firstPointer++;
      secondPointer++;
    }
  }

  return false;
};

const x = areThereDuplicates(1, 2, 3); // false
const y = areThereDuplicates(1, 2, 2); // true
const z = areThereDuplicates("a", "b", "c", "a"); // true
console.log(x, y, z);
