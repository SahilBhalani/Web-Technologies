function findUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
};

console.log(findUnion([1,2,3], [3,4,5]));
console.log(findUnion(['a','b','c'], ['c','d','e']));