// * Extract Characters From Strings
truncate_string = function(str, length){
    if((str.constructor === String) && (length > 0)){
        return str.slice(0, length);
    }
};

console.log(truncate_string("Sahil Bhalani",4));