//* JavaScript Numbers
// JavaScript has only one type of number. Numbers can be written with or without decimals.
///ex.
{
    let x = 3.14; //A number with decimals
    let y = 3; //A number without decimals

    //Extra large or extra small numbers can be written with scientific (exponent) notation:

    let a = 123e5; //12300000
    let b = 123e-5; //0.00123

}

//? JavaScript numbers are always double (64-bit floating point).

 //* Integer Precision
 // Integers (number without a period or exponent notation) are accurate up to 15 digits.

 //ex.
 {
    let x = 999999999999999; // x will be 999999999999999
    let y = 9999999999999999; // y will be 10000000000000000

    //The Maximum number of decimal is 17.
 }

 //* Floating Precision
 // Floating point arithmetic is not always 100% accurate:
 //ex.
 {
    let x = 0.2 + 0.1;
    console.log(x);

    // To solve the problem above, it helps to multiply and divide:
    let a = (0.2 * 10 + 0.1 * 10) / 10;
    console.log(a);
 }

 //* Adding Numbers and Strings
 //! WARNING:
 // JavaScript uses the + operator for both addition and concetenation.
 // Numbers are added. Strings are concatenated

 //?If you add two numbers, the result will be a number:
 {
    let x = 10;
    let y = 20;
    let z = x + y;
    console.log(z);
 }

 //?If you add two strings, the result will be a string concatenation:
 {
    let x = "10";
    let y = "20";
    let z = x + y;
    console.log(z);
 }

 //?If you add a number and a string, the result will be a string concatenation:
 {
    let x = 10;
    let y = "20";
    let z = x + y;
    console.log(z);
 }

 //?If you add a string and a number, the result will be a string concatenation:
 {
    let x = "10";
    let y = 20;
    let z = x + y;
    console.log(z);
 }

 //A common mistake is to expect this result to be 30:
 {
    let x = 10;
    let y = 30;
    let z = "The Result is: " + x + y;
    console.log(z);
 }

 //A common mistake is to expect this result to be 102030
 {
   let x = 10;
   let y = 20;
   let z = "30";
   let result = x + y + z;
   console.log(result);
 }

 //!============================================================
 //* Numeric Strings
 //JavaScript strings can have numeric content:
 //ex.
 {
	let x = 100; // x is number.
	let y = "100"; // y is string.
 }

 //JavaScript will try to convert string to numbers in all operations:
 {
	// this will work:
	let x = "100";
	let y = "10";
	let z = x / y;
	console.log(z);

	//this will also work
	z = x * y;
	console.log(z);

	//And this will work:
	z = x - y;
	console.log(z);

	//but this will not work;
	z = x + y;
	console.log(z);
	//In the last example JavaScript uses the + operator to concatenate the strings.
 }

 //!============================================================
 //* NaN - Not a Number

 //NaN is a javascript reserved word indiating that a number is not a legal number.
 //Trying to do arithmetic with a non-numeric string will result NaN(Not a Number):
 //ex.
 {
	let x = 100 / "Apple";
	console.log(x);

	//However, if the string is numeric, the result will be a number:

	let a = 100 / "10";
	console.log(a);

	//you can use the global JavaScript function isNan() to find out if a value is not a number:
	let x1 = 100 / "Apple";
	console.log(isNaN(x1));

	//Watch out for NaN. if you use NaN in a mathematical operation, the result will also be NaN
	let x2 = NaN;
	let y = 5;
	console.log(x2 + y);

	//or the result might be a concatination like NaN5
	let y2 = "5";
	console.log(x2 + y2);  

	//NaN is a number; typeof NaN returns a number;
	console.log(typeof NaN);
 }

 //!============================================================
 //* Infinity
 // Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
 //ex.
 {
	// let myNum = 2;
	//  // Execute until Infinity
	//  while (myNum = Infinity){
	//  myNumber = myNum * myNum;
	// 	 console.log(myNum);
	//  }

	//Division by 0 also generates Infinity:
	let x = 2 / 0;
	let y = -2 / 0;
	console.log(x);
	console.log(y);

	//Infinity is a number: typeof Infinity returns number
	console.log(typeof Infinity);
 } 


 //!============================================================
 //* Hexadecimal
 // JavaScript interprets numeric constants as hexadecimals if they proceded by 0x.
 //ex.
 {
	let x = 0xFF;
	console.log(x);

	//By default, JavaScript displays numbers as base 10 decimals.
	// but you can use the toString() methods to output numbers from base2 to base 36.
	//hexadecimal is base 10. Decimal is base 10. octal is base 8. binary is base 2
	let myNumber = 32;
	console.log(myNumber.toString(32));
	console.log(myNumber.toString(16));
	console.log(myNumber.toString(12));
	console.log(myNumber.toString(10));
	console.log(myNumber.toString(8));
	console.log(myNumber.toString(2));
 }

 //!===========================================================
 //* JavaScript Numbers as Objects
 // Normally JavaScript Numbers are premitive values created from literals:
 //ex.
 {
	let x = 123;

	//but Numbers can also be defined as objects with the keyword new:
	let y = new Number(123);

	//Do Not create Numbers objects.
	//The new keyword complicates the code and slows down execution speed.
	//Number Object can produce unexpected results;

	//when using == operator, x and y are equal:
	console.log(x == y);

	//when using === operator, x and y are not equal.
	console.log(x === y);

	// Comparing two numbers object:
	let a = new Number(123);
	let b = new Number(123);
	console.log(a == b);
	console.log(a === b);

	//? Comparing two JavaScript objects always returns false.Pb
 }

