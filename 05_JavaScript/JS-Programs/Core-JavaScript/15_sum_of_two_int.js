//Using arrow function syntax
const sumTriple = (x,y) => {
    //check if the x is equal to y
    if(x == y) {
        return 3 * (x + y);
    } else { 
        return (x + y);
    }
};

console.log(sumTriple(10,20));
console.log(sumTriple(10,10));