/**
 * JavaScript has 8 Datatypes
 * 
 *  String
 *  Number
 *  Bigint  
 *  Boolean
 *  Object
 *  Undefined
 *  Null
 *  Symbol
 * 
 */

// Examples

//String
let color = "Yellow";
let lastName = "Johnson";

//Number
let length = 16;
let weight = 7.5;

//Bigint
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345n);

//Boolean
let a = true;
let b = false;

// Object 
const person = {firstName:"John" , lastName:"Doe"};

//Array object
const cars = ["Saab", "Volvo", "BMW"];

//Date Object
const date = new date("2025-12-15"); 

//Undefined
let s;
let t;

//Null
let z = null;

//Symbol
let c = symbol();
let d = symbol();

//---------------------------------------------------------

//The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript Variable.
// The typeof operator returns the type of a variable or an expression:
//Example:

typeof "" // returns "String"
typeof "John" // returns "String"
typeof "John Doe" // returns "String"

typeof 0; // return "number"
typeof 314; // return "number"
typeof 3.14; // return "number"
typeof (3); // return "number"
typeof (3 + 4); // return "number"

//JavaScript Strings
//A string (a text string) is a series if characters like "John Doe".
// Strings are written with quotes, You can use single or double quotes:
//Example

//Using Double qoutes:
let carName1 = "Volvo XC60";

//Using single quotes:
let carName2 = 'Volvo XC60'

//single quote inside double quotes:
let ans1 = "It's alrighty!"

//Single quotes inside double quotes:
let ans2 = "He is called 'Johnny'";

//Double quotes inside single quotes:
let ans3 = 'He is called "Johny"';

///--------------------------------------------------------------

//JavaScript Numbers
//Ex.

// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;

//--------------------------------------------------------------

//Exponentail Notation
let expo = 123e5; //12300000
let nential = 123e-5; //0.00123

//Datatype Undefined

//A variable without a value has the datatype undefined.
//A variable without a value also has a value undefined.

//ex
let carName;

//Empty Values
// An empty value has nothing to do with undefined.
// An empty string has both a legal value and a type.

//ex
let car = ""; // the value is "", the typeof is "string"