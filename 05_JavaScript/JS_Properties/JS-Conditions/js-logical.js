/**
 * Logical Operators
 * 
 * ~ Logical operators are used to combine boelean expressions.
 * 
 * ~ Logical operators can be used modify the results of comparisons.
 * 
 * ~Typically, you will use a comparison operator to check a condition, and a logical operator to combilw conditions into more complex logic.
 */

//Javascript Logical Operators
// Logical operators are used to determine the logic between variables or values
{
let x = 6;
let y = 3;

let results = (x < 10 && y > 1);
console.log(results); // returns true

results = (x === 5 || y === 5 );
console.log(results); // returns false

results = !(x === y);
console.log(results); // returns true
}

//The Nullish Coalescing Operator(??)
//The ?? operator returns the right operand when the left operand is nullish (null or undefined), otherwise it returns the left operand.
{
    let name = null;
    let text = "Missing";
    let results = name ?? text; // if the value of name is null or undefined than text's value given to results, otherwise the name's value is given to results.
    console.log(results);
}