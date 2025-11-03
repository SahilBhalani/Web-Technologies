//* The Weakmap Object
//A JavaScript WeakMap is a collection of key/value pairs where the keys must be objects.
//A WeakMap holds weak references to its keys.
{
  //Create a WeakMap
  let myMap = new WeakMap();

  //Create an Object
  let myObj = { fName: "John", lName: "Doe" };

  //Set a WeakMap value
  myMap.set(myObj, "player");

  //Get the Weakmap value
  let type = myMap.get(myObj);
  console.log(type);
}

//*Garbage Collection
/**
 * JavaScript employs a memory management mechanism known as Garbage Collection.
 *
 * The primary functions are:
 * ~Ensuring efficient use of memory resources
 * ~Reclaim memory occupied by variable that are no longer in use
 * ~Preventing memory leaks
 */

//* Weak References
/**
 * Unlike a regular Map, a WeakMap does not prevent its keys from being garbage collected.
 * If a key(an object) has no references to it in a program, it becomes eligible for garbage collection.
 * When the key is garbage collected, its key-value pair is removed from the WeakMap.
 */
{
  let myMap = new WeakMap();
  let myObj = { fName: "John", lname: "Doe" };

  myMap.set(myObj, "secret");
  myObj = null;
  //now myObj( and its value) in myMap can be garbage collected
}

//* Keys Must Be Objects
/**
 * Primitive values cannot be used as keys in a WeakMap.
 * The keys must be objects or non-registered symbols.
 * This restrictions is tied to the garbage collection mechanism; primitves are not garbage collected in the same way as objects.
 */

//* Tracking Objects
//The entries in a WeakMap are weakly held: if the object key becomes unreachable, its mapping is removed automatically.

//This is perfect for tracking data about objects without preventing garbage collection.
{
  //TODO:Tracking Visitors
  let text = "";

  //Create a WeakMap to store visit counts
  const visitsCounts = new WeakMap();

  //Create Visitor Objects
  const John = { name: "John", age: 40 };
  const Paul = { name: "Paul", age: 41 };
  const Ringo = { name: "Ringo", age: 42 };
  const George = { name: "George", age: 43 };

  //Track visits
  track(Paul);
  track(Ringo);
  track(Paul);
  track(Paul);
  track(John);
  track(George);

  //Function to track visitors
  function track(visitor){
    let count = visitsCounts.get(visitor) || 0;
    count++;
    visitsCounts.set(visitor, count);
    text += visitor.name + ", age " + visitor.age + ", has visited " + count + " Time(s)\n";
  }

  console.log(text);

  //* Automatic Cleanup
  //If You remove all references to a visitor object:

  //John = null;

  //The entry for John is now removed from the WeakMap
}

//* Not Iterable
//WeakMaps are Not enumerable
//You cannot iterate over the keys and values with for loops, forEach() or keys().
//You cannot access the size

//* Limited Methods
//WeakMap provides a limited set of  methods:
/**
 * new WeakMap()    Create a new WeakMap object
 * get(key)         Gets the value for a key in a WeakMap
 * set(key,value)   Sets the value for a key in a WeakMap
 * delete(key)      Removes an element specified by key
 * has(key)         Returns true if a key exist in WeakMap
 */

//* Weak Map Secret Data
{
    //Create WeakMap
    const myMap = new WeakMap();

    //Private Fields Simulation
    class User {
        constructor(name) {
            myMap.set(this, {secret:"Hidden data"});
            this.name = name;
        }

        getSecret(){
            return myMap.get(this).secret;
        }
    }

    const user1 = new User("John")
    secret = user1.getSecret();
    console.log(secret);

    //Explained
    /**
     * A WeakMap does not allow iteration.
     * Outside code can not "discover" what object are stored inside a WeakMap.
     * To get the secret, you need the this reference that was used in the constructor.
     * External code has access to user1 and myMap, but not to the this reference inside myMap unless you explicitly expose it, like via getSecret(), the secret value is unreachable.
     */
}

//* Privacy
//WeakMap was intentionally designed for privacy: you can get,set,has and delete using an object key, but not inspect what is inside.
//This was a great tool for simulating private properties in JavaScript classes(before #private fields were added to the language).




