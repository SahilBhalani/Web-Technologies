//* Sort Letters Alphabetically in String
const alpha_sort = (str) => {
    return str.split("").sort().join("");
}

//log the result
console.log(alpha_sort("Sahil Bhalani"));
console.log(alpha_sort("Hello World!"));