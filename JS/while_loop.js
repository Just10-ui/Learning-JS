/*
  * While Loops
  * While loops execute a block of code as long as a specified condition is true.
  
  * JavaScript have two types of while loops:
  - The while loop
  - The do while loop
*/

while (condition) {
  // code block to be executed
}

// example of while loop
while (i < 10) {
  text += 'The number is ' + i;
  i++;
}

do {
  // code block to be executed
} while (condition);

// example of using do...while loop
do {
  text += "The number is " + i;
  i++;
} while (i < 10);