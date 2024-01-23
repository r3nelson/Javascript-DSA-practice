obj1 = { a: 0, b: 1, c: 2 };
obj2 = { b: 1, a: 0, c: 2 };

obj1 === obj2 ? console.log(true) : console.log(false);

const areEqual =
  JSON.stringify(obj1, Object.keys(obj1).sort()) ===
  JSON.stringify(obj2, Object.keys(obj2).sort());

console.log(areEqual);

console.log(JSON.stringify(obj1, Object.keys(obj1).sort()));
console.log(JSON.stringify(obj2, Object.keys(obj2).sort()));
// sortedObj1 = Object.keys(obj1).sort();
// sortedObj2 = Object.keys(obj2).sort();

// console.log(sortedObj1);
// console.log(sortedObj2);
