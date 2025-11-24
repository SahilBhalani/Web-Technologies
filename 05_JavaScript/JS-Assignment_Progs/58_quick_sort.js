function quickSort(origArray) {
    if(origArray <= 1){
        return origArray;
    } else {
        let left = [];
        let right = [];
        let pivot = origArray.pop();
        let newArray = [];
        let length = origArray.length

        for (let i = 0; i < length; i++) {
            if(origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }

        return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
}

var ogArr = [3,0,2,5,-1,4,1]
console.log("Original Array: " + ogArr);
var sortedArray = quickSort(ogArr);
console.log("Sorted Array: " + sortedArray);