function find_factors(num) {
    let factors = [];

    for (let i = 0; i < num / 2; i++) {
        if(num % i === 0) {
            factors.push(i);
        }
    }
    factors.push(num);

    return factors;
}

console.log(find_factors(15));
console.log(find_factors(16));
console.log(find_factors(17));