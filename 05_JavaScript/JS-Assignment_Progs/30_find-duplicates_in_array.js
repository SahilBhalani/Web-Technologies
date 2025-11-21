//amke a function to  find duplicates in an array in javascript
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    return Array.from(duplicates);
}

console.log(findDuplicates([1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 5])); 
console.log(findDuplicates([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));