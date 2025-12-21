//* The try block contains the code that might throw an error.
//* If no error occurs, the catch block is skipped.
//* The catch block executes only if an error occurs in the try block.
//* The error object provides details about what went wrong.

//* Syntax
try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
}

//* The finally block executes after the try and catch blocks, whether an error occurred or not.
//* It is commonly used for cleanup tasks (e.g., closing files, stopping loaders, etc.).

//* Syntax
try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that always runs, no matter what
}

//* The throw statement allows you to create a custom error.
//* Technically you can throw an exception (throw an error).
//* The exception can be a JavaScript String, a Number, a Boolean or an Object:

throw "Too big";    // throw a text
throw 500;          // throw a number