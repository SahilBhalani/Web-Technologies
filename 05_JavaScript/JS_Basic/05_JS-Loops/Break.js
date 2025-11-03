/***
 * The Break Statement
 *
 * The break statement "jumps out" of loops and switches,
 * the break statement terminated the execution of a loop or a switch statement.
 *
 */

// Break in Loops
// When break is encountered in a loop, the loop terminates immidiately.
//The program control is transfered to the statements following the loop.
//No more loop iterations are executed.
//ex
{
  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i === 8) {
      break;
    }
    text += console.log("The number is " + i);
  }
}

// Break in a Switch
// In a switch statement, a break statement will exit the switch block after a matching case is executed. Without Break, execution would "Fall Through" to subsequent case blocks.

//============================================================

/**
 * JavaScript Labels
 *
 * ~ A Label provides a name for a statement, or a block of statement, allowing statements to be referenced to, for program flow control, particularly in loops.
 *
 * -----------------------------------------------------------
 *
 * A label is an identifier followed by a color(:)
 *
 * ~ labelname: statement;
 *
 * -----------------------------------------------------------
 *
 * A label precedes a statement or a block of code
 *
 * ~ labelname: {
 *      statement
 * }
 * 
 * ------------------------------------------------------------
 * Labeled Break
 * 
 * ~ break labelname;
 */

//ex.

{
    let text = ""
    loop1: for (let j = 1; j < 5; j++){
        loop2: for (let i = 1; i < 5; i++){
            if(i === 3) {break loop1;}
            text += console.log("Loop1 " + i);
        }
    }
}

{
    let text = ""
    loop1: for (let j = 1; j < 5; j++){
        loop2: for (let i = 1; i < 5; i++){
            if(i === 3) {break loop2;}
            text += console.log("Loop2 " + i);
        }
    }
}

{
    let text = "";
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    list:{
        text += console.log(cars[0]);
        text += console.log(cars[1]);
        break list;
        text += console.log(cars[2]);
        text += console.log(cars[3]);

    }
}
