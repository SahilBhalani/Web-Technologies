/***
 * When to use Conditionals
 * 
 * ~ Use if to specify a code block to be executed , if a specified condition is true.
 * 
 * ~Use else to specify a code block to be executed, if the same condition is false.
 * 
 * ~Use else if to specify a new condition to test, if the first condition is false.
 * 
 * ~Use switch to specify many alerternative code blocks to be executed.
 * 
 * Use (? :)(Ternary) as a shorthand for if ... else   
 */

// The if Statement
// Use if to specify a code block to be executed , if a specified condition is true.
//syntex
if(condition){
    // code to execute if the condition is true
}

// Else Statement
// Syntax
if(condition)
{
    // code to execute if the condition is true
} else {
    // code to execute if the condition is false
}

// The else if Statement
// Syntax

if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if the condition1 is false and condition2 is true
} else {
  // code to execute if the condition1 is false and condition2 is false
}

//The Switch Statement
//Syntax

switch(expression){
    case x :
        // code block
        break;
    
    case y :
        // code block
        break;
    
    default:
        // code block
}

// Ternary Operator(? :)
// Use ( ? :) (Ternary) as a shorthand for if ... else


