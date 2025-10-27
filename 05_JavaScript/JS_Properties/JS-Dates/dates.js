//* JavaScript Dates
//JavaScript Date Objects let us work with dates:
//ex.
{
const d = new Date();
console.log(d);

const c =new Date("2023-08-02");
console.log(c);

//?NOTE:
// Date objects are static. The "clock" is not "running".
// The computer clock is ticking, date objects are not.
}

//* Creating Date Objects
// Date Objects are created with the new Date() constructor.
// There are 9 ways to create a new date object:

/**
 * ~ new Date()
 * ~ new Date(date string)
 * 
 * ~ new Date(year,month)
 * ~ new Date(year,month,day)
 * ~ new Date(year,month,day,hours)
 * ~ new Date(year,month,day,hours,minutes)
 * ~ new Date(year,month,day,hours,minutes,seconds)
 * ~ new Date(year,month,day,hours,minutes,seconds,ms)
 * 
 * ~ new Date(milliseconds)
 */

//* JavaScript new Date()
{
    const d = new Date();
    console.log(d);
}

//* new Date(date string)
{
    const d = new Date("October 13, 2014, 2014 11:14:10");
    console.log(d);
}

//* new Date(year, month, ...)
//new Date(year, month, ...) creates a date object with a specified date and time.
//7 Numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
{
    const d = new Date(2025, 11, 24, 10, 33, 30, 0);
    console.log(d);
}

//? NOTE:
// JavaScript counts months from 0 to 11:
// January = 0, December = 11.
//Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
{
    const d = new Date(2018,15,24,10,33,30);
    console.log(d);
}

//* Using 6,4,3, or 2 Numbers
//6 Numbers specify year, month, day, hour, minute, second:
{
    const d = new Date(2018, 11, 24, 10, 33, 30);
    console.log(d);
}

//5 Numbers specify year, Month, day, hour and minute:
{
    const d = new Date(2018, 11, 24, 10, 33);
    console.log(d);
}

//4 Numbers specify year,month,day and hour:
{
    const d = new Date(2018, 11, 24, 10);
    console.log(d);
}

//3 Numbers specify year,month,day:
{
    const d = new Date(2018, 11, 24);
    console.log(d);
}

//2 Numbers specify year and month:
{
    const d = new Date(2018, 11);
    console.log(d);
}


//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
{
    const d = new Date(2018);
    console.log(d);
}

//* new Date(milliseconds)
// new Date(milliseconds) creates a new date object as milliseconds plus zero time:
{
    // 01 january 1970 PLUS 100 000 000 000 millisecond is:
    const d = new Date(100000000000);
    console.log(d);
}

//!==============================================================
//* Date Methods
//When a date object is created, a number of methods allow you to operate on it.
// Date methods allow you to get and set the year, month, day, hour, minute, second, and milisecond of date objects, using either local time ot UTC(universal, or GMT) time.


//? Displaying Dates
//When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
{
    const d = new Date();
    console.log(d.toString());

    // The toDateString() Method converts a date to a more readable format:
    console.log(d.toDateString());

    //The toUTCString() Method converts a date to a string using The UTC standard:
    console.log(d.toUTCString());

    //The toISOString() Method converts a date to a string using the ISO standard:
    console.log(d.toISOString());
}