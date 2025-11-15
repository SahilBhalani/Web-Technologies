// * Create Array with Middle Elements from Two Arrays
const middle_elems = (a,b) => {
    const newArr = [a[1] , b[1]];

    return newArr;
}

//log the result
console.log(middle_elems([1,2,3], [1,5,6]));
console.log(middle_elems([3,3,3], [2,8,0]));
console.log(middle_elems([3,0,2], [7,8,4]));