//* JavaScript has 8 Datatypes
//A JAvascript variable can hold 8 types of data:
/**
 * String
 * Number
 * BigInt
 * Boolean
 * Object
 * Undefined
 * Null
 * Symbol
 */

//Ex.
{
    // String
    let color = "Yellow";
    let lastName = "Johnson";

    // Number
    let length = 16;
    let weigth = 7.5;

    // BigInt
    let x  = 1234567890123456789012345n;
    let y = BigInt(1234567890123456789012345);

    // Boolean
    let a = false;
    let b = true;

    // Object
    const person = {fName:"Sahil", lName:"Patel"};

    // Array object
    const cars = ["Saab","Volvo","BMW"];

    // Date object
    const date = new Date("2025-03-25");

    // Undefined
    let c;
    let d;

    // Null
    let f = null;
    let g = null;

    // Symbol
    const sy = Symbol();
    const sy2 = Symbol();
}

//* JavaScript Types are Dynamic
//JavaScript has dynamic types. This means that the same variable can be used to hold diffrent data types:
{
    let x; // Now x is undefined
    x = 5; // Now x is a number
    x = "John"; // Now x is a String
}

//* JavaScript Strings
// A String(or a text string) is a series of characters like "John Doe".
//Strings are written with quotes. You can use single or double quotes:
{
    //Using double quotes:
    let carName1 = "Volvo XC60";

    //Using single quotes:
    let carName2 = 'Volvo XC60';
}

//You can quotes inside a string, as long as they don't match the quoted surrounding the string:
{
    //Single quote inside double quote
    let answer1 = "It's alright";

    //Single quotes inside double quotes:
    let answer2 = "He is called 'Johhny'";

    //Double quotes inside single quotes:
    let answer3 = 'He is called "Johnny"';
}

//* JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers(floating point)'
//Number can be written with, or without decimal;
{
    //with decimal:
    let x1 = 34.00;

    //Without decimals:
    let x2 = 34;
}

//* Exponential Notation
{
    let y = 123e5; //1230000
    let z = 123e-5; //0.00123
}

//? JavaScript numbers are always double (64-bit floating point)

//* JavaScript Objects
//JavaScript OBjects represent complex data structures and functionalities beyond the primitive data types (String, number, boolean, null, undefined, symbol, bigint.)
//JavaScript objects are written with curly braces { }.
//JavaScript objects contains a collection of diffrent properties.

//Object properties are written as name:value pairs, separated by commas.
{
    //Create a person object with 4 properties: firstName, lastName, age and eyeColor:

    const person = {firstName: "John", lastName:"Doe", age:58, eyeColor:"blue"};
}

//* == Operator
{
    //The strict equality operator(===) compares both value and the type of the operands.
    //It returns true only if both the operands values and types are null.
    //The loose equality operator(==) also retuns  true for a null value, but it also returns true if the value is undefined.
    //Using == is not recommended when checking for null.
}
