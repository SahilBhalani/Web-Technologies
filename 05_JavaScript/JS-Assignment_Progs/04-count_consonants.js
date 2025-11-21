//* count consonants in a string
function countConsonants(str){
    const vowelCount = str.match(/[aeiouAEIOU]/g).length;
    const consoCount = str.length - vowelCount;

    return consoCount;
}

console.log(countConsonants("Sahil Bhalani"));