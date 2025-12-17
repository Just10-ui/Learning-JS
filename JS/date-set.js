/*
  * Set Date Methods
  * Set Date methods are used for setting a part of a date:

  * Method	               Description
  - setDate()	          |  Set the day as a number (1-31)
  - setFullYear()	      |  Set the year (yyyy)
  - setHours()	        |  Set the hour (0-23)
  - setMilliseconds()	  |  Set the milliseconds (0-999)
  - setMinutes()	      |  Set the minutes (0-59)
  - setMonth()	        |  Set the month (0-11)
  - setSeconds()	      |  Set the seconds (0-59)
  - setTime()	          |  Set the time (milliseconds since January 1, 1970)
*/

//* The setFullYear() method sets the year of a date object. In this example to 2020:
const d = new Date('January 01, 2003');
d.setFullYear(2022)
console.log(d); //output 2021-12-31T16:00:00.000Z

//? The setFullYear() method can optionally set month and day:
d.setFullYear(2020, 3, 5);
console.log(d.toDateString()); //output Sun Apr 05 2020

