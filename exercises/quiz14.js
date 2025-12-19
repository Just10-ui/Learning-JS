//!hard
//* Using foreach, iterate through an array of strings and print the total number of vowels across all strings.

const words = ["hello", "world", "foreach", "method", "challenge"];
let numberOfVowels = 0;

words.forEach(items => {
  const pattern = /[aeiou]/gi;
  return numberOfVowels += items.match(pattern).length;
});
console.log(numberOfVowels);