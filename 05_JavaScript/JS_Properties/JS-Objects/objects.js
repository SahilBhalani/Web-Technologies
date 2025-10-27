//* JavaScript Objects
/**
 * An Object is a variable that can hold many variables.
 *
 * object are collections of key-value pairs, where each key (Known as property names) has a value.
 *
 * Objects can describe anything like houses, cars, people, animals, or any other subjects.
 */

/**
 * -------------        Car Peoperties          Car Methods
 * |            |
 * |            |       car.name = fiat;        car.start()
 * | Car Object |       car.model = 500;        car.drive()
 * |            |       car.weight = 850kg;     car.brake()
 * |            |       car.color = white;      car.stop()
 * --------------
 *
 * Different car have the same properties, but the property values can differ from car to car.
 *
 * Diffrent cars have the same methods, but the methods can be performed at diffrent times.
 *
 */

//!==============================================================
//* JavaScript Objects
//This code assigns many values(fiat,500,white) to an object name car:
//ex.
{
  const car = { type: "Fiat", model: "500", color: "white" };

  /**
   *? NOTE:
   * You should declare objects with the const keyword.
   * When an object is declared with const, you cannot later reassign it to point to a different variable.
   * It does not make the object unchangeable. You can still modify its properties and values.
   */
}

//* How to Create a JavaScript Object
// An object literal is a consice way to create an object.
// An object literal is a list of key : value pairs inside curly braces{}:
// In object terms, the key : value pairs are the object properties.
//ex.

//create an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

//Spaces and line breaks are not important. An object literal can span multiple lines:
const pers = {
  firstName: "Gojo",
  lastName: "Satoru",
  age: 35,
  eyeColor: "Sapphire Blue",
};

//You can also create an empty object, and add the properties later:
const peer = {};
// Add Properties
peer.firstName = "Sukuna";
peer.lastName = "Cursed";
peer.age = 1000;
peer.eyeColor = "Fierce Red";

//Using the New Keyword
const perss = new Object({
  firstName: "Yorichhi",
  lastName: "Tsugikuni",
  age: 45,
  eyeColor: "Deep Black",
});

//? NOTE:
/**
 * All the example above do the exactly the same.
 * There is no need to use new Object().
 * For readability, simplicity and speed, use an object literal instead.
 */

//!=============================================================
//* Object Properties
// You can access object properties in two ways:
// 1. objectName.propertyName => person.lastName;
// 2. objectName["propertyName"] => person["lastName"]

//* JavaScript Object Methods
//Object methods are actions that can be performed on objects.
//Object methods are function defination stored as property values:
/**
 * Property                 Property Value
 * firstName                John
 * lastName                 Doe
 * age                      50
 * eyeColor                 blue
 * fullName                 function(){return this.firstName + " " + this.lastName;}
 */

//ex.
const people = {
  firstName: "Sahil",
  lastName: "Bhalani",
  id: 7777,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

/**
 * In the example above, this refers to the person object:
 * this.firstName means firstName property of person.
 * this.lastName means lastName property of person.
 */

//* How to Display  JavaScript Objects?
//Displaying a JavaScript object will output [object Object]
//ex.
const man = {
  name: "John",
  age: 30,
  city: "New York",
};

//Displaying Object Properties
//The Properties of an object can be added in a string:
const woman = {
  name: "Haily",
  age: 50,
  city: "Los Angeles",
};

//* Object Constructor Functions
/**
 * Sometimes we need to create many objects of the same type.
 * To create an object type we use an object constructor function.
 * It is considered good practice to name constructor functions with an upper-case first letter.
 */
//Object Type Person
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

//?NOTE
/**
 * In the constructor function, this has no value.
 * the value of this will become the new object when a new object is created.
 *
 * now we can use new Person() to create many new Person objects:
 */

//ex.
const myFather = new Person("John", "Doe", 50 , "blue");
const myMother = new Person("Sally", "Roe", 48 , "green");
const mySister = new Person("Anna", "Roe", 18 , "green");
const mySelf = new Person("Johhny", "Roe", 22 , "green");

//Summary
/**
 * Objects are containers for Properties and Methods.
 * Properties are named Values.
 * Methods are Functions stored as properties.
 * Properties can be primitive values, functions, or even other objects.
 * Constructors are Object Prototypes
 */

//? In JavaScript, Objects are King.
/**
 * If you Understand Objects, you Understand JavaScript.
 * In JavaScript, almost "Everything" is an object
 * 
 *  ~ Objects are objects
 *  ~ Maths are objects
 *  ~ Functions are objects
 *  ~ Dates are objects
 *  ~ Arrays are objects
 *  ~ Maps are objects
 *  ~ Sets are objects
 * 
 * All Javascript values, except primitives, are objects.
 */