//* You can create a map by passing an array to the new Map() constructor:
//example
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

//* You get the value of a key in a map with the get() method
//example
console.log(fruits.get("apples"));

//* You can add elements to a map with the set() method:
//example
fruits.set('grapes', 400);

//* The set() method can also be used to change existing map values:
//example
fruits.set('apples', 200);

//* The size property returns the number of elements in a map:
//example
console.log(fruits.size);

//* The delete() method removes a map element:
//example
fruits.delete('apples');

//* The has() method returns true if a key exists in a map:
//example
fruits.has('apples');

//* The clear() method removes all the elements from a map:
fruits.clear();