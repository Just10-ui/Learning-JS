//* You can create a JavaScript Set by:
//- Passing an array to new Set()
//- Create an empty set and use add() to add values
//example of passing an array to a new set
const letters = new Set(["a","b","c"]);
console.log(letters); //output Set(3) { 'a', 'b', 'c' }

//example of adding values to a set
letters.add('d');
console.log(letters); //output Set(4) { 'a', 'b', 'c', 'd' }

//example of adding a variable to a set
let e = 'e';
letters.add(e);
console.log(letters); //output Set(5) { 'a', 'b', 'c', 'd', 'e' }

//* If you add equal elements, only the first will be saved:
letters.add('a');
console.log(letters); //output Set(5) { 'a', 'b', 'c', 'd', 'e' }

//* You can list all Set elements (values) with a for..of loop:
for (const letter of letters) {
  console.log(letter); //output a b c d e
}

