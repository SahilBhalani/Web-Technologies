//* Avoid Global Variables
/**
 * Avoid global variables, avvoid new, avoid ==, avoid eval()
 * Minimize the use of global variables
 * This includes all data types, objects, and functions
 * Global variables and functions can be overwritten by other scripts
 * Use local variables instead, and learn to how to use closures.
 */

//* Always Declare Local Variables
//All variables used in a function should be declared as local variables.
//Local variables must be declared with the var, the let, or the const keyword, otherwise they will become global variables.

//* Declaration on Top
/** it is good coding practis to put all declaration at the top of each script or function.
 * This will:
 *  ~ Give Cleaner Code
 *  ~ Provide  a single place to look for local variables
 *  ~ Make it easier t0 avoid unwanted (implied) global variables
 *  ~ Reduce the possibility of unwanted re-declarations 
 */
{
    //Declare at the beginning
    let firstName, lastName, price, discount, fullPrice;

    //Use later
    firstName = "John";
    lastName = "Doe";

    price = 19.90;
    discount = 0.10;

    fullPrice = price - discount;

    //this also goes for loop variables:
    for (let i = 0; i < 5; i++){
        // block of code
    }
}

//* Declare Objects with const 
//Declaring objects with const will prevent any accidental change of type:
{
    let car = {type:"Fiat",model:500,color:"white"};
    car = "Fiat";  //Changes object to string

    const car1 = {type:"Fiat",model:500,color:"white"};
    car1 = "Fiat";  //Not Possible
}

//* Declare Array with const
//Declaring arrays with cosnt will prevent any accidental change of type:
{
    let cars = ["Saab","Volvo","BMW"];
    cars = 3; // Changes array to number

    const carss = ["Saab","Volvo","BMW"];
    carss = 3; //Not Possible
}

//* Don't Use new Object()
/**
 * Use "" instead of new String()
 * Use 0 instead of new Number()
 * Use false instead of new Boolean()
 * Use {} instead of new Object()
 * Use [] instead of new Array()
 * Use /()/ instead of new RegExp()
 * Use function (){} instead of new Function()
 */
{
    let x1 = ""; //new primitive string
    let x2 = 0;  //new primitive number
    let x3 = false; //new primitive boolean
    const x4 = {}; //new object
    const x5 = []; //new array object
    const x6 = /()/; //new regexp object
    const x7 = function(){}; //new function object
}