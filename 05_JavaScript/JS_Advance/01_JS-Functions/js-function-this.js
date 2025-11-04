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

//* this Alone
//When used alone, this refers to the global object.
//Because this is in the global scope.
//In a browser window the global object is [object Window]
{
    let x = this;
    console.log("This is : " + x);
}

//* this in a function (Default)
//In a function, by default, this is the global object
//In a browser window, the global object is [object Window]:
{
    function myFunction(){
        return this;
    }

    console.log("This is : " + myFunction());
}

//* this in a Function (Strict)
// JavaScript strict mode does not allow default binding.
//When used in a function, in strict mode, this is undefined.
{
    "use strict";
    console.log("This is : " + myFunction2());

    function myFunction2(){
        return this;
    }
}

//* this in Event Handlers
//In HTML event handlers, this refers to the HTML element that received the event:


//* This Precedence
//Use the following precedence of order to determine which object this refers to:
/**
 * Order    Object         Because
 * 1        bind()         this is in a function called using bind() 
 * 2        apply()        this is in a function called using apply()     
 * 2        call()         this is in a function called using call() 
 * 3        Object Method  this is in a object function ( method) 
 * 4        Global Scope   this is in a fuction in th global scope 
 */