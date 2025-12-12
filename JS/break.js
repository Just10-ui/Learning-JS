/*
  * The Break Statement
  * The break statement "jumps out" of loops and switches.
  * The break statement terminates the execution of a loop or a switch statement. 
*/

// ? When break is encountered in a loop, the loop terminates immediately.
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(`The number is ${i}`);
}

// ? In a switch statement, a break statement will exit the switch block after a matching case is executed.
let day = 4;

switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

// ? break with label 
for (let x = 0; x < 10; x++) {
  loop2 : for (let y = 0; y < 5; y++) {
    if (y === 2) break loop2;
    console.log(`The break happened at ${y}`);
  }
}