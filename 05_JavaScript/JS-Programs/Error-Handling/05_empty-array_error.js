//* Throw Error for Empty Array
function validateArrayNotEmpty (arr) {
    if(arr.length === 0) {
        throw new Error('Array is empty!');
    }
}

//Ex,
try{
    const nums1 = [1,2,3,4];
    validateArrayNotEmpty(nums1);

    const nums2 = [];
    validateArrayNotEmpty(nums2);

} catch(error) {
    console.log('Error: ', error.message);
}