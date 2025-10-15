// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables
// given that x = 10 and y = 5, the table below explains the assignment operators:

/***
 * 
 * =	x = y	x = y	x = 5
 * +=	x += y	x = x + y	x = 15
 * -=	x -= y	x = x - y	x = 5
 * *=	x *= y	x = x * y	x = 50
 * **=	x **= y	x = x ** y	x = 100000
 * /=	x /= y	x = x / y	x = 2
 * %=	x %= y	x = x % y	x = 0
 * :	x: 45	size.x = 45	x = 45
 */

//Logical Assignmnet Operators
/**
 * &&=	true &&= 10	x = 10
 * ||=	false ||= 10 x = 10
 * ??=	null ??= 10	x = 10
 */

// The &&= Operator
// The Logical AND assignment operator is used between two values.
// If the first value is true, The Second value is assigned

/**
 * let x = true;
 * let y = x &&= 10;
 * 
 * let x = null;
 * let y = x &&= 10;
 * 
 **/ 

//-------------------------------------------------------------

// The ||= Operator
// The Logical OR assignment operator is used between two values.
// If the first value is false, the second value is assigned.

// let x = undefined;
// let y = x ||= 10;

//--------------------------------------------------------------

// The ??= Oprator
// The Nullish coalescing assignment operator is used between two values.
// If the first value is undefined or null, the second value is assigned.

// Nullish Coalescing Assignment Examples

let x = 10;
let y = 5;
x ??= y;

//--------------------------------------------------------------

//The Spread(...) Operator
// The ... operator splits iterable into individual elements
let text = "1234587999"

let min = Math.min(...text);
let max = Math.max(...text);



