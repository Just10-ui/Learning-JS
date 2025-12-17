const array = [1, 2, 3, 4];

//* The length property returns the length (size) of an array:
console.log(array.length); //output 4

//* The length property can also be used to set the length of an array:
array.length = 3;
console.log(array); //output [ 1, 2, 3 ]

//* The toString() method returns the elements of an array as a comma separated string.
console.log(array.toString()); //output 1,2,3

//* The join() method also joins all array elements into a string.
//* It behaves just like toString(), but in addition you can specify the separator:
console.log(array.join('')); //output 123
console.log(array.join('-')); //output 1-2-3

//* The pop() method removes the last element from an array:
array.pop();
console.log(array); //output [ 1, 2 ]

//* The push() method adds a new element to an array (at the end):
array.push(6);
console.log(array); //output [ 1, 2, 6 ]

//* The shift() method removes the first array element and "shifts" all other elements to a lower index.
array.shift();
console.log(array); //output [ 2, 6 ]

//* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
array.unshift(0);
console.log(array); //output [ 0, 2, 6 ]

//* The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
console.log(myGirls.concat(myBoys)); //output [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

//? The concat() method does not change the existing arrays. It always returns a new array. The concat() method can take any number of array arguments.

//* The copyWithin() method copies array elements to another position in an array:
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits.copyWithin(2, 0)); //output [ 'Banana', 'Orange', 'Banana', 'Orange', 'Apple' ]
console.log(fruits.copyWithin(2, 0, 2)); //output [ 'Banana', 'Orange', 'Banana', 'Orange', 'Apple' ]

//* The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat()); //output [ 1, 2, 3, 4, 5, 6 ]

//* The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.flatMap(x => [x, x * 10])); //output [ 1, 10,  2, 20,  3, 30,  4, 40,  5, 50, 6, 60 ]

//* The splice() method can be used to add new items to an array:
fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(fruits); //output [ 'Banana', 'Orange', 'Lemon',  'Kiwi', 'Banana', 'Orange', 'Apple' ]
/* 
  - The first parameter (2) defines the position where new elements should be added (spliced in).
  - The second parameter (0) defines how many elements should be removed.
  - The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/

//* With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
fruits.splice(0, 1);
console.log(fruits); //output [ 'Orange', 'Lemon', 'Kiwi', 'Banana', 'Orange', 'Apple' ]
/*
  - The first parameter (0) defines the position where new elements should be added (spliced in).
  - The second parameter (1) defines how many elements should be removed.
  - The rest of the parameters are omitted. No new elements will be added. 
*/

//* Array toSpliced() method as a safe way to splice an array without altering the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.toSpliced(0, 1)); //output [ 'Feb', 'Mar', 'Apr' ]
console.log(months); //output [ 'Jan', 'Feb', 'Mar', 'Apr' ]

//* The slice() method slices out a piece of an array into a new array:
console.log(fruits.slice(1)); //output [ 'Lemon', 'Kiwi', 'Banana', 'Orange', 'Apple' ]
console.log(fruits); //output [ 'Orange', 'Lemon', 'Kiwi', 'Banana', 'Orange', 'Apple' ]
/*
  - The slice() method creates a new array.
  - The slice() method does not remove any elements from the source array. 
*/

console.log(fruits.slice(1, 2)); //output [ 'Lemon' ]