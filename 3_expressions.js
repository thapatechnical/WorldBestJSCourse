//* ===================================
//*  EXPRESSIONS AND OPERATORS Section
//* ====================================

//? 1st we will see what is expression means and also what is operand and operator in any expression?

//* Types of Operators in JS
// Assignment operators
// Arithmetic operators
// In arithmetic we increment and decrement operator.
// Comparison operators
// Logical operators
// String operators
// Conditional (ternary) operator

//* ===================================
//* 1: Assignment operators
//* ====================================

//? Assignment operators in programming are symbols used to assign values to variables. They take the value on the right side of the operator and assign it to the variable on the left side.

// examples
// var myFavNum = 15;
// Assigns the value 15 to the variable myFavNum
// var channelName = 'thapa tecnical'

//* ===================================
//* 2: Arithmetic operators
//* ====================================

//? Arithmetic operators in programming perform basic mathematical operations on variables or values. They include addition, subtraction, multiplication, division, and modulus.

//? Addition (+): Adds two values or variables.
// Example:
// var x = 5;
// var y = 10;
// var sum = x + y;
// console.log(sum);

//? Subtraction (-): Subtracts the right operand from the left operand.
// Example:
// var a = 10;
// var b = 7;
// var difference = a - b;
// console.log(difference);

//? Multiplication (*): Multiplies two values or variables.
// Example:
// var p = 4;
// var q = 6;
// var product = p * q;
// console.log(product);

//? Division (/): Divides the left operand by the right operand.
// Example:
// var m = 15;
// var n = 3;
// var quotient = m / n;
// console.log(quotient);

//? Modulus (%): Returns the remainder when the left operand is divided by the right operand.
// Example:
// var c = 17;
// var d = 5;
// var remainder = c % d;
// console.log(remainder);

//* ===================================
//* Challenge Time
//* ====================================

//! What will be the Output 🤔💭
// var result = "hello" / 2 ❓
// var result = "hello" / 2;
// console.log(result);

//* ===================================
//*  InterView Question
//* ====================================

//! var result = 0.1 + 0.2 ❓ 🤔💭
// var result = 0.1 + 0.2;
// console.log(result.toFixed(2));
// when working with floating-point numbers in JavaScript, consider using methods like toFixed() when precise decimal representation is necessary.

// const result = 55 * "hello" ❓
// var result = 55 * "hello";
// console.log(result);

//* ===================================
//* 3: String Operators
//* ====================================

//? There are a few ways to concatenate strings in JavaScript. The most common way is to use the + operator. For example, to concatenate the strings "Hello" and "World", you would use the following code:

// var str1 = "Hello";
// var str2 = "World ";
// var str3 = str1 + Str2;
// console.log(str3);

//* ===================================
//*  InterView Question
//* ====================================

//! console.log("5" + 3);  // Outputs "53" ❓

//* ===================================
//* 4: comparison operators
//* ====================================

//? Comparison operators in JavaScript are used to compare values and return a Boolean result (true or false).

//? Equal (==): Checks if two values are equal, performing type coercion if necessary.
// console.log(5 == "5");

//? Strict Equal (===):
// Checks if two values are equal without performing type coercion.
// console.log(5 === "5");

//? Not Equal (!=   👉 ! =):
// Checks if two values are not equal, performing type coercion if necessary.
// console.log(5 != 5);

//? Greater Than (>):
// Checks if the value on the left is greater than the value on the right.
// Example: 10 > 5 evaluates to true.
// console.log(5 > 2);

//? Less Than (<):
// Checks if the value on the left is less than the value on the right.
// Example: 5 < 10 evaluates to true.
// console.log(5 < 10);

//? Greater Than or Equal To (>=):
// Checks if the value on the left is greater than or equal to the value on the right.
// Example: 10 >= 10 evaluates to true.
// console.log(10 <= 10);

//? Less Than or Equal To (<=):
// Checks if the value on the left is less than or equal to the value on the right.
// Example: 5 <= 10 evaluates to true.
// console.log(5 >= 10);

//* ===================================
//*  InterView Question
//* ====================================

//! What is the difference between == and === operators in JavaScript❓
//? The equality == operator is a comparison operator that compares two values and returns true if they are equal. The strict equality === operator is also a comparison operator, but it compares two values and returns true only if they are equal and of the same type.
// ex.
// let num1 = 1;
// let num2 = "1";

// if (num1 === num2) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

//* ===================================
//* 5: Logical operators in JavaScript
//* ====================================

//* There are three main logical operators: && (logical AND), || (logical OR), and ! (logical NOT).

//? Logical AND (&&): Returns true if both operands are true, otherwise, it returns false.
// Example:
// var x = 5;
// var y = 10;
// console.log(x > 0 && y < 0);

//? Logical OR (||): Returns true if at least one of the operands is true, otherwise, it returns false.
// Example:
// var a = 15;
// var b = 0;
// console.log(a > 10 || b > 10);

//? Logical NOT (!):
//? Returns true if the operand is false, and false if the operand is true.
// Example:
// var isOpen = false;
// console.log(!isOpen);

//* ===================================
//*  InterView Question
//* ====================================

//? Combining logical operators allows you to create complex conditions:
//! Q: Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's license❓

// var age = 19;
// var hadDrivingLicense = false;

// // age > 18
// // age == 18
// console.log(age >= 18 && hadDrivingLicense);

//! How would the result change if hasDriverLicense was set to false❓

//* ===================================
//* 6: Unary operator
//* ====================================
//? Unary operators in JavaScript are operators that work with only one operand. They perform various operations such as negation, incrementing, decrementing, type conversion, and more.

//? Unary Plus (+): Converts its operand into a number. If the operand is not already a number, it attempts to convert it.
// console.log(+3);
// console.log(+"5");

//? Unary Negation (-): Negates its operand, converting non-numbers into numbers and then negating them.
// console.log(-5);
// console.log(-"3");

//? Prefix Increment (++x) and Prefix Decrement (--x): In prefix form, the value of the operand is first incremented or decremented, and then the result is returned.
// var x = 5;
// var y = --x;
// console.log(y);
// console.log(x);

//? Postfix Increment (x++) and Postfix Decrement (x--): In postfix form, the value of the operand is first returned, and then it is incremented or decremented.
// var x = 5;
// var y = x++;
// console.log(y);
// console.log(x);

//todo The current value of x (which is 5) is assigned to y. After the assignment, the value of x is then incremented by 1.

//* ===================================
//* 7: Conditional (ternary) operator
//* ====================================

//? syntax: condition ? expressionIfTrue : expressionIfFalse;

// ! write a program to check if the candidates isEligibleForDrive or not? Age must be equal to or greater then 18.

// var age = 19;
// var result = age >= 18 ? "Yes" : "No";
// console.log(result);

//! Q: Let say you have a variable score representing a student's exam score. If the score is greater than or equal to 60, the student passes; otherwise, they fail. Use the conditional (ternary) operator to determine the result and store it in a variable called result. Log the result to the console❓

// var score = 99;
// var result = score >= 60 ? "Pass" : "Fail";
// console.log(result);

//* ===================================
//*  Combined Interview Questions
//* ====================================

// console.log(typeof ("5" - 3));

// console.log(2 < 12 < 5);

// console.log("20" + 10 + 10);
