function palindrome(str) {
    for (let i = 0; i < str.length/2; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return "The String is Not Palindrome"
        } else {
            return "The String is Palindrome"
        }
    }
}

console.log(palindrome("mom"));
console.log(palindrome("123"));