//* JSON.parse()
/**
 * A common use of JSON is to exchange data to/from a web server.
 * When receiving data from a web server, the data is always a string.
 * parse the data with JSON.parse(), and the data becomes a JavaScript object.
 */

//* Array as JSON
//When using the JSON.parse() on a JSON derived from an array, the method will return a JAvaScript array, instead of a JavaScript object:
{
    const text = '["ford", "bmw", "audi", "fiat"]';
    const myarr = JSON.parse(text);
    console.log(myarr);
}

//! Exceptions
//* Parsing Dates
/**
 * Date objects are not allowed in JSON.
 * if you need to include a date, write it as a string.
 * You can convert it back into a date object later:
 */
{
    const text = '{"name":"john", "birth":"1986-12-14", "city":"New York"}';
    const obj = JSON.parse(text);
    obj.birth = new Date(obj.birth);

    console.log(obj.name + ", " + obj.birth);
}

//* Parsing Functions
/**
 * Functions are not allowed in JSON.
 * if you need to include a function, write it as a string.
 * You can covert it back into a function later:
 */
{
    const text = '{"name":"sahil", "age": "function(){return 30;}" , "city":"new york" }';
    const obj = JSON.parse(text);
    obj.age = eval("(" + obj.age + ")");

    console.log(obj.name + ", " + obj.age());
}