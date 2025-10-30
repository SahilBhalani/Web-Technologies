//* The new Map() Method
//You can create a map by passing an array to the new Map() constructor:
{
    //Create a Map
    const fruits = new Map([
        ["Apples",200],
        ["Bananas",500],
        ["Pineapple",600]
    ]);

    //* Map.get()
    //You get the value of a key in a map eith get() method
    console.log(fruits.get("Apples"));

    //* Map.set()
    //Create a Map
    fruits.set("Peaches",300);
    fruits.set("Pears",400);
    fruits.set("Dragon Fruits",200);

    //The set() method can also be used to change existing map values:
    fruits.set("Dragon Fruits",800);

    //* Map.size
    //The size property returns the number of elements in a map:
    console.log(fruits.size);

    //* Map.delete()
    //The delete() method removes a map element:
    fruits.delete("Pears");

    //* Map.clear()
    //The clear() method removes all the elements from a map:
    // fruits.clear() 

    //* Map.has()
    //The has() method returns true if a key exists in a map:
    console.log(fruits.has("Dragon Fruits"));

    //* Map.forEach()
    //The forEach() methd invokes a callback for each key/value pair in a map:
    let text = "";
    fruits.forEach(function(value ,key){
        text += key + " = " + value + "\n";
    })
    console.log(text);

    //* Map.entries()
    //The entries() method returns an iterator object with the key[key,value] in a map:
    text = "";
    for(const x of fruits.entries()){
        text += x + " " + "\n";
    }
    console.log(text);
    

    //* Map.keys()
    //The keys() method return an iterator object with the keys in a map:
    text = "";
    for(const x of fruits.keys()){
        text += x + " " + "\n"
    }
    console.log(text);

    //* Map.values()
    //The values() method returns an iterator object with the values in a map:
    text = "";
    for(const x of fruits.values()) {
        text += x + " ";
    }
    console.log(text);

    //You can use the values() method to sum the values in a map;
    //Sum all values
    let total = 0;
    for (const x of fruits.values()){
        total += x;
    }
    console.log(total);
} 

//* Object as Keys
// Being able to use objects as keys is an important Map feature.
{
    // Create Objects
    const apples = {name: 'Apples'};
    const bananas = {name: 'Bananas'};
    const mangos = {name: 'Mangos'};

    //Create a Map
    const fruits = new Map();

    //Add new elements to The map
    fruits.set(apples,200);
    fruits.set(bananas,300);
    fruits.set(mangos,500);

    //?Remember: The key is an object(apples), not a string ("Apples");
    console.log(fruits.get("apples")); // Returns undefined
}

//* JavaScript Map.groupBy()
//ES2024 added the Map.groupBy() method to JavaScript:
//The Map.groupBy() method groups elements of an object according to string values returned from a callback function.
//The Map.groupBy() method does not change the original object.
{
    //Create an Array
    const fruits = [
        {name:"apples", quantity:300},
        {name:"bananas", quantity:500},
        {name:"mangos", quantity:200},
        {name:"kiwi", quantity:150}
    ];

    //callback function to Group Elements
    function myCallback({quantity}){
        return quantity > 200 ? "ok" : "low";
    }

    //GroupBy Quantity
    const result = Map.groupBy(fruits, myCallback);

    //Display Results
    let text = "These Fruits are Ok:\n";
    for(let x of result.get("ok")){
        text += x.name + " " + x.quantity + "\n";
    }
    text += "These Fruits are Low:\n";
    for(let x of result.get("low")){
        text += x.name + " " + x.quantity + "\n";
    }
    console.log(text);
}

//* Object.groupBy() vs Map.groupBy()
//Object.groupBy() groups elements into a JavaScript object.
//Map.groupBy() groups elements into a Map object.