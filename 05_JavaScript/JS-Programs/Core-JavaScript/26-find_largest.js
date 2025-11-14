const max_of_three = (x, y, z) => {
    let max_val = 0;

    max_val = (x > y) ? x : y;
    max_val = (z > max_val) ? z : max_val

    return max_val;
}

//log the result
console.log(max_of_three(20,30,50));
console.log(max_of_three(1,1,0));
console.log(max_of_three(-10,-20,0));