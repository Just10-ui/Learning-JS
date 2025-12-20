//? medium
//* - Remove duplicates from [1,2,2,3,4,4,5]

const number = [1,2,2,3,4,4,5];
const sorted = number.filter((value, index, array) => {
  if (index == 0) return value;
  if (value !== array[index - 1]) return value;
});
console.log(sorted);