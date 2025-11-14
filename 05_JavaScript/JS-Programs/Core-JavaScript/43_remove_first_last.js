//* Remove First and Last Characters in String
const without_first_end = (str) => {
    return str.substring(1, str.length -1)
}

// log the result
console.log(without_first_end("javaScript"));
console.log(without_first_end("js"));
console.log(without_first_end("PHP"));