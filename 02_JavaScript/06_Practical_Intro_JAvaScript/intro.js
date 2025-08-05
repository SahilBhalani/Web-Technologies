// For Printing any value
console.log("Inside Intro!");

// how to run js code -> dynamically typed language
// variable Intialization

let varName; // varName is variable name
// varName is currently undefined -> default value of any variable is undefined

// Value Assigning
varName = 10;
console.log(varName); // printing Integer variable

varName = "I'm String";
console.log(varName); // Printing String variable, in Js we only have strings

varName = 10.1;
console.log(varName); // printing Float Value

varName = true;
console.log(varName); // Printing Boolean Value

/**
 * how to know the current type of a value that a variable is having.
 * There only numbers , There only strings
 * What types of values it can have.
 *
 *  * Primitive ->
 *      ->number , strings, booleans, null ,undefined
 *      ->bigInt, symbols
 *
 *  * Non-primitive->
 *          -> functions , arrays and objects
 * ***/

varName = 10;
varName = false;
varName = 10.1;
varName = "hello";
varName = "h";
console.log(typeof varName); // to finding type of variable

/**
 *
 * conditional -> if else and switch cases
 * **/

// Basic If/Else Example
let number = 11;
if (number % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}


// If/Elseif Ladder Example

let day = "sat";
if(day=="mon" || day=="Tue" || day=="Wed"){
    console.log("Work");
}else if(day=="sat"){
    console.log("Low Work");
}else{
    console.log("Sleep");
}
