//* Predicate Function Check
const check = (arr, fn = Boolean) => arr.every(fn);

//test cases
console.log(check([4,2,3], x => x > 1));
console.log(check([4,2,3], x => x < 1));
console.log(check([1,2,3]));