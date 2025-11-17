//* All Combinations from Array of Numbers

const comb = arr => 
    arr.reduce((a,v) => 
    a.concat(a.map(r => [v].concat(r))), [[]]);

//test cases
console.log(comb([1,2]));
console.log(comb([1,2,3]));
console.log(comb([1,2,3,4]));