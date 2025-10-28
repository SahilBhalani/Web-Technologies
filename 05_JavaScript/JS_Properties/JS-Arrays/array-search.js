//* JavaScript Array Search
/**
 * Array Search Methods
 * 
 * ~Array_indexOf()             ~Array_find()
 * ~Array_lastIndexOf()         ~Array_findIndex()
 * ~Array_includes()            ~Array_findLast()
 * ~Array_findLastIndex()
 */

//* JavaScript Array indexOf()
//The indexOf() method  searches an array for an element value and returns its position.
{
    //Search an array for the item "Apple":
    const fruits = ["Apple","Orange","Apple","Mango"];
    let position = fruits.indexOf("Apple") + 1;
    console.log(position); 

    //Syntax: array.indexOf(item, start)
    //item = required. The item to search for.
    //start = Optional. Where to start the search. Nagative value will start at the given position counting from the end, and search to the end

    /**
     * Array.indexOf() returns -1 if the item is not found.
     * If the item is present more than once, it returns the position of the first occurrence.
     */
}

//* JavaScript Array lastIndexOf()
//Array.lastIndexOf() is the same as Array.IndexOf(), but returns the position of the last occurrence of the specified element.
{
     //Search an array for the item "Apple":
    const fruits = ["Apple","Orange","Apple","Mango"];
    let position = fruits.lastIndexOf("Apple") + 1;
    console.log(position); 

    //Syntax: array.lastIndexOf(item, start)
}

//* JavaScript Array includes()
//ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
{
    const fruits = ["Banana","Apple","Mango","Orange"];
    console.log(fruits.includes("Mango")); // is true

    //Syntax: array.includes(search-item)
    //Array.includes() allows to check for NaN values. Unlike Array.indexOf().
}

//!==============================================================
//* JavaScript Array find()
//The find() method returns the value of the first array element that passes a test function.
{
    //This example finds(returns the value of) the first elements that is larger than 18:

    const numbers = [4,9,16,25,29];
    let first = numbers.find(myFunction);
    console.log(first);

    function myFunction(value,index,array){
        return value > 18;
    }

    //?Note that the function takes 3 arguments:
    //~ The item value
    //~ The item index
    //~ The array itself
}

//* JavaScript Array findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
{
    //This example find the index of the first element that is larger than 18
    const nums = [4,9,16,25,29];
    let first = nums.findIndex(myFunction);
    console.log(first);

    function myFunction(value,index,array){
        return value > 18;
    }
}

//* JavaScript Array findLast() Method
//The findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
{
    const temp = [27,28,30,40,42,35,30];
    let high = temp.findLast(x => x > 40);
    console.log(high);
}

//* JavaScript Array findLastIndex() Method
//The findLastIndex() method finds the index of the last element that satisfies a condition.
{
    const temp = [27,28,30,40,42,35,30];
    let pos = temp.findLastIndex(x => x > 40);
    console.log(pos);
}