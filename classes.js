// A simple JavaScript class example

// Define a class
class Student {
  // Constructor method
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display student info
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Method to check if student is an adult
  isAdult() {
    return this.age >= 18;
  }
}

// Create objects (instances) from the class
let student1 = new Student("Toyin", 20);
let student2 = new Student("Grace", 16);

// Use the class methods
console.log(student1.introduce()); // Hi, my name is Toyin and I am 20 years old.
console.log("Is Toyin an adult?", student1.isAdult()); // true

console.log(student2.introduce()); // Hi, my name is Grace and I am 16 years old.
console.log("Is Grace an adult?", student2.isAdult()); // false

