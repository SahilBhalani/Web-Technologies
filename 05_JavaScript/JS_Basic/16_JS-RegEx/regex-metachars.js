//* RegEx Meta Characters
//Regular Expression Metacharacters
//Metacharacters are characters with a special meaning.
//They can be used to match digits,words,spaces,and more:
{
    //Match Words
    const pattern = /\w/;
}

//* JavaScript Regex Metacharacters
/**
 * Meta     Description
 * \d       Matches Digits
 * \D       Matches None Digits
 * \w       Matches alphanumeric Word Characters
 * \W       Matches None alphanumeric Word Characters
 * \s       Matches Spaces
 * \S       Matches None Spaces
 * \ddd     Matches characters by the Octal numer ddd
 * \xhh     Matches characters by the Hexadecimal number hh
 * \uhhhh   Matches Unicode characters by the number hhhh
 */

//!============================================================
//* RegEx \d (digits) Metacharacter
//The \d metacharacter matches digits.
{
    // A global search for digits in a string
    let text = "Give 100%!";
    const pattern = /\d/g;

    let result = text.match(pattern);
    console.log(result);
}

//* RegEx \D Metacharacter
//The \D metacharacter matches non-digit characters.
{
    //A Global search for non-digit characters:
    let text = "Give 100%!";
    const pattern = /\D/g;

    let result = text.match(pattern);
    console.log(result);
}

//* RegEx \w (word) Metacharacter
//The \w metacharacter matches word characters.
//A Word character is a character a-z,A-Z,0-9, including _ (underscore).
{
   // A global search for word characters:
   let text = "Give 100%!";
   const pattern = /\w/g;

   let result = text.match(pattern);
   console.log(result);
}

//* RegEx \W Metacharacter
//The \W metacharacter matches non-word characters.
{
    //A Global search for non-word characters:
    let text = "Give 100%!";
    const pattern = /\W/g;

    let result = text.match(pattern);
    console.log(result);
}

//* The \s (space) Metacharacter
//The \s metacharacter matches whitespace like space, tab, and newline.
{
    //A global search for whitespace character in string
    let text = "Is this all there is?";
    let pattern = /\s/g;

    let result = text.match(pattern);
    console.log(result);
}

//* RegEx \xhh (hexadecimal)
/// \xhh matches characters by the hexadecimal number hh
{
    //A global replace of the hexadecimal character 6F(o) in a string
    let text  = "Visit W3Schools. Hello World!";
    let pattern = /\x6F/g;

    let result = text.replace(pattern, "*");
    console.log(result);
}

//* RegEx \uhhhh (unicode hex)
// \uhhhh matches a Unicode character by the hex number hhhh.
{
    //A global search for a Unicode character with the hexadecimal code 0057 (W).
    let text = "Visit W3Schools. Hello World!"
    let pattern = /\u0057/g;

    let result = text.replace(pattern, "GAWK GAWK");
    console.log(result);
}
