//* ==========================================
//*    ECMAScript Features (2021) / ES12
//* =========================================

//? List of new useful features added in ES8  👇
// String.prototype.replaceAll()
// Logical Assignment Operators (||=, &&=, ??=)
// Numeric Separators
// Promise.any()

//* ==========================================
//*  String.prototype.replaceAll()
//* =========================================
//? replaceAll in JavaScript is a function that replaces all occurrences of a specified value with another value in a given string.

//? Replacing all occurrences of a word:
// const originalString = "Hello, world! Hello again.";
// const newString = originalString.replaceAll("Hello", "Hi");
// console.log(newString);

//? Replacing multiple spaces with a single space:
// const text = "This   has   extra       spaces.";
// const normalizedText = text.replaceAll(/\s+/g, " ");
// console.log(normalizedText);

//* =====================================================
//*  Logical Assignment Operators (||=, &&=, ??=)
//* ====================================================

//? Logical OR-Assignment (||=): This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a falsy value (false, null, undefined, 0, '', NaN). Otherwise, it leaves the left-hand operand unchanged.
// let x = false;
// x = x || true; // equivalent to: x = x || true;
// console.log(x); // Output: true

// let y = 10;
// y ||= 20; // equivalent to: y = y || 20;
// console.log(y); // Output: 10 (unchanged)

//? Logical AND-Assignment (&&=): This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a truthy value. Otherwise, it leaves the left-hand operand unchanged.
// let x = true;
// x &&= false; // equivalent to: x = x && false;
// console.log(x); // Output: false

let y = 0;
y &&= 20; // equivalent to: y = y && 20;
console.log(y); // Output: 20

//* ======================
//*  Numeric Separators
//* ====================
//? This feature allows underscores (_) to be used as separators within numeric literals to improve readability.
const bigNumber = 1_000_000;
console.log(bigNumber);
// Output: 1000000;

//* ======================
//*  Promise.any()
//* ====================
//? Promise.any(): This method takes an iterable of Promise objects and returns a single Promise that resolves as soon as any of the input Promises fulfill.

const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 200, "Promise 1")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "Promise 2")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 300, "Promise 3")
);

Promise.any([promise1, promise2, promise3]).then((value) => console.log(value));

//? Difference: while Promise.race() does indeed consider both fulfilled and rejected Promises, Promise.any() only looks for fulfillment among the input Promises. If all input Promises are rejected, Promise.any() will reject with an AggregateError containing all the rejection reasons.
