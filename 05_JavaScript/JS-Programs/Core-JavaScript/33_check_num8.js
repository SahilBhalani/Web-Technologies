//* Check if Integer is 8 or Difference/Sum Equals 8
const check8 = (x,y) => {
    if(x == 8 || y == 8){
        return true;
    }

    if(x + y == 8  || Math.abs(x - y) == 8) {
        return true;
    }

    return false;
}

//log the result
console.log(check8(7,8));
console.log(check8(16,8));
console.log(check8(24,32));
console.log(check8(17,18));
console.log(check8(4,4));