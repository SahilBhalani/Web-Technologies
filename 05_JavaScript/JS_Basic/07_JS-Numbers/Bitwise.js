//* JavaScript Bitwise Operators
/**
 * &  AND  Sets each bit to 1 if both bits are 1
 * |  OR   Sets each bit to 1 if one of two bits is 1
 * ^  XOR  Sets each bit to 1 if only one of two bits is 1
 * ~  NOR  Inverts all the bits
 * << Zero-fill left shift - Shift left by pushing zeros in from the right and let the leftmost bits fall off
 * >> Signed right shift - Shifts right by pushing copies of the leftmost bit in from the left and let the rightmost bits fall off
 * >>> Zero-fill right shift - Shifts right by pushing zeros in from the left, and let the rightmost bits fall off 
 */

//* Examples:
/**
 * Operations   Result    Same as              Result
 * 5 & 1        1         0101 & 0001          0001
 * 5 | 1        5         0101 | 0001          0101
 * ~ 5          10        ~0101                1010
 * 5 << 1       10        0101 << 1            1010
 * 5 ^ 1        4         0101 ^ 0001          0100
 * 5 >> 1       2         0101 >> 1            0010
 * 5 >>> 1      2         0101 >>> 1           0010   
 */

//!==============================================================

//* JavaScript Bitwise AND(&)
// When a bitwise AND is performed an a pair of bits, it returns 1 if both bits are 1.
//ex.
{
    let x = 5 & 1;
    console.log(x);
}

//* JavaScript Bitwise OR(|)
// When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits is 1.
//ex.
{
    let x = 5 | 1;
    console.log(x);
}

//* JavaScript Bitwise XOR(^)
// When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different.
//ex.
{
    let x = 5 ^ 1;
    console.log(x);
    let y = 1 ^ 1;
    console.log(y);
}

//* JavaScript Bitwise NOT(~)
//ex.
{
    let x = ~5;
    console.log(x);
}

//* JavaScript (Zero Fill) Bitwise Left Shift(<<)
// This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:
//ex.
{
    let x = 5 << 1;
    console.log(x);
}

//* JavaScript (Sign Preserving) Bitwise Right Shift (>>)
// This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off.
//ex.
{
    let x = -5 >> 1;
    console.log(x);
}

//* JavaScript (Zero fill) Right Shift (>>>)
// This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off
//ex.
{
    let x = 5 >>> 1;
    console.log(x);
}

//!================================================================
//* Shift Assignment Operators
/**
 * Oparators        Examples        Same As
 * <<=              X << = y        X = x << y
 * >>=              X >> = y        X = x >> y
 * >>>=             X >>> = y       X = x >>> y
 */

//* The <<= Operator
//The Left Shift Assginment Operator left shifts a variable
//ex.
{
    let x = -100;
    console.log(x <<= 5);
}

//* The >>= Opeerator
//The Right Shift Assignment Operator right shifts a variable(signed).
//ex.
{
    let x = -100;
    console.log(x >>= 5);
}

//* The >>>= Operator
//The Unsigned Right Shift Assignment Operator right shifts a variable(Unsigned).
//ex.
{
    let x = -100;
    console.log(x >>>= 5);
}

//!================================================================
//* Bitwise Assignment Operators
/**
 * Operator         Example         Same As
 * &=               x &= y          x = x & y
 * ^=               x ^= y          x = x ^ y
 * |=               x |= y          x = x | y
 */


//* The &= Operator
//The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to a variable.
//ex.
{
    let x = 100;
    x &= 5;
    console.log(x);
}

//* The |= Operator
//The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to a variable.
//ex.
{
    let x = 100;
    x |= 5;
    console.log(x);
}

//* The ^= Operator
//The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to a variable.
//ex.
{
    let x = 100;
    x ^= 5;
    console.log(x);
}

//!================================================================
//* Converting Decimal to Binary
{
    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
}

//* Converting Binary to Decimal
{
    function bin2dec(bin){
        return parseInt(bin, 2).toString(10);
    }
}
