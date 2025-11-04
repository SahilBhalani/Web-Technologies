//* JavaScript Function apply()
//Method Reuse
//With the apply() method, you can write a method that can be used on different objects.

//* The JavaScript apply() Method
//The apply() method is similar to the call() method.
{
    //In this example the fullName method of person1 is applied on person1
    const person = {
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }

    const person1 = {
        firstName : "Mary",
        lastName: "Doe"
    }

    //This will return "Mary Doe":
    console.log(person.fullName.apply(person1));
}

//? The Difference Between call() and apply()
//The difference is:
/**
 * The call() method takes arguments seperately
 * The apply() method takes arguments as an array 
 */ 

//The apply() method is very handy if you want to use an array instead of an argument list.

//* The apply() Method with Arguments
//The apply() method accepts arguments in an array:
{
    const person = {
        fullName: function(city,country) {
            return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
    }

    const person1 = {
        firstName: "Sahil",
        lastName: "Patel"
    }

    console.log(person.fullName.apply(person1, ["Kyoto","Japan"]));
}

//* Simulate a Max Method on Arrays
//You can find the largest number (in a list of numbers) using the Math.max() method:
{
    console.log(Math.max(1,2,3)); //Will return 3

    //Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

    console.log(Math.max.apply(null,[1,2,3])); // will also return 3

    //The first argument (null) does not matter. it is not used in this example.
    //These example will give the same result:
    console.log(Math.max.apply(Math,[1,2,3])); //will also return 3

    console.log(Math.max.apply(" ", [1,2,3])); //Will also return 3

    console.log(Math.max.apply(0,[1,2,3])); //will also return 3
}