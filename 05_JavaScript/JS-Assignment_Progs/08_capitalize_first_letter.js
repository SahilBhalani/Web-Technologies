function capitalizeLetters(str){

    let array = str.split(" ");
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
    }

    return newArray.join(" ");
   
}

console.log(capitalizeLetters("sahil bhalani"));
console.log(capitalizeLetters("hello world"));