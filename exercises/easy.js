//? These coding problems are considered easy

const console = require("console");

// * PROBLEM 1: Reverse string

let str = 'hello';

function reverseString(str) {
    const revStr = str.split('').reverse().join('');
    return revStr;
};

console.log(reverseString(str));
