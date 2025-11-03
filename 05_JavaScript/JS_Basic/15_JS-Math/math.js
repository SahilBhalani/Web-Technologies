//* The Math Object
/**
 * The JavaScript Math object allows you to perform mathematical tasks.
 * The Math object is static.
 * All methods and properties can be used without creating a Math object first.
 */
{
    console.log(Math.PI);
}

//* Math Properties (Constants)
//The syntax for any Math property is : Math.property.
//JavaScript provides 8 mathematical constants that can be accessed as Math propertied:
{
    console.log(Math.E); //returns Euler's number
    console.log(Math.PI);//returns PI
    console.log(Math.SQRT2); //returns the square root of 2
    console.log(Math.SQRT1_2);//returns the square root of 1/2
    console.log(Math.LN2);//returns the natural logarithm of 2
    console.log(Math.LN10);//returns the natural logarithm of 2
    console.log(Math.LOG2E);//returns base 2 logarithm of E
    console.log(Math.LOG10E);//returns base 10 logarithm of E
}

//!==============================================================
//* Math Methods
//The syntax for Math any methods is: Math.method(number)

//* Number to Integer
//There are 4 Common methods to round a number to an integer:
/**
 * Math.round(x) - returns x rounded to its nearest integer
 * Math.ceil(x) - returns x rounded up to its nearest integer
 * Math.floor() - returns x rounded down to its nearest integer
 * Math.trunc() - returns the integer part of x(new in ES6)
 */

//* Math.round()
// Math.round(x) returns the nearest integer:
{
    console.log("Round");
    console.log(Math.round(4.6));
    console.log(Math.round(4.5));
    console.log(Math.round(4.4));
}

//* Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer:
{
    console.log("Ceil");
    console.log(Math.ceil(4.9));
    console.log(Math.ceil(4.7));
    console.log(Math.ceil(4.4));
    console.log(Math.ceil(4.2));
    console.log(Math.ceil(-4.2));
}

//* Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer:
{
    console.log("Floor");
    console.log(Math.floor(4.9));
    console.log(Math.floor(4.7));
    console.log(Math.floor(4.4));
    console.log(Math.floor(4.2));
    console.log(Math.floor(-4.2));
}

//* Math.trunc()
//Math.trunc(x) returns the integer part of x:
{
    console.log("Trunc");
    console.log(Math.trunc(4.9));
    console.log(Math.trunc(4.7));
    console.log(Math.trunc(4.4));
    console.log(Math.trunc(4.2));
    console.log(Math.trunc(-4.2));
}

//* Math.sign()
//Math.sign(x) returns if x is negative, null or positive
//~ If x is positive it returns 1
//~ If x is negative it returns -1
//~ If x is null it returns 0
{
    console.log("Sign");
    console.log(Math.sign(-4));
    console.log(Math.sign(0));
    console.log(Math.sign(4));
}

//* Math.pow()
//Math.pow(x, y) returns the value of x to the power of y:
{
    console.log("Power");
    console.log(Math.pow(8,2));
    console.log(Math.pow(10,3));
}

//* Math.sqrt()
//Math.sqrt(x) returns the square root of x:
{
    console.log("Square Root");
    console.log(Math.sqrt(64));
    console.log(Math.sqrt(100));
}

//* Math.abs()
//Math.abs(x) returns the absolute (positive) value of x:
{
    console.log("Abs");
    console.log(Math.abs(-4.7));
}

//* Math.sin()
//Math.sin(x) returns a sine(a value between -1 and 1) to the angle x(given in radians).
//If you want to use degrees instead of radians, you have to convert degree into radians
//Angle in radians = Angle in degrees x PI / 180.
{
    console.log("Sin");
    console.log(Math.sin(90 * Math.PI / 180)); //returns 1 (the sine of 90 degrees)
}


//* Math.cos()
//Math.cos(x) returns the cosine (a value between -1 to 1) of the angle x(given in radians)
//If you want to use degrees instead of radians, you have to convert degrees to radians:
//Angle in radians = Angle in degrees X PI / 180.
{
    console.log("Cos");
    console.log(0 * Math.PI / 180); // returns 1 (the cos of 0 degrees.)
}

//* Math.min() and Math.max()
//Math.min() and Math.max() can be used to find lowest or highest value in a list of arguments:
{
    console.log("Min");
    console.log(Math.min(0, 150,30,20,-8, -200));
    console.log("Max");
    console.log(Math.max(0, 150,30,20,-8, -200));
}

//* Math.random()
//Math.random() returns a random number between 0(inclusive), and 1(exclusive):
{
    console.log("Random");
    console.log(Math.random());
}

//* The Math.log() Method
//Math.log(x) returns the natural logarithm of x
//The natural logarithm returns the time needed to reach a certain level of growth:
{
    console.log("Log");
    console.log(Math.log(1));
    console.log(Math.log(2));
    console.log(Math.log(3));

    //Math.E and Math.log() are twins.
    //How many times must we multiply Math.E to get 10?
    console.log(Math.log(10));
}

//* The Math.log2() Method
// Math.log2(x) returns the base 2 logarithm of x.
{
    //how many times must we multiply 2 to get 8
    console.log(Math.log2(8));
}

//* The Math.log10() Method
//Math.log10(x) returns the base 2 logarithm of x.
{
    //How many times must we multiply 10 to get 1000?
    console.log(Math.log10(1000));
}