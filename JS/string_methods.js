// * Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

// - length
// ? The length property returns the length of a string:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let fruits = "Apple, Banana, Kiwi";

console.log(text.length); //output 26

/* 
  * extracting string characters
  - The at(position) Method
  - The charAt(position) Method
  - The charCodeAt(position) Method
  - Using property access [] like in arrays
*/

//example of using at()
console.log(text.at(0)); //output A
console.log(text.at(-1)); //output Z

//example of using charAt()
console.log(text.charAt(1)); //output B

//example of using charCodeAt()
console.log(text.charCodeAt(0)); //output 65

//example of using property access []
console.log(text[2]); //output C

// * concat() joins two or more strings
let fname = 'Justin';
let lname = 'Apolong';
let myName = fname.concat(' ', lname, ' is my full name');
console.log(myName);

/*
  * Extracting String Parts

  * There are 3 methods for extracting a part of a string:
  - slice(start, end)
  - substring(start, end)
*/

//example of using slice
console.log(fruits.slice(7, 13)); //output Banana

//example of using substring
console.log(fruits.substring(7, 13)); //output Banana

/*
  * Converting to Upper and Lower Case
  - A string is converted to upper case with toUpperCase():
  - A string is converted to lower case with toLowerCase(): 
*/

//example of converting strings to lowercase
console.log(text.toLocaleLowerCase()); //output abcdefghijklmnopqrstuvwxyz

//example of converting strings to uppercase
console.log(fruits.toLocaleUpperCase()); //output APPLE, BANANA, KIWI

// * The isWellFormed() method returns true if a string is well formed.
console.log(fruits.isWellFormed()); //output true

// * The trim() method removes whitespace from both sides of a string:
let text1 = "      Hello World!      ";
console.log(text1.trim()); //output Hello World!

// * The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log(text1.trimStart());

// * The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log(text1.trimEnd());

// * It pads a string with another string (multiple times) until it reaches a given length.
let num = '5';
console.log(num.padStart(4, '0')); //output 0005

// * The padEnd() method pads a string from the end.
console.log(num.padEnd(4, '0')); //output 5000

// * The repeat() method returns a string with a number of copies of a string.
console.log(num.repeat(2)); //output 55

// * The replace() method replaces a specified value with another value in a string:
console.log(fruits.replace('Banana', 'Watermelon')); //output Apple, Watermelon, Kiwi

// * The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
console.log(fruits.replaceAll(/Banana/g, 'Grapes')); //output Apple, Grapes, Kiwi

// * A string can be converted to an array with the split() method:
console.log(fruits.split(' ')); //output [ 'Apple,', 'Banana,', 'Kiwi' ]
