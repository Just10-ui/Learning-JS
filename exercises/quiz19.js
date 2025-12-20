//? medium
//* - Flatten [[1,2],[3,4],[5]]

const number = [[1,2],[3,4],[5]];
const flatten = number.flatMap(value => {
  return value;
});
console.log(flatten);