//* Synchronous code executes line by line, blocking further execution until each line is completed, while asynchronous code allows other code to continue executing while it waits for an asynchronous operation to complete.

// const fun2 = () => {
//   console.log("fun2 starts and ends");
// };

// const fun1 = () => {
//   console.log("fun1 is start");
//   fun2();
//   console.log("fun1 ends");
// };

// fun1();

const fun2 = () => {
  setTimeout(() => {
    console.log("fun2 starts and ends");
  }, 2000);
};

const fun1 = () => {
  console.log("fun1 is start");
  fun2();
  console.log("fun1 ends");
};
fun1();
