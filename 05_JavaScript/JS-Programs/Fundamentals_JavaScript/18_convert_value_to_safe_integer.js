//* Convert Value to Safe Integer

const safeInt = num => 
    Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER
));


//Test
console.log(safeInt('5.2'));
console.log(safeInt('5.52'));
console.log(safeInt(Infinity)); 