function generateArmstrongNumbers() {
    const armstrongNumbers = [];
    for (let num = 1; num <= 1000; num++) {
        let sum = 0;
        const digits = num.toString().length;
        let temp = num;
        while (temp > 0) {
            let rem = temp % 10;
            sum += Math.pow(rem, digits);
            temp = Math.floor(temp / 10);
        }
        if(sum === num) {
            armstrongNumbers.push(num)
        }
    }
    return armstrongNumbers;
}
console.log(generateArmstrongNumbers());