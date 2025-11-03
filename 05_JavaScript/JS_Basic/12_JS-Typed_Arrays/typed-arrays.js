//* JavaScript Typed Arrays
/**
 * Typed Arrays:
 * 
 * Typed arrays was designed for handling Binary Data.
 * Unlike arrays, typed arrays are buffers of Fixed Length.
 * Typed arrays store elements of Fixed Types like 8-bit integers or 32-bit numbers.
 */
{
    //Create a typed array of 5 bytes:
    const myArr = new Uint8Array(5);
    console.log("Array : " + myArr + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);

    //Create a typed array from an array:
    const myArr2 = new Uint8Array([0,1,2,3,4]);
    console.log("Array : " + myArr2 + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);

    //Create a typed array from a list of numbers:
    const myArr3 = Uint8Array.of(0,1,2,3,4);
    console.log("Array : " + myArr3 + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);

    //Create a typed array from an array:
    const myArr4 = Uint8Array.from([0,1,2,3,4]);
    console.log("Array : " + myArr4 + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);

}

//* Typed Array Benifits
// Typed Arrays were desgined to provide an efficient way to handle binary data, unlike traditional JavaScript arrays which can hold elements of mixed data types.
//Typed arrays are raw memory, so Javascript can pass them directly to any finction without converting the data to representation.
//Typed arrays are seriously faster than normal arrays for passing data to functions that can use raw binary data. Typed Arrays are highly suitable for;

/**
*  WebGL and Canvas:
*  -Fast graphics rendering an image processing.
*  
*   File APIs:
*  -Fast reading and writing of local files
*   
*   Media APIs:
*  -Fast Handling of audio and video data.
*
*   WebSockets
*  -Efficient binary data transfer over network.
*
*/

//* Differnce from Regular Arrays
/**
 * Fixed Length:
 * -Typed Arrays cannot be dynamically resized using methods like push() or pop().
 * 
 * Type Restriction
 * -Elements must adhere to the specified data type of the typed array.
 * 
 * Underlying Buffer:
 * -Typed Arrays are views into an ArrayBuffer, allowing direct manipulation of binary data
 */

//!==============================================================
//* 8 Bit Integers
/**
 * Name                   Data Type                  Range
 * Int8Array              Signed integer(byte)       -128/127
 * Uint8Array             Unsigned Integer(octet)    0/255
 * Uint8ClampedArray      Unsigned Integer(octet)    0/255    
 */
{
    //Create a typed array of 10 signed 8-bit integers (byte format):
    const myArr = new Int8Array(10);
    console.log("Array : " + myArr + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);

    //Create a typed array of 10 unsigned 8-bit integers(octet format:)
    const myArr2 = new Uint8Array(10);
    console.log("Array : " + myArr2 + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);

    //Create a typed array of 10 unsigned 8-bit integers(clamped format):
    const myArr3 = new Uint8ClampedArray(10);
    console.log("Array : " + myArr3 + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);
    
    //* Uint8Array vs Uint8ClampedArray
    /**
     * The difference between an Uint8Array and an Uint8ClampedArray is how values are added.
     * If you set one element in an Uint8ClampedArray to a value outside the 0-255 range, it will default to 0 or 255.
     * A typed array will just take the first 8 bits of the value.
     */
}

//* 16-Bits Integers
/**
 * Name            DataType                      Range
 * Int16Array      Short integer                 -32768/32767
 * Uint16Array     Unsigned short integer        0/65535     
 */
{
    //Create a typed array of 10 signed 16-bit integers (Short format);
    const myArr = new Int16Array(10);
    console.log("Array : " + myArr + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);

    //Create a typed array of 10 unsigned 16-bit integers(unsigned short format):
    const myArr2 = new Uint16Array(10);
    console.log("Array : " + myArr2 + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);
     
}

//* 32-Bit Integers
/**
 * Name             DataType                 Range
 * Int32Array       Signed long integer      -2147483648 / ""
 * Uint32Array      Unsigned long integer    0 / 4294967295
 */
{
    //Create a typed array of 10 signed 32-bit integers (long format):
    const myArr = new Int32Array(10);
    console.log("Array : " + myArr + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);

    //Create a typed array of 10 unsigned 32-bit integers(unsigned long format)
    const myArr2 = new Uint32Array(10);
    console.log("Array : " + myArr2 + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);
}

//* 64-Bit Integers
/**
 * Name              DataType                        Range
 * BigInt64Array     Big Signed integer             -2^63/2^63-1
 * BigUint64Array    Big Unsigned integer           0/2^64
 */
{
    //Create a typed array of 10 signed 64-bit integer(bigint format):
    const myArr = new BigInt64Array(10);
    console.log("Array : " + myArr + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);

    //Create a typed array of 10 unsigned 64-bit integers(bigint format)
    const myArr2 = new BigUint64Array(10);
    console.log("Array : " + myArr2 + " Bytes per element: " + myArr.BYTES_PER_ELEMENT);
}

//!==============================================================
//* Floating Point Numbers
/***
 * Name          Description
 * Float16Array  HalfPrecision -3 significant decimal digits
 * Float32Array  Normal precision -7 significant decimal digits
 * Float64Array  Double precision -15 significant decimal digits
 */
{
    //Create a typed array of 10 floating point numbers in (half precision) 16-bit formal:
    const myArr = new Float16Array(10);
    console.log(myArr);

    //Create a typed array of 10 floating point numbers in (normal precision) 32-bit formal:
    const myArr2 = new Float32Array(10);
    console.log(myArr2);

    //Create a typed array of 10 floating point numbers in (double precision) 16-bit formal:
    const myArr3 = new Float64Array(10);
    console.log(myArr3);
}
