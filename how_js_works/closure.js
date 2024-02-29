//* -------------------------------
//*  Closure:
//* -------------------------------

//? A closure is created when an inner function has access to the variables of its outer function, even after the outer function has finished executing.

function outerFunction() {
  var outerVariable = "I'm from outer";

  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

var closureFunction = outerFunction();
console.dir(closureFunction);
// closureFunction();

// Here when we are calling the closureFunction() it is actually going to call the innerFunction() but in our executionContext the outerFunction is already popped  out. Still we can access the outerVariable value and how we are able to access it, is what closure all about ?

// We just need to know that an inner function has always access to the variables of the outer (parent) function. That's it.

// Why is it like that? It's because the variable object of the parent function stays in memory even after the function returns, and our inner function has access to this variable object through the scope chain.

// It might be beneficial to clarify that the call stack is simply the execution order and it is not the same thing as the computer's memory, which is where the variables are held.  So even though the function was removed from the call stack, its variables are still maintained in memory until they are no longer needed and garbage collection comes and removes them.

//* also one more example

function multiplier(factor) {
  return function (number) {
    console.log(number, factor);
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5));
