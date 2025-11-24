function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}


let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log(removeDuplicates(arrayWithDuplicates));
 
