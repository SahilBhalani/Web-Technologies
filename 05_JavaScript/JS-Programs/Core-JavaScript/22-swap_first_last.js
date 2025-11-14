const first_last = (str) => {
    if(str.length <= 1) {
        return str;
    }

    const mid_char = str.substring(1, str.length-1);

    return (str.charAt(str.length - 1) + mid_char  + str.charAt(0));
};


//Log the result
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));
console.log(first_last('abcd'));
