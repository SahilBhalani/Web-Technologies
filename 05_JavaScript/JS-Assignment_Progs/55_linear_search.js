function linearSearch(array ,num){
    for (let i=0; i < array.length; i++){
        if(array[i]=== num){
            return i;
        }
    }
    return "Not Found";
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9],5));
console.log(linearSearch([10,20,30,40,50],60));