// Example of map()
let numbers = [1,2,3,4,5];
let sqaureNumbers = numbers.map(num => num * num);
console.log("using map(): ", sqaureNumbers);

// Example of filter()
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("using filter(): ", evenNumbers);

// Example of reduce()
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("using reduce(): ", sum);