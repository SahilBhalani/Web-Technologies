//Difference function using arrow function
const difference = (n) => {
    return n <= 13 ? 13 - n : (n-13) * 2;
}

//log the difference
console.log(difference(50));
console.log(difference(10));