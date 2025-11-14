const pos_neg = (x,y) => {
    return ((x < 0 && y > 0) || (x > 0 && y< 0)); 
}
//log result
console.log(pos_neg(2,2));
console.log(pos_neg(-2,2));
console.log(pos_neg(2,-2));
console.log(pos_neg(-2,-2));