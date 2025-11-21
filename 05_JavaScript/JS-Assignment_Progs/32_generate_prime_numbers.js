function generatePrimeNumbers(n) {
    let primeNum = [];
    for (let num = 2; num <= n; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNum.push(num);
        }
    }
    return primeNum;
}
console.log(generatePrimeNumbers(20));
