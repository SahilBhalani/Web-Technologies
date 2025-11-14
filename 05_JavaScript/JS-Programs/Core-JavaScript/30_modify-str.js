//* Modify String Based on Length (First 3 Lowercase/Uppercase)
const upper_lower = (str) => {
    if(str.length < 3){
        return str.toUpperCase();
    }

    const front_part = (str.substring(0,3)).toLowerCase();
    const back_part = str.substring(3, str.length);

    return front_part + back_part;
}

//log the result
console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));