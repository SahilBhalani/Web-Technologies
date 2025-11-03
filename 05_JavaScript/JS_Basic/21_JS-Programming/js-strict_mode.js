//* JavaScript Use Strict
//The "use strict" Directive
/**
 * The "use strict" directive was new in ECMAScript version 5.
 * It defines that JavaScript code should be executed in "strict mode"
 * It is not a statement. It is a literal expression, ignored by earlier versions of JavaScript.
 * The purpose of "use strict" is to indicate that code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 */

//* Declaring Strict Mode
//Strict mode declared by adding "use strict"; to the beginning of a script or a function.
//Declared at the beginning of a script, it has global scope( all code in the script will execute in strict mode):
{
    "use strict";
    x = 3.14; //This will cause an error because x is not declared
}
{
    "use strict";
    myFunction();

    function myFunction(){
        y = 3.14; // This wiill also cause an error because y is not declared
    }
}

//* Why Strict Mode?
/**
 * Strict mode makes it easier to write "secure" JavaScript.
 * Strict mode changes previously accepted "bad syntax" into real errors.
 * As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
 * In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
 * In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
 */

//* Not Allowed in Strict Mode
//Using  a variable, Without declaring it, is not allowed:
{
    "use strict";
    x = 3.14 // this will cause an error

    //Objects are variables too.
    //Using an object, without declaring it, is not allowed:

    "use strict";
    y = {p1:10, p2:20}; // this will cause an error

    //Deleting a varible ( or object ) is not allowed.
    "use strict"
    let a = 3.14;
    //delete x; // this will cause an error

    //delete a function is not allowed.
    "use strict"
    function b(p1,p2) {};
    //delete x; //this will cause an error

    //Duplicating a parameter name is not allowed:
    function c(p1,p1){}; // this will cause an error

    //octal numeric literals are not allowed:
    // let x = 010; //this will cause an error

    //octal escape characters are not allowed:
    //let  x = "\010"; //This will cause an error

    //Writing to a read-only property is not allowed:
    const obj = {};
    Object.defineProperty(obj, "x", {value:0,writable:false});
    obj.x = 3.14; // This will cause an error

    //deleting an undeletable property is not allowed:
    delete Object.prototype; //This will cause an error

    //The word eval cannot be used as a variable:
    //let eval = 3.14; //This will cause an error

    //The word arguments cannot be used as a variable:
    //let arguments = 3.14; //This will cause an error

    //The with statement  is not allowed:
    //with(Math){x = cos(2)}; //This will cause an error

    //for security reasons, eval() is not allowed to create variables in the scope from which it was called.

    //in strict mode, a variable can not be used before it is declared:
    eval("x = 2");
    alert(x); // this will cause an error

    //In strict mode, eval() can not declare a variable using the var keyword:
    eval("var x = 2");
    alert(x); //this will cause an error

    //eval() can not declare a variable using the let keyword:
    eval ("let x = 2");
    alert(x); //this will cause an error

    //The this keyword in functions behaves differently in strict mode.
    //The this keyword refers to the object that called the function
    //if the object is not specified, function in strict mode will return undefined and functions in normal mode will return the global object (window):
    function myFunction(){
        alert(this); //Will alert "undefined"
    }
    myFunction();
}

//? WATCH OUT: The "use strict" directive is only recognized at the beginning of a script or a function.
