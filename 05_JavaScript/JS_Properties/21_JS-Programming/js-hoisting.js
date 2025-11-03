//* JavaScript Hoisting
//Hoisting is JavaScript's default behaviour of moving declarations to the top.

/**
 * JavaScript Declarations are Hoisted
 * In JavaScript, a variable can be declared after it has been used.
 * In other words; A varible can be used before it has been declared.
 */
{
    //Ex 1
    x = 5; // Assign 5 to x

    elem = document.getElementById('demo'); //Find an element
    //elem.innerHTML = x; // Display x in the element

   var x; // Declare x
}

{ 
    //Ex 2
    var x; //Declare x
    x = 5; //Assign 5 to x

    elem = document.getElementById('demo'); // Find en element
    //elem.innerHTML = x;  //Display x in the element
}

//To understand this, you have to understand the term "Hoisting".
//Hoisting is JavaScript's defualt behaviour of moving all declaration to the top of the current scope ( to the top of the current script or the current function )

//* The let and const Keywords
//Variables defined with let and const are hoisted to the top of the block, but not initialized
//Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
//Using a let variable before it is declared will result in a RefereceError
{
    //The variable is in a "Temporal dead zone" from the start of the blovk until it is declared:

    //This will result in a ReferenceError
 //   carName = "Volvo";
    let carName;


    //Using a const variable before it is declared, is a syntax error, so the code will simply not run
    cName = "BMW";
    //const cName; syntax Error 
}

//* JavaScript Initialization are Not Hoisted
//JavaScript only hoists declaration, not initialization.
//Example 1 does not give the same result as example 2:

{
    //ex1
    var x = 5; //Initialize x
    var y = 5; //Initialize y

    elem = document.getElementById('demo'); //Find an element
    console.log(x + " " + y); //Display x and y
    console.log(elem);
}

{
    //ex2
    var x = 5; // Initialize x
    elem = document.getElementById('demo'); //find a element
    //elem.innerHTML = x + " " + y; //Display x and y
    console.log(x + " " + y);

    var y = 7; //Initialize y

    /**
     * Does it make sense that y is undefined in the 2nd example?
     * This is because only the declaration (var y), not the initialization(=7) is hoisted to the top
     * 
     * Because of hoisting , y ahs been declared before it is used, but because initialization are not hoisted, the value of y is undefined
     */

    //ex3
    var a = 5;
    var b;

    elem = document.getElementById('demo'); //find an element
    console.log(a + " " + b); //Display a and b

    b = 7; //Assign 7 to y
}

//* Declare Your Variables At the Top!
/**
 * Hoisitng  is (to many developers) a n unknown or overlooked behaviour of JavaScript
 * If a developer doesn't understand hoisting, progam may contain bugs (errors).
 * To avoid bugs, always declare all variables at the beginning of every scope.
 * Since this is how JavaScript interpretes the code, it is always a good rule.
 */