// * Number to Array of Digits
const convert = n => 
    [...`${n}`]
        .map(i => parseInt(i));

    //Test Cases
    console.log(convert(123));
    console.log(convert(12345));
    console.log(convert(123456789));