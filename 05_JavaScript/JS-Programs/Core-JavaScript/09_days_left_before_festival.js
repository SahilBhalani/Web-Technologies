//Days Left Before Christmas
const today = new Date();

const cmas = new Date(today.getFullYear(),11,25);

// check if the current date is after december 25th
if(today.getMonth() === 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}

//Calculate the difference and log the result
const one_day = 1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day)) + " Days left until Christmas!");