//* Split Array into Two Groups

const splitted = (arr, filter) => 
    arr.reduce((acc,val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[],[]]);


//test case
console.log(splitted([1,2,3,4], [true, true, false, true]));
console.log(splitted([1,2,3,4], [true,true,true,true]));
console.log(splitted([1,2,3,4], [false, false, false, false]));