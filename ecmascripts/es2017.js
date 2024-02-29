//* ==========================================
//*    ECMAScript Features (2017) / ES8
//* =========================================

//? List of new useful features added in ES8  👇
// String padding
// Object.values()
// Object.entries()
// Trailing commas in function parameter lists and calls
// Async functions

//* =====================
//*  String padding
//* =====================

//? String padding in JavaScript is a way to add extra characters (like spaces) to a string to make it a specific length.

//todo  Use Case: Makes formatting text easier and more predictable, especially for tables, alignments, and UI elements. No more messy, uneven lines disrupting your visual spells!

//? Using padStart() to pad from the beginning:
// const companyName = "Kodyfier";
// const paddedName = companyName.padStart(5);
// const paddedName = companyName.padStart(15);
// console.log(paddedName);
// console.log(paddedName.length);

//? Using padEnd() to pad from the end:
// const paddedName = companyName.padEnd(15);
// const paddedName = companyName.padEnd(15, "$");
// console.log(paddedName);

//todo Key points:
//? Both padStart() and padEnd() create a new padded string without modifying the original one.

//? They take two arguments:
//?   - targetLength: The total length of the padded string.
//?   - padString (optional): The string to use for padding (defaults to spaces).

//? If the original string is already longer than or equal to targetLength, it's returned as-is.

//* =====================
//*  trailing commas
//* ====================
//? This feature allows to have trailing commas in function declarations, functions calls, array literal & object literal:

// // Function parameter list
function greet(name, age, boolean) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

// // Function call
greet("John", 30, true);

// // Array literal
const colors = ["red", "green", "blue"];

// // Object literal
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

//* ======================================
//*  Object.entries() & Object.values()
//* ======================================
//? We have already covered in our Objects Section. Please watch the section for same

//* ======================================
//*  Async Await - Async Functions
//* ======================================
//? We will cover later in the video and you gonna love that part & our final project is based on async await .
