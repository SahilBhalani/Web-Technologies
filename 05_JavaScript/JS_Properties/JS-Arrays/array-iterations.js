//* Array Iteration Methods
/**
 * Array iteration methods operate on every array item
 *
 * ~Array_forEach                  ~Array_some()
 * ~Array_map()                    ~Array_from()
 * ~Array_flatMap()                ~Array_keys()
 * ~Array_filter()                 ~Array_entries()
 * ~Array_reduce()                 ~Array_with()
 * ~Array_reduceRight()            ~Array_Spread(...)
 * ~Array_every()                  ~Array_Rest(...)
 */

//* JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element.
{
  const numbers = [45, 4, 9, 16, 25];
  let txt = "";
  numbers.forEach(myFunction);
  console.log(txt);

  function myFunction(value, index, array) {
    txt += value + " ";
  }

  //? NOTE That the function takes 3 arguments:
  //~ The item value
  //~ The item index
  //~ The array itself

  //The example above use only the value parameter. The example can be rewritten to:

  {
    const numbers = [45, 4, 9, 16, 25];
    let txt = "";
    numbers.forEach(myFunction);
    console.log(txt);

    function myFunction(value) {
      txt += value + " ";
    }
  }
}

//* JavaScript Array map()
/**
 * The map() method creates a new array by performing a function on each array element.
 * The map() method does not execute the function for array elements without values.
 * The map() method does not change the original array.
 */
{
    // The Example multiplies each array value by 2
    const num1 = [45,4,9,16,25];
    const num2 = num1.map(myFunction);
    console.log(num2);

    function myFunction(value, index, array){
        return value * 2;
    }

    //When a callback function uses only the value parameter, the index and array parameters can be omitted.
}

//* JavaScript Array flatMap()
//ES2019 added the Array flatmap() method to JavaScript.
//The flatmap() method first maps all elements of an array, and then creates a new array by flattening the array.
{
    const myArr = [1,2,3,4,5];
    const newArr = myArr.flatMap((x) => x * 2);
    console.log(newArr);
}

//* JavaScript Array filter()
//The filter() method creates a new array with array elements that pass a test.
{
    //This example creates a new array from elements with a value larger than 18:

    const numbers = [45,4,9,16,25];
    const over18 = numbers.filter(myFunction);
    console.log(over18);

    function myFunction(value, index, array){
        return value > 18;
    }

    //In the example above, the callback function does not use the index and array parameters, so they can be omitted:
    
}

//* JavaScript Array reduce()
// The reduce() method runs a function n each array element to produce a single value.
//The reduce() method works from left-right in the array.
//The reduce() method does not reduce the original array.
{
    //This example finds the sum of all number in an array:
    const nums = [45,4,9,16,25];
    let sum = nums.reduce(myFunction);
    console.log(sum);

    function myFunction(total, value, index, array){
        return total + value;
    }

    //Since the example above does not use the index and array parameters, they can be ommited.


    //The reduce() method can accept an initial value:
    const nums2 = [45,4,9,16,25];
    let sum2 = nums2.reduce(myFunc, 100);
    console.log(sum2);

    function myFunc(total, value){
        return total + value;
    }
}

//* JavaScript Array reduceRight()
// The reduceRight() method runs a function on each array element to produce a single value.
//The reduceRight() works from right-to-left in the array. See also reduce().
{
    //The example finds the sum of all numbers in an array:
    const numbers = [45,4,9,16,25];
    const sum = numbers.reduceRight(myFunction);
    console.log(sum);

    function myFunction(total,value,index,array){
        return total + value;
    }

    //The example above does not use the index and array parameters, so they can be omitted.
}

//* JavaScript Array every()
//The every() method checks if all array values pass a test.
{
    //This example checks if all array values are larger than 18.
    const numbers = [45,4,9,16,25,34];
    let allOver18 = numbers.every(myFunction);
    console.log(allOver18);

    function myFunction(value, index, array){
        return value > 18;
    }

    //When a callback function uses the first parameter only (value), the other parameters can be omitted.
}

//* JavaScript Array some()
//The some() method checks if some array value pass a test.
{
    //This example checks if some array values are larger than 18
    const numbers = [45,4,9,16,25];
    let someOver18 = numbers.some(myFunction);
    console.log(someOver18);

    function myFunction(value, index, array){
        return value > 18;
    }
}

//* JavaScript Array.from()
//The Array.from() method returns an Array object from:
//~ Any iterable object
//~ Any object with a length property
{
    //Create an Array from a String:
    let text = "ABCDEFG";
    let newArr = Array.from(text);
    console.log(newArr);

    //Array.from() has an optional parameter which allows you to execute a function on each element of the new array:

    {
        const myNums  = [1,2,3,4];
        const myArr = Array.from(myNums, (x) => x * 2);
        console.log(myArr);
    }
}

//* JavaScript Array keys()
//The Array.keys() method returns an Array Iterator object with the keys of an array
{
    //Create an Array Iterator Object, containing the keys of the array:
    const fruits = ["Banana","Orange","Apple","Mango"];
    const keys = fruits.keys();
    
    let text = ""
    for(let x of keys){
        text += x + " ";
    }

    console.log(text);
}

//* JavaScript Array entries()
{
    //Create an Array Iterator, and then iterate over the key/value pairs:
    const fruits = ["Banana","Orange","Apple","Mango"];
    const f = fruits.entries();

    for(let x of f){
        console.log(x + " ");
    }

    //The entries() method does not change the original array.
}

//* JavaScript Array with() Method
//ES2023 added the Array with() method as a safe way to update elements in an array without altering th e original array.
{
    const months = ["Januar","Februar","Mar","April"];
    const myMonths = months.with(2 , "March");
    console.log(myMonths);
}

//* JavaScript Array Spread()
//The ... operator expands an array into individual elements.
//This can be used join arrays:
{
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];

    const arr3 = [...arr1, ...arr2];
    console.log(arr3);

    //In the example above, ...arr1 expands arr1 into single elements, ...arr2 expands arr2 into single elements, and arr3 is constructed using ...arr1 and ...arr2.

    //ex2
    const q1 = ["Jan","Feb","Mar"];
    const q2 = ["Apr","May","Jun"];
    const q3 = ["Jul","Aug","Sep"];
    const q4 = ["Oct","Nov","Dec"];

    const year = [...q1,...q2,...q3,...q4];
    console.log(year);

    //The spread operator (...) can be used to copy an array:
    const arrr1 = [1,2,3];
    const arrr2 = [...arrr1];
    console.log(arrr2);

    //The spread operator(...) can be used to pass arguments to a function:
    const numbers = [23,55,21,87,56];
    let minVal = Math.min(...numbers);
    let maxVal = Math.max(...numbers);
    console.log("Min Value: " + minVal);
    console.log("Max Value: " + maxVal);
}

//* JavaScript Array Rest(...)
//The rest operator(...) allow us to destruct an array and collect the leftovers:
{
    //ex1
    let a, rest;
    const arr1 = [1,2,3,4,5,6,7,8];
    [a, ...rest] = arr1;
    console.log(rest);

    //ex2
    let c, d, restt;
    const arr2 = [1,2,3,4,5,6,7,8];
    [c, d, ...restt] = arr2;
    console.log(restt);
}

