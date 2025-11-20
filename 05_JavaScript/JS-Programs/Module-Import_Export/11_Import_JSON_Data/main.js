//* This file demonstrate importing and using the JSON data.
// import data from './data.json';
const data = require('./data.json');

//*Accessing properties from the JSON data
console.log(`Name: ${data.name}`);
console.log(`Age: ${data.age}`);
console.log(`Profession: ${data.profession}`);