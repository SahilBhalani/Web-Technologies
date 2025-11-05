//* JavaScript Object Prototype
/**
 * All JavaScript object inherit properties and methods from a prototype
 * In the previous chapter we learned how to use an object constructor
 */
{
  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

  console.log("My Father is " + myFather.age + " My Mother is " + myMother.age);

  //We also learned that you can not add a new property to an existing object constructor.
  Person.nationality = "English";
  console.log();
}

{
  //To add a new property to a constructor, you must add it to the constructor function:

  function Person(first, last, add, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
  }
}

//* Prototype Inheritance

//All Javascript object inherit properties and methods from a prototype:
/**
 * ~ Date Objects inherits from Date.prototype
 * ~ Array Objects inherits from Array.prototype
 * ~ Person objects inherit from Person.prototype
 *
 * The Object.prototype is on the top of the prototype inheritance chain:
 * Date objects, Array objects and Person objects inherits from Object.prototype
 */

//* Adding Properties and Methods to Objects
//Sometimes you want to add new properties(or methods) to all existing objects of a given type.
//Sometimes you wantt to add new properties (or methods) to an object constructor.

//* Using the prototype Property
//The JavaScript prototype property allows you to add new properties to object constructors:
{
  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

  Person.prototype.nationality = "English"
}

{
    //The JavaScript prototype property also allows you to add new methods to object constructor:
     function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  }

  const me = new Person("Sahil","Patel",21,"Brown")
 
  console.log("The name is " + me.name());
}

//! Warning:
// Only modify your own prototype. Never modify the prototype of standard JavaScript objects.
