//* JavaScript Get Date Methods
// The new Date() Constructor
// In JavaScript, date objects are created with new Date().
// new Date() returns a date object with the current date and time.

//Get The Current Time
{
    const date = new Date();
    console.log(date);
}

//Date Get Methods
/**
 * METHOD              DESCRIPTION
 * getFullYear()       Get year as a four digit number(yyyy)
 * getMonth()          Get month as a number(0-11)
 * getDate()           Get day as a number(1-31)
 * getDay()            Get weekday as a number(0-6)
 * getHours()          Get hour(0-23)
 * getMinutes()        Get minute(0-59)
 * getSeconds()        Get seconds(0-59)
 * getMilliseconds()   Get millisecond(0-999)
 * getTime()           Get time(milliseconds since Jan 1, 1970)
 * 
 * ? NOTE1:
 * ~ The Get methods above return Local time.
 * ~ Universal time(UTC) is documented at the bottom of this page.
 * 
 * ? NOTE2:
 * ~ The get methods return information from existing date objects.
 * ~ In a date object, the time is static. The "Clock" is not "Running".
 * ~ The time in a date object is NOT the same as current time. 
 */

//!==============================================================
//* The getFullYear() Method
//The getFullYear() method returns the year of a date as a four digit number:
//ex.
{
    const d = new Date("2021-03-25");
    console.log(d.getFullYear());

    const z = new Date();
    console.log(z.getFullYear());
}

//* The getMonth() Method
//The getMonth() Method returns the month of a date as a number(0-11).
//ex.
{
    const d = new Date("2021-03-25");
    console.log(d.getMonth());

    const z = new Date();
    console.log(z.getMonth());

    //? NOTE:
    //You can use an array of names to retuns the month as a name:

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d1 = new Date("2021-07-25");
    let month = months[d1.getMonth()];
    console.log(month);

    const d2 = new Date();
    month = months[d2.getMonth()];
    console.log(month);
}

//* The getDate() Method
// The getDate() method returns the day of a date as a number(1-31)
{
    const d = new Date("2023-08-02");
    console.log(d.getDate());

    const z = new Date();
    console.log(z.getDate());
}

//* The getHours() Method
// The getHours() method returns the hours of a date as a number(0-23)
{
    const d = new Date("2023-08-02");
    console.log(d.getHours());

    const z = new Date();
    console.log(z.getHours());
}

//* The getMinutes() Method
// The getMinutes() method returns the Minutes of a date as a number(0-59)
{
    const d = new Date("2023-08-02");
    console.log(d.getMinutes());

    const z = new Date();
    console.log(z.getMinutes());
}

//* The getSeconds() Method
// The getSeconds() method returns the Seconds of a date as a number(0-59)
{
    const d = new Date("2023-08-02");
    console.log(d.getSeconds());

    const z = new Date();
    console.log(z.getSeconds());
}

//* The getMilliseconds() Method
// The getMilliseconds() method returns the Milliseconds of a date as a number(0-999)
{
    const d = new Date("2023-08-02");
    console.log(d.getMilliseconds());

    const z = new Date();
    console.log(z.getMilliseconds());
}

//* The getDay() Method
// The getDay() method returns the weekday of a date as a number(0-6).

{
    //? NOTE:
    // In JavaScript, the first day of the week (day 0) is sunday.
    //Some countries in the world consider the first day of the week to be Monday.

    const d = new Date("2023-08-02");
    console.log(d.getDay());

    const z = new Date();
    console.log(z.getDay());

    //You can use an array of names, and getDay() to return weekday as a name:

    const days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday","Friday","Saturday"];

    const d1 = new Date("2023-08-02");
    let day = days[d1.getDay()];
    console.log(day);

    const d2 = new Date();
    day = days[d2.getDay()];
    console.log(day);
}

//* The getTime() Method
//The getTime() method returns the number of milliseconds since January 1, 1970:
//ex.
{
    const d = new Date("1970-01-01");
    console.log(d.getTime());

    const e = new Date("2021-03-25");
    console.log(e.getTime());

    const f = new Date();
    console.log(f.getTime());
}

//* The Date.now() Method
// Date.now() returns the number of milliseconds since January 1.1970.
//ex.
{
    let ms = Date.now();
    console.log(ms);

    //Calculate the numbers of years since 1970/01/01:
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    let years = Math.round(Date.now() / year);
    console.log(years);
}

//* The getTimezoneOffset() Method
// The getTimezoneOffset() method returns the diffrence (in minutes) between local time an UTC time:
{
    const d = new Date();
    let diff = d.getTimezoneOffset();
    console.log(diff);
}