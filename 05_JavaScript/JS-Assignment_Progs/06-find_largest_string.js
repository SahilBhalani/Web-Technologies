function findLargestString(str) {
  const words = str.trim().split(/\s+/).filter(word => word.length > 0);    
    let largestWord = "";
    for (let word of words) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
    }
    return largestWord;
}
console.log(findLargestString("Sahil Bhalani"));
