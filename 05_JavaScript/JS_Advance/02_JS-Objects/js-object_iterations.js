//* JavaScript Object Iterations
/**
 * * General Methods
 * ~ Copies properties from a source object to a target object
 * Object.assign(target, source)
 *
 * ~ Createe an object from an existing object
 * Object.create(object)
 *
 * ~ Returns an Array of the key/Vlaue pairs of an object
 * Object.entries(object)
 *
 * ~ Creates an object from a list of keys/value
 * Object.fromEntries()
 *
 * ~ Returns an Array of the keys of an object
 * Object.keys(object)
 *
 * ~ Returns an Array of the properties values of an object
 * Object.values(object)
 *
 * ~ Groups object elements according to a function
 * Object.groupBy(object, callback)
 */

//* JavaScript Object.assign()
//The Object.assign() method copies properties from one or more source objects to a target object.
{
  //Create Target Object
  const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "Blue",
  };

  //Create Source Object
  const person2 = { firstName: "Anne", lastName: "Smith" };

  //Assign Source to Target
  Object.assign(person1, person2);

  console.log(person1);
}

//* JavaScript Object.entries()
//ECMAScript 2017 added the Object.entries() method to objects.
//Object.entries() returns an array of the key/value pairs in an object:
{
  const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "Blue",
  };

  let text = Object.entries(person1);
  console.log(text);

  //Object.entries() makes it simpl to use objects in loops:
  const fruits = { Bananas: 300, Oranges: 200, Apples: 900 };

  let txt = "";
  for (let [fruit, value] of Object.entries(fruits)) {
    txt += fruit + ": " + value + "\n";
  }
  console.log(txt);

  //Object.entries() also makes it simple to convert object to maps:
  const myMap = new Map(Object.entries(fruits));
  console.log(myMap);
}

//* JavaScript Object.fromEntries()
//The fromEntries() method creates an object from a list of key/value pairs.
{
  const fruits = [
    ["apples", 300],
    ["pears", 500],
    ["bananas", 900],
  ];

  const myObj = Object.fromEntries(fruits);
  console.log(myObj);
}

//* JavaScript Object.values()
// Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:
{
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };

  let text = Object.values(person);
  console.log(text);
}

//* JavaScript Object.groupBy()
/**
 * ES2024 added the Object.groupBy() method to JavaScript
 * The Object.groupBy() method groups element of an object according to string values returned from a callback function.
 * The Object.groupBy() method does not change the original object.
 */
{
  //Create an Array
  const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 },
  ];

  //callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }

  // Group by Quantity
  const result = Object.groupBy(fruits, myCallback);
  console.log(result);
}

//* Object.groupBy() vs Map.groupBy()
//The difference between Object.groupBy() and Map.groupBy() is:
//Object.groupBy() groups elements into a JavaScript object.
//Map.groupBy() groups elements into a Map object.

//*JavaScript Object.keys()
//The Object.keys() method returns an array with the keys of an object.
{
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };

  //Get the Keys
  const keys = Object.keys(person);
  console.log(keys);
}

//* JavaScript for..in Loop
//The JavaScript for..in statement loops through the properties of an object.
{
    //Syntax
    for(let variable in Object){
        //Code to be executed
    }

    //The block of code inside of the for..in loop will be executed once for each property.

    //Looping through the properties of an object:
    const person = {
        fname: "John",
        lname: "Doe",
        age: 25
    };

    let txt = ""
    for(let x in person){
        txt += person[x] + " " ;
    }
    console.log(txt);
}
