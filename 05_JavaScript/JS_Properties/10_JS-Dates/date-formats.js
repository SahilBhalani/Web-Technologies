//* JavaScript Date Formats

//JavaScript Date Input
//There are generally 3 types of JavaScript date input formats:
/**
 * Types        Example
 * ISO Date     "2015-03-25"(The International Standard)
 * Short Date   "03/25/2015"
 * Long Date    "Mar 25 2015" or "25 Mar 2015"
 * 
 * 
 * The ISO format follows a strict standard in JavaScript.
 * The other formats are not so well defined and might be browser specific.
 */

//!==============================================================
//* JavaScript ISO Dates
//ISO 8601 is the international standard for the representation of dates and times.
//The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
{
    const d = new Date("2015-03-25");
    console.log(d);

    //The computed date will be relative to your time zone.
    //Depending on your time zone, the result above will vary between March 24 and March 25.
}

//* ISO Dates (Year and Month)
// ISO dates can be written without specifying the day (YYYY-MM)
{
    const d = new Date("2015-03");
    console.log(d);
}

//* ISO Dates (Only Year)
//ISO Dates can be written without month and day (YYYY):
{
    const d = new Date("2015");
    console.log(d);
}

//* ISO Dates (Date-Time)
// ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ)
{
    const d = new Date("2015-03-25T12:00:00Z")
    console.log(d);

    //Date and time is separated with a capital T.
    //UTC time is defined with a capital letter Z.
    // If you want to modify the time relative to UTC, remoce the Z and add +HH:MM or -HH:MM instead:

    const z = new Date("2015-03-25T12:00:00-06:00");
    console.log(z);
}

//* JavaScript Short Dates.
// Short dates are written with an "MM/DD/YYYY" syntax like this:
{
    const d = new Date("08/02/2015");
    console.log(d);
}

//? WARNINGS:
//The behaviour of "YYYY/MM/DD" is undefined.
//Some browser will try to guess the format. Some will return NaN.
{
    const d = new Date("2015/03/25");
    console.log(d);
}
//The behaviour of "DD-MM-YYYY" is also undefined.
//Some browsers will try to guess the format. Some will return NaN
{
    const d = new Date("25-03-2015");
    console.log(d);
}

//* JavaScript Long Dates
// Long dates are most often written with a "MMM DD YYYY" syntax like this:
{
    const d = new Date("Mar 25 2015");
    console.log(d);

    //Month and day can be in any order:
    const z = new Date("25 Apr 2015");
    console.log(z);

    //And, month can be written in full (Febuary), or abbreviated (Jan).
    //Commas are ignored. Names are case insensitive.
}

//!==============================================================
//* Date Input - Parsing Dates
//If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
// Date.parse() returns the number of milliseconds between the date and january 1, 1970:\
{
    let msec = Date.parse("March 21, 2012");
    console.log(msec);
}

//You can then use the number of milliseconds to convert it to a date object
{
    let msec = Date.parse("August 02, 2004");
    console.log(msec);

    const d = new Date(msec);
    console.log(d);
}