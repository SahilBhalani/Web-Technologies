//* RegEx Assertions
/**
 * Assertions matches Boundaries and Lookarounds:
 * String Boundaries And Word Boundaries.
 * Lookarounds: Lookaheads and Lookbehinds
 */
{
    //Match beginning of string
    const pattern = /^W3Schools/;

    //Match ending of string
    const pattern2 = /W3Schools$/;
}

//* JavaScript Regex Assertion
/**
 * Syntax   Name             Description
 * ^        String Boundary  Matches the beginning of a string
 * $        String Boundary  Matches the end of a string
 * \b       Word Boundary    Matches the beginning of end of a word
 * \B       Word Boundary    Matches NOT the biginning or end of a word
 * (?=...)  Lookahead        Matches the subsequent string
 * (?!...)  Lookahead        Matches the subsequent string
 * (?<=...) Lookahead        Matches the previous string
 * (?<!...) Lookahead        Matches NOT the previous string
 */

//!============================================================
//* RegEx ^ Metacharacter
//The ^ metacharacter matches the beginning of a string
{
     // Test if a string starts with W3Schools:
     let text = "W3Schools Tutorial";
     const pattern = /^W3Schools/;

     let result = pattern.test(text);
     console.log(result); //true

     //ex2
     text = "Hello W3Schools";
     const pattern2 = /^W3Schools/;

     result = pattern.test(text);
     console.log(result); //false
}

//* RegEx $ Metacharacter
//The $ metacharacter matches the end of a string.
{
    //Test if a string ends with W3Schools.
    const pattern = /W3Schools$/;
    let text = "Hello W3Schools";

    let result = pattern.test(text); 
    console.log(result);

    //Ex2
    text = "W3Schools tutorial";
    const pattern2 = /W3Schools$/;

    result = pattern.test(text);
    console.log(result);

}

//* The \b Metacharacter
//The \b metacharacter matches the beginning of a word or the end of a word.
{
    //Search for the characters "LO" at the beginning of a word:
    let text = "HELLO, LOOK AT YOU!";

    let result = text.search(/\bLO/);
    console.log(result);

    //Search for the characters "LO" at the end of a word:
    let text2 = "HELLO, LOOK AT YOU!";
    result = text2.search(/LO\b/);
    console.log(result);
}

//* RegExp Lookahead x(?=y)
// x(?=y) matches "x" if "x" is followed by "y".
{
 //Match "W3Schools" if "W3Schools" is followed by "Tutorials".
 let text = "W3Schools Tutorials";
 let pattern = /W3Schools(?= Tutorials)/;

 let result = pattern.test(text);
 console.log(result);
}

//? Nagative Lookahead x(?!y)
//x(?!y) matches "x" if "x" is NOT followed by "y".
{
    let text = "W3Schools Tutorials";

    let pattern = /W3Schools(?! Tutorials)/;
    let result = pattern.test(text);
    console.log(result);
}

//* RegEx Lookbehind (?<=y)x
// (?<=y)x matches "x" if "x" is preceded by "y"
{
    //Match "W3Schools" if "W3Schools" is preceded by "Hello "
    let text = "Hello W3Schools";
    let pattern = /(?<=Hello )W3Schools/;

    let result = pattern.test(text);
    console.log(result);
}

//? Negative Lookbehind (?<!y)x
// (?<!y)x matches "x" only if "x" is NOT preceded by "y".
{
    let text = "Hello W3Schools";

    let pattern = /(?<!Hello )W3Schools/;
    let result = pattern.test(text);
    console.log(result);
}

//!=============================================================
//* RegEx Groups
/**
 * Char             Descriptions
 * (x)              Matches x and saves it
 * (?<n>x)          Matches x and labels it n
 * (?flag:x)        Enables flag(s) for x
 * (?flag-flag:x)   Disables flag(s) for x
 */

//* RegEx Capturing Groups (x)
{
    let text = "Haha, haha, haha.";
    const pattern = /(haha)+/;

    let result = text.match(pattern);
    console.log(result);

    //(haha) captures a group of characters
    //(haha) + matches zero or more occurences of the group
    //text.match() returns an array of result
    //match.groups() returns an array of matches
}

//* Named Capturing Groups (?<n>)
{
    const text = "Name: John Doe";

    //using named capturing groups
    const regex = /(?<firstName>\w+) (?<lastName>\w+)/;
    const match = text.match(regex);

    let fName = match.groups.firstName;
    console.log(fName);

    let lName = match.groups.lastName;
    console.log(lName);

    // (?<firstName>\w+) captures a word and labels it firstName
    // (?<latName>\w+) does the same for lastName
    // text.match() returns an array with a groups property
    // match.groups() returns an object:
    // {firstName:"John",lastName:"Doe"}

    //When using capturing groups, the string method match() and the RegExp method exec(), return a match object with a groups property. This Property holds the names and the values of the groups.
}

//* RegEx Group Modifiers (?flag)
//The (?flag) syntax is a group modifier (inline flag modifier).
//It allows for modifying flags in a part of a pattern, rather than to the entire pattern.
//(?flags:pattern) enables the flags only for the pattern in the group.
{
    //The i flag is only enabled for the W3Schools part of the pattern..
    let text = "W3Schools tutorials.";
    const pattern = /(?i:W3Schools) tutorials/;

    let result = pattern.test(text);
    console.log(result);

    //The i flag only enabled for the W3Schools part of the pattern
    text = "W3Schools Tutorials.";
    const pattern2 = /(?i:W3Schools) tutorials/;

    result = pattern2.test(text);
    console.log(result);
}
