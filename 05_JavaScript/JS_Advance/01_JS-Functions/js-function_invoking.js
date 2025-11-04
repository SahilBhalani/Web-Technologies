//* Javascript Function Invocation
//The code inside a JavaScript function will execute when "Something" invokes it.

//* Invoking A Function as a Function
{
    function myFunction(a,b){
        return a * b;
    }

    console.log(myFunction(10,2)); //will return 20

    //The function above does not belong to any object. BUt in JavaScript there is always a default global object

    //In HTML the defualt global object is the HTML page itself, so the function above "belongs" to the HTML page.
}

//myFunction and window.myFunction() is the same function:
{
    function myFunction(a, b){
        return a * b;
    }
    console.log(window.myFunction(10,2)); //will also return 20
}

//* What is this?
/**
 * In JavaScript, the this keyboard refers to an object.
 * THe this keyword refers to different objects depending on how it is used:
 * ~ Alone, this refers to the global object.
 * ~ In a function, this refers to the global object
 * ~ In a function, in strict mode, this is undefined.
 * ~ In an object method, this refers to the object.
 * ~ In an event, This refers to the element that received the event.
 * Methods like call(), apply(), and bind() can refer this to any object
 * ? NOTE:
 * ~ this is not a variable.
 * ~ this is a keyword.
 * ~ You cannot change the value of this.
 */

//* The Global Object
//When a function is called without an owner object, the value of this becomes the global object.
//In a web browser the global object is the browser window.
{
    let x = myFunction(); // x will be the window object

    function myFunction() {
        return this;
    }

    //Invoking a Function as a Method
    //In JavaScript you can define functions as object methods
    //The following examples creates an object (myObject), with two properties(firstName and lastName), and a method(fullName);
    {
        const myObject = {
            firstName: "John",
            lastName:  "Doe",
            fullName: function() {
                return this.firstName + " " + this.lastName;
            }
        }
        console.log(myObject.fullName()); // will return John Doe
    }

    //The fullName method is a function. The function belongs to the object. myObject is the owner of the function.
    //The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject
    
    //Test it! Change the fullName method to return the value og this:
    {
        const myObject = {
            firstName: "John",
            lastName: "Doe",
            fullName: function () {
                return this;
            }
        }
        //Ths will return [object Object] (the owner object)
        console.log(myObject.fullName());
    }

    //Invoking a function as an object method,causes the value of this to be object itself.
}

//* Invoking a Function with the Constructor
// If a functino is preceded with the new keyword, it is a constructor invocation.
//it looks like you create a new function, but since JavaScript functions are objects you actually create a new object:
{
    //This is a function constructor:
    function myFunction(arg1, arg2){
        this.firstName = arg1;
        this.lastName = arg2;
    }

    //This creates a new object
    const myObj = new myFunction("John","Doe");

    //This will return "John"
    console.log(myObj.firstName);
    
    //A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.

    //The this keyword in the constructor does not have a value.
    //The value of this will be the new object created when the function is invoked.
}



