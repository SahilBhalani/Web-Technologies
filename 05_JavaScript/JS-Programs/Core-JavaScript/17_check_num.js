const test50 = (x,y) =>  { return ((x === 50) || (y === 50) || (x + y === 50)); }

//log the result
console.log(test50(50,50));
console.log(test50(20,50));
console.log(test50(20,20));
console.log(test50(20,30));