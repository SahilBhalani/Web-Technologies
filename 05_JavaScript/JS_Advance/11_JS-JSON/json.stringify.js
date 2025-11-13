//* JSON.stringify()
/**
 * A Common use of JSON is to exchange data to/from a web server.
 * When sending data to a web server, the data has to be a string.
 * You can convert any JavaScript datatype into a string with JSON.stringify()
 */
{
  const obj = { name: "John", age: 30, city: "New York" };
  const myJSON = JSON.stringify(obj);
  console.log(myJSON);
}

//* Stringigy a JavaScript Array
{
  const arr = ["John", "Peter", "Sally", "Jane"];
  const myJSON = JSON.stringify(arr);
  console.log(myJSON);
}

//* Storing Data
//When string data, the data has to be a certain format, and regardless of where you choose to store it, text is always one of the legal formats
{
  // Storing data:
  const myObj = { name: "John", age: 31, city: "New York" };
  const myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);

  //Retreving Data:
  let text = localStorage.getItem("testJSON");
  let obj = JSON.parse(text);
  console.log(obj.name);
}

//* All Data Types
//JSON.stringify() can not only converts objects and arrays into JSON strings, it can convert any JavaScript value into a string.
{
  const num = 123e-5;
  const myJSON = JSON.stringify(num);
  console.log(myJSON);

  let bool = new Boolean(1);
  const myJSON2 = JSON.stringify(bool);
  console.log(myJSON2);
}

//* Stringify a Date
{
  const obj = { name: "John", today: new Date(), city: "New York" };
  const myJSON = JSON.stringify(obj);
  console.log(myJSON);
}

//* Stringify a Function
/**
 * In JSON, functions are not aloowed as object values.
 * The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:
 * This can be omitted if you convert your functions into strings before running the JSON.stringify() function.
 */
{
  const obj = {
    name: "John",
    age: function () {
      return 30;
    },
    city: "New York",
  };
  obj.age = obj.age.toString();
  const myJSON = JSON.stringify(obj);
  console.log(myJSON);
}
