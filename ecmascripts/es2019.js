//* ==========================================
//*    ECMAScript Features (2019) / ES10
//* =========================================

//? List of new useful features added in ES8  👇
// Array.prototype.{flat,flatMap}
// Object.fromEntries()
// String.prototype.{trimStart,trimEnd}
// Symbol.prototype.description
// Optional catch binding

//* ==================================
//*  Array.flat & Array.flatMap
//* ================================
//? flat() is a new array instance method that can create a one-dimensional array from a multidimensional array. (nested arrays into a single, flat array.)

// const nestedArray = [1, 2, [3, 4], 5];
const nestedArray1 = [1, [2, [3, [4]]], 5];

// const flattenedArray = nestedArray.flat();
// const flattenedArray = nestedArray1.flat(3);
// console.log(flattenedArray);

//? flatMap() is a new Array instance method that combines flat() with map(). It’s useful when calling a function that returns an array in the map() callback, but you want your resulted array to be flat:

// const arr = ["My name", "is vinod", "thapa"];
// const newArr = arr.flatMap((curVal) => curVal.split(" "));
// console.log(newArr);

//* ============================
//*  Object.fromEntries()
//* =============================
//? Objects have an entries() method, since ES2017.
//? It returns an array containing all the object own properties, as an array of [key, value] pairs:

//? ES2019 introduces a new Object.fromEntries() method, which can create a new object from such array of properties:
// const person = { name: "vinod", age: 30 };
// const entries = Object.entries(person);
// // console.log(entries);

// const newPerson = Object.fromEntries(entries);
// console.log(newPerson);

// // // Now Think & let me know Why 🤔,
// console.log(person == newPerson);

//* ========================================
//* String.prototype.{trimStart,trimEnd}
//* =========================================

//? trimStart(): Return a new string with removed white space from the start of the original string
// console.log("Testing".trimStart());
// console.log("           Testing".trimStart());
// console.log("     Testing     ".trimStart());
// console.log("Testing    ".trimStart());

//? trimEnd(): Return a new string with removed white space from the end of the original string
// console.log("Testing".trimEnd());
// console.log("           Testing".trimEnd());
// console.log("     Testing     ".trimEnd());
// console.log("Testing    ".trimEnd());

//* ================================
//* Symbol.prototype.description
//* ===============================

//? In JavaScript, a Symbol is a primitive data type introduced in ECMAScript 2015 (ES6). It represents a unique identifier that is immutable and guaranteed to be unique. Symbols are often used as property keys in objects to avoid naming conflicts.

//? The Symbol.prototype.description property is a new feature introduced in ECMAScript 2019 (ES10). It allows you to retrieve the description of a symbol. When you create a symbol, you can optionally provide a description as its parameter. The description property lets you access this description.

// const mySymbol = Symbol("This is my symbol");
// console.log(typeof mySymbol);
// console.log(mySymbol.description);

//* ================================
//*  Optional catch binding
//* ===============================
//? In ECMAScript 2019 (ES10), a new feature called "optional catch binding" was introduced for the try...catch statement. This feature allows you to omit the parameter in the catch block, making it optional.

//? We previously had to do: 👇
try {
  //...
} catch (e) {
  //handle error
}

//? Now we can omit that optional parameter 👇
try {
  10 + 5;
} catch {
  console.log("there is an error");
}
