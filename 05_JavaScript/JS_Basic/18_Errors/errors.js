//* JavaScript Errors
/**
 * ? Errors Will Happen!
 * When executing JavaScript code, diffrent errors can occur.
 * Errors can be coding error made by the programmer, errors due to wrong input, and other unforeseeable things:
 * 
 * ~ Reference Errors
 * ~ Type Errors
 * ~ Range Errors
 * ~ URI Errors
 * ~ Syntax Errors
 * ~ Eval Error (Deprecated)
 * ~ Silent Errors (next chapter)
 */

//* How to Handle JavaScript Errors
//The try statement allows you to define a block of code to be tested for errors while it is executed.
//The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
{
    //The JavaScript statement try and catch come in pairs:
    try{
        //? Block of code to try
    }
    catch(err) {
        //? Block of code to handle errors
    }
}

//* Reference Error
//A ReferenceError occurs if you use(reference) a variable that does not exist.
/**
 * Error Type       Example         Error
 * ReferenceError   fname = foo;    foo is not defined
 * ReferenceError   let x = y;      Cannot access y before initialize 
 * `                let y = 5;
 */
{
    //You can't use a non-existing variable:
    let x = 5;

    try {
        x = y + 1;
    } catch (err) {
        let text = err.name;
        console.log(text);
    }

    //Can't access a variable before initialization
    try{
        let x = y;
        let y = 5;
    }
    catch(err){
        let text = err.name;
        console.log(text);
    }
}

//* Type Error
// A Type Error occurs when a value is of wrong type of an operation in invalid on that type.
/**
 * Error      Example             Error Message
 * TypeError  Anna(5);            Anna is not a function
 * TypeError  let num = 1;        num.toUpperCase is not a function
 * `          num.toUpperCase();  
 */
{
    //Anna() is not a function
    try {
        Anna(5);
    } catch (err) {
        let text = err.name;
        console.log(text);
    }

    //You cannot convert a number to upper case
    let num = 1;
    try {
        num.toUpperCase();
    } catch (err) {
        let text = err.name;
        console.log(text);
    }
}

//* Range Errors
//A RangeError occurs when a value is out of its valid range
/**
 * ErrorType   Example               Error Message
 * RangeError  new Array(-1)         Invalid Array length   
 * RangeError  num.toPrecision(500)  toPrecision() argument must be between 1 to 100   
 */
{
    //You cannot set the number of array elements to -1:
    try {
        new Array(-1);
    }
    catch(err){
        let text = err.name;
        console.log(text);
    }

    //You cannot set the number of significant digits of a number to 500:
    let num = 1;

    try{
        num.toPrecision(500); //A number cannot have 500 significant digits
    }
    catch(err){
        let text = err.name;
        console.log(text);
    }
}

//* JavaScript URI Errors (Uniform Resource Identifier Errors)
// An URIError occurs if you use illegal character in a URI function:
/**
 * Error Type   Example             Error Message
 * URIError     decodeURI("%%%");   URI malformed
 */
{
    try{
        decodeURI("%%%"); //You cannot URI decode percent signs
    }
    catch(err){
        console.log(err.name);
    }
}

//* Syntax Errors
//A Syntax Errors occurs when the code violates JavaScript's grammer's rules.
/**
 * Error        Example          Error
 * SyntaxError  fname = "john")  Invalid or Unexpected token )
 * SyntaxError  Math.round(4,6;  Missing ) after argument list
 */
{
    //in this example we have made the mistake of not closing the string:
    // This line cannot be parsed by JavaScript
    // let fName = "John);

    //Execution stops here
    //The statement above will genarate the error: Invalid or unexpected token
}

//? Syntax Errors are Not Catchable
// Syntax errors are not catchable by try...catch
// Syntax errors happen before runtime
{
    //The code below should produce an error, but it does not:
    try{
       // let x = Math.round(4,6;)
    }
    catch(err){
        let text = err.name + " " + err.description;
    }

    //Syntax Issue
    //The line above is syntactically invalid JavaScript, there is an extra semicolon inside the parentheses.
}