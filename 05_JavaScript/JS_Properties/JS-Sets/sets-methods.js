//* JavaScript Set Methods
/**
 * Basic Set Methods
 * 
 * new Set()
 * add()
 * clear()
 * delete()
 * entries()
 * forEach()
 * has()
 * keys()
 * values()
 * 
 * * Set Properties
 * size
 */

//* The new Set() Method
//Pass an array to the new Set() constructor:
{
    //create a new Set
    const letters = new Set(["a","b","c"]);
}

//* The add() Method
{
    const letters = new Set();
    letters.add("a");
    letters.add("b");
    letters.add("c");

    //If you add equal elements, only the first will be saved
}

//? NOTE:
/**
 * The Primary feature of Set objects is that they only store unique value.
 * If an attempt is made to add an element that already exists in the set, the add() method will have no effect, and the set will remain unchanged.
 */

//* The size Property
{
    const mySet = new Set(["a","b","c"]);
    console.log(mySet.size);
}

//* Listing Set Elements
//You can list all Set elements(Values) with a for..of loop:
{
    const letters = new Set(["a","b","c"]);
    let text = "";
    for (const x of letters){
        text += x + " ";
    }
    console.log(text);
}

//* The has() Method
//The has() method returns true if a specified value  exists in a set.
{
    const letters = new Set(["a","b","c"]);

    console.log(letters.has("a"));
    console.log(letters.has("d"));

}

//* The forEach() Method
//The forEach() method invokes a function for each Set element:
{
    const letters = new Set(["a","b","c"]);

    let text = "";
    letters.forEach(function(value){
        text += value + " ";
    })
    console.log(text);
}

//* The values() Method
//The values() method return an iterator object with the values in a Set:
{
    const letters = new Set(["A","B","C"]);

    const myIterator = letters.values();

    //ex1
    let text = "";
    for (const entry of myIterator){
        text += entry + " ";
    }
    console.log(text);

    //ex2
    let txt = "";
    for(const entr of letters.values()){
        txt += entr + " ";
    }
    console.log(txt);
}

//* The keys() Method
//The keys() method returns an Iterator object with the values in a set.
//NOTE: A set has no keys, so keys() returns the same as values()
//This Makes Sets compatible with Maps.
{
    const letters = new Set(["a","b","c"]);
    const myIterator = letters.keys()

    let text = "";
    for(const x of myIterator){
        text += x + " ";
    }
    console.log(text);
}

//* The entries() Method
// The entries() method is supposedd to return a [key,value] pair from an object.
//A set has no keys, so the entries() method returns[value,value].
//This makes Sets compatible with Maps.
{
    const letters = new Set(["a","b","c"]);
    const myIterator = letters.entries();

    let text = "";
    for (const entry of myIterator){
        text += entry + " ";
    }
    console.log(text);
}