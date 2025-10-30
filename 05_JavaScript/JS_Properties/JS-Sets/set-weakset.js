//* JavaScript WeakSet
/**
 * The WeakSet Object
 * A JavaScript WeakSet is a collection of values where the values must be objects.
 * A WeakSet holds weak references to its values.
 */

{
    //Create a WeakSet
    let mySet =  new WeakSet();

    //Create an Object
    let myObj = {fname:"john", lName:"Doe"};

    //Add The object
    mySet.add(myObj);

    //Do I have myObj in the mySet?
    let answer = mySet.has(myObj);
    console.log(answer);

    //Delete the Object
    mySet.delete(myObj);

    //Do I have myObj in the mySet?
    answer = mySet.has(myObj);
    console.log(answer);
}

//* Garbage Collection
//JavaScript employs a memory management mechanism known as Garbage Collection.
//The priamary function are:
//~ Ensuring efficient use of memory resources.
//~ Reclaim memory occupied by variables that are no longer in use.
//~ Preventing memory leaks

//* Weak References 
//Unlike a regular Set, a WeakSet does not prevent its values from being garbage collected.
//If a value (an Object) has no references in a program, it becomes eligible for garbage collection.
//When the value is garbage collected, its is removed from the WeakSet.
{
    //Create a WeakSet
    let mySet = new WeakSet();

    //Create an Object
    let myObj = {fName:"John",lName:"Doe"};

    //Add the Object
    mySet.add(myObj);

    //Remove the object from memory
    myObj = null;

    ///Now myObj in mySet will be garbage collected
}

//* Values Must Be Objects
//Premitive values cannot be values in a WeakSet.
//The values must be objects.
//The restriction is tied to the garbage collection mechanism; premitives are not garbage collected in the same way as objects.

//* Tracking Objects
// A Weakset is similar to a Set, but it only stores objects, and holds them weakly. If there are no other references to an object, it gets garbage collected automatically.
//This makes it handy for tracking objects without storing extra data (like counts).

{
    //? Tracking Visitors
    
    let text = ""

    //create a WeakSet to track persons
    const persons = new WeakSet();

    //Visitor Objects
    const John = {name:"John", age:40};
    const Paul = {name:"Paul", age:41};
    const Ringo = {name:"Ringo", age:42};
    const George = {name:"George", age:43};

    //track visits
    track(Paul);
    track(Ringo);
    track(Paul);
    track(John);
    track(George);
    track(George);
    track(George);

    //Function to track visitors
    function track(visitors){
        if(persons.has(visitors)){
            text += visitors.name + " is visiting again.\n";
        } else {
            persons.add(visitors);
            text += visitors.name + ", age " + visitors.age + ", is visiting for the first time.\n";
        }
    }

    console.log(text);

    //* Automatic Cleanup
    //If you remove all references to a visitor object:
    John = null;
    //The entry for John is now removed from the Weakmap(Persons).

}

//* Not Iterable
//WeakSets are not enumarable.
//You cannot iterate over the values with for loops, forEach(), or values()
//You cannot access the size. WeakSets have no size property.

//* Limited Methods
//A WeakSet in minimal, memory-safe, and purpose-built for tracking objects privately and efficiently.

//WeakSet provides a limited set of methods:
/**
 * new WeakSet()        Creates a new WeakSet object
 * add(object)          Adds an Object to a WeakSet
 * delete(object)       Removes a WeakSet object
 * has(object)          Returns true if an object exists in a WeakSet
 */

//WeakSet does not have
/**
 * ~ A Size property
 * ~ A Spread operator(...)
 * ~ A clear() method
 * ~ Any logic methods(union, difference, intersection)
 * ~ Any iteration methods(forEach,keys,values,entries)
 * The above is by design: Objects may disappear in garbage collection, it makes no sense to iterate over or count them.
 */