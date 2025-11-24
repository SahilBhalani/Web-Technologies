function findFreq(str) {
    let freq = {};

    str.replace(/\S/g, function(l) {
        freq[l] = (isNaN(freq[l]) ? 1 : freq[l] + 1);
    })
    return freq;
}

console.log(findFreq("Sahil Bhalani"));
console.log(findFreq("Hello World"));