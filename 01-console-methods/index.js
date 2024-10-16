// JavaScript Fundamentals: Console Methods

// 1. console.log()
// Used for printing values to the console.

// Basic usage
console.log('hello world');
// Output: hello world

// Printing variables
const name = 'John';
const age = 30;
console.log("Name:", name);
// Output: Name: John
console.log("Age:", age);
// Output: Age: 30

// 2. console.error()
// Prints error messages in red color.
console.error("This is an error message!");
// Output: This is an error message! (in red color)

// 3. console.warn()
// Prints warning messages.
console.warn("This is a warning!");
// Output: This is a warning! (usually in yellow color)

// 4. console.table()
// Displays arrays and objects in a tabular format.
const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 31 },
  { name: 'Mark', age: 20 },
];
console.table(users);
// Output:
// ┌─────────┬────────┬─────┐
// │ (index) │  name  │ age │
// ├─────────┼────────┼─────┤
// │    0    │ 'John' │ 30  │
// │    1    │ 'Jane' │ 31  │
// │    2    │ 'Mark' │ 20  │
// └─────────┴────────┴─────┘

// 5. console.group() and console.groupEnd()
// Organizes console outputs by grouping related logs together.
console.group("User Info");
console.log("Name: John");
console.log("Age: 30");
console.log("Occupation: Developer");
console.groupEnd();
// Output:
// User Info
//   Name: John
//   Age: 30
//   Occupation: Developer

// 6. console.count()
// Keeps track of how many times something happens.
for (let i = 0; i < 5; i++) {
  console.count("Loop Iteration");
}
// Output:
// Loop Iteration: 1
// Loop Iteration: 2
// Loop Iteration: 3
// Loop Iteration: 4
// Loop Iteration: 5

// 7. console.time() and console.timeEnd()
// Measures how long certain operations take.
console.time("Array Creation");
const arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(i);
}
console.timeEnd("Array Creation");
// Output: Array Creation: 0.600ms (time may vary)

// 8. console.assert()
// Prints a message only if the expression being tested is false.
const num = 11;
console.assert(num > 10, "The num is not greater than 10!");
// Output: (no output because the assertion is true)

console.assert(num < 10, "The num is not less than 10!");
// Output: Assertion failed: The num is not less than 10!

// Note: Run this file using Node.js to see the console output
// or copy-paste sections into your browser's console to experiment with each method.