//* JavaScript BigInt
//JavaScript BigInt variables are used to store nig integer values that are too big to be represented by a normal JavaSCript Number

//*JavaScript Integer Accuracy
//Javascript intergers are only accurate up to 15 digits:
{
  let x = 999999999999999;
  let y = 9999999999999999;

  //In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).
  //With this standard, large integer cannot be exactly represented and will be rounded.
}

//!==============================================================

//*How to Create a BigInt
// To create a BigInt, append n to the end of an integer OR call BigInt();
{
  let x = 9999999999999999n;
  let y = BigInt("9999999999999999");

  let x1 = 1234567890123456789012345n;
  let y1 = BigInt("1234567890123456789012345");
}

//* BigInt: A new JAvaScript Datatype
// The JavaScript typeof a BigInt is "bigint";
//ex
{
  let x = BigInt("9999999999999999");
  console.log(typeof x);

  //BigInt is the second numeric data type in JavaScript (after Number).
}

//!==============================================================
//* BigInt Operators
//Operators that can be used on JavaScript Number can also used on a BigInt.
//BigInt Multiplication Example
{
  let x = 9007199254740995n;
  let y = 9007199254740995n;
  let z = x * y;
  console.log(z);

  //? NOTE: Arithmetic between a BigInt and a Number is not allowed (type conversion lose information). Unsigned right shift (>>>) can not be done on a BigInt (It does not have a fixed width).
}

//* BigInt Decimals
// A BigInt can not have decimals
//ex.
{
    let x = 5n;
    // let y = x / 2;
    // console.log(y);
    //Error: Cannot mix BigInt and other types, use explicit conversion.

    let z = Number(x) / 2;
    console.log(z);
}

//* BigInt Hex, Octal and Binary
//BigInt can also be written in hexadecimals, octal and binary notation:
// Like numbers, bigint literals support several bases:
/**
 *  ~ Normal: 256n
 *  ~ Octal: 0o400n
 *  ~ Hexadecimal: 0x100n
 *  ~ Binary: 0b100000000n
 */
{
  let num = 256n;
  let oct = 0o400n;
  let hex = 0x100n;
  let bin = 0b100000000n;
  console.log(num);
  console.log(oct);
  console.log(hex);
  console.log(bin);
}

//* Precision Curiosity
//Maximum safe integer in javascript is 9007199254740991.
//Rounding can compromise program secutiy:
//MAX_SAFE_INTEGER EX.
{
    console.log(9007199254740992 === 9007199254740993); // True!!
    console.log(9007199254740992n === 9007199254740993n); //False!!
}
