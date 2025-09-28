// Simple examples of arrow functions in JavaScript

//Arrow function to add two numbers
const add = (a, b) => a + b;
console.log("Add:", add(5, 3)); // 8

//Arrow function to check if a number is even
const isEven = num => num % 2 === 0;
console.log("Is 4 even?", isEven(4)); // true
console.log("Is 7 even?", isEven(7)); // false

//Arrow function with no parameters
const sayHello = () => "Hello, World!";
console.log(sayHello()); // "Hello, World!"

//Arrow function inside map()
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(n => n * n);
console.log("Squared numbers:", squared); // [1, 4, 9, 16, 25]
