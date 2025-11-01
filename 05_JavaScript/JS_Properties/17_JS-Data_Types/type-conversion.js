//* JavaScript Type Conversion
/**
 * ~ Converting Strings to Numbers
 * ~ Converting Numbers to Strings
 * ~ Converting Dates to Numbers
 * ~ Converting Numbers to Dates
 * ~ Converting Boolean to Numbers
 * ~ Converting Numbers to Booleans
 */

//JavaScript variables can be converted to a new variable and another data type:
//~ By the use of a JavaScript function
//~ Automatically by JavaScript itself

//* Converting Strings to Numbers
//The global method Number() converts a variable (or a value) into a number.
//A numeric string (like "3.14") converts to a number (like 3.14)
//An empty strings (like "") coverts to 0.
//A non numeric string (like "john") converts to NaN(Not a Number)
{
    //These will convert
    console.log(Number("3.14"));
    console.log(Number(Math.PI));
    console.log(Number(" "));
    console.log(Number(""));

    //These will not convert:
    console.log(Number("99 88"));
    console.log(Number("John"));
}

//* The Unary + Operator
//The unary + operator can be used to convert a variable to a number:
{
    let y = "5"; //y is a string
    let x = + y; //x is number
    console.log(x);

    //if a variale cannot be converted, it will still become a number, but with the value NaN(Not a Number):

    y = "John";
    x = + y;
    console.log(x);
}

//* Converting Numbers to Strings
//The global method String() can convert numbers to strings.
//It can be used on type of numbers, literals, variables, or expressions:
{
    let x = 123;
    console.log(String(x)); // return a string from a number variable x
    console.log(String(123));// return a string from a literal 123
    console.log(String(100+23)); //return a string from a number from an expression
}

//* Converting Dates to Numbers
//The global Number() can be used to convert dates to numbers.
{
    d = new Date();
    console.log(Number(d));

    //The date method getTime() does the same.
    e = new Date();
    console.log(e.getTime());
}

//* Converting Dates to Strings
//The global method String() can convert dates to strings.
{
    console.log(String(Date()));

    //The Date method toString() does the same.
    console.log(Date().toString());
}

//* Converting Booleans to Numbers
//A Global method Number() can also convert booleans to numbers.
{
    console.log(Number(false)); //Return 0
    console.log(Number(true)); // Return 1
}

//* Converting Booleans to Strings
//The global method String() can convert booleans to strings.
{
    console.log(String(false)); // Return "false"
    console.log(String(true)); // Return "true"

    //The Boolean method toString() does the same.
    console.log(false.toString()); //Return "false"
    console.log(true.toString()); //Return "true"
}

//* Automatic Type Conversion
//When JavaScript tries to operate on a "Wrong" data type, it will try to convert the value to a "Right" type.
{
    console.log(5 + null); //Returns 5 because null is converted to 0
    console.log("5" + null); //Returns 5null because null is converted to "null".
    console.log("5" + 2); //returns "52" because 2 is converted to "2"
    console.log("5" - 2); //returns 3 because "5" is converted to 5
    console.log("5" * "2");//Returns 10 because "5" and "2" are converted to 5 and 2
    
}