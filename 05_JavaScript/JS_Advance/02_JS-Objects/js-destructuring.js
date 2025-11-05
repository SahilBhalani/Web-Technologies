//* JavaScript Destructuring

//* Destructuring Assignment Syntax
{
    //The destructuring assignment syntax unpack object properties into variables:
   // let {firstName, lastName} = person;

    //It can also unpack arrays and any other iterables:
    // let [firstname, lastname] = person;
}

//* Object Destructuring
{
    //Create an Object
    const person = {
        firstName: "John",
        lastName: "Doe",
        age:50
    };

    // Destructuring
    let {firstName, lastName} = person;
    console.log(firstName + " " + lastName);
}

{
    //The Order Of properties does not matter:
    const person = {
        firstName: "John",
        lastName: "Doe",
        age:50
    };

    //Destructuring
    let {lastName, firstName} = person;

    //Display primitive values
    console.log(firstName + " " + lastName);
}

//Destructuring is not destructive.
//Desctructuring does not change the original object.

//* Object Default Values
//For Potentially missing properties we can set default values:
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        age:50
    };

    //Destructuring
    let {firstName,lastName, country = "UK"} = person;
    console.log(firstName + " " + lastName + " " + country);
}

//* Object Property Alias
{
    const person = {
        firstName: "John",
        lastName:"Doe",
        age:50
    };

    //Destructuring
    let {lastName : name} = person;
    console.log(name);
}

//* String Destructuring
//One use for destructuring is unpacking string characters.
{
    //Create a string
    let name = "W3schools";

    // Destructuring
    let [a1,a2,a3,a4,a5] = name;

    //Display Value
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
    console.log(a5);

    //? NOTE: Destructuring can be used with any iterables.
}

//* Array Destructuring
//We can pick up array variables into our own variable
{
    //create an array
    const fruits = ["Bananas","Oranges","Apples","Mangos"];

    // Destructuring
    let [fruit1,fruit2] = fruits;
    console.log(fruit1);
    console.log(fruit2);
}

//* Skipping Array Values
//We can skip array values using two or more commas:
{
    //Create an Array
    const fruits = ["Bananas","Oranges","Apples","Mangos"];

    //Destructuring
    let[fruit1,,,fruit2] = fruits;

    console.log(fruit1);
    console.log(fruit2);
}

//* Array Position Values
//We can pick up values from specific index location of an array:
{
    //Create an Array
    const fruits = ["Bananas","Oranges","Apples","Mangos"];

    //Destructuring
    let {[0]:fruit1,[1]:fruit2} = fruits;
    console.log(fruit1);
    console.log(fruit2);
}

//* The Rest Property
//You can end a destructuring syntax with a rest property
//The syntax will store all remaining values into a new array:
{
    //Create an Array
    const numbers = [10,20,30,40,50,60,70];

    //Destructuring
    const [a,b, ...rest] = numbers;

    //Display the values
    console.log("A is " + a + " B is " + b + " The Rest is " + rest);

}

//* Destructuring Maps
{
    // Create a Map
    const fruits = new Map([
        ["apples",500],
        ["bananas",300],
        ["mangos",200]
    ]);

    //Destructuring
    let text = "";
    for(const [key,value] of fruits){
        text += key + " is " + value + "\n";
    }

    console.log(text);
}

//* Swapping JavaScript Variables
//You can swap the values of two variables using a destructuring assignment:
{
    let firstName = "John";
    let lastName = "Doe";

    //Destructuring
    [firstName, lastName] = [lastName, firstName];
    console.log(firstName + " " + lastName);
}
