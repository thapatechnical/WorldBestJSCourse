//* call, apply, and bind are methods available in JavaScript for managing the this value of a function.
//! all 3 methods are only used in function not in object

//* call:
//! Syntax: function.call(thisArg, arg1, arg2, ...)
//? Invokes a function with a specified this value and individual arguments.

// function greet(message) {
//   console.log(`${message}, ${this.name}!`);
// }

// const person = {
//   name: "John",
// };

// greet.call(person, "hello");

//* apply:
// Syntax: function.apply(thisArg, [arg1, arg2])
//? Invokes a function with a specified this value and an array or array-like object of arguments.

// function greet(message) {
//   console.log(`${message}, ${this.name}!`);
// }

// const person = { name: "John" };

// greet.apply(person, ["hello"]);

//todo In modern JavaScript, with the introduction of the spread operator (...), the need for apply has diminished, and you can often achieve the same result with call and the spread operator.

// function greet(message, punctuation) {
//   console.log(`${message}, ${this.name}${punctuation}`);
// }

// const person = { name: "John" };
// const argsArray = ["Hello", "!"];

// // Using apply
// greet.apply(person, argsArray);
// // Output: Hello, John!

// // Using call and spread operator
// greet.call(person, ...argsArray);
// // Output: Hello, John!

//* bind:
//? Syntax: function.bind(thisArg, arg1, arg2, ...)
//* Creates a new function with a specified this value and any initial arguments. Unlike call and apply, bind does not immediately invoke the function but returns a new function that can be invoked later.

//? Use Cases:
//* Use call when you want to invoke a function with a specific this value and individual arguments.

//* Use apply when you want to invoke a function with a specific this value and an array or array-like object of arguments.

//* Use bind when you want to create a new function with a specific this value and initial arguments without immediately invoking it. The new function can be invoked later.

const bioData = {
  name: "Thapa Technical",
  age: 30,
  gender: "Male",

  greet: function () {
    console.log(
      `Hi, I'm ${this.name}. I'm ${this.age} years old, and I identify as ${this.gender}.`
    );
  },
};
// // Example usage:
// // bioData.greet();
// bioData.greet.call(bioData);

//? Imagine you have two objects: bioData and student. The greet method is defined in the bioData object, and you want to use it to display the information from the student object.

let student = { name: "vinod", age: "29", gender: "male" };
// bioData.greet.call(student);

// bioData.greet.apply(student);

// student = bioData.greet.bind(student);
// student();

// Explanation
// The greet method is defined in the bioData object, and it uses this to refer to its own properties.
// student is a separate object with properties like name, age, and gender.
// By using call(student), you are telling the greet method to temporarily consider the student object as its own object (this), allowing it to access and display the properties of the student object.
// So, call is a way to borrow a method from one object and use it for another object, temporarily setting the this value to the provided object.

//* the main difference is that call immediately invokes the function with the specified this value, while bind creates a new function with the specified this value and initial arguments but doesn't invoke the function immediately. You need to invoke the new function returned by bind separately.

// // more example
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person = { name: "vinod" };

greet.call(person, "Hello");
greet.apply(person, ["Hey"]);

const anotherWay = greet.bind(person, "hello");
anotherWay();
