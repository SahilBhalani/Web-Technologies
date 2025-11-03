//* JavaScript Function Definitions
//JavaScript functions are defined with the function keyword
//You can use a function declaration or a function expression.

//* Function Declarations
//Earlier in this tutorial, you learned that function are declared with the following syntax:
{
    function functionname(parameters){
        //code to be executed
    }

    //declared functions are not executed immediatly. They are "Saved for later use", and will be executed lated, when the are invoked (called upon).

    function myFunction(a,b){
        return a * b;
    }

    //Semicolons are used to separate executable JavaScript statements.
    //Since a function declaration is not an executable statement, it is not common to end it with a semicolon.
}

//* Function Expressions
//A Javascript function can also be defined using an expression.
//A function expression can be stored in a variable:
{
    const x = function (a, b){return a * b};

    //After a function expression has been stored in a variable, the variable can be used as a function:
    const a = function (a, b) { return a * b};
    let z  = a(4, 3);
    console.log(z);

    //The function is actually an anonymous function ( a function without a name).
    //Functions stored in variables do not need function names. They are always invoked (called) using the variables name.

    //? The function above ends with a semicolon because it is a part of an executable statement.
}

//* The Function() Constructor
//As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
//Function can aso be defined with a built-in JavaScript function constructor called Function().
{
    const myFunction = new Function("a","b", "return a * b");
    let x = myFunction(4,5);
    console.log(x);

    //You Actually don't have to use the function constructor. The example above is the same as writing:

    const myFunction2 = function(a,b) {return a ** b};
    let y = myFunction2(2,5);
    console.log(y);

    //Most of the time you can avoid usign the new keyword in JavaScript.
}

//* Function Hoisting
//Hoisting is Javascript's default behaviour of moving declaration to the top of the current scope
//Hoisting applies to variable declaration and to function declarations.
//Because of this, JavaScript Functions can be called before they are declared:
{
    console.log(myFunction(5));

    function myFunction(y){
        return y*y*y;
    }

    //Functions defined using an expression are not hoisted.
}

//* Self-Invoking Functions
/**
 * Function expression can be made "Self-invoking".
 * A self-invoking expression will execute automatically if the expression is followed by ().
 * You cannot self-invoke a function declaration.
 * You have to add paranthesis around the function to indicate that it is a function expression:
 */{
    (function (){
        let x = "Hello! I Called myself";
        console.log(x); // i will invoke myself
    })();

    //? The function above is actually anonymous self-invoking function (function without name).
 }

 //* Functions Can be Used as Values
 //JavaScript functions can be used as values:
 {
    function myFunction(a,b){
        return a * b;
    }

    let x = myFunction(9,8);
    console.log(x);

    //JavaScript Functions can be used in expression:
    function myFunction2(a,b){
        return a * b;
    } 

    let y = myFunction(9,8) * 2;
    console.log(y);

 }

 //* Function are Objects
 /**
  * The typeof operator in JavaScript returns "function" for functions
  * But, Javascript functions can best be described as objects
  * JavaScript function have both properties and methods.
  * The arguments.length property returns the number of argument recieved when the function was invoked
  */
 {
    function myFunction(a,b){
        return arguments.length;
    }

    let txt = myFunction(4,4);
    console.log(txt);

    //The toString() method returns the function as a string
    function myFunction(a,b){
        return a * b;
    }

    let text = myFunction.toString();
    console.log(text);
 }