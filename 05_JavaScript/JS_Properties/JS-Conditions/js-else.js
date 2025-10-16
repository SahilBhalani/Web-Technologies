//The else statement
// Use the else statement to specify a block of code to be executed if a condition is false.
// ex.

// if(condition){
//     // Block of code to be executed if the condition is true
// } else {
//     // Block of code to be executed if the condition is false
// }

// Ex2:
if (new Date().getHours() < 18) {
  greeting = "Good Day!";
} else {
  greeting = "Good Evening!";
}
console.log(greeting);

// The else if statement
// USe the else if statement to specify a new condition if the first is false.
//Syntax

// if (condition1) {
//   //Block of code
// } else if (condition2) {
//   //Block of code
// } else {
//   //Block of code
// }

//ex.
if(new Date().getTime() < 10){
    greeting = "Good Morning";
} else if (new Date().getTime() < 20){
    greeting = "Good Day";
} else {
    greeting = "Good Evening";
}
console.log(greeting);


//Ex.
let text;
if (Math.random() < 0.5){
    text = "Visit W3Schools";
} else {
    text = "Visit WWF";
}
console.log(text);