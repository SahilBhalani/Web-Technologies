//* JavaScript Array Sort
/**
 * Alphabetic Sort             Numeric Sort
 * ~Array_sort()               ~Numeric_Sort 
 * ~Array_reverse()            ~Random_Sort    
 * ~Array_toSorted()           ~Math.min()
 * ~Array_toReversed()         ~Math.max()
 * ~Sorting_Objects()          ~Home made Min()
 * `                           ~Home made Max() 
 */

//* Sorting an Array
//The sort() method sorts an array alphabetically:
{
    const fruits = ["Banana","Apple","Mango","Cherry"];
    console.log(fruits.sort());
}

//* Reversing an Array
//The reverse() method reverses the element in an array:
{
    const fruits = ["Banana","Apple","Mango","Cherry"];
    console.log(fruits.reverse());
}

//By Combining sort() and reverse(), you can sort an array in descending order:
{
    const fruits = ["Banana","Apple","Mango","Cherry"];
    fruits.sort();
    fruits.reverse();
    console.log(fruits);
}

//* JavaScript Array toSorted() Method
//ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.
//The diffrence between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last methods alters the original array.
{
    const months = ["Jan","Feb","Mar","Apr"];
    const sorted = months.toSorted();
    console.log(sorted);
}

//* JavaScript Array toReversed() Method
//ES2023 added the toReversed() method as a safe way to sort an array without altering the original array.
//The diffrence between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last methods alters the original array.
{
    const months = ["Jan","Feb","Mar","Apr"];
    const reversed = months.toReversed();
    console.log(reversed);
}

//!==============================================================
//* Numeric Sort
/**
 * By default, the sort() function sorts values as strings
 * this works well for strings("Apple" Comes before "Banana").
 * If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
 * Because of this, the sort() method will produce incorrect result when sorting numbers.
 * You can fix this by providing a compare function:
 */
{
    const points = [40,100,1,5,25,10];
    points.sort(function(a,b){return a - b});
    console.log(points);

    //Use the same trick to sort an array descending:
    points.sort(function(a,b){return b - a});
    console.log(points);
}

//?The Compare Function
//The purpose of the compare function is to define an alternative sort order.
//The compare function should return a nagative, zero, or positive value,depending on the arguments:
{
    function func(a,b){return a - b};

    //When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned(Nagative,zero,positive) value.

    //If the result is nagative, a is sorted before b.
    //If the result is positive, b is sorted before a.
    //If the result is 0, no changes are done with the sort order of the two values.
    
    //? EXAMPLE:
    //The comapare function compares all the values on the array, two values at a time(a,b).
    //When comparing 40 and 100, the sort() method calls the compare function(40,100).
    //The function calculates 40-100 (a-b), and since the result is nagative(-60), the sort function will sort 40 as a value lower than 100.
    
    const points = [40,100,1,5,25,10];
    
    //sort alphabetically
    points.sort()
    console.log(points);

    //sort Numerically
    points.sort(function(a,b){return a - b});
    console.log(points);
}

//* Sorting an Array in Random Order
//Using a sort function, like explained above, you can sort an numeric array in random.order
{
    const points = [40,100,1,5,25,10];
    points.sort(function(){return 0.5 - Math.random()})
    console.log(points);
}

//* The Fisher Yates Method
/**
 * The points.sort() method in the example above is not accurate. it will favor some numebers over others.
 * The most popular correct method, is called the fisher yates shuffle, and was introduced in data science as early as 1938!
 * In JavaScript the method can be translated to this:
 */
{
    const points = [40,100,1,5,25,10];
    for(let i = points.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1))
        let k = points[i];
        points[i] = points[j];
        points[j] = k; 
    }
    console.log(points);
}

//!--------------------------------------------------------------

//* Find the Lowest (or Highest) Array Value
// There are no built-in functions for finding the max or min value in an array.
// To find the lowest or highest value you have 3 options:
/**
 * Sort the array and read the first or last element
 * Use Math.min() or Math.max()
 * Write a home made function
 */

//* Find Min or MAx with sort()
//After you have sorted an array, you can use the index to obtain the highest and lowest values.
{
    //Sort Ascending:
    const points = [40,100,1,5,25,10];
    points.sort(function(a,b){return a - b});
    console.log("Lowest Value is " + points[0]);
    console.log("Highest Value is " + points[points.length - 1]);

    //Sort Descending
    points.sort(function(a,b){return b - a});
       console.log("Highest Value is " + points[0]);
       console.log("Lowest Value is " + points[points.length - 1]);

       //? NOTE: Sorting a whole array is a very inefficient method if you only want to find the highest(or lowest) value.
}

//* Using Math.min() on an Array
//You can use Math.min.apply to find the lowest number in an array:
{
    const points = [40,100,1,5,25,10];
    console.log(myArraymin(points));


    function myArraymin(arr){
        return Math.min.apply(null,arr);
    }

    //Math.min.apply(null, [1,2,3]) is equivalent to Math.min(1,2,3).
}

//* Using Math.max() on an Array
//You can use Math.max.apply to find the highest number in an array:
{
    const points = [40,100,1,5,25,10];
    console.log(myArraymax(points));

    function myArraymax(arr){
        return Math.max.apply(null, arr);
    }
    //Math.max.apply(null, [1,2,3]) is equivalent to Math.max(1,2,3).
}

//!--------------------------------------------------------------

//* JavaScript Array Minimum Method
//There is no built-in function for finding the lowest value in a JavaScript array.
//The fastest code to find the lowest number is to use a "Home Made" method.
//The function loops through an array comparing each value with the lowest value found:
{
    const points = [40,100,2,5,25,10];
    console.log(myArraymin(points));

    function myArraymin(arr){
        let len = arr.length;
        let min = Infinity;
        while(len--){
            if(arr[len] < min){
                min = arr[len];
            }
        }
        return min;
    }
}

//* JavaScript Array Maximum Method
//There is no built-in function for finding the highest value in a JavaScript array.
//The Fastest code to find the highest number is to use a "Home Made"  method.
//This function loops through an array comparing each value with the highest value found:
{
    const points = [40,200,2,5,25,10];
    console.log(myArraymax(points));

    function myArraymax(arr){
        let len = arr.length;
        let max = -Infinity;
        while(len--){
            if(arr[len] > max){
                max = arr[len];
            }
        }
        return max;
    }
}

//* Sorting Object Arrays
//JavaScript arrays often contain objects:
{
    const cars = [
        { type:"Volvo",year:2016},
        { type:"Saab",year:2001},
        { type:"BMW",year:2010},
    ];

    //even if objects have properties of diffrent data types, the sort() method can be used to sort the array

    cars.sort(function(a,b){return a.year - b.year});
    console.log(cars);

    //Comparing string properties is a little more complex:
    cars.sort(function(a,b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if(x < y) { return -1;}
        if(x > y) {return 1;}
        return 0;
    });
    console.log(cars);
}
