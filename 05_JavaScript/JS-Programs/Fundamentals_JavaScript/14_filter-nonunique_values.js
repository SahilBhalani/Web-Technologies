//* Filter Non-Unique Values in Array
const filter_nonUnique = arr => 
    arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

//test case
console.log(filter_nonUnique([1,2,2,3,4,4,5,6]));
console.log(filter_nonUnique([1,2,3,4]));