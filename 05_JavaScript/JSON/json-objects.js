//* JavaScript JSON Objects
//JSON is a handy way to share Data. it's easy to both people and computers to understand. In JS JSON helps organize data into simple objects. Let's explore how JSON works and why it's so useful for exchanging information 

const person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

//* Accessing JSON Object Values

let myOrder, i;

//Object is created with name myOrder
myOrder = {
    "name_of_the_product" : "Earbuds",
    "cost" : "799",
    "warranty" : "1 Year +"
};

//Accessing for perticular detail
//from object myOrder

i = myOrder.name_of_the_product;
console.log(i);

//Looping Through JSON Object
let a;
for(a in myOrder){
    console.log(myOrder[a]);
}

//* Converting a JSON Text to a JavaScript Object
//To convert a JSON text to a JavaScript object, you can use the JSON.parse() Method.
const jsonString = '{"name" : "Sahil" , "age" : 21}'
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(jsonObject.age);