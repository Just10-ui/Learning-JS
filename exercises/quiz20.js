//? medium
//* - Capitalize each word in ["apple","banana","cherry"]

const fruits = ["apple","banana","cherry"];
const capitalize = fruits.map(value => {
  let capital = value[0].toUpperCase();
  let rest = value.slice(1);
  return capital + rest;
});
console.log(capitalize);