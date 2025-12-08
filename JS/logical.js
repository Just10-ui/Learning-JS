/*
  * Logical Operators
  * Logical operators are used to combine boolean expressions.
  * 
  * Logical operators can be used to modify the results of comparisons.
  * 
  * Typically, you will use a comparison operator to check a condition, and a logical operator to combine conditions into more complex logic.
  
  * Operator      Name
  -    &&     |   AND
  -    ||     |   OR
  -    !      |   NOT
*/

// Example of using logical and
let x = 6;
let y = 3;
let z = x < 10 && y > 1; // Output TRUE

// Example of using logical or
z = x > 0 || y > 0; // Output TRUE

//Example of using logical not
z = !(x < 10 && y > 1); // Output False

// ? The nullish coalescing operator
// - check if the left side is null or undefine
let name = null;
let text = "missing";
let result = name ?? text;