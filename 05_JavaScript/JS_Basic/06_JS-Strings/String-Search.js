/** 
 ** String Search Methods
 * !-----------------------
 * String indexOf()
 * String lastIndexOf()
 * String search()
 * String match()
 * String matchAll()
 * String includes()
 * String startsWith()
 * String endsWith()
 */

 //!=============================================================
 //*JavaScript String indexOf()
 //The Index of method returns the index(position) of the first occurrence of a string in a string, or it returns -1 if the string is not found.
 //ex.
 {
    let text = "Please locate where 'locate' occurs!";
    let index = text.indexOf("locate");
    console.log(index);
 } 

 //* JavaScript String lastIndexof()
 //The lastIndexOf() method returns the index of the last occurance of a specific text in a string:
 //ex.
 {
    let text = "Please locate where 'locate' occurs!";
    let index = text.lastIndexOf("locate");
    console.log(index);

    // Both indexOf(), and lastIndexOf() return -1 if the text is not found:

    let t1 = "Please locate where 'locate' occurs!";
    let inn = t1.lastIndexOf("John");
    console.log(inn);

    //Both methods accept a second parameter as the starting position for the search:

    let t2 =  "Please locate where 'locate' occurs!";
    let ind = t2.indexOf("locate", 1);
    console.log(ind);
 }

 //!-------------------------------------------------------------
 //* JavaScript String Search()
 //The search() method searches a string for a string(or a regular expression) and returns the position of the match:
 //ex.
{
     let text = "Please locate where 'locate' occurs!";
     let ins = text.search("locate"); 
     console.log(ins);

     let t1 = "Please locate where 'locate' Occurs!";
     let inn = text.search(/locate/);
     console.log(inn);
}

//? DO YOU NOTICE: 
/**
 * The two methods, indexOf() and search(), are equal?
 * 
 * They accept the same arguments (parameters), and return the same value?
 * 
 * The two methods are NOT equal. These are the differences:
 *  ~ The search() method cannot take a second start position argument.
 *  ~ The indexOf() method cannot take powerful search values (regular expressions).
 * 
 *  */ 

//!=============================================================
//* JavaScript String match()
// The match() method returns an array containing the results of matching a string against a string(or a regular expression).
//ex.
{
    let text = "The rain in SPAIN stays mainly in the plain";
    const match = text.match("ain");
    console.log(match.length + " " + match);

    //Perform a global search for 'ain':
    let t1 = "The rain in SPAIN stays mainly in the plain";
    const mch = t1.match(/ain/g);
    console.log(mch.length + " " + mch);

    //perform a global, case insensitive search for "ain":
    let t2 = "The rain in SPAIN stays mainly in the plain";
    const mc = t2.match(/ain/gi);
    console.log(mc.length + " " + mc);
}

//!-------------------------------------------------------------
//* JavaScript String matchAll()
// The matchAll() method returns an iterator containing the results of matching a string against a string(or a regular expression)
//ex.
{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    const iterator = text.matchAll(/Cats/gi);
    console.log(Array.from(iterator));
}

//!==============================================================
//* JavaScript String includes()
//The includes() method returns true if a string contains a specified value.
//Otherwise it returns false.
{
    let text = "Hello World, welcome to the universe.";
    let res = text.includes("World");
    console.log(res);

    //check if a string includes "world". start at position 12:
    let t1 = "Hello world, welcome to the universe";
    let res1 = t1.includes("world" , 12);
    console.log(res1);
}

//!=============================================================
//* JavaScript String startsWith()
// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false:
//ex.
{
    let text = "Hello World, welcome to the universe.";
    let res = text.startsWith("Hello");
    console.log(res);
}
//!-----------------------------------------------------------
//* JavaScript String endsWith()
// The endsWith() method returns true if a string ends with a specified value.
// Otherwise it returns false:
//ex.
{
    let text = "Hello World, welcome to the universe.";
    let res = text.endsWith("World", 11);
    console.log(res);
}





