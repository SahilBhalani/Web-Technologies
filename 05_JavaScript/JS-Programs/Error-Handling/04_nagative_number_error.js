// * Throw Error for Negative Number
function validate_Number(n) {
    if (n < 0) {
        throw new Error('Error: Negative Numbers are not allowed');
    }

    return n;
}

//Test case  
console.log(validate_Number(3));
console.log(validate_Number(-3));