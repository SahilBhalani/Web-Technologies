// * Extract Middle 3 Characters from Odd-Length String
const middle_three = (str) => {
    if(str.length % 2 == 0) {
        const mid = (str.length + 1) / 2;
        return str.slice(mid-2,mid+1)
    } 
        return str;
}

//log the resultcl
console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('PHP'));
console.log(middle_three('Exercises'));