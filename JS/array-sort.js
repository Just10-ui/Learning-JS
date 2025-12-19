//* The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); //output [ 'Apple', 'Banana', 'Mango', 'Orange' ]

//* The reverse() method reverses the elements in an array:
console.log(fruits.reverse()); //output [ 'Orange', 'Mango', 'Banana', 'Apple' ]

//* The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.toSorted()); //output [ 'Apr', 'Feb', 'Jan', 'Mar' ]

//* The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
console.log(months.toReversed()); //output [ 'Apr', 'Mar', 'Feb', 'Jan' ]

//* By default, the sort() function sorts values as strings. This works well for strings ("Apple" comes before "Banana"). If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers. You can fix this by providing a compare function:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points); //output [ 1, 5, 10, 25, 40, 100 ]

//* Use the same trick to sort an array descending:
points.sort(function(a, b){return b - a});
console.log(points); //output [ 100, 40, 25, 10, 5, 1 ]

//* Using a sort function, like explained above, you can sort an numeric array in random order
points.sort(function(){return 0.5 - Math.random()});
console.log(points); //output random

/* 
  * The points.sort() method in the example above is not accurate. It will favor some numbers over others.
  * The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!
  * In JavaScript the method can be translated to this:
*/

for (let i = points.length - 1; i < points.length; i++) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.log(points); //output random

//* Sorting Object Arrays
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

//* The solution is to write a compare function to compare the property values:
cars.sort(function(a, b){return a.year - b.year});
console.log(cars); //output [ { type: 'Saab', year: 2001 }, { type: 'BMW', year: 2010 },{ type: 'Volvo', year: 2016 } ]

//* Comparing string properties is a little more complex:
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
console.log(cars); //output [ { type: 'BMW', year: 2010 }, { type: 'Saab', year: 2001 }, { type: 'Volvo', year: 2016 } ]