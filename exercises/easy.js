//? These coding problems are considered easy

const console = require("console");

// * PROBLEM 1: Reverse String

let str = 'hello';

function reverseString(str) {
    const revStr = str.split('').reverse().join('');
    return revStr;
};

// console.log(reverseString(str));


// * PROBLEM 2: Odd or Even

function isEven(num) {
    return num % 2 == 0;
}

// console.log(isEven(2));

// * PROBLEM 3: Find the Maximum

function findMax(arr) {
    const maxNum = arr.reduce((total, value) => {
        return total > value ? total : value;
    }, arr[0]);

    return maxNum;
};

console.log(findMax([1, 5, 8, 3, 2]));