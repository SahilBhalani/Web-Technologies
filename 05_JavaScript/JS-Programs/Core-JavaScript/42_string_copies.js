//* Create String of Specified Copies
const string_copies = (str,n) => {
    if(n < 0) {
        return false;
    } else {
        return str.repeat(n);
    }
};

//log the results
console.log(string_copies("sahil",5));
console.log(string_copies("abc",0));
console.log(string_copies("abc",-2));