//* The delete keyword deletes a property from an object:
//example of using delete
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
console.log(person);

//* Property values in an object can be other objects:
//example of nested object
const myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
};

//? You can access nested objects using the dot notation or the bracket notation:
console.log(myObj.myCars.car1);