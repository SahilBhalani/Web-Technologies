//* JavaScript Arrow Function
/**
 * Arrow functions were introduced in ES6.
 * Arrow functions allows a shorter syntax for function expressions.
 * You don't need the function keyword, the return keyword, and the curly brackets:
 */
{
    let myFunction = (a,b) => a * b;
    let result = myFunction(5,6);
    console.log(result);
}

//Before Arrow:
{
    //Function to compute the product of a and b
    let myFunction = function(a,b){return a * b}
}

//With Arrow:
{
    let myFunction = (a,b) => a * b;
}

//Before Arrow:
{
    let hello = function(){
        return "Hello World!";
    }
}

//With Arrow Function:
{
    let hello = () => {
        return "Hello World!";
    }
}

//if the function has only one statement that returns a value, you can remove the brackets and the return keyword:

//? Arrow Functions Return Value by Default
{
    let hello = () => "Hello World";

    //NOTE: This only works only if the function has only one statement.
}

//if You have parameters, you can pass them inside the parentheses:
//* Arrow Function With Parameters:
{
    let hello = (val) => "Hello " + val;
    console.log(hello("Universe!"));
}

//Infact if you have only one parameter, you can skip the parentheses as well:
//* Arrow Function Without Parentheses:
{
    let hello = val => "Hello " + val;
    console.log(hello("Wakanda!"));
}

//?NOTE:
//Arrow Function do not have their own this. They are not well suited for defining object methods.
//Arrow functions are not hoisted. They must be defined before they are used.


//You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always kepp them:
{
    // This will not work
    let myFunction = (x,y) => { x * y };

    //This will not work
   // let myFunction2 = (x,y) => return x * y ;

   //only this will work
   let myFunction2 = (x,y) => { return x * y };
}

//!--------------------------------------------------------------

//* What About this?
/**
 * The handling of this is also different in arrow functions compared to regular functions
 * In short, with arrow functions there are no binding of this
 * In Regular functions the this keyword represented the object that called the function, which could be the window, the document,a button or whatever
 * with arrow functions the this keyword always represents the object that defined the arrow function
 */

/**
 * Let's take a look at two example to understand the difference
 * Both examples call a method twice, first when the page loads, and once again when the user clicks a button.
 * The first example uses a regular function, and the second example uses an arrow function
 * The result shows that the first example returns two objects(window and button) and the second example returns the window object twice, because of the window object is the "owner" of the function.
 */
{
    //Example 1
    //With a regular function this represents the object that calls the function
    hello = function(){
        document.getElementById('demo').innerHTML += this;
    }

    //The window object calls the function
    window.addEventListener("load",hello);

    // A button object calls the function:
    document.getElementById("btn").addEventListener("click", hello);
}

{
    //Example 2
    //With an arrow function this represents the owner of the function:
    hello = () => {
        document.getElementById('demo2').innerHTML += this;
    }

    //The window object calls the function:
    window.addEventListener("load", hello);

    // A button object calls the function:
    document.getElementById("btn2").addEventListener("click", hello);
}
