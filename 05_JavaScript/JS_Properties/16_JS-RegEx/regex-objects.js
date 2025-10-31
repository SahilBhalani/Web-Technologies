//* RegEx Objects
//In JavaScript, RegEx is a regular expression object with predefined properties and methods.

//* Using test()
/**
 * The test() method is a RegEx expression method.
 * It searches a string for a pattern, and return true or false, depending on the result.
 */
{
    //The following example searches a string for the character "e":
    const pattern = /e/;
    console.log(pattern.test("The best things in life are free!")); 

    //You don't have to put the regular expression in a variable first. The two line above can be shortened to one:
    console.log(/e/.test("The best things in life are free!"));

}

//* Using exec()
//The exec() method is a RegEx expression method.
//It searches a string for a specified pattern, and returns the found text as an object.
//If no match is found, it returns an empty (null) object.
{
    //The following example searches a string for the character "e":
    console.log(/e/.exec("The best things in life are free!"));
}

//* The RegEx.escape() Method
//The RegEx.escape() method returns string where characters that belongs to the regular expression syntax are escaped.
//This makes it possible to treat characters like +,*,?,^,$,(,),{,},[,],|,and \ literally , and not as part of a regular expression.
{
    //Create a regular expression that matches the string "[*]";

    //Escape a text for to use as a regular expression
    const safe = RegExp.escape("[*]");

    //Build a new regular expression
    const regex = new RegExp(safe);

    //Text to replace within
    const oldText = "[*] is a web school.";

    //Perform the replace
    const newText = oldText.replace(regex, "W3Schools");
    console.log(newText);

}