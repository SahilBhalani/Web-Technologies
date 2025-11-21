//* count Vowels
function countVowels(str) {
  const vowelMatches = str.match(/[aeiouAEIOU]/g).length;

  return vowelMatches;
}

console.log(countVowels("Hello World"));
console.log(countVowels("Sahil Bhalani"));
