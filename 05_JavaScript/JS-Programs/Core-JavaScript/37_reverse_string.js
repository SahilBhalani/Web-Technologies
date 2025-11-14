//* Reverse a Given String
const string_reverse = (str) => {
    return str.split("").reverse().join("");
};

//log the string
console.log(string_reverse("Hello Buddy!"));
console.log(string_reverse("Buddy Buster!"));
console.log(string_reverse("Flame Kaiser!"));