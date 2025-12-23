//example
function greet(name, callback) {
  let greetings = `Hi my name is ${name}`;
  callback(greetings);
}

function myName(greets) {
  console.log(greets);
}

greet('Justin', myName);