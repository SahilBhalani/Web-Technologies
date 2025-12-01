//* JavaScript JSON Stringify() Method
//The JSON.stringify() method in Javascript is used to convert JavaScript objects into JSON String. This method takes a JavaScript Objecet as input and returns a JSON-formatted string representing that object.

//* Converting JS Object to JSON String
const value = {
  company: "Google",
  Estd: 2009,
  location: "Noida",
};

const result = JSON.stringify(value);
console.log("Value of result = " + result);


//* Deep Copying JavaScript Object with JSON.stringify() and JSON.parse()
let obj = {
    name: "GFG",
    add: {
        country: "India",
        state: {
            code: "JS",
            topic: "Stringify"
        }
    }
}

let obj2 = JSON.parse(JSON.stringify(obj));
obj.add.state.topic = "stringify json object";
console.log(obj);
console.log(obj2);

//* Converting Array to JSON String
let value1 = ["Logan", 21, "Peter", 24];
let result1 = JSON.stringify(value1);

console.log("Value of result = " + result1);
console.log("type of result = " + typeof result1);