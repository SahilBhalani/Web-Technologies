/**
 * Basic String Methods
 * 
 * JavaScript Strings Are primitive and immutable; All String methods produce a new string without altering the original string.
 * 
 * String length,
 * String charAt(),
 * String charCodeAt(),
 * String codePointAt(),
 * String concat(),
 * String at(),
 * String [_],
 * String slice(),
 * String substring(),
 * String substr(),
 * String toUpperCase(),
 * String toLowerCase(),
 * String isWellFormed(),
 * String toWellFormed(),
 * String trim(),
 * String trimStart(),
 * String trimEnd(),
 * String padStart(),
 * String padEnd(),
 * String repeat(),
 * String replace(),
 * String replaceAll(),
 * String split().
 * 
 */

//===============================================================

//JavaScript String Length
//The length property returns the length of a string:
//ex.
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let len = text.length;
    console.log(`Length is: ` + len);
}

//================================================================
//Extracting String Characters
//There are 4 methods for extracting string characters:
// ~ The at(position) Method
// ~ The charAt(position) Method
// ~ The charCodeAt(position) Method
// ~ Using property access [] like in array

//------------------------------------>
// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:
//ex.
{
    let text = "HELLO KITTY!";
    let char = text.charAt(6);
    console.log(char);
}

//------------------------------------>
// JavaScript String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
//ex.
{
    let text = "HELLO KITTY!";
    let char = text.charCodeAt(0); //return ASCII Value
    console.log(char);
}

//------------------------------------>
// JavaScript codePointAt()
// Get code point value at the position in a string
//ex.
{
    let text = "HELLO KITTY!";
    let code = text.codePointAt(0);
    console.log(code);
}

//------------------------------------>
//JavaScript String at()
//ex.
{
    const name = "Sahil"
    let letter = name.at(2);
    let letter2 = name.at(-2)
    console.log(letter);
    console.log("Nagative String Index: " + letter2);

    // method 2

    const _name = "Sahil";
    let _letter = _name[2];
    console.log(_letter);

    // the at() method returns the character at a specified index (position) in a string.

    // the at() method is a new addition in JavaScript
    // it allows the use of nagative indexes while charAt() do not.
    // Now you can use myString.at(-2) instead of charAt(myString.length-2).
}

//------------------------------------>
//Property Access[]
//ex.
{
    let text = "HELLO World!"
    let char = text[2];
    console.log(char);

    //NOTE: Property Access might be a little unpredictable:
    // It makes strings look like array (but they are not)
    // If no character is found. [] retuns undefined, while charAt() returns empty string.
    // If is read only. str[0] = "A" gives no error (but does not work!)
}

//------------------------------------>
//JavaScript String concat()
//concat joins two or more strings:
//Ex.
{
    let t1 = "Hot";
    let t2 = "Wheels";
    let t3 = t1.concat(" ", t2);
    console.log(t3);

    //The concat() method can be used instead of the plus operator. These two line do the same:

    let text = "Hello" + " " + "World!";
        text = "Hello".concat(" ", "World!");
        console.log(text);
}

//=============================================================
//Extracting String Parts
//There are 3 Methods for extracting a part of a string:
// ~ slice(start, end)
// ~ substring(start, end)
// - substr(start, length)

//------------------------------------>
//Javacript String slice()
//slice() extract a part of a string and returns the extracted part in a new string.
//ex.
{
    let text = "Apple, Banana, Kiwi";
    let part = text.slice(3,17);
    console.log(part);

    //If you omit the second parameter, the method will slice out the rest of the string:

    let t1 = "Apple, Banana, Kiwi";
    let p1 = t1.slice(7);
    console.log(p1);

    //If a Parameter is nagative, the position is counted from the end of the string
    let t2 = "Apple, Banana, Kiwi";
    let p2 = t2.slice(-8);
    console.log(p2);

}

//------------------------------------>
//JavaScript String substring()
//substring is similar to slice().
// The diffrence is that start and end values less than 0 are treated as 0 in substring().
//ex.
{
    let str = "BMW, Volvo, Merc";
    let part = str.substring(7,13);
    console.log(part);
}

//===============================================================
//Converting to Upper and Lower Case

// A string is converted to upper case with toUpperCase().
// A string is converted t lower case with toLowerCase().

//------------------------------------>
// JavaScript String toUpperCase()
//ex.
{
    let text = `Hello World!`;
    let text2 = text.toUpperCase();
    console.log(text2);
}

//------------------------------------>
// JavaScript String toLowerCase()
//ex.
{
    let text = `Hello World!`;
    let text2 = text.toLowerCase();
    console.log(text2);
}

//------------------------------------>
//JavaScript String isWellFormed()
//The isWellFormed() method returns true if a string is well formed.
//otherwise it returns false.
//A string is not well formed if it contains lone surrogates
//ex.
{
    let text = "Hello World!";
    let result = text.isWellFormed();
    console.log(result);

    //Lone Surrogates: A lone surrogate is a unicode surrogate code point that is not part of a valid surrogate pair used to represent characters in UTF-16 encoding.

    let t1 = "Hello World \uD800";
    let res = t1.isWellFormed();
    console.log(res);
}

//------------------------------------>
// JavaScript String toWellFormed()
//The String method toWellFormed() returns a new string where all "lone surrogates" are replaced with the unicode replacement character(U + FFFD)
//ex.
{
    let text = "Hello World \uD800";
    let result = text.toWellFormed();
    console.log(result);
}

//==============================================================
//JavaScript String trim()
//the trim() method removes whitespace from both sides of a string
//ex.
{
    let text = "     Hello World!      ";
    let tex2 = text.trim();
    console.log(tex2);
}

//------------------------------------>
// JavaScript String trimStart() & trimEnd()
// The trimStart() method works like trim(), but removes whitespace only from the start of a string. while trimEnd() removes whitespae only from the end of a string.

//ex.
{
    //trimStart()
    let ts = "     Hello World!      ";
    let tx = ts.trimStart();
    console.log(tx);

    //trimEnd()
    let te = "     Hello World!      ";
    let tt = te.trimEnd();
    console.log(tt);
}

//==============================================================
//JavaScript String Padding
//padstart() and padEnd() to support padding at the beginning and at the end of a string

//------------------------------------>
//JavaScript String padStart()
//The padStart() Method pads a string the start.
//It pads a string with another string (Multiple times) until it reaches a given length.

//ex.
{
    // pad a string with "0" until it reaches the lenght 4:
    let text = "5";
    let padded = text.padStart(4, "y");
    console.log(padded);

    // pad a string with "x" until it reaches the length 4:
    let t1 = "4"
    let pad1 = t1.padStart(6,"uw");
    console.log(pad1);

    //NOTE: The padStart() method is a string method.
    // To pad a number, convert the number to a string first.

}

//------------------------------------>
//JavaScript String padEnd()
//The padEnd() method pads a string from the end.
// it pads a string with another string (multiple times) until it reaches a given length.
//ex.
{
    let text = "5";
    let padded = text.padEnd(4, "0");
    console.log(padded);

    let t1 = "5"
    let padd = t1.padEnd(4, "y");
    console.log(padd);
}

//==============================================================4
//JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string
// The repeat() method returns a new string.
// The repeat() method does not change the original string.
//ex.
{
    let text = "Hot Wheels!";
    let rep = text.repeat(2);
    let rep2 = text.repeat(4);
    console.log(rep);
    console.log(rep2);
}

//==============================================================
//Replacing String Content
//The replace() method replaces a specified value with another value in string:
//ex:
{
    let text = "please visit Microsoft!";
    let newtext = text.replace("Microsoft" , "Youtube");
    console.log(newtext);

    //By default, the replace() method replaces only the first match.

    //By default, the replace() method is case sensitive, writing MICROSOFT(With upper-case) will not work:

    //To replace case insensitive, use a regular expression with an /i flag(insensitive).

    let t1 = "Please visit Microsoft!";
    let newText = text.replace(/MICROSOFT/i, "Instagram");
    console.log(newText);

    //To Replace All Matches, Use a regular expresion with a/g flag(Global Match):

    let tx = "Please Visit Microsoft and Microsoft!";
    let nt = tx.replace(/Microsoft/g, "Reddit");
    console.log(nt);

}

//JavaScript String ReplaceAll()
//ex.
{
    let text = "I love cats. Cats are very easy to love. Cats are very popular";
    text = text.replaceAll("Cats", "Dogs");
    text = text.replaceAll("cats", "dogs");
    console.log(text);
}

//Converting a String to an Array
// if you want to work with a string as an array, you can convert it to array.
// JavaScript String split()
// A string can be converted to an array with the split() method:
//ex.
{
    let str = "BMW,Volvo,Merc,Porsche";
    const myArray = str.split(",");
    console.log(myArray[1]);

    // if the separator is omitted, the returned array will contain the whole string in index[0].
    // if the separator is "", the returned array will be an array of single characters:
}

