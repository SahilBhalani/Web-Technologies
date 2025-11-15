// * Rotate Elements Left in Array (Length 3)
const rotate_array = arr => {
    return [arr[1],arr[2],arr[0]];
};

//log the result
console.log(rotate_array([1,2,3]));
console.log(rotate_array([0,-1,2]));
console.log(rotate_array([7,6,5]));