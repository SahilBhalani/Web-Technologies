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

//* This in a Method
/**
 * When used in an object method, this refers to the object
 * In the example on top of this page, this refers to the person object
 * Because the fullName method is a method of the person object.
 */
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        id : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName
        }
    };
    console.log(person.fullName());
}

//* Object Method Binding
//In These examples, this is the person object
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        id : 5566,
        myFunction: function() {
            return this;
        }
    };
    console.log(person.myFunction());
}
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    console.log(person.fullName());
    //i.e this.firstName is the firstName property of this(The person object).
}

//* Explicit Function Binding
//The call() and apply() methods are predefined JavaScript methods.
//They can both be used to call an object method with another object as argument.
{
    //The Example Below calls person1.fullName with person2 as an argument, this refers to person2, even if fullName is a method of person1:
    const person1 = {
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }

    const person2 = {
        firstName: "Sahil",
        lastName: "Patel"
    }

    //Return "Sahil Patel"
    console.log(person1.fullName.call(person2));
}

//* Function Borrowing
/**
 * With the bind() method, an object can borrow a method from another object.
 * This example creates 2 objects (person and member).
 * The member object borrows the fullname method from the person object:
 */
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }

    const member = {
        firstName: "Gege",
        lastName: "Akutami"
    }

    let fullName = person.fullName.bind(member);
    console.log(fullName());
}