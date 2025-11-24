function firstNonRepeatedChar(str) {
    let array = str.split('');
    let result = '';
    let ctr = 0;
    for (let i = 0; i < array.length; i++) {
        ctr = 0;
        for (let j = 0; j < array.length; j++) {
            if(array[i] === array[j]) {
                ctr++;
            }            
        }
        if (ctr < 2) {
            result = array[i];
            break;
        }
    }
    return result;
}

console.log(firstNonRepeatedChar('abacddbec'));