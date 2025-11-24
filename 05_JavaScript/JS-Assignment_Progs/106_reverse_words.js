function reverseWords(sentence) {
  let words = sentence.split(" ");
  words = words.reverse();
  return words.join(" ");
}

console.log(reverseWords("Hello world"));
console.log(reverseWords("JavaScript is fun"));
