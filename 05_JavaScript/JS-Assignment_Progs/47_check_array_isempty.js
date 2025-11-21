function arrayEmpty(arr){
    if(arr.length === 0){
        return true;
    }
    return false;
}

console.log(arrayEmpty([]));
console.log(arrayEmpty([1,2,3]));