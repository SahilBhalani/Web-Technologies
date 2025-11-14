//* Concatenate Two Strings Without First Character
const Concatenate = (str1, str2) => {
 str1 = str1.substring(1, str1.length);
 str2 = str2.substring(1, str2.length);

 return str1 + str2;
} 


//log the result
console.log(Concatenate("PHP","JS"));
console.log(Concatenate("A","B"));
console.log(Concatenate("AA","BB"));