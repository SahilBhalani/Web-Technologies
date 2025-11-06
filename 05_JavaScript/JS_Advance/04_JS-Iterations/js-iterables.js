//* JavaScript Iterables
//An iterable is an Iterable Object
//Iterable can be iterated over with for...of loops

//* The for...of Loop
//The JavaScript for...of statement loops through the elements of an iterable object.
{
    /**
     * for (variable of iterable){
     *  /// code block to be executed
     * }
     */
}

//* Iterating
//Iterating means looping over a sequence of elements.

//* Iterating Over a String
//You can use a for...of loop to iterate over the elements of a string:
{
    //Create a String
    const name = "W3Schools";

    //Iterate over the string elements
    let text = ""
    for (const x of name) {
        text += x + "\n";
    }

    console.log(text);
}

//* Iterating Over an Array
//You can use a for...of loop to iterate over the elements of an Array:
{
    //Create a String
    const letters = ['a','b','s'];

    //Iterate over the array elements
    let text = ""
    for(const x of letters) {
        text += x + "\n";
    }

    console.log(text);

    //Ex2
    const numbers = [2,4,6,8];

    let txt = ""
    for(const y of numbers) {
        txt += y + "\n";
    }

    console.log(txt);
}

//* Iterating Over a Set
//You can use a for...of loop to iterate over the elements of a Set:
{
    //Create a new Set
    const letters = new Set(["a","b","c"]);

    //Iterate over the set elements
    let text = ""
    for(const x of letters) {
        text += x + "\n";
    }

    console.log(text);
}

//* Iterate Over a Map
//You can use a for...of loop to iterate over the elements of a Map:
{
    //Create a new Map
    const fruits = new Map([
        ["apples",500],
        ["oranges",600],
        ["mangos",690]
    ]);

    //Iterate over the map elements
    let text = "";
    for(const x of fruits){
        text += x + "\n";
    }

    console.log(text);
}

//!--------------------------------------------------------------

//* JavaScript Iterator
/**
 * The iterator protocol defines how to produce a sequence of values from an object
 * An object becomes an iterator when it implements a next() method.
 * The next() method must return an object with two properties:
 * ~ value(the next value)
 * ~ done(true or false)
 */

//?NOTE:
/**
 * Technically, iterables must implement the Symbol.iterator method.
 * In JavaScript the following are iterables:
 * ~ Strings
 * ~ Arrays
 * ~ Typed Arrays
 * ~ Sets
 * ~ Maps
 * 
 * Because their prototype objects have a Symbol.iterator method:
 */

//* Home Made Iterable
//This iterable returns never ending number: 10,20,30,40,... when the next() method is called:
{
    //Home mafe Iterables
    function myNumbers() {
        let n = 0;
        return {
            next : function() {
                n += 10;
                return {value:n, done:false}
            }
        };
    }

    //Run the Iterable
    const n = myNumbers();
    n.next(); //Returns 10
    n.next(); //Returns 20
    n.next(); //Returns 30

    console.log(n.next().value);

    //Home made iterables do not support the JavaScript for...of statement
}

//A JavaScript iterable is an object that has a Symbol.iterator
//The Symbol.iterator is a function that returns a next() function..
//An iterable can be iterated over with the code: for(const x of iterable){ }
{
    //Create an Object
    myNumbers = {};

    // Make it Iterable
    myNumbers[Symbol.iterator] = function() {
        let n = 0;
        done = false;
        return {
            next() {
                n += 10;
                if(n == 100) {done = true}
                return { value:n, done:done};
            }
        }
    }

    let text = ""
    for(const num of myNumbers){
        text += num + "\n";
    }

    console.log(text);
    //The Symbol.iterator method is called automatically by for...of
    //But we can also do it "manually":
    let iterator = myNumbers[Symbol.iterator]();

    let txt = "";
    while(true) {
        const result = iterator.next();
        if(result.done) break;
        txt += result.value + "\n"
    }

    console.log(txt);

}
