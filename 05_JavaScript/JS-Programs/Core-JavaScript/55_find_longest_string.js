// * find longest string in a array
const longest_string = (str_ara) => {
    let max = str_ara[0].length; // Initialize max length with the length of the first string
    str_ara.map(v => max = Math.max(max, v.length)); //  Update max by finding the maximum length in the array
    result = str_ara.filter(v => v.length == max); // Filter strings that have the maximum length
    return result;
}

//log the result
console.log(longest_string(['a','aa','aaa','aaaaa','aaaa']));