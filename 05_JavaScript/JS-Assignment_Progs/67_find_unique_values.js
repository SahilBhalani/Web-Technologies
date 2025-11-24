function uniqueValues(arr){
    return [...new Set(arr)];
}

console.log(uniqueValues([1,2,2,3,4,5,5,6,8,8,9,0,0]));