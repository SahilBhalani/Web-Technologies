//* Remove Left element from an array
function remove_left(arr, n=1) {
    return arr.slice(n);
}

//test cases
console.log(remove_left([1,2,3]));
console.log(remove_left([1,2,3], 1));
console.log(remove_left([1,2,3], 2));
console.log(remove_left([1,2,3], 4));