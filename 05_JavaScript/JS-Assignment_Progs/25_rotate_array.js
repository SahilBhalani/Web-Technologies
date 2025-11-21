function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n;
    let rotatedArr = arr.slice(n - k).concat(arr.slice(0, n - k));
    return rotatedArr;
}

console.log(rotateArray([3,4,5,1,2],2));