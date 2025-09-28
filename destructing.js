//Simple code based on destucturing
const person = {
  name: "Toyin",
  age: 21,
  country: "Nigeria"
};

// Destructuring the object
const { name, age, country } = person;

console.log(name);    // Output: Toyin
console.log(age);     // Output: 21
console.log(country); // Output: Nigeria


// Example with an array
const colors = ["red", "green", "blue"];

// Destructuring the array
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor);  // Output: blue
