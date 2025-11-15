// * Concatenate Strings with Matching Length
const str_con_cat = (str1, str2) => {
    const m = Math.min(str1.length, str2.length);

    return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

//log the result
console.log(str_con_cat("Sahil", "Bhalani"));
console.log(str_con_cat("Roman", "Doe"));