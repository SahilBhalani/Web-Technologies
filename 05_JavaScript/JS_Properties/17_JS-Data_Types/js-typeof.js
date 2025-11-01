//* The typeof Operator
//The typeof operator returns the data type of a Javascript variable.

//* Primitive Data Types
// In JavaScript, a primitive calue is a single value with no properties or methods
/**
 * JavaScript has 7 Primitive data types:
 * string
 * boolean
 * number
 * bigint
 * symbol
 * null
 * undefined
 */

//The typeof operator returns the type of a variable or an expression.
{
    console.log(typeof "John");
    console.log(typeof ("John"+"Doe"));
    console.log(typeof 3.14);
    console.log(typeof 33);
    console.log(typeof true);
    console.log(typeof false);
    console.log(typeof 1234n);
    console.log(typeof Symbol());
    console.log(typeof x);

    console.log(typeof null);

    //?NOTE:
    //In JavaScript, null is a primitive value. However, typeof returns "object".
    //This is a well-known bug in JavaScript and has historical reasons
}

//* Complex Data Types
//A complex data type can store multiple values and/or different data types together.
//JavaScript has one complex data type:
// ~ Object

//All other complex types like arrays, functions, sets, and maps are just different types of objects.

//The typeof operator returns only two types:
// ~Object
// ~Function
{
    console.log(typeof {name:'John'}); // Return object
    console.log(typeof [1,2,3,4]); // Returns object
    console.log(typeof new Map()); // Returns object
    console.log(typeof new Set()); // Returns object
    console.log(typeof function(){}); //Returns function
}

//? NOTE:
//The typeof operator returns object for all types of object
//~ Objects
//~ arrays
//~ sets
//~ maps

//You cannot use typeof to determine if a JavaScript object is an array or a date.

//* How to Recognize an Array
//How to know if a variable is an array?
{
     // Create an Array
     const fruits = ["apples","Banana","oranges"];
     Array.isArray(fruits);
}

//* The instanceof Operator
//The instanceof operator returns true if an object is an instance of a specified object type:
{
    // Create  a Date
    const time = new Date();

    console.log(time instanceof Date);
}
{
    //Create a Map
    const fruits = new Map([
        ["apples",500],
        ["banans",400],
        ["orange",200]
    ]);

    console.log(fruits instanceof Map);
}
{
    //Create a set
    const fruits = new Set(["apples","bananas","oranges"]);
    console.log(fruits instanceof Set);
}

//* Undefine Variables
//The typeof of an undefined variable is undefined.
{
    console.log(typeof car);
}

//The typeof of a variable with no value is undefined. The value is also undefined.
{
    let car;
    console.log(typeof car);
}

//Any variable can be emptied, by setting the value to undefined.
//The type will also be undefined.
{
    let car = "Volvo";
    car = undefined;
    console.log(typeof car);
}

//* Empty Values
//An empty value has nothing to do with undefined.
//An empty string has both a legal value and a type.
{
    let car = "";
    console.log(typeof car);
}

//* The constructor Property
//The constructor property returns the constructor function for all JavaScript variables.
{

    //Retuns function Object() {[native code]}:
    console.log({name:'John',age:34}.constructor);
    
    //Returns function Array() {[native code]}:
    console.log([1,2,3,4].constructor);

    //Returns function Date() {[native code]}:
    console.log(new Date().constructor);

    //Returns function Set() {[native code]};
    console.log(new Set().constructor);

    //Returns function Map() {[native code]}:
    console.log(new Map().constructor);

    //Returns function Function() {[native code]}:
    console.log(function(){}.constructor);
}

//* The void Operator
//The void operator evaluates an expression and returns undefined. This operator is often used to obtain the undefined primitive value, using "void(0)" (useful when evaluating an expression without using the return value).



