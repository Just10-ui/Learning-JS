/*
  * How to Handle JavaScript Errors
  * The try statement allows you to define a block of code to be tested for errors while it is being executed.
  * The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
  * The JavaScript statements try and catch come in pairs:
*/

try {
  //code to try
} catch(err) {
  //code to handle errors
}

//* You cannot use a non-existing variable:
let x = 5;

try {
  x = y + 1;
} catch(err) {
  console.log(err.name);
}

//* Cannot access a variable before initialization:
try {
  let x = y;
  let y = 5;
} catch(err) {
  console.log(err.name);
}

//* A Type Error occurs when a value is of the wrong type or an operation is invalid on that type.
let Anna;

try {
  Anna(5);
} catch(err) {
  console.log(err.name);
}

//* You cannot convert a number to upper case:
let num = 1;

try {
  num.toUpperCase();
} catch(err) {
  console.log(err.name);
}

//* A RangeError occurs when a value is out of its valid range.
try {
  new Array(-1);
} catch (error) {
  console.log(error.name);
}

//* You cannot set the number of significant digits of a number to 500:
try {
  num.toPrecision(500);
} catch (error) {
  console.log(error.name);
}