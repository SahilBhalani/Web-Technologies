function arraySorted(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]) {
             return false;
        } 
    }
    return true;
}

let arr1 = [1,2,5,4,5];
let arr2 = [3,1,4,2,5];

console.log(arraySorted(arr1));
console.log(arraySorted(arr2));
