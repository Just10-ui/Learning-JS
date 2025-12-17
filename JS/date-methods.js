/* 
  * Date Get Methods
  * Method	             Description
  - getFullYear()	    |  Get year as a four digit number (yyyy)
  - getMonth()	      |  Get month as a number (0-11)
  - getDate()	        |  Get day as a number (1-31)
  - getDay()	        |  Get weekday as a number (0-6)
  - getHours()	      |  Get hour (0-23)
  - getMinutes()	    |  Get minute (0-59)
  - getSeconds()	    |  Get second (0-59)
  - getMilliseconds()	|  Get millisecond (0-999)
  - getTime()	        |  Get time (milliseconds since January 1, 1970)
*/

//* The getFullYear() method returns the year of a date as a four digit number:
//example
const d = new Date("2021-03-25");
console.log(d.getFullYear()); //output 2021

//* The getMonth() method returns the month of a date as a number (0-11).
//* so its better to use it with an array
//example
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(month[d.getMonth()]); //output March

//* The getDate() method returns the day of a date as a number (1-31):
//example
console.log(d.getDate()); //output 25

//* The getDay() method returns the weekday of a date as a number (0-6).
//* its better to use an array for it
//example
const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(day[d.getDay()]); //output Friday

//* The getHours() method returns the hours of a date as a number (0-23):
//example
console.log(d.getHours()); //output 8
