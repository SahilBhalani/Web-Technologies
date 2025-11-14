//* Find Years When Jan 1 is Sunday (2014–2050)
console.log('----------------------------');

//loop through years from 2014 to 2050
for (let year = 2014; year <= 2050; year++) {
    const d = new Date(year, 0 ,1);

    //check if janauary 1st is a sunday (where Sunday corresponds to)
    if(d.getDay() === 0){
        console.log(`1st January is being a Sunday ${year}`);
    }
}

console.log('-----------------------------');
