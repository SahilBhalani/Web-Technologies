//* JavaScript Control Flow
/**
 * Control flow is the order in which statements are executed in a program
 * By default, JavaScript runs code from top to bottom and left to right.
 * Control flow statement let you change that order, based on conditions ,loops or keywords.
 */

//* Default Flow
//Default flow executes code sequentially (from top to bottom/ from left to right).
{
  //flow sequentially: let x -> let y -> let z.
  let x = 5;
  let y = 6;
  let z = x + y;
  console.log(z);
}

//* Conditional Control Flow
//Conditions let you make decision using:
// if , if...else, switch, ternary(? :)
{
  //Flow branches depending on conditions:
  let age = 18;
  let text = "Unknown";

  if (age >= 18) {
    text = "Adult";
  } else {
    text = "Minor";
  }

  console.log("The group is " + text);
}

//* Loops (Repetition Control Flow)
/**
 * Loops let you run run code multiple times using:
 * ~ for
 * ~ while
 * ~ do...while
 */
{
  //Repeat flow until a condition (i < 5) is false.
  let text = "";
  for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "\n";
  }
  console.log(text);
}

//* Jump Statements
/**
 * Jump statements let you change the flow abruptly using:
 *
 * ~ break - exits a loop or switch
 * ~ continue - skips the current loop iteration
 * ~ return - exits from a function
 * ~ throw - jumps to error handling
 */
{
  // Terminate(break) the loop when the loop counter(i) is 3:
  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) {
      break;
    }
    text += "The number is " + i + "\n";
  }
  console.log(text);
}

//* Function Flow
//Function are callable and reusable code blocks:
{
  function myFunction(p1, p2) {
    return p1 * p2;
  }
}

//* JavaScript Is Single-Threaded
/**
 * JavaScript runs on a single thread
 * It can only ddo one think at a time
 * Every task has to wait for the previous one to finish
 * This can freeze an application during slow operations (like file requests)
 */

//!--------------------------------------------------------------

//* Asynchronous Flow
/**
 * JavaScript Asynchronous Flow refers to how JavaScript handles tasks that time to complete, like reading files, or waiting for user input, without blocking the execution of other code.
 * To prevent blocking, Javascript can use Asynchronous programming.
 * This allows certain operations to run in the background, and their results are handled later, when they are ready
 *
 * * Asynchronous Patterns
 * ~ Events
 * ~ Callbacks
 * ~ Promises
 * ~ Async / Await
 */

//* JavaScript Events
//Events are actions or occurances that happen in the browser, often triggered by user interactions (like clicks, keypresses, or form submissions) or by the browser itself (like page loading or resizing)
{
  // <button onclick = "displayDate()"> The time is? </button>
}

//* JavaScript Callbacks
//A callback is a function that is passed as an argument to another function, and is intented to be executed at a later point in time, typically when a specific event occurs or an asynchronous operation completes.
//In a example below, myDisplayer is a called a callback function
//It is passed yo myCalculator() as an argument
{
  function myDisplayer(some) {
    console.log(some);
  }

  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

  myCalculator(5, 5, myDisplayer);
}

//* JavaScript Promises
//Promises represent a value that may be available now, later, or never.
{
  fetch("https://api.example.com");
  then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

//* JavaScript Async/Await
//Async/ Await is a modern, cleaner way to handle asynchronous code.
//It makes asynchronous code look synchronous and easier to read.
{
    async function getData() {
        try {
            const res = await fetch("https://api.example.com");
            const data = await res.json();
            console.log(data);
        } catch  (err){
            console.log(err);
        }
    }
}
