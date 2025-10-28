//* JavaScript Array Methods
/**
 * Basic Array Methods
 * 
 * ~Array_length            ~Array_delete()
 * ~Array_toString()        ~Array_concat()
 * ~Array_at()              ~Array_copyWithin()
 * ~Array_join()            ~Array_flat()
 * ~Array_pop()             ~Array_slice()
 * ~Array_push()            ~Array_splice()
 * ~Array_shift()           ~Array_toSpliced()
 * ~Array_unshift()
 */

//!============================================================
//* JavaScript Array Length
// The length property returns the length(size) of an array:
{
    const fruits = ["Banana","Orange","Apple","Mango"];
    let size = fruits.length;
    console.log(size);

    //The length property can also be used to set the length of an array:
    fruits.length = 2;
    console.log(fruits);
}

//* JavaScript Array toString()
//The toString method returns the element of an array as a comma separated string.
{
    const fruits = ["Banana","Orange","Apple","Mango"];
    let myList = fruits.toString();
    console.log(myList);

    //Every JavaScript object has a toString() method.
    //The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string
}

//* JavaScript Array at()
//ES2022 introduced the array method at()
{
    //get the third elemente of fruits using at()
    const fruits = ["Banana","Orange","Apple","Mango"];
    let fruit = fruits.at(2);
    console.log(fruit);

    //get the third element of fruits using[]:
    fruit = fruits[2];
    console.log(fruit);

    //The at() method returns an indexed element from an array.
    //The at() method returns the same as [].
}

//* JavaScript Array join()
//the join() method also joins all array elements into a string
//it behaves just like toString(), but in addition you can specify the separator:
{
    const fruits = ["Banana","Apple","Orange","Mango"];
    console.log(fruits.join(" & "));
}

//* JavaScript Array pop()
//The pop() method removes the last element from an array:
{
    const fruits = ["Banana","Apple","Orange","Mango"];
    fruits.pop();
    console.log(fruits);
    
    //The pop method returns the value that was "popped out":
    console.log(fruits.pop());
}

//* JavaScript Array push()
//The Push() Method adds a new element to the new array
{
    const fruits = ["Banana","Apple","Orange","Mango"];
    fruits.push("Kiwi");
    console.log(fruits);

    //the push() method returns the new array length
    console.log(fruits.push("Pineapple"));
}

//!==============================================================
//* Shifting Elements
//Shifting is equivalent to popping, but working on the first element instead of the last.

//*JavaScript Array shift()
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
{
    const fruits = ["Banana","Apple","Mango","Orange"];
    fruits.shift();
    console.log(fruits);

    //The shift() methods returns the value that was "shifted out"
    console.log(fruits.shift());
}

//*JavaScript Array unshift()
//The unshift() method adds a new array(at the beginning), and "unshifts" older element.
{
    const fruits = ["Banana","Apple","Mango","Orange"];
    fruits.unshift("Lemon");
    console.log(fruits);

    //The shift() methods returns the new array length
    console.log(fruits.unshift());
}

//* Changing Elements
//Array elements are accessed using their index number:
{
    const fruits = ["Banana","Orange","Apple","Mango"];
    console.log(fruits);
    fruits[0] = "Kiwi";
    console.log(fruits);
}

//* JavaScript Array length
//The length property provides an easy way to append a new  element to an array:
{
    const fruits = ["Banana","Apple","Orange","Mango"];
    console.log(fruits);
    fruits[fruits.length] = "Kiwi";
    console.log(fruits);
}

//* JavaScript Array delete()
//using delete() leaves undefined holes in the array.
//use pop() or shift() instead.
{
    const fruits = ["Banana","Apple","Mango","Orange"];
    delete fruits[0];
    console.log(fruits);
}

//!=============================================================
//* Merging Arrays (Concatenating)
//In programming languages, concatenation means joining strings end-to-end.
//Concatenation "snow" amd "ball" gives "snowball".
//Concatenating arrays means joining arrays end-to-end.

//* JavaScript Array concat()
//The concat() method creates a new array by merging existing arrays:
{
    const myGirls = ["Sabrina","Dua"];
    const myBoys = ["The Rock","Brock","Ash"];

    const myChildern = myGirls.concat(myBoys);
    console.log(myChildern);

    //? NOTE:
    //The concat() method does not change the existing arrays. it always returns a new array.
    //the concat() method can take any number of array arguments. 
    
    //Merging Three Arrays:
    const arr1 = ["Cecile","Lone"];
    const arr2 = ["Emil","Tobias","Lins"];
    const arr3 = ["Robin","Bat"];
    const myChid = arr1.concat(arr2, arr3);
    console.log(myChid);

    //The concat() method can also take strings as arguments:
    const arrr1 = ["Emil","Toby","Boty"];
    const child = arrr1.concat("Peter");
    console.log(child); 
}

//* Array copyWithin()
//The copyWithin() method copies array elements to another position in an array:
{
    //Copy to index 2, all elements from index 0:
    const fruits = ["Banana","Apple","Orange","Mango"];
    fruits.copyWithin(2,0);
    console.log(fruits);

    //copy to index 2, the elements from index 0 t0 2;
    const f2 = ["Banana","Orange","Apple","Mango","Kiwi"];
    f2.copyWithin(2,0,2);
    console.log(f2);

    //The copyWithin() method overwrites the existing values.
    //The copyWithin() method does not add items to the array.
    //The copyWithin() method does not change the length of the array
}

//!=============================================================
//* Flattening an Array
//Flattening an array is the process of reducing the dimensionality of an array.
//Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

//* JavaScript Array flat()
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
{
    const myArr = [[1,2],[3,4],[5,6]];
    const newArr = myArr.flat();
    console.log(newArr);
}

//* JavaScript Array flatMap()
//ES2019 added the Array flatMap() method to JavaScript
//The flatMap() merhod first maps all elements of an array and then creates a new array by flattening the array.
{
    const myArr = [1,2,3,4,5,6];
    const newArr = myArr.flatMap(x => [x, x * 10]);
    console.log(newArr);
}

//!==============================================================
//* Splicing and slicing Arrays
//The splice() method adds new items to an array.
//The slice() method slices out a piece of an array.

//* JavaScript Array splice()
//The splice() method can be used to add new items to an array:
{
    const fruits = ["Banana","Orange","Mango","Apple"];
    fruits.splice(2, 0,"Lemon","Kiwi");
    console.log(fruits);

    /**
     * The first parameter(2) defines the postion where a new elements should be added(spliced in).
     * The second parameter(0) defines how many element should be removed.
     * The rest of the parameters("Lemon","Kiwi")define the new elements to be added.
    */

    //The splice() method returns an array with the deleted items:
    const fruit = ["Banana","Apple","Orange","Mango"];
    fruit.splice(2,2,"Lemon","Kiwi");
    console.log(fruit);
}

//? Using splice() to Remove Elements
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
{
    const fruits = ["Banana","Orange","Apple","Mango"];
    fruits.splice(0,1);
    console.log(fruits);

    //The first parameter(0) defines the position where new elements should be added(spliced in).
    //The second parameter(1) defines how many elements should be removed.
    //The rest of the parameters are omitted. No new elements will be added.
}

//* JavaScript Array toSpliced()
//ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
//The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
{
    const months = ["Jan","Feb","Mar","Apr"];
    const spliced = months.toSpliced(0,1);
    console.log(spliced);
}

//* JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array:
{
    const fruits = ["Banana","Orange","Lemon","Apple","Mango"];
    const citrus = fruits.slice(1);
    console.log(citrus);

    //?NOTE:
    //The slice() method creates a new array.
    //The slice() method does not remove any elements from the source array.
    {
        const fruits = ['Banana',"Orange","Lemon","Apple","Mango"];
        const citrus = fruits.slice(1,3);
        console.log(citrus);
    }
}

//* Automatic toString()
/**
 * JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
 * This is always the case when you try to output an array.
 */
{
    //These two examples wil produce the same  result:
    const fruits = ["Banana","Orange","Apple","Mango"];
    console.log(fruits.toString());

    //ex2
    console.log(fruits);
}



