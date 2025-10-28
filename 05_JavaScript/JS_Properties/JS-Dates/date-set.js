//* JavaScript Set Date Methods
/**
 * Set Date methods let you set date values(years, months, days, hours, minutes, seconds, milliseconds) for a date Object.
 *
 * Set Date Methods
 *
 * METHOD               DESCRIPTION
 * setDate()            Set the day as a number(1-31)
 * setFullYear()        Set the year(yyyy)
 * setHours()           Set the hour(0-23)
 * setMilliseconds()    Set the milliseconds(0-999)
 * setMinutes()         Set the minutes(0-59)
 * setMonth()           set the month(0-11)
 * setSeconds()         Set the seconds(0-59)
 * setTime()            Set the Time(milliseconds since from Jan 1, 1970)
 */

//* The setFullYear() Method
// The setFullYear() method sets the year of a date object. In this example to 2020:
//ex.
{
  const d = new Date("January 01, 2025");
  d.setFullYear(2020);
  console.log(d);

  //The setFullYear() method can optionally set month and day:
  const z = new Date("January 01, 2025");
  z.setFullYear(2020, 11, 3);
  console.log(z);
}

//* The setMonth() Method
// The setMonth() method sets the month of a date object (0-11):
{
  const d = new Date("January 01, 2025");
  d.setMonth(11);
  console.log(d);
}

//* The setDate() Method
// The setDate() method sets the day of a date object(1-31):
{
  const d = new Date("January 01, 2025");
  d.setDate(15);
  console.log(d);

  //THe setDate() method can also be used to add days to a date:
  const z = new Date("January 01, 2025");
  z.setDate(z.getDate() + 50);
  console.log(z);

  //?NOTE: If adding days shifts the month or year, the changes are handled automatically by the Date object.
}

//* The setHours() Method
// The setHours() method sets the hours of a date object(0-23):
{
  const d = new Date("January 01, 2025");
  d.setHours(22);
  console.log(d);

  //The setHours() method can also be used to set minutes and seconds.

  const z = new Date("January 01,1970");
  z.setHours(22, 10, 20);
  console.log(z);
}

//* The setMinutes() Methods
// The setMinutes() Methods sets the minutes of a date object(0-59)
{
  const d = new Date("January 01, 2025");
  d.setMinutes(40);
  console.log(d);
}

//* The setSeconds() Methods
// The setSeconds() Methods sets the seconds of a date object (0-59).
{
  const d = new Date("January 01, 2024");
  d.setSeconds(50);
  console.log(d);

  //ToJSON String
  const z = new Date();
  let text =  z.toJSON();
  console.log(text);
}

//* Compare Dates
// Dates can easily be compared.
// The Following example compares today's date with january 14,2100:
{
  let text = "";
  const today = new Date();
  const someday = new Date();
  someday.setFullYear(2100, 0, 14);

  if (someday > today) {
    console.log("Today is before january 14, 2100");
  } else {
    console.log("Today is after january 14, 2100");
  }

  //? NOTE: JavaScript counts months from 0 to 11. January is 0. December is 11.
}
