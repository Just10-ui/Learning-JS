/*
  * An Array is an object type designed for storing data collections.
  * Key characteristics of JavaScript arrays are:

  - Elements: An array is a list of values, known as elements.
  - Ordered: Array elements are ordered based on their index.
  - Zero indexed: The first element is at index 0, the second at index 1, and so on.
  - Dynamic size: Arrays can grow or shrink as elements are added or removed.
  - Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays). 
*/

//example of an array
const Arr1 = ['value1', 'value2', 'value3'];

//example of accessing a property of an array
console.log(Arr1[0]); //output value1

//example of changing an array element
Arr1[0] = 'changed value';
console.log(Arr1); //output [ 'changed value', 'value2', 'value3' ]

//example of a built in sort methods in an array
const num = [3, 8, 6, 9, 2];
console.log(num.sort()); //output [ 2, 3, 6, 8, 9 ]
