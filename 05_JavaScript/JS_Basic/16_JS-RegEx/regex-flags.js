//* JavaScript RegEx Flags
//RegEx Modifier Flags
//Flags are parameters that can modify how a regex pattern is used, such as making it case-insensitive or global
//Syntax:   /pattern/flags


//* JavaScript Regex Flags
/**
 * Flag  Description
 * /d   Performs substring matches(new 2022)
 * /g   Performs a global match(find all)
 * /i   Performs case-insensitive matching
 * /m   Performs multiline matching
 * /s   Allows. (dot) to match line terminator(new 2018)
 * /u   Enables Unicode support (new 2015)
 * /v   An upgrade to the /u flag for better unicode support
 * /y   Performs a "Sticky" Search(new 2015)
 */

//* Flag Syntax: /pattern/flags
// / - Opening delimiter for the regular expression
// pattern - Regular expression (a search criteria)
// / - Closing delimiter for the regular expression
// flags - One or more single modifier flags

//* RegEx /g Flag (Global)
//The /g flag matches all occurences of the pattern, rather than just the first one.
{
    //A Global search for "is" in a string:
    let text = "Is this all there is?";
    const pattern = /is/g;

    let result = text.match(pattern);
    console.log(result);
}

//* RegEx /i flag(Insensitive)
//The /i flag makes the match case-insensitive: /abs/i matches: "abc","AbC","ABC".
{
    //A case-insensitive search for "w3schools" in a string:
    let text = "Visit W3Schools";
    const pattern = /w3schools/i;

    let result = text.match(pattern);
    console.log(result);
}

//* RegEx /d Flag
//The /d flag specifies the start and the end of a match.
{
    //Match every sub text that starts or ends with aa or bb;
    let text = "aaabb";
    const pattern = /(aa)(bb)/d;

    let result = text.match(pattern);
    console.log(result);
}

//* RegEx /s Flag (Single line/DotAll)
//The /s flag allows the .(dot) metacharacters to match newline characters(\n) in addition to any other character.
{
    //Without the /s flag. \n does not match .(wildchars):
    let text = "Line\nLine.";
    const pattern = /Line./gs;

    let result = text.match(pattern);
    console.log(result);
}

//* RegEx /y Flag (Sticky):
//The /y flag performs a "Sticky" search from the lastIndex property of the RegExp object.

//The /y flag lets a match start at the exact position where last match ended.
{
    let text = "abc def ghi";
    const pattern = /\w+/y;

    //start match from position 4
    pattern.lastIndex = 4;
    let result = text.match(pattern);
    console.log(result);

    //The y/flag must be set to allow match from a position.
    //This will not work:

    const pattern2 = /\w+/;

    //start match from position 4
    pattern2.lastIndex = 4;
    result = text.match(pattern2);
    console.log(result);
}

//* RegEx /u Flag(Unicode)
//The /u flag enables full Unicode support in a regular expression.
//By default, JavaScript RegEx treats 4-bytes Unicode characters (like emojis or less common symbols) as two separate 2-byte "Surrogate" code units.
///The /u flag treats the pattern as a sequence of Unicode code points, which in important for correctly handling of characters outside the Basic Multilingual Plane(BMP).
{
    let text = "䷀";
    const pattern = /\u{04DC0}/u;

    let result = pattern.test(text);
    console.log(result); //Returns True

    //Without the /u flag, regular expressions are not "Unicode-aware".
    const pattern2 = /\u{04DC0}/;

    result = pattern2.test(text);
    console.log(result);
}

//* RegEx /v Flag (Unicode Sets)
//The /v flag is an upgrade to the /u flag for better Unicode support.
//It Enables more Unicode-related Features.
//The new features are:
//~ The \p escape sequence matches strings, instead of just characters.
//~ The character class is upgraded to allow intersection, and subtraction syntaxes, as well as matching multiple Unicode characters
{
    let text = "Hello 😄";
    const pattern = /\p{Emoji}/v;

    //Returns true:
    let result = pattern.test(text);
    console.log(result);

    //Without the /v flag, regular expressions are not "Unicode-aware".

    const pattern2 = /\p{Emoji}/;

    //Returns false;
    result = pattern.test(text);
    console.log(result);
}

//* RegEx Group Modifiers (?flag)
// The (?flag) syntax is a group modifier (inline flag modifier).
//It allows for modifying flags in a part of a pattern, rather than to the entire pattern.
//(?flag:pattern) enables the flags only for the pattern in the group.
{
    //The i flag is only enabled for the W3Schools part of the pattern.
    let text = "W3Schools tutorials.";
    const pattern = /(?i:W3Schools) tutorials/;

    let result = pattern.test(text);
    console.log(result);

    //The i flag is only enabled for the W3Schools part of the pattern.
    let text2 = "W3Schools Tutorials.";
    const pattern2 = /(?i:W3Schools) tutorials/;

    //Return false:
    let result2 = pattern2.test(text2);
    console.log(result2);
}

//* JavaScript RegEx Flag Properties
/**
 * Property         Description
 * global           Returns true if the /g flag is set
 * hasIndices       Returns true if the /d flag is set
 * ignoreCase       Returns true if the /i flag is set
 * multiline        Returns true if the /m flag is set
 * dotAll           Returns true if the /s flag is set
 * sticky           Returns true if the /y flag is set
 * unicode          Returns true if the /u flag is set
 * unicodeSets      Returns true if the /v flag is set
 */

//* The dotAll Property
//The dotAll property returns true if the /s flag is set.
{
    const pattern = /W3Schools/s;
    let result = pattern.dotAll;
    console.log(result);
}

//* The Global Property
//The global property returns true if the /g flag is set.
{
    const pattern = /W3schools/g;
    let result = pattern.global;
    console.log(result);
}

//* The hasIndices Property
//The hasIndices property returns true if the /d flag is set.
{
    const pattern = /W3Schools/d;
    let result = pattern.hasIndices;
    console.log(result);
}

//* The ignoreCase Property
//The ignoreCase property returns true if the /i flag is set.
{
    const pattern = /W3Schools/i;
    let result = pattern.ignoreCase;
    console.log(result);
}

//* The multiline Property
//The multiline property returns true if the /m flag is set.
{
    const pattern = /W3Schools/m;
    let result = pattern.multiline;
    console.log(result);
}


//* The sticky Properties
//The sticky property returns true if the /y flag is set.
{
    const pattern = /W3Schools/y;
    let result = pattern.sticky;
    console.log(result);
}

//* The unicode Property
//The unicode property returns true if the /u flag is set.
{
    let text = "䷀";
    const pattern = /\u{04DC0}/u;

    let result = pattern.unicode;
    console.log(result);

}

//* The unicodeSets Property
//The unicodeSets property returns true if the /v flag is set.
{
    let text = "Hello 😄";
    const pattern = /\p{Emoji}/v;

    let result = pattern.unicodeSets;
}

