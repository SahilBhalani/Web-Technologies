function countWords(str) {
  const words = str.trim().split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

console.log(countWords("Sahil Bhalani"));