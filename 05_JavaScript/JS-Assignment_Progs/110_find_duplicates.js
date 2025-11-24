function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index && arr.lastIndexOf(item) === index);
}


const array = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1];
console.log(findDuplicates(array)); 


