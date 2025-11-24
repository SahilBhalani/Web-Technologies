let nums = [1,2,3,4,5];
let reducedNums = (nums) => nums.reduce((acc, curr) => acc + curr, 0);
console.log(reducedNums(nums));