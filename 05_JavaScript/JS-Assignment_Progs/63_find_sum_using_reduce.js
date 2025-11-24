let nums = [10,20,30,,40,50];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Total Sum is: "+ sum);