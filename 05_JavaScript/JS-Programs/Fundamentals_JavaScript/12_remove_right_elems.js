//* Remove right elements from an array
function remove_right(arr , n = -1) {
    return arr.slice(n);
}

//test cases
console.log(remove_right([1,2,3]));
console.log(remove_right([1,2,3],-1));
console.log(remove_right([1,2,3],-2));
console.log(remove_right([1,2,3],-4));