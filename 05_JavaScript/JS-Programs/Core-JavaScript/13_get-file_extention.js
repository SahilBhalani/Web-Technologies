//Assing the string 'system.php' to variable filename
filename = 'system.php';

//log the result of extracting the file extention using split and pop
console.log(filename.split('.').pop());

//Reassign the variable to js file
filename = 'abc.js';

console.log(filename.split('.').pop());