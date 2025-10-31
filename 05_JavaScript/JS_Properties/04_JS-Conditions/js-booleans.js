/**
 * The Boolean Data Type
 * 
 * In JavaScript, a Boolean is a primitive data type that can only have one of two values:
 * 
 * True or False
 * 
 * The Boolean value of an expression is the basis for all javaScript comparisons and conditions.
 */

/**
 * Key Boolean Characteristics
 * 
 * ~ true and false are boolean data types
 * ~ true and false are the only possible boolean values
 * ~ true and false must be written in lowercase
 * ~ true and false must be written without quotes
 */ 

let x = 5;

let y = (x == 8);
console.log(y); // retuns false

y = (x != 8);
console.log(y); // returs true


/**
 * Everything With a "Value" is true
 * 
 * 100 is true
 * 3.14 is true
 * -15 is true
 * true is true
 * "Hello" is true
 * "false" is true
 * (7 + 1 + 3.14) is true
 * 
 */

/**
 * Everything Without a "Value" is false
 * 
 * 0 is false
 * "" is false
 * undefined is false
 * null is false
 * NaN is false
 * false is false
 * 
 */

//-------------------------------------------------------------
//JavaScript Booleans as Objects
//Normally JavaScript booleans are primitive values created from literals:
let a = false;

//But booleans can also be defined as objects with the keyword new:
let b = new Boolean(false);

console.log(typeof(a)); // returns boolean
console.log(typeof(b)); // return object

// WARNING:
// Dont create Boolean objects.
// The new keyword complicates the code and slows down execution speed.
// boolean objects can produce unexpected results.

let s = Boolean(false);
let t = new Boolean(false);

let results = (s == t);
console.log(results); // returns true

results = (s === t);
console.log(results); // returns false

