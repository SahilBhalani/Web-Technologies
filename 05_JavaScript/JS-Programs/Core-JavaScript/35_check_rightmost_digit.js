//* Check Rightmost Digits of Three Numbers

const same_last_digit = (p, q, r) => {
    
       return  (p % 10 === q % 10) || 
        (q % 10 === r % 10) ||
        (r % 10 === p % 10);
}

//log the result
console.log(same_last_digit(22,32,42));
console.log(same_last_digit(102,32,2));
console.log(same_last_digit(22,20,45));