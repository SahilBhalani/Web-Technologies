/**
 * Variables = Data Containers
 * 
 *  ~ JavaScript variables are containers for data
 *  ~ JavaScript variables can be declared in 4 ways:
 * 
 *  -> Modern JavaScript 
 *   1. Using let
 *   2. Using const
 * 
 *  -> Older JavaScript
 *   3. Using var (Not Recommended)
 *   4. Automatically (Not Recommended)
 */

//Example using let
let x = 5;
let y = 20;
let z = x + y;

//Example using const
const a = 5;
const b = 20;
const c = a + b;

//JavaScript Identifiers 
// ~ Variables are identified with unique names are called identifiers.

//Example of Different Type of Identifiers

// Start a name with Underscore for "Private" Variables.
let _lastname = "johnson";
let _x = 2;
let _100 = 5; 

//Using the $ is not very common in Javascript but programmers often use it as an alias for the main function in JavaScript Libraries.
let $ = "Hello World!";
let $$$ = 2;
let $myMoney = 5;

// Declaring a variable using let
let carName; //undefined
carName = "Volvo"; //Assign a Value using equal sign

//Most often you will assign a value to the variable when you declare it:
let carName2 = "BMW";

// Declaring a variable using const
const carName1 = "Mercedes";

// Mixed Example
const price1 = 5;
const price2 = 6;
let total = price1 + price2;


//Declaring a Variable Using var (Not Recommended)
//The var keyword was used in all JavaScript code before 2015.
//The let and const keywords were new to JavaScript in 2015.
var t = 5;
var u = 6;
var v = t + u;

/**
 * When to Use var, let, or const?
 * 
 * 1. Always declare variables
 * 2. Always use const if the value should not be changed
 * 3. Always use const if the type should not be changed (Arrays and Objects)
 * 4. Only use let if you cannot use const
 * 5. Never use var if you can use let or const.
 * 
 */

// JavaScript DataTypes
// JavaScript variables can hold 8 datatypes, but for now, just think of numbers and strings.
// Strings are text written inside quotes.
// Numbers are written without quotes.

//ex.
const pi = 3.14;
let person = "Dohn Joe";
let answer = "Yes I am!"

// One Statement,, Many variables
let person2 = "John Doe", carName3 = "Porsche", price = 20000;