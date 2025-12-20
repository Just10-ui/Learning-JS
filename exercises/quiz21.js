//? medium
//* - Sum only odd numbers in [2,5,8,11,14]

const number = [2,5,8,11,14];
const sumOdd = number.reduce((total, value) => {
  if (value % 2 != 0) return total + value;
  return total;
}, 0);
console.log(sumOdd);