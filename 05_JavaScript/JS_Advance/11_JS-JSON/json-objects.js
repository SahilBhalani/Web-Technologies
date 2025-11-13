//* JSON Object Literals
/**
 * JSON object literals are surrounded by curly braces {}.

JSON object literals contains key/value pairs.

Keys and values are separated by a colon.

Keys must be strings, and values must be a valid JSON data type:

string
number
object
array
boolean
null
Each key/value pair is separated by a comma.
 */

//* JavaScript Objects
//You can create a JavaScript object from a JSON object literal:
{
  const myObj = { name: "John", age: 30, car: null };
  console.log(myObj.name);

  //Normally, you create a javaScript object by parsing a JSON string
  const myJSON = '{"name":"John", "age":30, "car":null}';
  const myObj1 = JSON.parse(myJSON);
  console.log(myObj1.name);

  //* looping an object
  let text = "";
  for(const x in myObj1) {
    text += x + ", ";
  }
  console.log(text);

  //* in for-in loop, use the bracket notation to access the property values:
  for( x in myObj1) {
    text += myObj1[x] + ",  ";
  }
  console.log(text);
}
