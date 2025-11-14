//* Transform Number to Hours and Minutes
const time_converter = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return hours + ":" + minutes;
} 

//log the result
console.log(time_converter(71));
console.log(time_converter(450));
console.log(time_converter(1441));