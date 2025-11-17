// * Decapitalize First Letter of String
const decap = ([first, ...rest], upperRest = false) => 
    first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));

//Test cases
console.log(decap('Sahil Bhalani'));
console.log(decap('Sahil', true));