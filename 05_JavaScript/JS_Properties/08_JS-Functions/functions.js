//* JavaScript Functions
/**
 * What are Functions?
 *  
 *  Funtions are fundamentals building blocks in all programming.
 *  Functions enable better code organization, modularity, and efficiency.
 *  Functions are reusable block of code designed to perform a paticular task.
 *  Functions execute when they are "Called" or "Invoked". 
 *
 */

//ex.
{
    function myFunction(p1 , p2){
        return p1 * p2;
    }
}

//* JavaScript Function Syntax
// function name (p1 , p2 , p3) { //code }

/**
 * A Function is defined with the function keyword, followed by the function name, followed by parantheses(), followed by brackets{}.
 * 
 * The name follows the naming rules for variable(letters, digits,...).
 * 
 * Optional parameters are listed inside parentheses(p1,p2,p3)
 * 
 * The code to be executed is listed inside curly brackets: { code }
 * 
 * Functions can optionally return a value back to the "caller".
 */

//? Why Functions?
/**
 * With functions you can reuse code.
 * You can write code that can be used many times.
 * You can use the same code with diffrent arguments, to produce diffrent results.
 */

//* Function Invocation()
/**
 * The Code inside the function will execute when "something" invokes(calls) the function:
 *  ~ When it is invoked(called) from javascript code
 *  ~ When an event occurs (a user clicks button)
 *  ~ Automatically (self invoked)
 * 
 * The () operator invokes(calls) the funtion:
 */
//ex.
{
    function toCelsius(farenheit){
        return (5 / 9) * (farenheit-32);
    }

    let v = toCelsius();
    let value = toCelsius;
    //NOTE : In the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.
}

//!==============================================================
//* Arrow Functions
// Arrow functions allow us to write shorter function syntax:

//Before Arrow:
{
    //function to compute the product of a and b
    let myFunction = function (a , b) { return a * b };
}

//After Arrow:
{
    let myFunction = (a, b) => a * b;
}

//* Local Variables
// Variables declared within a JavaScript functin, become LOCAL to the function.
// Local Variables can only be accessed from within hte function

//code here can NOT carName

function myFunc(){
    let carName = "Volvo";
    //code here CAN use carNAme
}

// code here can NOT use carName
/**
 * Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
 * Local variables are created when a function starts, and deleted when the function is completed.
 */

//!--------------------------------------------------------------

//* Parameters VS. Arguments
/**
 * In JavaScript, function parameters and arguments are distinct concepts:
 * Parameters are the names listed in the function definition.
 * Parameters are the names of the values that will be passed.
 */
//ex.
{
    function greet(name, age){
        return `Hello ${name}! You are ${age} years old.`;
    }
}

/**
 * Arguments are the values passed to the function when it is invoked or called.
 * Arguments are the values received by the function.
 * 
 * ex.
 * greet("John", 21); 
 * "John" and 21 are arguments.
 */

//!==============================================================
//* Function Used as Variables
// Functions can be used as variables, in all types of formulas, assignments, and calculations.
//ex.

//Insted of using a variable to store the return value of a function:
{
    let x = toCelsius(77);
    let text = "The temperature is " + x + " Celsius";
    console.log(text);
}

//You can use the function directly, as a variable value:
{
    let text = "The temperature is " + toCelsius(77) + " Celsius";
    console.log(text);
}