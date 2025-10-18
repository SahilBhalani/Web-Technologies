/** 
 ** JavaScript Number Properties
 *? Number Properties:
 * Number.EPSILON
 * Number.MAX_VALUE
 * Number.MIN_VALUE
 * Number.MAX_SAFE_INTEGER
 * Number.MIN_SAFE_INTEGER
 * Number.POSITIVE_INFINITY
 * Number.NEGATIVE_INFINITY
 * Number.NaN
*/

//!=============================================================
//* JavaScript EPSILON
// Number.EPSILON is the diffence between the smallest floating point number greater than 1 and 1
//ex.
{
    let x = Number.EPSILON;
    console.log(x);
}

//!--------------------------------------------------------------
//* JavaScript MAX_VALUE
// Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
//ex.
{
    let x = Number.MAX_VALUE;
    console.log(x);

    //? Number Properties Cannot be Used on Variables. Number Properties belong to the JavaScript Number Object. These Properties can only be accessed as Number.MAX_VALUE

    let a = 6;
    console.log(a.MAX_VALUE); // return undefined
}

//!--------------------------------------------------------------
//* JavaScript MIN_VALUE
// Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript
//ex.
{
    let x = Number.MIN_VALUE;
    console.log(x);
}

//!==============================================================
//* JavaScript MIN_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.
// Number.MIN_SAFE_INTEGER is -(2^53 - 1).
//ex.
{
    let x = Number.MIN_SAFE_INTEGER;
    console.log(x);
}

//!--------------------------------------------------------------
//* JavaScript MAX_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
// Number.MAX_SAFE_INTEGER is (2^53 - 1).
//ex.
{
    let x = Number.MAX_SAFE_INTEGER;
    console.log(x);
}

//!==============================================================
//* JavaScript POSITIVE_INFINITY
//ex.
{
    let x = Number.POSITIVE_INFINITY;
    console.log(x);
    x = 1 / 0;
    console.log(x);
}

//!==============================================================
//* JavaScript NEGATIVE_INFINITY
//ex.
{
    let x = Number.NEGATIVE_INFINITY;
    console.log(x);
    x = -1 / 0;
    console.log(x);
}

//!==============================================================
//* JavaScript NaN - Not a Number
// NaN is a JavaScript reserved word for a number that is not a legal number.
//ex.
{
    let x = Number.NaN;
    console.log(x);

    x = 100 / "Apple";
    console.log(x);
}