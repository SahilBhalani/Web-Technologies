//* The from() Method
//The from() method creates a new typed array from any iterable object.
{
    //Create a typed array from a string:
    const myArr = Int16Array.from("1234567890");
    console.log(myArr);

    //Create a typed array from an array:
    const myArr2 = Int16Array.from([1,2,3,4,5,6,7,8,9,0]);
    console.log(myArr2);
}

//* The of() Method
//The of() method creates a new typed array from a number of arguments:
{
    const myArr = Int32Array.of(1,2,3,4,5,6);
    console.log(myArr);
}

//* The constructor.name Property
//The constructor.name property returns the name (type) of a typed array.
{
    const myArr = new Int32Array(10);
    console.log(myArr.constructor.name);
}

//* The BYTES_PER_ELEMENT Property
// BYTES_PER_ELEMENT returns the number of bytes used to store each array element:
{
    const myArr = new BigUint64Array(10);
    console.log(myArr.BYTES_PER_ELEMENT);
}

/**
 * * Common Array Methods
 * 
 * Typed Arrays share many methods with Standard Arrays:
 * 
 * ~Iteration: forEach(), map(), filter(), reduce(), reduceRight(), every(), some(), find(), findIndex(), findLast(), findLastIndex().
 * 
 * ~Searching: includes(), indexOf(), lastIndexOf().
 * 
 * ~Manipulation: at(), copyWithin(), fill(), reverse(), set(), slice(), sort(), subarray().
 * 
 * ~ Coversion: join(), toLocaleString(), toString().
 * 
 * ~ Non-mutating methods: toReversed(), toSorted(), with()
 */

//* The fill() Method
//The fill() method changes all elements in a typed array to a value:
{
    //fill all array elements with a value:
    const myArr = new Int32Array(10);
    myArr.fill(200);
    console.log(myArr);

    //The fill() method takes two optional arguments: start index and end index:
    myArr.fill(300,0,5);
    console.log(myArr);
}

//* The find() Method
//The find() method returns the first element that satisfies a test:
{
    const myArr = Int16Array.from([10,20,15,25,30,35,40,45,50]);
    console.log(myArr.find((x) => x > 18));
}

//* The some() Method
//The some() method returns true if an element for which a provided function returns true:
{
    const myArr = Int16Array.from([10,20,15,25,30,35,40,45,50]);
    console.log(myArr.some((x) => x > 18));
}
