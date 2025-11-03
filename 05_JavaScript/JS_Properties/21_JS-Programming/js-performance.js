//* JavaScript Performance
//TODO: How to speed up your JavaScript code.

//* Reduce Activity in Loops
/**
 * Loops are often used in programming/
 * Each statement in a loop, including the for statement is executed for each iteration of the loop.
 * Statement or assgnments that can be places outside the loop will make the loop run faster
 */
{
    //Better Code
    let l = Array.length;
    for(let i =  0; i < l ; i++){
        //block of code
    }
    //The bad code accesses the length property of an array each time the loop is iterated.
    //The better code accesses the length property outside the loop and makes the loop run faster.
}

//* Reduce DOM Access
//Accessing the HTML DOM is very slow, comparing to other JavaScript statements.
//if you except to access to a DOM element several times, access it once, and use ot as a local variable
{
    const obj = document.getElementById('demo');
    obj.innerHTML = "Hello";
}
 

//* Reduce DOM Size
//Keep the number of elements in the HTML DOM small.
//This will  always improve page loading, and speed up rendering (page display), especially on smaller devices.
//Every attempt to search the DOM (Like getElementsByTagName) will benifit from a smaller DOM.

//* Avoid Unnecessary Variables
//Don't create new variables if you don't plan to save values.
{
    //Often you can replace code like this:
    let fullname = firstName + " " + lastName;
    document.getElementById('id').innerHTML = fullname;

    //With this:
    document.getElementById('id').innerHTML = firstName + " " + lastName;
}

//* Avoid Using with
//Avoid using the with keyword. It has a nagative effect on speed. it also clutters up JavaScript scopes.
//The with keyword is not allowed in strict mode.