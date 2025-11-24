function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const numSet = new Set();
    for (let num of arr) {
        const complement = targetSum - num;
        if (numSet.has(complement)) {
            pairs.push([complement, num]);
        }
        numSet.add(num);
    }
    return pairs;
}

console.log(findPairsWithSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));