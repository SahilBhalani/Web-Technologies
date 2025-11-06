//* JavaScript Classes
//JavaScript Classes are template for JavaScript Objects
{
    //? JavaScript Class Syntax
    //Use the keyword class to create a class
    //Always add a method named constructor()
    class ClassName{
        constructor(){ 
            //Code Block
        }
    }

    //Ex2
    class Car{
        constructor(name,year){
            this.name = name;
            this.year = year;
        }
    }

    //The example above creates a class named "Car"
    //The class has two initial properties: "name" & "year".

    //? A JavaScript class is not an object.
    //it is a template for JavaScript objects.

    //* Using a Class
    //When you have a class, you can use the class to create objects:
    const myCar1 = new Car("Ford",2014);
    const myCar2 = new Car("Audi",2019);

    //The example above uses the Car class to create two Car objects.
    //The constructor method is called automatically when a new object is created.
}

//* The Constructor Method
/**
 * The constructor method is a special method:
 * ~ It has to have the exact name "constructor"
 * ~ It is executed automatically when a new object is created
 * ~ It is used to initialize object properties
 * 
 * If you do not define a constructor method, JavaScript will add an empty constructor
 */

//* Class Methods
//Class methods are created with same syntax as object methods.
//Use the keyword class to create a class
//Always add a constructor() method
//Then add any number of methods
{
    //Syntax:
    class ClassName{
        constructor(){
            //Code Block
        }
        
        method_1() {
            //Code Block
        }

        method_2() {
            //Code Block
        }
        method_3() {
            //Code Block
        }
    }

    //Create a Class method named "age", that returns the Car age:
    class Car{
        constructor(name,year) {
            this.name = name;
            this.year = year;
        }

        age() {
            const date = new Date();
            return date.getFullYear() - this.year;
        }
    }

    const myCar = new Car("Ford",2014);
    console.log("My car is " + myCar.age() + " years old.");
}

//You Can send parameters to Class methods:
{
    class Car{
        constructor(name,year){
            this.name = name;
            this.year = year;
        }
        age(x) {
            return x - this.year;
        }
    }

    const date = new Date();
    let year = date.getFullYear();

    const myCar = new Car("Ford", 2014);
    console.log("My car is " + myCar.age(year) + " years old.");
}

//* "use strict"
//classes syntax must be written following The "use strict" Directive.
//You will get an error if you do not follow the "Strict mode" rules.
{
    //In "strict mode" you will get an error if you use a variable withour declaring it:
    class Car {
        constructor(name,year) {
            this.name = name;
            this.year = year;
        }

        age() {
            //date = new Date();  //This will not work
            const date = new Date(); //This will work
            return date.getFullYear() - this.year;  
        }
    }

    const myCar = new Car("Ford", 2014);
    console.log("My car is " + myCar.age() + " years old.");
}



