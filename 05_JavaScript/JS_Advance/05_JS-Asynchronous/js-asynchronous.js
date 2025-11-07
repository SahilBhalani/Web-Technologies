//* Asynchronous JavaScript
// Function running in parallel with other functions are called asynchronous.
// A good example is JavaScript setTimout()
{
    //The purpose of the example was to demonstrate the syntax of callback functions:
    function myDisplayer(some) {
        console.log(some);
    }

    function myCalculator(num1,num2,myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
    }

    myCalculator(5,5, myDisplayer);

    //In The real world, callbacks are most often used with asynchronous functions.
    //A typical example is JavaScript setTimeout().
}

//* Waiting for a Timeout
//When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
{
    setTimeout(myFunction, 3000);

    function myFunction() {
        console.log("I Love You !!");
    }

    //In the example above, myFunction is used as a callback
    //myFunction is passed to setTimeout() as an argument.
    //3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

    //? NOTE: When you pass a function as an argument, remember not to use paranthesis

    //Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
    setTimeout(function() { myFunction2("I Hate You!!");}, 3000);

    function myFunction2(value) {
        console.log(value);
    }

    //In the example above, function(){myFunction("I Hate You!!");} is used as a callback. it is a complete function. The complete function is passed to setTimeout() as an argument.

    //3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds
}

//* Waiting for Intervals:
//When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
{
    setInterval(myFunction, 1000);

    function myFunction() {
        let d = new Date();
        console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    }

    //In the example above, myFunction is used as a callback
    //myFunction is passed to setInterval() as an argument.
    //1000 is the number of milliseconds between intervals, so myFunction() will be called every second.
}

//* Callback Alternatives
/**
 * With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallel.
 * But, asynchronous programmers are difficult to write and difficult to debug
 * Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming in solved using Promises instead.
 */
