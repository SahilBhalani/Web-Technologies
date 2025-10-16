// The JavaScript if Statement
// Use the Javascript if Statement to execute a block of code when a condition is true.
//ex.

// if(condition){
//     // block of code be executed if the condition is true
// }

//Ex2
if (new Date().getHours() < 18){
    greeting = "Good day"
    console.log(greeting);
}

//Ex3 
let age = 18;
let text = "You Can not drive";

if(age >= 18){
    text = "You Can Drive"
}

console.log(text);

//-------------------------------------------

//Nested If
//You can use an if statement inside another if statement

let _age = 16;
let _country = "USA";
let _text = "You Can Not Drive!!!"

if(_country == "USA"){
    if(_age >= 16){
        _text = "You Can Drive!!!"
    }
}
console.log(_text);

//Nested if statements can make your code more complex
// A better solution is to use the logical AND operator

let agee = 17;
let countryy = "India";
let textt = "You Can Not Run!!!"

if(countryy == "India" && agee >=16){
    textt = "You Can Run!!!"
}
console.log(textt);