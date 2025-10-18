//* JavaScript Numbers Methods

/**
 *? Basic Methods
 * Basic number methods can be used on any number:
 * 
 * toString()
 * toExponential()
 * toFixed()
 * toPrecision()
 * valueOf()
 */

/**
 *? Static Methods
 * Static methods can only be used on Number:
 * 
 * Number.isFinite()
 * Number.isInteger()
 * Number.isNaN()
 * Number.isSafeInteger()
 * Number.parseInt()
 * Number.parseFloat()
 */

 //!=============================================================
 //* The toString() Method
 // The toString() method returns a number as a string.
 // All number methods can be used on any type of numbers (literals, variables, or expressions):
 //ex.
 {
    let x = 123;
    console.log(x.toString());
    console.log((123).toString());
    console.log((100 + 25).toString());

    // the toString() method can take an optional radix argument to convert the number to a diffrent base:

    let y = 123;
    console.log(x.toString(2));
 }

 //!=============================================================
 //* The toExponential() Method
 // toExponential() returns a string. with a number rounded and written using exponential notation.
 // A parameter defines the number of characters behind the decimal point:
 //ex
 {
    let x = 9.656;
    console.log(x.toExponential());
    console.log(x.toExponential(2));
    console.log(x.toExponential(4));
    console.log(x.toExponential(6));

    //The Parameter is optional. if you don't specify it, JavaScript will not round the number.
 }

 //!=============================================================
 //* The toFixed() Method
 // toFixed() returns a string, with the number written with a specified numbers of decimals:
 //ex
 {
    let x = 9.656;
    console.log(x.toFixed(0));
    console.log(x.toFixed(2)); //? perfect for working with money
    console.log(x.toFixed(4));
    console.log(x.toFixed(6));
 }

 //!=============================================================
 //* The toPrecision() Method
 // toPrecision() returns a string, with a number written with a specified length:
//ex.
{
    let x = 9.656;
    console.log(x.toPrecision());
    console.log(x.toPrecision(2));
    console.log(x.toPrecision(4));
    console.log(x.toPrecision(6));
}

//!==============================================================
//* The valueOf() Method
// valueOf() returns a number as a number.
//ex.
{
    let x = 123;
    console.log(x.valueOf());
    console.log((123).valueOf());
    console.log((100 + 27).valueOf());

    //The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.There is no reason to use it in your code.

}

//!==============================================================
//* Converting Variables to Numbers
// There are 3 JavaScript methods that can be used to convert a variable to a number:
//? Number() = Returns a number converted from its argument.
//? parseFloat() = Parses its argument and returns a floating point number
//? parseInt() = Parses its argument and returns a whole number

//The methods above are not number methods. They are global JavaScript methods.

//!--------------------------------------------------------------
//* The Number() Method
// The Number() method can be used to convert JavaScript variables to numbers:
//ex.
{
    console.log(Number(true));
    console.log(Number(false));
    console.log(Number("10"));
    console.log(Number("  10"));
    console.log(Number("10  "));
    console.log(Number(" 10  "));
    console.log(Number("10.33"));
    console.log(Number("10,33"));
    console.log(Number("10 33"));
    console.log(Number("John"));

    // if the number cannot be converted, NaN is returned

    //The Number() method used on Dates
    //Number() can also convert a date to a number.

    console.log(Number(new Date("1970-01-02")));
    //The Date() method returns the number of milliseconds since 1.1.1970.

    console.log(Number(new Date("2004-02-08")));
}

//!==============================================================
//* The parseInt() Method
// parseInt() parses a string and returns a whole number. spaces are allowed. Only the first number is returned:
//ex.
{
    console.log("parseInt:");
    console.log(parseInt("-10"));
    console.log(parseInt("-10.33"));
    console.log(parseInt("10"));
    console.log(parseInt("10.33"));
    console.log(parseInt("10 20 30"));
    console.log(parseInt("10 years"));
    console.log(parseInt("years 10"));
    // if the number cannot be converted, NaN is returned.
}

//!==============================================================
//* The parseFloat() Method
// parseFloat() parses a string and returns a number. spaces are allowed. Only the first number is returned:
//ex.
{
    console.log("parseFloat");
    console.log(parseFloat("10"));
    console.log(parseFloat("10.33"));
    console.log(parseFloat("10 20 30"));
    console.log(parseFloat("10 Years"));
    console.log(parseFloat("Years 10"));
    // if the number cannot be converted, NaN is returned.
}

//!==============================================================
//* Number Methods
//? Number Methods Cannot be Used on Variables
// The number methods above belong to the JavaScript Number Object
// These methods can only be accessed like Number.isInteger().
//Using X.isInteger() where X is a variable, will result in an error;
// TypeError X.isInteger is not a function.

//!-------------------------------------------------------------
//* The Number.isInteger() Method
// The Number.isInteger() method returns true if the argument is an integer.
//ex.
{
    console.log(Number.isInteger(10));
    console.log(Number.isInteger(10.5));
}

//!--------------------------------------------------------------
//* The Number.isFinite() Method
// The Number.isFinite() method returns true if the argument is not Infinity, -iInfinity, nor Nan.
//ex.
{
    console.log(Number.isFinite(123));
    console.log(Number.isFinite("123Apple"));
}

//!-------------------------------------------------------------
//* The Number.isNaN() Method
// The Number.isNaN() Method returns true if the argument is NaN.
//ex.
{
    console.log(Number.isNaN(123));
    console.log(Number.isNaN(NaN));

    //? Number.isNaN() is the preferred way to check for equality with NaN. You cannot test for equality with NaN using == or ===.

}

//!--------------------------------------------------------------
//* The Number.isSafeInteger() Method
// A Safe integer is an integer that can be exactly represented as a double precision number.
// The Number.isSafeInteger() method returns true if the argument is a safe integer.
//ex.
{
    console.log(Number.isSafeInteger(10));
    console.log(Number.isSafeInteger(12345678901234567890));
}

//!=============================================================
//? NOTE : The Number methods Number.parseInt() and Number.parseFloat() are the same as the Global methods parseInt() and parseFloat(). The purpose of these two methods is modularization of globals, to make it easier to use the same JavaScript code outside the browser. 