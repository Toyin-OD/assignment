// Simple JavaScript code using array methods
let numbers = [5, 10, 15, 20, 25];

//Add a new number to the end
numbers.push(30); 
console.log("After push:", numbers);

//Remove the last number
numbers.pop();
console.log("After pop:", numbers);

//Remove the first number
numbers.shift();
console.log("After shift:", numbers);

//Add a number to the beginning
numbers.unshift(2);
console.log("After unshift:", numbers);

//Create a new array with each number doubled
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

//Get only numbers greater than 10
let filtered = numbers.filter(num => num > 10);
console.log("Filtered (greater than 10):", filtered);

//Sum all the numbers
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);
