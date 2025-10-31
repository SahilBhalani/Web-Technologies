//* Regular Expressions
/**
 * A Regular Expression is a sequence of characters that forms a search pattern.
 * Regex is a common shorthand for regular expression.
 * JavaScript RegExp is an Object for handling Regular Expressions.
 * 
 * RegEx are be used for:
 * ~Text searching
 * ~Text replacing
 * ~Text validation
*/
{
    //Do a case-insensitive search for "w3Schools" in a string:
    let text = "Visit W3Schools";
    let n = text.search(/w3schools/i);
    console.log(n);

    // /w3schools/i is a regular expression
    // w3schools is a pattern (to be used in search).
    // i is a modifier (modifies the search to be case-insensitive).

    //Syntax:
    // /pattern/modifier flags;
}

//!=============================================================
//*Using String Methods
//Regular expressions are often used with the string methods
/**
 * Method           Description
 * match(regex)     Returns an Array of results
 * replace(regex)   Returns a new String
 * search(regex)    Return the index of the first match
 */

//* Using String match()
//Search for "W3schools" in a string:
{
    let text = "Visit W3Schools";
    let n = text.match(/W3Schools/);
    console.log(n);
}

//* Using String replace()
//Replace Microsoft with W3Schools in a string:
{
let text = "Visit Microsoft!";
let result = text.replace(/Microsoft/i, "W3Schools");
console.log(result);
}

//* Using String search()
//Search for "W3Schools" in a string:
{
 let text = "Visit W3Schools";
 let n = text.search(/W3Schools/);
 console.log(n);
}

//* RegExp Alternation (OR)
//In a regular expression an alteration is denoted with a vertical line character |.
//An alteration matches any of the alternatives separated with |. 
{
    let text = "Black, white, red, green, blue, yellow.";
    let result = text.match(/red|green|blue/g);
    console.log(result);
}

//!--------------------------------------------------------------
//* JavaScript Regex Flags
/**
 * /pattern/flags
 * 
 * Regular expression flags are parameters that can modify how a pattern is used, such as making it case-sensitive or global
 * 
 * These are the most common:
 * 
 * Flag     Description
 * /g       Performs a global match(find all)
 * /i       Performs case-insensitive matching
 * /u       Enables Unicode Support(new 2015)
 */

//* The /g Flag (Global)
//The /g flag matches all occurances of the pattern, rather than just the first one.
{
     //A global search for "is" in a string:
     let text = "Is this all there is?";
     const pattern = /is/g;

     let result = text.match(pattern);
     console.log(result);
}

//* The /i Flag (Insensitive)
//The /i flag makes a match case-insensitive: /abc/i matches "abc","AbC","ABC".
{
    //A case-insensitive search for "W3schools" in a string:
    let text = "Visit W3Schools";
    const pattern = /w3schools/i;
    let result = text.match(pattern);
    console.log(result);
}

//* RegEx Metacharacters
//Match words
{
    const pattern = /\w/;

    /**
     * Metacharacters are characters with a special meaning.
     * They can be used to match digits, words, spaces and more.
     * These are the most common
     * 
     * Meta         Description
     * \d           Matches Digits
     * \w           Matches Words
     * \s           Matches Spaces
     */
}

//* RegExp \d (digits) Metacharacter
// The \d metacharacter matches digits.
{
    //A global search for digits in a string:
    let text = "Give 100%!";
    const pattern = /\d/g;

    let result = text.match(pattern);
    console.log(result);
}

//* RegEx \w (word) Metacharacter
//The \w metacharacter matches word characters.
//A word character is a character a-z,A-Z,0-9, including _ (underscore).
{
    let text = "Give 100%!";
    const pattern = /\w/g;

    let result = text.match(pattern);
    console.log(result);
}

//* JavaScript RegEx Quantifiers
//Match At least one zero
{
    let text = "Give 100%!"
    const pattern = /0+/;

    let result = text.match(pattern);
    console.log(result);
}
/**
 * Quantifiers define the numbers of characters of expressions to match
 * These are the most common:
 * Code         Description
 * x*           Matches zero or more occurences of x
 * x?           Matches zero or one occurences of x
 * x{n}         Matches n occurences of x
 */

//* The n? Quantifier
// x? matches zero or one occurences of x.
{
    // A global search for "1", followed by zero or move "0" characters:
    let text = "1, 100 or 1000?";
    const pattern = /10?/g;

    let result = text.match(pattern);
    console.log(result);
}

//* Regular Expression Assertion
{
    //Match beginning  of string
    const pattern = /^W3Schools/;

    //Match end of string
    const pat = /w3Schools$/;

    /**
     * Assertions matches Boundaries and Lookarounds:
     * String Boundaries and word Boundaries.
     * Lookarounds: Lookaheads and Lookbehinds.
     * These are the most common:
     */
}
/**
* Syntax    Name                Description
* ^         String Boundary     Matches the beginning of a string
* $         String Boundary     Matches the end of a string
* \b        Word Boundary       Matches the beginning or end of a word
* (?=...)    Lookahead           Matches the subsequent string
* (?<=...)   Lookbehind          Matches the Previous string
*/

//* RegEx ^ Metacharacter
//The ^ metacharacter matches the beginning of a string
{
    //Test if a string starts with W3Schools:
    const pattern = /^W3Schools/;
    let text = "W3Schools Tutorial";
    
    let result = pattern.test(text); 
    console.log(result); /// true

    const pattern2 = /^W3Schools/;
    let text2 = "Hello W3Schools";

    result = pattern.test(text2);
    console.log(result); //false
}

//* RegEx $ Metacharacter
//The $ metacharacter matches the end of a string.
{
    //Test if a string ends with W3Schools
    const pattern = /W3Schools$/;
    let text = "Hello W3Schools";

    let result = pattern.test(text); 
    console.log(result); //True

    const pattern2 = /W3schools$/;
    text = "W3Schools Tutorial";

    result = pattern2.test(text);
    console.log(result); //false
}

//!==============================================================
//* JavaScript RegEx Character Classes
{
    ///Match Digits
    const pattern = /[0-9]/;
}

/**
 * Character class are characters enclosed in square brackets[].
 * A character class matches any character from a set within brackets.
 * There are the most common
 * Class    Description
 * [a]      Matches the character between the brackets
 * [abc]    Matches all characters between the brackets
 * [a-z]    Matches all characters in the range from a-z
 * [0-9]    Matches all characters in the range from 0 to 9    
 */
{
    // A global search for the characters "0" to "9" in a string:
    let text = "More than 1000 times";
    const pattern = /[0-9]/g;

    let result = text.match(pattern);
    console.log(result);
}


