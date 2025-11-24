function checkPrime(num) {
    if(num <= 1) {
        return false;
    }

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

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

console.log(checkPrime(7));
console.log(generatePrimeNumbers(100));;