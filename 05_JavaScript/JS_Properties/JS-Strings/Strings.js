/**
 * JavaScript Strings
 *
 * ~ Strings are for storing text.
 *
 * ~ Strings are written with quotes.
 */

//Using Quotes
// A JavaScript String is zero or more characters written inside quotes.
{
  let text = "John Doe";
  console.log(text);

  //You can use single or double quotes

  let carName1 = "Volvo XC60"; // Double Quotes
  let carName2 = "Volvo XC90"; // Single Quotes

  //NOTE: Strings Created With single or double quotes work the same.
  //There is no diffrence between the two.
}

//============================================================

//Quotes Inside Quotes
// You can use quotes inside a string, as long as they dot match the quotes surroundings the string
{
  let answer1 = "It's alright";
  let answer2 = "He is called 'Johnny'";
  let answer3 = 'He is called "Johnny"';
}

//==============================================================

//Escape Characteers 
// Because strings must be written within quotes, JAvascript will misunderstand this string:

  //let text = "We are the so-called" "Vikings" From the north";

  // the string will be chopped to "We are the so-called"
  // to Solve this problem, you can use an backlash escape character.
  // the backlash escape character (\) turns special character into string characters.


//Ex.
// \" insert a double quote in a string
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);

// \' insert a single quote in a string:
let text2 = 'It \'s alright.'
console.log(text2);

// \\ inserts a backlash in a string
let text3 = "The character \\ is called backlash.";


//===============================================================
//Breaking Long Lines
//For readability, programmers often like to avoid long code lines.

//A safe way to break up a statement is after an operator:

{
  // document.getElementById('demo').innerHTML = 
  // "Hello Dolly!";
}

//A safe way to break up a string is by using string addition.

{
  // document.getElementById('demo').innerHTML = "Hello" +
  // "Dolly!";
}
/***
 * 
 * Template Strings
 * 
 * Template were introduced with ES6.
 * Templates are strings enclosed in backticks (`This is a template string')
 * 
 * Template allow multiline strings
 * 
 */

//Ex.
{
  let text = 
  `The Quick
  Brown Fox
  Jumps Over
  The Lazy Dog`;
}

//==============================================================
//JavaScript String as Objects
//Normally, JavaScript Strings are premitive values, created from literals:

{
  let x = "John";

  //But strings can also be defined as objects with the keyword new.

  let y = new String("John");

  //Do not create String objects.

  //The new keyword complicates the code and slows down execution speed.

  //String objects can produce unexpected results:
}

//When using the == operator, x and y are equal:
{
  let x = "John"
  let y = new String("John");
  let z = (x == y);
  console.log(z);
}

//When using the === operator, x and y are equal:
{
  let x = "John"
  let y = new String("John");
  let z = (x === y);
  console.log(z);
}

//NOTE : COMPARING TWO JAVASCRIPT OBJECTS "ALWAYS" RETURNS false.




