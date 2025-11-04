//* JavaScript Object Constructors
//Object Constructor Functions
/**
 * Sometimes we need to create many objects of the same type.
 * to create an object type we use an object constructor function.
 * it is considered good practice to name constructor functions with upper-case first letter.
 */
{
    //* Object Type Person
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }

    //In this constructor function, this has no value.
    //The value of this will become the new object when a new object is created.

    //Now we can use new person() to create many new Person objects:
    const myFather = new Person("John", "Doe", 50, "Blue");
    const myMother = new Person("Sally", "Rally", 48, "green");
    const mySister = new Person("Anna", "Rally", 18, "green");
    const mySelf = new Person("Johnny", "Rally", 22, "green");

    console.log("My Father is " + myFather.age + "." + " My Mother is " + myMother.age + ".");
}

//* Property Default Values
//A value given to a property will be a default value for all objects created by the constructor:
{
    function Person(first, last, age, eyeColor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyeColor;
        this.nationality = "English";
    }

    //Now we can use new person() to create many new Person  objects:
    const myFather = new Person("John", "Doe", 50, "Blue");

    //* Adding a Property to an Object
    //Adding a property to a created object is easy:
    myFather.nationality = "Hindi;"

    //?NOTE: The new property will be added to myFather. Not to any other Person Objects


    //* Adding a Property to a Constructor
    //You can NOT add a new property to an object constructor:
    //Person.nationality = "English";

    //To add a new property, you must add it to the constructor function prototype:
    Person.prototype.nationality = "Gujarati";
    console.log("The Nationality of my Father is " + myFather.nationality);
}

//!--------------------------------------------------------------
//* Constructor Function Methods
//A constructor function can also have methods:
{
       function Person(first, last, age, eyeColor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyeColor;
        this.fullName = function() {
            return this.firstName + " " + this.lastName;
        };
       }

        const myMother = new Person("Sally", "Doe", 50, "Blue");

       //* Adding a Method to an Object
       //Adding a method to a created object is easy:
       myMother.changeName = function(name) {
        this.lastName = name;
       }
       //The new method will be added to myMother. Not to any other Person Objects

       //* Adding a Method to a Constructor
       //You cannot add a new method to an object constructor function.
       //This code will produce a TypeError:
       Person.changeName = function (name){
        this.lastName = name;
       }

       myMother.changeName("Doe");

       //Adding a new method must be done to the constructor function prototype:
       Person.prototype.changeName = function(name) {
        this.lastName = name;
       }

       myMother.changeName("Doe");

       //? NOTE: The changeName() function assigns the value of name to the person's lastName property. substituting this with myMother.
}

//* Built-in JavaScript Constructor
//JavaScript has built-in constructor for all native objects:
{
     console.log("The Type of new Object() is " + typeof new Object());
     console.log("The Type of new Array() is " + typeof new Array());
     console.log("The Type of new Map() is " + typeof new Map());
     console.log("The Type of new Set() is " + typeof new Set());
     console.log("The Type of new Date() is " + typeof new Date());
     console.log("The Type of new RegExp() is " + typeof new RegExp());
     console.log("The Type of new Function() is " + typeof new Function());
}
//? NOTE: The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Mathh.

//* Practices
/**
 * Use object literals {} instead of new Object().
 * use array literals [] instead of new Array().
 * Use pattern literals /()/ instead of new RegExp().
 * Use function expressions (){} instead of new Function().
 */
