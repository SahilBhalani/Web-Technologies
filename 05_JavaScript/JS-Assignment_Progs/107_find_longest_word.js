function findLongestString(str) {
  const words = str.trim().split(/\s+/).filter(word => word.length > 0);    
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestString("Sahil Bhalani"));