//* Remove Non-Printable ASCII Chars
const remove_non_ASCII = str => 
    str.replace(/[^\x20-\x7E]/g, '');

//Test Fnction
console.log(remove_non_ASCII('äÄçÇéÉêw3resouröceÖÐþúÚ'));