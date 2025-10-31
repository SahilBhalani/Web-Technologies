// Swtich Control Flow
// Based on a condition, switch selects one or more code blocks to be executed.
// Switch executes the code blocks that matches an expression.
// switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.

//Syntax
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

// The Default case does not have to be last case in a switch block:
switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
console.log(text);
console.log(new Date().getDay());

//Common Code Blocks
//Sometimes you will want different switch cases to use the same code.
//In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;

  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the weekend";
}
console.log(text);

/**
 * Switching Details
 *
 * if multiple cases matches a case value, the first case is selected.
 *
 * if no matching cases are found, the program continues to the default label.
 *
 * if no default label is found, the program continues to the statements(s) after the switch.
 */

//-------------------------------------------------------------

/**
 * Strict Comparison
 *
 * Switch uses strict comparison (===).
 *
 * The Values must be of the same type to match.
 *
 * A strict comparison can only be true if both operands are the same type.
 */

let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;

  case 1:
    text = "On";
    break;

  default:
    text = "No value found";
}
console.log(text);
