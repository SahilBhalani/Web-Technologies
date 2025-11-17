//* Filter Specified Values from Array

const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v,i) => !argState.includes(v));

    arr.length = 0;
    pulled.forEach(v => arr.push(v))

    return pulled;
}

//Test Cases
let arr1 = ['a','b','c','a','b','c'];
console.log(pull(arr1, 'a', 'c'));

let arr2 = ['a','b','c','a','b','c'];
console.log(pull(arr2, 'b'));

