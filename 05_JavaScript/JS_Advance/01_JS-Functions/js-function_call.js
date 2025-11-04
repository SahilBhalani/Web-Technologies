//* JavaScript Function call()
//Method Reuse
//With call() method, you can write a method that can be used on different objects.

//* All Function are Methods
//In JavaScript all functions are object methods
//If a function is not a method of a JavaScript object, it is a function of the global object.
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }

    //This will return "John Doe"
    console.log(person.fullName());

    //In the example above, this refers to the person object.
    //this.firstName means the firstName property of this
    //Same as:
    //this.firstName means the firstName property of person.
}

//* The JavaScript call() Method
//The call() method is predefineed JavaScript method.
//It can be used to invoke (call) a method with an object as an argument(parameter).
//?NOTE: With call(), an object can use a method belonging to another object. 
{
    //This example calls the fullName method of person, using it to person1:
    const person = {
        fullName: function(){
            return this.firstName + " " + this.lastName;
        }
    }

    const person1 = {
        firstName: "John",
        lastName: "Doe"
    }
    const person2 = {
        firstName: "Mary",
        lastName: "Doe"
    }

    //This will return "Mary Doe"
    console.log(person.fullName.call(person2));
}

//* The call() Method with Arguments
//The call() method can accept arguments:
{
    const person = {
        fullName: function(city, country){
            return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
    }

    const person1 = {
        firstName: "Sahil",
        lastName: "Patel"
    }

    console.log(person.fullName.call(person1,"Tokyo","Japan"));
}