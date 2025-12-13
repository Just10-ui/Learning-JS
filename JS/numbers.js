//* Numbers can be written with or without decimals.
let x = 3.14;    //- A number with decimals
let y = 3;       //- A number without decimals

//* Extra large or extra small numbers can be written with scientific (exponent) notation:
x = 123e5;    //output 12300000
y = 123e-5;   //output 0.00123

//* Floating point arithmetic is not always 100% accurate:
x = 0.2 + 0.1;

//* To solve the problem above, it helps to multiply and divide:
x = (0.2 * 10 + 0.1 * 10) / 10;

//* JavaScript will try to convert strings to numbers in all numeric operations:
x = '100';
y = '10';

console.log(x / y); //output 10
console.log(x * y); //output 1000
console.log(x - y); //output 90
console.log(x + y); //output 10010

//! Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
console.log(10 / 'apple'); //output NAN

//* You can use the global JavaScript function isNaN() to find out if a value is a not a number:
let nan = 10 / 'apple';
console.log(isNaN(nan)); //output true

//* convert numbers to string using toString() method 
let number = 10;
console.log(number.toString());

