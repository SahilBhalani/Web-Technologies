//* JavaScript JSON
/**
 * JSON stands for JavaScript Object Notation.
 * JSON is a plain text format for storing and transporting data.
 * JSON is similar to the syntax for creating JavaScript objects.
 * JSON is used to send,recieve and store data.
 */

'{"name":"John", "age":30, "car":null}'

//* Why JSON?
// JSON is make it easy to send and store data between computers
// JSON is text only and language independent.

//* JSON and JavaScript
/**
 * The JSON formt is syntactically identical to the code for creating JavScript Objects.
 * Because of this, a JavaScript program can easily convert JSON data into native JavaScript objects.
 * JavaScript has a built in function for converting JSON strings onto JavaScript Objects
 *  ~ JSON.parse()
 * 
 * JavaScript also has a built in funnction for coverting an object a JSON String:
 *  ~ JSON.stringify()
 * 
 * You can receive pure text from a server and use it as a JavaScript object
 * You can send a JavaScript object to a server in pure text format.
 * You can work with data as JavaScript objects, with no complicated parsing and translations.
 */

//* Storing Data
//When storing data the data has to be a certain format, and regardless of where ypu choose to store it, text is always one of the legal formats,
//JSON makes is possible to store JavaScript objects as text.

//JSON Example 
//Text that defines an employees object with an array of 3 employee objects:
// {
// "employees":[
//   {"firstName":"John", "lastName":"Doe"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Peter", "lastName":"Jones"}
// ]
// }

//* Converting a JSON Text To a JavaScript Object
//A common use of JSON is to read data from a web server, and displays the data in web page.
{
    let text = '{ "employees" : [' +
    '{ "firstname":"john", "lastname":"doe"},'+
    '{ "firstname":"anna", "lastname":"smith"},'+
    '{ "firstname":"peter", "lastname":"parker"} ]}';

    //Then,, use the JavaScript built-in fucntion JSON.parse() to convert the string into a JavaScript objecet:
    const obj = JSON.parse(text);
    console.log(obj);

     //Finally, use the new JavaScript object in your page:
    // document.getElementById('demo').innerHTML = obj.employees[1].firstname + " " + obj.employees[1].lastname;
}


//* JSON Syntax
/**
 * JSON syntax is derived from JavaScript objecet notation syntax:
 *  ~ Date is in name/value pairs
 *  ~ Data is separated by commas
 *  ~ Curly braces hold object
 *  ~ Square brackets hold arrays
 */

//* JSON Values
/**
 * In JSON, values must be one of the following data types:
 * ~ a string
 * ~ a number
 * ~ an object
 * ~ an array
 * ~ a boolean
 * ~ null
 * 
 * In JavaScript values can be all of the above, plus any other valid JavaScrit expression, including:
 * ~ a function
 * ~ a date
 * ~ undefined
 */

//* JavaScript Objects
//Because JSON syntax is derived from JavaScript object notation, very little extra software is needed to work with JSON within JavaScript.
//With JavaScript you can create an object and assign data to it, like this:
const person = {name:"john", age:31, city:"new york"};
console.log(person.name);
console.log(person["name"]);

//Data can be modified like this:
person.name = "Gilbert"
console.log(person.name);

//* Why JSON is Better Than XML
/**
 * XML is much more  difficult to parse than JSON
 * JSON is parsed into a ready-to-use JavaScript object.
 * 
 * For AJAX applications, JSON is faster and easier than XML
 * 
 * Using XML
 * 
 * ~ fetch an XML document
 * ~ Use the XML DOM to loop through the document
 * ~ Extract values and store in variables
 * 
 * ~ Using JSON
 * ~ Fetch a JSON string
 * ~ JSON.Parse the JSON string
 */

//* JSON Data Types
/**
 * Valid Data Types
 * In JSON, values must be one of the following data types:
 * ~ a string
 * ~ a number
 * ~ an object(JSON object)
 * ~ an array
 * ~ a boolean
 * ~ null 
 * 
 * ? JSON Values cannot be one of the following data types:
 * ~ a function
 * ~ a date
 * ~ undefined
 */

//* JSON Strings
//String in JSON must be written in double quotes
// {"name" : "John"}

//* JSON Number
//Numbers in JSON must be an integer or a floating point.
// {"age" : 30}

//* JSON Object
//Values in JSON can be objects.
/**
 * {
 * "employee":{"name":"john", "age":30 , "city" : "New York"}
 * }
 * 
 * Objects as values in JSON must follow the JSON syntax.
 */


//* JSON Arrays
//Values in JSON can be arrays
/**
 * {
 *  "employees": ["John" , "Anna" , "Peter"]
 * }
 */

//* JSON Booleans
//Value in JSON can be true/false:
// {"sale":true}

//* JSON null
// Values in JSON can be null.
// { "middlename" : null}
