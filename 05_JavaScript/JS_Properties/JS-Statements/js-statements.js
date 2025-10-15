// Statements
let x, y, z;
x = 5;
y = 6;
z = x + y;

//JavaScript Programs
/**
 * A Computer Program is a list of "instructions" to be "Executed" by a computer
 * These programming instruction are called statements
 * Most JavaScript programs contain many statements.
 * The statements are executed, one by one, in the same order as they are written.
 */

//JavaScript Statements
/**
 * JavaScript statements are composed of:
 * Values, OPerators, Expressions, Keywords, and Comments.
 * This Statements tell the browser to write "Hello Dolly". Inside an HTML element with id='demo';
 */
document.getElementById("demo").innerHTML = "Hello Dolly";


//Semicolons;

let a, b, c;  // declare 3 variables
a = 5; // Assign the value 5 to a
b = 6; // Assign the value 6 to b
c = a + b; // Assign the sum of a and b to c

//When separated by semicolons, multiple statements on one line are allowed

a = 5; b = 6; c = a + b;

//JavaScript White Space; Both are Same but first one is more readable
let person = "Gege";
let perosn="Gege";

// Good Practise Example
let s = t + u;

// JavaScript Line Length and Line Breaks
document.getElementById("demo").innerHTML = 
"Hello World!";  // For BEst Readablility, Programmers often like to avoid  code lines longer than 80 characters.

// JavaScript Code Blocks
// JavaScript statements cann be grouped together on code blocks, inside curly brackets{...}
// The Purpose of code blocks is to define statements to be executed together.
// Example...
function myFunc(){
    document.getElementById('demo1').innerHTML = "Hello Dolly!";
    document.getElementById('demo2').innerHTML = "How Are You?";
}


/**
 * JavaScript Keywords List
 * 
 * var - Declares a variable
 * let - Declares a block variable
 * const - Declares a block constant
 * if - Marks a block of statement to be executed on a condition
 * switch - Marks a block of statement to be executed in different cases
 * for - Marks a block of statement to be executed in a loop
 * function - Declares a function
 * return - Exits a function
 * try - Implements error handling to a block of statements
 */ 