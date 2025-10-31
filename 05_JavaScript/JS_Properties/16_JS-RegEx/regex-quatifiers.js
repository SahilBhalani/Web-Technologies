//* RegEx Quantifiers
//Quantifiers define the numbers of characters or expressions to match
{
    //Match at least one zero
    const pattern = /0+/
}

/**
 * Code     Description
 * x+       Matches at least one x
 * x*       Matches zero or more occurences of x
 * x?       Matches zero or one occurences of x
 * x{n}     Matches n occurences of x
 * x{n,m}   Matches from n to m occurences of x
 * x{n,}    Matches n or more occurences of x
 */

//* RegExp + Quantifier
// x+ matches at least one x.
{
    //A global search for at least one "o";
    let text = "Hellooooo World! Hello There!"
    const pattern = /lo+/g;

    let result = text.match(pattern);
    console.log(result);
}

//* RegEx * Quantifier
//x* matches zero or more occurences of x.
{
    //A global search for an "l", followed by zero or more "o" characters:
    let text = "Hellooo World! Hello There!";
    const pattern = /lo*/g;

    let result = text.match(pattern);
    console.log(result);
}

//* RegEx ? Quantifier
//x? matches zero or one occurences of x.
{
    //A Global search for "1", followed by zero or more "0" characters:
    let text = "1, 100, or 1000?";
    const pattern = /10?/g;
    
    let result = text.match(pattern);
    console.log(result);
}

//* RegEx {n} Quantifier
//x{n} matches n occurence of x
{
    //A global search for a string that contains a sequence of four digits:
    let text = "100, 1000, or 10000?";
    let pattern = /\d{4}/g;
    let result = text.match(pattern);
    console.log(result);
}

//* RegExp {n,m} Quantifier
// X{n,m} matches from n to m occurences of x.
{
    //A global search for substrinf that contains a sequence of three to four digits
    let text = "100,1000 or 10000?";
    let pattern = /\d{3,4}/g;

    let result = text.match(pattern);
    console.log(result);
}

//* RegEx {n, Quantifier}
//x{n,} matches n or more occurences of x.

{
    //A global search for a sequence of at least three digits:
    let text = "100, 1000 or 10000?";
    let pattern = /\d{3,}/g;

    let result = text.match(pattern);
    console.log(result);


}