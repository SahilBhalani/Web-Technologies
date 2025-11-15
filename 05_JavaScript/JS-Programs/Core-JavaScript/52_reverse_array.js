//* Reverse an Array
const reverse = (arr) => {
    return arr.map((element,idx,arr) => arr[(arr.length - 1) - idx]);
}

//log the result
console.log(reverse([1,2,3]));
console.log(reverse([1,0,-1]));
console.log(reverse([3,2,1]));