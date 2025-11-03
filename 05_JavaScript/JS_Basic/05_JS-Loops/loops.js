/**
 * JavaScript Loops
 *
 * ~Loops are handy, if you want to run the same code over and over again, each time with a different value.
 */

// The For Loop
// The For Statement creates a loop with 3 optional expressions:
// for(expr1; expr2; expr){
//     // code block to be executed
// }

// Expr1 is executed one time before the execution of the code block.
// expr2 defines the condition for executing the code block.
// expr3 is executed every time the code block has been executed.
{
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // Loop Scope
  let i = 5;
  for (i = 0; i < 10; i++) {
    // some code
    console.log(i);
  }
  console.log(i);
  // here i is 10
}

//==============================================================

//The While Loop
//The while loop loops through a block of code as long as a specified condition is true.

//syntax
// while (condition) {
//     // code block to be executed
// }
{
  let text = "";
  let i = 0;
  while (i < 10) {
    text += console.log("The Number is " + i);
    i++;
  }
}

//===============================================================

// The Do-While Loop
// The Do-While loop is a varient of while loop.
// The Do-while loop will execute the code block once, before cheking if the condition is true, then it will repeat the loop as long as the condition is true.

//Syntax
// do {
//     // code block to be executed
// } while (condition);

// NOTE: The do while runs at least once, even if the condition is false from the start.
// This is because the code block is executed before the condition is tested:

{
    let text = "";
    let i = 1;
    do {
        text += console.log("The Number is " + i);
        i++;
        
    } while (i < 10);
}