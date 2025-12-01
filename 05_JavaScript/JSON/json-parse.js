//* JSON parse() Method
//the json.parse() method is used to convert a json string into a JS Objects. 
// ~ It converts a JSON string into a JavaScript object.
// ~ Throws a SyntaxError if the input string is not valid JSON.
// ~ Accepts an optional reviver function to transform the parsed data.

//* using the Reviver Function

const s = '{"name" : "Rahul", "age": 25, "city": "delhi"}';
const obj = JSON.parse(s, (key, value) => {
    if(key == 'age'){
        return value + 1;
    } 
    return value;
});
console.log(obj);

//* Common Use Cases of JSON.parse()
// 1. Parsing API Response
fetch('https://api.example.com/user')
.then(res => res.json())
.then(s => {
    const obj = JSON.parse(s);
    console.log(obj.name);
})

//2. Storing and Retrieving Data from localStorage
// const a = {name : "rahul", age: 25};
// localStorage.setItem('user', JSON.stringify(a));

// const v = localStorage.getItem('user');
// const obj1 = JSON.parse(v);
// console.log(obj.name);


//3. Working With Config Files
const sv = '{"theme" : "dark", "language" : "en" }';
const obj2 = JSON.parse(sv);
console.log(obj2.theme);

//* Handling Common Errors with JSON.parse()
//1. invalid JSON Format: If the JSON string is malformed, JSON.parse() will throw a SyntaxError.

//Invalid JSON (keys must be in double quotes)
const a = "{name : 'rahul', age: 25}";
try {
    const obj = JSON.parse(a);
} catch (e) {
    console.log("Error: ", e.message);
}


//Non-String Input: JSON.parse() only accepts strings. if you try to parse a number or an array, it will throw an error.
const x = 12345;
try {
    const obj = JSON.parse(a);
} catch (err) {
    console.log("Error: " + err.message);
}