function isAnagram(str1, str2) {
    const norm = str => str.toLowerCase().split('').sort().join('');
    return norm(str1) === norm(str2);
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world")); 