//* JavaScript Object Protection
/**
 * * Object Protection Methods
 * 
 * ~ Prevents re-assignment
 * const car = {type:"Fiat", model:"500", color:"white"};
 * 
 * ~ Prevents adding object properties
 * Object.preventExtensions(object)
 * 
 * ~ Returns true if properties can be added to an object
 * Object.isExtensible(object)
 * 
 * ~ Preventing adding and deleting object properties
 * Object.seal(object)
 * 
 * ~ Returns true if object is sealed
 * Object.isSealed(object)
 * 
 * ~ Prevents any changes to an object
 * Object.freeze(object)
 * 
 * ~ Returns true if object is frozen
 * Object.isFrozen(object)
 */

//* Using Const
//The Most common way to protect an object from being changed is by using the const keyword.
//With const you can not re-assign the object, but you can still change the value of a propertuy, delete a property or create a new property.

//* JavaScript Object.preventExtensions()
//The Object.preventExtentions() method prevents adding properties to an object.
{
    "use strict";
    //Create Object
    const person = {firstName:"John", lastName:"Doe"};

    //Prevent Extensions
    Object.preventExtensions(person);

    //This will throw an error
    let text = "";
    try {
        person.nationality = "English";
    } catch (err) {
        text = err;
    }

    console.log(text);
    console.log(person.nationality);

    //Since arrays are object, arrays can be prevented from extensions too:
    // Create Array
    const fruits = ["Banana","Orange","Apple","Mango"];
    Object.preventExtensions(fruits);

    //This will throw an error:
    let txt = "";
    try{
    fruits.push("kiwi");
    }
    catch( err ){
        txt = err;
    }

    console.log(txt);
}

//* JavaScript Object.isExtensible()
//You can use Object.isExtensible() to check if an object is extensible
//The Object.isExtensible() returns true if an object is extensible
{
    //Create Object
    const person = {firstName: "John", lastName: "Doe"};

    //Prevent Extensions
    Object.preventExtensions(person);

    //This will return false
    let answer = Object.isExtensible(person);
    console.log(answer);

    //Create Array
    const fruits = ["Banana","Orange","Apple","Mango"];

    Object.preventExtensions(fruits);

    let ans = Object.isExtensible(fruits);
    console.log(ans);
}

//* JavaScript Object.seal()
/**
 * The Object.seal() method prevents additions or deletion of new properties
 * The Object.seal() method makes existing properties non-configurable
 * The Object.isSealed() method can be used to check if an object is sealed
 * ? NOTE: The Object.seal() will fail silently in non-strict mode and throw a TypeError in strict mode.
 */
{
    "use strict"
    //Create object
    const person2 = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };

    // Seal Object
    Object.seal(person2)

    //This will throw an error
    let text = "";
    try{
    delete person2.age;
    }
    catch(err){
        text = err;
    }
    console.log(text);

    //Since arrays are object, arrays can be sealed too;
    const fruits =["Bananas","Mangos","Apples","Kiwis"];
    Object.seal(fruits);

    //This will throw an error
    let txt = "";
    try{
    fruits.push("peach");
    }
    catch(err){
        txt = err;
    }

    console.log(txt);
}

//* JavaScript Object.isSealed()
// The Object.isSealed() method can be used to check if an object is sealed.
//The Object.isSealed() returns true if an object is sealed.
{
    //create Object
    const person = {firstName:"saii", lastName:"patel"};

    //seal object
    Object.seal(person);

    //This will return true
    let answer = Object.isSealed(person);
    console.log(answer);
}

//* JavaScript Object.freeze()
//The Object.freeze() method prevents any changes to an object
//Frozen objects are read-only
//No modification, addition or deletion of properties are allowed.
//? Note: The Object.freeze() method will fail silently in non-strict mode and throw a TypeError in strict mode.
{
    "use strict"
    // Create Object

    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };

    //Freeze Object
    Object.freeze(person)

    // This will throw an error
    let text;
    try{
    person.age = 51;
    text = Object.values(person);
    }
    catch(err) {
        text = err;
    }

    console.log(text);
}

//* JavaScript Object.isFrozen()
/**
 * The Object.isFrozen() method can be used to check if an object is frozen
 * The Object.isFrozen() returns true if an object is frozen.
 */
{
    // Create Object
    const person = {firstName:"John", lastName:"Doe"};

    //Freeze Object
    Object.freeze(person);

    //This will return true
    let answer = Object.isFrozen(person);
    console.log(answer);
}

//Create Array
const fruits = ["Banana","Orange","Apple","Mango"];
Object.freeze(fruits);

//This will return true:
let ans = Object.isFrozen(fruits);
console.log(ans);