//Write a JavaScript program to display the current day and time in the following format.
//Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

//get the date and current time
const today = new Date();

//get the day of the week(0-6)
const day = today.getDay();

//Array of names
const daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday", "Saturday"]

console.log(`Today is: ${daylist[day]}.`);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let prepand = (hour >= 12) ? " PM " : " AM ";

//convert 24-hour to 12-hour format
hour = ( hour >= 12) ? hour - 12 : hour;

//check special case when hour is 0 and it's pm
if(hour === 0 && prepand === ' PM ') {
    //check minutes and seconds are also 0
    if(minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

//check special case when hour is  0 and it's am
if(hour === 12 && prepand === ' AM ') {
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = 'Midnight';
    } else {
        hour =  12;
        prepand = ' AM';

    }
}

//Display
console.log(`Current Time: ${hour}${prepand} : ${minute} : ${second}`);
