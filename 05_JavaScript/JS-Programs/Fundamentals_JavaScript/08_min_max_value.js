//* Min-Max Value of Array with Function
const min_max = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));

//test cases
console.log(min_max([1,2,3])); // return minimum
console.log(min_max([10,20,30], (a,b) => b - a)); //return maximum
console.log(min_max([{name:'kevin' , age:16}, {name:'John', age:20}, {name:"Ani", age: 19}], (a,b) => a.age - b.age)); // return the object eith minimum age