//* Check Numbers in Strict or Soft Increasing Mode
const number_order = (x, y, z) => {
    if (y > x && z > y) {
        return "strict mode";
    } else if( z > y) {
        return "Soft mode";
    } else {
        return "Undefined"
    }
}

//log the result
console.log(number_order(10,15,21));
console.log(number_order(24,22,31));
console.log(number_order(50,21,15));