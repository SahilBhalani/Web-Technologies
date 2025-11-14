// * Count Vowels in String
const vowel_Count = (str) => {
    return str.replace(/[^aeiou]/g,"").length;
}

//log the result
console.log(vowel_Count("Python"));
console.log(vowel_Count("Sahil Bhalani"));
console.log(vowel_Count("Man Man Man"));