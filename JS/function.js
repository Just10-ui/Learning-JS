/*
  * What are Functions?
  - Functions are fundamental building blocks in all programming.
  - Functions are reusable block of code designed to perform a particular task.
  - Functions are executed when they are "called" or "invoked". 
*/

//? function syntax
function name(p1, p2) {
  //code to be executed
}

// example of function that adds up 2 number
function add(num1, num2) {
  return num1 + num2;
}

//* Arrow functions allow us to write shorter function syntax:
let multiply = function(a, b) {return a * b}

//example of using arrow function
const mul = (a, b) => {return a * b};

//* functions can be used as variables
let result = add(10, 10);
console.log(`The sum of 10 + 10 is ${result}`);