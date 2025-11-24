function isArmstrongNumber(num) {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;   
    while (temp > 0) {
        let remainder = temp % 10;
       sum += Math.pow(remainder, digits);
       temp = Math.floor(temp / 10);
    }
    return sum === num;
}
console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(123)); 