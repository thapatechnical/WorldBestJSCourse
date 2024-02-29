//* =========================================
//*  Timing Based Events in JavaScript
//* =========================================

//* 1. setTimeout:
//? The setTimeout function is used to execute a function or code block after a specified delay in milliseconds.

// function delayedFunction(x) {
//   console.log("This function was delayed by 2000 milliseconds (2 seconds).", x);
// }

// setTimeout(delayedFunction, 2000);
// setTimeout(() => delayedFunction(5), 2000);

//* 2. setInterval:
//? The setInterval function is used to repeatedly execute a function or code block at a specified interval in milliseconds.

//? ex- mind game of counting seconds on mind and after every 5secs we need to draw a straight line on paper.
// and it will continue till I told you to stop

// function repeatedFunction() {
//   console.log(
//     "This function will be repeated every 1000 milliseconds (1 second)."
//   );
// }

// setInterval(repeatedFunction, 1000);

//* 3. Clearing Timeout with clearTimeout:
//? If you want to cancel a scheduled timeout before it occurs, you can use the clearTimeout function.

//? The global clearTimeout() method cancels a timeout previously established by calling setTimeout().

// Syntax:
//* clearTimeout(timeoutID);

// function delayedFunction() {
//   console.log("This function was delayed by 2000 milliseconds (2 seconds).");
// }
// const myWork = setTimeout(delayedFunction, 2000);
// clearTimeout(myWork);

//todo Cancel the timeout before it occurs

//* 4. Clearing Interval with clearInterval:
//? If you want to cancel a scheduled interval before it occurs, you can use the clearInterval function.

//? The global clearInterval() method cancels a timeout previously established by calling setInterval().

// Syntax:
// clearInterval(intervalID);

// function repeatedFunction() {
//   console.log("This function repeats every 1000 milliseconds (1 second).");
// }

// const intervalID = setInterval(repeatedFunction, 1000);

// clearInterval(intervalID);

//todo Cancel the interval

//* =========================================
//*  Challenge Time
//* =========================================

//! Write a JavaScript program that defines a function called repeatedFunction. This function should log the message "This function repeats every 1000 milliseconds (1 second)" to the console. Then, set up an interval using setInterval() to call repeatedFunction every 1000 milliseconds.  Additionally, after 5 seconds have elapsed, use setTimeout() to clear the interval previously set up. Make sure to log the message "Interval cleared after 5 seconds." when the interval is cleared.

// const repeatedFunction = () => {
//   console.log("This function repeats every 1000 milliseconds (1 second)");
// };

// repeatedFunction();

// const intervalID = setInterval(repeatedFunction, 1000);

// setTimeout(() => {
//   clearInterval(intervalID);
// }, 5000);
