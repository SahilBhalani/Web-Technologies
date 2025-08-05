// For Printing any value
console.log("Inside Intro!");

// how to run js code -> dynamically typed language
// variable Intialization

let varName; // varName is variable name
// varName is currently undefined -> default value of any variable is undefined

// Value Assigning
varName = 10;
console.log(varName); // printing Integer variable

varName = "I'm String";
console.log(varName); // Printing String variable, in Js we only have strings

varName = 10.1;
console.log(varName); // printing Float Value

varName = true;
console.log(varName); // Printing Boolean Value

/**
 * how to know the current type of a value that a variable is having.
 * There only numbers , There only strings
 * What types of values it can have.
 *
 *  * Primitive ->
 *      ->number , strings, booleans, null ,undefined
 *      ->bigInt, symbols
 *
 *  * Non-primitive->
 *          -> functions , arrays and objects
 * ***/

varName = 10;
varName = false;
varName = 10.1;
varName = "hello";
varName = "h";
console.log(typeof varName); // to finding type of variable

/**
 *
 * conditional -> if else and switch cases
 * **/

// Basic If/Else Example
let number = 11;
if (number % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}


// If/Elseif Ladder Example

let day = "sat";
if(day=="mon" || day=="Tue" || day=="Wed"){
    console.log("Work");
}else if(day=="sat"){
    console.log("Low Work");
}else{
    console.log("Sleep");
}


// Switch Case Example

let fruit = "mango";

switch(fruit){

    case "apple":
        console.log("This is a Fruit");
        break;

    case "pinapple":
        console.log("this is a fruit");
        break;

    case "mango":
        console.log("this is a fruit");
        break;

    default:
        console.log("Unknown Fruit");
}  

/**** 
 * loops : -> while , for loop , do while, for each
 *
 * ****/

for(let num=1;num<=10;num++){
    console.log("number is:", num);
}

/***
 * functions -> resuable block of code create
 *
 * ***/

console.log("Hello Sahil");

function fn(){
    console.log("Hello Sahil 2");
}
console.log("Hello Again!")
fn();


// function With Parameters
function add(a, b){
    console.log("a:",a);
    console.log("b:",b);

    let d = a + b;

    return d;
}

let result = add(10,20);
console.log("result :" , result);

/**
 * strings : how strings work in js 
 * concatenation : appending a value to staring
 * */

let str1 = "I am String";
let str2 = 'I am String';
let str3 = `I am Also String
            But Can Be Multiple Line`;

console.log(str1);
console.log(str2);
console.log(str3);

//Concatination Of String Using Function
function greet(firstNameVar){
    console.log("hi " + firstNameVar + " !");

    console.log(`hi ${firstNameVar} !` );
}

let firstName = "Sahil";
greet(firstName);