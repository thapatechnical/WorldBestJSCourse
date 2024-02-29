//* ======================================
//* Modern JavaScript - EcmaScript 2015
//* =====================================

//* ======================================
//* LET AND CONST - EcmaScript 2015
//* =====================================

//? let Keyword:  The let keyword is used to declare variables with block scope. Variables declared with let are mutable, meaning their values can be reassigned.

// var myFavWorldBestName = "vinod Bahadur Thapa";
// myFavWorldBestName = "thapa technical";
// console.log(myFavWorldBestName);

// let myFavWorldBestName = "vinod Bahadur Thapa";
// myFavWorldBestName = "thapa technical";
// console.log(myFavWorldBestName);

//? const Keyword: The const keyword is used to declare variables with block scope, but once a value is assigned to a const variable, it cannot be reassigned. const variables are immutable.

// pi=3.142 * r * r

// const myFavWorldBestName = "vinod Bahadur Thapa";
// // myFavWorldBestName = "thapa technical";
// console.log(myFavWorldBestName);

// //? 1st show what var can do
// var name = "thapa";

// if (true) {
//   var name = "vinod";
//   console.log(name);
// }

// name = "technical";
// console.log(name);

//? ex2: with the help of let keyword
// let name = "thapa";

// if (true) {
//   name = "vinod";
//   console.log(name);
// }

// name = "technical";
// console.log(name);

//? ex2: with the help of let keyword
// const name = "thapa";

// if (true) {
//   const name = "vinod";
//   console.log(name);
// }

// name = "technical";
// console.log(name);

// var
// if (true) {
//   var name = "vinod";
//   console.log(name);
// }
// name = "technical";
// console.log(name);

// let
// if (true) {
//   let name = "vinod";
//   console.log(name);
// }
// // name = "technical";
// console.log(name);

//* ==========================================
//* TEMPLATE STRINGS - EcmaScript 2015
//* =========================================

//? In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create strings in JavaScript. Template strings are enclosed in backticks (``) rather than single or double quotes.

// let firstName = "vinod";
// let lastName = "thapa";

// // Using template string for string interpolation
// let fullName = firstName + lastName;
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//? String Interpolation:  Template strings support string interpolation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in ${}

// let age = 30;

// // String interpolation with variable
// let message = `I am ${age} years old.`;
// console.log(message);

// Multi-line Strings: Template strings make it easy to create multi-line strings without the need for concatenation or escape characters.
// let multiLineString = `
//   This is a multi-line
//   string using template literals.
//   It's much cleaner and easier to read.
// `;

// console.log(multiLineString);

//? Expression Evaluation: Template expressions can include any valid JavaScript expression.

//! Practice Time
// console.log("5 * " + num + " = " + 5 * num);
// let num = 5;
// console.log(`5 * ${num} = ${5 * num}`);

//? Advantages:
//? Readability: Template strings make the code more readable, especially for complex string constructions.

//? Conciseness: They eliminate the need for explicit string concatenation and reduce the use of escape characters.

//? Expression Flexibility: Any JavaScript expression can be embedded within ${}.

//? Multi-line Support: Creating multi-line strings is more straightforward.

//* ==========================================
//* DEFAULT Parameters
//* =========================================

//? In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults. Default parameters allow you to specify default values for function parameters in the function declaration itself. If a parameter is not provided when the function is called, the default value is used.

//? Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

//! Write a function to find sum of two numbers? What if during function call user only passed one argument?

// function sum(a = 20, myCurClass = 10) {
//   return a + b;
// }
// console.log(sum());

//* ==========================================
//*  FAT ARROW FUNCTION
//* =========================================

//? In ECMAScript 6 (ES6), arrow functions, also known as fat arrow functions, were introduced as a concise way to write anonymous functions.

// const sum = function (a, b) {
//   let result = `The sum of ${a} and ${b} is ${a + b}.`;
//   console.log(result);
// };

// sum(5, 5);

// const sum = (a, b) => console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// sum(5, 5);

//! How to convert the same in fat arrow function
// Syntax
// const functionName = (param1, param2, ...) => {
//     // Function body
//     return result; // Optional
//   };

// todo NOTES

// //?🚀 1: If the function body consists of a single expression, the braces {} and the return keyword can be omitted.
// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(5, 5));

// //? 🚀 2: If there is only one parameter, the parentheses () around the parameter list can be omitted.
// const square = (a) => `The square of ${a} is  ${a * a}`;
// console.log(square(5));

// //? 🚀 3: If there are no parameters, use an empty set of parentheses ().
// const greet = () => console.log("Plz LIKE SHARE & SUBSCRIBE!");
// greet();

//! ==========================================
//!  Part 2 of Modern JavaScript
//! =========================================

//* =========================================
//*  Object Properties - Modern JavaScript
//* =========================================
// const name = "vinod";
// const age = 30;

//? traditional way
// const person = { name: name, age: age };
//? Using shorthand notation for object property
// const person = { name, age };
// console.log(person);
// Instead of specifying name: name and age: age, you can simply use name and age directly within the object literal, thanks to ES6 shorthand property notation.

//* ==========================================
//*  Destructuring - Modern JavaScript
//* =========================================
//? Destructuring in JavaScript is a way to extract values from arrays or objects and assign them to variables in a concise and readable manner.
//? Use Case: Makes code cleaner and avoids repetitive copying of values.

//* Destructuring Arrays:
// Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.

//? 1: Extracting specific elements:
const numbers = [10, 20, 30];
// const first = numbers[0]; // Traditional way
// const [first, second, third] = numbers;
// console.log(second);

//? 2: Ignoring elements:
// const [, , third] = numbers;
// console.log(third);

//! Interview Questions
//! Write a program to swap two variables without using 3rd variable?
let a = 10;
let b = 30;
// a=30, b=10
//? Mostly will do using 3rd var
// let c = b; //c=30
// b = a; // b=10
// a = c; //a=30

//? without using 3rd variable
// [a, b] = [b, a];
// console.log(a, b);

//* Destructuring Objects:
const user = { name: "Vinod", age: 30 };
// we will see the real life use of it in our main project of weather app

//? Extracting properties:
// const myName = user.name; // Traditional way
// const { age, name } = user;
// console.log(age, name);

//? Renaming properties:
// const { name: fullName, age } = user; // Rename "name" to "fullName"
// console.log(fullName);

//* ==========================================
//*  Spread Operator - Modern JavaScript
//* =========================================
// JavaScript ES6 (ECMAScript 6) introduced the spread operator. The syntax is three dots(...) followed by the array (or iterable*).

//? 1. Copying an array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// let newFruits = [...fruits];
// console.log(newFruits);

//? 2: Concatenating arrays / Combining arrays
// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [4, 5, 6];
// const newNumbers = [...numbers1, ...numbers2];
// console.log(newNumbers);

//? 3: Adding Elements to existing array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// // fruits.push("guava", "grapes");
// fruits.push(...["guava", "grapes"]);
// console.log(fruits);

//! One more useCases
//? In JavaScript, when you spread a string using the spread syntax (...), it converts the string into an array of its individual characters.

//? Traditional way
// const country = "INDIA";
// console.log(country.split(""));

//? New way of doing it
// const country = "INDIA";
// console.log([...country]);

//* ==========================================
//*  Rest parameters  - Modern JavaScript
//* =========================================
//? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a more flexible way to work with functions that can accept varying numbers of arguments.

//? traditional way of doing it
// const sum = (a, b, c, d) => {
//   return a + b + c + d;
// };

//? with rest parameters
const sum = (a, b, ...numbers) => {
  //   console.log(typeof numbers);
  return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0);
};

console.log(sum(1, 2, 3, 4));

//TODO NOTE: A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
// function wrong1(...one, ...wrong) {}
// function wrong2(...wrong, arg2, arg3) {}
