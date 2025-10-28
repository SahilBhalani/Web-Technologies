//* JavaScript Arrays
//ex.
{
    const cars = ["Saab", "Volvo", "BMW"];
}

/**
 * An Array is an object type designed for storing data collections
 * 
 * Key characteristics of JavaScript arrays are:
 *  ~ Elements: An Array is a list values, known as elements.
 *  ~ Ordered: Array elements are ordered based on their index.
 *  ~ Zero indexed: The first element is at index 0, the second at index 1, and so on.
 *  ~ Dynamic size: Arrays can grow or shrink as elements are added or removed.
 *  ~ Heterogeneous: Arrays can store elements of different data types (Numbers, Strings, Objects and other arrays).
 * 
 */

//? Why Use Arrays?
//if you have a list of items (a list of car names, for example), storing the names in single variable could look like this:
{
    let car1 = "Saab";
    let car2 = "Volvo";
    let car3 = "BMW";
}

//However, what if you want to loop through the cars and find a specific one? And what if you had 3 cars, but 300?
// The solution is array!
// An array can hold many values under a single name, and you can access the values by reffering to an index number.

//* Creating an Array
//Using an array literal is the easiest way to create a JavaScript Array.
//Syntax - const array_name = [item1, item2 , ...];

//? NOTE: It is common practice to declare arrays with const keyword.

//ex.
{
    const cars = ["Saab", "Volvo", "BMW"];

    //Spaces and line breaks are not important. A declaration can span multiple line.

    const carss = [
        "Saab",
        "Volvo",
        "BMW"
    ];

    //You can also create an empty array, and provide elements later:
    const carsss = [];
    carsss[0] = "Saab";
    carsss[1] = "Volvo";
    carsss[2] = "BMW";

    // Using the JavaScript Keyword new
    const c1 = new Array("Saab", "Volvo", "BMW");

    //?NOTE:
    /**
     * The two examples above do exactly the same.
     * there is no need to use new Array().
     * for simplicity, readability and execution speed, use the array literal instead method.
     */
}

//* Accessing Array Elements
// You access an array element by referring to the index number.
{
    const cars = ["Saab", "Volvo", "BMW"];
    let car = cars[0];
    console.log(car);

    //* Changing an Array Element
    cars[0] = "Opel"; //This statement changes the value of first element in cars:
    console.log(cars[0]);
}

//* Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma seperated) array values.
//ex.
{
    const fruits = ["Banana", "Apple", "Orange", "Mango"];
    console.log(fruits.toString());
}

//* Access the Full Array
//With JavaScript, the full array can be accessed by referring by the array name.
//ex.
{
    const cars = ["Volvo","BMW","Saab"];
    console.log(cars);
}

//* Arrays are Objects
//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
//But, JavaScript arrays are best described as arrays.
{
    //Arrays use numbers to access its "elements". In this example, person[0] retuns John:
    const person = ["John", "Doe", 47];
    console.log(person[0]);

    //Object use names to access its "members". In this example, person.firstName retuns John:
    const person2 = {firstName:"John" , lastName:"Doe", age:46};
    console.log(person2.firstName);
}

//* Array Elements Can Be Objects
// JavaScript variable can be objects. Arrays are special kinds of objects.
// Because of this, you can have variable of diffrent types in the same Array.
// You can have objects in an array. You Can have functions in an array. You can have Arrays in an Array:
{   
    // myArray[0] = Date.now; // Object in array
    // myArray[1] = myFunction;// function in array
    // myArray[2] = myCars; // array in array
}

//* Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:
{
    // cars.length // returns the number of elements
    // cars.sort() //sorts the array

    //* The length Property
    // The length property of an array returns the length of an array (the number of array elements).
    {
        const fruits = ["Banana","Orange","Apple","Mango"];
        let length = fruits.length;
        console.log(length);
        // The length property is always one more than the highest array index.
    }
}

//!==============================================================
//* Accessing the First Array Element
{
    const fruits = ["Banana","Orange","Apple","Mango"];
    let fruit = fruits[0];
    console.log(fruit);
}

//* Accesing the Last Array Element
{
    const fruits = ["Banana","Apple","Orange","Dragon Fruit"];
    let fruit = fruits[fruits.length - 1];
    console.log(fruit);
}

//* Looping Array Elements
//One Way to loop through an array, is using a for loop
{
    const fruits = ["Banana", "Orange","Red","One Piece"];
    let fLen = fruits.length;
    let text;
    for (let i = 0; i < fLen; i++) {
        text = fruits[i];
        console.log(text);
    }
}

//* Adding Array Elements
// The easiest way add a new element to an array is using the push() method:
{
    const fruits = ["Banana","Orange","Apple"];
    fruits.push("Lemon");
    console.log(fruits);

    //New elements can also be added to an array using the length property:
    fruits[fruits.length] = "Kiwi";
    console.log(fruits);

    //? WARNING: Adding elements with high indexex can create undefined "holes" in an array.

    fruits[8] = "One Piece"; // creates undefined "holes" in fruits
    console.log(fruits);
}

//!=================================================================

//* Associative Arrays
/**
 * Many programming languages support arrays with named indexes.
 * Arrays with named indexes are called associative arrays(or hashes).
 * JavaScript does not support arrays with named indexes.
 * In JavaScript, arrays always use numbered indexes.
 * 
 * ? WARNING:
 * if you use named indexes, JavaScript will redefine th array to an object.
 * After that, some array methods and properties will produce incorrect results.
 */
{
    const person = [];
    person["firstName"] = "John";
    person["lastName"] = "Doe";
    person["age"] = 47;
    console.log(person.length); // return 0
    console.log(person[0]); // return undefined
}

//* The Difference Between Arrays and Objects
//In JavaScript, arrays use numbered indexes.
//In JavaScript, objects use named indexes.

//? When to use Arrays. When to Use Objects.
/**
 * JavaScript does not support associative arrays.
 * You should use objects when you want to element names to be Strings(text).
 * You should use arrays when you want the element names to be numbers.
 */

//!==============================================================
//* JavaScript new Array()
/**
 * JavaScript has a built-in array constructor new Array().
 * But you can safely use [] instead.
 */
{
 //These two diffrent statements both create a new empty array named points
 const points = new Array();
 const point = [];

 //These two diffrent statements both create a new array containing 6 numbers:
 const points1 = new Array(40,100,1,5,25,10);
 const point1 = [40,100,1,5,25,10];
}

//The new keyword can pproduce some unexpected results:
{
    //create an array with three elements:
    const points = new Array(40,100,1);
    console.log(points);

    //create an array with two elements:
    const points1 = new Array(40,100);
    console.log(points1);

    //create an array with one element???:
    const points2 = new Array(40);
    console.log(points2);
}

//A Common Error:
{
    const points = [40] // this creates an array with one element

    //is not the same as:
    {
        const points = new Array(40); // this creates an array  with 40 undefined elements:
    }
}

//* How to Recognize an Array
// The Problem is that the JavaScript operator typeof returns "object":

//? Solution 1:
//To solve this problem ECMAScript 5 defined a new method Array.isArray():
{
    const fruits = [];
    console.log(Array.isArray(fruits));
}

//? Solution 2:
//The instanceof operator returns true if an object is created by a given constructor:
{
    const fruits = ["Banana","Apple"];
    console.log((fruits instanceof Array));
}

//!==============================================================
//* Nested Arrays and Objects
//Values in objects can be arrays, and values in arrays can be objects:
{
    const myObj = {
        name: "John",
        age: 30,
        cars: [
            {name: "Ford", models:["Fiesta", "Focus", "Mustang"]},
            {name: "BMW", models:["320", "X3", "M5 Competition"]},
            {name: "Fiat", models:["500", "Panda"]}
        ]
    }

    //To access arrays inside arrays, use a for-in-loop for each array:
    let x = "";
    for (let i in myObj.cars){
        x += myObj.cars[i].name;
        for(let j in myObj.cars[i].models){
            x += myObj.cars[i].models[j];
        }
    }
    console.log(x);
}
