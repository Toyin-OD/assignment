// Example with arrays
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

// Combine arrays using spread
const allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // Output: [1, 2, 3, 4, 5, 6]

// Copy an array
const copiedNumbers = [...numbers];
console.log(copiedNumbers); // Output: [1, 2, 3]

// Example with objects
const person = { name: "Toyin", age: 21 };
const details = { country: "Nigeria", hobby: "coding" };

// Merge objects using spread
const fullProfile = { ...person, ...details };
console.log(fullProfile);
