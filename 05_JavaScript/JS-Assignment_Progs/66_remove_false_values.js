function removeFalse(arr){
    return arr.filter(Boolean);
}

console.log(removeFalse([1,2,undefined,3,null,4,false,8,NaN,0," ",5]));