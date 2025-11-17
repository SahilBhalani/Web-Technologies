//* Compare Objects for Equivalent Properties

//Define a function that takes two objects as argments
const matches = (obj,source) => 
    //iterate over each key in the source object and check if it exist in object key and value

    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

//test cases
console.log(matches({age:25, hair: 'long', beard:true}, {hair:'long', beard: true}));
console.log(matches({hair: 'long', beard:true}, {age:25,hair:'long', beard: true}));
console.log(matches({hair: 'long', beard:true}, {age:25,hair:'long', beard: true}));