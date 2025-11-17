function capitalizeThis(text) {
    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);    
    }

    return words.join(" ");
}

const text = "the quick brown golden emergency";

const result = capitalizeThis(text);

console.log(result);