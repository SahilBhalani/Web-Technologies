//* Throw Error for Empty String
function validateStringNotEmpty (str) {
    if(str.length === 0){
        throw new Error('Sorry! String is empty!');
    }
}

//ex.
try {
    const str1 = "Hello! World";
    validateStringNotEmpty(str1);

    const str2 = '';
    validateStringNotEmpty(str2);

} catch (error) {
    console.log('Error:\n', error.message);
}