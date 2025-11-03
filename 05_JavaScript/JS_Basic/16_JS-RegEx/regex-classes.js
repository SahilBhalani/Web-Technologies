//* RegEx Character Classes
//Character Classes are characters enclosed in square brackets[].
{
    //Match Digits
    const pattern = /[0-9]/;
}

//* JavaScript Regex Character Classes
/**
 * Class    Description
 * [a]      Matches the character between the brackets
 * [^a]     Matches all characters NOT between the brackets
 * [abc]    Matches all characters between the brackets
 * [^abc]   Matches all characters NOT between the brackets
 * [a-z]    Matches all characters in the range from a to z
 * [^a-z]   Matches all characters NOT in the range from a to z
 * [0-9]    Matches all characters in the range from 0 to 9 
 * [^0-9]    Matches all characters in the range from 0 to 9 
 */
{
    //A global search for the characters "H" and "W" in a string:
    let text = "Hello World!";
    const pattern = /[HW]/g;

    let result = text.match(pattern);
    console.log(result);

    //A global search for the upper case characters "A" to "Z" in a string:
    text = "This is W3School";
    const pattern2 = /[A-Z]/g;

    result = text.match(pattern2);
    console.log(result);

    //A Global search for the charactes "1","2","3" and "4" in a string:
    text = "123456789";
    const p3 = /[1234]/g;

    result = text.match(p3);
    console.log(result);

    //A global search for the characters "1" to "4" in a string:
    text = "123456789";
    const p4 = /[1-4]/g;

    result = text.match(p4);
    console.log(result);
}