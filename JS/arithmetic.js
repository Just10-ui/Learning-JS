/*
  * Arithmetic operators perform arithmetic on numbers (literals or variables).
*/

// - The two numbers can be literals:
let x = 100 + 50;

// - or variables
let y = a + b;

// - or both
let z = x + 20;

//Example of using addition operator that adds numbers
let add = 1 + 1; //Output 2

//Example of using subtraction operator that subtract numbers
let sub = 1 - 1; //Output 0

//Example of using multiplication operator to multiply numbers
let mul = 1 * 2; //Output 2

//Example of using division operator to divide number
let div = 2 / 2; //Output 1

//Example of using modulus operator that returns the division remainder
let mod = 2 % 2; //Output 0

//Example of using the increment operator that increase a number by one
let num = 5;
num++; 
let inc = num; //Output 6

//Example of using decrement operator to decrease a number by one
let num2 = 5;
num2--;
let dec = num2; //Output 4 

//Example of using exponentiation operator
let exp = 5 ** 2; //Output 25

/*
  * The order which operators are executed are just as the same. Multiplication and Division are first then Addition and Subtraction.
  * Though you can bypass this rule by using parentheses
 */

//Example of using parantheses in arithmetic
let result = (50 + 50) * 2; //Output 200