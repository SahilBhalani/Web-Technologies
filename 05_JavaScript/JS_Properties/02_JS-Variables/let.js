/**
 * The let keyword was introduced in ES6 (2015)

Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope
 */

//-----------------------------------------------------------
/**
 * Block Scope:
 * JavaScript had Global Scope and Function Scope.
 * ES6 Introduced the two new Javascript keywords: let and const
 * These two keyords provided Block Scope in JavaScript
 * 
 * Variables declared inside a {} block cannot be accessed fron outside the block:
 */
{
    let x = 2;
}
// x can't be used here

//-------------------------------------------------------------
/**
 * Global Scope
 * 
 * Variables declared with the var always have global scope.
 * variables declared with the var keywords can NOT have block scope
 */

{
    var x = 2;
}
// x CAN be used here


//-------------------------------------------------------------

// Cannot be Redeclared
let x = "john Doe";

let x = 0; // with let you can not do this:

//variables defined with var can be redeclared.

var x = "John Doe";

var x = 0;


// -------------------------------------------------------------

//Redeclaring Variables
/**
 * Redeclaring a variable using the var keyword can impose problems.
 * Redeclaring a variable inside a block will also redeclare the variable outside the block:
 */

var x = 10;
// here x is 10

{
    var x = 2;
    // here x is 2
}

// here x is 2

/**
 * Redeclaring a variable using the let keyword can solve this problem.
 * Redeclaring a variable inside a block will not redeclare the variable outside the block:
 */

let x = 10;
// here x is 10

{
    let x = 2;
    // here x is 2
}

// here x is 10

//-------------------------------------------------------------

/**
 * What is Good?
 * 
 * ~ let and const have block scope.
 * ~ let and const can not be redeclared.
 * ~ let and const must be declared before use.
 * ~ let and const does not bind to this.
 * ~ let and const are not hoisted.
 * 
 * -----------------------------------
 * 
 * What is Not Good?
 * 
 * ~ var does not have to be declared.
 * ~ var is hoisted.
 * ~ var binds to this.
 */