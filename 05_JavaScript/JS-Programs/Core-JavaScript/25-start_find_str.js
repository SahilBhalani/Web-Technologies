const start_spe = (str) => {
    if(str.length < 4) {
        return false;
    } 

     const front = str.substring(0,4);
     if(front == 'Java') {
        return true;
     } else {
        return false;
     }
}

//log the result
console.log(start_spe("JavaScript"));
console.log(start_spe("Java"));
console.log(start_spe("Python"));