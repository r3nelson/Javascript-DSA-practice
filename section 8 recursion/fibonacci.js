// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return fib(num - 1) + fib(num - 2);
}

const x = fib(4); // 3
const y = fib(10); // 55
const z = fib(28); // 317811
const a = fib(35); // 9227465

console.log(x, y, z, a);
