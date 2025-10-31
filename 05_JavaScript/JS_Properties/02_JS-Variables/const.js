/**
 * The const keyword was introduced in ES6 (2015)
 * Variables defined with const cannot be Redeclared
 * Variables defined with const cannot be Reassigned
 * Variables defined with const have Block Scope
 */

//---------------------------------------------------------------
// Cannot be reassigned
// A Variable defined with the const keyword cannot be reassigned
// ex.
const PI = 3.1415926563;
PI = 3.14; //This will give an error
PI = PI + 10; //This will also give an error

//---------------------------------------------------------------

//Must be Assigned
// Javascript const variables must be assigned a value when they are declared.

//Correct
const PI2 = 3.14;

//Incorrect
// const THETA; --> This will give an error 
THETA = 3.1415

//--------------------------------------------------------------

/**
 * When to use JavaScript const?
 * 
 * Always declare a variable with const when you know that the value should not be changed.
 * 
 * Use const when you declare:
 * 
 *  ~ A New Array
 *  ~ A New Object
 *  ~ A New Function
 *  ~ A New RegExp
 */

//---------------------------------------------------------------

/**
 * Constant Object and Arrays
 * 
 * The Keyword const is a little misleading
 * it does not define a constant value. It defines a constant reference to a value.
 * 
 * Because of this you can NOT:
 * 
 *  ~ Reassign a constant value
 *  ~ Reassign a constant array
 *  ~ Reassign a constant object
 * 
 * But You CAN:
 * 
 *  ~ Change the elements of constant array.
 *  ~ Change the properties of constant object.
 */

//Constant Arrays
// You can change the element of a constant array:
// ex.

//you can create a constant array:
const cars = ["Saab" , "Volvo" , "BMW"];

//You can change an element:
cars[0] = "Toyota";

//You can add an element:
cars.push("audi");

//But you can NOT reassign the array:
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"]; //ERROR

//--------------------------------------------------------------

// Constant Objects
// You can change the properties of a constant  object:
//ex.

//You can create a const object:
const car = {type:"fiat", model:"500", color:"white"};

//You can change a property:
car.color = "red";

//You can add a property:
car.owner = "Natukaka";

//But you can NOT reassign the object:

const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"} // ERROR

