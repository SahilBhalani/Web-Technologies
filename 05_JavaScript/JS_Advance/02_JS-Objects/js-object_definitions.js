//* JavaScript Object Definitions
/**
 * Methods for Defining JavaScript Objects
 * ~ Using an Object Literal
 * ~ Using the new keyword
 * ~ Using an Object Constructor
 * ~ Using Object.assign()
 * ~ Using Object.create()
 * ~ Using Object.fromEntries()
 */

//* Using An Object Literal
//An object literal is a list of property key:values inside curly braces {}.
{
   //Create an Object
   const person = {
    firstName: "John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
   };
}

//* Using the new Keyword
//Create an Object
const person = new Object({
    firstName:"John",
    lastName: "Doe",
    age:50,
    eyeColor:"blue"
});

//? NOTE:
// The examples above do exactly the same.
//But, there is no need to use new Object().
//For readability, simplicity and execution speed, use the object literal method.

/**
 * Object written as name value pairs are similar to:
 * ~ Associative arrays in PHP
 * ~ Dictionaries in Python
 * ~ Hash tables in C
 * ~ Hash maps in Java
 * ~ Hashes in Ruby and Perl
 */

//* JavaScript Object.create()
//The Object.create() method creates an object from an existing object.
{
    //Create an Object:
    const person = {
        firstName: "John",
        lastName: "Doe"
    };
    console.log(person);

    //Create new Object
    const man = Object.create(person);
    man.firstName = "Peter";
    console.log(man);
}

//* JavaScript Object fromEntries()
//ES2019 added the Object method fromEntries() to JavaScript
//The fromEntries() method creates an object from iterable key/value pairs
{
    const fruits = [
        ["apples",300],
        ["pears",900],
        ['bananas', 500]
    ];

    const myObj = Object.fromEntries(fruits);
    console.log(myObj);
}

//* JavaScript Object.assign()
//The Object.assign() method copies properties from one or more source objects to a target object.
{
    //Create Target Object
    const person1 = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "Blue"
    };

    //create Source Object
    const person2 = {firstName:"Anne",lastName:"Smith"};

    //Assign Source to Target
    let res = Object.assign(person1,person2);
    console.log(res);
}

//!--------------------------------------------------------------
//* In JavaScript, Objects are King.
//If you Understand Objects, You Understand JavaScript.
/**
 * In Javacript, almost "Everything" is an object.
 * ~ Objects are objects
 * ~ Maths are objects
 * ~ Functions are objects
 * ~ Dates are objects
 * ~ Arrays are objects
 * ~ Maps are objects
 * ~ Sets are objects
 * 
 * All JavaScripts values, except primitives, are objects.
 */

//* JavaScript Primitives
//A Primitives data type is data type that can only store a single primitive value.
//JavaScript defines 7 types of primitive data types:
/**
 * Type             Example Value
 * String           "Hello"    
 * Number           3.14
 * boolean          true
 * bigint           123456789012345
 * null             null
 * undefined        undefined
 * symbol           symbol
 */

//? Immutable
//Primitive values are immutable(they are hardcoded and cannot be changed)
//if x = 3.14 you can change value of x, but you cannot change the value of 3.14
/**
 * Value      Type       Comment
 * "Hello"    string     "Hello" is always "Hello"
 * 3.14       number     3.14 is always 3.14
 * true       boolean    true is always true
 * false      boolean    false is always false
 * null       null       null is always null
 * undefined  undefined  undefined is always undefined  
 */

//* JavaScript Objects are Mutable
//Objects are Mutable: They are addressed by reference, not by value.
//If person is an object, the following statement will not create a copy person:
{
    //const x = person;

    //The object x is not a copy of person. The object x IS person.
    //The object x and the object person share the same memory address.
    //Any changes to x will also change person:

    //create an Object
    const person = {
        firstName: "John",
        lastName:"Doe",
        age:50, eyeColor: "blue"
    }

    //Try to create a copy
    const x = person;

    //This will change age in person:
    x.age = 10;

    console.log(x);
}