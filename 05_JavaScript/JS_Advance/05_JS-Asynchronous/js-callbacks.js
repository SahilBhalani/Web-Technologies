//* JavaScript Callbacks
/**
 * "I will call back later!"
 * 
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run another function has finished 
 */ 

//* Function Sequence
//JavaScript functions are executed in the sequence they are called. not in a sequence they are defined.
{
    //This example will display "Hello", but end up with "Goodbye" because the functions are called in that order:
    function myDisplayer(some){
        console.log(some);
    }

    function myFirst() {
        myDisplayer("Hello");
    } 

    function mySecond() {
        myDisplayer("Goodbye");
    }

    myFirst();
    mySecond();
}

//* Sequence Control
/**
 * Sometimes you would like to have better control over when to execute a function
 * Suppose you want to do a calculation, then display the result
 * You could call a calculator function(myCalculator), save the result and then call another function(myDisplayer) to display the result
 */
{
    function myDisplayer(some) {
        console.log(some);
    }

    function myCalculator(num1,num2) {
        let sum = num1 + num2;
        return sum;
    }

    let result = myCalculator(5,5);
    myDisplayer(result);
}
{
    //Or you could call a function (myCalculator), and let the calculator function call the display function(myDisplayer)
    function myDisplayer(some) {
        console.log(some);
    }

    function myCalculator(num1,num2) {
        let sum = num1 + num2;
        myDisplayer(sum);
    }

    myCalculator(4,4);
}
//The problem with the first example above, is that you have to call two function to display the result.
//The problem with the second example, is that you cannot prevent the calculator function from displaying the result.
//Now it is time to bring in a callback

//* JavaScript Callbacks
//A callback is a function passed as an argument to another function
//Using a callback, you could call the calculator function( myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:
{
    function myDisplayer(some) {
        console.log(some);
    }

    function myCalculator(num1 , num2 , myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
    }

    myCalculator(10,10,myDisplayer);

    //In the example above, myDisplayer is a called a callback function.

    //It is passed to myCalculator() as an argument.

    //?NOTE: When you pass a function as an argument, rememeber not to use paranthesis.
}
{
    //Ex2

    //Create an Array
    const myNumbers = [4,1,-20,-7,5,9,-6];

    //Call removeNeg with a callback
    const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

    //display Result
    console.log(posNumbers);
    

    //Keep only positive numbers
    function removeNeg(numbers, callback) {
        const myArray = [];
        for (const x of numbers) {
            if (callback(x)) {
                myArray.push(x)
            }
        }
        return myArray;
    }

    //In the example above, (x) => x >= 0 is a callback function
    //It is passes removeNeg() as an argument
}

//* When to Use a Callback?
//Where callbacks really shine are in asynchronous functions, where one function has to wait for another function( like waiting for a file to load).
