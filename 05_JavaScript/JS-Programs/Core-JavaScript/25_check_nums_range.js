const check_nums = (x, y) => {
    return (x >= 50 && x <= 99) || (y >= 50 && y <= 99);
};

//log the result
console.log(check_nums(12,101));
console.log(check_nums(52,80));
console.log(check_nums(15,99));