/**
 * String Templates Has Many Names
 * 
 * ~String Templates
 * ~Template Strings
 * ~Template Literals
 */

//Back-Tics Syntax
//Template Strings uss Back-ticks(``) rahter than the quotes("") to define a string:

//Ex.
{
    let text = "Hello World!"
}

//Quotes Inside Strings
//Templates Strings allow both single and double quotes inside a string:
{
    let textt = `He's often called "Johny`;
}

//Multiline Strings
//Template Strings allow multiple strings:
{
    let text = `The Quick
                Brown Fox
                Jumps Over
                the lazy dog`;
}

//===============================================================

/***               
 * 
 *  Interpolation
 * 
 * Template Strings allow variables in strings.
 * 
 * template strings provide an easy way to interpolate variables in strings.
 */

//Syntax
// ${...}

//Ex.
{
    let fName = "John";
    let lName = "Doe";

    let text = `Welcome ${fName}, ${lName}!`;
    console.log(text);
}

//Expression Substitution
//Template Strings allow interpolation of expressions in string:

//Ex.
{
    let price = 10;
    let VAT = 0.25;

    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
    console.log(total);
}
