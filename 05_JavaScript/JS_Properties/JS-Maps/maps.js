//* JavaScript Maps
/**
 * The Map Object
 * ~ A Map object holds key-value pairs where the keys can be any datatype.
 * ~ A Map also remembers the original insertion order of the keys.
 */

//* How to Create a Map
//You can create a JavaScript Map by:
//~ Passing an Array to new Map()
//~ Create a Map and use Map.set()

//* The new Map() Method
//You can create a Map by passing an Array to the new Map() constructor:
{
    //Create a Map
    const fruits = new Map([
        ["Apples", 500],
        ["Bananas", 300],
        ["Oranges", 200]
    ]);

    let nums = fruits.get("Apples");
    console.log("There Are " + nums + " Apples.");
}

//* The set() Method
//You can add elements to a Map with the set() method:
{
    //Create a Map
    const fruits = new Map();

    //Set Map Values
    fruits.set("Apples",500);
    fruits.set("Bsnanas",600);
    fruits.set("Ouurannge",200);

    let nums = fruits.get("Ouurannge");
    console.log("There Are " + nums + " Ourrange Juice.");

    //The set() method can also be used to change existing Map Values:
    fruits.set("Apples",200);

    //* The get() Method
    //The get() method gets the value of a key in a map:

    console.log(fruits.get("Apples")); //Returns 200

    //* Maps are Objects
    //typeof returns object:

    console.log(typeof fruits); //Returns Object

    //instance of Map returns true:
    console.log(fruits instanceof Map);
}

//* JavaScript Object vs Maps
//Difference between JavaScript OBjects and Maps:
/**
 * Object                            Map
 * Not Directly iterable             Directly iterable
 * Don't have size property          Have a size property
 * Keys must be Strings(or Symbols)  Keys can be any datatype
 * Keys aren't well ordered          Keys are ordered by insertion
 * Have default keys                 Do not have default keys
 */