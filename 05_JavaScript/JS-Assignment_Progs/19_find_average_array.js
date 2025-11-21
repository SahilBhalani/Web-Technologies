const avgArray = (nums) => {
    const total = nums.reduce((acc, curr) => acc + curr, 0);
    return total / nums.length;
}

console.log(avgArray([10,20,30,40,50]));
console.log(avgArray([45,37,47,13,90]));